// Preloader Part Start
$(window).on("load", function(){
  $(".preloader").delay(500).fadeOut(1000)

})
// Preloader Part End


// Back to top part start
$(".back2top i").click(function(){
  $("body, html").animate({
    scrollTop:0,
  },500)
  })
  $(window).scroll(function(){
    var scrolling = $(window).scrollTop()
    if (scrolling > 20){
      $(".back2top i") .fadeIn()
    }
    else {
      $(".back2top i") .fadeOut()}
  })

// Back to top part end
// Slick banner part start
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  Arrows:true,
  prevArrow:(".prev"),
  nextArrow:(".next"),
  dots:true,

});
// Slick banner part end
// Wow use in Beautiful part start
new WOW().init();
// Wow use in Beautiful part end

// Want part light box start
lightbox.option({
  'resizeDuration': 100,
  'wrapAround': true
})
// Want part light box end