const transactions = [
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'CJ Cherryh',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XS Doodad', price: -0.50 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Basic Gadget', price: -2.00 },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Frederik Pohl',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Clarke Computing',
      items: [
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Neal Stephenson',
      items: [
        { name: 'kilobyte', price: 1024.00 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        {name: 'Bit', price: 1.125},
      ]
    }
];
  
//question 1
let sales = 0;
transactions.forEach(transaction => {
    if (transaction.type === 'sale') {
        sales++
    }
});
console.log(sales)

//question 2
let purchase = 0;
transactions.forEach(transaction => {
    if (transaction.type === 'purchase') {
        purchase++
    }
});
console.log(purchase)

//question 3
let cash = 0;
transactions.forEach(transaction => {
    if (transaction.paymentMethod === 'cash') {
        cash++
    }
});
console.log(cash)

//question 4
let number = 0;
transactions.forEach(transaction => {
    if (transaction.type === 'purchase' && transaction.paymentMethod === 'credit') {
        number++
    }
});
console.log(number)

//question 5
const vendors = [];
transactions.forEach((transaction) => {
    if (transaction.vendor) {
        vendors.push(transaction.vendor)
    }
})
console.log(vendors);

//question 6
const customers = [];
transactions.forEach((transaction) => {
    if (transaction.customer) {
        if (!customers.includes(transaction.customer)) {
                   customers.push(transaction.customer)
        }
 
    }
})
console.log(customers)

//question 7
const bigSpendors = [];
transactions.forEach(transaction => {
    if (transaction.type === 'sale' && transaction.items.length >= 5) {
        object = {
            name: transaction.customer,
            numberOfItems: transaction.items.length
        }
        bigSpendors.push(object)
    }
})
console.log(bigSpendors);

//question 8
const firstSaleTransaction = [];
transactions.forEach
    (transaction => {
        if (transaction.type === 'sale') {
          firstSaleTransaction.push(transaction)
        }   
    })
console.log(firstSaleTransaction);
let sum = 0;
firstSaleTransaction[4].items.forEach(item => {
    sum = sum + item.price;
})
console.log(sum);

//question 9
const allSaleTransaction = [];
transactions.forEach
    (transaction => {
        if (transaction.type === 'sale') {
            allSaleTransaction.push(transaction)
        }   
    })
console.log(firstSaleTransaction);
let total = 0;

for (const item of allSaleTransaction) {
    item.items.forEach(transaction => {
        total += transaction.price;
    })
}
console.log(total);

//question 10
let netProfit = 0;

transactions.forEach(transaction => {
  if (transaction.type === 'sale') {
    transaction.items.forEach(object => {
      netProfit += object.price
    })
  } else if (transaction.type === 'purchase') {
    for (const object in transaction) {
      for (const item in object.items) {
        for (const price in item) {
          newProfit -= item.price;
        }
      }
    }
  }
})

console.log(netProfit);