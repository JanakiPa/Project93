var firebaseConfig = {
    apiKey: "AIzaSyB1aE7FuHofc-9t2sfZUQMM5X22lip4Sc0",
    authDomain: "project93-df5a2.firebaseapp.com",
    projectId: "project93-df5a2",
    storageBucket: "project93-df5a2.appspot.com",
    messagingSenderId: "145306914306",
    appId: "1:145306914306:web:14f1053c69b09ace9aa11b",
    measurementId: "G-11XRD7XST5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";
  function addRoom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding a room"
   });
   localStorage.setItem("room",room_name);
   window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectRoom(this.id)'>#"+Room_names+"</div>"

   //End code
   });});}
getData();
function logOut(){
   window.location="index.html";
}
function redirectRoom(name){
   localStorage.setItem("room",name);
   window.location="kwitter.html";
}