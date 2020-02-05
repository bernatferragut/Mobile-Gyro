// JS
console.log('connected');

let x = document.querySelector('.x');
// console.log(x);
let y = document.querySelector('.y');
// console.log(y);
let z = document.querySelector('.z');
// console.log(z);

if(window.DeviceOrientationEvent) {

  console.log("Device Orientation is supported");

  window.addEventListener('deviceorientation', (eventData) => {
    x.innerHTML = `x: ${eventData.alpha } `;
    y.innerHTML = `y: ${eventData.beta  } `;
    z.innerHTML = `z: ${eventData.gamma } `;
  }, false);
} else {
  console.log("DeviceOrientaion is NOT supported")
}

