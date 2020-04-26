import * as domElement from './script-dom.js';

// TODO fetch data from Unsplash
// https://api.unsplash.com/users/daxtersky?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/photos?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// https://api.unsplash.com/users/daxtersky/collections?client_id=c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0
// TODO add referrals to image links: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
// https://unsplash.com/documentation

function fetchUnsplashApi() {
  const client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
  const collectionsList = [
    9833482, // mikey-studio-horizontal
    9812689, // mikey-studio-about
    9522596, // mikey-studio-parallax
    9442978]; // mikey-studio-hero
  const pageNo = 1;
  const perPage = 30;
  // const unsplashUser =  `https://api.unsplash.com/users/daxtersky?client_id=${client_id}`;
  const collentions = `https://api.unsplash.com/users/daxtersky/collections?client_id=${client_id}`; // GET /users/:username/collections
  const userPhotos =  `https://api.unsplash.com/users/daxtersky/photos?page=${pageNo}&per_page=${perPage}&client_id=${client_id}`;
  const x =  `https://api.unsplash.com/collections/${collectionsList[1]}/photos/?page=${pageNo}&per_page=${perPage}&client_id=${client_id}`; // GET /collections/:id
  let allUnsplashPhotos = [];
  
  fetch(x)
    .then(resp => resp.json())
    .then(response => {
      // console.log('x', response);
    })

  // fetch(collentions)
  //   .then(resp => resp.json())
  //   .then(response => {
  //     console.log('collentions', response);
  //   })

  fetch(userPhotos)
    .then(resp => resp.json())
    .then(response => {
      // console.log('userPhotos', response);
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
