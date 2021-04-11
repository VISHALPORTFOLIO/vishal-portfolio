<<<<<<< HEAD
/*---------toggle style switcher-----------*/ 

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*--------------theme colors---------------*/ 
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){    
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// checking if 'color' key exists

if(localStorage.getItem("color") !== null){
    changeColor();
}

/*---------------- theme light and dark mode ----------------*/ 
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",() =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
    updateIcon();
})

function themeMOde(){
    // checing if 'theme' key exists
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
        }
    }
    updateIcon(); 
}
themeMOde();

function updateIcon(){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}
=======
/*---------toggle style switcher-----------*/ 

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*--------------theme colors---------------*/ 
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){    
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// checking if 'color' key exists

if(localStorage.getItem("color") !== null){
    changeColor();
}

/*---------------- theme light and dark mode ----------------*/ 
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",() =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
    updateIcon();
})

function themeMOde(){
    // checing if 'theme' key exists
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
        }
    }
    updateIcon(); 
}
themeMOde();

function updateIcon(){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}
>>>>>>> 8cfc8e77b69982cce84f6daa8c9d0be9b75dce9c
