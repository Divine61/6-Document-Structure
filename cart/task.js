(function() {
  const buttonAdd = Array.from(document.querySelectorAll(`.product__add`));
  const buttonDec = Array.from(document.querySelectorAll(`.product__quantity-control_dec`));
  const buttonInc = Array.from(document.querySelectorAll(`.product__quantity-control_inc`));
  buttonAdd.forEach(button => {
    button.addEventListener(`click`, () => {
      isProduct(button);
    });
  })
  buttonDec.forEach(button => {
    button.addEventListener(`click`, decProduct);
  })
  buttonInc.forEach(button => {
    button.addEventListener(`click`, incProduct);
  })
}())

function decProduct() {
  const quantityProduct = this.closest(`.product__quantity-controls`).querySelector(`.product__quantity-value`);
  if (quantityProduct.textContent > 1) {
    quantityProduct.textContent--;
  }
}

function incProduct() {
  const quantityProduct = this.closest(`.product__quantity-controls`).querySelector(`.product__quantity-value`);
  quantityProduct.textContent++;
}

function isProduct(button) {
  const cartProduct = Array.from(document.querySelectorAll(`.cart__product`));
  const product = button.closest(`.product`);
  const id = product.dataset.id;
  const image = product.querySelector(`.product__image`).getAttribute(`src`);
  const quantity = parseInt(product.querySelector(`.product__quantity-value`).textContent);
  let findProduct = cartProduct.find(product => product.dataset.id === id);
  if (cartProduct.find(product => product.dataset.id === id)) {
    const currentProduct = findProduct.querySelector('.cart__product-count');
    const currentQuantity = product.querySelector(".product__quantity-value");
    currentProduct.innerText = (+currentProduct.textContent) + (+currentQuantity.textContent);
  } else {
    addProduct(id, image, quantity);
  }
}

function addProduct(id, image, quantity) {
  const cart = document.querySelector(`.cart__products`);
  cart.appendChild(creatProduct(id, image, quantity));
}

function creatProduct(id, image, quantity) {
  const product = document.createElement(`div`);
  product.setAttribute(`class`, `cart__product`);
  product.setAttribute(`data-id`, id);
  product.insertAdjacentHTML(`afterBegin`, `<img class="cart__product-image" src="${image}"></img>`);
  product.insertAdjacentHTML(`beforeEnd`, `<div class="cart__product-count">${quantity}</div>`);
  return product
}