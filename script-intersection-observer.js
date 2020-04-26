import * as domElement from './script-dom.js';

const listenToObserver = () => {
  const heightMargin = window.innerHeight / 10;
  const elementsToTop = [
    domElement.heroTitle,
    domElement.heroDesc,
    domElement.pic1,
    domElement.pic2,
    domElement.pic3,
    domElement.pic4,
    domElement.pic5,
    domElement.landscape2,
  ];
  const elementsToBottom = [
    domElement.pic6,
    domElement.stackGrid,
    domElement.socials,
    domElement.form,
  ];
  const observerOptions = {
    rootMargin: `-${heightMargin}px 0px -${heightMargin}px 0px`,
  };

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {

    if (entry.intersectionRatio > 0) {

      if (isIntersected(elementsToTop, entry)) {
        entry.target.classList.add('swipe-top');
      } else if (isIntersected(elementsToBottom, entry)) {
        entry.target.classList.add('swipe-bottom');
      }
    } else {
      entry.target.classList.remove('swipe-top', 'swipe-bottom');
    }

  }), observerOptions);

  elementsToTop.forEach(elem => observer.observe(elem));
  elementsToBottom.forEach(elem => observer.observe(elem));
}

function isIntersected(elements, entry) {
  return elements.find(y => y.className === entry.target.className) && elements.find(y => y.className === entry.target.className).className;
}

export default { listenToObserver }