import firebase from 'firebase/app'

// eslint-disable-next-line
var firebaseConfig = {
    apiKey: "AIzaSyDUTZe82KQUo40o4k6vHeZ6x82CvErIDJk",
    authDomain: "react-web-a3bcb.firebaseapp.com",
    projectId: "react-web-a3bcb",
    storageBucket: "react-web-a3bcb.appspot.com",
    messagingSenderId: "313073270848",
    appId: "1:313073270848:web:d824ff2754fe2bd1121fa5"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
export default fire