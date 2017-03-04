


$(document).ready(function() {

	$('body').prepend('<div class="our-story" id="our-story"><div class="container"><h2>The Story of Ashai</h2><p>Upon a visit to Kyoto in Japan, our founder met an old monk in an ancient temple. Nearly obsessed of his bead pouch filled with stones, we felt inspired to hear his story. The old man told us that his greatest wish was to find the twelve mythical volcanoes of Japan. In his search to find them, he collected lava stones from each and every volcano that crossed his path.</p><p>Back from his trip, our founders felt passionate about helping this old man fulfill his dream. The story about Ashai is to complete his lifelong journey, by releasing one collection dedicated to each mythical volcano, every year for the coming eight years.</p><a href="#" class="close-box">Close window</a></div></div>');
	$('.sqs-slice-group.group-copy').append('<div class="price-container"><div class="price"><span>Official price</span>$79-99</div><div class="price"><span>Your discount</span>20%</div></div><div class="bracelets"><img src="https://jonathanolsen.github.io/sites/ashai/assets/img/bracelets.jpg" /></div><div class="flickity gallery"><div class="gallery-item"><div class="image"><img src="https://jonathanolsen.github.io/sites/ashai/assets/img/twelve.jpg" alt="" /></div><h4>The <span>Ashai Twelve</span></h4></div><div class="gallery-item"><div class="image"><img src="https://jonathanolsen.github.io/sites/ashai/assets/img/kibun.jpg" alt="" /></div><h4><span>Kibun</span> Family</h4></div><div class="gallery-item"><div class="image"><img src="https://jonathanolsen.github.io/sites/ashai/assets/img/nakama.jpg" alt="" /></div><h4><span>Nakama</span> Collection</h4></div></div>');

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
	}, 1200);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 2500);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');

		$(".flickity").flickity();
	}, 3800);

	

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
		$('.sqs-slide .sqs-slide-layer.full-width-height').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').removeClass('animate');

		$('.sqs-slide .sqs-slide-layer-content.content-gallery').append('<a href="#" class="full-toggle"><i class="ion ion-arrow-resize"></i></a>');
	
		$('.full-toggle').on('click', function() {
			$(this).parent().toggleClass('full-screen-gallery');
		});
		
	}, 4800);

	

});






















































































































































