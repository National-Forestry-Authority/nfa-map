(self.webpackChunknfa_map=self.webpackChunknfa_map||[]).push([[238],{8481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(7673);const i={attach(e){this.update(e),e.map.on("nfa-map.layer",(()=>{this.update(e)}))},remember(e){!function(e){const t=e.get("title");if(t){const a=`nfa.map.layers.${t}.visible`;if(null!==localStorage.getItem(a)){const t=!0===JSON.parse(localStorage.getItem(a));e.setVisible(t)}}}(e),e.on("change:visible",(e=>{!function(e){const t=e.get("title");if(t){const a=`nfa.map.layers.${t}.visible`,s=JSON.stringify(e.get("visible"));localStorage.setItem(a,s)}}(e.target)}))},update(e){(0,s.Z)(e.map.getLayerGroup(),(e=>{"base"===e.get("type")&&this.remember(e)}))}}}}]);