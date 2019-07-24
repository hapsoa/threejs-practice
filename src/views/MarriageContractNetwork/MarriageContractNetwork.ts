/**
 * 기본 Three.js + vue
 */

import { Component, Vue } from 'vue-property-decorator';
import * as Three from 'three';
import ForceGraph3D from '3d-force-graph';
import marriageContractData from './marriageContractData.json';

@Component({
  components: {}
})
export default class MarriageContractNetwork extends Vue {

  private mounted() {

    // 기본 랜덤 네트워크이다.
    // Random tree
    // const N = 300;
    // console.log('Array(N)', Array(N));
    // console.log('...Array(N).keys()', ...Array(N).keys());
    // const gData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //     .filter(id => id)
    //     .map(id => ({
    //       source: id,
    //       target: Math.round(Math.random() * (id - 1))
    //     }))
    // };
    // const graph = ForceGraph3D()
    //   (document.getElementById('3d-graph'))
    //   .graphData(gData);

    // 레미제라블 데이터로 네트워크 시각화한다.
    const graph = ForceGraph3D()(document.getElementById('3d-graph'))
      .graphData(marriageContractData)
      .nodeId('ID')
      .nodeLabel('Label')
      .linkSource('Source')
      .linkTarget('Target')
      .linkOpacity(0.5)
      ;
    // .nodeAutoColorBy('group');
  }
}





