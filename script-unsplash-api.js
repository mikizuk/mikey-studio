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
  
  fetch(unsplashUserPhotos)
    .then(resp => resp.json())
    .then(response => {
      // console.log('unsplash', response);
      // console.log('photo', response[0].urls);
      // document.getElementById('unsplash-image').src = response[0].urls.regular;
    }).catch(err => {
      console.log('error', err);
    })

}

export default { fetchUnsplashApi };
