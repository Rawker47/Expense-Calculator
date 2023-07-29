// import {initializeApp} from 'firebase/app'
// import {getAuth} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyByYA09eFemf9TnGV-Kq7KIYahLQonv8rw",
//   authDomain: "facebook-clone-e3c1b.firebaseapp.com",
//   projectId: "facebook-clone-e3c1b",
//   storageBucket: "facebook-clone-e3c1b.appspot.com",
//   messagingSenderId: "65875460085",
//   appId: "1:65875460085:web:d59e9fa4dbacfd35f56abc",
//   measurementId: "G-LE9K8CH28B"
// };
// const firebaseApp=firebase.intializeApp(firebaseConfig);
// const db= firebaseApp.firestore();
// const auth=firebase.auth();
// const provider=new firebase.auth.GoogleAuthProvider();

// export {auth,provider};
// export default db;





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyByYA09eFemf9TnGV-Kq7KIYahLQonv8rw",
  authDomain: "facebook-clone-e3c1b.firebaseapp.com",
  projectId: "facebook-clone-e3c1b",
  storageBucket: "facebook-clone-e3c1b.appspot.com",
  messagingSenderId: "65875460085",
  appId: "1:65875460085:web:d59e9fa4dbacfd35f56abc",
  measurementId: "G-LE9K8CH28B",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;