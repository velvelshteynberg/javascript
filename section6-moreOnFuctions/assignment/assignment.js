/*function sayHello(name) {
  console.log('Hi ' + name);
}*/
console.log('greatness');
const sayHello = (name, phrase = 'Hello') => {
  console.log(phrase + name);
};

const sayingHello = () => {
  console.log('Hello Velvel');
};

const sayingHello3 = name => 'hello' + name;

const checkInput = (cb, ...string) => {
  let empty = false;
  for (const elem of string) {
    if (!elem) {
      empty = true;
      break;
    }
  }

  if (!empty) {    
    cb()
  }
};

const message = () => console.log('All the strings are not empty');

checkInput(message, 'asdfa', 'asdfad', 'greatest','a', 'asdfasdfadsfasfdsa')