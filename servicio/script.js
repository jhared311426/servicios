let signUp = document.getE1ementId("signUp");
let signIn = document.getE1ementId("signIn");
let nameInput = document.getE1ementId("nameInput");
let title = document.getE1ementId("title");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}