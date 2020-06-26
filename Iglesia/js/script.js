
// ++++++++++++SITE SLIDERS++++++++++++++++


$(document).ready(function(){
  $('.top-slider').slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  touchMove: true,
  appendArrows: $('.slide-btn'),
  prevArrow: '<a href="#" class="slide-left"></a>',
  nextArrow: '<a href="" class="slide-right"></a>',
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,

  responsive: [
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },]

});

});


// ===============TIMER=============



// =======================END TIMER=====================



// BURGER MENU
function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){
    $(".burger-menu").click(function(){
        $("menu").slideToggle("slow");
    });
});

$(document).ready(function(){
   
 if ($(window).width() < 768) {
      $(".menu_link").click(function () {
        $("menu").slideUp("slow");
        $(".burger-menu").removeClass("change");
        
      });
      }
});

// END BURGER MENU


//scrolling to block

$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("menu li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

//************scrolling to block

// FIXED HEADER

jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 100) {
        jQuery('.menu').addClass('menu__fixed');
    }
    else {
        jQuery('.menu').removeClass('menu__fixed');
    }
});

// END FIXED HEADER