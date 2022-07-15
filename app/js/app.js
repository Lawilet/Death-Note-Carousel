import $ from 'jquery'
import Swiper from 'swiper/swiper-bundle'
window.jQuery = $
window.$ = $
document.addEventListener('DOMContentLoaded', () => {
  
  const swiper = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.showcase-navigation__next',
      prevEl: '.showcase-navigation__prev'
    }
  })
  $('video')[0].playbackRate = 3

})
