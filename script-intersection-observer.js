const listenToObserver = () => {
  console.log('listenToObserver', );

  const navigation = document.querySelectorAll('.navigation')[0];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      // console.log(entry);
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
        // if (entry.target.id === 'hero') {
        //   navigation.style.background = 'initial';
        //   navigation.style.color = '#BE2200';
        // } else if (entry.target.id === 'quote') {
        //   navigation.style.background = '#A70267';
        // } else if (entry.target.id === 'parallax') {
        //   navigation.style.color = 'pink';
        //   navigation.style.background = 'yellow';
        // } else if (entry.target.id === 'projects') {
        //   navigation.style.color = 'green'
        //   navigation.style.background = 'yellow';
        // } else if (entry.target.id === 'about') {
        //   navigation.style.background = 'white';
        //   navigation.style.color = 'green';
        // } else if (entry.target.id === 'contact') {
        //   navigation.style.background = 'green';
        //   navigation.style.color = 'brown';
        // }
      } else {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
      }

    })
  }, { rootMargin: `${window.innerHeight - 118}px 0px -${window.innerHeight - 120}px 0px` });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}

export default { listenToObserver }