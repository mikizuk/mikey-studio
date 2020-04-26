import * as domElement from './script-dom.js';

// TODO swipe left and right
// TODO parallax with observer
// TODO elementsObserved have to be opacity 0 by default!


const listenToObserver = () => {
  const elementsObserved = [
    domElement.heroTitle,
    domElement.heroDesc,
    //
    domElement.pic1,
    domElement.pic2,
    //
    domElement.socials,
    domElement.form,
  ];

  const observerOptions = {
    rootMargin: `-${window.innerHeight / 3.5}px 0px -${window.innerHeight / 4}px 0px`,
  };

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.intersectionRatio > 0 && (entry.target.className === 'hero__title')) {
      console.log('entry', entry);
      entry.target.classList.add('swipe-left');
    } else if (entry.intersectionRatio > 0 && entry.target.className === 'hero__desc') {
      entry.target.classList.add('swipe-right');
    }
    
    else if (entry.intersectionRatio > 0 && entry.target.className === 'section-about__images theme-filter-image pic-1') {
      entry.target.classList.add('swipe-left');
    }
    else if (entry.intersectionRatio > 0 && entry.target.className === 'section-about__images theme-filter-image pic-2') {
      entry.target.classList.add('swipe-right');
    }
    
    else if (entry.intersectionRatio > 0 && entry.target.className === 'section-contact__social-wrapper') {
      entry.target.classList.add('swipe-left');
    } else if (entry.intersectionRatio > 0 && entry.target.id === 'form') {
      entry.target.classList.add('swipe-right');
    } else {
      entry.target.classList.remove('swipe-left', 'swipe-right');
    }
  }), observerOptions);

  elementsObserved.forEach(elem => observer.observe(elem));
}

export default { listenToObserver }