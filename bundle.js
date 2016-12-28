/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Scene = __webpack_require__(1);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Landscape = __webpack_require__(2);

	var _Landscape2 = _interopRequireDefault(_Landscape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ------ THREEJS --------
	var lastDate = Date.now(),
	    dt = void 0;

	// ------- EVENTS --------

	// -------- MAIN ---------
	var scene = new _Scene2.default(window.innerWidth, window.innerHeight);
	var morphBall = initLandscape(scene);

	render();

	// ------ FUNCTIONS ------
	function render() {
	  dt = Date.now() - lastDate;
	  lastDate = Date.now();

	  morphBall.update(dt);

	  scene.render();

	  requestAnimationFrame(render);
	}

	function initLandscape(scene) {
	  var morphBall = new _Landscape2.default();
	  var morphBallThreeObject = morphBall.getThreeObject();

	  scene.add(morphBallThreeObject);

	  return morphBall;
	}

	// --- EVENTS FUNCTIONS --

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Class for the global Scene.
	 */
	var Scene = function () {
	  function Scene(width, height) {
	    _classCallCheck(this, Scene);

	    this.scene = new THREE.Scene();

	    this.renderer = new THREE.WebGLRenderer({ alpha: true });
	    this.renderer.setClearColor(0x000000, 0);
	    this.renderer.setSize(width, height);

	    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	    this.camera.position.y = 0;
	    this.camera.position.z = 100;
	    // this.camera.rotate.x = 0.1 * Math.PI;
	    // this.camera.lookAt(this.scene.position);

	    document.body.appendChild(this.renderer.domElement);
	  }

	  _createClass(Scene, [{
	    key: "add",
	    value: function add(element) {
	      this.scene.add(element);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return Scene;
	}();

	exports.default = Scene;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MorphBall = function () {
	  function MorphBall() {
	    _classCallCheck(this, MorphBall);

	    this.sphereGeometry = new THREE.SphereGeometry(20, 5, 6);

	    this.uniforms = {
	      u_amplitude: { type: '1f', value: 3 },
	      u_frequency: { type: '1f', value: 0.05 },
	      u_time: { type: '1f', value: 0 }
	    };

	    this.sphereMaterial = new THREE.ShaderMaterial({
	      uniforms: this.uniforms,
	      vertexShader: document.getElementById('vertexShader').textContent,
	      fragmentShader: document.getElementById('fragmentShader').textContent,
	      side: THREE.DoubleSide,
	      wireframe: true
	    });

	    this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);

	    this.sphere.rotateZ(.5 * Math.PI);
	  }

	  _createClass(MorphBall, [{
	    key: 'update',
	    value: function update(dt) {
	      this.uniforms.u_time.value += dt / 3000;

	      this.sphere.rotation.x += 0.01;
	    }
	  }, {
	    key: 'getThreeObject',
	    value: function getThreeObject() {
	      return this.sphere;
	    }
	  }]);

	  return MorphBall;
	}();

	exports.default = MorphBall;

/***/ }
/******/ ]);