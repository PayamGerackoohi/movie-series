import{k as G,u as H,j as J,i,a as S,b as C,d as k,F as E,t as a,h as c,e as K}from"./index.861b2887.js";import{c as M,a as x,b as O,p as Q}from"./general.174ad88d.js";const U=a('<div class="middle"><div id="title" class="round-button solid-button"></div></div>'),V=a('<div id="header1" class="spread"><div class="button-stack"><button class="left-button"><img class="center-image" src="/remove.svg"></button><div class="middle-button solid-button">Season</div><button class="right-button"><img class="center-image" src="/add.svg"></button></div><button id="back-button" class="circle-button"><img src="/left-arrow.svg" class="center-image"></button></div>'),W=a('<div id="header2" class="right-side"><span>\xB1</span><div id="add-count" class="button-stack"><button class="left-button"><img class="center-image" src="/remove.svg"></button><div class="middle-button solid-button"></div><button class="right-button"><img class="center-image" src="/add.svg"></button></div><span>episode</span></div>'),X=a('<div class="button-stack serie-title"><button>Season </button><button class="rect-button"><img class="center-image" src="/remove.svg"></button><button class="right-button"><img class="center-image" src="/add.svg"></button></div>'),Y=a('<details><summary style="display:none;"></summary><div class="reverse-middle-button solid-button season-content"></div></details>'),Z=a("<button>Episode </button>"),st=()=>{const g=G(),N=H(),[v,y]=M("Series"),p=v.findIndex(t=>t.name===g.serie),[m,r]=x(v[p].seasons),A=m.findIndex(t=>t.some(e=>!e)),[_,d]=x(m.map((t,e)=>A===e)),[$,I]=O("AddCount","1"),w=()=>c(()=>{r(t=>[...t,[]]),d(t=>[...t,!0])}),B=()=>c(()=>{r(t=>t.slice(0,t.length-1)),d(t=>t.slice(0,t.length-1))}),F=t=>c(()=>{r(t,e=>[...e,0]),d(t,()=>!0)}),L=t=>c(()=>{r(t,e=>e.slice(0,e.length-1)),d(t,()=>!0)}),P=t=>h(()=>F(t)),T=t=>h(()=>L(t)),h=t=>c(()=>Array.from({length:$()}).forEach(t)),j=(t,e)=>r(t,Q(s=>s[e]=R(s[e]))),R=t=>t?0:1;J(()=>c(()=>{y(p,{name:g.serie,seasons:m})}));function f(t){const e=+$()+t;I(e<=1?1:e)}const q=()=>N("/"),z=t=>d(t,e=>!e),D=t=>`${t?"middle-button":"left-round-button"}`;return[(()=>{const t=U.cloneNode(!0),e=t.firstChild;return i(e,()=>g.serie),t})(),(()=>{const t=V.cloneNode(!0),e=t.firstChild,s=e.firstChild,n=s.nextSibling,o=n.nextSibling,l=e.nextSibling;return s.$$click=B,o.$$click=w,l.$$click=q,t})(),(()=>{const t=W.cloneNode(!0),e=t.firstChild,s=e.nextSibling,n=s.firstChild,o=n.nextSibling,l=o.nextSibling,u=s.nextSibling;return u.firstChild,n.$$click=()=>f(-1),i(o,$),l.$$click=()=>f(1),i(u,()=>$()==1?"":"s",null),t})(),S(E,{each:m,children:(t,e)=>[(()=>{const s=X.cloneNode(!0),n=s.firstChild;n.firstChild;const o=n.nextSibling,l=o.nextSibling;return n.$$click=()=>z(e()),i(n,()=>e()+1,null),o.$$click=()=>T(e()),l.$$click=()=>P(e()),C(()=>k(n,D(_[e()]))),s})(),(()=>{const s=Y.cloneNode(!0),n=s.firstChild,o=n.nextSibling;return i(o,S(E,{each:t,children:(l,u)=>(()=>{const b=Z.cloneNode(!0);return b.firstChild,b.$$click=()=>j(e(),u()),k(b,`episode ${l?"seen":"new"}`),i(b,()=>u()+1,null),b})()})),C(()=>s.open=_[e()]),s})()]})]};K(["click"]);export{st as default};
//# sourceMappingURL=serie.34295ce3.js.map