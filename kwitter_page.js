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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function send(){
      msg=document.getElementById("Msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, message:msg,like:0
      });
      document.getElementById("Msg").value="";
}