
export const params = {
  effect: 'coverflow',
  containerClass: 'conteiner',
  centeredSlide: true,
  spaceBetween: 30,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination ',
    type: 'none',
    clickable: true
  },
  coverflowEffect: {
    rotate: 30,
    stretch: 30,
    depth: 260,
    modifier: 1 ,
    slideShadows: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
}