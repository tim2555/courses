var tabNavs = document.querySelectorAll(".benefits__btn");
var tabPanes = document.querySelectorAll(".benefits__content");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("benefits__btn__active");
        tabPanes[j].classList.add("benefits__content__active");
      } else {
        tabNavs[j].classList.remove("benefits__btn__active");
        tabPanes[j].classList.remove("benefits__content__active");
      }
    };
  });
}

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".meet__arrow_next",
		prevEl: ".meet__arrow_prev",
	},
});




document.querySelector('.burger').onclick = function (){
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.header__list').classList.toggle('active');
};

document.querySelector('.login').onclick = function(e){
	e.preventDefault();
	document.querySelector('.overlay').classList.add('overlay_active');
	document.querySelector('.popup__form_login').classList.add('active');
	document.querySelector('.popup__form_register').classList.remove('active');

}

document.querySelector('.register').onclick = function(e){
	e.preventDefault();
	document.querySelector('.overlay').classList.add('overlay_active');
	document.querySelector('.popup__form_register').classList.add('active');
	document.querySelector('.popup__form_login').classList.remove('active');

}

document.querySelector('.popup__close').onclick = function(){
	document.querySelector('.overlay').classList.remove('overlay_active');
	document.querySelector('.popup__form_login').classList.remove('active');
	document.querySelector('.popup__form_register').classList.remove('active');
}

document.querySelector('.overlay').onclick = function(e){
	if(e.target === document.querySelector('.overlay')){
		document.querySelector('.overlay').classList.remove('overlay_active');
		document.querySelector('.popup__form_login').classList.remove('active');
		document.querySelector('.popup__form_register').classList.remove('active');
	}
}

document.querySelector('.loginPopup').onclick = function(e){
	e.preventDefault();
	document.querySelector('.popup__form_login').classList.remove('active');
	document.querySelector('.popup__form_register').classList.add('active');
}

document.querySelector('.registerPopup').onclick = function(e){
	e.preventDefault();
	document.querySelector('.popup__form_register').classList.remove('active');
	document.querySelector('.popup__form_login').classList.add('active');
}

window.onscroll = function(){
	if(window.scrollY > 400){
		document.querySelector(".goTop").classList.add('goTop__active')
	} else{
		document.querySelector(".goTop").classList.remove('goTop__active')
	}
}