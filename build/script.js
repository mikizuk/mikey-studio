/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scriptDom = __webpack_require__(1);

var _scriptDom2 = _interopRequireDefault(_scriptDom);

var _unsplashApi = __webpack_require__(2);

var _unsplashApi2 = _interopRequireDefault(_unsplashApi);

var _scriptFirebaseApi = __webpack_require__(3);

var _scriptFirebaseApi2 = _interopRequireDefault(_scriptFirebaseApi);

var _scriptAwslambdaApi = __webpack_require__(4);

var _scriptAwslambdaApi2 = _interopRequireDefault(_scriptAwslambdaApi);

var _scriptIntersectionObserver = __webpack_require__(5);

var _scriptIntersectionObserver2 = _interopRequireDefault(_scriptIntersectionObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var quotes = null;

document.addEventListener("DOMContentLoaded", function () {
  /* ********* NAV ********* */
  var navButton = document.getElementsByClassName('button-menu')[0];
  var navigationItems = document.getElementsByClassName('navigation__item');
  /* ********* HERO ********* */
  var heroList = document.getElementsByClassName('hero__list')[0];
  var heroTitle = document.getElementsByClassName('hero__title')[0];
  var heroDesc = document.getElementsByClassName('hero__desc')[0];
  /* ********* QUOTE ********* */
  var buttonQuote = document.getElementsByClassName('button--quote')[0];
  var isNavButtonOpen = false;
  /* ********* PROJECTS ********* */
  var projectWrapper = document.getElementsByClassName('projects-wrapper')[0];
  /* ********* ABOUT ********* */
  var aboutWrapper = document.getElementsByClassName('about-grid')[0];
  /* ********* STACK ********* */
  var stackGrid = document.getElementsByClassName('stack-grid')[0];
  /* ********* - ********* */
  var getDomListener = function getDomListener() {
    // domListener.listenNavEvents();
    var toggleVisibilityMenuItems = function toggleVisibilityMenuItems(navigationItems, isNavButtonOpen) {
      if (isNavButtonOpen) {
        for (var i = 0; i < navigationItems.length; i++) {
          navigationItems[i].classList.add('navigation__item--movein');
          navigationItems[i].classList.remove('navigation__item--hidden');
        }
      } else {
        for (var _i = 0; _i < navigationItems.length; _i++) {
          navigationItems[_i].classList.add('navigation__item--hidden');
          navigationItems[_i].classList.remove('navigation__item--movein');
        }
      }
    };
    var toggleNavigationButton = function toggleNavigationButton(buttonState) {
      isNavButtonOpen = !buttonState;
      navButton.classList.toggle('button-menu-open', isNavButtonOpen);
      toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
    };

    navButton.addEventListener('click', function () {
      return toggleNavigationButton(isNavButtonOpen);
    });
    document.addEventListener('click', function (e) {
      // console.log(e.target.className, 'isNavButtonOpen', isNavButtonOpen);
      if (isNavButtonOpen) {
        if (e.target.className === 'navigation__link' || e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger') {
          toggleNavigationButton(true);
        }
      }
    });

    buttonQuote.addEventListener('click', function () {
      return getRandomQuote(quotes);
    });
  };

  var getFirebaseData = function getFirebaseData() {
    // firebaseApi.firebaseApi();
    var firebaseConfig = {
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
    firebase.database().ref().on('value', function (snap) {
      var firebaseDatabase = snap.val();
      console.log('firebaseDatabase', firebaseDatabase);
      if (firebaseDatabase) {
        /* ********* HERO ********* */
        if (firebaseDatabase.hero && firebaseDatabase.hero.keyPoints) {
          firebaseDatabase.hero.keyPoints.forEach(function (word) {
            var keyItem = document.createElement('li');
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
          firebaseDatabase.projects.forEach(function (project) {
            var projectElem = document.createElement('div');
            projectElem.classList.add('project');
            projectWrapper.appendChild(projectElem);
            var projectImage = document.createElement('img');
            projectImage.classList.add('project__image');
            if (project.id === 0) {
              projectImage.setAttribute('src', './assets/project-trop-1920x1088.jpg');
            } else if (project.id === 1) {
              projectImage.setAttribute('src', './assets/project-wydawca-1920x1088.jpg');
            } else if (project.id === 2) {
              projectImage.setAttribute('src', './assets/project-mikeystudio-1920x1088.jpg');
            }
            projectElem.appendChild(projectImage);
            var projectTitle = document.createElement('div');
            projectTitle.classList.add('project__title');
            projectTitle.innerText = project.title;
            projectElem.appendChild(projectTitle);
            var projectHeader = document.createElement('div');
            projectHeader.classList.add('project__header');
            projectHeader.innerText = project.header;
            projectElem.appendChild(projectHeader);
            var projectDesc = document.createElement('div');
            projectDesc.classList.add('project__description');
            projectDesc.innerText = project.description;
            projectElem.appendChild(projectDesc);
            if (project.hashtags) {
              var projectHashtagsDiv = document.createElement('div');
              projectHashtagsDiv.classList.add('project__hashtags');
              projectElem.appendChild(projectHashtagsDiv);
              for (var i = 0; i < project.hashtags.length; i++) {
                var hashtagSpan = document.createElement('span');
                hashtagSpan.classList.add('project__hashtag');
                hashtagSpan.innerText = project.hashtags[i];
                projectHashtagsDiv.appendChild(hashtagSpan);
                if ((i + 1) % 3 === 0) {
                  projectHashtagsDiv.appendChild(document.createElement('br'));
                  projectHashtagsDiv.appendChild(document.createElement('br'));
                }
              };
            }
            var projectButtons = document.createElement('div');
            projectButtons.classList.add('project__buttons');
            projectElem.appendChild(projectButtons);
            if (project.websiteLink) {
              var websiteLink = document.createElement('a');
              projectButtons.appendChild(websiteLink);
              websiteLink.classList.add('button', 'button--alter');
              websiteLink.setAttribute('target', '_blank');
              websiteLink.innerText = 'Website';
              websiteLink.setAttribute('href', project.websiteLink);
            }
            if (project.repoLink) {
              var repoLink = document.createElement('a');
              projectButtons.appendChild(repoLink);
              repoLink.classList.add('button', 'button--alter');
              repoLink.setAttribute('target', '_blank');
              repoLink.innerText = 'Repo';
              repoLink.setAttribute('href', project.repoLink);
            }
          });
        }
        /* ********* ABOUT ********* */
        if (firebaseDatabase.aboutList) {
          firebaseDatabase.aboutList.forEach(function (aboutItem) {
            var aboutSection = document.createElement('div');
            var aboutHeader = document.createElement('h6');
            var aboutDescription = document.createElement('p');
            aboutSection.classList.add('' + aboutItem.className);
            aboutDescription.innerText = aboutItem.description;
            aboutHeader.innerText = aboutItem.header;
            aboutSection.appendChild(aboutHeader);
            aboutSection.appendChild(document.createElement('br'));
            aboutSection.appendChild(aboutDescription);
            aboutWrapper.appendChild(aboutSection);
          });
        }
        /* ********* STACK ********* */
        if (firebaseDatabase.techStack) {
          var svg = document.getElementsByTagName('svg');

          var _loop = function _loop(i) {
            var svgItem = svg[i];
            var svgClasses = [].concat(_toConsumableArray(svg[i].classList));
            firebaseDatabase.techStack.forEach(function (tech) {
              if (svgClasses.includes(tech.className)) {
                var techItem = document.createElement('span');
                techItem.classList.add('stack-technology');
                var techDescription = document.createElement('span');
                techDescription.classList.add('stack-description');
                techItem.innerText = tech.technology;
                techDescription.innerText = tech.description;
                svgItem.parentNode.insertBefore(techItem, svgItem.nextSibling);
                techItem.parentNode.insertBefore(techDescription, techItem.nextSibling);
              }
            });
          };

          for (var i = 0; i < svg.length; i++) {
            _loop(i);
          }
        }
        /* ********* - ********* */
      }
    });
  };

  var getUnsplashData = function getUnsplashData() {
    return _unsplashApi2.default.fetchUnsplashApi();
  };
  var getEmailService = function getEmailService() {
    return _scriptAwslambdaApi2.default.getAwsLambdaFunctions();
  };

  getDomListener();
  getFirebaseData();
  getUnsplashData();
  getEmailService();
  getIntersectionObserver();

  // handleForm()
});

var getIntersectionObserver = function getIntersectionObserver() {
  return _scriptIntersectionObserver2.default.listenToObserver();
};

var getRandomQuote = function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  showNewQuote(randomQuote);
};

var showNewQuote = function showNewQuote(randomQuote) {
  var quoteDom = document.getElementsByClassName('quote')[0];
  var quoteAuthorDom = document.getElementsByClassName('quote-author')[0];
  var quoteLinkDom = document.getElementsByClassName('quote-link')[0];

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
  quoteDom.innerText = '"' + randomQuote.quote + '"';
  quoteAuthorDom.innerText = randomQuote.author || '';
  if (randomQuote.link) {
    quoteLinkDom.innerText = 'link';
    quoteLinkDom.setAttribute('href', randomQuote.link);
  } else {
    quoteLinkDom.innerText = '';
    quoteLinkDom.removeAttribute('href');
  }
};

var handleForm = function handleForm() {
  var form = document.getElementById('form');
  var inputEmail = document.getElementById('inputEmail');
  var inputMessage = document.getElementById('inputMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // return alert('Hurray! Mail was sent successfully! :)')
      var sendEmail = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
      var data = {
        'param1': inputEmail.value,
        'param2': inputMessage.value
      };
      console.log('data', data);

      fetch(sendEmail, {
        body: JSON.stringify(data),
        // type: "POST",
        method: "POST",
        dataType: 'json',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
      }).then(function (resp) {
        console.log('resp', resp);
        return resp.json();
      }).then(function (response) {
        console.log('response', response);
      }).catch(function (err) {
        console.log('error', err);
      });
    });
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listenNavEvents = function listenNavEvents() {
  var navButton = document.getElementsByClassName('button-menu')[0];
  var navigationItems = document.getElementsByClassName('navigation__item');
  var isNavButtonOpen = false;
  var toggleVisibilityMenuItems = function toggleVisibilityMenuItems(navigationItems, isNavButtonOpen) {
    if (isNavButtonOpen) {
      for (var i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.add('navigation__item--movein');
        navigationItems[i].classList.remove('navigation__item--hidden');
      }
    } else {
      for (var _i = 0; _i < navigationItems.length; _i++) {
        navigationItems[_i].classList.add('navigation__item--hidden');
        navigationItems[_i].classList.remove('navigation__item--movein');
      }
    }
  };
  var toggleNavigationButton = function toggleNavigationButton(buttonState) {
    isNavButtonOpen = !buttonState;
    navButton.classList.toggle('button-menu-open', isNavButtonOpen);
    toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
  };

  navButton.addEventListener('click', function () {
    return toggleNavigationButton(isNavButtonOpen);
  });
  document.addEventListener('click', function (e) {
    // console.log(e.target.className, 'isNavButtonOpen', isNavButtonOpen);
    if (isNavButtonOpen) {
      if (e.target.className === 'navigation__link' || e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger') {
        toggleNavigationButton(true);
      }
      // if (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger') {
      // console.log('!???', );
      // toggleNavigationButton(true);
      // }
    }
  });
};

exports.default = { listenNavEvents: listenNavEvents };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO fetch data from Unsplash
// https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines


function fetchUnsplashApi() {
  // https://unsplash.com/documentation
  var client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashcall = 'https://api.unsplash.com/users/daxtersky/collections?client_id=' + client_id;
  var unsplashUser = 'https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserPhotos = 'https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserCollentions = 'https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashMyCollention = 'https://api.unsplash.com/users/daxtersky/collection/9522596?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  // fetch(unsplashUserPhotos)
  //   .then(resp => resp.json())
  //   .then(response => {
  //     console.log('response', response);
  //     console.log('photo', response[0].urls);
  //     // document.getElementById('unsplash-image').src = response[0].urls.regular;
  //   }).catch(err => {
  //     console.log('error', err);
  //   })
  fetch(unsplashUserPhotos).then(function (resp) {
    return resp.json();
  }).then(function (response) {
    // console.log('response', response);
    // console.log('photo', response[0].urls);
    // document.getElementById('unsplash-image').src = response[0].urls.regular;
  }).catch(function (err) {
    // console.log('error', err);
  });
}

exports.default = { fetchUnsplashApi: fetchUnsplashApi };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// const firebaseApi = () => {
var firebaseConfig = {
  apiKey: "AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",
  authDomain: "fir-database-mikey.firebaseapp.com",
  databaseURL: "https://fir-database-mikey.firebaseio.com",
  projectId: "fir-database-mikey",
  storageBucket: "fir-database-mikey.appspot.com",
  messagingSenderId: "299569566671",
  appId: "1:299569566671:web:5b22d2ab28ec77479db8ba",
  measurementId: "G-LM0GHJJ6VX"
};

//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   const firebaseDatabase = firebase.database().ref();
//     firebaseDatabase.on('value', snap => {
//     mikeyStudioData = snap.val()
//     console.log('3 mikeyStudioData', mikeyStudioData);
//   });
// }

exports.default = { firebaseConfig: firebaseConfig };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAwsLambdaFunctions = function getAwsLambdaFunctions() {
  // console.log('aws lambda loading');
  var form = document.getElementById('form');
  var inputEmail = document.getElementById('inputEmail');
  var inputMessage = document.getElementById('inputMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Hurray! Mail was sent successfully! :)');
      var sendEmail = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
      var data = {
        'param1': inputEmail.value,
        'param2': inputMessage.value
      };
      console.log('data', data);

      // TODO try handling aws functions' fetch with arrow funtions... maybe it'll help? point no. 5 https://dmitripavlutin.com/javascript-arrow-functions-best-practices/
      fetch(sendEmail, {
        body: JSON.stringify(data),
        // type: "POST",
        method: "POST",
        dataType: 'json',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
      }).then(function (resp) {
        console.log('resp', resp);
        return resp.json();
      }).then(function (response) {
        console.log('response', response);
      }).catch(function (err) {
        console.log('error', err);
      });
    });
  }
};

exports.default = { getAwsLambdaFunctions: getAwsLambdaFunctions };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listenToObserver = function listenToObserver() {
  // console.log('listenToObserver');

  var navigation = document.querySelectorAll('.navigation')[0];
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.getAttribute('id');

      // console.log(entry);

      if (entry.intersectionRatio > 0) {
        document.querySelector('nav ul li a[href="#' + id + '"]').parentElement.classList.add('active');
        // 
        if (entry.target.id === 'section-quote') {
          navigation.style.background = '#2E2E2E'; // TODO not always.... when theme changed...
        }

        // if (entry.target.id === 'hero') {
        //   navigation.style.background = 'initial';
        //   navigation.style.color = '#BE2200';
        // } else if (entry.target.id === 'section-quote') {
        //   navigation.style.background = '#A70267';
        // } else if (entry.target.id === 'landscape') {
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
        document.querySelector('nav ul li a[href="#' + id + '"]').parentElement.classList.remove('active');
      }
    });
  }, { rootMargin: window.innerHeight - 118 + 'px 0px -' + (window.innerHeight - 120) + 'px 0px' });
  document.querySelectorAll('section[id]').forEach(function (section) {
    return observer.observe(section);
  });
};

exports.default = { listenToObserver: listenToObserver };

/***/ })
/******/ ]);