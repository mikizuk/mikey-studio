
import importedModule from './script-abc.js';
import importModuleTwo from './script-abc2.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1
  setNavigationMenu();
  // 2?
  getFirebaseData();
  getUnsplashData();
  getEmailService()
  // 3
  listenToObserver();
})

const setNavigationMenu = () => {
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

const listenToObserver = () => {
  console.log('this window height', window.clientHeight);
  console.log('this window height', window.clientHeight - 120);
  const navigation = document.querySelectorAll('.navigation')[0];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.target.id === 'hero' && entry.intersectionRatio > 0) {
        console.log('hero', );
        navigation.style.background = 'initial'
      } else if (entry.target.id === 'quote' && entry.intersectionRatio > 0) {
        navigation.style.background = '#A70267'
        console.log('quote', );
      } else if (entry.target.id === 'parallax' && entry.intersectionRatio > 0) {
        navigation.style.color = 'pink'
        console.log('parallax', );
        navigation.style.background = 'yellow'
      } else if (entry.target.id === 'about' && entry.intersectionRatio > 0) {
        navigation.style.background = 'white'
        console.log('about', );
        navigation.style.color = 'green'
      } else if (entry.target.id === 'contact' && entry.intersectionRatio > 0) {
        navigation.style.background = 'green'
        console.log('contact', );
        navigation.style.color = 'brown'
      }
      
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    })
  }, { rootMargin: `0px 0px -${window.innerHeight - 120}px 0px` });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
  

}
