class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  
  addToCart() {
    console.log(this);
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
    addToCart.addEventListener('click', this.addToCart.bind(this.product))
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
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul')
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const product = new ProductItem(prod);
      const productItem = product.render();
      prodList.append(productItem)
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
