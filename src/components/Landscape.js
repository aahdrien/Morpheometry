export default class MorphBall {
  constructor() {
    this.sphereGeometry = new THREE.SphereGeometry(20, 5, 6);

    this.uniforms = {
      u_amplitude: {type: '1f', value: 3},
      u_frequency: {type: '1f', value: 0.05},
      u_time: {type: '1f', value: 0}
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

  update(dt) {
    this.uniforms.u_time.value += dt / 3000;

    this.sphere.rotation.x += 0.01;
  }

  getThreeObject() {
    return this.sphere;
  }
}