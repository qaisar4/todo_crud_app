import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCEnnRrvZ18J_YUaxKI9liQRrFjyFWrAGw",
  authDomain: "todo-crud-app-40ec5.firebaseapp.com",
  projectId: "todo-crud-app-40ec5",
  storageBucket: "todo-crud-app-40ec5.appspot.com",
  messagingSenderId: "846800101742",
  appId: "1:846800101742:web:b31461d8e9edd402e5a17f"
};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

export {db};
