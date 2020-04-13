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
})({"script-firebase-api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.quotes = void 0;

var domElement = _interopRequireWildcard(require("./script-dom.js"));

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
    var firebaseDatabase = snap.val(); // console.log('Firebase data loaded', firebaseDatabase);

    if (firebaseDatabase) {
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
            projectImage.setAttribute('src', './project-trop-1920x1088.jpg'); // pictures loaded by JavaScript have to be in /dist folder!
          } else if (project.id === 1) {
            projectImage.setAttribute('src', './project-wydawca-1920x1088.jpg'); // pictures loaded by JavaScript have to be in /dist folder!
          } else if (project.id === 2) {
            projectImage.setAttribute('src', './project-mikeystudio-1920x1088.jpg'); // pictures loaded by JavaScript have to be in /dist folder!
          }

          projectElem.appendChild(projectImage);
          var projectTitle = document.createElement('div');
          projectTitle.classList.add('section-project__title');
          projectTitle.innerText = project.title;
          projectElem.appendChild(projectTitle);
          var projectHeader = document.createElement('div');
          projectHeader.classList.add('section-project__header');
          projectHeader.innerText = project.header;
          projectElem.appendChild(projectHeader);
          var projectDesc = document.createElement('div');
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
                projectHashtagsDiv.appendChild(document.createElement('br')); // projectHashtagsDiv.appendChild(document.createElement('br'));
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
          var aboutDescription = document.createElement('p');
          aboutSection.classList.add("section-about__description", "".concat(aboutItem.className)); // TODO move it to domelem js file!?!

          aboutDescription.innerText = aboutItem.description;
          aboutSection.appendChild(aboutDescription);
          domElement.aboutWrapper.appendChild(aboutSection);
        });
      }
      /* ********* STACK ********* */


      if (firebaseDatabase.techStack) {
        var svg = document.getElementsByTagName('svg');

        var _loop = function _loop(i) {
          var svgItem = svg[i];

          var svgClasses = _toConsumableArray(svg[i].classList);

          firebaseDatabase.techStack.forEach(function (tech) {
            if (svgClasses.includes(tech.className)) {
              var techItem = document.createElement('span');
              techItem.classList.add('section-about__stack-technology');
              var techDescription = document.createElement('span');
              techDescription.classList.add('section-about__stack-description');
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

var _default = {
  fetchFirebaseApi: fetchFirebaseApi
};
exports.default = _default;
},{"./script-dom.js":"script-dom.js"}],"script-dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomQuote = exports.landscape2 = exports.stackGrid = exports.aboutImages = exports.aboutWrapper = exports.projectWrapper = exports.isNavButtonOpen = exports.buttonQuote = exports.landscape = exports.heroDesc = exports.heroTitle = exports.heroList = exports.navigationItems = exports.navButton = void 0;

var firebase = _interopRequireWildcard(require("./script-firebase-api.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* ************ DOM elements ************ */

/* *** NAV *** */
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
var isNavButtonOpen = false;
/* *** PROJECTS *** */

exports.isNavButtonOpen = isNavButtonOpen;
var projectWrapper = document.querySelector('.section-projects__wrapper');
/* *** ABOUT *** */

exports.projectWrapper = projectWrapper;
var aboutWrapper = document.querySelector('.section-about__about-grid');
exports.aboutWrapper = aboutWrapper;
var aboutImages = document.querySelectorAll('.section-about__images');
/* *** STACK *** */

exports.aboutImages = aboutImages;
var stackGrid = document.querySelector('.section-about__stack-grid');
exports.stackGrid = stackGrid;
var landscape2 = document.querySelector('.landscape2');
/* *** CONTACT *** */

exports.landscape2 = landscape2;
var form = document.getElementById('form');
var inputEmail = document.getElementById('inputEmail');
var inputMessage = document.getElementById('inputMessage');
/* ************ DOM event listeners ************ */

/* *** NAV *** */

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
/* *** QUOTE *** */

buttonQuote.addEventListener('click', function () {
  getRandomQuote(firebase.quotes);
});

var getRandomQuote = function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  showNewQuote(randomQuote);
};

exports.getRandomQuote = getRandomQuote;

var showNewQuote = function showNewQuote(randomQuote) {
  var deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  var quoteDom = document.querySelector('.section-quote__text');
  var quoteAuthorDom = document.querySelector('.section-quote__author');
  var quoteLinkDom = document.querySelector('.section-quote__link'); // character counter https://www.charactercountonline.com/
  // console.log('randomQuote.quote.length', randomQuote.quote.length);

  if (deviceWidth <= 767) {
    // mobile
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '.7rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '1rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '1.3rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '1.6rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '1.9rem';
    } else {
      quoteDom.style.fontSize = '2.2rem';
    }
  } else if (deviceWidth < 1279) {
    // laptop-md
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.2rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.4rem';
    } else {
      quoteDom.style.fontSize = '3.7rem';
    }
  } else if (deviceWidth < 1439) {
    // laptop-hd 
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2.2rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.4rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.7rem';
    } else {
      quoteDom.style.fontSize = '4rem';
    }
  } else if (deviceWidth < 1919) {
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '2.3rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '2.6rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.1rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.4rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '3.6rem';
    } else {
      quoteDom.style.fontSize = '3.9rem';
    }
  } else {
    // desktop-hd
    if (randomQuote.quote.length > 400) {
      quoteDom.style.fontSize = '3rem';
    } else if (randomQuote.quote.length > 300) {
      quoteDom.style.fontSize = '3.3rem';
    } else if (randomQuote.quote.length > 200) {
      quoteDom.style.fontSize = '3.6rem';
    } else if (randomQuote.quote.length > 150) {
      quoteDom.style.fontSize = '3.9rem';
    } else if (randomQuote.quote.length > 100) {
      quoteDom.style.fontSize = '4.2rem';
    } else {
      quoteDom.style.fontSize = '4.7rem';
    }
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
  var sendEmailURL = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + ('?param1=' + inputEmail.value) + ('&param2=' + inputMessage.value);
  var data = {
    'param1': inputEmail.value,
    'param2': inputMessage.value
  }; // console.log('data', data);

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
  }).then(function (response) {// console.log('response', response);
  }).catch(function (err) {// console.log('error', err);
  });
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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TODO fetch data from Unsplash
// https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
// https://unsplash.com/documentation
function fetchUnsplashApi() {
  var client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashcall = "https://api.unsplash.com/users/daxtersky/collections?client_id=".concat(client_id);
  var unsplashUser = 'https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserPhotos = 'https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserCollentions = 'https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashMyCollention = 'https://api.unsplash.com/users/daxtersky/collection/9522596?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var collectionFirst = '9833482';
  var collectionSecond = '9812689';
  var collectionThird = '9522596';
  var collectionFourth = '9442978';
  var collentionPhotos = "https://api.unsplash.com/users/daxtersky/collection/".concat(collectionThird, "/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0");
  var firstCollention = "https://api.unsplash.com/users/daxtersky/collection/".concat(collectionThird, "?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0");
  var allUnsplashPhotos = [];
  fetch(unsplashUserPhotos).then(function (resp) {
    return resp.json();
  }).then(function (response) {
    // console.log('unsplashUserPhotos', response);
    var _iterator = _createForOfIteratorHelper(response),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var image = _step.value;
        allUnsplashPhotos.push(image.urls.regular); // small, regular, full
      } // console.log('allUnsplashPhotos', allUnsplashPhotos);

      /* ********* LANDSCAPE ********* */

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    domElement.landscape.style.backgroundImage = "url(".concat(allUnsplashPhotos[0], ")");
    domElement.landscape2.style.backgroundImage = "url(".concat(allUnsplashPhotos[0], ")");
    /* ********* ABOUT ********* */

    if (domElement.aboutImages.length > 0 && allUnsplashPhotos.length > 0) {
      var randomIntegers = getRandomIntegers(domElement.aboutImages.length, allUnsplashPhotos.length);
      showRandomImages(randomIntegers, allUnsplashPhotos);
    }
  }).catch(function (err) {
    console.log('error', err);
  });
}

function getRandomIntegers(imagesInDom, unsplashPhotos) {
  var randomSetIntegers = new Set();

  while (randomSetIntegers.size < imagesInDom) {
    randomSetIntegers.add(Math.floor(Math.random() * unsplashPhotos));
  }

  return _toConsumableArray(randomSetIntegers);
}

function showRandomImages(randomIntegers, unsplashPhotos) {
  for (var i = 0; i < randomIntegers.length; i++) {
    var element = randomIntegers[i];
    domElement.aboutImages[i].style.backgroundImage = "url(".concat(unsplashPhotos[element], ")");
  }
}

var _default = {
  fetchUnsplashApi: fetchUnsplashApi
};
exports.default = _default;
},{"./script-dom.js":"script-dom.js"}],"script-intersection-observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var listenToObserver = function listenToObserver() {
  // console.log('listenToObserver');
  var navigation = document.querySelectorAll('.navigation')[0];
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.getAttribute('id');
      var sectionId = document.querySelector("nav ul li a[href=\"#".concat(id, "\"]")); // console.log(entry);

      if (entry.intersectionRatio > 0 && sectionId) {
        sectionId.parentElement.classList.add('active'); // 

        if (entry.target.id === 'quote') {
          navigation.style.background = '#2E2E2E'; // TODO not always.... when theme changed...
        } // if (entry.target.id === 'hero') {
        //   navigation.style.background = 'initial';
        //   navigation.style.color = '#BE2200';
        // } else if (entry.target.id === 'quote') {
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

      } else if (sectionId) {
        sectionId.parentElement.classList.remove('active');
      }
    });
  }, {
    rootMargin: "".concat(window.innerHeight - 118, "px 0px -").concat(window.innerHeight - 120, "px 0px")
  });
  document.querySelectorAll('section[id]').forEach(function (section) {
    return observer.observe(section);
  });
};

var _default = {
  listenToObserver: listenToObserver
};
exports.default = _default;
},{}],"script-main.js":[function(require,module,exports) {
"use strict";

var _scriptUnsplashApi = _interopRequireDefault(require("./script-unsplash-api.js"));

var _scriptFirebaseApi = _interopRequireDefault(require("./script-firebase-api.js"));

var _scriptIntersectionObserver = _interopRequireDefault(require("./script-intersection-observer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var getFirebaseData = function getFirebaseData() {
    return _scriptFirebaseApi.default.fetchFirebaseApi();
  };

  var getUnsplashData = function getUnsplashData() {
    return _scriptUnsplashApi.default.fetchUnsplashApi();
  };

  var getIntersectionObserver = function getIntersectionObserver() {
    return _scriptIntersectionObserver.default.listenToObserver();
  };

  getFirebaseData();
  getUnsplashData();
  getIntersectionObserver();
});
},{"./script-unsplash-api.js":"script-unsplash-api.js","./script-firebase-api.js":"script-firebase-api.js","./script-intersection-observer.js":"script-intersection-observer.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64358" + '/');

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