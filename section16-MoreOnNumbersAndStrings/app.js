console.log('greatness')
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) ;
}

console.log(randomIntBetween(1.44, 4443234))

function productDescription(string, productName, productPrice) {
    console.log(string);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if (productPrice > 20) {
        priceCategory = 'fair';
    }
    return `${string[0]}${productName}${string[1]}${priceCategory}`
}
const prodName = 'Js';
const prodPrice = 95.66;
//Tagged template
const product = productDescription`The name is ${prodName} and the price is ${prodPrice}`;// all non dynamic parts get passed in as first argument and become an array of string broken by the ${} syntax and each dynamic argument gets passed on as the second and third argument
console.log(product)

//with regular expressions you try to find basic patterns in strings
const regex = /(h|H)ello/; 
console.log(regex.test('hello')
)

const regex2 = /.ello/ //the . means that you dont care for the first letter
console.log(regex2.test(' ello'));

const emailRegex = /^\S+@\S+\.\S/; //^ means start from left. S means string. \ means escape from regular meaning
console.log(emailRegex.test('l@v.com'));
console.log(emailRegex.test('v@vcom'));

