$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		$(".block-content").css("transform","translateY(" +  (scroll/2)  + "px)");
	});
});