let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let onLogin = (event) => {
    event.preventDefault();
    
    if(emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    window.location.href = "dashboard.html";
}


document.getElementsByClassName("btn-orange")[0].addEventListener("click", onLogin);