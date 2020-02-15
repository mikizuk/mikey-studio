
import importedModule from './script-abc.js';
import importModuleTwo from './script-abc2.js';
import unsplashApi from './unsplash-api.js';
import firebaseApi from './firebase-api.js';
import awsLambda from './awslambda-api.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1
  listenerNavEvents();
  // 2?
  getFirebaseData();
  getUnsplashData();
  getEmailService()
  // 3
  listenToObserver();
  //
  // playWithJsImports();
})

const listenerNavEvents = () => {
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
  })

}

const getFirebaseData = () => firebaseApi.getFirebaseData();

const getUnsplashData = () => unsplashApi.fetchUnsplashApi();

const getEmailService = () => awsLambda.getAwsLambdaFunctions();

const listenToObserver = () => {
  const navigation = document.querySelectorAll('.navigation')[0];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      // console.log(entry);
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
        // if (entry.target.id === 'hero') {
        //   navigation.style.background = 'initial';
        //   navigation.style.color = '#BE2200';
        // } else if (entry.target.id === 'quote') {
        //   navigation.style.background = '#A70267';
        // } else if (entry.target.id === 'parallax') {
        //   navigation.style.color = 'pink';
        //   navigation.style.background = 'yellow';
        // } else if (entry.target.id === 'projects') {
        //   navigation.style.color = 'green'
        //   navigation.style.background = 'yellow';
        // } else if (entry.target.id === 'about') {
        //   navigation.style.background = 'white';
        //   navigation.style.color = 'green';
        // } else if (entry.target.id === 'contact') {
        //   navigation.style.background = 'green';
        //   navigation.style.color = 'brown';
        // }
      } else {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
      }

    })
  }, { rootMargin: `${window.innerHeight - 118}px 0px -${window.innerHeight - 120}px 0px` });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
  



}

const playWithJsImports = () => {
  console.log('------------------importedModule');
  importedModule.importedFunction();
  console.log('importedVar', importedModule.importedVar);
  console.log('importedModule', importedModule);
  console.log('------------------importedModule2');
  importModuleTwo.add(2, 4);
  console.log('variable:', importModuleTwo.catVar);
  console.log('object:', importModuleTwo.catObj.name, importModuleTwo.catObj);
  console.log('------------------');
}
