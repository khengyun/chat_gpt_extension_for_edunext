"use strict";(()=>{var Ar=Object.create;var Te=Object.defineProperty;var yr=Object.getOwnPropertyDescriptor;var hr=Object.getOwnPropertyNames;var br=Object.getPrototypeOf,vr=Object.prototype.hasOwnProperty;var V=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var wr=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of hr(r))!vr.call(e,s)&&s!==t&&Te(e,s,{get:()=>r[s],enumerable:!(a=yr(r,s))||a.enumerable});return e};var z=(e,r,t)=>(t=e!=null?Ar(br(e)):{},wr(r||!e||!e.__esModule?Te(t,"default",{value:e,enumerable:!0}):t,e));var K=V((pe,Pe)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof pe<"u")r(Pe);else{var t={exports:{}};r(t),e.browser=t.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:pe,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",t=a=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class m extends WeakMap{constructor(n,f=void 0){super(f),this.createItem=n}get(n){return this.has(n)||this.set(n,this.createItem(n)),super.get(n)}}let u=o=>o&&typeof o=="object"&&typeof o.then=="function",c=(o,n)=>(...f)=>{a.runtime.lastError?o.reject(new Error(a.runtime.lastError.message)):n.singleCallbackArg||f.length<=1&&n.singleCallbackArg!==!1?o.resolve(f[0]):o.resolve(f)},x=o=>o==1?"argument":"arguments",h=(o,n)=>function(l,...A){if(A.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${o}(), got ${A.length}`);if(A.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${o}(), got ${A.length}`);return new Promise((T,k)=>{if(n.fallbackToNoCallback)try{l[o](...A,c({resolve:T,reject:k},n))}catch(i){console.warn(`${o} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),l[o](...A),n.fallbackToNoCallback=!1,n.noCallback=!0,T()}else n.noCallback?(l[o](...A),T()):l[o](...A,c({resolve:T,reject:k},n))})},S=(o,n,f)=>new Proxy(n,{apply(l,A,T){return f.call(A,o,...T)}}),C=Function.call.bind(Object.prototype.hasOwnProperty),v=(o,n={},f={})=>{let l=Object.create(null),A={has(k,i){return i in o||i in l},get(k,i,j){if(i in l)return l[i];if(!(i in o))return;let g=o[i];if(typeof g=="function")if(typeof n[i]=="function")g=S(o,o[i],n[i]);else if(C(f,i)){let D=h(i,f[i]);g=S(o,o[i],D)}else g=g.bind(o);else if(typeof g=="object"&&g!==null&&(C(n,i)||C(f,i)))g=v(g,n[i],f[i]);else if(C(f,"*"))g=v(g,n[i],f["*"]);else return Object.defineProperty(l,i,{configurable:!0,enumerable:!0,get(){return o[i]},set(D){o[i]=D}}),g;return l[i]=g,g},set(k,i,j,g){return i in l?l[i]=j:o[i]=j,!0},defineProperty(k,i,j){return Reflect.defineProperty(l,i,j)},deleteProperty(k,i){return Reflect.deleteProperty(l,i)}},T=Object.create(o);return new Proxy(T,A)},d=o=>({addListener(n,f,...l){n.addListener(o.get(f),...l)},hasListener(n,f){return n.hasListener(o.get(f))},removeListener(n,f){n.removeListener(o.get(f))}}),M=new m(o=>typeof o!="function"?o:function(f){let l=v(f,{},{getContent:{minArgs:0,maxArgs:0}});o(l)}),P=new m(o=>typeof o!="function"?o:function(f,l,A){let T=!1,k,i=new Promise(L=>{k=function(I){T=!0,L(I)}}),j;try{j=o(f,l,k)}catch(L){j=Promise.reject(L)}let g=j!==!0&&u(j);if(j!==!0&&!g&&!T)return!1;let D=L=>{L.then(I=>{A(I)},I=>{let ue;I&&(I instanceof Error||typeof I.message=="string")?ue=I.message:ue="An unexpected error occurred",A({__mozWebExtensionPolyfillReject__:!0,message:ue})}).catch(I=>{console.error("Failed to send onMessage rejected reply",I)})};return D(g?j:i),!0}),O=({reject:o,resolve:n},f)=>{a.runtime.lastError?a.runtime.lastError.message===r?n():o(new Error(a.runtime.lastError.message)):f&&f.__mozWebExtensionPolyfillReject__?o(new Error(f.message)):n(f)},w=(o,n,f,...l)=>{if(l.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${o}(), got ${l.length}`);if(l.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${o}(), got ${l.length}`);return new Promise((A,T)=>{let k=O.bind(null,{resolve:A,reject:T});l.push(k),f.sendMessage(...l)})},E={devtools:{network:{onRequestFinished:d(M)}},runtime:{onMessage:d(P),onMessageExternal:d(P),sendMessage:w.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:w.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},G={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":G},services:{"*":G},websites:{"*":G}},v(a,E,s)};e.exports=t(chrome)}else e.exports=globalThis.browser})});var ar=V((hs,or)=>{"use strict";or.exports=()=>{let e={};return e.promise=new Promise((r,t)=>{e.resolve=r,e.reject=t}),e}});var nr=V((bs,sr)=>{"use strict";var xo=ar();function Ao(e,r="maxAge"){let t,a,s,m=async()=>{if(t!==void 0)return;let x=async h=>{s=xo();let S=h[1][r]-Date.now();if(S<=0){e.delete(h[0]),s.resolve();return}return t=h[0],a=setTimeout(()=>{e.delete(h[0]),s&&s.resolve()},S),typeof a.unref=="function"&&a.unref(),s.promise};try{for(let h of e)await x(h)}catch{}t=void 0},u=()=>{t=void 0,a!==void 0&&(clearTimeout(a),a=void 0),s!==void 0&&(s.reject(void 0),s=void 0)},c=e.set.bind(e);return e.set=(x,h)=>{e.has(x)&&e.delete(x);let S=c(x,h);return t&&t===x&&u(),m(),S},m(),e}sr.exports=Ao});var fr=V((vs,ir)=>{"use strict";var yo=nr(),ye=class{constructor(r,t){if(this.maxAge=r,this[Symbol.toStringTag]="Map",this.data=new Map,yo(this.data),t)for(let[a,s]of t)this.set(a,s)}get size(){return this.data.size}clear(){this.data.clear()}delete(r){return this.data.delete(r)}has(r){return this.data.has(r)}get(r){let t=this.data.get(r);if(t)return t.data}set(r,t){return this.data.set(r,{maxAge:Date.now()+this.maxAge,data:t}),this}values(){return this.createIterator(r=>r[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(r=>[r[0],r[1].data])}forEach(r,t){for(let[a,s]of this.entries())r.apply(t,[s,a,this])}[Symbol.iterator](){return this.entries()}*createIterator(r){for(let t of this.data.entries())yield r(t)}};ir.exports=ye});var W=z(K());var Tr=typeof global=="object"&&global&&global.Object===Object&&global,J=Tr;var Pr=typeof self=="object"&&self&&self.Object===Object&&self,kr=J||Pr||Function("return this")(),b=kr;var jr=b.Symbol,F=jr;var ke=Object.prototype,Sr=ke.hasOwnProperty,Cr=ke.toString,$=F?F.toStringTag:void 0;function Or(e){var r=Sr.call(e,$),t=e[$];try{e[$]=void 0;var a=!0}catch{}var s=Cr.call(e);return a&&(r?e[$]=t:delete e[$]),s}var je=Or;var Er=Object.prototype,Mr=Er.toString;function Ir(e){return Mr.call(e)}var Se=Ir;var Nr="[object Null]",Rr="[object Undefined]",Ce=F?F.toStringTag:void 0;function Br(e){return e==null?e===void 0?Rr:Nr:Ce&&Ce in Object(e)?je(e):Se(e)}var R=Br;function _r(e){return e!=null&&typeof e=="object"}var U=_r;var Dr=Array.isArray,Oe=Dr;function Fr(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var H=Fr;var Ur="[object AsyncFunction]",Wr="[object Function]",Gr="[object GeneratorFunction]",Lr="[object Proxy]";function $r(e){if(!H(e))return!1;var r=R(e);return r==Wr||r==Gr||r==Ur||r==Lr}var Z=$r;var qr=b["__core-js_shared__"],Q=qr;var Ee=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Vr(e){return!!Ee&&Ee in e}var Me=Vr;var zr=Function.prototype,Kr=zr.toString;function Jr(e){if(e!=null){try{return Kr.call(e)}catch{}try{return e+""}catch{}}return""}var B=Jr;var Hr=/[\\^$.*+?()[\]{}|]/g,Zr=/^\[object .+?Constructor\]$/,Qr=Function.prototype,Xr=Object.prototype,Yr=Qr.toString,et=Xr.hasOwnProperty,rt=RegExp("^"+Yr.call(et).replace(Hr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function tt(e){if(!H(e)||Me(e))return!1;var r=Z(e)?rt:Zr;return r.test(B(e))}var Ie=tt;function ot(e,r){return e?.[r]}var Ne=ot;function at(e,r){var t=Ne(e,r);return Ie(t)?t:void 0}var N=at;var st=N(b,"WeakMap"),X=st;var nt=9007199254740991;function it(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nt}var Y=it;function ft(e){return e!=null&&Y(e.length)&&!Z(e)}var Re=ft;var mt=Object.prototype;function lt(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||mt;return e===t}var ee=lt;var ut="[object Arguments]";function pt(e){return U(e)&&R(e)==ut}var de=pt;var Be=Object.prototype,dt=Be.hasOwnProperty,gt=Be.propertyIsEnumerable,ct=de(function(){return arguments}())?de:function(e){return U(e)&&dt.call(e,"callee")&&!gt.call(e,"callee")},_e=ct;function xt(){return!1}var De=xt;var We=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fe=We&&typeof module=="object"&&module&&!module.nodeType&&module,At=Fe&&Fe.exports===We,Ue=At?b.Buffer:void 0,yt=Ue?Ue.isBuffer:void 0,ht=yt||De,Ge=ht;var bt="[object Arguments]",vt="[object Array]",wt="[object Boolean]",Tt="[object Date]",Pt="[object Error]",kt="[object Function]",jt="[object Map]",St="[object Number]",Ct="[object Object]",Ot="[object RegExp]",Et="[object Set]",Mt="[object String]",It="[object WeakMap]",Nt="[object ArrayBuffer]",Rt="[object DataView]",Bt="[object Float32Array]",_t="[object Float64Array]",Dt="[object Int8Array]",Ft="[object Int16Array]",Ut="[object Int32Array]",Wt="[object Uint8Array]",Gt="[object Uint8ClampedArray]",Lt="[object Uint16Array]",$t="[object Uint32Array]",p={};p[Bt]=p[_t]=p[Dt]=p[Ft]=p[Ut]=p[Wt]=p[Gt]=p[Lt]=p[$t]=!0;p[bt]=p[vt]=p[Nt]=p[wt]=p[Rt]=p[Tt]=p[Pt]=p[kt]=p[jt]=p[St]=p[Ct]=p[Ot]=p[Et]=p[Mt]=p[It]=!1;function qt(e){return U(e)&&Y(e.length)&&!!p[R(e)]}var Le=qt;function Vt(e){return function(r){return e(r)}}var $e=Vt;var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,q=qe&&typeof module=="object"&&module&&!module.nodeType&&module,zt=q&&q.exports===qe,ge=zt&&J.process,Kt=function(){try{var e=q&&q.require&&q.require("util").types;return e||ge&&ge.binding&&ge.binding("util")}catch{}}(),ce=Kt;var Ve=ce&&ce.isTypedArray,Jt=Ve?$e(Ve):Le,ze=Jt;function Ht(e,r){return function(t){return e(r(t))}}var Ke=Ht;var Zt=Ke(Object.keys,Object),Je=Zt;var Qt=Object.prototype,Xt=Qt.hasOwnProperty;function Yt(e){if(!ee(e))return Je(e);var r=[];for(var t in Object(e))Xt.call(e,t)&&t!="constructor"&&r.push(t);return r}var He=Yt;var eo=N(b,"Map"),re=eo;var ro=N(b,"DataView"),te=ro;var to=N(b,"Promise"),oe=to;var oo=N(b,"Set"),ae=oo;var Ze="[object Map]",ao="[object Object]",Qe="[object Promise]",Xe="[object Set]",Ye="[object WeakMap]",er="[object DataView]",so=B(te),no=B(re),io=B(oe),fo=B(ae),mo=B(X),_=R;(te&&_(new te(new ArrayBuffer(1)))!=er||re&&_(new re)!=Ze||oe&&_(oe.resolve())!=Qe||ae&&_(new ae)!=Xe||X&&_(new X)!=Ye)&&(_=function(e){var r=R(e),t=r==ao?e.constructor:void 0,a=t?B(t):"";if(a)switch(a){case so:return er;case no:return Ze;case io:return Qe;case fo:return Xe;case mo:return Ye}return r});var rr=_;var lo="[object Map]",uo="[object Set]",po=Object.prototype,go=po.hasOwnProperty;function co(e){if(e==null)return!0;if(Re(e)&&(Oe(e)||typeof e=="string"||typeof e.splice=="function"||Ge(e)||ze(e)||_e(e)))return!e.length;var r=rr(e);if(r==lo||r==uo)return!e.size;if(ee(e))return!He(e).length;for(var t in e)if(go.call(e,t))return!1;return!0}var xe=co;var Ae=z(K());async function tr(){let{provider:e="chatgpt"}=await Ae.default.storage.local.get("provider"),r=`provider:${"gpt3"}`,t=await Ae.default.storage.local.get(r);return{provider:e,configs:{["gpt3"]:t[r]}}}var gr=z(fr());var se,ho=new Uint8Array(16);function he(){if(!se&&(se=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!se))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return se(ho)}var y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));function mr(e,r=0){return(y[e[r+0]]+y[e[r+1]]+y[e[r+2]]+y[e[r+3]]+"-"+y[e[r+4]]+y[e[r+5]]+"-"+y[e[r+6]]+y[e[r+7]]+"-"+y[e[r+8]]+y[e[r+9]]+"-"+y[e[r+10]]+y[e[r+11]]+y[e[r+12]]+y[e[r+13]]+y[e[r+14]]+y[e[r+15]]).toLowerCase()}var bo=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),be={randomUUID:bo};function vo(e,r,t){if(be.randomUUID&&!r&&!e)return be.randomUUID();e=e||{};let a=e.random||(e.rng||he)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,r){t=t||0;for(let s=0;s<16;++s)r[t+s]=a[s];return r}return mr(a)}var ne=vo;var wo=z(K());var lr="https://chatgpt4google.com";function ur(e){let r,t,a,s,m,u,c;return x(),{feed:h,reset:x};function x(){r=!0,t="",a=0,s=-1,m=void 0,u=void 0,c=""}function h(C){t=t?t+C:C,r&&To(t)&&(t=t.slice(pr.length)),r=!1;let v=t.length,d=0,M=!1;for(;d<v;){M&&(t[d]===`
`&&++d,M=!1);let P=-1,O=s,w;for(let E=a;P<0&&E<v;++E)w=t[E],w===":"&&O<0?O=E-d:w==="\r"?(M=!0,P=E-d):w===`
`&&(P=E-d);if(P<0){a=v-d,s=O;break}else a=0,s=-1;S(t,d,O,P),d+=P+1}d===v?t="":d>0&&(t=t.slice(d))}function S(C,v,d,M){if(M===0){c.length>0&&(e({type:"event",id:m,event:u||void 0,data:c.slice(0,-1)}),c="",m=void 0),u=void 0;return}let P=d<0,O=C.slice(v,v+(P?M:d)),w=0;P?w=M:C[v+d+1]===" "?w=d+2:w=d+1;let E=v+w,G=M-w,o=C.slice(E,E+G).toString();if(O==="data")c+=o?"".concat(o,`
`):`
`;else if(O==="event")u=o;else if(O==="id"&&!o.includes("\0"))m=o;else if(O==="retry"){let n=parseInt(o,10);Number.isNaN(n)||e({type:"reconnect-interval",value:n})}}}var pr=[239,187,191];function To(e){return pr.every((r,t)=>e.charCodeAt(t)===r)}async function*dr(e){let r=e.getReader();try{for(;;){let{done:t,value:a}=await r.read();if(t)return;yield a}}finally{r.releaseLock()}}async function ie(e,r){let{onMessage:t,...a}=r,s=await fetch(e,a);if(!s.ok){let u=await s.json().catch(()=>({}));throw new Error(xe(u)?`${s.status} ${s.statusText}`:JSON.stringify(u))}let m=ur(u=>{u.type==="event"&&t(u.data)});for await(let u of dr(s.body)){let c=new TextDecoder().decode(u);m.feed(c)}}async function cr(e,r,t,a){return fetch(`https://chat.openai.com/backend-api${t}`,{method:r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(a)})}async function xr(e,r){await cr(e,"POST","/conversation/message_feedback",r)}async function Po(e,r,t){await cr(e,"PATCH",`/conversation/${r}`,t)}var ve="accessToken",we=new gr.default(10*1e3);async function me(){if(we.get(ve))return we.get(ve);let e=await fetch("https://chat.openai.com/api/auth/session");if(e.status===403)throw new Error("CLOUDFLARE");let r=await e.json().catch(()=>({}));if(!r.accessToken)throw new Error("UNAUTHORIZED");return we.set(ve,r.accessToken),r.accessToken}async function ko(){try{return(await fetch(`${lr}/api/config`).then(r=>r.json())).chatgpt_webapp_model_name}catch(e){return console.error(e),null}}var fe=class{constructor(r){this.token=r;this.token=r}async generateAnswer(r){let t,a=()=>{t&&Po(this.token,t,{is_visible:!1})};return await ie("https://chat.openai.com/backend-api/conversation",{method:"POST",signal:r.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({action:"next",messages:[{id:ne(),role:"user",content:{content_type:"text",parts:[r.prompt]}}],model:await ko()||"text-davinci-002-render",parent_message_id:ne()}),onMessage(s){var c,x,h;if(console.debug("sse message",s),s==="[DONE]"){r.onEvent({type:"done"}),a();return}let m;try{m=JSON.parse(s)}catch(S){console.error(S);return}let u=(h=(x=(c=m.message)==null?void 0:c.content)==null?void 0:x.parts)==null?void 0:h[0];u&&(t=m.conversation_id,r.onEvent({type:"answer",data:{text:u,messageId:m.message.id,conversationId:m.conversation_id}}))}}),{cleanup:a}}};var le=class{constructor(r,t){this.token=r;this.model=t;this.token=r,this.model=t}buildPrompt(r){return this.model!=="text-chat-davinci-002-20230126"?r:`Respond conversationally.<|im_end|>

User: ${r}<|im_sep|>
ChatGPT:`}async generateAnswer(r){let t="";return await ie("https://api.openai.com/v1/completions",{method:"POST",signal:r.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({model:this.model,prompt:this.buildPrompt(r.prompt),stream:!0,max_tokens:2048}),onMessage(a){if(console.debug("sse message",a),a==="[DONE]"){r.onEvent({type:"done"});return}let s;try{s=JSON.parse(a);let m=s.choices[0].text;if(m==="<|im_end|>"||m==="<|im_sep|>")return;t+=m,r.onEvent({type:"answer",data:{text:t,messageId:s.id,conversationId:s.id}})}catch(m){console.error(m);return}}}),{}}};async function jo(e,r){let t=await tr(),a;if(t.provider==="chatgpt"){let u=await me();a=new fe(u)}else if(t.provider==="gpt3"){let{apiKey:u,model:c}=t.configs["gpt3"];a=new le(u,c)}else throw new Error(`Unknown provider ${t.provider}`);let s=new AbortController;e.onDisconnect.addListener(()=>{s.abort(),m==null||m()});let{cleanup:m}=await a.generateAnswer({prompt:r,signal:s.signal,onEvent(u){if(u.type==="done"){e.postMessage({event:"DONE"});return}e.postMessage(u.data)}})}W.default.runtime.onConnect.addListener(e=>{e.onMessage.addListener(async r=>{console.debug("received msg",r);try{await jo(e,r.question)}catch(t){console.error(t),e.postMessage({error:t.message})}})});W.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK"){let r=await me();await xr(r,e.data)}else if(e.type==="OPEN_OPTIONS_PAGE")W.default.runtime.openOptionsPage();else if(e.type==="GET_ACCESS_TOKEN")return me()});W.default.runtime.onInstalled.addListener(e=>{e.reason==="install"&&W.default.runtime.openOptionsPage()});})();
