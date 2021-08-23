$(document).ready(function(){

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anistartleft'),
			animationClass = 'anileft',
			offset = $(window).height() * 15/16;

	function animeScrollleft() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScrollleft();

	$(document).scroll(debounce(function(){
		animeScrollleft();
	}, 0));
})();

(function(){
	var $target = $('.anistartright'),
			animationClass = 'aniright',
			offset = $(window).height() * 15/16;

	function animeScrollright() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScrollright();

	$(document).scroll(debounce(function(){
		animeScrollright();
	}, 0));
})();

(function(){
	var $target = $('.anistartblow'),
			animationClass = 'aniblow',
			offset = $(window).height() * 15/16;

	function animeScrollblow() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScrollblow();

	$(document).scroll(debounce(function(){
		animeScrollblow();
	}, 0));
})();

//scroll suave

$('#regras-inicio a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('#regras-inicio').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - (menuHeight - 400)
	}, 1000);
});



    // Parallax

    setTimeout(function() {

      $('#form-area').parallax({imageSrc: '../img/formbg.jpg'});
  }, 250);

});