import * as domElement from './script-dom.js';

// TODO fetch data from Unsplash
// https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
// https://unsplash.com/documentation

function fetchUnsplashApi() {
  const client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const unsplashcall = `https://api.unsplash.com/users/daxtersky/collections?client_id=${client_id}`;
  const unsplashUser =  'https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const unsplashUserPhotos =  'https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const unsplashUserCollentions =  'https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const unsplashMyCollention =  'https://api.unsplash.com/users/daxtersky/collection/9522596?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const collectionFirst = '9833482';
  const collectionSecond = '9812689';
  const collectionThird = '9522596';
  const collectionFourth = '9442978';
  const collentionPhotos =  `https://api.unsplash.com/users/daxtersky/collection/${collectionThird}/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0`;
  const firstCollention =  `https://api.unsplash.com/users/daxtersky/collection/${collectionThird}?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0`;
  let allUnsplashPhotos = [];
  
  fetch(unsplashUserPhotos)
    .then(resp => resp.json())
    .then(response => {
      // console.log('unsplashUserPhotos', response);
      for (const image of response) {
        allUnsplashPhotos.push(image.urls.regular); // small, regular, full
      }
      // console.log('allUnsplashPhotos', allUnsplashPhotos);
      /* ********* LANDSCAPE ********* */
      domElement.landscape.style.backgroundImage = `url(${allUnsplashPhotos[0]})`;
      domElement.landscape2.style.backgroundImage = `url(${allUnsplashPhotos[0]})`;
      /* ********* ABOUT ********* */
      if (domElement.aboutImages.length > 0 && allUnsplashPhotos.length > 0) {
        const randomIntegers = getRandomIntegers(domElement.aboutImages.length, allUnsplashPhotos.length);
        showRandomImages(randomIntegers, allUnsplashPhotos);         
      }
    }).catch(err => {
      console.log('error', err);
    })

}

function getRandomIntegers(imagesInDom, unsplashPhotos) {
  const randomSetIntegers = new Set;
  while (randomSetIntegers.size < imagesInDom) { randomSetIntegers.add(Math.floor(Math.random() * unsplashPhotos)) }
  return [...randomSetIntegers];
}

function showRandomImages(randomIntegers, unsplashPhotos) {
  for (let i = 0; i < randomIntegers.length; i++) {
    const element = randomIntegers[i];
    domElement.aboutImages[i].style.backgroundImage = `url(${unsplashPhotos[element]})`;
  }
}

export default { fetchUnsplashApi };
