import{$ as l,e as h,g as j,f as K,c as $,h as k}from"./index.0a4a5e0e.js";const O=Symbol("store-raw"),y=Symbol("store-node"),T=Symbol("store-name");function _(e,n){let t=e[l];if(!t&&(Object.defineProperty(e,l,{value:t=new Proxy(e,L)}),!Array.isArray(e))){const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let r=0,c=o.length;r<c;r++){const f=o[r];if(s[f].get){const i=s[f].get.bind(t);Object.defineProperty(e,f,{get:i})}}}return t}function u(e){let n;return e!=null&&typeof e=="object"&&(e[l]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function a(e,n=new Set){let t,o,s,r;if(t=e!=null&&e[O])return t;if(!u(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let c=0,f=e.length;c<f;c++)s=e[c],(o=a(s,n))!==s&&(e[c]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const c=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let i=0,w=c.length;i<w;i++)r=c[i],!f[r].get&&(s=e[r],(o=a(s,n))!==s&&(e[r]=o))}return e}function A(e){let n=e[y];return n||Object.defineProperty(e,y,{value:n={}}),n}function P(e,n,t){return e[n]||(e[n]=N(t))}function E(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===l||n===y||n===T||(delete t.value,delete t.writable,t.get=()=>e[l][n]),t}function D(e){if(j()){const n=A(e);(n._||(n._=N()))()}}function F(e){return D(e),Reflect.ownKeys(e)}function N(e){const[n,t]=$(e,{equals:!1,internal:!0});return n.$=t,n}const L={get(e,n,t){if(n===O)return e;if(n===l)return t;if(n===h)return D(e),t;const o=A(e),s=o.hasOwnProperty(n);let r=s?o[n]():e[n];if(n===y||n==="__proto__")return r;if(!s){const c=Object.getOwnPropertyDescriptor(e,n);j()&&(typeof r!="function"||e.hasOwnProperty(n))&&!(c&&c.get)&&(r=P(o,n,r)())}return u(r)?_(r):r},has(e,n){if(n===O||n===l||n===h||n===y||n==="__proto__")return!0;const t=A(e)[n];return t&&t(),n in e},set(){return!0},deleteProperty(){return!0},ownKeys:F,getOwnPropertyDescriptor:E};function d(e,n,t,o=!1){if(!o&&e[n]===t)return;const s=e[n],r=e.length;t===void 0?delete e[n]:e[n]=t;let c=A(e),f;(f=P(c,n,s))&&f.$(()=>t),Array.isArray(e)&&e.length!==r&&(f=P(c,"length",r))&&f.$(e.length),(f=c._)&&f.$()}function p(e,n){const t=Object.keys(n);for(let o=0;o<t.length;o+=1){const s=t[o];d(e,s,n[s])}}function W(e,n){if(typeof n=="function"&&(n=n(e)),n=a(n),Array.isArray(n)){if(e===n)return;let t=0,o=n.length;for(;t<o;t++){const s=n[t];e[t]!==s&&d(e,t,s)}d(e,"length",o)}else p(e,n)}function g(e,n,t=[]){let o,s=e;if(n.length>1){o=n.shift();const c=typeof o,f=Array.isArray(e);if(Array.isArray(o)){for(let i=0;i<o.length;i++)g(e,[o[i]].concat(n),t);return}else if(f&&c==="function"){for(let i=0;i<e.length;i++)o(e[i],i)&&g(e,[i].concat(n),t);return}else if(f&&c==="object"){const{from:i=0,to:w=e.length-1,by:I=1}=o;for(let S=i;S<=w;S+=I)g(e,[S].concat(n),t);return}else if(n.length>1){g(e[o],n,[o].concat(t));return}s=e[o],t=[o].concat(t)}let r=n[0];typeof r=="function"&&(r=r(s,t),r===s)||o===void 0&&r==null||(r=a(r),o===void 0||u(s)&&u(r)&&!Array.isArray(r)?p(s,r):d(e,o,r))}function z(...[e,n]){const t=a(e||{}),o=Array.isArray(t),s=_(t);function r(...c){K(()=>{o&&c.length===1?W(t,c[0]):g(t,c)})}return[s,r]}const b=new WeakMap,R={get(e,n){if(n===O)return e;const t=e[n];let o;return u(t)?b.get(t)||(b.set(t,o=new Proxy(t,R)),o):t},set(e,n,t){return d(e,n,a(t)),!0},deleteProperty(e,n){return d(e,n,void 0,!0),!0}};function M(e){return n=>{if(u(n)){let t;(t=b.get(n))||b.set(n,t=new Proxy(n,R)),e(t)}return n}}function q(e,n){const t=localStorage.getItem(e),[o,s]=$(t||n);return k(()=>localStorage.setItem(e,o())),[o,s]}function C(e,n=[],t=void 0){const o=localStorage.getItem(e),[s,r]=z(o?JSON.parse(o):n);return k(()=>localStorage.setItem(e,JSON.stringify(s,t))),[s,r]}const X=(e,n)=>[...e.slice(0,n),...e.slice(n+1)];export{z as a,q as b,C as c,M as p,X as r};
//# sourceMappingURL=store.2f397816.js.map
