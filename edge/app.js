
$(document).ready(function() {

	$('.open-typeform').on('click', function() {
		$('#typeform-full').fadeIn(1000);
		$('.close-typeform').fadeIn(1000);
	});

	$('.close-typeform').on('click', function (){
		$('#typeform-full').fadeOut(1000);
		$('.close-typeform').fadeOut(1000);
	});

});