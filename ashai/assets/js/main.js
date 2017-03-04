


$(document).ready(function() {



	 $(".sqs-slide").bind('cssClassChanged', function(){     
	    if( $('.sqs-slide').hasClass('sqs-slide-ready') && !$('.sqs-slide.sqs-slide-ready').hasClass('sqs-slide-animate')) {
	 		$('.sqs-slide.sqs-slide-ready').addClass('sqs-slide-animate');
		}
	});

	setTimeout(function() {
		$('.sqs-slide').addClass('animate');
	}, 1000);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer.full-width-height').addClass('animate');
	}, 2600);

	setTimeout(function() {
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').addClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').addClass('animate');
	}, 4200);

	

	setTimeout(function() {
		$('.sqs-slide').removeClass('sqs-slide-animate');
		$('.sqs-slide .sqs-slide-layer.full-width-height').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-gallery').removeClass('animate');
		$('.sqs-slide .sqs-slide-layer-content.content-copy').removeClass('animate');

		$('.sqs-slide .sqs-slide-layer-content.content-gallery').append('<a href="#" class="full-toggle"><i class="ion ion-arrow-resize"></i></a>');
	
		$('.full-toggle').on('click', function() {
			$(this).parent().toggleClass('full-screen-gallery');
		});
		
	}, 5000);





	

});




(function(){
    var originalAddClassMethod = jQuery.fn.addClass;
    jQuery.fn.addClass = function(){
        var result = originalAddClassMethod.apply( this, arguments );
        jQuery(this).trigger('cssClassChanged');
        return result;
    };
})();





































































