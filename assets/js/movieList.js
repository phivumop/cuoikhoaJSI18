// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
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

document.getElementById("movie-container").innerHTML = "";
let dataRender = "";
const querySnapshot = await getDocs(collection(db, "movies"));
querySnapshot.forEach((dec) => {
  console.log(dec.data());

  dataRender = `
  <div class="item vhny-grid">
  <div class="box16 mb-0">
	  <figure>
		  <img class="img-fluid" src="${dec.data().banner}" alt="">
	  </figure>
	  <a href=".Commando3" data-toggle="modal" data-target="#myModal-${dec.id}">
		  <div class="box-content">
			  <h3 class="title">${dec.data().name}</h3>
		  </div>
	  </a>
	  <!-- Modal -->
	  <div class="modal fade Commando3" id="myModal-${dec.id}" tabindex="-1" role="dialog"
		  aria-hidden="true">
		  <div class="modal-dialog" role="document">
			  <div class="modal-content" id="mymodalcontent">
				  <div class="modal-header">
					  <h4 class="modal-title" id="exampleModalLongTitle">Chi Tiết</h4>
					  <button type="button" class="closebtn" data-dismiss="modal"
						  aria-label="Close">
						  <span aria-hidden="true">&times;</span>
					  </button>
				  </div>
				  <div class="modal-body" id="dynamic-content">
					  <img src="${dec.data().banner}" class="img-fluid modalimg" alt="">
					  <p>
						<h3>Ngày ra mắt</h3>
						<input type="text" id="${dec.id}-day" class="day" name="released date" value="${dec.data()["released day"]}">
					  </p>
					  <h4>Tên phim</h4>
					  <p>
					  	<input type="text" id="${dec.id}-title" class="movieTitle" name="name" value="${dec.data()["name"]}">
					  </p>
					  <h4>Banner của phim</h4>
					  <p>
					  	<input type="text" id="${dec.id}-bannerPhim" class="bannerPhim" name="banner" value="${dec.data()["banner"]}">
					  </p>
					  <h4>Về bộ phim</h4>
					  <p>	
						<input type="text" id="${dec.id}-Amovie" class="Amovie" name="about movie" value="${dec.data()["about movie"]}">
					  </p>
					  <h4>Diễn viên nổi tiếng</h4>
					  <p>
					  <input type="text" id="${dec.id}-Scast" class="Scast" name="star cast" value="${dec.data()["star cast"]}">
					  </p>
					  <h4>Giá vé</h4>
					  <p>
					  <input type="number" id="${dec.id}-price" class="price" name="price" value="${dec.data()["cost"]}"> VND
					  </p>
				  </div>
				  <div class="bookbtn">
				  	  <button type="button" class="deleBut"
					  	  id="${dec.id}-dele">Xóa phim</button>
					  <button type="button" class="upBut"
						  id="${dec.id}-btn">Cập nhật</button>
				  </div>
			  </div>
		  </div>
	  </div>
	  <!-- modal end -->
  </div>
</div>
 
  `;
  const htmlFilm = document.createElement('div')
  htmlFilm.innerHTML = dataRender
  	document.getElementById("movie-container").appendChild(htmlFilm)
	//Xóa phim
  	document.getElementById(`${dec.id}-dele`).onclick = async () => {
		await deleteDoc(doc(db, "movies", `${dec.id}`));
		alert('Đã xóa phim')
	}
	//Cập nhật phim
	document.getElementById(`${dec.id}-btn`).onclick = async () => {
		await updateDoc(doc(db, "movies", `${dec.id}`), {
			name: document.getElementById(`${dec.id}-title`).value ,
			'about movie': document.getElementById(`${dec.id}-Amovie`).value,
			banner: document.getElementById(`${dec.id}-bannerPhim`).value,
			cost: document.getElementById(`${dec.id}-price`).value,
			'released day': document.getElementById(`${dec.id}-day`).value,
			'star cast': document.getElementById(`${dec.id}-Scast`).value
		});
		alert('Cập nhật thông tin thành công')
	}
});
