document.addEventListener("DOMContentLoaded", () => {
  console.log('es6 js loaded!');

  // terminal: 'npm i'
  // terminal: npm start'
  // terminal: 'npm run bundle' for creating a understandable 'out.js' for HTML
  // open http://localhost:3001/ in browser

  const es6Variable = 'es6Variable';
  const es6Arr = [1, 2, 3, 4, 5]
  const es6Name = 'Mikołaj'
  console.log(es6Variable);
  console.log('array', es6Arr);
  console.log('array changed with es6 map', es6Arr.map(item => item * 2));
  console.log ([...es6Name]);

  
})
