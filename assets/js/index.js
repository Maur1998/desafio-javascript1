// Elementos de DOM
const price = document.getElementById("precio-inicial");
const amount = document.querySelector(".cantidad");
const btnDecrease = document.querySelector("#btn-decrease");
const btnIncrease = document.querySelector("#btn-increase");
const total = document.querySelector(".valor-total");

// Métodos /Funciones

const priceValue = Number(price.innerHTML);

const decrese = () => {
  if (Number(amount.innerHTML) <= 0) {
    return (amount.innerHTML = 0);
  } else {
    const amounValue = Number(amount.innerHTML);
    amount.innerHTML = amounValue - 1;
    total.innerHTML = `${priceValue * amount.innerHTML}`;
  }
};

const increase = () => {
  const amounValue = Number(amount.innerHTML);
  amount.innerHTML = amounValue + 1;
  total.innerHTML = `${priceValue * amount.innerHTML}`;
};

// Eventos
btnDecrease.addEventListener("click", decrese);
btnIncrease.addEventListener("click", increase);
