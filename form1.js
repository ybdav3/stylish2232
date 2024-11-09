const form1 = document.getElementById("myform1")
const password1 = document.getElementById("password1")
const fullname = document.getElementById("fullname")
const phonenumber = document.getElementById("phonenumber")
const repassword = document.getElementById("re-password")
const email = document.getElementById("email")
form1.addEventListener("submit", submit1)


function submit1(e){
    e.preventDefault() //to prevent page from refreshing after submitting  a form 
    if(fullname.value == "" || password1.value == ""){
        alert("Required fields")
    }else if(password1.value.length < 6){
        alert("Password is too short")
    }else{
        localStorage.setItem("password1", password1.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("fullname", fullname.value)
        localStorage.setItem("phonenumber", phonenumber.value)
        localStorage.setItem("re-password", repassword.value)
        password1.value = ""
        email.value = ""
        fullname.value = ""
        phonenumber.value = ""
        repassword.value = ""
        alert("Signed up successfully")
    }
}
const myStudent1 = JSON.parse(localStorage.getItem("myStudent1"))
// localStorage.setItem("email", email)
// localStorage.setItem("password1", password1)
// localStorage.setItem("phonenumber", phonenumber)
// localStorage.setItem("fullname", fullname)
// localStorage.setItem("re-password", repassword) 