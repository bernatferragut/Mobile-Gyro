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
  // Initialize Firestore
  let firestore = firebase.firestore();
  // Creating a db Reference
  let dbRef = firestore.doc('gyroApp/data');

//////////////// DATA ////////////////
let PARAMS = {
	x: 0,
	y: 0,
	line: false,
	lineWidth: 0.1,
	lineColor: '#9acd32',
	dot: false,
	dotWidth: 0.25,
	dotColor: '#ff6347'
};
//////////////// DATA ////////////////

//////////////// DEVICE ORIENTATION WINDOW EVENT ////////////////
if(window.DeviceOrientationEvent) {

  console.log("Device Orientation is supported");

  window.addEventListener('deviceorientation', (eventData) => {
    // LEFT - RIGHT ORIENTATION
    PARAMS.x   = eventData.beta; // In degree in the range [-180,180]
    if (PARAMS.x >  90) { PARAMS.x = 90 }; 
    if (PARAMS.x < -90) { PARAMS.x = -90};

    // NORTH - SOUTH ORIENTATION
    PARAMS.y  = eventData.gamma; // In degree in the range [-90,90]

    // SEND PARAMS TO FIRESTORE - FIND OUT
    dbRef.set({
      x : PARAMS.x,
      y : PARAMS.y,
    });
  }, false);
} else {
  window.alert("DeviceOrientaion is NOT supported");
}
//////////////// DEVICE ORIENTATION WINDOW EVENT ////////////////

//////////////// TWEAKPANE ////////////////////////////////
// TWEAKPANE - DOT
// DOT ON/OFF
const paneDotOnOff = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
paneDotOnOff.addInput(PARAMS, 'dot', { label: 'DOT' });
paneDotOnOff.on('change', (value) => {
  console.log('paneDotOnOff: ', value);
  dbRef.set({
    dot : PARAMS.dot,
  });
});
// DOT SIZE
const paneDotSize = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
paneDotSize.addInput(PARAMS, 'dotWidth', {
	min: 0,
	max: 3,
	label: 'WIDTH'
});
paneDotSize.on('change', (value) => {
  console.log('paneDotSize: ', value);
  dbRef.set({
    dotWidth : PARAMS.dotWidth,
  });
});
// DOT COLOR
const paneDotColor = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
paneDotColor.addInput(PARAMS, 'dotColor', { label: 'COLOR' });
paneDotColor.on('change', (value) => {
  console.log('dotColor: ', value);
  dbRef.set({
    dotColor : PARAMS.dotColor,
  });
});

// TWEAKPANE - MONITOR - ACCELEROMETER
const paneAcc = new Tweakpane({
  container: document.getElementById('tweakpane-2'),
  title: 'Gyroscope',
});
paneAcc.addMonitor(PARAMS, 'x', { label: 'X: ' });
paneAcc.addSeparator();
paneAcc.addMonitor(PARAMS, 'y', { label: 'Y: ' });




//////////////// TWEAKPANE ////////////////////////////////