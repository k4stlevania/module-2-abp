
document.querySelector("#sendMoneyForm").addEventListener("submit", (e) => {
    e.preventDefault();
})

const depositBtn = document.querySelector(".depositBtn");

/* se inicia en cero si amountToAdd aun no se ha creado al localStorage */
let amount = parseInt(localStorage.getItem("amountToAdd") || "0");

depositBtn.addEventListener("click", () => {
    const amountInput = parseInt(document.querySelector("#inputDinero").value);

    amount += amountInput;
    localStorage.setItem("amountToAdd", amount)
    
    window.location.href = "../html/menu.html";
})