import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { getFirestore, collection, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"


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

let dataRender = "";
const querySnapshot = await getDocs(collection(db, "movies"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());

  dataRender += `
  <div class="item vhny-grid">
  <div class="box16 mb-0">
	  <figure>
		  <img class="img-fluid" src="${doc.data().banner}" alt="">
	  </figure>
	  <a href=".Commando3" data-toggle="modal" data-target="#myModal-${doc.id}">
		  <div class="box-content">
			  <h3 class="title">${doc.data().name}</h3>
			  <h4> <span class="post"><span class=""> </span></span>
			  <span class="post fa fa-heart text-right"></span>
		  </h4>
		  </div>
	  </a>
	  <!-- Modal -->
	  <div class="modal fade Commando3" id="myModal-${doc.id}" tabindex="-1" role="dialog"
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
					  <img src="${doc.data().banner}" class="img-fluid modalimg" alt="">
					  <p>
						  <h3>Ngày ra mắt&nbsp;:${doc.data()["released day"]}</h3>
					  </p>
					  <h4>Về bộ phim</h4>
					  <p>												
					  ${doc.data()["about movie"]}
					  </p>
					  <h4>Diễn viên nổi tiếng</h4>
					  <p>
						${doc.data()["star cast"]}
					  </p>
				  </div>
				  <div class="bookbtn">
					  <button type="button" class="btn btn-success"
						  onclick="location.href='ticket-booking.html';">Đặt vé</button>
				  </div>
			  </div>
		  </div>
	  </div>
	  <!-- modal end -->
  </div>
</div>
  
  `;
 });


 document.getElementById("movie-container").innerHTML = dataRender
