(()=>{var e={2318:(e,t,r)=>{"use strict";r(7280),r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const l=s;var u=r(768),c=r(7083),d=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(927)]).then(r.bind(r,9927)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(673)]).then(r.bind(r,9673))},{path:"contato",component:()=>Promise.all([r.e(736),r.e(213)]).then(r.bind(r,4213))},{path:"sobre",component:()=>Promise.all([r.e(736),r.e(369)]).then(r.bind(r,6369))},{path:"acessar",component:()=>Promise.all([r.e(736),r.e(407)]).then(r.bind(r,3407))}]},{path:"/painel",component:()=>Promise.all([r.e(736),r.e(273)]).then(r.bind(r,273)),children:[{path:"home",component:()=>Promise.all([r.e(736),r.e(887)]).then(r.bind(r,4887))},{path:"usuarios",component:()=>Promise.all([r.e(736),r.e(809)]).then(r.bind(r,2809))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(968)]).then(r.bind(r,968))}],f=p,h=(0,c.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return t}));async function m(e,t){const o="function"===typeof u.default?await(0,u.default)({}):u.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,768)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const s=e(l);return s.use(n.Z,t),{app:s,store:o,storeKey:a,router:i}}var b=r(6417),v=r(6249),g=r(589),y=r(7153),w=r(1791),P=r(8229);const O={config:{},plugins:{Notify:b.Z,Loading:v.Z,LocalStorage:g.Z,SessionStorage:y.Z,Dialog:w.Z,Meta:P.ZP}},k="/";async function C({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<n.length;u++)try{await n[u]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:k})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,O).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,r)}))))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},768:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var o={};r.r(o),r.d(o,{updateUser:()=>l,updateUserData:()=>u});var n=r(7083),a=r(7874);function i(){return{user:{user:{}}}}var s=r(114);const l=(e,t)=>{e.user=t},u=(e,t)=>{e.user.data=t};var c=r(5477);const d={namespaced:!0,state:i,getters:s,mutations:o,actions:c},p=(0,n.h)((function(){const e=(0,a.MT)({modules:{userStorage:d},strict:!1});return e}))},5477:()=>{},114:()=>{}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));s&&(e.splice(u--,1),t=n())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{213:"bad36ddb",273:"e11d098f",369:"b01d8932",407:"c4ab2ae8",673:"d529c419",809:"dba9eadb",887:"8c0477b5",927:"f5abee4d",968:"3a70b209"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{213:"0c4babd7",273:"87fa70f5",369:"87d5df6e",673:"fc6facc1",736:"898931ed",927:"1e39143b"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="primordial:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={213:1,273:1,369:1,673:1,927:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,u=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r);for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return r.O(c)},o=self["webpackChunkprimordial"]=self["webpackChunkprimordial"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();