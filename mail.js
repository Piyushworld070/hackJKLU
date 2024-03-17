const firebaseConfig = {
    apiKey: "AIzaSyCy6Xr3dWt_FUKtkqpXF7e9wJxYui0EL3Y",
    authDomain: "form-ddd07.firebaseapp.com",
    databaseURL: "https://form-ddd07-default-rtdb.firebaseio.com",
    projectId: "form-ddd07",
    storageBucket: "form-ddd07.appspot.com",
    messagingSenderId: "1043337516615",
    appId: "1:1043337516615:web:0b72374517d0c27ac30362",
    measurementId: "G-K87ZXNV2D1"
  };
  firebase.initializeApp(firebaseConfig);
  var formDB= firebase.database().ref('form') 
  document.getElementById("form").addEventListener("submit",submitform);
  function submitform(e){
    e.preventDefault();
    var name=getElementByVal('name') ;
    var email=getElementByVal("email");
    var message=getElementByVal("message");
    saveMessages(name,email,message);
  }
   const saveMessages=(name,email,message) => {
    var newcontactform=formDB.push();
    newcontactform.set({
      name:name,
      email:email,
      message:message
    })
   };
  const getElementByVal=(id)=>{
    return document.getElementById(id).ariaValueMax;
  };