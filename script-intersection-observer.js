import * as domElement from './script-dom.js';

const listenToObserver = () => {
  const heightMargin = window.innerHeight / 5;
  const leftSideElements = [
    domElement.heroTitle,
    domElement.pic1,
    domElement.pic4,
    domElement.pic5,
    domElement.landscape2,
    domElement.socials,
  ];
  const rightSideElements = [
    domElement.heroDesc,
    domElement.pic2,
    domElement.pic3,
    domElement.pic6,
    domElement.stackGrid,
    domElement.form,
  ];
  const observerOptions = {
    rootMargin: `-${heightMargin}px 0px -${heightMargin}px 0px`,

  };

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {

    if (entry.intersectionRatio > 0) {

      if (isIntersected(leftSideElements, entry)) {
        entry.target.classList.add('swipe-right');
      } else if (isIntersected(rightSideElements, entry)) {
        entry.target.classList.add('swipe-left');
      }
    } else {
      entry.target.classList.remove('swipe-right', 'swipe-left');
    }

  }), observerOptions);

  leftSideElements.forEach(elem => observer.observe(elem));
  rightSideElements.forEach(elem => observer.observe(elem));
}

function isIntersected(elements, entry) {
  return elements.find(y => y.className === entry.target.className) && elements.find(y => y.className === entry.target.className).className;
}

export default { listenToObserver }