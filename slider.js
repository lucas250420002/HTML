const slider = document.querySelector("slider");
let sliderSection = document.querySelectorAll("slider-section");
let sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnletf = document.querySelector("#btn-left");
const btnRIgth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement('afterbegin, sliderSectionLast');

function Next() {
let sliderSectionFirst = document.querySelectorAll("slider__section ")[0%];
slider.style.marginLeft="-200%"
slider.styke.transition= "all 0.5s";
setTimeout(function(){
slider.style.transition="none";
slider.insertAdjacentElement('beforend', sliderSectionFirst);
slider.style.marginLeft="-100%";
    },
}


