/* Sticky Navigation */
$(function() {
  
  var sticky = $('.sticky');
  var contentOffset;
  var nav_height;
  
  if (sticky.length) {
    
    if ( sticky.data('offset') ) {
      contentOffset = sticky.data('offset');
    }
    else {
      contentOffset = sticky.offset().top;
    }
    nav_height = sticky.height();
  }
  
  var scrollTop = $(window).scrollTop();
  var window_height = $(window).height();
  var doc_height = $(document).height();
  
  $(window).bind('resize', function() {
    scrollTop = $(window).scrollTop();
    window_height = $(window).height();
    doc_height = $(document).height();
    navHeight();
  });
  
  $(window).bind('scroll', function() {
    stickyNav();
  });
  
  function navHeight() {
    sticky.css('max-height', window_height + 'px');
  }
  
  function stickyNav() {
    scrollTop = $(window).scrollTop();
    if (scrollTop > contentOffset) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    }
  }
  
});

$('document').ready(function() {
  var nav_height = 70;
  
  $("a[data-role='smoothscroll']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top - nav_height;
    
    $("body, html").animate({
      scrollTop: position
    }, 1000 );
    return false;
  });
});

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");
  
  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });
  
  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


$('document').ready(function() {
  
  // Loader
  $(window).on('load', function() {
    $('.loader-container').fadeOut();
  });
  
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
  // Popovers
  $('[data-toggle="popover"]').popover();
  
  // Page scroll animate
  new WOW().init();
});

$('document').ready(function() {
  $('#testimonials').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
});


/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function() {
  var counterInit = function() {
    if ( $('.counter-section').length > 0 ) {
      $('.counter-section').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function(){
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });
          
        }

      } , { offset: '95%' } );
    }

  }

  counterInit();
});



//para canvas
var c = document.getElementById("lineas2");
var cxt = c.getContext("2d");

// Dijujamos un castillo
cxt.beginPath();
cxt.moveTo(30,30);
cxt.lineTo(40,30);
cxt.lineTo(40,40);
cxt.lineTo(50,40);
cxt.lineTo(50,30);
cxt.lineTo(60,30);
cxt.lineTo(60,40);
cxt.lineTo(70,40);
cxt.lineTo(70,30);
cxt.lineTo(80,30);
cxt.lineTo(80,40);
cxt.lineTo(90,40);
cxt.lineTo(90,30);
cxt.lineTo(100,30);
cxt.lineTo(100,90);
cxt.lineTo(30,90);
cxt.closePath(); // Cierra la figura como si usasemos cxt.lineTo(30,50);
cxt.stroke();

// Dibujamos el palo de la bandera
cxt.strokeStyle = "brown";
cxt.beginPath();
cxt.moveTo(55,30);
cxt.lineTo(55,10);
cxt.stroke();

// Dibujamos una bandera
cxt.fillStyle = "green";
cxt.beginPath();
cxt.moveTo(55,10);
cxt.lineTo(65,15);
cxt.lineTo(55,20);
cxt.fill();  // Cierra la figura y rellena

// Dibujamos la puerta
cxt.fillStyle = "brown";
cxt.beginPath();
cxt.moveTo(55,90);
cxt.lineTo(55,75);
cxt.lineTo(65,70);
cxt.lineTo(75,75);
cxt.lineTo(75,90);
cxt.closePath(); // Cierra la figura
cxt.fill(); // Y la rellena