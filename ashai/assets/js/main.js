


$(document).ready(function() {



	var intervalTimer = null;
	
	intervalTimer = setInterval(function(){
		if( $('.sqs-slide').hasClass('sqs-slide-ready') ) {
			$('.sqs-slide.sqs-slide-ready').addClass('sqs-slide-animate');
			setTimeout(function() {
				$('.sqs-slide.sqs-slide-ready').addClass('done');
			},250);
			clearInterval(intervalTimer);
		}
	},500);

	setTimeout(function() {
		$('.sqs-slide').addClass('animate');
	}, 1500);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 3100);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');
	}, 4700);

	

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
		$('.sqs-slide .sqs-slide-layer.full-width-height').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').removeClass('animate');

		$('.sqs-slide .sqs-slide-layer-content.content-gallery').append('<a href="#" class="full-toggle"><i class="ion ion-arrow-resize"></i></a>');
	
		$('.full-toggle').on('click', function() {
			$(this).parent().toggleClass('full-screen-gallery');
		});
		
	}, 5500);

	

});




























































































