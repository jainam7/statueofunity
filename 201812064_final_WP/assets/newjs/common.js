$(document).ready(function () {

  setTimeout(function(){ $('#Open_Modal').trigger('click'); }, 500);
  
  $('.navbar-toggle').click(function () {
    $('body').toggleClass('open-menu')
  })

  $('.menu-toggle').click(function () {
    $('body').toggleClass('open-menu')
    $('.header-menu ').click(function () {
      $('body').removeClass('open-menu');
    })
  })

  $('.menu-gallery').click(function () {
    var position = $('#gallery').offset().top
    $('html, body').animate({ scrollTop: position }, 500)
  })

  /***** Video  ****/

  $('#films .img-box').click(function () {
    var link = $(this).attr('data-src')
    $('#video-frame').attr('src', link)
  })

  $('#video-gallery').on('hidden.bs.modal', function () {
    $('#video-frame').attr('src', '')
  })

  /***** Video  ****/

  /***** gallary */
  
  loadGallery(true, 'a.thumbnail')

  // This function disables buttons when needed
  function disableButtons (counter_max, counter_current) {
    $('#show-previous-image, #show-next-image')
      .show()
    if (counter_max === counter_current) {
      $('#show-next-image')
        .hide()
    } else if (counter_current === 1) {
      $('#show-previous-image')
        .hide()
    }
  }
  function disableButtons2 (counter_max, counter_current) {
    console.log(counter_max, counter_current)
    $('#show-previous-image2, #show-next-image2')
      .show()
    if (counter_max === counter_current) {
      $('#show-next-image2')
        .hide()
    } else if (counter_current === 1) {
      $('#show-previous-image2')
        .hide()
    }
  }

  /**
   *
   * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
   * @param setClickAttr  Sets the attribute for the click handler.
   */

  function loadGallery (setIDs, setClickAttr) {
    let current_image,
      current_image2,
      selector,
      counter = 0
    counter2 = 0

    $('#show-next-image, #show-previous-image')
      .click(function () {
        if ($(this)
            .attr('id') === 'show-previous-image') {
          current_image--
        } else {
          current_image++
        }

        selector = $('[data-image-id="' + current_image + '"]')
        updateGallery(selector)
      })
    $('#show-next-image2, #show-previous-image2')
      .click(function () {
        if ($(this)
            .attr('id') === 'show-previous-image2') {
          current_image2--
        } else {
          current_image2++
        }

        selector = $('[data-poster-image-id="' + current_image2 + '"]')
        updateGallery2(selector)
      })

    function updateGallery (selector) {
      // console.log(selector)
      let $sel = selector
      current_image = $sel.data('image-id')
      $('#image-gallery-title')
        .text($sel.data('title'))
      $('#image-gallery-image')
        .attr('src', $sel.data('image'))
      disableButtons(counter, $sel.data('image-id'))
    }
    function updateGallery2 (selector) {
      console.log(selector)
      let $sel = selector
      current_image2 = $sel.data('poster-image-id')
      $('#image-gallery-title2')
        .text($sel.data('title'))
      $('#image-gallery-image2')
        .attr('src', $sel.data('image'))
      console.log(counter2)
      disableButtons2(counter2, $sel.data('poster-image-id'))
    }

    if (setIDs == true) {
      $('[data-image-id]')
        .each(function () {
          counter++
          $(this)
            .attr('data-image-id', counter)
        })
      $('[data-poster-image-id]')
        .each(function () {
          console.log(counter2)
          counter2++
          $(this)
            .attr('data-poster-image-id', counter2)
        })
    }
    $(setClickAttr)
      .on('click', function () {
        console.log('hi')
        updateGallery($(this))
        updateGallery2($(this))
      })
  }
  /***** gallary */
  
  // if ($('.carousel').length) {
  //   $('.carousel').swipe({
  //     swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
  //       if (direction == 'left') $(this).carousel('next')
  //       if (direction == 'right') $(this).carousel('prev')
  //     },
  //     allowPageScroll: 'vertical'
  //   })
  // }
})

// $('.nav-tabs-dropdown').each(function (i, elm) {
//   $(elm).text($(elm).next('ul').find('li.active a').text())
// })

// $('.nav-tabs-dropdown').on('click', function (e) {
//   e.preventDefault()

//   $(e.target).toggleClass('open').next('ul').slideToggle()
// })

// $('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function (e) {
//   e.preventDefault()

//   $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text())
// })

// /slider script 
if ($(window).width() < 767) {
  $('#myCarousel .slider-option, #myCarousel2 .slider-option, #myCarousel3 .slider-option').addClass('carousel-inner')
  $('.carousel-control').removeClass('hide')
  $('#myCarousel, #myCarousel2, #myCarousel3').carousel({
    items: 1,
    nav: true,
    loop: true,
    navText: ['', ''],
    navClass: ['nav-prev', 'nav-nxt'],
    autoplay: true ,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  })
} else {
  $('#myCarousel').carousel('destroy')
  $('#myCarousel').removeClass('carousel')
  $('#myCarousel2').carousel('destroy')
  $('#myCarousel2').removeClass('carousel')
  $('#myCarousel3').carousel('destroy')
  $('#myCarousel3').removeClass('carousel')
}
$('.carousel-control.left').click(function (e) {
  e.preventDefault();
  $('#myCarousel').carousel('prev')
  $('#myCarousel2').carousel('prev')
  $('#myCarousel3').carousel('prev')
  })
   
  $('.carousel-control.right').click(function (e) {
  e.preventDefault();
  $('#myCarousel').carousel('next')
  $('#myCarousel2').carousel('next')
  $('#myCarousel3').carousel('next')
  })

/******* tab scroll */

var SETTINGS = {
  navBarTravelling: false,
  navBarTravelDirection: "",
 navBarTravelDistance: 150
}

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// Out advancer buttons
var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
var pnAdvancerRight = document.getElementById("pnAdvancerRight");

var pnProductNav = document.getElementById("pnProductNav");
var pnProductNavContents = document.getElementById("pnProductNavContents");

pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));

// Handle the scroll of the horizontal container
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
}

pnProductNav.addEventListener("scroll", function() {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
      window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
      });
  }
  ticking = true;
});


pnAdvancerLeft.addEventListener("click", function() {
// If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
      return;
  }
  // If we have content overflowing both sides or on the left
  if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
      // Find how far this panel has been scrolled
      var availableScrollLeft = pnProductNav.scrollLeft;
      // If the space available is less than two lots of our desired distance, just move the whole amount
      // otherwise, move by the amount in the settings
      if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
          pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
      } else {
          pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
      }
      // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
      pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
      // Update our settings
      SETTINGS.navBarTravelDirection = "left";
      SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
});

pnAdvancerRight.addEventListener("click", function() {
  // If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
      return;
  }
  // If we have content overflowing both sides or on the right
  if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
      // Get the right edge of the container and content
      var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
      var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
      // Now we know how much space we have available to scroll
      var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
      // If the space available is less than two lots of our desired distance, just move the whole amount
      // otherwise, move by the amount in the settings
      if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
          pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
      } else {
          pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
      }
      // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
      pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
      // Update our settings
      SETTINGS.navBarTravelDirection = "right";
      SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
});

pnProductNavContents.addEventListener(
  "transitionend",
  function() {
      // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
      var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
      var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
      // If there is no transition we want to default to 0 and not null
      var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
      pnProductNavContents.style.transform = "none";
      pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition");
      // Now lets set the scroll position
      if (SETTINGS.navBarTravelDirection === "left") {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
      } else {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
      }
      SETTINGS.navBarTravelling = false;
  },
  false
);

// Handle setting the currently active link
pnProductNavContents.addEventListener("click", function(e) {
var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
links.forEach(function(item) {
  item.setAttribute("aria-selected", "false");
})
e.target.setAttribute("aria-selected", "true");
})

function determineOverflow(content, container) {
  var containerMetrics = container.getBoundingClientRect();
  var containerMetricsRight = Math.floor(containerMetrics.right);
  var containerMetricsLeft = Math.floor(containerMetrics.left);
  var contentMetrics = content.getBoundingClientRect();
  var contentMetricsRight = Math.floor(contentMetrics.right);
  var contentMetricsLeft = Math.floor(contentMetrics.left);
 if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
      return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
      return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
      return "right";
  } else {
      return "none";
  }
}

/******* tab scroll */
