document.querySelector("#amountInAcc").textContent = localStorage.getItem("amountToAdd");

const depositBtn = document.querySelector(".depositBtn");
const sendMoneyBtn = document.querySelector(".sendMoneyBtn");
const transactionBtn = document.querySelector(".transactionBtn");

let leyenda = document.querySelector("#leyenda");

function btnRedirection(btn){
    let btnText = btn.textContent;
    leyenda.classList.remove("d-none");
    leyenda.textContent += ` ${btnText}`;
    
    if(btnText == "Depositar"){
        setTimeout(() => {
            window.location.href = "../html/deposit.html"
        }, 1000)
    }else if(btnText == "Enviar Dinero"){
        setTimeout(() => {
            window.location.href = "../html/sendmoney.html"
        }, 1000)
    }else(
        setTimeout(() => {
            window.location.href = "../html/transactions.html"
        }, 1000)
    )
}
depositBtn.addEventListener("click", () => {
    btnRedirection(depositBtn);
})
sendMoneyBtn.addEventListener("click", () => {
    btnRedirection(sendMoneyBtn);
})
transactionBtn.addEventListener("click", () => {
    btnRedirection(transactionBtn);
})

