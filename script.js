var nav = $('#slide-stick-nav');
var navTop = nav.offset().top;
var title = $('.page-title');

$(window).on('scroll', function(){
	if($(window).scrollTop() > navTop - 100) {
		nav.addClass('is-fixed');
		title.css('margin-top', '112px');	
	} else {
		nav.removeClass('is-fixed');
		title.css('margin-top', '72px');
	}
});