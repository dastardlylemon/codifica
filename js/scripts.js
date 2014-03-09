$(window).scroll(function(){
  if ($(document).scrollTop() <= 400) {
    $('#header_nav').removeClass('tiny');
  } else {
    $('#header_nav').addClass('tiny');
  }
});

$(document).ready(function() {
  $("#logo").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  });
  $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 100
    }, 500);
  });
  $("#menu-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top - 100
    }, 500);
  });
  $("#events-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#events").offset().top - 50
    }, 500);
  });
  $("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 100
    }, 500);
  });
});