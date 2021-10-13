let task1 = document.querySelector('#task-1');
let tas1 = document.querySelector('li:first-of-type');
console.dir(tas1)
tas1.style.backgroundColor = "black";
task1.style.textColor = 'white';

let title = document.getElementsByTagName('title');
console.dir(title);
title.textContent = 'Assignment-Solved';