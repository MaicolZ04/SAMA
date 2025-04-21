(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var xe={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ee={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},He=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],$={CSS:{},springs:{}};function P(e,t,n){return Math.min(Math.max(e,t),n)}function R(e,t){return e.indexOf(t)>-1}function J(e,t){return e.apply(null,t)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return R(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return d.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!xe.hasOwnProperty(e)&&!ee.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function we(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function Ee(e,t){var n=we(e),r=P(d.und(n[0])?1:n[0],.1,100),a=P(d.und(n[1])?100:n[1],.1,100),s=P(d.und(n[2])?10:n[2],.1,100),o=P(d.und(n[3])?0:n[3],.1,100),c=Math.sqrt(a/r),i=s/(2*Math.sqrt(a*r)),u=i<1?c*Math.sqrt(1-i*i):0,l=1,f=i<1?(i*c+-o)/u:-o+c;function h(g){var v=t?t*g/1e3:g;return i<1?v=Math.exp(-v*i*c)*(l*Math.cos(u*v)+f*Math.sin(u*v)):v=(l+f*v)*Math.exp(-v*c),g===0||g===1?g:1-v}function L(){var g=$.springs[e];if(g)return g;for(var v=1/6,b=0,w=0;;)if(b+=v,h(b)===1){if(w++,w>=16)break}else w=0;var p=b*v*1e3;return $.springs[e]=p,p}return t?h:L}function Re(e){return e===void 0&&(e=10),function(t){return Math.ceil(P(t,1e-6,1)*e)*(1/e)}}var Ne=function(){var e=11,t=1/(e-1);function n(l,f){return 1-3*f+3*l}function r(l,f){return 3*f-6*l}function a(l){return 3*l}function s(l,f,h){return((n(f,h)*l+r(f,h))*l+a(f))*l}function o(l,f,h){return 3*n(f,h)*l*l+2*r(f,h)*l+a(f)}function c(l,f,h,L,g){var v,b,w=0;do b=f+(h-f)/2,v=s(b,L,g)-l,v>0?h=b:f=b;while(Math.abs(v)>1e-7&&++w<10);return b}function i(l,f,h,L){for(var g=0;g<4;++g){var v=o(f,h,L);if(v===0)return f;var b=s(f,h,L)-l;f-=b/v}return f}function u(l,f,h,L){if(!(0<=l&&l<=1&&0<=h&&h<=1))return;var g=new Float32Array(e);if(l!==f||h!==L)for(var v=0;v<e;++v)g[v]=s(v*t,l,h);function b(w){for(var p=0,m=1,S=e-1;m!==S&&g[m]<=w;++m)p+=t;--m;var A=(w-g[m])/(g[m+1]-g[m]),x=p+A*t,k=o(x,l,h);return k>=.001?i(w,x,l,h):k===0?x:c(w,p,p+t,l,h)}return function(w){return l===f&&h===L||w===0||w===1?w:s(b(w),f,L)}}return u}(),Le=function(){var e={linear:function(){return function(r){return r}}},t={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Expo:function(){return function(r){return r?Math.pow(2,10*r-10):0}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var a,s=4;r<((a=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((a*3-2)/22-r,2)}},Elastic:function(r,a){r===void 0&&(r=1),a===void 0&&(a=.5);var s=P(r,1,10),o=P(a,.1,2);return function(c){return c===0||c===1?c:-s*Math.pow(2,10*(c-1))*Math.sin((c-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(r,a){t[r]=function(){return function(s){return Math.pow(s,a+2)}}}),Object.keys(t).forEach(function(r){var a=t[r];e["easeIn"+r]=a,e["easeOut"+r]=function(s,o){return function(c){return 1-a(s,o)(1-c)}},e["easeInOut"+r]=function(s,o){return function(c){return c<.5?a(s,o)(c*2)/2:1-a(s,o)(c*-2+2)/2}},e["easeOutIn"+r]=function(s,o){return function(c){return c<.5?(1-a(s,o)(1-c*2))/2:(a(s,o)(c*2-1)+1)/2}}}),e}();function te(e,t){if(d.fnc(e))return e;var n=e.split("(")[0],r=Le[n],a=we(e);switch(n){case"spring":return Ee(e,t);case"cubicBezier":return J(Ne,a);case"steps":return J(Re,a);default:return J(r,a)}}function Se(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Y(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],s=0;s<n;s++)if(s in e){var o=e[s];t.call(r,o,s,e)&&a.push(o)}return a}function U(e){return e.reduce(function(t,n){return t.concat(d.arr(n)?U(n):n)},[])}function me(e){return d.arr(e)?e:(d.str(e)&&(e=Se(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ae(e,t){return e.some(function(n){return n===t})}function re(e){var t={};for(var n in e)t[n]=e[n];return t}function G(e,t){var n=re(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function W(e,t){var n=re(e);for(var r in t)n[r]=d.und(e[r])?t[r]:e[r];return n}function $e(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Ye(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(c,i,u,l){return i+i+u+u+l+l}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(r[1],16),s=parseInt(r[2],16),o=parseInt(r[3],16);return"rgba("+a+","+s+","+o+",1)"}function Ue(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,r=parseInt(t[2],10)/100,a=parseInt(t[3],10)/100,s=t[4]||1;function o(h,L,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?h+(L-h)*6*g:g<1/2?L:g<2/3?h+(L-h)*(2/3-g)*6:h}var c,i,u;if(r==0)c=i=u=a;else{var l=a<.5?a*(1+r):a+r-a*r,f=2*a-l;c=o(f,l,n+1/3),i=o(f,l,n),u=o(f,l,n-1/3)}return"rgba("+c*255+","+i*255+","+u*255+","+s+")"}function We(e){if(d.rgb(e))return $e(e);if(d.hex(e))return Ye(e);if(d.hsl(e))return Ue(e)}function I(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function _e(e){if(R(e,"translate")||e==="perspective")return"px";if(R(e,"rotate")||R(e,"skew"))return"deg"}function X(e,t){return d.fnc(e)?e(t.target,t.id,t.total):e}function T(e,t){return e.getAttribute(t)}function ne(e,t,n){var r=I(t);if(ae([n,"deg","rad","turn"],r))return t;var a=$.CSS[t+n];if(!d.und(a))return a;var s=100,o=document.createElement(e.tagName),c=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;c.appendChild(o),o.style.position="absolute",o.style.width=s+n;var i=s/o.offsetWidth;c.removeChild(o);var u=i*parseFloat(t);return $.CSS[t+n]=u,u}function Me(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?ne(e,a,n):a}}function ie(e,t){if(d.dom(e)&&!d.inp(e)&&(!d.nil(T(e,t))||d.svg(e)&&e[t]))return"attribute";if(d.dom(e)&&ae(He,t))return"transform";if(d.dom(e)&&t!=="transform"&&Me(e,t))return"css";if(e[t]!=null)return"object"}function Ce(e){if(d.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,r=new Map,a;a=n.exec(t);)r.set(a[1],a[2]);return r}}function Qe(e,t,n,r){var a=R(t,"scale")?1:0+_e(t),s=Ce(e).get(t)||a;return n&&(n.transforms.list.set(t,s),n.transforms.last=t),r?ne(e,s,r):s}function se(e,t,n,r){switch(ie(e,t)){case"transform":return Qe(e,t,r,n);case"css":return Me(e,t,n);case"attribute":return T(e,t);default:return e[t]||0}}function oe(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=I(e)||0,a=parseFloat(t),s=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+s+r;case"-":return a-s+r;case"*":return a*s+r}}function Pe(e,t){if(d.col(e))return We(e);if(/\s/g.test(e))return e;var n=I(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function ce(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ze(e){return Math.PI*2*T(e,"r")}function Je(e){return T(e,"width")*2+T(e,"height")*2}function Ke(e){return ce({x:T(e,"x1"),y:T(e,"y1")},{x:T(e,"x2"),y:T(e,"y2")})}function Te(e){for(var t=e.points,n=0,r,a=0;a<t.numberOfItems;a++){var s=t.getItem(a);a>0&&(n+=ce(r,s)),r=s}return n}function Ge(e){var t=e.points;return Te(e)+ce(t.getItem(t.numberOfItems-1),t.getItem(0))}function Ie(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ze(e);case"rect":return Je(e);case"line":return Ke(e);case"polyline":return Te(e);case"polygon":return Ge(e)}}function Xe(e){var t=Ie(e);return e.setAttribute("stroke-dasharray",t),t}function et(e){for(var t=e.parentNode;d.svg(t)&&d.svg(t.parentNode);)t=t.parentNode;return t}function Ae(e,t){var n=t||{},r=n.el||et(e),a=r.getBoundingClientRect(),s=T(r,"viewBox"),o=a.width,c=a.height,i=n.viewBox||(s?s.split(" "):[0,0,o,c]);return{el:r,viewBox:i,x:i[0]/1,y:i[1]/1,w:o,h:c,vW:i[2],vH:i[3]}}function tt(e,t){var n=d.str(e)?Se(e)[0]:e,r=t||100;return function(a){return{property:a,el:n,svg:Ae(n),totalLength:Ie(n)*(r/100)}}}function at(e,t,n){function r(l){l===void 0&&(l=0);var f=t+l>=1?t+l:0;return e.el.getPointAtLength(f)}var a=Ae(e.el,e.svg),s=r(),o=r(-1),c=r(1),i=n?1:a.w/a.vW,u=n?1:a.h/a.vH;switch(e.property){case"x":return(s.x-a.x)*i;case"y":return(s.y-a.y)*u;case"angle":return Math.atan2(c.y-o.y,c.x-o.x)*180/Math.PI}}function pe(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Pe(d.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:d.str(e)||t?r.split(n):[]}}function le(e){var t=e?U(d.arr(e)?e.map(me):me(e)):[];return Y(t,function(n,r,a){return a.indexOf(n)===r})}function ke(e){var t=le(e);return t.map(function(n,r){return{target:n,id:r,total:t.length,transforms:{list:Ce(n)}}})}function rt(e,t){var n=re(t);if(/^spring/.test(n.easing)&&(n.duration=Ee(n.easing)),d.arr(e)){var r=e.length,a=r===2&&!d.obj(e[0]);a?e={value:e}:d.fnc(t.duration)||(n.duration=t.duration/r)}var s=d.arr(e)?e:[e];return s.map(function(o,c){var i=d.obj(o)&&!d.pth(o)?o:{value:o};return d.und(i.delay)&&(i.delay=c?0:t.delay),d.und(i.endDelay)&&(i.endDelay=c===s.length-1?t.endDelay:0),i}).map(function(o){return W(o,n)})}function nt(e){for(var t=Y(U(e.map(function(s){return Object.keys(s)})),function(s){return d.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),n={},r=function(s){var o=t[s];n[o]=e.map(function(c){var i={};for(var u in c)d.key(u)?u==o&&(i.value=c[u]):i[u]=c[u];return i})},a=0;a<t.length;a++)r(a);return n}function it(e,t){var n=[],r=t.keyframes;r&&(t=W(nt(r),t));for(var a in t)d.key(a)&&n.push({name:a,tweens:rt(t[a],e)});return n}function st(e,t){var n={};for(var r in e){var a=X(e[r],t);d.arr(a)&&(a=a.map(function(s){return X(s,t)}),a.length===1&&(a=a[0])),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ot(e,t){var n;return e.tweens.map(function(r){var a=st(r,t),s=a.value,o=d.arr(s)?s[1]:s,c=I(o),i=se(t.target,e.name,c,t),u=n?n.to.original:i,l=d.arr(s)?s[0]:u,f=I(l)||I(i),h=c||f;return d.und(o)&&(o=u),a.from=pe(l,h),a.to=pe(oe(o,l),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=te(a.easing,a.duration),a.isPath=d.pth(s),a.isPathTargetInsideSVG=a.isPath&&d.svg(t.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),n=a,a})}var Oe={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var s="";r.list.forEach(function(o,c){s+=c+"("+o+") "}),e.style.transform=s}}};function ze(e,t){var n=ke(e);n.forEach(function(r){for(var a in t){var s=X(t[a],r),o=r.target,c=I(s),i=se(o,a,c,r),u=c||I(i),l=oe(Pe(s,u),i),f=ie(o,a);Oe[f](o,a,l,r.transforms,!0)}})}function ct(e,t){var n=ie(e.target,t.name);if(n){var r=ot(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function lt(e,t){return Y(U(e.map(function(n){return t.map(function(r){return ct(n,r)})})),function(n){return!d.und(n)})}function De(e,t){var n=e.length,r=function(s){return s.timelineOffset?s.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map(function(s){return r(s)+s.duration})):t.duration,a.delay=n?Math.min.apply(Math,e.map(function(s){return r(s)+s.delay})):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map(function(s){return r(s)+s.duration-s.endDelay})):t.endDelay,a}var he=0;function dt(e){var t=G(xe,e),n=G(ee,e),r=it(n,e),a=ke(e.targets),s=lt(a,r),o=De(s,n),c=he;return he++,W(t,{id:c,children:[],animatables:a,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var C=[],Be=function(){var e;function t(){!e&&(!ge()||!y.suspendWhenDocumentHidden)&&C.length>0&&(e=requestAnimationFrame(n))}function n(a){for(var s=C.length,o=0;o<s;){var c=C[o];c.paused?(C.splice(o,1),s--):(c.tick(a),o++)}e=o>0?requestAnimationFrame(n):void 0}function r(){y.suspendWhenDocumentHidden&&(ge()?e=cancelAnimationFrame(e):(C.forEach(function(a){return a._onDocumentVisibility()}),Be()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),t}();function ge(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var t=0,n=0,r=0,a,s=0,o=null;function c(p){var m=window.Promise&&new Promise(function(S){return o=S});return p.finished=m,m}var i=dt(e);c(i);function u(){var p=i.direction;p!=="alternate"&&(i.direction=p!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(m){return m.reversed=i.reversed})}function l(p){return i.reversed?i.duration-p:p}function f(){t=0,n=l(i.currentTime)*(1/y.speed)}function h(p,m){m&&m.seek(p-m.timelineOffset)}function L(p){if(i.reversePlayback)for(var S=s;S--;)h(p,a[S]);else for(var m=0;m<s;m++)h(p,a[m])}function g(p){for(var m=0,S=i.animations,A=S.length;m<A;){var x=S[m],k=x.animatable,q=x.tweens,z=q.length-1,E=q[z];z&&(E=Y(q,function(je){return p<je.end})[0]||E);for(var D=P(p-E.start-E.delay,0,E.duration)/E.duration,N=isNaN(D)?1:E.easing(D),M=E.to.strings,_=E.round,Q=[],Ve=E.to.numbers.length,B=void 0,F=0;F<Ve;F++){var V=void 0,de=E.to.numbers[F],ue=E.from.numbers[F]||0;E.isPath?V=at(E.value,N*de,E.isPathTargetInsideSVG):V=ue+N*(de-ue),_&&(E.isColor&&F>2||(V=Math.round(V*_)/_)),Q.push(V)}var fe=M.length;if(!fe)B=Q[0];else{B=M[0];for(var j=0;j<fe;j++){M[j];var ve=M[j+1],Z=Q[j];isNaN(Z)||(ve?B+=Z+ve:B+=Z+" ")}}Oe[x.type](k.target,x.property,B,k.transforms),x.currentValue=B,m++}}function v(p){i[p]&&!i.passThrough&&i[p](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function w(p){var m=i.duration,S=i.delay,A=m-i.endDelay,x=l(p);i.progress=P(x/m*100,0,100),i.reversePlayback=x<i.currentTime,a&&L(x),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),x<=S&&i.currentTime!==0&&g(0),(x>=A&&i.currentTime!==m||!m)&&g(m),x>S&&x<A?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),g(x)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=P(x,0,m),i.began&&v("update"),p>=m&&(n=0,b(),i.remaining?(t=r,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&u()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(o(),c(i)))))}return i.reset=function(){var p=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=p==="reverse",i.remaining=i.loop,a=i.children,s=a.length;for(var m=s;m--;)i.children[m].reset();(i.reversed&&i.loop!==!0||p==="alternate"&&i.loop===1)&&i.remaining++,g(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(p,m){return ze(p,m),i},i.tick=function(p){r=p,t||(t=r),w((r+(n-t))*y.speed)},i.seek=function(p){w(l(p))},i.pause=function(){i.paused=!0,f()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,C.push(i),f(),Be())},i.reverse=function(){u(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(p){var m=le(p);qe(m,i)},i.reset(),i.autoplay&&i.play(),i}function ye(e,t){for(var n=t.length;n--;)ae(e,t[n].animatable.target)&&t.splice(n,1)}function qe(e,t){var n=t.animations,r=t.children;ye(e,n);for(var a=r.length;a--;){var s=r[a],o=s.animations;ye(e,o),!o.length&&!s.children.length&&r.splice(a,1)}!n.length&&!r.length&&t.pause()}function ut(e){for(var t=le(e),n=C.length;n--;){var r=C[n];qe(t,r)}}function ft(e,t){t===void 0&&(t={});var n=t.direction||"normal",r=t.easing?te(t.easing):null,a=t.grid,s=t.axis,o=t.from||0,c=o==="first",i=o==="center",u=o==="last",l=d.arr(e),f=parseFloat(l?e[0]:e),h=l?parseFloat(e[1]):0,L=I(l?e[1]:e)||0,g=t.start||0+(l?f:0),v=[],b=0;return function(w,p,m){if(c&&(o=0),i&&(o=(m-1)/2),u&&(o=m-1),!v.length){for(var S=0;S<m;S++){if(!a)v.push(Math.abs(o-S));else{var A=i?(a[0]-1)/2:o%a[0],x=i?(a[1]-1)/2:Math.floor(o/a[0]),k=S%a[0],q=Math.floor(S/a[0]),z=A-k,E=x-q,D=Math.sqrt(z*z+E*E);s==="x"&&(D=-z),s==="y"&&(D=-E),v.push(D)}b=Math.max.apply(Math,v)}r&&(v=v.map(function(M){return r(M/b)*b})),n==="reverse"&&(v=v.map(function(M){return s?M<0?M*-1:-M:Math.abs(b-M)}))}var N=l?(h-f)/b:f;return g+N*(Math.round(v[p]*100)/100)+L}}function vt(e){e===void 0&&(e={});var t=y(e);return t.duration=0,t.add=function(n,r){var a=C.indexOf(t),s=t.children;a>-1&&C.splice(a,1);function o(h){h.passThrough=!0}for(var c=0;c<s.length;c++)o(s[c]);var i=W(n,G(ee,e));i.targets=i.targets||e.targets;var u=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=d.und(r)?u:oe(r,u),o(t),t.seek(i.timelineOffset);var l=y(i);o(l),s.push(l);var f=De(s,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=C;y.remove=ut;y.get=se;y.set=ze;y.convertPx=ne;y.path=tt;y.setDashoffset=Xe;y.stagger=ft;y.timeline=vt;y.easing=te;y.penner=Le;y.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};document.querySelector("#app").innerHTML=`
  <header class="header">
        <div class="logo">
            <a href="index.html"><img src="img/logo.png" alt="Logo"></a>

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
            <div class="user-icon"><img src="img/user.svg" alt=""></div>
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
          <img src="img/avatar.png" alt="Hero Image">
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
`;document.querySelector(".btn-empezar").addEventListener("click",()=>{window.open("formulario/index.html","_blank")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-toggle"),t=document.querySelector(".nav"),n=document.body;e.addEventListener("click",function(){t.classList.toggle("active"),n.classList.toggle("menu-open"),document.body.style.overflow=t.classList.contains("active")?"hidden":""}),document.querySelectorAll(".nav a, .nav .btn-empezar").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("active"),n.classList.remove("menu-open"),document.body.style.overflow=""})})});particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#0056b3"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#0056b3",opacity:.4,width:1},move:{enable:!0,speed:3}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"}}}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-overlay"),t=document.querySelector(".demo-button"),n=document.querySelector(".close-modal"),r=document.querySelector(".modal-body iframe");t.addEventListener("click",()=>{r.setAttribute("src","https://www.youtube.com/embed/Z_-xEBg3gjM?autoplay=1"),e.classList.add("show"),document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{e.classList.remove("show"),r.setAttribute("src",""),document.body.style.overflow=""}),e.addEventListener("click",a=>{a.target===e&&(e.classList.remove("show"),r.setAttribute("src",""),document.body.style.overflow="")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".carousel-track"),t=document.querySelectorAll(".carousel-item"),n=t[0].getBoundingClientRect().width;t.forEach(o=>{const c=o.cloneNode(!0);e.appendChild(c)});let r=0;function a(){e.style.transition="transform 0.5s ease-in-out",e.style.transform=`translateX(-${r*n}px)`,r>=t.length&&setTimeout(()=>{e.style.transition="none",r=0,e.style.transform="translateX(0)"},500)}function s(){r++,a()}setInterval(s,3e3),window.addEventListener("resize",()=>{e.style.transition="none",a(),setTimeout(()=>{e.style.transition="transform 0.5s ease-in-out"})})});function be(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",()=>{const e=document.querySelector(".preProductos h1"),t=document.querySelector(".preProductos p");be(e)&&e.classList.add("fade-in"),be(t)&&t.classList.add("fade-in")});const mt=y.timeline({easing:"easeOutExpo",duration:1e3});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".feature-modal-btn"),t=document.querySelectorAll(".feature-modal-overlay"),n=document.querySelectorAll(".close-feature-modal");e.forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-feature-modal");document.getElementById(a).classList.add("show")})}),n.forEach(r=>{r.addEventListener("click",()=>{r.closest(".feature-modal-overlay").classList.remove("show")})}),t.forEach(r=>{r.addEventListener("click",a=>{a.target===r&&r.classList.remove("show")})})});mt.add({targets:".navbar",opacity:[0,1],translateY:[-20,0],duration:800}).add({targets:".hero-content h1",opacity:[0,1],translateY:[50,0],duration:800},"-=400").add({targets:".hero-content .subtitle",opacity:[0,1],translateY:[30,0],duration:800},"-=600").add({targets:".hero-content .hero-description",opacity:[0,1],translateY:[20,0],duration:800},"-=600").add({targets:".stat-item",opacity:[0,1],translateY:[20,0],delay:y.stagger(100),duration:800},"-=400").add({targets:".hero-image",opacity:[0,1],translateX:[50,0],duration:800},"-=800").add({targets:".demo-button",opacity:[0,1],translateY:[30,0],duration:800},"-=600");const pt={threshold:.2,rootMargin:"50px"},Fe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(y({targets:t.target,opacity:[0,1],translateY:[20,0],duration:800,easing:"easeOutExpo"}),Fe.unobserve(t.target))})},pt);document.querySelectorAll(".feature-card, .feature-item, .timeline-item, .pricing-card, .contact-card").forEach(e=>{e.style.opacity="0",Fe.observe(e)});let K=0;const O=document.querySelector(".navbar");window.addEventListener("scroll",()=>{const e=window.pageYOffset;if(e<=0){O.classList.remove("scroll-up");return}e>K&&!O.classList.contains("scroll-down")?(O.classList.remove("scroll-up"),O.classList.add("scroll-down")):e<K&&O.classList.contains("scroll-down")&&(O.classList.remove("scroll-down"),O.classList.add("scroll-up")),K=e});const H=document.getElementById("contactForm");H==null||H.addEventListener("submit",e=>{e.preventDefault();const t=H.querySelector(".submit-btn"),n=t.innerHTML;t.innerHTML='<i class="fas fa-spinner fa-spin"></i>',t.disabled=!0,setTimeout(()=>{t.innerHTML='<i class="fas fa-check"></i> Mensaje Enviado',t.classList.add("success"),setTimeout(()=>{t.innerHTML=n,t.classList.remove("success"),t.disabled=!1,H.reset()},2e3)},1500)});y({targets:".floating-icons i",translateY:function(){return y.random(-20,20)},translateX:function(){return y.random(-20,20)},rotate:function(){return y.random(-15,15)},scale:function(){return y.random(.8,1.2)},opacity:function(){return y.random(.6,1)},duration:function(){return y.random(2e3,4e3)},delay:function(){return y.random(0,1e3)},loop:!0,direction:"alternate",easing:"easeInOutQuad"});y({targets:".pulse-circle",scale:[1,1.5],opacity:[.6,0],easing:"easeOutSine",duration:1e3,loop:!0});y({targets:".main-icon",translateY:[-10,10],duration:2e3,loop:!0,direction:"alternate",easing:"easeInOutQuad"});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".counter").forEach(i=>{const u=()=>{const l=+i.getAttribute("data-target"),f=+i.innerText,h=l/200;f<l?(i.innerText=Math.ceil(f+h),setTimeout(u,10)):i.innerText=l};u()});const t=[{title:"Gestión Integral",description:"Automatización completa de procesos."},{title:"Interfaz Intuitiva",description:"Fácil de usar para todos los usuarios."},{title:"Seguridad Avanzada",description:"Protección de datos de nivel empresarial."}],n=[{step:"1",description:"Análisis de Requisitos"},{step:"2",description:"Configuración del Sistema"},{step:"3",description:"Capacitación del Personal"},{step:"4",description:"Lanzamiento y Soporte"}],r=[{title:"Ahorro de Tiempo",description:"Optimización de tareas repetitivas."},{title:"Reducción de Costos",description:"Menor gasto en recursos operativos."},{title:"Mejor Toma de Decisiones",description:"Datos en tiempo real para decisiones estratégicas."}],a=document.getElementById("features");t.forEach(i=>{const u=document.createElement("div");u.className="text-center p-6 bg-white rounded-lg shadow-md feature-card",u.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${i.title}</h3>
      <p class="text-gray-600">${i.description}</p>
    `,a.appendChild(u)});const s=document.getElementById("process");n.forEach(i=>{const u=document.createElement("div");u.className="text-center p-6 bg-white rounded-lg shadow-md process-step",u.innerHTML=`
      <div class="text-3xl font-bold text-blue-600 mb-2">${i.step}</div>
      <p class="text-gray-600">${i.description}</p>
    `,s.appendChild(u)});const o=document.getElementById("benefits");r.forEach(i=>{const u=document.createElement("div");u.className="text-center p-6 bg-white rounded-lg shadow-md benefit-card",u.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${i.title}</h3>
      <p class="text-gray-600">${i.description}</p>
    `,o.appendChild(u)});const c=new IntersectionObserver(i=>{i.forEach(u=>{u.isIntersecting&&u.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-fade-in, .feature-card, .process-step, .benefit-card").forEach(i=>{c.observe(i)})});
