$(document).ready(function(){
	new WOW().init();
  $('.scrollspy').scrollSpy({
    scrollOffset:60
  });
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      dots:true,
      autoplay:true,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:3,
              nav:true
          },
          600:{
              items:6,
              nav:false
          },
          1000:{
              items:6,
              nav:true,
              loop:false
          }
      }
  })
});

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1900
  });
  $('.bxslider2').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1900
  });
});