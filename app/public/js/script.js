$(document).ready(function(){
	$('.selectpicker').selectpicker({
	    dropupAuto: false,
	    size: 2
	  });

	$(".sliders").slick({
		swipe: true,
		dots: true,
		nextArrow: $(".right-arrow"),
		prevArrow: $(".left-arrow"),
		autoplay: true
	});

});