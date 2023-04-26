/*-------- HEADER HIDE AND SHOW --------*/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
  const currentScrollPos = window.pageYOffset; // 스크롤에 따라 위치 읽어줌
  if(currentScrollPos > 150){
    if(prevScrollpos > currentScrollPos){
       // Header 나타남
       header.style.top = 0;
    } else {
       // Header 사라짐
       header.style.top = -100 + '%';
    }
    prevScrollpos = currentScrollPos; // 스크롤 올릴경우 생각해 재할당 해줘야함. 마우스 이동 후 스크롤 위치 값 재할당
  } else {

  }
});

/*-------- BEST ITEMS SLIDE --------*/
const bestArtSwiper = new Swiper(".best-image-wrapper .swiper", {
  slidesPerView: 4,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
