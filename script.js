const ptoggle = document.getElementById("menu-toggle")
const menu = document.getElementById("navigation")
const navigate = document.getElementById("navigate")
const slides = document.getElementsByClassName("slide")
const active = () =>{
    menu.classList.toggle("active")
    // navigate.classList.toggle("active")
    console.log("e don click")
}
ptoggle.addEventListener("click", active)

let slideIndex = 0

const hide = () => {
    for(var i = 0; i < slideIndex; i++){
        slides[i].style.display="none"
    }
}

const showSlides = () => {
    hide ()

    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1
    }
   
    slides[slideIndex -1].style.display="block"
    setTimeout(showSlides , 1000)
}
showSlides ()



