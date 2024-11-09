const body1 = document.querySelector("body")
        header = document.querySelector("header")
        nav = document.querySelector("nav");
        modeToggle = document.querySelector(".dark-light")
        searchToggle = document.querySelector(".searchtoggle")


        modeToggle.addEventListener("click" , ()=>{
        modeToggle.classList.toggle("active")
        body1.classList.toggle("dark")
        })

        searchToggle.addEventListener("click" , ()=>{
        searchToggle.classList.toggle("active")
        })