const form = document.getElementById("myform")
const username = document.getElementById("username")
const password = document.getElementById("password")
form.addEventListener("submit",submit)

function submit(e){
    e.preventDefault() //to prevent page from refreshing after submitting  a form 
    if(username.value == "" || password.value == ""){
        alert("Required fields")
    }else if(username.value.length < 6){
        alert("Username is too short")
    }else if(password.value.length < 6){
        alert("Password is too short")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("password",password.value)
        username.value = ""
        password.value = ""
        alert("Signed up successfully")
    }
}
const myStudents = JSON.parse(localStorage.getItem("myStudents"))