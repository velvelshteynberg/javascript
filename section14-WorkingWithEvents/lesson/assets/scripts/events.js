const button = document.querySelector('button');

// const buttonClickHandler = (event) => {
//     console.log('clicked');
//     // event.target.disabled = true;
//     console.log(event);
// };



// buttons.forEach(btn => {
//    btn.addEventListener('mouseenter', buttonClickHandler);
// })
// // setTimeout(() => {
// //     button.removeEventListener('click', buttonClickHandler);
// // }, 2000); // you have to use a constant that holds the function and if you bind it then it also is 2 different events 


// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('form submitted');
    console.log(event);
})

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('clicked div');
    console.log(event);
});
    
button.addEventListener('click', function(event){
    event.stopPropagation(); // prevents bubbling up
    event.stopImmediatePropagation(); //stops all evnet listeners on the same element
    console.log('clicked button');
    console.log(event);
    console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    // console.log(event.currentTarget); // current target is not element that you actually added the listener too
   // event.target.classList.toggle('highlight');  // this is called event delegation 
    event.target.closest('li').classList.toggle('highlight');;
    //form.submit();
    console.log(this);
});




