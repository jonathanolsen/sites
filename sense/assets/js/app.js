$(document).ready(function() {
	$(window).scroll(function() {

	});


	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scene and set duration to window height
	new ScrollMagic.Scene({triggerElement: ".Index-page-content"})
		.setTween(".Index-page-content", {y: "80%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);

});