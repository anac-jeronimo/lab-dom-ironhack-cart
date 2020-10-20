// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subTotalPrice = price * quantity;
  console.log(subTotalPrice);
  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice +=updateSubtotal(products[i]);
  } console.log(totalPrice);

  // ITERATION 3
  let totalPriceElement = document.querySelector("#total-value span");
  totalPriceElement.innerHTML = totalPrice; 
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i= 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeProduct(this));
    
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
});
