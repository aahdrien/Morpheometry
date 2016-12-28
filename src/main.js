import Scene from './components/Scene';
import MorphBall from './components/Landscape';

// ------ THREEJS --------
let lastDate = Date.now(), dt;

// ------- EVENTS --------

// -------- MAIN ---------
let scene = new Scene(window.innerWidth, window.innerHeight);
let morphBall = initLandscape(scene);

render();


// ------ FUNCTIONS ------
function render() {
  dt = Date.now() - lastDate;
  lastDate = Date.now();

  morphBall.update(dt);

  scene.render();

  requestAnimationFrame(render);
}

function initLandscape(scene,) {
  let morphBall = new MorphBall();
  let morphBallThreeObject = morphBall.getThreeObject();

  scene.add(morphBallThreeObject);

  return morphBall;
}

// --- EVENTS FUNCTIONS --