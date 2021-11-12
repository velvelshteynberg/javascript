const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done');
    }, duration);
  });
  return promise;
}

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;
for (let i = 0; i < 1000000; i++){
  result += i;
}
console.log(result);


let promis = new Promise((resolve, reject) => {
  if (!false) {
  reject('FALSE');
  } else {
resolve('SUCCESS');
  }
  
  
})
 
promis.then(message  => {
  console.log(message);
}).catch(message => {
  console.log(message);
})


const theLocation = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(success => {
    resolve(success);
  }, failure => {    
    reject(failure);
  });
})

theLocation
  .then(message => {
    console.log(message)
    return message
  })
  .then(message => {
    return message.timestamp;
  })
  .then(message => {
    console.log(message.toString().length);
  })
  .catch(err => console.log(err.message))