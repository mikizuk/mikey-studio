import domListener from './script-dom.js';
import unsplashApi from './unsplash-api.js';
import firebaseApi from './script-firebase-api.js';
import awsLambda from './script-awslambda-api.js';
import intersectionObserver from './script-intersection-observer.js';

let quotes = null;

document.addEventListener("DOMContentLoaded", () => {
  /* ********* NAV ********* */
  const navButton = document.getElementsByClassName('button-menu')[0];
  const navigationItems = document.getElementsByClassName('navigation__item');
  /* ********* HERO ********* */
  const heroList = document.getElementsByClassName('hero__list')[0];
  const heroTitle = document.getElementsByClassName('hero__title')[0];
  const heroDesc = document.getElementsByClassName('hero__desc')[0];
  /* ********* QUOTE ********* */

  const buttonQuote = document.getElementsByClassName('button--quote')[0];
  let isNavButtonOpen = false;

  const getDomListener = () => { // domListener.listenNavEvents();
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
      // console.log(e.target.className, 'isNavButtonOpen', isNavButtonOpen);
      if (isNavButtonOpen) {
        if (e.target.className === 'navigation__link' || (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger')) {
          toggleNavigationButton(true);
        }
      }
    });
    
    buttonQuote.addEventListener('click', () => getRandomQuote(quotes))
  }

  const getFirebaseData = () => { // firebaseApi.firebaseApi();
    const firebaseConfig = {
      apiKey: "AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",
      authDomain: "fir-database-mikey.firebaseapp.com",
      databaseURL: "https://fir-database-mikey.firebaseio.com",
      projectId: "fir-database-mikey",
      storageBucket: "fir-database-mikey.appspot.com",
      messagingSenderId: "299569566671",
      appId: "1:299569566671:web:5b22d2ab28ec77479db8ba",
      measurementId: "G-LM0GHJJ6VX"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.database().ref().on('value', snap => {
      const firebaseDatabase = snap.val();
      console.log('firebaseDatabase', firebaseDatabase);
      if (firebaseDatabase) {
        /* ********* HERO ********* */
        firebaseDatabase.hero.keyPoints.forEach(word => {
          const keyItem = document.createElement('li');
          heroList.appendChild(keyItem);
          keyItem.innerText = word;
        });
        heroDesc.innerText = firebaseDatabase.hero.intro;
        heroTitle.innerText = firebaseDatabase.hero.title;
        /* ********* QUOTE ********* */
        if (firebaseDatabase.quotes) {
          quotes = firebaseDatabase.quotes;
          getRandomQuote(firebaseDatabase.quotes);
        }
      }
    });
  }

  const getUnsplashData = () => unsplashApi.fetchUnsplashApi();
  const getEmailService = () => awsLambda.getAwsLambdaFunctions();

  getDomListener();
  getFirebaseData();
  getUnsplashData();
  getEmailService()
  getIntersectionObserver();
})

const getIntersectionObserver = () => intersectionObserver.listenToObserver();

const getRandomQuote = (quotes) => {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomNumber];
  showNewQuote(randomQuote);
}

const showNewQuote = (randomQuote) => {
  const quoteDom = document.getElementsByClassName('quote')[0];
  const quoteAuthorDom = document.getElementsByClassName('quote-author')[0];
  const quoteLinkDom = document.getElementsByClassName('quote-link')[0];

  // TODO sizes for tablet only ;)
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
