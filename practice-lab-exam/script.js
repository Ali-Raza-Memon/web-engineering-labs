const loginBtn = document.getElementById("btn");
const userInput = document.getElementById("username");
const passInput = document.getElementById("pass");

loginBtn.addEventListener("click",function(){

    const message = `username is ${userInput} and password is ${passInput}`;
    alert(userInput.value);
})

