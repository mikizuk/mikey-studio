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


var _scriptAbc = __webpack_require__(1);

var _scriptAbc2 = _interopRequireDefault(_scriptAbc);

var _scriptAbc3 = __webpack_require__(2);

var _scriptAbc4 = _interopRequireDefault(_scriptAbc3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  getFirebaseData();
  getUnsplashData();
  getEmailService();

  _scriptAbc4.default.testFetch();
});

var getFirebaseData = function getFirebaseData() {
  var config = {
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

  var dbRefObject = firebase.database().ref().child('mikey-db');
  var hobbies = dbRefObject.child('hobbies');
  var firebaseText = document.getElementById('firebase-text');
  var ulList = document.getElementById('list');

  dbRefObject.on('value', function (snap) {
    var mikeyDb = snap.val();
    console.log('firebase database', mikeyDb);
    firebaseText.innerText = mikeyDb.textOnPage;
    firebaseText.style.color = 'red';
  });

  hobbies.on('child_added', function (snap) {
    console.log(snap.val());
    var li = document.createElement('li');
    li.innerText = snap.val();
    ulList.style.color = 'blue';
    ulList.appendChild(li);
  });
};

var getUnsplashData = function getUnsplashData() {
  console.log('getUnsplashData');

  console.log('------------------importedModule');
  _scriptAbc2.default.importedFunction();
  console.log('importedVar', _scriptAbc2.default.importedVar);
  console.log('importedModule', _scriptAbc2.default);
  console.log('------------------importedModule2');
  _scriptAbc4.default.add(2, 4);
  console.log('variable:', _scriptAbc4.default.catVar);
  console.log('object:', _scriptAbc4.default.catObj.name, _scriptAbc4.default.catObj);
  console.log('------------------');

  // TODO fetch data from Unsplash
  // https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
  // TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
};

var getEmailService = function getEmailService() {
  // TODO use google firebase as well? Not helloRoman example?
  // https://medium.com/@edigleyssonsilva/cloud-functions-for-firebase-sending-e-mail-1f2631d1022e
  // https://github.com/firebase/functions-samples/tree/master/quickstarts/email-users
  // https://softauthor.com/send-email-with-firebase-cloud-functions-firestore-http-triggers
  // https://techtrench.org/firebase-functions-send-email/
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  importedFunction: function importedFunction() {
    console.log('imported function');
  },
  importedVar: 'imported variable'
};


var bar = 'baaar!';

exports.bar = bar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function add(a, b) {
  console.log(a, b, 'a+b', a + b);
  // return a + b;
}
var catVar = 'string logged';
var catObj = {
  name: 'puszek'
};

function testFetch() {
  var client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashcall = 'https://api.unsplash.com/users/daxtersky/collections?client_id=' + client_id;
  var unsplashUser = 'https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserPhotos = 'https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  var unsplashUserCollentions = 'https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  fetch(unsplashUserPhotos).then(function (resp) {
    return resp.json();
  }).then(function (response) {
    // console.log('response', response);
    console.log('photo', response[0].urls);
    document.getElementById('unsplash-image').src = response[0].urls.regular;
  }).catch(function (err) {
    console.log('error', err);
  });
}

exports.default = { add: add, catVar: catVar, catObj: catObj, testFetch: testFetch };

/***/ })
/******/ ]);