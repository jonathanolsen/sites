$.fn.parallax=function(){return $(this).each(function(){var n=$(this).children(".block-content"),o=$(this),t=$(o).offset().top,a=$(window).scrollTop(),l=t-a,r=$(n).offset().top,c=window.innerHeight,i=r-a,e=c-i,s=.1;n.css("transform","translateY("+(l*s-120)+"px")})},$(".block-container").parallax(),$(window).scroll(function(n){$(".block-container").parallax()});