// JS
console.log('connected');

let PARAMS = {
  alpha : 0,
  beta : 0,
  gamma : 0
}

if(window.DeviceOrientationEvent) {

  console.log("Device Orientation is supported");

  window.addEventListener('deviceorientation', (eventData) => {
    PARAMS.alpha  = eventData.alpha;
    PARAMS.beta   = eventData.beta;
    PARAMS.gamma  = eventData.gamma;
  }, false);
} else {
  console.log("DeviceOrientaion is NOT supported")
}

//////////////// TWEAKPANE ////////////////
// TWEAKPANE - MONITOR - ACCELEROMETER
const paneAcc = new Tweakpane({
	container: document.getElementById('tweakpane-1')
});
// paneAcc.addInput(PARAMS, 'acc',{ label: 'ACCEL (X,Y)'});
paneAcc.addMonitor(PARAMS, 'alpha', { label: 'X ACCELERATION' });
paneAcc.addMonitor(PARAMS, 'beta', { label: 'Y ACCELERATION' });
paneAcc.addMonitor(PARAMS, 'gamma', { label: 'Z ACCELERATION' });

//////////////// TWEAKPANE ////////////////
