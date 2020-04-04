import unsplashApi from './unsplash-api.js';
import firebaseApi from './script-firebase-api.js';
import intersectionObserver from './script-intersection-observer.js';

document.addEventListener("DOMContentLoaded", () => {
  const getUnsplashData = () => unsplashApi.fetchUnsplashApi();
  const getFirebaseData = () => firebaseApi.fetchFirebaseApi();
  const getIntersectionObserver = () => intersectionObserver.listenToObserver();

  getUnsplashData();
  getFirebaseData();
  getIntersectionObserver();
})

