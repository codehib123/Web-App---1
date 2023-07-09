//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDcqvysjE_J9FSo3lJ0PF33Y5YDN3-tkAY",
      authDomain: "kwitter-f5de4.firebaseapp.com",
      databaseURL: "https://kwitter-f5de4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5de4",
      storageBucket: "kwitter-f5de4.appspot.com",
      messagingSenderId: "784066807392",
      appId: "1:784066807392:web:4e8cdd8304cbb836eea505"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    function send()
    {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
});

document.getElementById("msg").value = "";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
