(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var he={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},K={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Be=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],R={CSS:{},springs:{}};function P(e,t,r){return Math.min(Math.max(e,t),r)}function V(e,t){return e.indexOf(t)>-1}function Z(e,t){return e.apply(null,t)}var m={arr:function(e){return Array.isArray(e)},obj:function(e){return V(Object.prototype.toString.call(e),"Object")},pth:function(e){return m.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||m.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return m.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return m.hex(e)||m.rgb(e)||m.hsl(e)},key:function(e){return!he.hasOwnProperty(e)&&!K.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function ge(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function ye(e,t){var r=ge(e),n=P(m.und(r[0])?1:r[0],.1,100),a=P(m.und(r[1])?100:r[1],.1,100),s=P(m.und(r[2])?10:r[2],.1,100),o=P(m.und(r[3])?0:r[3],.1,100),d=Math.sqrt(a/n),i=s/(2*Math.sqrt(a*n)),g=i<1?d*Math.sqrt(1-i*i):0,u=1,c=i<1?(i*d+-o)/g:-o+d;function l(v){var p=t?t*v/1e3:v;return i<1?p=Math.exp(-p*i*d)*(u*Math.cos(g*p)+c*Math.sin(g*p)):p=(u+c*p)*Math.exp(-p*d),v===0||v===1?v:1-p}function x(){var v=R.springs[e];if(v)return v;for(var p=1/6,w=0,L=0;;)if(w+=p,l(w)===1){if(L++,L>=16)break}else L=0;var h=w*p*1e3;return R.springs[e]=h,h}return t?l:x}function qe(e){return e===void 0&&(e=10),function(t){return Math.ceil(P(t,1e-6,1)*e)*(1/e)}}var Fe=function(){var e=11,t=1/(e-1);function r(u,c){return 1-3*c+3*u}function n(u,c){return 3*c-6*u}function a(u){return 3*u}function s(u,c,l){return((r(c,l)*u+n(c,l))*u+a(c))*u}function o(u,c,l){return 3*r(c,l)*u*u+2*n(c,l)*u+a(c)}function d(u,c,l,x,v){var p,w,L=0;do w=c+(l-c)/2,p=s(w,x,v)-u,p>0?l=w:c=w;while(Math.abs(p)>1e-7&&++L<10);return w}function i(u,c,l,x){for(var v=0;v<4;++v){var p=o(c,l,x);if(p===0)return c;var w=s(c,l,x)-u;c-=w/p}return c}function g(u,c,l,x){if(!(0<=u&&u<=1&&0<=l&&l<=1))return;var v=new Float32Array(e);if(u!==c||l!==x)for(var p=0;p<e;++p)v[p]=s(p*t,u,l);function w(L){for(var h=0,f=1,y=e-1;f!==y&&v[f]<=L;++f)h+=t;--f;var M=(L-v[f])/(v[f+1]-v[f]),S=h+M*t,I=o(S,u,l);return I>=.001?i(L,S,u,l):I===0?S:d(L,h,h+t,u,l)}return function(L){return u===c&&l===x||L===0||L===1?L:s(w(L),c,x)}}return g}(),be=function(){var e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var a,s=4;n<((a=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((a*3-2)/22-n,2)}},Elastic:function(n,a){n===void 0&&(n=1),a===void 0&&(a=.5);var s=P(n,1,10),o=P(a,.1,2);return function(d){return d===0||d===1?d:-s*Math.pow(2,10*(d-1))*Math.sin((d-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},r=["Quad","Cubic","Quart","Quint"];return r.forEach(function(n,a){t[n]=function(){return function(s){return Math.pow(s,a+2)}}}),Object.keys(t).forEach(function(n){var a=t[n];e["easeIn"+n]=a,e["easeOut"+n]=function(s,o){return function(d){return 1-a(s,o)(1-d)}},e["easeInOut"+n]=function(s,o){return function(d){return d<.5?a(s,o)(d*2)/2:1-a(s,o)(d*-2+2)/2}},e["easeOutIn"+n]=function(s,o){return function(d){return d<.5?(1-a(s,o)(1-d*2))/2:(a(s,o)(d*2-1)+1)/2}}}),e}();function G(e,t){if(m.fnc(e))return e;var r=e.split("(")[0],n=be[r],a=ge(e);switch(r){case"spring":return ye(e,t);case"cubicBezier":return Z(Fe,a);case"steps":return Z(qe,a);default:return Z(n,a)}}function xe(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function N(e,t){for(var r=e.length,n=arguments.length>=2?arguments[1]:void 0,a=[],s=0;s<r;s++)if(s in e){var o=e[s];t.call(n,o,s,e)&&a.push(o)}return a}function $(e){return e.reduce(function(t,r){return t.concat(m.arr(r)?$(r):r)},[])}function ue(e){return m.arr(e)?e:(m.str(e)&&(e=xe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function X(e,t){return e.some(function(r){return r===t})}function ee(e){var t={};for(var r in e)t[r]=e[r];return t}function Q(e,t){var r=ee(e);for(var n in e)r[n]=t.hasOwnProperty(n)?t[n]:e[n];return r}function Y(e,t){var r=ee(e);for(var n in t)r[n]=m.und(e[n])?t[n]:e[n];return r}function je(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Ve(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(d,i,g,u){return i+i+g+g+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),a=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+a+","+s+","+o+",1)"}function He(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,n=parseInt(t[2],10)/100,a=parseInt(t[3],10)/100,s=t[4]||1;function o(l,x,v){return v<0&&(v+=1),v>1&&(v-=1),v<1/6?l+(x-l)*6*v:v<1/2?x:v<2/3?l+(x-l)*(2/3-v)*6:l}var d,i,g;if(n==0)d=i=g=a;else{var u=a<.5?a*(1+n):a+n-a*n,c=2*a-u;d=o(c,u,r+1/3),i=o(c,u,r),g=o(c,u,r-1/3)}return"rgba("+d*255+","+i*255+","+g*255+","+s+")"}function Re(e){if(m.rgb(e))return je(e);if(m.hex(e))return Ve(e);if(m.hsl(e))return He(e)}function k(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Ne(e){if(V(e,"translate")||e==="perspective")return"px";if(V(e,"rotate")||V(e,"skew"))return"deg"}function J(e,t){return m.fnc(e)?e(t.target,t.id,t.total):e}function T(e,t){return e.getAttribute(t)}function te(e,t,r){var n=k(t);if(X([r,"deg","rad","turn"],n))return t;var a=R.CSS[t+r];if(!m.und(a))return a;var s=100,o=document.createElement(e.tagName),d=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;d.appendChild(o),o.style.position="absolute",o.style.width=s+r;var i=s/o.offsetWidth;d.removeChild(o);var g=i*parseFloat(t);return R.CSS[t+r]=g,g}function we(e,t,r){if(t in e.style){var n=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(n)||"0";return r?te(e,a,r):a}}function ae(e,t){if(m.dom(e)&&!m.inp(e)&&(!m.nil(T(e,t))||m.svg(e)&&e[t]))return"attribute";if(m.dom(e)&&X(Be,t))return"transform";if(m.dom(e)&&t!=="transform"&&we(e,t))return"css";if(e[t]!=null)return"object"}function Le(e){if(m.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,n=new Map,a;a=r.exec(t);)n.set(a[1],a[2]);return n}}function $e(e,t,r,n){var a=V(t,"scale")?1:0+Ne(t),s=Le(e).get(t)||a;return r&&(r.transforms.list.set(t,s),r.transforms.last=t),n?te(e,s,n):s}function re(e,t,r,n){switch(ae(e,t)){case"transform":return $e(e,t,n,r);case"css":return we(e,t,r);case"attribute":return T(e,t);default:return e[t]||0}}function ne(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var n=k(e)||0,a=parseFloat(t),s=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return a+s+n;case"-":return a-s+n;case"*":return a*s+n}}function Se(e,t){if(m.col(e))return Re(e);if(/\s/g.test(e))return e;var r=k(e),n=r?e.substr(0,e.length-r.length):e;return t?n+t:n}function ie(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ye(e){return Math.PI*2*T(e,"r")}function Ue(e){return T(e,"width")*2+T(e,"height")*2}function We(e){return ie({x:T(e,"x1"),y:T(e,"y1")},{x:T(e,"x2"),y:T(e,"y2")})}function Ee(e){for(var t=e.points,r=0,n,a=0;a<t.numberOfItems;a++){var s=t.getItem(a);a>0&&(r+=ie(n,s)),n=s}return r}function _e(e){var t=e.points;return Ee(e)+ie(t.getItem(t.numberOfItems-1),t.getItem(0))}function Me(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ye(e);case"rect":return Ue(e);case"line":return We(e);case"polyline":return Ee(e);case"polygon":return _e(e)}}function Ze(e){var t=Me(e);return e.setAttribute("stroke-dasharray",t),t}function Qe(e){for(var t=e.parentNode;m.svg(t)&&m.svg(t.parentNode);)t=t.parentNode;return t}function Ce(e,t){var r=t||{},n=r.el||Qe(e),a=n.getBoundingClientRect(),s=T(n,"viewBox"),o=a.width,d=a.height,i=r.viewBox||(s?s.split(" "):[0,0,o,d]);return{el:n,viewBox:i,x:i[0]/1,y:i[1]/1,w:o,h:d,vW:i[2],vH:i[3]}}function Je(e,t){var r=m.str(e)?xe(e)[0]:e,n=t||100;return function(a){return{property:a,el:r,svg:Ce(r),totalLength:Me(r)*(n/100)}}}function Ke(e,t,r){function n(u){u===void 0&&(u=0);var c=t+u>=1?t+u:0;return e.el.getPointAtLength(c)}var a=Ce(e.el,e.svg),s=n(),o=n(-1),d=n(1),i=r?1:a.w/a.vW,g=r?1:a.h/a.vH;switch(e.property){case"x":return(s.x-a.x)*i;case"y":return(s.y-a.y)*g;case"angle":return Math.atan2(d.y-o.y,d.x-o.x)*180/Math.PI}}function fe(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Se(m.pth(e)?e.totalLength:e,t)+"";return{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:m.str(e)||t?n.split(r):[]}}function se(e){var t=e?$(m.arr(e)?e.map(ue):ue(e)):[];return N(t,function(r,n,a){return a.indexOf(r)===n})}function Ae(e){var t=se(e);return t.map(function(r,n){return{target:r,id:n,total:t.length,transforms:{list:Le(r)}}})}function Ge(e,t){var r=ee(t);if(/^spring/.test(r.easing)&&(r.duration=ye(r.easing)),m.arr(e)){var n=e.length,a=n===2&&!m.obj(e[0]);a?e={value:e}:m.fnc(t.duration)||(r.duration=t.duration/n)}var s=m.arr(e)?e:[e];return s.map(function(o,d){var i=m.obj(o)&&!m.pth(o)?o:{value:o};return m.und(i.delay)&&(i.delay=d?0:t.delay),m.und(i.endDelay)&&(i.endDelay=d===s.length-1?t.endDelay:0),i}).map(function(o){return Y(o,r)})}function Xe(e){for(var t=N($(e.map(function(s){return Object.keys(s)})),function(s){return m.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),r={},n=function(s){var o=t[s];r[o]=e.map(function(d){var i={};for(var g in d)m.key(g)?g==o&&(i.value=d[g]):i[g]=d[g];return i})},a=0;a<t.length;a++)n(a);return r}function et(e,t){var r=[],n=t.keyframes;n&&(t=Y(Xe(n),t));for(var a in t)m.key(a)&&r.push({name:a,tweens:Ge(t[a],e)});return r}function tt(e,t){var r={};for(var n in e){var a=J(e[n],t);m.arr(a)&&(a=a.map(function(s){return J(s,t)}),a.length===1&&(a=a[0])),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function at(e,t){var r;return e.tweens.map(function(n){var a=tt(n,t),s=a.value,o=m.arr(s)?s[1]:s,d=k(o),i=re(t.target,e.name,d,t),g=r?r.to.original:i,u=m.arr(s)?s[0]:g,c=k(u)||k(i),l=d||c;return m.und(o)&&(o=g),a.from=fe(u,l),a.to=fe(ne(o,u),l),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=G(a.easing,a.duration),a.isPath=m.pth(s),a.isPathTargetInsideSVG=a.isPath&&m.svg(t.target),a.isColor=m.col(a.from.original),a.isColor&&(a.round=1),r=a,a})}var Pe={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,n,a){if(n.list.set(t,r),t===n.last||a){var s="";n.list.forEach(function(o,d){s+=d+"("+o+") "}),e.style.transform=s}}};function Te(e,t){var r=Ae(e);r.forEach(function(n){for(var a in t){var s=J(t[a],n),o=n.target,d=k(s),i=re(o,a,d,n),g=d||k(i),u=ne(Se(s,g),i),c=ae(o,a);Pe[c](o,a,u,n.transforms,!0)}})}function rt(e,t){var r=ae(e.target,t.name);if(r){var n=at(t,e),a=n[n.length-1];return{type:r,property:t.name,animatable:e,tweens:n,duration:a.end,delay:n[0].delay,endDelay:a.endDelay}}}function nt(e,t){return N($(e.map(function(r){return t.map(function(n){return rt(r,n)})})),function(r){return!m.und(r)})}function Ie(e,t){var r=e.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,e.map(function(s){return n(s)+s.duration})):t.duration,a.delay=r?Math.min.apply(Math,e.map(function(s){return n(s)+s.delay})):t.delay,a.endDelay=r?a.duration-Math.max.apply(Math,e.map(function(s){return n(s)+s.duration-s.endDelay})):t.endDelay,a}var ve=0;function it(e){var t=Q(he,e),r=Q(K,e),n=et(r,e),a=Ae(e.targets),s=nt(a,n),o=Ie(s,r),d=ve;return ve++,Y(t,{id:d,children:[],animatables:a,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var A=[],ke=function(){var e;function t(){!e&&(!me()||!b.suspendWhenDocumentHidden)&&A.length>0&&(e=requestAnimationFrame(r))}function r(a){for(var s=A.length,o=0;o<s;){var d=A[o];d.paused?(A.splice(o,1),s--):(d.tick(a),o++)}e=o>0?requestAnimationFrame(r):void 0}function n(){b.suspendWhenDocumentHidden&&(me()?e=cancelAnimationFrame(e):(A.forEach(function(a){return a._onDocumentVisibility()}),ke()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),t}();function me(){return!!document&&document.hidden}function b(e){e===void 0&&(e={});var t=0,r=0,n=0,a,s=0,o=null;function d(h){var f=window.Promise&&new Promise(function(y){return o=y});return h.finished=f,f}var i=it(e);d(i);function g(){var h=i.direction;h!=="alternate"&&(i.direction=h!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(f){return f.reversed=i.reversed})}function u(h){return i.reversed?i.duration-h:h}function c(){t=0,r=u(i.currentTime)*(1/b.speed)}function l(h,f){f&&f.seek(h-f.timelineOffset)}function x(h){if(i.reversePlayback)for(var y=s;y--;)l(h,a[y]);else for(var f=0;f<s;f++)l(h,a[f])}function v(h){for(var f=0,y=i.animations,M=y.length;f<M;){var S=y[f],I=S.animatable,B=S.tweens,O=B.length-1,E=B[O];O&&(E=N(B,function(De){return h<De.end})[0]||E);for(var z=P(h-E.start-E.delay,0,E.duration)/E.duration,H=isNaN(z)?1:E.easing(z),C=E.to.strings,U=E.round,W=[],ze=E.to.numbers.length,D=void 0,q=0;q<ze;q++){var F=void 0,oe=E.to.numbers[q],ce=E.from.numbers[q]||0;E.isPath?F=Ke(E.value,H*oe,E.isPathTargetInsideSVG):F=ce+H*(oe-ce),U&&(E.isColor&&q>2||(F=Math.round(F*U)/U)),W.push(F)}var le=C.length;if(!le)D=W[0];else{D=C[0];for(var j=0;j<le;j++){C[j];var de=C[j+1],_=W[j];isNaN(_)||(de?D+=_+de:D+=_+" ")}}Pe[S.type](I.target,S.property,D,I.transforms),S.currentValue=D,f++}}function p(h){i[h]&&!i.passThrough&&i[h](i)}function w(){i.remaining&&i.remaining!==!0&&i.remaining--}function L(h){var f=i.duration,y=i.delay,M=f-i.endDelay,S=u(h);i.progress=P(S/f*100,0,100),i.reversePlayback=S<i.currentTime,a&&x(S),!i.began&&i.currentTime>0&&(i.began=!0,p("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,p("loopBegin")),S<=y&&i.currentTime!==0&&v(0),(S>=M&&i.currentTime!==f||!f)&&v(f),S>y&&S<M?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,p("changeBegin")),p("change"),v(S)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,p("changeComplete")),i.currentTime=P(S,0,f),i.began&&p("update"),h>=f&&(r=0,w(),i.remaining?(t=n,p("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&g()):(i.paused=!0,i.completed||(i.completed=!0,p("loopComplete"),p("complete"),!i.passThrough&&"Promise"in window&&(o(),d(i)))))}return i.reset=function(){var h=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=h==="reverse",i.remaining=i.loop,a=i.children,s=a.length;for(var f=s;f--;)i.children[f].reset();(i.reversed&&i.loop!==!0||h==="alternate"&&i.loop===1)&&i.remaining++,v(i.reversed?i.duration:0)},i._onDocumentVisibility=c,i.set=function(h,f){return Te(h,f),i},i.tick=function(h){n=h,t||(t=n),L((n+(r-t))*b.speed)},i.seek=function(h){L(u(h))},i.pause=function(){i.paused=!0,c()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,A.push(i),c(),ke())},i.reverse=function(){g(),i.completed=!i.reversed,c()},i.restart=function(){i.reset(),i.play()},i.remove=function(h){var f=se(h);Oe(f,i)},i.reset(),i.autoplay&&i.play(),i}function pe(e,t){for(var r=t.length;r--;)X(e,t[r].animatable.target)&&t.splice(r,1)}function Oe(e,t){var r=t.animations,n=t.children;pe(e,r);for(var a=n.length;a--;){var s=n[a],o=s.animations;pe(e,o),!o.length&&!s.children.length&&n.splice(a,1)}!r.length&&!n.length&&t.pause()}function st(e){for(var t=se(e),r=A.length;r--;){var n=A[r];Oe(t,n)}}function ot(e,t){t===void 0&&(t={});var r=t.direction||"normal",n=t.easing?G(t.easing):null,a=t.grid,s=t.axis,o=t.from||0,d=o==="first",i=o==="center",g=o==="last",u=m.arr(e),c=parseFloat(u?e[0]:e),l=u?parseFloat(e[1]):0,x=k(u?e[1]:e)||0,v=t.start||0+(u?c:0),p=[],w=0;return function(L,h,f){if(d&&(o=0),i&&(o=(f-1)/2),g&&(o=f-1),!p.length){for(var y=0;y<f;y++){if(!a)p.push(Math.abs(o-y));else{var M=i?(a[0]-1)/2:o%a[0],S=i?(a[1]-1)/2:Math.floor(o/a[0]),I=y%a[0],B=Math.floor(y/a[0]),O=M-I,E=S-B,z=Math.sqrt(O*O+E*E);s==="x"&&(z=-O),s==="y"&&(z=-E),p.push(z)}w=Math.max.apply(Math,p)}n&&(p=p.map(function(C){return n(C/w)*w})),r==="reverse"&&(p=p.map(function(C){return s?C<0?C*-1:-C:Math.abs(w-C)}))}var H=u?(l-c)/w:c;return v+H*(Math.round(p[h]*100)/100)+x}}function ct(e){e===void 0&&(e={});var t=b(e);return t.duration=0,t.add=function(r,n){var a=A.indexOf(t),s=t.children;a>-1&&A.splice(a,1);function o(l){l.passThrough=!0}for(var d=0;d<s.length;d++)o(s[d]);var i=Y(r,Q(K,e));i.targets=i.targets||e.targets;var g=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=m.und(n)?g:ne(n,g),o(t),t.seek(i.timelineOffset);var u=b(i);o(u),s.push(u);var c=Ie(s,e);return t.delay=c.delay,t.endDelay=c.endDelay,t.duration=c.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}b.version="3.2.1";b.speed=1;b.suspendWhenDocumentHidden=!0;b.running=A;b.remove=st;b.get=re;b.set=Te;b.convertPx=te;b.path=Je;b.setDashoffset=Ze;b.stagger=ot;b.timeline=ct;b.easing=G;b.penner=be;b.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
  <header class="header">
        <div class="logo">
            <a href="index.html">
              <img src="/SAMA/img/logo.png" alt="Logo">
            </a>

        </div>
        <button class="menu-toggle">
          <span class="hamburger">☰</span>
          <span class="close-icon">X</span>
        </button>
        <nav class="nav" id="mainNav">
            <a href="#" class="active">Inicio</a>
            <a href="#servicios">Producto</a>
            <a href="#">Plan de precios</a>
            <a href="#contacto">Contacto</a>
            <div class="user-icon"><img src="/SAMA/img/user.svg" alt=""></div>
            <a href="#">Entrar</a>
            <button class="btn-empezar">Empezar</button>
        </nav>
    </header>
    <div id="particles-js"></div>
  <div class="hero-wrapper">
    <div class="hero-container">
      <section class="hero">
        <div class="hero-content">
          <h1>SAMA</h1>
          <p class="subtitle">Sistema de Armado y Automatización Médica</p>
          <p class="hero-description">Transformando la gestión médica con tecnología de vanguardia</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Cumplimiento ERP</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Soporte Técnico</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">-60%</span>
              <span class="stat-label">Tiempo de Proceso</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="/SAMA/img/avatar.png" alt="Hero Image">
        </div>
        <button class="demo-button">
        <i class="fas fa-play-circle"></i> Aprende Más
        </button>
        <div class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Video Reprensentativo de SAMA</h3>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">
        <iframe
          src=""
          title="Demo SAMA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      </section>
    </div>
  </div>

  <section id="preproductos" class="preproductos-section">
  <h2>Automatizamos los procesos de:</h2>
  <div class="carousel">
    <div class="carousel-track">
      <div class="carousel-item">
        <i class="fas fa-calculator"></i>
        <h3>Pre-facturación</h3>
      </div>
      <div class="carousel-item">
        <i class="fas fa-search"></i>
        <h3>Auditoría administrativa y concurrente</h3>
      </div>
      <div class="carousel-item">
        <i class="fas fa-file-invoice-dollar"></i>
        <h3>Facturación</h3>
      </div>
      <div class="carousel-item">
        <i class="fas fa-folder"></i>
        <h3>Generación de RIPS</h3>
      </div>
      <div class="carousel-item">
        <i class="fas fa-notes-medical"></i>
        <h3>Armado de cuentas médicas</h3>
      </div>
      <div class="carousel-item">
        <i class="fas fa-check-circle"></i>
        <h3>Radicación digital ante las EAPB</h3>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div class="text-3xl font-bold text-blue-600 mb-2 counter" data-target="95">0</div>
              <div class="text-gray-600">Cumplimiento ERP %</div>
            </div>
            <div class="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div class="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div class="text-gray-600">Soporte Técnico</div>
            </div>
            <div class="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div class="text-3xl font-bold text-blue-600 mb-2 counter" data-target="-40">0</div>
              <div class="text-gray-600">Reducción de Errores %</div>
            </div>
            <div class="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div class="text-3xl font-bold text-blue-600 mb-2 counter" data-target="60">0</div>
              <div class="text-gray-600">Eficiencia Operativa %</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl font-bold text-gray-900">Características Principales</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="features">
            <!-- Features will be inserted here by JavaScript -->
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl font-bold text-gray-900">Proceso de Implementación</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8" id="process">
            <!-- Process steps will be inserted here by JavaScript -->
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl font-bold text-gray-900">Beneficios del Sistema</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits">
            <!-- Benefits will be inserted here by JavaScript -->
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-blue-900 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 class="text-3xl font-bold text-white mb-4">
            ¿Listo para transformar su gestión médica?
          </h2>
          <p class="text-blue-100 mb-8">
            Contáctenos para una demostración personalizada
          </p>
          <button class="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Solicitar Demo
          </button>
        </div>
      </div>

  <div class="container">
    <section id="caracteristicas" class="features">
  <h2 class="section-title">Características Principales</h2>
  <p class="section-subtitle">Soluciones integrales para la gestión médica moderna</p>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon">
        <i class="fas fa-chart-line"></i>
      </div>
      <div class="feature-content">
        <h3>Precisión y Eficiencia</h3>
        <p>Optimización completa del proceso de facturación médica con automatización inteligente.</p>
        <button class="feature-modal-btn" data-feature-modal="feature-modal-1">Ver Más</button>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">
        <i class="fas fa-clock"></i>
      </div>
      <div class="feature-content">
        <h3>Ahorro de Tiempo</h3>
        <p>Minimiza el tiempo dedicado a tareas administrativas y maximiza la productividad.</p>
        <button class="feature-modal-btn" data-feature-modal="feature-modal-2">Ver Más</button>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">
        <i class="fas fa-shield-alt"></i>
      </div>
      <div class="feature-content">
        <h3>Seguridad Avanzada</h3>
        <p>Protección robusta de datos sensibles y cumplimiento normativo.</p>
        <button class="feature-modal-btn" data-feature-modal="feature-modal-3">Ver Más</button>
      </div>
    </div>
  </div>

  <!-- Modales -->
  <div id="feature-modal-1" class="feature-modal-overlay">
    <div class="feature-modal-content">
      <div class="feature-modal-body">
        <div class="feature-modal-left">
          <h3>Precisión y Eficiencia</h3>
          <p>La precisión y eficiencia son clave para optimizar los procesos médicos, reduciendo errores y mejorando la productividad.</p>
        </div>
        <div class="feature-modal-right">
          <img src="img/avatar.png" alt="Precisión y Eficiencia">
        </div>
      </div>
      <button class="close-feature-modal">&times;</button>
    </div>
  </div>

  <div id="feature-modal-2" class="feature-modal-overlay">
    <div class="feature-modal-content">
      <div class="feature-modal-body">
        <div class="feature-modal-left">
          <h3>Ahorro de Tiempo</h3>
          <p>Automatiza tareas repetitivas y reduce el tiempo necesario para completar procesos administrativos.</p>
        </div>
        <div class="feature-modal-right">
          <img src="img/avatar.png" alt="Ahorro de Tiempo">
        </div>
      </div>
      <button class="close-feature-modal">&times;</button>
    </div>
  </div>

  <div id="feature-modal-3" class="feature-modal-overlay">
    <div class="feature-modal-content">
      <div class="feature-modal-body">
        <div class="feature-modal-left">
          <h3>Seguridad Avanzada</h3>
          <p>Protege los datos sensibles con sistemas robustos y asegura el cumplimiento de normativas.</p>
        </div>
        <div class="feature-modal-right">
          <img src="img/avatar.png" alt="Seguridad Avanzada">
        </div>
      </div>
      <button class="close-feature-modal">&times;</button>
    </div>
  </div>
</section>

    <section id="procesos" class="system-features">
      <h2 class="section-title">Sistema Integral</h2>
      <p class="section-subtitle">Una solución completa para su institución médica</p>
      
      <div class="features-container">
        <div class="features-column">
          <h3>Parametrización</h3>
          <div class="feature-list-advanced">
            <div class="feature-item">
              <i class="fas fa-folder-tree"></i>
              <div>
                <h4>Gestión de Soportes</h4>
                <p>Clasificación y creación intuitiva de tipos de soporte</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-users-cog"></i>
              <div>
                <h4>Administración de Contratos</h4>
                <p>Control total sobre contratos y clientes</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-search"></i>
              <div>
                <h4>Búsqueda Inteligente</h4>
                <p>Localización automática de soportes y documentos</p>
              </div>
            </div>
          </div>
        </div>

        <div class="features-column">
          <h3>Automatización</h3>
          <div class="feature-list-advanced">
            <div class="feature-item">
              <i class="fas fa-robot"></i>
              <div>
                <h4>RPA Avanzado</h4>
                <p>Automatización robótica de procesos repetitivos</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-database"></i>
              <div>
                <h4>Integración Total</h4>
                <p>Conexión con múltiples bases de datos y sistemas</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-file-medical"></i>
              <div>
                <h4>Gestión Documental</h4>
                <p>Manejo eficiente de historias clínicas y resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="deployment" class="deployment-section">
      <h2 class="section-title">Implementación Simple</h2>
      <p class="section-subtitle">Proceso rápido y eficiente de despliegue</p>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-rocket"></i>
          </div>
          <div class="timeline-content">
            <h4>Configuración Inicial</h4>
            <p>Implementación y setup del sistema</p>
            <span class="timeline-date">Semana 1</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-cogs"></i>
          </div>
          <div class="timeline-content">
            <h4>Integración</h4>
            <p>Conexión con sistemas existentes</p>
            <span class="timeline-date">Semana 2</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="timeline-content">
            <h4>Capacitación</h4>
            <p>Entrenamiento completo del personal</p>
            <span class="timeline-date">Semana 3</span>
          </div>
        </div>
      </div>
    </section>

    <section id="planes" class="pricing">
      <h2 class="section-title">Planes Flexibles</h2>
      <p class="section-subtitle">Soluciones adaptadas a su presupuesto</p>
      
      <div class="pricing-cards">
        <div class="pricing-card">
          <div class="pricing-header">
            <h3>Plan Básico</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">X</span>
              <span class="period">/doc</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-check"></i> Procesamiento básico de documentos</li>
            <li><i class="fas fa-check"></i> Soporte 8/5</li>
            <li><i class="fas fa-check"></i> Actualizaciones incluidas</li>
          </ul>
          <a href="#contacto" class="pricing-cta">Solicitar Demo</a>
        </div>
        
        <div class="pricing-card featured">
          <div class="pricing-header">
            <h3>Plan Empresarial</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">Y</span>
              <span class="period">/doc</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-check"></i> Procesamiento avanzado</li>
            <li><i class="fas fa-check"></i> Soporte 24/7</li>
            <li><i class="fas fa-check"></i> APIs personalizadas</li>
            <li><i class="fas fa-check"></i> Integraciones ilimitadas</li>
          </ul>
          <a href="#contacto" class="pricing-cta">Contactar Ventas</a>
        </div>
      </div>
    </section>

    <section id="contacto" class="contact-section">
      <h2 class="section-title">¿Listo para Empezar?</h2>
      <p class="section-subtitle">Transforme su gestión médica hoy mismo</p>
      
      <div class="contact-container">
        <div class="contact-form-wrapper">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="company">Empresa</label>
              <input type="text" id="company" name="company" required>
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="submit-btn">
              <span>Enviar Mensaje</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        
        <div class="contact-animation">
          <div class="medical-animation">
            <div class="pulse-circle"></div>
            <i class="fas fa-laptop-medical main-icon"></i>
            <div class="floating-icons">
              <i class="fas fa-file-medical"></i>
              <i class="fas fa-heartbeat"></i>
              <i class="fas fa-pills"></i>
              <i class="fas fa-notes-medical"></i>
              <i class="fas fa-hospital"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-cards">
        <div class="contact-card">
          <i class="fas fa-phone"></i>
          <h4>Llámenos</h4>
          <p>Disponible 24/7 para atenderle</p>
          <a href="tel:+123456789" class="contact-link">Llamar ahora</a>
        </div>
        <div class="contact-card">
          <i class="fas fa-envelope"></i>
          <h4>Escríbanos</h4>
          <p>Respuesta en menos de 24 horas</p>
          <a href="mailto:info@sama.com" class="contact-link">Enviar correo</a>
        </div>
      </div>
    </section>
  </div>
  <footer class="footer" id="contacto">
  <div class="container-footer">
      <div class="footer-grid">
          <div class="footer-about">
              <h3>CloudSystem</h3>
              <p>Optimiza y automatiza los procesos de facturación en tu hospital. Nuestra solución en la nube reduce errores, acelera los cobros y mejora la eficiencia operativa.</p>
              <div class="social-links">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-dribbble"></i></a>
              </div>
          </div>
          
          <div class="footer-links">
              <h3>Enlaces</h3>
              <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#herramientas">Herramientas</a></li>
                  <li><a href="#integraciones">Integraciones</a></li>
                  <li><a href="#licencias">Licencias</a></li>
                  <li><a href="#contacto">Contacto</a></li>
              </ul>
          </div>
          
          <div class="footer-contact">
              <h3>Contacto</h3>
              <p><i class="fas fa-envelope"></i> hola@cloudsystem.com</p>
              <p><i class="fas fa-phone"></i> +57 (555) 123-4567</p>
              <p><i class="fas fa-map-marker-alt"></i> Calle Creativa 123, Ciudad Santa Marta</p>
          </div>
      </div>
      
      <div class="footer-bottom">
          <p>&copy; 2025 CloudSystem. Todos los derechos reservados.</p>
      </div>
  </div>
</footer>
`,document.querySelector(".btn-empezar").addEventListener("click",()=>{window.open("formulario/index.html","_blank")}),document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".menu-toggle"),l=document.querySelector(".nav"),x=document.body;c.addEventListener("click",function(){l.classList.toggle("active"),x.classList.toggle("menu-open"),document.body.style.overflow=l.classList.contains("active")?"hidden":""}),document.querySelectorAll(".nav a, .nav .btn-empezar").forEach(v=>{v.addEventListener("click",()=>{l.classList.remove("active"),x.classList.remove("menu-open"),document.body.style.overflow=""})})});const e=document.querySelector(".modal-overlay"),t=document.querySelector(".demo-button"),r=document.querySelector(".close-modal"),n=document.querySelector(".modal-body iframe");t.addEventListener("click",()=>{n.setAttribute("src","https://www.youtube.com/embed/Z_-xEBg3gjM?autoplay=1"),e.classList.add("show"),document.body.style.overflow="hidden"}),r.addEventListener("click",()=>{e.classList.remove("show"),n.setAttribute("src",""),document.body.style.overflow=""}),e.addEventListener("click",c=>{c.target===e&&(e.classList.remove("show"),n.setAttribute("src",""),document.body.style.overflow="")}),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#0056b3"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#0056b3",opacity:.4,width:1},move:{enable:!0,speed:3}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"}}}}),document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".modal-overlay"),l=document.querySelector(".demo-button"),x=document.querySelector(".close-modal"),v=document.querySelector(".modal-body iframe");l.addEventListener("click",()=>{v.setAttribute("src","https://www.youtube.com/embed/Z_-xEBg3gjM?autoplay=1"),c.classList.add("show"),document.body.style.overflow="hidden"}),x.addEventListener("click",()=>{c.classList.remove("show"),v.setAttribute("src",""),document.body.style.overflow=""}),c.addEventListener("click",p=>{p.target===c&&(c.classList.remove("show"),v.setAttribute("src",""),document.body.style.overflow="")})}),document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".carousel-track"),l=document.querySelectorAll(".carousel-item"),x=l[0].getBoundingClientRect().width;l.forEach(L=>{const h=L.cloneNode(!0);c.appendChild(h)});let v=0;function p(){c.style.transition="transform 0.5s ease-in-out",c.style.transform=`translateX(-${v*x}px)`,v>=l.length&&setTimeout(()=>{c.style.transition="none",v=0,c.style.transform="translateX(0)"},500)}function w(){v++,p()}setInterval(w,3e3),window.addEventListener("resize",()=>{c.style.transition="none",p(),setTimeout(()=>{c.style.transition="transform 0.5s ease-in-out"})})});function a(c){const l=c.getBoundingClientRect();return l.top>=0&&l.left>=0&&l.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&l.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",()=>{const c=document.querySelector(".preProductos h1"),l=document.querySelector(".preProductos p");a(c)&&c.classList.add("fade-in"),a(l)&&l.classList.add("fade-in")});const s=b.timeline({easing:"easeOutExpo",duration:1e3});document.addEventListener("DOMContentLoaded",function(){const c=document.querySelectorAll(".feature-modal-btn"),l=document.querySelectorAll(".feature-modal-overlay"),x=document.querySelectorAll(".close-feature-modal");c.forEach(v=>{v.addEventListener("click",()=>{const p=v.getAttribute("data-feature-modal");document.getElementById(p).classList.add("show")})}),x.forEach(v=>{v.addEventListener("click",()=>{v.closest(".feature-modal-overlay").classList.remove("show")})}),l.forEach(v=>{v.addEventListener("click",p=>{p.target===v&&v.classList.remove("show")})})}),s.add({targets:".navbar",opacity:[0,1],translateY:[-20,0],duration:800}).add({targets:".hero-content h1",opacity:[0,1],translateY:[50,0],duration:800},"-=400").add({targets:".hero-content .subtitle",opacity:[0,1],translateY:[30,0],duration:800},"-=600").add({targets:".hero-content .hero-description",opacity:[0,1],translateY:[20,0],duration:800},"-=600").add({targets:".stat-item",opacity:[0,1],translateY:[20,0],delay:b.stagger(100),duration:800},"-=400").add({targets:".hero-image",opacity:[0,1],translateX:[50,0],duration:800},"-=800").add({targets:".demo-button",opacity:[0,1],translateY:[30,0],duration:800},"-=600");const o={threshold:.2,rootMargin:"50px"},d=new IntersectionObserver(c=>{c.forEach(l=>{l.isIntersecting&&(b({targets:l.target,opacity:[0,1],translateY:[20,0],duration:800,easing:"easeOutExpo"}),d.unobserve(l.target))})},o);document.querySelectorAll(".feature-card, .feature-item, .timeline-item, .pricing-card, .contact-card").forEach(c=>{c.style.opacity="0",d.observe(c)});let i=0;const g=document.querySelector(".navbar");window.addEventListener("scroll",()=>{const c=window.pageYOffset;if(c<=0){g.classList.remove("scroll-up");return}c>i&&!g.classList.contains("scroll-down")?(g.classList.remove("scroll-up"),g.classList.add("scroll-down")):c<i&&g.classList.contains("scroll-down")&&(g.classList.remove("scroll-down"),g.classList.add("scroll-up")),i=c});const u=document.getElementById("contactForm");u==null||u.addEventListener("submit",c=>{c.preventDefault();const l=u.querySelector(".submit-btn"),x=l.innerHTML;l.innerHTML='<i class="fas fa-spinner fa-spin"></i>',l.disabled=!0,setTimeout(()=>{l.innerHTML='<i class="fas fa-check"></i> Mensaje Enviado',l.classList.add("success"),setTimeout(()=>{l.innerHTML=x,l.classList.remove("success"),l.disabled=!1,u.reset()},2e3)},1500)}),b({targets:".floating-icons i",translateY:function(){return b.random(-20,20)},translateX:function(){return b.random(-20,20)},rotate:function(){return b.random(-15,15)},scale:function(){return b.random(.8,1.2)},opacity:function(){return b.random(.6,1)},duration:function(){return b.random(2e3,4e3)},delay:function(){return b.random(0,1e3)},loop:!0,direction:"alternate",easing:"easeInOutQuad"}),b({targets:".pulse-circle",scale:[1,1.5],opacity:[.6,0],easing:"easeOutSine",duration:1e3,loop:!0}),b({targets:".main-icon",translateY:[-10,10],duration:2e3,loop:!0,direction:"alternate",easing:"easeInOutQuad"}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".counter").forEach(f=>{const y=()=>{const M=+f.getAttribute("data-target"),S=+f.innerText,I=M/200;S<M?(f.innerText=Math.ceil(S+I),setTimeout(y,10)):f.innerText=M};y()});const l=[{title:"Gestión Integral",description:"Automatización completa de procesos."},{title:"Interfaz Intuitiva",description:"Fácil de usar para todos los usuarios."},{title:"Seguridad Avanzada",description:"Protección de datos de nivel empresarial."}],x=[{step:"1",description:"Análisis de Requisitos"},{step:"2",description:"Configuración del Sistema"},{step:"3",description:"Capacitación del Personal"},{step:"4",description:"Lanzamiento y Soporte"}],v=[{title:"Ahorro de Tiempo",description:"Optimización de tareas repetitivas."},{title:"Reducción de Costos",description:"Menor gasto en recursos operativos."},{title:"Mejor Toma de Decisiones",description:"Datos en tiempo real para decisiones estratégicas."}],p=document.getElementById("features");l.forEach(f=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md feature-card",y.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${f.title}</h3>
      <p class="text-gray-600">${f.description}</p>
    `,p.appendChild(y)});const w=document.getElementById("process");x.forEach(f=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md process-step",y.innerHTML=`
      <div class="text-3xl font-bold text-blue-600 mb-2">${f.step}</div>
      <p class="text-gray-600">${f.description}</p>
    `,w.appendChild(y)});const L=document.getElementById("benefits");v.forEach(f=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md benefit-card",y.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${f.title}</h3>
      <p class="text-gray-600">${f.description}</p>
    `,L.appendChild(y)});const h=new IntersectionObserver(f=>{f.forEach(y=>{y.isIntersecting&&y.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-fade-in, .feature-card, .process-step, .benefit-card").forEach(f=>{h.observe(f)})})});
