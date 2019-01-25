$(document).ready(function(){
			$('.header_slider').slick({
				// slidesToShow: 3,
				// infinite: false,
				// variableWidth: true,
				// prevArrow: '._prevArrow',
				// nextArrow: '._nextArrow',
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
				});
		});

$(document).ready(function(){
			$('.section2_block').slick({
				slidesToShow: 3,
				// infinite: true,
				dots: true,
				// rows: 'slider',
				prevArrow: '._prevArrow',
				nextArrow: '._nextArrow',
				arrows: true,
				});
		});


$(function(){
$('.header_arrow').on('click',function(){
  $('html').animate({
    scrollTop: $('._scroll_projects').offset().top
  }, 1000);
});
});

$(function(){
$('.projects').on('click',function(){
  $('html').animate({
    scrollTop: $('._scroll_projects').offset().top
  }, 1000);
});
});

$(function(){
$('.news').on('click',function(){
  $('html').animate({
    scrollTop: $('._scroll_news').offset().top
  }, 1000);
});
});

$(function(){
$('.contact').on('click',function(){
  $('html').animate({
    scrollTop: $('._scroll_contact').offset().top
  }, 1000);
});
});

