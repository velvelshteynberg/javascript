class Product { // each item is called a field
    // title = 'Default'; // value assigned with = and not :. 
    // imageUrl; //these are fields
    // description;
    // price;

    constructor(title, image, desc, price) { //the constructor key word lets you create new instances of this product class by passing argumetnts into a product instance new method
        this.title = title; //these are properties
        this.imageUrl = image,
        this.description = desc,
        this.price = price
    }
} 

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
        const product = document.createElement('li');
        product.innerHTML = `
            <div class = 'item'>
                <img class = 'product-item img' src= '${this.product.imageUrl}' alt= '${this.product.title}'>
                <div class = 'product-item__content'>
                    <h2 class = 'product-item h2'>${this.product.title}</h2>
                    <h3 class = 'product-item h3'>$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                </div>
            </div>
        `;
        return product;
    }
}
class ProductList {
    products = [new Product(
        'A pillow',
        'data:image/jpeg;base64,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',
        19.99,
        'A very soft pillow'
    )         // new is a keyword that creates a new object
    ,
    new Product(
        'A carpet',
        'data:image/jpeg;base64,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',
        89.99,
        'A very soft carpet'
        )];
    
    constructor() { }
    
    render() {const renderHook = document.getElementById('app');
    
        prodList.append(product);
    }
    renderHook.append(prodList);}
}
const productList = {
    products: [
                // new is a keyword that creates a new object
    ],
    render() {
        
    }
};
const productList = new ProductList();
productList.render();