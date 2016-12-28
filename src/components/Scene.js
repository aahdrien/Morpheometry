/**
 * Class for the global Scene.
 */
export default class Scene {
  constructor(width, height) {
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

  add(element) {
    this.scene.add(element);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}