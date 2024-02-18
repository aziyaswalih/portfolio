const form = document.getElementById("contactForm");

const formname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const nameErr = document.getElementById("err_name");
const emailErr = document.getElementById("err_email");
const valemailErr = document.getElementById("err_valEmail");
const phoneErr = document.getElementById("err_tel");
const messageErr = document.getElementById("err_message");
var validRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (Event) =>{
    if(formname.value ===""){
        Event.preventDefault()
        nameErr.classList.remove("text-danger")
        formname.focus()
    }
    if(email.value ===""){
        Event.preventDefault()
        emailErr.classList.remove("text-danger")
        email.focus()
    }
    if(!validRegex.test(email.value)&&email.value ===!""){
        Event.preventDefault()
        valemailErr.classList.remove("text-danger")
        email.focus()
    }
    if(phone.value ===""){
        Event.preventDefault()
        phoneErr.classList.remove("text-danger")
        phone.focus()
    }
 
    if(message.value ===""){
        Event.preventDefault()
        messageErr.classList.remove("text-danger")
        message.focus()
    }
})