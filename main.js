// JS
console.log('connected');

let PARAMS = {
  x : 0,
  y : 0,
}

if(window.DeviceOrientationEvent) {

  console.log("Device Orientation is supported");

  window.addEventListener('deviceorientation', (eventData) => {
    // PARAMS.alpha  = eventData.alpha;
    PARAMS.x   = eventData.beta; // In degree in the range [-180,180]
    if (x >90) { x = 90 };
    if (x < -90) { x = -90};
    PARAMS.y  = eventData.gamma; // In degree in the range [-90,90]
  }, false);
} else {
  console.log("DeviceOrientaion is NOT supported")
}

//////////////// TWEAKPANE ////////////////
// TWEAKPANE - MONITOR - ACCELEROMETER
const paneAcc = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
// paneAcc.addMonitor(PARAMS, 'alpha', { label: 'ALPHA' });
paneAcc.addMonitor(PARAMS, 'x', { label: 'W <-> E |  X: ' });
paneAcc.addMonitor(PARAMS, 'y', { label: 'N <-> S | Y: ' });

//////////////// TWEAKPANE ////////////////
