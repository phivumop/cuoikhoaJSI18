// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
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
const db = getFirestore(app);


document.getElementById("but").onclick = async () => {
	try {
  		const docRef = await addDoc(collection(db, "movies"), {
    		name: document.getElementById("title").value,
    		'released day': document.getElementById("day").value,
			'about movie': document.getElementById("aboutMovie").value,
    		banner: document.getElementById("bannerUrl").value,
    		cost: document.getElementById("price").value,
    		'star cast': document.getElementById("starCast").value
  		});
  		console.log("Document written with ID: ", docRef.id);
		alert('Đăng phim thành công')
	} catch (e) {
  	console.error("Error adding document: ", e);
}}
