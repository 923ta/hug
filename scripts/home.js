const mySwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 7000,
  effect: 'fade',
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});