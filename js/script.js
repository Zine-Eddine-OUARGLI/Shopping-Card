const total = document.querySelector(".total");
const cards = document.querySelectorAll(".card > .card-body");


Array.from(cards).forEach(element => {
  const quantity = element.querySelector(".quantity");
  const add = element.querySelector(".fa-plus-circle");
  const remove = element.querySelector(".fa-minus-circle");
  const trash = element.querySelector(".fa-trash-alt");
  const heart = element.querySelector(".fa-heart");


 function updateTotal() {
  let totalSum = 0;
  const currentCards = document.querySelectorAll(".card > .card-body");
  currentCards.forEach(card => {
    const priceEl = card.querySelector(".unit-price");
    const quantityEl = card.querySelector(".quantity");

    const price = parseInt(priceEl.textContent);
    const qty = parseInt(quantityEl.textContent);

    totalSum += price * qty;
  });
  total.textContent = totalSum + " $";
}

  add.addEventListener("click", function () {
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateTotal();
  });

  remove.addEventListener("click", function () {
    const newQty = Math.max(0, parseInt(quantity.textContent) - 1);
    quantity.textContent = newQty;
    updateTotal();
  });

  heart.addEventListener("click", function () {
    heart.classList.toggle("liked");
  });

  trash.addEventListener("click", function () {
    element.parentElement.parentElement.remove();
    updateTotal();
  });

  updateTotal();
});

