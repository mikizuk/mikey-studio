import domListener from './script-dom.js';
import unsplashApi from './unsplash-api.js';
import firebaseApi from './script-firebase-api.js';
import awsLambda from './script-awslambda-api.js';
import intersectionObserver from './script-intersection-observer.js';

document.addEventListener("DOMContentLoaded", () => {


  const getDomListener = () => { // domListener.listenNavEvents();
    const navButton = document.getElementsByClassName('button-menu')[0];
    const navigationItems = document.getElementsByClassName('navigation__item');
    let isNavButtonOpen = false;
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
        // if (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger') {
        // console.log('!???', );
        // toggleNavigationButton(true);
        // }
      }
    });
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
    const firebaseDatabase = firebase.database().ref();
    firebaseDatabase.on('value', snap => {
      console.log('3 mikeyStudioData', snap.val());
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
