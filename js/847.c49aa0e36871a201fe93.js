"use strict";(self.webpackChunkwebpack_pug=self.webpackChunkwebpack_pug||[]).push([[847],{5847:(e,t,o)=>{o.r(t),o.d(t,{elementScroll:()=>T,elementScrollBy:()=>P,elementScrollByPolyfill:()=>R,elementScrollIntoView:()=>F,elementScrollIntoViewPolyfill:()=>U,elementScrollPolyfill:()=>x,elementScrollTo:()=>S,elementScrollToPolyfill:()=>A,polyfill:()=>J,scroll:()=>g,scrollBy:()=>E,scrollIntoView:()=>j,scrollTo:()=>b,windowScroll:()=>L,windowScrollBy:()=>k,windowScrollByPolyfill:()=>G,windowScrollPolyfill:()=>q,windowScrollTo:()=>B,windowScrollToPolyfill:()=>z});const l=e=>void 0===e||"auto"===e||"instant"===e||"smooth"===e;function n(e,t){this.scrollLeft=e,this.scrollTop=t}const r=(e,t,o="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${o}`,i=(e,t,o)=>r(e,t,`The provided value '${o}' is not a valid enum value of type ScrollBehavior.`),c=(e,t,o)=>{var l;const n=`__SEAMLESS.BACKUP$${t}`;return e[n]||!e[t]||(null===(l=e[t])||void 0===l?void 0:l.__isPolyfill)||(e[n]=e[t]),e[n]||o},s=e=>{const t=typeof e;return null!==e&&("object"===t||"function"===t)},a=e=>"scrollBehavior"in window.document.documentElement.style&&!0!==(null==e?void 0:e.forcePolyfill),u=e=>{Object.defineProperty(e,"__isPolyfill",{value:!0})},d=(e,t)=>{u(t),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach((o=>{c(o,e),o[e]=t}))},w=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;const f=e=>.5*(1-Math.cos(Math.PI*e));function m(){var e;let t;return t=(null===(e=window.performance)||void 0===e?void 0:e.now)?()=>window.performance.now():()=>window.Date.now(),m=t,t()}const h=e=>{const t=(m()-e.timeStamp)/(e.duration||500);if(t>1)return e.method(e.targetX,e.targetY),void e.callback();const o=(e.timingFunc||f)(t),l=e.startX+(e.targetX-e.startX)*o,n=e.startY+(e.targetY-e.startY)*o;e.method(l,n),e.rafId=window.requestAnimationFrame((()=>{h(e)}))},p=e=>isFinite(e)?Number(e):0,v=(e,t,o)=>{var l,r;if(!(e=>{var t;return null!==(t=e.isConnected)&&void 0!==t?t:!(e.ownerDocument&&1&e.ownerDocument.compareDocumentPosition(e))})(e))return;const i=e.scrollLeft,s=e.scrollTop,a=p(null!==(l=t.left)&&void 0!==l?l:i),u=p(null!==(r=t.top)&&void 0!==r?r:s);if(a===i&&u===s)return;const d=c(HTMLElement.prototype,"scroll",n),w=c(Object.getPrototypeOf(e),"scroll",d).bind(e);if("smooth"!==t.behavior)return void w(a,u);const f=()=>{window.removeEventListener("wheel",y),window.removeEventListener("touchmove",y)},v=Object.assign(Object.assign({},o),{timeStamp:m(),startX:i,startY:s,targetX:a,targetY:u,rafId:0,method:w,callback:()=>{f();const t=9===e.nodeType;e.dispatchEvent(function(e){if("function"==typeof Event)return new Event("scrollend",{bubbles:e,cancelable:!1});const t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}(t))}}),y=()=>{window.cancelAnimationFrame(v.rafId),f()};window.addEventListener("wheel",y,{passive:!0,once:!0}),window.addEventListener("touchmove",y,{passive:!0,once:!0}),h(v)},y=e=>(t,o,n)=>{const[c,a]=(u=t).window===u?[w(t.document.documentElement),"Window"]:[t,"Element"];var u;const d=null!=o?o:{};if(!s(d))throw new TypeError(r(e,a));if(!l(d.behavior))throw new TypeError(i(e,a,d.behavior));"scrollBy"===e&&(d.left=p(d.left)+c.scrollLeft,d.top=p(d.top)+c.scrollTop),v(c,d,n)},g=y("scroll"),b=y("scrollTo"),E=y("scrollBy"),T=g,S=b,P=E,L=g,B=b,k=E,V=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},D=(e,t,o,l)=>{let n=0;switch(t||(n^=2),e){case 0:n=n>>1|(1&n)<<1,[o,l]=[l,o];break;case 1:case 3:n^=1;break;case 4:n^=2}return[n,o,l]},M=e=>1==(1&D(V(e.writingMode),"rtl"!==e.direction,void 0,void 0)[0]),I=(e,t,o,l,n,r,i)=>0!==e?e:n<t&&r>o||n>t&&r<o?null:n<=t&&i<=l||r>=o&&i>=l?2:r>o&&i<l||n<t&&i>l?3:null,H=e=>"visible"!==e&&"clip"!==e,W=(e,t)=>(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth)&&(H(t.overflowY)||H(t.overflowX)||e===w(e)),C=e=>{const t=e.parentNode,o=e.parentElement;if(null===o&&null!==t){if(11===t.nodeType)return t.host;if(9===t.nodeType)return(e=>{var t;try{return(null===(t=e.ownerDocument.defaultView)||void 0===t?void 0:t.frameElement)||null}catch(e){return null}})(e)}return o},$=(e,t,o)=>e<t?t:e>o?o:e,_=(e,t,o)=>{switch(e){case 1:return(t+o)/2;case 3:return o;case 2:case 0:return t}},X=(e,t)=>{var o,l,n;const r=null===(o=e.ownerDocument.defaultView)||void 0===o?void 0:o.visualViewport,[i,c,s,a]=e===w(e)?[0,0,null!==(l=null==r?void 0:r.width)&&void 0!==l?l:e.clientWidth,null!==(n=null==r?void 0:r.height)&&void 0!==n?n:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],u=i+e.clientLeft,d=c+e.clientTop;return[d,u+s,d+a,u]},Y=(e,t)=>{const o=[];let l=e.ownerDocument,n=l.defaultView;if(!n)return o;const r=window.getComputedStyle(e),i="rtl"!==r.direction,c=V(r.writingMode||r.getPropertyValue("-webkit-writing-mode")||r.getPropertyValue("-ms-writing-mode")),[s,a]=((e,t,o)=>{const[l,n,r]=D(t,o,e.block||"start",e.inline||"nearest");return[n,r].map(((e,t)=>{switch(e){case"center":return 1;case"nearest":return 0;default:return"start"===e==!(l>>t&1)?2:3}}))})(t,c,i);let[u,d,w,f]=((e,t,o)=>{const{top:l,right:n,bottom:r,left:i}=t,c=(s=e.ownerDocument,["scroll-margin","scroll-snap-margin"].filter((e=>e in s.documentElement.style))[0]);var s;if(!c)return[l,n,r,i];const a=e=>{const t=o.getPropertyValue(`${c}-${e}`);return parseInt(t,10)||0};return[l-a("top"),n+a("right"),r+a("bottom"),i-a("left")]})(e,e.getBoundingClientRect(),r);for(let r=C(e);null!==r;r=C(r)){if(l!==r.ownerDocument){if(l=r.ownerDocument,n=l.defaultView,!n)break;const{left:e,top:t}=r.getBoundingClientRect();u+=t,d+=e,w+=t,f+=e}const e=n.getComputedStyle(r);if("fixed"===e.position)break;if(!W(r,e))continue;const i=r.getBoundingClientRect(),[c,m,h,p]=X(r,i),v=I(s,p,m,r.clientWidth,f,d,d-f),y=I(a,c,h,r.clientHeight,u,w,w-u),g=null===v?0:_(v,f,d)-_(v,p,m),b=null===y?0:_(y,u,w)-_(y,c,h),E=M(e)?$(g,-r.scrollWidth+r.clientWidth-r.scrollLeft,-r.scrollLeft):$(g,-r.scrollLeft,r.scrollWidth-r.clientWidth-r.scrollLeft),T=$(b,-r.scrollTop,r.scrollHeight-r.clientHeight-r.scrollTop);o.push([r,{left:r.scrollLeft+E,top:r.scrollTop+T,behavior:t.behavior}]),u=Math.max(u-T,c),d=Math.min(d-E,m),w=Math.min(w-T,h),f=Math.max(f-E,p)}return o},j=(e,t,o)=>{const n=t||{};if(!l(n.behavior))throw new TypeError(i("scrollIntoView","Element",n.behavior));Y(e,n).forEach((([e,t])=>{T(e,t,o)}))},F=j,O=(e,t)=>o=>{if(a(o))return;const l={scroll:g,scrollTo:b,scrollBy:E}[e];t(e,(function(){const e=arguments;if(1===arguments.length)return void l(this,e[0],o);l(this,{left:e[0],top:e[1]})}))},x=O("scroll",d),A=O("scrollTo",d),R=O("scrollBy",d),N=(e,t)=>{u(t),c(window,e),window[e]=t},q=O("scroll",N),z=O("scrollTo",N),G=O("scrollBy",N);function K(e){F(this,{block:null==e||e?"start":"end",inline:"nearest"})}const U=e=>{if(a(e))return;const t=c(window.HTMLElement.prototype,"scrollIntoView",K);d("scrollIntoView",(function(){const o=arguments,l=o[0];1===o.length&&s(l)?F(this,l,e):t.apply(this,o)}))},J=e=>{a(e)||(x(e),A(e),R(e),U(e),q(e),z(e),G(e))}}}]);