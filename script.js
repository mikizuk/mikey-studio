document.addEventListener("DOMContentLoaded", () => {

  const config = {
    apiKey: "AIzaSyDq8sv5WWmiwbbj4RfA5-QkokqTh_uMblA",
    authDomain: "mikey-database.firebaseapp.com",
    databaseURL: "https://mikey-database.firebaseio.com",
    projectId: "mikey-database",
    storageBucket: "mikey-database.appspot.com",
    messagingSenderId: "841627576040",
    appId: "1:841627576040:web:0c4448f2517bf9a3094b5d",
    measurementId: "G-6HGRS89R6Y"

  };
  firebase.initializeApp(config);
  
  const dbRefObject = firebase.database().ref().child('mikey-db');

  dbRefObject.on('value', snap => {
    const mikeyDb = snap.val();
    console.log('mikeyDb', mikeyDb);
    const firebaseText = document.getElementById('firebase-text');
    firebaseText.innerText = mikeyDb.textOnPage;
    firebaseText.style.color = 'red';

  });



})