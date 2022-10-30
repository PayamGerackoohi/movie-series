(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Qe="modulepreload",Ye=function(e){return"/"+e},Ee={},pe=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=Ye(s),s in Ee)return;Ee[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Qe,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((c,u)=>{o.addEventListener("load",c),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},E={};function G(e){E.context=e}const ze=(e,t)=>e===t,Ze=Symbol("solid-proxy"),et=Symbol("solid-track"),se={equals:ze};let $e=Ue;const U=1,oe=2,Oe={owned:null,cleanups:null,context:null,owner:null},fe={};var b=null;let D=null,v=null,C=null,W=null,me=0;const[tt,en]=k(!1);function X(e,t){const n=v,r=b,s=e.length===0,i=s?Oe:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>$(()=>be(i)));b=i,v=null;try{return I(l,!0)}finally{v=n,b=r}}function k(e,t){t=t?Object.assign({},se,t):se;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),We(n,s));return[Ie.bind(n),r]}function Pe(e,t,n){const r=ue(e,t,!0,U);K(r)}function Y(e,t,n){const r=ue(e,t,!1,U);K(r)}function tn(e,t,n){$e=ct;const r=ue(e,t,!1,U);r.user=!0,W?W.push(r):K(r)}function P(e,t,n){n=n?Object.assign({},se,n):se;const r=ue(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),Ie.bind(r)}function nt(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let l,o=null,c=fe,u=null,a=!1,f="initialValue"in i,h=typeof r=="function"&&P(r);const p=new Set,[g,w]=(i.storage||k)(i.initialValue),[N,O]=k(void 0,{equals:!1}),[R,A]=k(f?"ready":"unresolved");if(E.context){u=`${E.context.id}${E.context.count++}`;let d;i.ssrLoadFrom==="initial"?c=i.initialValue:E.load&&(d=E.load(u))&&(c=d[0])}function x(d,m,y,T){return o===d&&(o=null,f=!0,(d===c||m===c)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(T,{value:m})),c=fe,_(m,y)),m}function _(d,m){!m&&(l=qe(d)),I(()=>{w(()=>d),A(m?"ready":"errored");for(const y of p.keys())y.decrement();p.clear()},!1)}function j(){const d=lt,m=g();if(l)throw l;return v&&!v.user&&d&&Pe(()=>{N(),o&&(d.resolved||p.has(d)||(d.increment(),p.add(d)))}),m}function S(d=!0){if(d!==!1&&a)return;a=!1,l=void 0;const m=h?h():r;if(m==null||m===!1){x(o,$(g),!0);return}const y=c!==fe?c:$(()=>s(m,{value:g(),refetching:d}));return typeof y!="object"||!("then"in y)?(x(o,y,!0),y):(o=y,a=!0,queueMicrotask(()=>a=!1),I(()=>{A(f?"refreshing":"pending"),O()},!1),y.then(T=>x(y,T,!0,m),T=>x(y,T,!1)))}return Object.defineProperties(j,{state:{get:()=>R()},loading:{get(){const d=R();return d==="pending"||d==="refreshing"}},error:{get(){return R()==="errored"?l:void 0}},latest:{get(){if(!f)return j();if(R()==="errored")throw l;return g()}}}),h?Pe(()=>S(!1)):S(!1),[j,{refetch:S,mutate:w}]}function nn(e){return I(e,!1)}function $(e){let t,n=v;return v=null,t=e(),v=n,t}function _e(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const c=$(()=>t(o,s,l));return s=o,c}}function ye(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function rn(){return v}function rt(){return b}function st(e,t){const n=b;b=e;try{return I(t,!0)}finally{b=n}}function ot(e){const t=v,n=b;return Promise.resolve().then(()=>{v=t,b=n;let r;return I(e,!1),v=b=null,r?r.done:void 0})}function it(){return[tt,ot]}function Te(e){const t=Symbol("context");return{id:t,Provider:ft(t),defaultValue:e}}function we(e){let t;return(t=De(b,e.id))!==void 0?t:e.defaultValue}function ve(e){const t=P(e),n=P(()=>he(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let lt;function Ie(){const e=D;if(this.sources&&(this.state||e))if(this.state===U||e)K(this);else{const t=C;C=null,I(()=>le(this),!1),C=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function We(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=D&&D.running;l&&D.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?C.push(i):W.push(i),i.observers&&je(i)),l||(i.state=U)}if(C.length>1e6)throw C=[],new Error},!1)),t}function K(e){if(!e.fn)return;be(e);const t=b,n=v,r=me;v=b=e,at(e,e.value,r),v=n,b=t}function at(e,t,n){let r;try{r=e.fn(t)}catch(s){e.pure&&(e.state=U),Be(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?We(e,r):e.value=r,e.updatedAt=n)}function ue(e,t,n,r=U,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Oe&&(b.owned?b.owned.push(i):b.owned=[i]),i}function ie(e){const t=D;if(e.state===0||t)return;if(e.state===oe||t)return le(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<me);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===U||t)K(e);else if(e.state===oe||t){const s=C;C=null,I(()=>le(e,n[0]),!1),C=s}}function I(e,t){if(C)return e();let n=!1;t||(C=[]),W?n=!0:W=[],me++;try{const r=e();return ut(n),r}catch(r){C||(W=null),Be(r)}}function ut(e){if(C&&(Ue(C),C=null),e)return;const t=W;W=null,t.length&&I(()=>$e(t),!1)}function Ue(e){for(let t=0;t<e.length;t++)ie(e[t])}function ct(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ie(r)}for(E.context&&G(),t=0;t<n;t++)ie(e[t])}function le(e,t){const n=D;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===U||n?s!==t&&ie(s):(s.state===oe||n)&&le(s,t))}}function je(e){const t=D;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=oe,r.pure?C.push(r):W.push(r),r.observers&&je(r))}}function be(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)be(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function qe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Be(e){throw e=qe(e),e}function De(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:De(e.owner,t):void 0}function he(e){if(typeof e=="function"&&!e.length)return he(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=he(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ft(e){return function(n){let r;return Y(()=>r=$(()=>(b.context={[e]:n.value},ve(()=>n.children)))),r}}const dt=Symbol("fallback");function Ce(e){for(let t=0;t<e.length;t++)e[t]()}function ht(e,t,n={}){let r=[],s=[],i=[],l=0,o=t.length>1?[]:null;return ye(()=>Ce(i)),()=>{let c=e()||[],u,a;return c[et],$(()=>{let h=c.length,p,g,w,N,O,R,A,x,_;if(h===0)l!==0&&(Ce(i),i=[],r=[],s=[],l=0,o&&(o=[])),n.fallback&&(r=[dt],s[0]=X(j=>(i[0]=j,n.fallback())),l=1);else if(l===0){for(s=new Array(h),a=0;a<h;a++)r[a]=c[a],s[a]=X(f);l=h}else{for(w=new Array(h),N=new Array(h),o&&(O=new Array(h)),R=0,A=Math.min(l,h);R<A&&r[R]===c[R];R++);for(A=l-1,x=h-1;A>=R&&x>=R&&r[A]===c[x];A--,x--)w[x]=s[A],N[x]=i[A],o&&(O[x]=o[A]);for(p=new Map,g=new Array(x+1),a=x;a>=R;a--)_=c[a],u=p.get(_),g[a]=u===void 0?-1:u,p.set(_,a);for(u=R;u<=A;u++)_=r[u],a=p.get(_),a!==void 0&&a!==-1?(w[a]=s[u],N[a]=i[u],o&&(O[a]=o[u]),a=g[a],p.set(_,a)):i[u]();for(a=R;a<h;a++)a in w?(s[a]=w[a],i[a]=N[a],o&&(o[a]=O[a],o[a](a))):s[a]=X(f);s=s.slice(0,l=h),r=c.slice(0)}return s});function f(h){if(i[a]=h,o){const[p,g]=k(a);return o[a]=g,t(c[a],p)}return t(c[a])}}}function L(e,t){return $(()=>e(t||{}))}function te(){return!0}const gt={get(e,t,n){return t===Ze?n:e.get(t)},has(e,t){return e.has(t)},set:te,deleteProperty:te,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:te,deleteProperty:te}},ownKeys(e){return e.keys()}};function de(e){return(e=typeof e=="function"?e():e)==null?{}:e}function pt(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=de(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in de(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(de(e[n])));return[...new Set(t)]}},gt)}function Me(e){let t,n;const r=s=>{const i=E.context;if(i){const[o,c]=k();(n||(n=e())).then(u=>{G(i),c(()=>u.default),G()}),t=o}else if(t){const o=t();if(o)return o(s)}else{const[o]=nt(()=>(n||(n=e())).then(c=>c.default));t=o}let l;return P(()=>(l=t())&&$(()=>{if(!i)return l(s);const o=E.context;G(i);const c=l(s);return G(o),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function sn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(ht(()=>e.each,e.children,t||void 0))}function J(e){let t=!1;const n=e.keyed,r=P(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return P(()=>{const s=r();if(s){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?$(()=>i(s)):i}return e.fallback})}function mt(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,c=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const a=i<r?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!u){u=new Map;let f=o;for(;f<i;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let f=l,h=1,p;for(;++f<s&&f<i&&!((p=u.get(t[f]))==null||p!==a+h);)h++;if(h>a-o){const g=t[l];for(;o<a;)e.insertBefore(n[o++],g)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Le="_$DX_DELEGATE";function yt(e,t,n){let r;return X(s=>{r=s,t===document?e():ne(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function Z(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function wt(e,t=window.document){const n=t[Le]||(t[Le]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,vt))}}function on(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ln(e,t){t==null?e.removeAttribute("class"):e.className=t}function ne(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ae(e,t,r,n);Y(s=>ae(e,t(),s,n),r)}function vt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),E.registry&&!E.done&&(E.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ae(e,t,n,r,s){for(E.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(E.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(E.context)return n;n=M(e,n,r)}else{if(i==="function")return Y(()=>{let o=t();for(;typeof o=="function";)o=o();n=ae(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(ge(o,t,n,s))return Y(()=>n=ae(e,o,n,r,!0)),()=>n;if(E.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=M(e,n,r),l)return n}else c?n.length===0?Ne(e,o,r):mt(e,n,o):(n&&M(e),Ne(e,o));n=o}else if(t instanceof Node){if(E.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=M(e,n,r,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=ge(e,o,c)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=ge(e,Array.isArray(o)?o:[o],c)||s}else e.push(o),s=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Ne(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function M(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(s,o):e.insertBefore(s,n):c&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function bt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function St([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Rt(e){try{return document.querySelector(e)}catch{return null}}function At(e,t){const n=Rt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function xt(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=St(k(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!s&&t(o),o));return n&&ye(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function Et(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:k({value:""})};return e}function Pt(){return xt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),At(window.location.hash.slice(1),n)},e=>bt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Ct=/^(?:[a-z0-9]+:)?\/\//i,Lt=/^\/+|\/+$/g;function Q(e,t=!1){const n=e.replace(Lt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function re(e,t,n){if(Ct.test(t))return;const r=Q(e),s=n&&Q(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+Q(t,!i)}function Nt(e,t){if(e==null)throw new Error(t);return e}function Ve(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function kt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function $t(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),i=s.length;return l=>{const o=l.split("/").filter(Boolean),c=o.length-i;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:i?"":"/",params:{}};for(let a=0;a<i;a++){const f=s[a],h=o[a];if(f[0]===":")u.params[f.slice(1)]=h;else if(f.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${h}`}return r&&(u.params[r]=c?o.slice(-c).join("/"):""),u}}function Ot(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ke(e){const t=new Map,n=rt();return new Proxy({},{get(r,s){return t.has(s)||st(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Fe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Fe(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const _t=100,He=Te(),ce=Te(),Se=()=>Nt(we(He),"Make sure your app is wrapped in a <Router />");let z;const Re=()=>z||we(ce)||Se().base,an=()=>Se().navigatorFactory(),un=()=>Re().params;function Tt(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>L(r,{}):()=>{const{element:c}=e;return c===void 0&&n?L(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return Ge(e.path).reduce((c,u)=>{for(const a of Fe(u)){const f=Ve(t,a),h=l?f:f.split("/*",1)[0];c.push({...o,originalPath:a,pattern:h,matcher:$t(h,!l)})}return c},[])}function It(e,t=0){return{routes:e,score:Ot(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function Ge(e){return Array.isArray(e)?e:[e]}function Xe(e,t="",n,r=[],s=[]){const i=Ge(e);for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=Tt(c,t,n);for(const a of u){if(r.push(a),c.children)Xe(c.children,a.pattern,n,r,s);else{const f=It([...r],s.length);s.push(f)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function Wt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Ut(e,t){const n=new URL("http://sar"),r=P(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=P(()=>V(r().pathname)),i=P(()=>V(r().search,!0)),l=P(()=>V(r().hash)),o=P(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Ke(_e(i,()=>kt(r())))}}function jt(e,t="",n,r){const{signal:[s,i],utils:l={}}=Et(e),o=l.parsePath||(S=>S),c=l.renderPath||(S=>S),u=re("",t),a=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&i({value:u,replace:!0,scroll:!1});const[f,h]=it(),[p,g]=k(s().value),[w,N]=k(s().state),O=Ut(p,w),R=[],A={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(S){return re(u,S)}};if(n)try{z=A,A.data=n({data:void 0,params:{},location:O,navigate:_(A)})}finally{z=void 0}function x(S,d,m){$(()=>{if(typeof d=="number"){d&&(l.go?l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:y,resolve:T,scroll:F,state:ee}={replace:!1,resolve:!0,scroll:!0,...m},q=T?S.resolvePath(d):re("",d);if(q===void 0)throw new Error(`Path '${d}' is not a routable path`);if(R.length>=_t)throw new Error("Too many redirects");const B=p();if(q!==B||ee!==w()){const H=R.push({value:B,replace:y,scroll:F,state:w()});h(()=>{g(q),N(ee)}).then(()=>{R.length===H&&j({value:q,state:ee})})}})}function _(S){return S=S||we(ce)||A,(d,m)=>x(S,d,m)}function j(S){const d=R[0];d&&((S.value!==d.value||S.state!==d.state)&&i({...S,replace:d.replace,scroll:d.scroll}),R.length=0)}Y(()=>{const{value:S,state:d}=s();$(()=>{S!==p()&&h(()=>{g(S),N(d)})})});{let S=function(m){return m.namespaceURI==="http://www.w3.org/2000/svg"},d=function(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const y=m.composedPath().find(xe=>xe instanceof Node&&xe.nodeName.toUpperCase()==="A");if(!y)return;const T=S(y),F=T?y.href.baseVal:y.href;if((T?y.target.baseVal:y.target)||!F&&!y.hasAttribute("state"))return;const q=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||q&&q.includes("external"))return;const B=T?new URL(F,document.baseURI):new URL(F),H=V(B.pathname);if(B.origin!==window.location.origin||u&&H&&!H.toLowerCase().startsWith(u.toLowerCase()))return;const Je=o(H+V(B.search,!0)+V(B.hash)),Ae=y.getAttribute("state");m.preventDefault(),x(A,Je,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:Ae&&JSON.parse(Ae)})};document.addEventListener("click",d),ye(()=>document.removeEventListener("click",d))}return{base:A,out:a,location:O,isRouting:f,renderPath:c,parsePath:o,navigatorFactory:_}}function qt(e,t,n,r){const{base:s,location:i,navigatorFactory:l}=e,{pattern:o,element:c,preload:u,data:a}=r().route,f=P(()=>r().path),h=Ke(()=>r().params);u&&u();const p={parent:t,pattern:o,get child(){return n()},path:f,params:h,data:t.data,outlet:c,resolvePath(g){return re(s.path(),g,f())}};if(a)try{z=p,p.data=a({data:t.data,params:h,location:i,navigate:l(p)})}finally{z=void 0}return p}const Bt=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||Pt(),o=jt(l,r,s);return L(He.Provider,{value:o,get children(){return e.children}})},Dt=e=>{const t=Se(),n=Re(),r=ve(()=>e.children),s=P(()=>Xe(r(),Ve(n.pattern,e.base||""),Mt)),i=P(()=>Wt(s(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:u,path:a,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:a,params:f})));const l=[];let o;const c=P(_e(i,(u,a,f)=>{let h=a&&u.length===a.length;const p=[];for(let g=0,w=u.length;g<w;g++){const N=a&&a[g],O=u[g];f&&N&&O.route.key===N.route.key?p[g]=f[g]:(h=!1,l[g]&&l[g](),X(R=>{l[g]=R,p[g]=qt(t,p[g-1]||n,()=>c()[g+1],()=>i()[g])}))}return l.splice(u.length).forEach(g=>g()),f&&h?f:(o=p[0],p)}));return L(J,{get when(){return c()&&o},children:u=>L(ce.Provider,{value:u,get children(){return u.outlet()}})})},ke=e=>{const t=ve(()=>e.children);return pt(e,{get children(){return t()}})},Mt=()=>{const e=Re();return L(J,{get when(){return e.child},children:t=>L(ce.Provider,{value:t,get children(){return t.outlet()}})})};function Vt(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:l}=e;let o,c,u,a;const f=async(p=!0)=>{await u,p&&o?.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()}),await a?.()};async function h(){if("serviceWorker"in navigator){const{Workbox:p,messageSW:g}=await pe(()=>import("./workbox-window.prod.es5.6954f450.js"),[]);a=async()=>{c&&c.waiting&&await g(c.waiting,{type:"SKIP_WAITING"})},o=new p("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",w=>{w.isUpdate||r?.()});{const w=()=>{n?.()};o.addEventListener("waiting",w),o.addEventListener("externalwaiting",w)}o.register({immediate:t}).then(w=>{c=w,i?i("/sw.js",w):s?.(w)}).catch(w=>{l?.(w)})}}return u=h(),f}function Kt(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:l}=e,[o,c]=k(!1),[u,a]=k(!1),f=Vt({immediate:t,onOfflineReady(){a(!0),r?.()},onNeedRefresh(){c(!0),n?.()},onRegistered:s,onRegisteredSW:i,onRegisterError:l});return{needRefresh:[o,c],offlineReady:[u,a],updateServiceWorker:f}}const Ft={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}};const Ht=Z("<span>App ready to work offline</span>"),Gt=Z('<button class="toast-button">Reload</button>'),Xt=Z('<div class="toast"><div class="message"></div><div class="button-holder"><button class="toast-button">Close</button></div></div>'),Jt=Z('<div class="container"></div>'),Qt=Z("<span>New content available, click on reload button to update.</span>");console.log(Ft);const Yt=()=>{const{needRefresh:[e,t],offlineReady:[n,r],updateServiceWorker:s}=Kt({immediate:!0,onRegisteredSW(l,o){console.log(`Service Worker at: ${l}`),console.log(`SW Registered: ${o}`)},onRegisterError(l){console.error("SW registration error",l)}}),i=()=>{r(!1),t(!1)};return(()=>{const l=Jt.cloneNode(!0);return ne(l,L(J,{get when(){return n()||e()},get children(){const o=Xt.cloneNode(!0),c=o.firstChild,u=c.nextSibling,a=u.firstChild;return ne(c,L(J,{get fallback(){return Qt.cloneNode(!0)},get when(){return n()},get children(){return Ht.cloneNode(!0)}})),ne(u,L(J,{get when(){return e()},get children(){const f=Gt.cloneNode(!0);return f.$$click=()=>s(!0),f}}),a),a.$$click=i,o}})),l})()};wt(["click"]);const zt=Me(()=>pe(()=>import("./home.c873ddee.js"),["assets/home.c873ddee.js","assets/home.13dc55ca.css","assets/general.26e5b015.js","assets/general.bf8ced85.css"])),Zt=Me(()=>pe(()=>import("./serie.8639e875.js"),["assets/serie.8639e875.js","assets/serie.44fa864c.css","assets/general.26e5b015.js","assets/general.bf8ced85.css"]));localStorage.AppName||(localStorage.clear(),localStorage.AppName="Movie Series",console.log("localStorage is cleaned."));yt(()=>L(Bt,{get children(){return[L(Dt,{get children(){return[L(ke,{path:"/",component:zt}),L(ke,{path:"serie/:serie",component:Zt})]}}),L(Yt,{})]}}),document.getElementById("root"));export{Ze as $,sn as F,J as S,L as a,Y as b,k as c,ln as d,wt as e,et as f,rn as g,nn as h,ne as i,tn as j,un as k,on as s,Z as t,an as u};
//# sourceMappingURL=index.4e7692dd.js.map
