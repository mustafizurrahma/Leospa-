(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
    
});

// Stikey Js  
    (function () {
      var nav = $('.menu-nav-sec');
      var scrolled = false;
      $(window).on('scroll', function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
          scrolled = true;
        }
        if (90 > $(window).scrollTop() && scrolled) {
          nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
          scrolled = false
        }
      });
    }());


// service
$('.service-caro').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// test-caro
$('.test-caro').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//LightBox / Fancybox
    if($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
                media : {}
            }
        });
    }


})(jQuery);	