// When scrolling down, hide header. Scrolling up, show header. Fixed.
var w = $(window);
var viewTop = w.scrollTop();
var up = false;
var newscroll;
var sensitivity = 2;

w.on("scroll", function() {
if ($(this).scrollTop() > 140) {

  $("body").addClass("is-scrolled");

  if ($(this).scrollTop() > 600) {
    newscroll = w.scrollTop();

    if (newscroll > sensitivity + viewTop && !up) {
      $("body").addClass("menu-hidden");
      up = !up;
    } else if (newscroll + sensitivity < viewTop && up) {
      $("body").removeClass("menu-hidden");
      up = !up;
    }
  } else {
  }

  viewTop = newscroll;
} else {
  $("body").removeClass("is-scrolled menu-hidden");
}
});


function scrollFX() {
  var $window = $(window),
    scrollTop = $window.scrollTop(),
    $boxes = $('[data-scroll-speed]');

  $boxes.each(function() {
    var $this = $(this),
      oTop = scrollTop - $this.offset().top,
      scrollspeed = parseInt($this.data('scroll-speed')),
      val = -oTop / scrollspeed;
    $this.css('transform', 'translateY(' + val + 'px)');
  });
}

$(window).scroll(function() {
  scrollFX();
});

$(window).resize(function() {
  scrollFX();
});

$(document).ready(function() {
  scrollFX();

  $('.data-scroll-5').attr("data-scroll-speed", "5");
  $('.data-scroll-6').attr("data-scroll-speed", "6");
  $('.data-scroll-7').attr("data-scroll-speed", "7");
  $('.data-scroll-8').attr("data-scroll-speed", "8");
  $('.data-scroll-neg-8').attr("data-scroll-speed", "-8");
});