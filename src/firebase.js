import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database";



const app = firebase.initializeApp({
  apiKey: "AIzaSyB3NN9nBcABO0fkgHvuZ3r3XU2sK5IjIP4",
  authDomain: "auth-development-1dced.firebaseapp.com",
  projectId: "auth-development-1dced",
  databaseURL: "https://auth-development-1dced-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "auth-development-1dced.appspot.com",
  messagingSenderId: "652127023114",
  appId: "1:652127023114:web:63723d827748615d286ff3"
})





export function writeUserData(firstName,lastName,password, email) {
    firebase.database().ref('users/' + firstName).set({
    firstName: firstName,
    lastName:lastName,
    password:password,
    email: email
  });

}


export const auth = app.auth()
export default app


