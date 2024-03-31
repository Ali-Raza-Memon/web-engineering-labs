document.getElementById("btn").addEventListener("click",function(){

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(!pass || !email){
        alert("Please fills both input fields")
    }
    else if(email ==="aliraza57.cs@gmail.com" && pass === "1234"){
    var message = `Email : ${email}\n Password : ${pass}`;
    localStorage.setItem('email',email);
    localStorage.setItem('password',pass);
    window.location.href="loggedInPage.html"
    alert(message);
    }
})


function myFunction(){
    alert("Hello");
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href="index.html";

};