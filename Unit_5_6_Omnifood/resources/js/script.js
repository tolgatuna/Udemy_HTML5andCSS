$(document).ready(function () {
    
    /* For the Sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    })
    
    /* For the buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animations On Scroll */ 
    $('.js--features-row').waypoint(function(direction) {
        $('.js--features-row').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });
    
    
    $('.js--app-image').waypoint(function(direction) {
        $('.js--app-image').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });
    
    
    $('.js--cities-row').waypoint(function(direction) {
        $('.js--cities-row').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });
    
    
    $('.js--planbox-premium').waypoint(function(direction) {
        $('.js--planbox-premium').addClass('animated pulse')
    }, {
        offset: '50%'
    });
    
    /* Mobile Navigation*/
    $('.js--mobile-nav-btn').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-btn i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});