const getFirebaseData = () => {
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
  firebase.analytics();
  firebase.analytics().logEvent('notification_received');


  const dbRefObject = firebase.database().ref().child('mikey-db');
  // const hobbies = dbRefObject.child('hobbies');
  // const firebaseText = document.getElementById('firebase-text');
  // const ulList = document.getElementById('list');

  dbRefObject.on('value', snap => {
    const mikeyDb = snap.val();
    // console.log('firebase database', mikeyDb); // important console.log!
  //   firebaseText.innerText = mikeyDb.textOnPage;
  //   firebaseText.style.color = 'red';
  });

  // hobbies.on('child_added', snap => {
  //   console.log(snap.val());
  //   const li = document.createElement('li');
  //   li.innerText = snap.val();
  //   ulList.style.color = 'blue';
  //   ulList.appendChild(li);
  // });
}

export default { getFirebaseData }