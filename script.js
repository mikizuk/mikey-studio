import domListener from './script-dom.js';
import unsplashApi from './unsplash-api.js';
import firebaseApi from './script-firebase-api.js';
import awsLambda from './script-awslambda-api.js';
import intersectionObserver from './script-intersection-observer.js';

// import importedModule from './script-abc.js';
// import importModuleTwo from './script-abc2.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1
  getDomListener();
  // 2?
  getFirebaseData();
  getUnsplashData();
  getEmailService()
  // 3
  getIntersectionObserver();
  //
  // playWithJsImports();
})

const getDomListener = () => domListener.listenNavEvents();
const getFirebaseData = () => firebaseApi.getFirebaseData();
const getUnsplashData = () => unsplashApi.fetchUnsplashApi();
const getEmailService = () => awsLambda.getAwsLambdaFunctions();
const getIntersectionObserver = () => intersectionObserver.listenToObserver();

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
