


$(document).ready(function() {

	$('.sqs-slice-group.group-copy').prepend('<div class="our-story" id="our-story"><div class="container"><h2>The story about Ashai</h2><p>Upon a visit to Kyoto in Japan, our founder met an old monk in an ancient temple. Nearly obsessed of his bead pouch filled with stones, we felt inspired to hear his story. The old man told us that his greatest wish was to find the twelve mythical volcanoes of Japan. In his search to find them, he collected lava stones from each and every volcano that crossed his path.</p><p>Back from his trip, our founders felt passionate about helping this old man fulfill his dream. The story about Ashai is to complete his lifelong journey, by releasing one collection dedicated to each mythical volcano, every year for the coming eight years.</p></div><a href="#" class="close-box"><i class="ion ion-close"></i></a></div>');

	$('[href="#our-story"]').on('click', function() {
		$('.our-story').addClass('active');
	});

	$('.close-box').on('click', function() {
		$('.our-story').removeClass('active');
	});

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
	}, 3000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 5000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');
	}, 7000);

	

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
		$('.sqs-slide .sqs-slide-layer.full-width-height').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').removeClass('animate');

		$('.sqs-slide .sqs-slide-layer-content.content-gallery').append('<a href="#" class="full-toggle"><i class="ion ion-arrow-resize"></i></a>');
	
		$('.full-toggle').on('click', function() {
			$(this).parent().toggleClass('full-screen-gallery');
		});
		
	}, 15000);

	

});












































































































