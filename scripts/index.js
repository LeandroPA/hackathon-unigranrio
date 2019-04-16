var slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-imagem");
    let legenda = document.getElementById("slide-legenda");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }


    if (slideIndex >= slides.length) {
        slideIndex = 0
    } 

    slides[slideIndex].style.display = "block"; 
    legenda.innerText = slides[slideIndex].alt;
    
    slideIndex++;

    setTimeout(showSlides, 5000);
}