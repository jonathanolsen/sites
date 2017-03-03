


$(document).ready(function() {

	$('.sqs-slide').addClass('sqs-slide-animate');

	setTimeout(function() {
		$('.sqs-slide > .sqs-slide-layer.full-width-height').addClass('animate');
	}, 1000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content').addClass('animate');
	}, 1400);

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
	}, 2000);

});