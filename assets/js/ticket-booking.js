// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import { getFirestore, collection, doc, getDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
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

 const db = getFirestore(app);

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
  const docRef = doc(db, "movies", localStorage.getItem("phimvuabam"));
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
	document.getElementById("ten-phim").innerHTML = `${docSnap.data().name}`;
  } 
  
  const ticketselement = document.getElementById("tickets")
  let tongtien = 0;

  ticketselement.onchange = (e) => {
	 tongtien = docSnap.data().cost  * (e.target.value ?? 0);
	 document.getElementById("price").innerHTML = `${tongtien}`;
  }

  document.getElementById("buy").onclick = async () => {
	try {
	  const docRef = await addDoc(collection(db, "ticketss"), {
		name: document.getElementById("ten-phim").innerHTML ?? null,
		date: document.getElementById("date").value ?? null,
		time: document.getElementById("time").value ?? null,
		ticket: document.getElementById("tickets").value ?? null,
		price: document.getElementById("price").innerHTML ?? null		
	  });
	  window.location.href='index.html';
	  console.log("Document written with ID: ", docRef.id);
	} catch (e) {
	  alert("Đặt vé thất bại");
	}
  }
