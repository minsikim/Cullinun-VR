var create360Viewer = require('360-image-viewer');
var canvasFit = require('canvas-fit');

// load your image
var image = new Image();
image.src = 'img/test.jpg';

image.onload = () => {
  // when the image is loaded, setup the viewer
  var viewer = create360Viewer({
    image: image
  });

  // attach canvas to body
  document.body.appendChild(viewer.canvas);

  // setup fullscreen canvas sizing
  var fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
  window.addEventListener('resize', fit, false);
  fit();

  // start the render loop
  viewer.start();
  console.log("done")
};