// $().fancybox({
//   selector: '[data-fancybox="images"]',
//   thumbs: {
//       // Показывать превью
//       autoStart: false,
//   },
//   keyboard: true,
//   buttons: [
//       // Показывать кнопку закрытия модалки
//       "close"
//   ],
//   // Эффект анимации при перелючении
//   transitionEffect: "zoom-in-out",
//   // Зацикливать превью
//   loop: true,
// });
// document.addEventListener("DOMContentLoaded", function () {
let prevScrollpos = window.pageYOffset;
var isSafari = window.safari !== undefined;
// if (isSafari){
//   document.querySelector('.btn_fav img').style.paddingTop = '3.6%';
// } else {
//   document.querySelector('.btn_fav').style.padding = '21px 22px 20px 22px';

// }
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if(window.scrollY==0){
    document.querySelector('.m_logo').style.borderTopLeftRadius = '10px';
    document.querySelector('.m_logo').style.borderBottomLeftRadius = '0px';
    document.querySelector('.btn_prfl').style.borderTopRightRadius = '10px';
    document.querySelector('.btn_prfl').style.borderBottomRightRadius = '0px';
    document.querySelector('.PreHolder').style.top = '0';
    document.querySelector('.new_nav').style.top = '50px';
    document.querySelector('.main_area').style.top = '50px';


  } 
  // Проверяем, что прокрутка больше 20 пикселей и это не загрузка страницы
  if (currentScrollPos > 0 || prevScrollpos === 0) {
    if (prevScrollpos > currentScrollPos) {
      // Скрываем PreHolder при прокрутке вниз
      document.querySelector('.PreHolder').style.top = '0';
      if (isSafari){
        document.querySelector('.new_nav').style.top = '50px';
      }
      else {
      document.querySelector('.new_nav').style.top = '50px';
      }
      
    } else {
      // Показываем PreHolder при прокрутке вверх
      document.querySelector('.PreHolder').style.top = '-48px'; // высота PreHolder
      document.querySelector('.new_nav').style.top = '0';
      document.querySelector('.main_area').style.top = '11px';
      document.querySelector('.m_logo').style.borderTopLeftRadius = '0px';
      document.querySelector('.m_logo').style.borderBottomLeftRadius = '10px';
      document.querySelector('.btn_prfl').style.borderTopRightRadius = '0px';
      document.querySelector('.btn_prfl').style.borderBottomRightRadius = '10px';

      
    }
  }

  prevScrollpos = currentScrollPos;
};
// });
//

