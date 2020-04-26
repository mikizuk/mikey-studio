import * as domElement from './script-dom.js';

// TODO parallax with observer
// TODO code refactor

const listenToObserver = () => {
  const leftElemsObserved = [
    domElement.heroTitle,
    domElement.pic1,
    domElement.pic3,
    domElement.pic5,
    domElement.landscape2,
    domElement.socials,
  ];
  const rightElemsObserved = [
    domElement.heroDesc,
    domElement.pic2,
    domElement.pic4,
    domElement.pic6,
    domElement.stackGrid,
    domElement.form,
  ];
 
  const observerOptions = {
    rootMargin: `-${window.innerHeight / 5}px 0px -${window.innerHeight / 5}px 0px`,
  };

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      const left = leftElemsObserved.find(y => y.className === entry.target.className) && leftElemsObserved.find(y => y.className === entry.target.className).className;
      const right = rightElemsObserved.find(y => y.className === entry.target.className) && rightElemsObserved.find(y => y.className === entry.target.className).className;
      if (left) {
        entry.target.classList.add('swipe-left');
      } else if (right) {
        entry.target.classList.add('swipe-right');
      }
      // else {
      //   entry.target.classList.remove('swipe-left', 'swipe-right');
      // }
    } else {
      entry.target.classList.remove('swipe-left', 'swipe-right');
    }
  }), observerOptions);

  leftElemsObserved.forEach(elem => observer.observe(elem));
  rightElemsObserved.forEach(elem => observer.observe(elem));
}

export default { listenToObserver }