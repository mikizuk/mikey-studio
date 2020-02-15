const listenNavEvents = () => {
  const navButton = document.getElementsByClassName('button-menu')[0];
  const navigationItems = document.getElementsByClassName('navigation__item');
  let isNavButtonOpen = false;
  const toggleVisibilityMenuItems = (navigationItems, isNavButtonOpen) => {
    if (isNavButtonOpen) {
      for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.add('navigation__item--movein');
        navigationItems[i].classList.remove('navigation__item--hidden');
      }
    } else {
      for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.add('navigation__item--hidden');
        navigationItems[i].classList.remove('navigation__item--movein');
      }
    }
  }
  const toggleNavigationButton = (buttonState) => {
    isNavButtonOpen = !buttonState;
    navButton.classList.toggle('button-menu-open', isNavButtonOpen);
    toggleVisibilityMenuItems(navigationItems, isNavButtonOpen);
  }

  navButton.addEventListener('click', () => toggleNavigationButton(isNavButtonOpen))
  document.addEventListener('click', (e) => {
    // console.log(e.target.className, 'isNavButtonOpen', isNavButtonOpen);
    if (isNavButtonOpen) {
      if (e.target.className === 'navigation__link' || (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger')) {
        toggleNavigationButton(true);
      }
      // if (e.target.className !== 'button-menu button-menu-open' && e.target.className !== 'button-menu__burger') {
      // console.log('!???', );
      // toggleNavigationButton(true);
      // }
    }
  })

}

export default { listenNavEvents }