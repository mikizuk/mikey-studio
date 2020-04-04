import * as firebase from './script-firebase-api.js';

/* ************ DOM elements ************ */

/* *** NAV *** */
export const navButton = document.getElementsByClassName('button-menu')[0];
export const navigationItems = document.getElementsByClassName('navigation__item');
/* *** HERO *** */
export const heroList = document.getElementsByClassName('hero__list')[0];
export const heroTitle = document.getElementsByClassName('hero__title')[0];
export const heroDesc = document.getElementsByClassName('hero__desc')[0];
/* *** QUOTE *** */
export const buttonQuote = document.getElementsByClassName('button--quote')[0];
export let isNavButtonOpen = false;
/* *** PROJECTS *** */
export const projectWrapper = document.getElementsByClassName('projects-wrapper')[0];
/* *** ABOUT *** */
export const aboutWrapper = document.getElementsByClassName('about-grid')[0];
/* *** STACK *** */
export const stackGrid = document.getElementsByClassName('stack-grid')[0];
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
  const quoteDom = document.getElementsByClassName('quote')[0];
  const quoteAuthorDom = document.getElementsByClassName('quote-author')[0];
  const quoteLinkDom = document.getElementsByClassName('quote-link')[0];

  // TODO sizes will work for mobile only ;)
  // character counter https://www.charactercountonline.com/
  if (randomQuote.quote.length > 300) {
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
