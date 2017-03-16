$(document).ready(function(){
  $('.slider').slick({
  	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
    // centerMode: true,
    variableWidth: true
  });
  $('.lead a').click(function(){
		$(window).scrollTop($('.sydney').offset().top);
     })
});
