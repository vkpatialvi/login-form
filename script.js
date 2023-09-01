const box = document.querySelector(".box");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () =>{
    box.classList.add('active');
}

loginLink.onclick = () =>{
    box.classList.remove('active');
}