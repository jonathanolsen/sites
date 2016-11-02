$(document).ready(function() {
	$(window).scroll(function() {

	});


	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scene and set duration to window height
	new ScrollMagic.Scene({triggerElement: ".block-container.collection .block-content"})
		.setTween(".block-container.collection .block-content", {y: "80%"})
		.addIndicators()
		.addTo(controller);

});