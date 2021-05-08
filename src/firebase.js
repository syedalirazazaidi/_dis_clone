// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyAa78RpBVE8oMzXWrrNsGebTEfO5hswEHo",
//   authDomain: "cldisk.firebaseapp.com",
//   projectId: "cldisk",
//   storageBucket: "cldisk.appspot.com",
//   messagingSenderId: "694529374827",
//   appId: "1:694529374827:web:bd93270235ea1018f84f2e",
//   measurementId: "G-WVDVLSXEF1",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GithubAuthProvider();
// const storage = firebase.storage();
// firebase.analytics();
// export { auth, provider, storage };
// export default db;
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
