'use strict';

(function () {
  const mainNav = document.querySelector('.main-nav');
  const mainNavToggle = document.querySelector('.main-nav__toggle');
  const body = document.querySelector('.body');
  const mainNavLinks = document.querySelectorAll('.main-nav__link');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.remove('main-nav--opened');

  mainNavToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--opened')) {
      mainNav.classList.remove('main-nav--opened');
      body.style.overflow = 'visible';
    } else {
      mainNav.classList.add('main-nav--opened');
      body.style.overflow = 'hidden';
    }
  });

  mainNavLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mainNav.classList.remove('main-nav--opened');
      body.style.overflow = 'visible';
    })
  })
}) ();
