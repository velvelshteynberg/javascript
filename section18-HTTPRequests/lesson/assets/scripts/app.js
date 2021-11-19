const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');
function sendHTTPRequests(method, url, data) {
    //  const promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open(method, url);
    //     xhr.responseType = 'json';
    //     xhr.onload = function () {
    //         if (xhr.status >= 200 & xhr.status < 300) {
    //             resolve(xhr.response);
    //         } else {
    //             reject(new Error ('Something went seriiously wrong...'))
    //         }
            
    //     };
    //     xhr.onerror = () => { // this type of error only words if there is a network error
    //         console.log(xhr.response);
    //         console.log(xhr.status);
    //     }
    //     xhr.send(JSON.stringify(data));
        
        // }) 
    // return promise;
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        body: data, 
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }).then(response => {
        return response.json(); // this has to be called to return a snapshot of that data
    });
};

async function fetchPosts() {
    const responseData = await sendHTTPRequests(
        'GET',
        'https://jsonplaceholder.typicode.com/posts'
    );
        const listOfPosts = responseData;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
};

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        Title: title,
        body: content,
        userId: userId
    };

    const fd = new FormData(form); //formData automatically parses a form
    // fd.append('title', title);
    // fd.append('body', content);
    fd.append('userId', userId);

    sendHTTPRequests(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        fd
    );

    
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent)
})
createPost('Dummy', 'A dummy post!');

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        console.log(postId);
        sendHTTPRequests(
            'DELETE',
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        event.target.closest('li').remove();
    }

})