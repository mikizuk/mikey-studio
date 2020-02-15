// const firebaseApi = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",
    authDomain: "fir-database-mikey.firebaseapp.com",
    databaseURL: "https://fir-database-mikey.firebaseio.com",
    projectId: "fir-database-mikey",
    storageBucket: "fir-database-mikey.appspot.com",
    messagingSenderId: "299569566671",
    appId: "1:299569566671:web:5b22d2ab28ec77479db8ba",
    measurementId: "G-LM0GHJJ6VX"
  };

//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   const firebaseDatabase = firebase.database().ref();
//     firebaseDatabase.on('value', snap => {
//     mikeyStudioData = snap.val()
//     console.log('3 mikeyStudioData', mikeyStudioData);
//   });
// }

export default { firebaseConfig }
