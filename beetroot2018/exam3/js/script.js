$(document).ready(function(){
			$('.burger').click(function(e){
				e.preventDefault()
				$('.nav_list').toggleClass('active');
			})
			// $('.header_slider').slick({
			// 	// slidesToShow: 3,
			// 	// infinite: false,
			// 	// variableWidth: true,
			// 	// prevArrow: '._prevArrow',
			// 	// nextArrow: '._nextArrow',
			// 	arrows: false,
			// 	autoplay: true,
			// 	autoplaySpeed: 2000,
			// 	});
		});

$(document).ready(function(){
			$('.section3_slider').slick({
				slidesToShow: 1,
				// infinite: true,
				dots: true,
				// rows: 'slider',
				prevArrow: '._prevArrow',
				nextArrow: '._nextArrow',
				arrows: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		});

$(document).ready(function(){
			$('.section4_slider').slick({
				slidesToShow: 3,
				// infinite: true,
				dots: true,
				// rows: 'slider',
				prevArrow: '._prevArrow',
				nextArrow: '._nextArrow',
				arrows: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		});

var $anchors = $('._scroll');

$anchors.on('click' , function (e) {
	e.preventDefault();
	var id = $(this).attr('href');
	$('html').animate({
		scrollTop: $(id).offset().top }, 2000);
});



