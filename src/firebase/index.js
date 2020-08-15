import firebase from "firebase/app"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBiPExq3Cfv-Jt1ZqTAnhWvm0LJ3MYPUT8",
    authDomain: "reactjs-15bc5.firebaseapp.com",
    databaseURL: "https://reactjs-15bc5.firebaseio.com",
    projectId: "reactjs-15bc5",
    storageBucket: "reactjs-15bc5.appspot.com",
    messagingSenderId: "28384168740",
    appId: "1:28384168740:web:cccc67ae2360f402b501b1",
    measurementId: "G-Y7J3CE510X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default firebase