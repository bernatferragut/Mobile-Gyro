// JS
console.log('connected');

//////////////// FIREBASE/////////////
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEjTnvCCkM4bRr73PJrCbC3HQ46p6cK5I",
    authDomain: "lzrbit-db.firebaseapp.com",
    databaseURL: "https://lzrbit-db.firebaseio.com",
    projectId: "lzrbit-db",
    storageBucket: "lzrbit-db.appspot.com",
    messagingSenderId: "488933348339",
    appId: "1:488933348339:web:eb448d3c1c2d26b3973886",
    measurementId: "G-TBC5QYT0H4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();
  // Creating a db Reference
  let dbRef = firestore.doc('gyroApp/data');

//////////////// DATA ////////////////
let PARAMS = {
  x : 0,
  y : 0,
}
//////////////// DATA ////////////////

//////////////// DEVICE ORIENTATION WINDOW EVENT ////////////////
if(window.DeviceOrientationEvent) {

  console.log("Device Orientation is supported");

  window.addEventListener('deviceorientation', (eventData) => {
    // LEFT - RIGHT ORIENTATION
    PARAMS.x   = eventData.beta; // In degree in the range [-180,180]
    if (x >90) { x = 90 }; // to avoid screen flipping
    if (x < -90) { x = -90};

    // NORTH - SOUTH ORIENTATION
    PARAMS.y  = eventData.gamma; // In degree in the range [-90,90]

    // SEND PARAMS TO FIRESTORE - FIND OUT
    // sending data to firebase
    dbRef.set({
      x : PARAMS.x,
      y : PARAMS.y,
    }).then(() => {
      console.log('data added')
    }).catch((err) => {
      console.log('got an error', err);
    });

  }, false);
} else {
  window.alert("DeviceOrientaion is NOT supported");
}
//////////////// DEVICE ORIENTATION WINDOW EVENT ////////////////

//////////////// TWEAKPANE ////////////////////////////////
// TWEAKPANE - MONITOR - ACCELEROMETER
const paneAcc = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
paneAcc.addMonitor(PARAMS, 'x', { label: 'W <-> E |  X: ' });
paneAcc.addMonitor(PARAMS, 'y', { label: 'N <-> S | Y: ' });
// TWEAKPANE - BUTTONS


//////////////// TWEAKPANE ////////////////////////////////
