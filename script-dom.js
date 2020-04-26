import * as firebase from './script-firebase-api.js';

/* ************ DOM elements ************ */
export const spinner = document.querySelector('.spinner');
/* *** NAV *** */
export const colorPicker = document.querySelector('.color-picker');
export const navButton = document.querySelector('.button-menu');
export const navigationItems = document.getElementsByClassName('navigation__item');
/* *** HERO *** */
export const heroList = document.querySelector('.hero__list'); // intersection observer
export const heroTitle = document.querySelector('.hero__title'); // intersection observer
export const heroDesc = document.querySelector('.hero__desc'); // intersection observer
/* *** LANDSCAPE *** */
export const landscape = document.querySelector('.section-landscape');
/* *** QUOTE *** */
export const buttonQuote = document.querySelector('.button--quote');
export let isNavButtonOpen = false;
/* *** PROJECTS *** */
export const projectWrapper = document.querySelector('.section-projects__wrapper');
/* *** ABOUT *** */
export const aboutWrapper = document.querySelector('.section-about__about-grid');
export const aboutImages = document.querySelectorAll('.section-about__images');

export const pic1 = document.querySelector('.pic-1'); // intersection observer
export const pic2 = document.querySelector('.pic-2'); // intersection observer
export const pic3 = document.querySelector('.pic-3'); // intersection observer
export const pic4 = document.querySelector('.pic-4'); // intersection observer
export const pic5 = document.querySelector('.pic-5'); // intersection observer
export const pic6 = document.querySelector('.pic-6'); // intersection observer

/* *** STACK *** */
export const stackGrid = document.querySelector('.section-about__stack-grid'); // intersection observer

export const landscape2 = document.querySelector('.landscape2'); // intersection observer


/* *** CONTACT *** */

export const socials = document.querySelector('.section-contact__social-wrapper'); // intersection observer

export const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const inputMessage = document.getElementById('inputMessage');

/* ************ DOM event listeners ************ */

/* *** NAV *** */

colorPicker.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
  // const changeColorTransition = () => {
    document.documentElement.classList.add('color-transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('color-transition');
    }, 300)
    // console.log('colorPicker', colorPicker);
  // }
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

const deviceHeight = ((window.innerHeight > 0) ? window.innerHeight * 0.01 : screen.height * 0.01);
document.documentElement.style.setProperty('--vh', `${deviceHeight}px`);

/* *** QUOTE *** */

buttonQuote.addEventListener('click', () => {
  getRandomQuote(firebase.quotes);
})

export const getRandomQuote = (quotes) => {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomNumber];
  showNewQuote(randomQuote);
}

const showNewQuote = (randomQuote) => {
  const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  const quoteDom = document.querySelector('.section-quote__text');
  const quoteAuthorDom = document.querySelector('.section-quote__author');
  const quoteLinkDom = document.querySelector('.section-quote__link');

  // character counter https://www.charactercountonline.com/
  // console.log('randomQuote.quote.length', randomQuote.quote.length);
  if (deviceWidth <= 767) {
    // mobile
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '1rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '1.1rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '1.3rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '1.6rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '1.9rem';
    } else {
      quoteDom.style.fontSize = '2.1rem';
    }
  } else if (deviceWidth < 1279) {
    // laptop-md
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.2rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.4rem';
    } else {
      quoteDom.style.fontSize = '3.7rem';
    }
  } else if (deviceWidth < 1439) {
    // laptop-hd 
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2.2rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.4rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.7rem';
    } else {
      quoteDom.style.fontSize = '4rem';
    }
  } else if (deviceWidth < 1919) { 
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2.3rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.4rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.6rem';
    } else {
      quoteDom.style.fontSize = '3.9rem';
    }
  } else {
    // desktop-hd
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '3rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '3.3rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.6rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.9rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '4.2rem';
    } else {
      quoteDom.style.fontSize = '4.7rem';
    }
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
  const sendEmailURL = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
  const data = {
    'param1': inputEmail.value,
    'param2': inputMessage.value
  };
  // console.log('data', data);

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
    // console.log('resp', resp);
    alert('Hurray! Mail was sent successfully! =D');
    return resp.json();
  }).then(function (response) {
    // console.log('response', response);
  }).catch(function (err) {
    // console.log('error', err);
  });
});
