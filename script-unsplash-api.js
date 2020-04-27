import * as domElement from './script-dom.js';

const client_id = 'c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0';
const collections = {
  LANDSCAPE_HORIZONTAL: 9522596, // 60 photos
  ABOUT: 9812689,                // 60 photos
  ABOUT_VERTICAL: 9833482,       // 30 photos
}
const imagesPerPage = 30;
const pageNumber = getRandomPage();
const neededImagesOnWebsite = 8;
const landscapes = `https://api.unsplash.com/collections/${collections.LANDSCAPE_HORIZONTAL}/photos/?page=${pageNumber}&per_page=${imagesPerPage}&client_id=${client_id}`;
const abouts = `https://api.unsplash.com/collections/${collections.ABOUT}/photos/?page=${pageNumber}&per_page=${imagesPerPage}&client_id=${client_id}`;
const verticals = `https://api.unsplash.com/collections/${collections.ABOUT_VERTICAL}/photos/?page=${1}&per_page=${imagesPerPage}&client_id=${client_id}`;

function fetchUnsplashApi() {
  const collections = [landscapes, abouts, verticals];
  
  Promise.all(collections.map(collection => fetch(collection)
  .then(resp => resp.json())))
  .then(images => {
      const landscapeImages = images[0];
      const aboutImages = images[1];
      const aboutVerticals = images[2];
      const randomIntegers = getUniqueIntegers(imagesPerPage, neededImagesOnWebsite);

      domElement.landscape.style.backgroundImage = `url(${landscapeImages[randomIntegers[0]].urls.regular})`;
      domElement.pic1.style.backgroundImage = `url(${aboutImages[randomIntegers[1]].urls.small})`;
      domElement.pic2.style.backgroundImage = `url(${landscapeImages[randomIntegers[2]].urls.regular})`;
      domElement.pic3.style.backgroundImage = `url(${aboutVerticals[randomIntegers[3]].urls.regular})`;
      domElement.pic4.style.backgroundImage = `url(${landscapeImages[randomIntegers[4]].urls.regular})`;
      domElement.pic5.style.backgroundImage = `url(${aboutVerticals[randomIntegers[5]].urls.regular})`;
      domElement.pic6.style.backgroundImage = `url(${landscapeImages[randomIntegers[6]].urls.regular})`;
      domElement.landscape2.style.backgroundImage = `url(${aboutVerticals[randomIntegers[7]].urls.regular})`;

    }).catch(err => {
      console.log('error', err);
    })
}

function getRandomPage() {
  return Math.floor(Math.random() * 2) + 1;
}

function getUniqueIntegers(maxInteger, neededIntegers) {
  const randomIntegers = new Set;
  while (randomIntegers.size < neededIntegers) { randomIntegers.add(Math.floor(Math.random() * maxInteger)) }
  return [...randomIntegers];
}

export default { fetchUnsplashApi };
