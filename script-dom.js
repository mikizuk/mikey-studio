import * as firebase from './script-firebase-api.js';

/* ************ DOM elements ************ */

/* *** NAV *** */
export const navButton = document.querySelector('.button-menu');
export const navigationItems = document.getElementsByClassName('navigation__item');
/* *** HERO *** */
export const heroList = document.querySelector('.hero__list');
export const heroTitle = document.querySelector('.hero__title');
export const heroDesc = document.querySelector('.hero__desc');
/* *** QUOTE *** */
export const buttonQuote = document.querySelector('.button--quote');
export let isNavButtonOpen = false;
/* *** PROJECTS *** */
export const projectWrapper = document.querySelector('.projects-wrapper');
/* *** ABOUT *** */
export const aboutWrapper = document.querySelector('.about-grid');
/* *** STACK *** */
export const stackGrid = document.querySelector('.stack-grid');
/* *** CONTACT *** */
const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const inputMessage = document.getElementById('inputMessage');

/* ************ DOM event listeners ************ */

/* *** NAV *** */

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
  navButton.classList.toggle('button-menu-open', isNavButtonOpen);
  toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
}

navButton.addEventListener('click', () => toggleNavigationButton(isNavButtonOpen))

document.addEventListener('click', (e) => {
  if (isNavButtonOpen) {
    if (e.target.className === 'navigation__link' || (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger')) {
      toggleNavigationButton(true);
    }
  }
})

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
  const quoteDom = document.querySelector('.quote');
  const quoteAuthorDom = document.querySelector('.quote-author');
  const quoteLinkDom = document.querySelector('.quote-link');

  // TODO sizes will work for mobile only ;)
  // character counter https://www.charactercountonline.com/
  if (randomQuote.quote.length > 400) {
    quoteDom.style.fontSize = '45px';
  } else if (randomQuote.quote.length > 300) {
    quoteDom.style.fontSize = '50px';
  } else if (randomQuote.quote.length > 200) {
    quoteDom.style.fontSize = '64px';
  } else if (randomQuote.quote.length > 150) {
    quoteDom.style.fontSize = '75px';
  } else if (randomQuote.quote.length > 100) {
    quoteDom.style.fontSize = '80px';
  } else {
    quoteDom.style.fontSize = '85px';
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
