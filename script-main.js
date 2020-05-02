import unsplashApi from './script-unsplash-api.js';
import firebaseApi from './script-firebase-api.js';

document.addEventListener("DOMContentLoaded", () => {
  const getFirebaseData = () => firebaseApi.fetchFirebaseApi();
  const getUnsplashData = () => unsplashApi.fetchUnsplashApi();

  getFirebaseData();
  getUnsplashData();
})
