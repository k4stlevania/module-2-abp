/* 
    no le agregue persistencia asi que si se actualiza la pagina
    se borran los contactos agregados
*/
const newContactForm = document.getElementById("newContactForm");
const amountToSend = document.getElementById("moneyToSend");


let contactList = document.querySelector(".contactList");
let contactCbuMap = new Map();

let amountInput = document.getElementById("amount");

const alertExists = document.querySelector("#dangerAlert");
const sendMoneyBtn = document.querySelector(".sendMoneyBtn");
let amountInAccount = localStorage.getItem("amountToAdd");

let isActive = false

newContactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contact = Object.fromEntries(formData);
    const newContactItem = document.createElement("li");

    if (!contactCbuMap.has(contact.contactCBU)) {
        contactCbuMap.set(contact.contactCBU, contact)
        for (const con of contactCbuMap.values()) {

            alertExists.classList.add("d-none");
            newContactItem.innerHTML = "";
            newContactItem.className = "list-group-item contactItem";
            newContactItem.textContent = `Nombre: ${con.contactName}, CBU: ${con.contactCBU}, Alias: ${con.contactAlias}, Banco: ${con.bankName}`;
            contactList.appendChild(newContactItem);

            const allContacts = document.querySelectorAll(".contactItem");

            allContacts.forEach((item) => {
                item.addEventListener("click", () => {
                    if (!isActive) {
                        item.classList.add("active");
                        isActive = true
                    } else {
                        item.classList.remove("active");
                        isActive = false
                    }
                })
            })
        }
    } else {
        alertExists.textContent = `El usuario con CBU: ${contact.contactCBU} ya existe`
        alertExists.classList.remove("d-none")
    }

})

amountToSend.addEventListener("submit", (e) => {
    e.preventDefault();
})

sendMoneyBtn.addEventListener("click", () => {
    if (isActive) {
        if (parseInt(amountInput.value) <= parseInt(amountInAccount)) {
            let amountAfterTransaction = parseInt(amountInAccount) - parseInt(amountInput.value);
            localStorage.setItem("amountToAdd", amountAfterTransaction);
            setTimeout(() => {
                window.location.href = "../html/menu.html"
            }, 1000)
        } else {
            alertExists.textContent = "No hay saldo suficiente";
            alertExists.classList.remove("d-none");
        }
    } else {
        alertExists.textContent = "Por favor agrega o selecciona un contacto";
        alertExists.classList.remove("d-none");
    }
})









