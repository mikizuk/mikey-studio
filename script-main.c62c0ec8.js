// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script-intersection-observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var domElement = _interopRequireWildcard(require("./script-dom.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var listenToObserver = function listenToObserver() {
  var heightMargin = domElement.deviceHeight / 10;
  var elementsToTop = [domElement.heroTitle, domElement.heroDesc, domElement.pic1, domElement.pic2, domElement.pic3, domElement.pic4, domElement.pic5, domElement.landscape2];
  var elementsToBottom = [domElement.pic6, domElement.stackGrid, domElement.socials, domElement.form];
  var observerOptions = {
    rootMargin: "-".concat(heightMargin, "px 0px -").concat(heightMargin, "px 0px")
  };
  var observer = new IntersectionObserver(function (entries) {
    return entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        if (isIntersected(elementsToTop, entry)) {
          entry.target.classList.add('swipe-top');
        } else if (isIntersected(elementsToBottom, entry)) {
          entry.target.classList.add('swipe-bottom');
        }
      } else {
        entry.target.classList.remove('swipe-top', 'swipe-bottom');
      }
    });
  }, observerOptions);
  elementsToTop.forEach(function (elem) {
    return observer.observe(elem);
  });
  elementsToBottom.forEach(function (elem) {
    return observer.observe(elem);
  });
};

function isIntersected(elements, entry) {
  return elements.find(function (y) {
    return y.className === entry.target.className;
  }) && elements.find(function (y) {
    return y.className === entry.target.className;
  }).className;
}

var _default = {
  listenToObserver: listenToObserver
};
exports.default = _default;
},{"./script-dom.js":"script-dom.js"}],"script-firebase-api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.quotes = void 0;

var domElement = _interopRequireWildcard(require("./script-dom.js"));

var _scriptIntersectionObserver = _interopRequireDefault(require("./script-intersection-observer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var quotes = [];
exports.quotes = quotes;

var fetchFirebaseApi = function fetchFirebaseApi() {
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
    console.log('Firebase data loaded', firebaseDatabase);

    if (firebaseDatabase) {
      turnLoadSpinnerOff();
      loadIntersectionObserver();
      /* ********* HERO ********* */

      if (firebaseDatabase.hero && firebaseDatabase.hero.keyPoints) {
        firebaseDatabase.hero.keyPoints.forEach(function (word) {
          var keyItem = document.createElement('li');
          domElement.heroList.appendChild(keyItem);
          keyItem.innerText = word;
        });
      }

      domElement.heroDesc.innerText = firebaseDatabase.hero.intro;
      domElement.heroTitle.innerText = firebaseDatabase.hero.title;
      /* ********* QUOTE ********* */

      if (firebaseDatabase.quotes) {
        domElement.quotes = firebaseDatabase.quotes;
        exports.quotes = quotes = firebaseDatabase.quotes;
        domElement.getRandomQuote(firebaseDatabase.quotes);
      }
      /* ********* PROJECTS ********* */


      if (firebaseDatabase.projects) {
        firebaseDatabase.projects.forEach(function (project) {
          var projectElem = document.createElement('div');
          projectElem.classList.add('section-project__project');
          domElement.projectWrapper.appendChild(projectElem);
          var projectImage = document.createElement('img');
          projectImage.classList.add('section-project__image');

          if (project.id === 0) {
            projectImage.setAttribute('src', './project-mikeystudio-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Mikey studio landing page');
          } else if (project.id === 1) {
            projectImage.setAttribute('src', './project-wydawca-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Wydawca.com.pl landing page');
          } else if (project.id === 2) {
            projectImage.setAttribute('src', './project-trop-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Trop landing page');
          } else if (project.id === 3) {
            projectImage.setAttribute('src', './project-ts-habit-app-1920x1088.png');
            projectImage.setAttribute('alt', 'Habits app landing page');
          } else if (project.id === 4) {
            projectImage.setAttribute('src', './project-indie-games-1920x1088.png');
            projectImage.setAttribute('alt', 'Indie games landing page');
          } else if (project.id === 5) {
            projectImage.setAttribute('src', './project-small-projects-1920x1088.png');
            projectImage.setAttribute('alt', 'Small projects landing page');
          }

          projectElem.appendChild(projectImage);
          var projectTitle = document.createElement('h3');
          projectTitle.classList.add('section-project__title');
          projectTitle.innerText = project.title;
          projectElem.appendChild(projectTitle);
          var projectHeader = document.createElement('h4');
          projectHeader.classList.add('section-project__header');
          projectHeader.innerText = project.header;
          projectElem.appendChild(projectHeader);
          var projectDesc = document.createElement('p');
          projectDesc.classList.add('section-project__description');
          projectDesc.innerText = project.description;
          projectElem.appendChild(projectDesc);

          if (project.hashtags) {
            var projectHashtagsDiv = document.createElement('div');
            projectHashtagsDiv.classList.add('section-project__hashtags');
            projectElem.appendChild(projectHashtagsDiv);

            for (var i = 0; i < project.hashtags.length; i++) {
              var hashtagSpan = document.createElement('span');
              hashtagSpan.classList.add('section-project__hashtag');
              hashtagSpan.innerText = "#".concat(project.hashtags[i]);
              projectHashtagsDiv.appendChild(hashtagSpan);

              if ((i + 1) % 3 === 0) {
                projectHashtagsDiv.appendChild(document.createElement('br'));
              }
            }

            ;
          }

          var projectButtons = document.createElement('div');
          projectButtons.classList.add('section-project__buttons');
          projectElem.appendChild(projectButtons);

          if (project.websiteLink) {
            var websiteLink = document.createElement('a');
            projectButtons.appendChild(websiteLink);
            websiteLink.classList.add('button');
            websiteLink.setAttribute('target', '_blank');
            websiteLink.innerText = 'Website';
            websiteLink.setAttribute('href', project.websiteLink);
          }

          if (project.repoLink) {
            var repoLink = document.createElement('a');
            projectButtons.appendChild(repoLink);
            repoLink.classList.add('button');
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
          var aboutDescription = document.createElement('p');
          aboutSection.classList.add("section-about__description", "".concat(aboutItem.className));
          aboutDescription.innerText = aboutItem.description;
          aboutSection.appendChild(aboutDescription);
          domElement.aboutWrapper.appendChild(aboutSection);
        });
      }
      /* ********* STACK ********* */


      if (firebaseDatabase.techStack) {
        var _loop = function _loop(i) {
          var techItem = domElement.techIcon[i];

          var svgClasses = _toConsumableArray(domElement.techIcon[i].classList);

          firebaseDatabase.techStack.forEach(function (tech) {
            if (svgClasses.includes(tech.className)) {
              var techSpan = document.createElement('span');
              techSpan.classList.add('section-about__stack-technology');
              var techDescription = document.createElement('p');
              techDescription.classList.add('section-about__stack-description');
              techSpan.innerText = tech.technology;
              techDescription.innerText = tech.description;
              techItem.parentNode.insertBefore(techSpan, techItem.nextSibling);
              techSpan.parentNode.insertBefore(techDescription, techSpan.nextSibling);
            }
          });
        };

        for (var i = 0; i < domElement.techIcon.length; i++) {
          _loop(i);
        }
      }
    }
  });
};

function turnLoadSpinnerOff() {
  domElement.spinner.classList.add('spinner--off');
}

function loadIntersectionObserver() {
  _scriptIntersectionObserver.default.listenToObserver();
}

var _default = {
  fetchFirebaseApi: fetchFirebaseApi
};
exports.default = _default;
},{"./script-dom.js":"script-dom.js","./script-intersection-observer.js":"script-intersection-observer.js"}],"script-dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomQuote = exports.form = exports.socials = exports.landscape2 = exports.techIcon = exports.stackGrid = exports.pic6 = exports.pic5 = exports.pic4 = exports.pic3 = exports.pic2 = exports.pic1 = exports.aboutImages = exports.aboutWrapper = exports.projectWrapper = exports.isNavButtonOpen = exports.quote = exports.buttonQuote = exports.landscape = exports.heroDesc = exports.heroTitle = exports.heroList = exports.navigationItems = exports.navButton = exports.colorPicker = exports.spinner = exports.deviceWidth = exports.deviceHeight = void 0;

var firebase = _interopRequireWildcard(require("./script-firebase-api.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* ************ device ************ */
var deviceHeight = window.innerHeight > 0 ? window.innerHeight * 0.01 : screen.height * 0.01;
exports.deviceHeight = deviceHeight;
var deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
/* ************ DOM elements ************ */

exports.deviceWidth = deviceWidth;
var spinner = document.querySelector('.spinner');
/* *** NAV *** */

exports.spinner = spinner;
var colorPicker = document.querySelector('.color-picker');
exports.colorPicker = colorPicker;
var navButton = document.querySelector('.button-menu');
exports.navButton = navButton;
var navigationItems = document.getElementsByClassName('navigation__item');
/* *** HERO *** */

exports.navigationItems = navigationItems;
var heroList = document.querySelector('.hero__list');
exports.heroList = heroList;
var heroTitle = document.querySelector('.hero__title');
exports.heroTitle = heroTitle;
var heroDesc = document.querySelector('.hero__desc');
/* *** LANDSCAPE *** */

exports.heroDesc = heroDesc;
var landscape = document.querySelector('.section-landscape');
/* *** QUOTE *** */

exports.landscape = landscape;
var buttonQuote = document.querySelector('.button--quote');
exports.buttonQuote = buttonQuote;
var quote = document.querySelector('.section-quote__text');
exports.quote = quote;
var isNavButtonOpen = false;
/* *** PROJECTS *** */

exports.isNavButtonOpen = isNavButtonOpen;
var projectWrapper = document.querySelector('.section-projects__wrapper');
/* *** ABOUT *** */

exports.projectWrapper = projectWrapper;
var aboutWrapper = document.querySelector('.section-about__about-grid');
exports.aboutWrapper = aboutWrapper;
var aboutImages = document.querySelectorAll('.section-about__images');
exports.aboutImages = aboutImages;
var pic1 = document.querySelector('.pic-1');
exports.pic1 = pic1;
var pic2 = document.querySelector('.pic-2');
exports.pic2 = pic2;
var pic3 = document.querySelector('.pic-3');
exports.pic3 = pic3;
var pic4 = document.querySelector('.pic-4');
exports.pic4 = pic4;
var pic5 = document.querySelector('.pic-5');
exports.pic5 = pic5;
var pic6 = document.querySelector('.pic-6');
/* *** STACK *** */

exports.pic6 = pic6;
var stackGrid = document.querySelector('.section-about__stack-grid');
exports.stackGrid = stackGrid;
var techIcon = document.getElementsByTagName('ion-icon');
exports.techIcon = techIcon;
var landscape2 = document.querySelector('.landscape-2');
/* *** CONTACT *** */

exports.landscape2 = landscape2;
var socials = document.querySelector('.section-contact__social-wrapper');
exports.socials = socials;
var form = document.querySelector('.form');
exports.form = form;
var inputEmail = document.querySelector('.form__email');
var inputMessage = document.querySelector('.form__text-area');
/* ************ DOM event listeners ************ */

/* *** NAV *** */

colorPicker.addEventListener('change', function (e) {
  document.documentElement.setAttribute('data-theme', e.target.value);
  document.documentElement.classList.add('color-transition');
  window.setTimeout(function () {
    document.documentElement.classList.remove('color-transition');
  }, 300);
});

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
  exports.isNavButtonOpen = isNavButtonOpen = !buttonState;
  navButton.classList.toggle('button-menu--opened', isNavButtonOpen);
  toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
};

navButton.addEventListener('click', function () {
  return toggleNavigationButton(isNavButtonOpen);
});
document.addEventListener('click', function (e) {
  if (isNavButtonOpen) {
    if (e.target.className === 'navigation__link' || e.target.className !== 'button-menu button-menu--opened' && e.target.className !== 'button-menu__burger') {
      toggleNavigationButton(true);
    }
  }
});
/* *** HERO *** */

document.documentElement.style.setProperty('--vh', "".concat(deviceHeight, "px"));
/* *** QUOTE *** */

buttonQuote.addEventListener('click', function () {
  quote.classList.add('fade-in-out');
  window.setTimeout(function () {
    return getRandomQuote(firebase.quotes);
  }, 400);
  window.setTimeout(function () {
    return quote.classList.remove('fade-in-out');
  }, 801);
});

var getRandomQuote = function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  showQuote(randomQuote);

  if (firebase.quotes.length > 0) {
    removeQuote(randomQuote);
  }
};

exports.getRandomQuote = getRandomQuote;

var removeQuote = function removeQuote(randomQuote) {
  return firebase.quotes.splice(firebase.quotes.indexOf(randomQuote), 1);
};

var showQuote = function showQuote(randomQuote) {
  var quoteDom = document.querySelector('.section-quote__text');
  var quoteAuthorDom = document.querySelector('.section-quote__author');
  var quoteLinkDom = document.querySelector('.section-quote__link');

  if (randomQuote.quote.length > 400) {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '1rem' : // mobile
    deviceWidth < 1279 ? '2rem' : // tablet
    deviceWidth < 1439 ? '2.2rem' : // laptop-md
    deviceWidth < 1919 ? '2.3rem' : // laptop-hd
    '3rem'; // desktop-hd
  } else if (randomQuote.quote.length > 300) {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '1.1rem' : // mobile
    deviceWidth < 1279 ? '2.2rem' : // tablet
    deviceWidth < 1439 ? '2.6rem' : // laptop-md
    deviceWidth < 1919 ? '2.6rem' : // laptop-hd
    '3.3rem'; // desktop-hd
  } else if (randomQuote.quote.length > 200) {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '1.3rem' : // mobile
    deviceWidth < 1279 ? '2.6rem' : // tablet
    deviceWidth < 1439 ? '3.1rem' : // laptop-md
    deviceWidth < 1919 ? '3.1rem' : // laptop-hd
    '3.6rem'; // desktop-hd
  } else if (randomQuote.quote.length > 150) {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '1.6rem' : // mobile
    deviceWidth < 1279 ? '3.1rem' : // tablet
    deviceWidth < 1439 ? '3.4rem' : // laptop-md
    deviceWidth < 1919 ? '3.4rem' : // laptop-hd
    '3.9rem'; // desktop-hd
  } else if (randomQuote.quote.length > 100) {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '1.8rem' : // mobile
    deviceWidth < 1279 ? '3.4rem' : // tablet
    deviceWidth < 1439 ? '3.5rem' : // laptop-md
    deviceWidth < 1919 ? '3.6rem' : // laptop-hd
    '4.2rem'; // desktop-hd
  } else {
    quoteDom.style.fontSize = deviceWidth <= 767 ? '2.2rem' : // mobile
    deviceWidth < 1279 ? '3.7rem' : // tablet
    deviceWidth < 1439 ? '4rem' : // laptop-md
    deviceWidth < 1919 ? '4.2rem' : // laptop-hd
    '4.7rem'; // desktop-hd
  }

  quoteDom.innerText = "\"".concat(randomQuote.quote, "\"");
  quoteAuthorDom.innerText = randomQuote.author || '';

  if (randomQuote.link) {
    quoteLinkDom.innerText = 'link';
    quoteLinkDom.setAttribute('href', randomQuote.link);
  } else {
    quoteLinkDom.innerText = '';
    quoteLinkDom.removeAttribute('href');
  }
};
/* *** CONTACT *** */


form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (inputEmail.validity.valid) {
    var sendEmailURL = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
    var data = {
      'param1': inputEmail.value,
      'param2': inputMessage.value
    };
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
      alert('Hurray! Mail was sent successfully! =D');
      return resp.json();
    }).catch(function (err) {
      console.log('error', err);
    });
  }
});
},{"./script-firebase-api.js":"script-firebase-api.js"}],"script-unsplash-api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var domElement = _interopRequireWildcard(require("./script-dom.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
var collections = {
  LANDSCAPE_HORIZONTAL: 9522596,
  // 60 photos
  ABOUT: 9812689,
  // 60 photos
  ABOUT_VERTICAL: 9833482 // 30 photos

};
var imagesPerPage = 30;
var pageNumber = getRandomPage();
var neededImagesOnWebsite = 8;
var landscapes = "https://api.unsplash.com/collections/".concat(collections.LANDSCAPE_HORIZONTAL, "/photos/?page=").concat(pageNumber, "&per_page=").concat(imagesPerPage, "&client_id=").concat(client_id);
var abouts = "https://api.unsplash.com/collections/".concat(collections.ABOUT, "/photos/?page=").concat(pageNumber, "&per_page=").concat(imagesPerPage, "&client_id=").concat(client_id);
var verticals = "https://api.unsplash.com/collections/".concat(collections.ABOUT_VERTICAL, "/photos/?page=", 1, "&per_page=").concat(imagesPerPage, "&client_id=").concat(client_id);

function fetchUnsplashApi() {
  var collections = [landscapes, abouts, verticals];
  Promise.all(collections.map(function (collection) {
    return fetch(collection).then(function (resp) {
      return resp.json();
    });
  })).then(function (images) {
    var landscapeImages = images[0];
    var aboutImages = images[1];
    var aboutVerticals = images[2];
    var randomIntegers = getUniqueIntegers(imagesPerPage, neededImagesOnWebsite);
    domElement.landscape.style.backgroundImage = "url(".concat(landscapeImages[randomIntegers[0]].urls.regular, ")");
    domElement.pic1.style.backgroundImage = "url(".concat(aboutImages[randomIntegers[1]].urls.small, ")");
    domElement.pic2.style.backgroundImage = "url(".concat(landscapeImages[randomIntegers[2]].urls.regular, ")");
    domElement.pic3.style.backgroundImage = "url(".concat(aboutVerticals[randomIntegers[3]].urls.regular, ")");
    domElement.pic4.style.backgroundImage = "url(".concat(landscapeImages[randomIntegers[4]].urls.regular, ")");
    domElement.pic5.style.backgroundImage = "url(".concat(aboutVerticals[randomIntegers[5]].urls.regular, ")");
    domElement.pic6.style.backgroundImage = "url(".concat(landscapeImages[randomIntegers[6]].urls.regular, ")");
    domElement.landscape2.style.backgroundImage = "url(".concat(aboutVerticals[randomIntegers[7]].urls.regular, ")");
  }).catch(function (err) {
    console.log('error', err);
  });
}

function getRandomPage() {
  return Math.floor(Math.random() * 2) + 1;
}

function getUniqueIntegers(maxInteger, neededIntegers) {
  var randomIntegers = new Set();

  while (randomIntegers.size < neededIntegers) {
    randomIntegers.add(Math.floor(Math.random() * maxInteger));
  }

  return _toConsumableArray(randomIntegers);
}

var _default = {
  fetchUnsplashApi: fetchUnsplashApi
};
exports.default = _default;
},{"./script-dom.js":"script-dom.js"}],"script-main.js":[function(require,module,exports) {
"use strict";

var _scriptUnsplashApi = _interopRequireDefault(require("./script-unsplash-api.js"));

var _scriptFirebaseApi = _interopRequireDefault(require("./script-firebase-api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var getFirebaseData = function getFirebaseData() {
    return _scriptFirebaseApi.default.fetchFirebaseApi();
  };

  var getUnsplashData = function getUnsplashData() {
    return _scriptUnsplashApi.default.fetchUnsplashApi();
  };

  getFirebaseData();
  getUnsplashData();
});
},{"./script-unsplash-api.js":"script-unsplash-api.js","./script-firebase-api.js":"script-firebase-api.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64208" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script-main.js"], null)
//# sourceMappingURL=/script-main.c62c0ec8.js.map