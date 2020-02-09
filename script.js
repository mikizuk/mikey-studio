
import importedModule from './script-abc.js';
import importModuleTwo from './script-abc2.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1
  setNavigationMenu();
  // 2?
  getFirebaseData();
  getUnsplashData();
  getEmailService()

})

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

const getUnsplashData = () => {
  console.log('getUnsplashData');

  console.log('------------------importedModule');
  importedModule.importedFunction();
  console.log('importedVar', importedModule.importedVar);
  console.log('importedModule', importedModule);
  console.log('------------------importedModule2');
  importModuleTwo.add(2, 4);
  console.log('variable:', importModuleTwo.catVar);
  console.log('object:', importModuleTwo.catObj.name, importModuleTwo.catObj);
  console.log('------------------');

  // TODO fetch data from Unsplash
  // https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
}

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

const setNavigationMenu = () => {
  const navButton = document.getElementsByClassName('button-menu')[0];
  const navigationItems = document.getElementsByClassName('navigation__item');
  let isNavButtonOpen = false;
  const toggleVisibilityMenuItems = (navigationItems, isNavButtonOpen) => {
    if (isNavButtonOpen) {
      for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.remove('navigation__item--hidden');
      }
    } else {
      for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.add('navigation__item--hidden');
      }
    }
  }
  const hideMenuItemsWhenDesktop = () => {
    if (window.innerWidth < 1440) {
      toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
    }
  }
  const toggleNavigationButton = (buttonState) => {
    isNavButtonOpen = !buttonState;
    navButton.classList.toggle('button-menu-open', isNavButtonOpen);
    toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
  }

  hideMenuItemsWhenDesktop();
  navButton.addEventListener('click', () => toggleNavigationButton(isNavButtonOpen))

  document.addEventListener('click', (e) => {
    if (isNavButtonOpen && e.target.className === 'navigation__link') { // TODO || e.target.className === 'navigation__logo-title' || e.target.className !== 'button-menu button-menu-open')
      toggleNavigationButton(true);
    }
  })



}
