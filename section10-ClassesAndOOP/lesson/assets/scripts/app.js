class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart{
  items = [];


  get totalAmount() {
    const sum = this.items.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0)
    return sum;
  }

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2> Total: $${this.totalAmount} </h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2> Total: $${0} </h2>
    <button> Order Now! </button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2'); //you can add new properties to a class anywhere in the class
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  
  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src = '${this.product.imageUrl}' alt = '${this.product.title}' >
        <div>
          <h2>${this.product.title}</h2>
          <h3> $${this.product.price} </h3>
          <p> ${this.product.description} </p>
          <button> Add to cart </button>
        </div>
      </div>
    `;
    const addToCart = prodEl.querySelector('button');
    addToCart.addEventListener('click', this.addToCart.bind(this))
    return prodEl;          
  }
}
  
class ProductList { 
  products = [
    new Product(
      'A pillow',
      '',
      'A very soft pillow',
      19.99
    ),
    new Product(
      'A carpet',
      '',
      'A pretty nice carpet',
      145.99
    )
  ];

  constructor() { }
  
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const product = new ProductItem(prod);
      const productItem = product.render();
      prodList.append(productItem)
    }
    return prodList; 
  }
}

class Shop {


  render() {
    const renderHook = document.getElementById('app');
    
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();

    const productList = new ProductList;
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);


  }
}


class App {
  static cart;

  static init() {
    const shop = new Shop;
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
