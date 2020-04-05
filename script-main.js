import unsplashApi from './script-unsplash-api.js';
import firebaseApi from './script-firebase-api.js';
import intersectionObserver from './script-intersection-observer.js';

document.addEventListener("DOMContentLoaded", () => {
  const getFirebaseData = () => firebaseApi.fetchFirebaseApi();
  const getUnsplashData = () => unsplashApi.fetchUnsplashApi();
  const getIntersectionObserver = () => intersectionObserver.listenToObserver();

  getFirebaseData();
  getUnsplashData();
  getIntersectionObserver();
})
