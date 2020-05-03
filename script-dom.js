import * as firebase from './script-firebase-api.js';

/* ************ device ************ */
export const deviceHeight = ((window.innerHeight > 0) ? window.innerHeight * 0.01 : screen.height * 0.01);
export const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

/* ************ DOM elements ************ */
export const spinner = document.querySelector('.spinner');
/* *** NAV *** */
export const colorPicker = document.querySelector('.color-picker');
export const navButton = document.querySelector('.button-menu');
export const navigationItems = document.getElementsByClassName('navigation__item');
/* *** HERO *** */
export const heroList = document.querySelector('.hero__list');
export const heroTitle = document.querySelector('.hero__title');
export const heroDesc = document.querySelector('.hero__desc');
/* *** LANDSCAPE *** */
export const landscape = document.querySelector('.section-landscape');
/* *** QUOTE *** */
export const buttonQuote = document.querySelector('.button--quote');
export const quote = document.querySelector('.section-quote__text');
export let isNavButtonOpen = false;
/* *** PROJECTS *** */
export const projectWrapper = document.querySelector('.section-projects__wrapper');
/* *** ABOUT *** */
export const aboutWrapper = document.querySelector('.section-about__about-grid');
export const aboutImages = document.querySelectorAll('.section-about__images');

export const pic1 = document.querySelector('.pic-1');
export const pic2 = document.querySelector('.pic-2');
export const pic3 = document.querySelector('.pic-3');
export const pic4 = document.querySelector('.pic-4');
export const pic5 = document.querySelector('.pic-5');
export const pic6 = document.querySelector('.pic-6');

/* *** STACK *** */
export const stackGrid = document.querySelector('.section-about__stack-grid');
export const techIcon = document.getElementsByTagName('ion-icon');

export const landscape2 = document.querySelector('.landscape-2');


/* *** CONTACT *** */

export const socials = document.querySelector('.section-contact__social-wrapper');

export const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form__email');
const inputMessage = document.querySelector('.form__text-area');

/* ************ DOM event listeners ************ */

/* *** NAV *** */

colorPicker.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
  document.documentElement.classList.add('color-transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('color-transition');
  }, 300)
});

const toggleVisibilityMenuItems = (navigationItems, isNavButtonOpen) => {
  if (isNavButtonOpen) {
    for (let i = 0; i < navigationItems.length; i++) {
      navigationItems[i].classList.add('navigation__item--movein');
      navigationItems[i].classList.remove('navigation__item--hidden');
    }
  } else {
    for (let i = 0; i < navigationItems.length; i++) {
      navigationItems[i].classList.add('navigation__item--hidden');
      navigationItems[i].classList.remove('navigation__item--movein');
    }
  }
}

const toggleNavigationButton = (buttonState) => {
  isNavButtonOpen = !buttonState;
  navButton.classList.toggle('button-menu--opened', isNavButtonOpen);
  toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
}

navButton.addEventListener('click', () => toggleNavigationButton(isNavButtonOpen))

document.addEventListener('click', (e) => {
  if (isNavButtonOpen) {
    if (e.target.className === 'navigation__link' || (e.target.className !== 'button-menu button-menu--opened' && e.target.className !== 'button-menu__burger')) {
      toggleNavigationButton(true);
    }
  }
})

/* *** HERO *** */

document.documentElement.style.setProperty('--vh', `${deviceHeight}px`);

/* *** QUOTE *** */

buttonQuote.addEventListener('click', () => {
  quote.classList.add('fade-in-out');
  window.setTimeout(() => getRandomQuote(firebase.quotes), 400)
  window.setTimeout(() => quote.classList.remove('fade-in-out'), 801)
})

export const getRandomQuote = (quotes) => {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomNumber];
  showNewQuote(randomQuote);
}

const showNewQuote = (randomQuote) => {
  const quoteDom = document.querySelector('.section-quote__text');
  const quoteAuthorDom = document.querySelector('.section-quote__author');
  const quoteLinkDom = document.querySelector('.section-quote__link');

  // character counter https://www.charactercountonline.com/
  // console.log('randomQuote.quote.length', randomQuote.quote.length);
  if (randomQuote.quote.length > 400) {
    quoteDom.style.fontSize =
      deviceWidth <= 767 ? '1rem' :    // mobile
      deviceWidth < 1279 ? '2rem' :    // tablet 
      deviceWidth < 1439 ? '2.2rem' :  // laptop-md
      deviceWidth < 1919 ? '2.3rem' :  // laptop-hd
                           '3rem';     // desktop-hd

    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize =
        deviceWidth <= 767 ? '1.1rem' :  // mobile
        deviceWidth < 1279 ? '2.2rem' :  // tablet 
        deviceWidth < 1439 ? '2.6rem' :  // laptop-md
        deviceWidth < 1919 ? '2.6rem' :  // laptop-hd
                             '3.3rem';   // desktop-hd
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize =
        deviceWidth <= 767 ? '1.3rem' :  // mobile
        deviceWidth < 1279 ? '2.6rem' :  // tablet 
        deviceWidth < 1439 ? '3.1rem' :  // laptop-md
        deviceWidth < 1919 ? '3.1rem' :  // laptop-hd
                             '3.6rem';   // desktop-hd
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize =
        deviceWidth <= 767 ? '1.6rem' :  // mobile
        deviceWidth < 1279 ? '3.1rem' :  // tablet 
        deviceWidth < 1439 ? '3.4rem' :  // laptop-md
        deviceWidth < 1919 ? '3.4rem' :  // laptop-hd
                             '3.9rem';   // desktop-hd
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize =
        deviceWidth <= 767 ? '1.8rem' :  // mobile
        deviceWidth < 1279 ? '3.4rem' :  // tablet 
        deviceWidth < 1439 ? '3.5rem' :  // laptop-md
        deviceWidth < 1919 ? '3.6rem' :  // laptop-hd
                             '4.2rem';   // desktop-hd
    } else {
      quoteDom.style.fontSize =
        deviceWidth <= 767 ? '2.2rem' :  // mobile
        deviceWidth < 1279 ? '3.7rem' :  // tablet 
        deviceWidth < 1439 ? '4rem' :    // laptop-md
        deviceWidth < 1919 ? '4.2rem' :  // laptop-hd
                             '4.7rem';   // desktop-hd
    }

  quoteDom.innerText = `"${randomQuote.quote}"`;
  quoteAuthorDom.innerText = randomQuote.author || '';

  if (randomQuote.link) {
    quoteLinkDom.innerText = 'link';
    quoteLinkDom.setAttribute('href', randomQuote.link);
  } else {
    quoteLinkDom.innerText = '';
    quoteLinkDom.removeAttribute('href');
  }
}

/* *** CONTACT *** */

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputEmail.validity.valid) {
    const sendEmailURL = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
    const data = {
      'param1': inputEmail.value,
      'param2': inputMessage.value
    };

    fetch(sendEmailURL, {
      body: JSON.stringify(data),
      method: "POST",
      dataType: 'json',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (resp) {
      alert('Hurray! Mail was sent successfully! =D');
      return resp.json();
    }).catch(function (err) {
      console.log('error', err);
    });
  }
});
