const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)



let array = [1, 2, 3, 4, 5, 56, 5443]
let number = array.length -1;
for (let i = number; i >= 0; i--)
{
console.log(array[i]);
}

/*for (const number of array)
{
console.log(number);
}*/

const anotherRandomNumber = Math.random();

if (randomNumber > .7 && anotherRandomNumber > .7) {
    alert('Both numbers are greater than .7')
} else if (randomNumber <= .2 || anotherRandomNumber <= .2) {
    alert('Condition has been fulfilled again');
}