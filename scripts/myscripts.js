
window.addEventListener('load', function () {


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

$(document).ready(function(){ 
	const slider = document.querySelector('.scroll-prom');
	let isDown = false;
	let startX;
	let scrollLeft;
	
	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 1.1; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	//   console.log(walk);
	});
	function updateText() {
		var linkCallB = document.getElementById("fmobc");
		var linkMobT = document.getElementById("fmobt");
		var linkMobF = document.getElementById("fmobf");


		if (window.innerWidth < 768) {
			linkCallB.innerHTML = '<li>Обр. звонок</li>';
			linkMobT.innerHTML = '<li>Телефон</li>';
			linkMobF.innerHTML = '<li>Связаться</li>';
			
			
		} else {
			linkCallB.innerHTML = "<li>Обратный звонок</li>";
			linkMobT.innerHTML = '<li>+7(999)999-99-99</li>';
			linkMobF.innerHTML = '<li>Связаться с нами</li>';


		}
	}
	
	// Call the updateText function initially to set the initial text
	// updateText();
	
	// Add an event listener to update the text when the window is resized
});

  //....
});