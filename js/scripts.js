$(window).scroll(function(){
  if ($(document).scrollTop() <= 100) {
    $('#header_nav').removeClass('tiny');
    console.log('notiny');
  } else {
    $('#header_nav').addClass('tiny');
    console.log('tiny');
  }
});