let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!f(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?d(null,l):l),s=o)};c(n);const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,p:e,i:t,h:null,$:null,u:null}),p={},y=(e,t,n,o)=>{if(n!==o){let r=W(e,t),c=t.toLowerCase();r||"o"!==t[0]||"n"!==t[1]||(t="-"===t[2]?t.slice(3):W(l,c)?c.slice(2):c[2]+t.slice(3),n&&s.rel(e,t,n,!1),o&&s.ael(e,t,o,!1))}},h=(e,t,n,l)=>{const o=11===t.h.nodeType&&t.h.host?t.h.host:t.h,s=e&&e.u||a,r=t.u||a;for(l in s)l in r||y(o,l,s[l],void 0);for(l in r)y(o,l,s[l],r[l])},m=(t,n,l)=>{let s,r,c=n.$[l],i=0;if(null!==c.i)s=c.h=o.createTextNode(c.i);else if(s=c.h=o.createElement(c.p),h(null,c),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=m(t,c,i),r&&s.appendChild(r);return s},w=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=m(null,l,s),c&&(o[s].h=c,i.insertBefore(c,n)))},b=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},S=(e,t)=>e.p===t.p,g=(e,t)=>{const n=t.h=e.h,l=e.$,o=t.$,s=t.i;null===s?(h(e,t),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;s<=c&&r<=a;)null==i?i=t[++s]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:S(i,f)?(g(i,f),i=t[++s],f=l[++r]):S(u,$)?(g(u,$),u=t[--c],$=l[--a]):S(i,$)?(g(i,$),e.insertBefore(i.h,u.h.nextSibling),i=t[++s],$=l[--a]):S(u,f)?(g(u,f),e.insertBefore(u.h,i.h),u=t[--c],f=l[++r]):(o=m(t&&t[r],n,r),f=l[++r],o&&i.h.parentNode.insertBefore(o,i.h));s>c?w(e,null==l[a+1]?null:l[a+1].h,n,l,r,a):r>a&&b(t,s,c)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),w(n,null,t,o,0,o.length-1)):null!==l&&b(l,0,l.length-1)):e.i!==s&&(n.data=s)},v=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},M=(e,t)=>{if(e.t|=16,!(4&e.t))return v(e,e.S),J((()=>j(e,t)));e.t|=512},j=(e,t)=>{const n=e.g;return x(void 0,(()=>k(e,n,t)))},k=async(e,t,n)=>{const l=e.v,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.v,l=t.t,s=((e,t)=>{let n=u(t),l=V.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);C(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>O(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},C=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.v,s=n.j||d(null,null),r=(e=>e&&e.p===p)(l)?l:$(null,null,l);t=o.tagName,r.p=null,r.t|=4,n.j=r,r.h=s.h=o.shadowRoot||o,e=o["s-sc"],g(s,r)})(n,l)}catch(e){q(e,n.v)}return null},O=e=>{const t=e.v,n=e.S;64&e.t||(e.t|=64,E(t),e.k(t),n||P()),e.m&&(e.m(),e.m=void 0),512&e.t&&I((()=>M(e,!1))),e.t&=-517},P=()=>{E(o.documentElement),I((()=>(e=>{const t=s.ce("appload",{detail:{namespace:"stencil-counter"}});return e.dispatchEvent(t),t})(l)))},x=(e,t)=>e&&e.then?e.then(t):t(),E=e=>e.classList.add("hydrated"),T=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>L(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=L(e),s=o.O.get(t),r=o.t,c=o.g;n=((e,t)=>null==e||f(e)?e:2&t?parseFloat(e):e)(n,l.C[t][0]),8&r&&void 0!==s||n===s||(o.O.set(t,n),c&&2==(18&r)&&M(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},A=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,a=o.head,f=a.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let p,y=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const o=l.o,a=class extends HTMLElement{constructor(e){super(e),U(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),y?d.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=L(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(t,t.S=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=N(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(T(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){q(e)}t.t&=-9,e()}if(o.style){let e=o.style;const t=u(n);if(!V.has(t)){const l=()=>{};((e,t,n)=>{let l=V.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,V.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.S,r=()=>M(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return L(this).T}};l.A=e[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,T(a,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):s.jmp((()=>p=setTimeout(P,30)))},F=new WeakMap,L=e=>F.get(e),R=(e,t)=>F.set(t.g=e,t),U=(e,t)=>{const n={t:0,v:e,M:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],F.set(e,n)},W=(e,t)=>t in e,q=(e,t)=>(0,console.error)(e,t),H=new Map,N=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=H.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(H.set(n,e),e[t])),q)},V=new Map,_=[],z=[],B=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?I(G):s.raf(G))},D=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){q(e)}e.length=0},G=()=>{D(_),D(z),(n=_.length>0)&&s.raf(G)},I=e=>r().then(e),J=B(z,!0);export{A as b,$ as h,r as p,R as r}