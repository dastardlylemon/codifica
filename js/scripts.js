$(window).scroll(function(){
  if ($(document).scrollTop() <= 400) {
    $('#header_nav').removeClass('tiny');
  } else {
    $('#header_nav').addClass('tiny');
  }
});