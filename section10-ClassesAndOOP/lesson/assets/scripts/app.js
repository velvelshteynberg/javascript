class Product {// each item is called a field
    // title = 'Default'; // value assigned with = and not :. 
    // imageUrl; //these are fields
    // description;
    // price;
  
    constructor(title, image, desc, price) { //the constructor key word lets you create new instances of this product class by passing argumetnts into a product instance new method
      this.title = title;//these are properties
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2> Total: \$${0} </h2>
      <button> Order Now! </button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
  }
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      console.log('inside the add to cart')
      console.log(this);
    }

    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this) )
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
    }
    return prodList;
  }
  

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
   const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    
    renderHook.append(cart);
    renderHookappend(prodListEl)
    }
}
  
const shop = new Shop();
shop.render();


  