const menu = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav ');
const arJAY = document.querySelector(".arjay");

menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    nav.classList.toggle("open");
    nav.style=("z-index:999");
    nav.style=("transition:.5s ease");
    arJAY.classList.toggle("show");
});

const headerclose = document.querySelector('.header__nav .close');
const headernav = document.querySelector('.header__nav');
const jay = document.querySelector(".arjay");

headerclose.addEventListener("click", () =>{
    headerclose.classList.toggle("open");
    headernav.classList.toggle("open");
    jay.classList.toggle("show");
});


const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3000,
    },
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        400: {
            autoplay: {
                delay: 3000,
              },
        },
    }
     
   });

   const drop_down = document.querySelectorAll(".drop__down .li__head")
    drop_down.forEach((dropd) => {
        dropd.addEventListener("click", () => {
            dropd.nextElementSibling.classList.toggle("open");
            dropd.querySelector("i").classList.toggle("open");
            dropd.parentElement.classList.toggle("active");
        }); 
    });