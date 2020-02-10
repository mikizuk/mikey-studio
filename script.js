
import importedModule from './script-abc.js';
import importModuleTwo from './script-abc2.js';
import unsplashApi from './unsplash-api.js';

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

const getFirebaseData = () => {
  const config = {
    apiKey: "AIzaSyDq8sv5WWmiwbbj4RfA5-QkokqTh_uMblA",
    authDomain: "mikey-database.firebaseapp.com",
    databaseURL: "https://mikey-database.firebaseio.com",
    projectId: "mikey-database",
    storageBucket: "mikey-database.appspot.com",
    messagingSenderId: "841627576040",
    appId: "1:841627576040:web:0c4448f2517bf9a3094b5d",
    measurementId: "G-6HGRS89R6Y"

  };
  firebase.initializeApp(config);
  firebase.analytics();
  firebase.analytics().logEvent('notification_received');


  // const dbRefObject = firebase.database().ref().child('mikey-db');
  // const hobbies = dbRefObject.child('hobbies');
  // const firebaseText = document.getElementById('firebase-text');
  // const ulList = document.getElementById('list');

  // dbRefObject.on('value', snap => {
  //   const mikeyDb = snap.val();
  //   console.log('firebase database', mikeyDb);
  //   firebaseText.innerText = mikeyDb.textOnPage;
  //   firebaseText.style.color = 'red';
  // });

  // hobbies.on('child_added', snap => {
  //   console.log(snap.val());
  //   const li = document.createElement('li');
  //   li.innerText = snap.val();
  //   ulList.style.color = 'blue';
  //   ulList.appendChild(li);
  // });
}

const getUnsplashData = () => unsplashApi.fetchUnsplashApi();

const getEmailService = () => {
  const form = document.getElementById('form');
  const inputEmail = document.getElementById('inputEmail');
  const inputMessage = document.getElementById('inputMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Hurray! Mail was sent successfully! :)')
      const sendEmail = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + `?param1=${inputEmail.value}` + `&param2=${inputMessage.value}`;
      const data = {
        'param1': inputEmail.value,
        'param2': inputMessage.value
      };
      console.log('data', data);

      fetch(sendEmail,
        {
          body: JSON.stringify(data),
          // type: "POST",
          method: "POST",
          dataType: 'json',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          },
        })
        .then(function (resp) {
          console.log('resp', resp);
          return resp.json();
        })
        .then(function (response) {
          console.log('response', response);
        })
        .catch(function (err) {
          console.log('error', err);
        });
    })

  }
}

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
