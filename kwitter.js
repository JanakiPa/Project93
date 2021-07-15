function addUser(){
    userName=document.getElementById("user_name").value;
localStorage.setItem("username",userName);
window.location="kwitter_room.html";
}