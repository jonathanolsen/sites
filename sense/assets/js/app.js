$(document).ready(function() {
  if ($(".block-container").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($(".block-container").length) {
    parallax();
  }
});

function parallax(){
  if( $(".block-container").length > 0 ) {
    var plxBackground = $(".block-content");
    var plxWindow = $(".block-container");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.15;

    plxBackground.css("transform","translateY(" +  (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}