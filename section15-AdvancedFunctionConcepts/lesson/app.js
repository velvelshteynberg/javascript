function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(.19);
const calculateIncomeTaxAmount = createTaxCalculator(.25);

console.log(calculateVatAmount(1000));


function powerOf(x, n) {
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(13, 4));


const person = {
    name: 'velvel', 
    friends: [
        {
    name: 'sam'
}, 
        {
    name: 'victor'
},  {     
    name: 'max',
    friends: [
        {
            name: 'chris',
            friends: [{ name: 'manuel' }, { name: 'vicky'}]
        }
]
}
]
}
 
function printFriends(array) {
    const friendsArray = [];

    if (!array.friends) {
        return [];// dont fully understand why i have to return [] and why just return isnt enough 
    }

    for (const friend of array.friends) {
        friendsArray.push(friend.name);
        friendsArray.push(...printFriends(friend));
    }
    return friendsArray;
}

console.log(printFriends(person));