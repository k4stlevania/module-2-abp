
document.getElementById("loginForm").addEventListener("submit", (e) =>{
    e.preventDefault();
})

const passwordRegex = /^(?=(?:.*[a-z]){1,})(?=(?:.*[0-9]){1,}).{8,32}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const submitLoginBtn = document.querySelector(".formBtn");


submitLoginBtn.addEventListener("click", () =>{
    let loginEmail = document.querySelector("#emailInput");
    let loginPass = document.querySelector("#formPassword");
    
    const emailValido = emailRegex.test(loginEmail.value);
    const passValida = passwordRegex.test(loginPass.value);

    if(emailValido && passValida){

        [loginEmail, loginPass].forEach(el => el.classList.add("is-valid"));
        document.querySelectorAll(".invalid-feedback").forEach((d) => {
            d.remove();
        });
        setTimeout(() =>{
            window.location.href = "../html/menu.html"
        }, 1500);
    }
    else{
        if(!emailValido && !passValida){
            [loginEmail,loginPass].forEach(el => el.classList.add("is-invalid"))
        }  
        else if(!emailValido){
            loginEmail.classList += ` is-invalid`;
        }else if(!passValida){
            loginPass.classList += ` is-invalid`
        }
    }   
})

