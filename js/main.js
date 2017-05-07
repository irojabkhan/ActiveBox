 // Header Scroll
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });


  // flexslider
  $(window).load(function() {
    $('.flexslider').flexslider();
  });

  /* Using custom settings */
  
  $("a.single-work").fancybox({
    'hideOnContentClick': true,
    'transitionIn'  : 'fade',
    'transitionOut' : 'fade',
    'speedIn'   : 100, 
    'speedOut'    : 200, 
    'overlayShow' : false,
    'fullScreen' : false,
    'animation' : 'fade'
  });

  // Smooth Scroll jQuery Start
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 77
          }, 1000);
          return false;
        }
      }
    });
  });
