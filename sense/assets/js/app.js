$(document).ready(function() {
	function parallax(){
		return $(this).each(function(){
			var plxBackground = $(this).children('.block-content');
			var plxWindow = $(this);

			var plxWindowTopToPageTop = $(plxWindow).offset().top;
			var windowTopToPageTop = $(window).scrollTop();
			var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

			var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
			var windowInnerHeight = window.innerHeight;
			var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
			var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
			var plxSpeed = 0.35;

			plxBackground.css("transform","translateY(" +  (plxWindowTopToWindowTop * plxSpeed) + 'px');
		});
	}

	$(".block-container").parallax();

	$(window).scroll(function(e) {
		$(".block-container").parallax();
	});
});





