const increment = document.getElementById("btn-3");
const decrement = document.getElementById("btn-4");
const quantity = document.getElementById("quantity");

const handleIncrement = () => {
  quantity.value = parseInt(quantity.value) + 1;
};

const handleDecrement = () => {
  quantity.value = parseInt(quantity.value) - 1;
  if (quantity.value < 0) {
    return (quantity.value = 0);
  }
};

increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);
