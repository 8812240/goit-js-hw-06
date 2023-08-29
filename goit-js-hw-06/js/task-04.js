const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

let value = 0;

const updateCounterView = () => {
    counterValue.textContent = value;
};

incrementButton.addEventListener("click", () => {
    value += 1;
    updateCounterView();
});

decrementButton.addEventListener("click", () => {
    value -= 1;
    updateCounterView();
});

updateCounterView(); // Aktualizacja
