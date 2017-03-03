


$(document).ready(function() {

	$('.sqs-slide').addClass('sqs-slide-animate');

	setTimeout(function() {
		$('.sqs-slide').addClass('animate');
	}, 2000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 3000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
	}, 4000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');
	}, 5000);

	/* setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
	}, 4000); */

});













