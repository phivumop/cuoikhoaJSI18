// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
	apiKey : "AIzaSyC1FWMRu9y-EFne0wYCwYG04YgKgjqpnlA" , 
	authDomain : "cuoi-khoa.firebaseapp.com" , 
	projectId : "cuoi-khoa" , 
	storageBucket : "cuoi-khoa.appspot.com" , 
	messagingSenderId : "239905695247" , 
	appId : "1:239905695247:web:9c8772805cd15ac7efe57a" 
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => { // => Công dụng: xác định web của mình đã có người đăng nhập hay chưa ?
	if (user) { // nếu có => chạy vô if này
	  // User is signed in, see docs for a list of available properties
	  // https://firebase.google.com/docs/reference/js/firebase.User
	  const uid = user.uid;
	  // ...
	} else { // nếu không, chạy vô else này
	  // User is signed out
  	  // ...
      window.location.href = "sign_in.html";
	}
  });

  document.getElementById("signout").onclick = () => {
    signOut(auth).then(() => {
       // Sign-out successful.
       window.location.href = "sign_in.html";
     }).catch((error) => {
       // An error happened.
	   alert("error:" , error.message);
     });
    }