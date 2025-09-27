let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");

let onRegister = (event) => {
    event.preventDefault();
    
    if(nameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || confirmPasswordInput.value === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    if(passwordInput.value !== confirmPasswordInput.value) {
        alert("As senhas não coincidem.");
        return;
    }
    
    window.location.href = "dashboard.html";
}

document.getElementsByClassName("btn-orange")[0].addEventListener("click", onRegister);