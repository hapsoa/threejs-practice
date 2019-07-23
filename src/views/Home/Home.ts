/**
 * 가본 Three.js + vue
 */

import { Component, Vue } from 'vue-property-decorator';
import * as Three from 'three';

@Component({
  components: {}
})
export default class Home extends Vue {

  private camera: any = null;
  private scene: any = null;
  private renderer: any = null;
  private mesh: any = null;

  private init() {
    const container = document.getElementById('container') as HTMLElement;

    // 카메라 생성 (fov: 작아질수록 가까이, aspect: 화면비율, near: 어느시점부터 보이기, far: 어디까지 보이기)
    this.camera = new Three.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.01, 100);
    this.camera.position.z = 1;

    // 화면인듯
    this.scene = new Three.Scene();

    // 물체의 구조정보 (x길이, y길이, z길이)
    const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
    // 일반 그리기 방법인듯
    const material = new Three.MeshNormalMaterial();

    // geometry와 material 합친 것
    this.mesh = new Three.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new Three.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

  }
  private animate() {
    requestAnimationFrame(this.animate);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

  private mounted() {
    this.init();
    this.animate();
  }
}





