import * as domElement from './script-dom.js';

// TODO parallax with observer

const listenToObserver = () => {
  const heightMargin = window.innerHeight / 5;
  const leftSideElements = [
    domElement.heroList,
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
      const animateToRight = getDomElement(leftSideElements, entry);
      const animateToLeft = getDomElement(rightSideElements, entry);
      if (animateToRight) {
        entry.target.classList.add('swipe-right');
      } else if (animateToLeft) {
        entry.target.classList.add('swipe-left');
      }
    } else {
      entry.target.classList.remove('swipe-right', 'swipe-left');
    }
  }), observerOptions);

  leftSideElements.forEach(elem => observer.observe(elem));
  rightSideElements.forEach(elem => observer.observe(elem));
}

function getDomElement(elements, entry) {
  return elements.find(y => y.className === entry.target.className) && elements.find(y => y.className === entry.target.className).className;
}

export default { listenToObserver }