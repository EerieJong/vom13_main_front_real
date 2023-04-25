/* ---------- Best Items Slide ---------- */
const swiper = new Swiper('.best-image-wrapper .swiper', {
  slidesPerview: 4,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});