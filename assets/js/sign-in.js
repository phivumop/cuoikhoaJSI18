// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
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
	  window.location.href = "sign_out.html";
	  // ...
	}
	else { // nếu không, chạy vô else này
	  // User is signed out
  	  // ...
	}
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.getElementById("signup").onsubmit = () => {
	var email = document.getElementById('emails').value;
	var password = document.getElementById('passwords').value;
	  createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
  //     Signed in 
      const user = userCredential.user;
  //    ...
    })
   .catch((error) => {
      const errorCode = error.code;
     const errorMessage = error.message;
	 alert("Đăng kí thất bại, vui lòng thử lại");
  //   ..
   });
}

document.getElementById("signin").onsubmit = (e) => {
	e.preventDefault();
	var email = document.getElementById('emailss').value;
	var password = document.getElementById('passwordss').value;
	signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
	  if (user.uid == "4WxapHo4UEOv5bP2jLTfc8qKkkn2"){
		window.location.href = "admin.html";
	}
	else{
	  	window.location.href = "index.html";}
     // ...
	})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
	  alert("Đăng nhập thất bại, vui lòng thử lại");
    });
}


