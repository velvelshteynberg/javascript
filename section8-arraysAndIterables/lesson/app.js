/*const numbers = [1, 2, 3,];

/*const moreNumbers = new Array('hi', 'welcome!');

const aray = Array('great');

const yetMoreNumbers = Array.of(2,3)*/

/*const moreNumbers = Array.from('greatness');
console.log(moreNumbers);

const hobbies = ['sports']
hobbies.push('reading'); //adds element at the end of the array
hobbies.unshift('playing'); //adds element at the beginning of all the elements
hobbies.pop(); //removes last items of array
hobbies.shift();// removes first item of array
hobbies[1] = 'coding'; // changed index 1 to coding
hobbies[79] = 'practicing'; //this adds something to that position and all items in between are undefined but do exist

hobbies.splice(0, 0, '14');*/

/*const testResults = [1, 5.3, 1.5, 10.99];

const storedResults = testResults.concat([3.55]);
console.log(storedResults)

console.log(testResults.indexOf(10.99));

console.log(testResults.includes(5.3));*/

const prices = [8,1, 2, 3]
const tax = 0.19;

/*prices.forEach((price, index, prices) => {
    const object = { index: index, adjustedPrice: price * (1 + tax) };
    taxAdjustedPrices.push(object);
});*/

/*const taxAdjustedPrices = prices.map((price, index, prices) => {
    const object = { price: (price * (1 + tax)) };
    return object;
})*/

/*const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const sum = originalArray.map((price) => {
    return price.price;
}).reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0)


console.log(originalArray.filter(object => object.price > 10.98).map(object => object.price).reduce((previousValue, currentValue) => {
     return previousValue + currentValue;
}, 0));
console.log(sum);*/

/*const data = ' new york; 10.99; 2000'
const transformedData = data.split(';');
console.log(transformedData);

const nameFragments = ['velvel', 'shteynberg'];
console.log(nameFragments.join(' '))

.reduce()*/
const nameFragments = ['velvel', 'shteynberg'];
const otherNameFragments = ['Devora'];
console.log([...nameFragments]) //this becomes a copy and not a reference value

