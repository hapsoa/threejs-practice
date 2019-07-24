/**
 * 기본 Three.js + vue
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
    this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 100);
    this.camera.position.z = 1;

    // 화면인듯
    this.scene = new Three.Scene();

    // 물체의 구조정보 (x길이, y길이, z길이)
    const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
    // 일반 그리기 방법인듯
    const material = new Three.MeshNormalMaterial();

    // mesh는 geometry와 material 합친 것이다.
    this.mesh = new Three.Mesh(geometry, material);

    // scene에 mesh를 추가한다.
    this.scene.add(this.mesh);

    // renderer는 그리기 객체이다.
    this.renderer = new Three.WebGLRenderer({ antialias: true });

    // renderer의 크기를 설정한다. 화면 크기를 설정한다고 볼 수 있겠다.
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

  }
  private animate() {
    requestAnimationFrame(this.animate);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    // renderer가 scene과 camera를 가지고 그린다.
    this.renderer.render(this.scene, this.camera);
  }

  private mounted() {
    this.init();
    this.animate();
  }
}





