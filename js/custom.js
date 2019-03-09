

// == MAIN SLIDER (BANNER SLIDER) ==--
$('#mainSlider').owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 5500,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      nav:true,
      dots: true,
})


// == MARQUEE SLIDE ==--
$('.marquee').marquee({
    duration: 11000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
});


// == ADD CLASS ON HEADER ==-
$(document).on("scroll", function () {
    if ($(document).scrollTop() > 100) {
        $("header").addClass("headerBg");
    } else {
        $("header").removeClass("headerBg");
    }
});











