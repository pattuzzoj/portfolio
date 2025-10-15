import{r as s}from"./index.CYADgoF0.js";function b(e){return e.when?e.children:e.fallback}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),i=e=>{const t=h(e);return t.charAt(0).toUpperCase()+t.slice(1)},l=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),C=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:u,...c},m)=>s.createElement("svg",{ref:m,...p,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:l("lucide",n),...!a&&!C(c)&&{"aria-hidden":"true"},...c},[...u.map(([d,w])=>s.createElement(d,w)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,t)=>{const r=s.forwardRef(({className:o,...n},a)=>s.createElement(g,{ref:a,iconNode:t,className:l(`lucide-${f(i(e))}`,`lucide-${e}`,o),...n}));return r.displayName=i(e),r};export{b as S,k as c};
