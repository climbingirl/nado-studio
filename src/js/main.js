import Glide from '@glidejs/glide';

//slider

new Glide('.glide', {
  type: 'carousel',
  autoplay: 5000,
  animationDuration: 1500,
  perView: 1,
  gap: 0,
  hoverpause: true,
}).mount();

// info-panel

const infoPanel = document.getElementById('info-panel');
const toggleInfoPanelBtn = document.getElementById('info-panel-btn');

toggleInfoPanelBtn.addEventListener('click', () => {
  infoPanel.classList.toggle('info-panel--open');
});

// modal

const reservationBtn = document.getElementById('login-btn');
const modal = document.getElementById('modal');
const modalCloseBtn = modal.querySelector('.modal__close-btn');
const modalOverlay = modal.querySelector('.modal__overlay');

const closeModal = () => {
  document.body.classList.remove('no-scroll');
  modal.classList.remove('modal--open');
};
const openModal = () => {
  document.body.classList.add('no-scroll');
  modal.classList.add('modal--open');
};

reservationBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// burger menu

const burgerMenu = document.getElementById('burger-menu');
const headerNav = document.getElementById('header-nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu--open');
  headerNav.classList.toggle('header__nav--open');
});
