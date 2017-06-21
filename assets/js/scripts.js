var $body = document.querySelector("body");

var $menuModal = document.querySelector("#menu--modal");
var $menuModalOpen = document.querySelector('#menu--modal__open');
var $menuModalClose = document.querySelector('#menu--modal__close');

$menuModalOpen.addEventListener('click', function() {
  $body.classList.add('menu--modal-is-open');
  $body.classList.add('modal-open');
});

$menuModalClose.addEventListener('click', function() {
  $body.classList.remove('menu--modal-is-open');
  $body.classList.remove('modal-open');
});


/*  ----------------------------
Animates on viewport
-------------------------------- */

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
  var $elem = elem;

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'document.body' : 'document.documentElement');

  // It's time for some Gambiarra
  if (scrollElem == 'document.body') {
    var viewportTop = document.body.scrollTop;
    var viewportBottom = viewportTop + window.innerHeight;
  }
  else if (scrollElem == 'document.documentElement') {
    var viewportTop = document.documentElement.scrollTop;
    var viewportBottom = viewportTop + window.innerHeight;
  }

  // Checks if .js-animate is on page
  if (document.querySelector('.js-animate')) {
    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offsetTop);
    var elemBottom = elemTop + $elem.offsetHeight;
  }

  return ( (elemTop < viewportBottom) && (elemBottom > viewportTop)) ;
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = document.querySelector('.js-animate');

  if (isElementInViewport($elem)) {
    // Start the animation by adding .start class
    $elem.classList.add('start');
  }
}

// Runs function on scroll
document.addEventListener('scroll', function() {
  checkAnimation();
});
