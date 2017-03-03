


$(document).ready(function() {

	$('.sqs-slide').addClass('sqs-slide-animate');

	setTimeout(function() {
		$('.sqs-slide').addClass('animate');
	}, 2000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 3600);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
	}, 5200);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');
	}, 6800);

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
		$('.sqs-slide .sqs-slide-layer.full-width-height').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').removeClass('animate');
	}, 7000);

});

















