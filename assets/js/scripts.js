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
