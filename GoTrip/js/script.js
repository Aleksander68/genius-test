new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoHeight: true,
  slidesPerView: 2.5,
  spaceBetween: 30,
});
AOS.init();
