// boton whatsapp
const listamenu = document.querySelector(".listamenu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const oneMenuBtn = document.querySelector(".enlacemenu1");

const segundo = document.querySelector(".clasemenu2");
const tercero = document.querySelector(".clasemenu3");
const cuarto = document.querySelector(".clasemenu4");
function toggleMenu(){

    listamenu.classList.toggle("menu_opened");

}

openMenuBtn.addEventListener("click" , toggleMenu);
closeMenuBtn.addEventListener("click" , toggleMenu);
oneMenuBtn.addEventListener("click" , toggleMenu);
segundo.addEventListener("click" , toggleMenu);
tercero.addEventListener("click" , toggleMenu);
cuarto.addEventListener("click" , toggleMenu);
// slider

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnleft = document.querySelector('#btn-left');
const btnright = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%'
    }, 500)
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll('.slider__section')
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%'
    }, 500)
}

btnright.addEventListener('click', function(){moverDerecha();});

btnleft.addEventListener('click', function(){moverIzquierda();});

/*SEGUNDO SLIDER*/
window.addEventListener('load', function(){

    new Glider(document.querySelector('.carousel__lista'),{
    
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.caroussel__indicadores',
        arrows: {
    
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 77 5px
              breakpoint: 1427,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1430,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
              }
            }
          ]
    });
    
    }
    );