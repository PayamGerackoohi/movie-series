import{k as G,u as H,j as J,i as u,b as g,a as C,d as k,F as E,t as i,h as l,e as K}from"./index.194b47ea.js";import{c as M,a as N,b as O,p as Q}from"./general.3f564f83.js";const U=i('<div class="middle"><div id="title" class="round-button solid-button"></div></div>'),V=i('<div id="header1" class="spread"><div class="button-stack"><button class="left-button"><img class="center-image" src="/add.svg"></button><div class="middle-button solid-button">Season</div><button class="right-button"><img class="center-image" src="/remove.svg"></button></div><button id="back-button" class="circle-button"><img src="/left-arrow.svg" class="center-image"></button></div>'),W=i('<div id="header2" class="right-side"><span>\xB1</span><input id="-add-count" type="number"><span>episode</span></div>'),X=i('<div class="button-stack serie-title"><button>Season </button><button class="rect-button"><img class="center-image" src="/add.svg"></button><button class="right-button"><img class="center-image" src="/remove.svg"></button></div>'),Y=i('<details><summary style="display:none;"></summary><div class="reverse-middle-button solid-button season-content"></div></details>'),Z=i("<button>Episode </button>"),se=()=>{const b=G(),x=H(),[p,y]=M("Series"),v=p.findIndex(e=>e.name===b.serie),[m,a]=N(p[v].seasons),A=m.findIndex(e=>e.some(t=>!t)),[h,c]=N(m.map((e,t)=>A===t)),[$,_]=O("AddCount",1),I=()=>l(()=>{a(e=>[...e,[]]),c(e=>[...e,!0])}),w=()=>l(()=>{a(e=>e.slice(0,e.length-1)),c(e=>e.slice(0,e.length-1))}),B=e=>l(()=>{a(e,t=>[...t,0]),c(e,()=>!0)}),F=e=>l(()=>{a(e,t=>t.slice(0,t.length-1)),c(e,()=>!0)}),L=e=>f(()=>B(e)),P=e=>f(()=>F(e)),f=e=>l(()=>Array.from({length:$()}).forEach(e)),T=(e,t)=>a(e,Q(s=>s[t]=j(s[t]))),j=e=>e?0:1;J(()=>l(()=>{y(v,{name:b.serie,seasons:m})}));function R(e){const t=e.currentTarget.valueAsNumber;_(t),(!t||t<=1)&&_(1)}const q=()=>x("/"),z=e=>c(e,t=>!t),D=e=>`${e?"middle-button":"left-round-button"}`;return[(()=>{const e=U.cloneNode(!0),t=e.firstChild;return u(t,()=>b.serie),e})(),(()=>{const e=V.cloneNode(!0),t=e.firstChild,s=t.firstChild,n=s.nextSibling,o=n.nextSibling,r=t.nextSibling;return s.$$click=I,o.$$click=w,r.$$click=q,e})(),(()=>{const e=W.cloneNode(!0),t=e.firstChild,s=t.nextSibling,n=s.nextSibling;return n.firstChild,s.$$input=R,u(n,()=>$()==1?"":"s",null),g(()=>s.value=$()),e})(),C(E,{each:m,children:(e,t)=>[(()=>{const s=X.cloneNode(!0),n=s.firstChild;n.firstChild;const o=n.nextSibling,r=o.nextSibling;return n.$$click=()=>z(t()),u(n,()=>t()+1,null),o.$$click=()=>L(t()),r.$$click=()=>P(t()),g(()=>k(n,D(h[t()]))),s})(),(()=>{const s=Y.cloneNode(!0),n=s.firstChild,o=n.nextSibling;return u(o,C(E,{each:e,children:(r,S)=>(()=>{const d=Z.cloneNode(!0);return d.firstChild,d.$$click=()=>T(t(),S()),k(d,`episode ${r?"seen":"new"}`),u(d,()=>S()+1,null),d})()})),g(()=>s.open=h[t()]),s})()]})]};K(["click","input"]);export{se as default};
//# sourceMappingURL=serie.a81ed432.js.map
