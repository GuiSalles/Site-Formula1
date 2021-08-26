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
			offset = $(window).height() * 7/8;

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

(function(){
	var $target = $('.anistarprogress'),
			animationClass = 'progress-bar-animated',
			offset = $(window).height() * 63/64;

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

      $('#form-area').parallax({imageSrc: 'img/formbg.jpg'});
  }, 250);

	 setTimeout(function() {

		$('#pilotos').parallax({imageSrc: 'img/home1.jpg'});
}, 500);

	//top5 filtro

	$('.filter-btn').on('click', function() {

		let type = $(this).attr('id');
		let boxes = $('.project-box');

		$('.main-btn').removeClass('active');
    	$(this).addClass('active');

    	if(type == 'a-btn') {
      	eachBoxes('ddzss', boxes);
    	} 
		else if(type == 'b-btn') {
      	eachBoxes('ddzst', boxes);
    	} 
		else if(type == 'c-btn') {
      	eachBoxes('ddzt', boxes);
    	} 
		else if(type == 'd-btn') {
		eachBoxes('ddzn', boxes);
		}
		else if(type == 'e-btn') {
		eachBoxes('dvt', boxes);
		}
		else if(type == 'f-btn') {
		eachBoxes('dvtum', boxes);
		}
		else {
      	eachBoxes('all', boxes);
    	}
});

function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
});
