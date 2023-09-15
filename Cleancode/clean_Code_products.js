let products = [
  { productId: 1, name: 'Laptop', price: 999 },
  { productId: 2, name: 'Smartphone', price: 599 },
  { productId: 3, name: 'Headphones', price: 199 },
];

function getProductById(id) {
  for (let product of products) {
    if (product.productId === id) {
      return product;
    }
  }
  return null;
}

function addProduct(name, price) {
  let maxId = 0;
  for (let product of products) {
    if (product.productId > maxId) {
      maxId = product.productId;
    }
  }
  products.push({ productId: maxId + 1, name: name, price: price });
}

function listAllProducts() {
  for (let product of products) {
    console.log(product.name + ' costs ' + product.price + '€');
  }
}

let product1 = getProductById(2);
console.log(product1);
addProduct('Tablet', 399);
listAllProducts();
