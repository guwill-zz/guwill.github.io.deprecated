( function( $ ) {
	$window = $(window);
	$slide = $('.slide');

	height = $window.height();

	$slide.height();

	$window.scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('#box').fadeOut();
		} else {
			$('#box').fadeIn();
		}
	});

} )( jQuery );
