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
  /* ********* PROJECTS ********* */
  const projectWrapper = document.getElementsByClassName('projects-wrapper')[0];
  /* ********* - ********* */
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
        if (firebaseDatabase.hero && firebaseDatabase.hero.keyPoints) {
          firebaseDatabase.hero.keyPoints.forEach(word => {
            const keyItem = document.createElement('li');
            heroList.appendChild(keyItem);
            keyItem.innerText = word;
          });
        }
        heroDesc.innerText = firebaseDatabase.hero.intro;
        heroTitle.innerText = firebaseDatabase.hero.title;
        /* ********* QUOTE ********* */
        if (firebaseDatabase.quotes) {
          quotes = firebaseDatabase.quotes;
          getRandomQuote(firebaseDatabase.quotes);
        }
        /* ********* PROJECTS ********* */
        if (firebaseDatabase.projects) {
          firebaseDatabase.projects.forEach(project => {
            // console.log('project', project);
            const projectElem = document.createElement('div');
            projectElem.classList.add('project');
            projectWrapper.appendChild(projectElem);
            const projectImage = document.createElement('img');
            projectImage.classList.add('project__image');
            if (project.id === 0) {
              projectImage.setAttribute('src', './assets/project-trop-1920x1088.jpg');
            } else if (project.id === 1) {
              projectImage.setAttribute('src', './assets/project-wydawca-1920x1088.jpg');
            } else if (project.id === 2) {
              projectImage.setAttribute('src', './assets/project-mikeystudio-1920x1088.jpg');
            }
            projectElem.appendChild(projectImage);
            const projectTitle = document.createElement('div');
            projectTitle.classList.add('project__title');
            projectTitle.innerText = project.title;
            projectElem.appendChild(projectTitle);
            const projectHeader = document.createElement('div');
            projectHeader.classList.add('project__header');
            projectHeader.innerText = project.header;
            projectElem.appendChild(projectHeader);
            const projectDesc = document.createElement('div');
            projectDesc.classList.add('project__description');
            projectDesc.innerText = project.description;
            projectElem.appendChild(projectDesc);

            if (project.hashtags) {
              const projectHashtagsDiv = document.createElement('div');
              projectHashtagsDiv.classList.add('project__hashtags');
              projectElem.appendChild(projectHashtagsDiv);
              for (let i = 0; i < project.hashtags.length; i++) {
                const hashtagSpan = document.createElement('span');
                hashtagSpan.classList.add('project__hashtag');
                hashtagSpan.innerText = project.hashtags[i];
                projectHashtagsDiv.appendChild(hashtagSpan);
                if ((i + 1) % 3 === 0) {
                  projectHashtagsDiv.appendChild(document.createElement('br'));
                  projectHashtagsDiv.appendChild(document.createElement('br'));
                }
              };
            }

            const projectButtons = document.createElement('div');
            projectButtons.classList.add('project__buttons');
            projectElem.appendChild(projectButtons);
            if (project.websiteLink) {
              const websiteLink = document.createElement('a');
              projectButtons.appendChild(websiteLink);
              websiteLink.classList.add('button', 'button--alter');
              websiteLink.setAttribute('target', '_blank');
              websiteLink.innerText = 'Website';
              websiteLink.setAttribute('href', project.websiteLink);
            }
            if (project.repoLink) {
              const repoLink = document.createElement('a');
              projectButtons.appendChild(repoLink);
              repoLink.classList.add('button', 'button--alter');
              repoLink.setAttribute('target', '_blank');
              repoLink.innerText = 'Repo'
              repoLink.setAttribute('href', project.repoLink)
            }
          });
        }
        /* ********* - ********* */
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
