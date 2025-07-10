
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let body = document.querySelector(`body`)

let color = ()=>{
  body.style = `background: #ADB0B0;
background: linear-gradient(90deg, rgba(173, 176, 176, 1) 38%, rgba(225, 225, 225, 1) 57%);`
}
let colo = ()=>{
  body.style = `background: #F4A764;
background: linear-gradient(90deg, rgba(244, 167, 100, 1) 22%, rgba(248, 187, 135, 1) 45%, rgba(255, 222, 194, 1) 83%);`
}