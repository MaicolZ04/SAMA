(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var he={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},K={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Be=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],R={CSS:{},springs:{}};function P(e,t,n){return Math.min(Math.max(e,t),n)}function j(e,t){return e.indexOf(t)>-1}function Q(e,t){return e.apply(null,t)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return j(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!he.hasOwnProperty(e)&&!K.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function ge(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function ye(e,t){var n=ge(e),i=P(f.und(n[0])?1:n[0],.1,100),r=P(f.und(n[1])?100:n[1],.1,100),s=P(f.und(n[2])?10:n[2],.1,100),c=P(f.und(n[3])?0:n[3],.1,100),o=Math.sqrt(r/i),a=s/(2*Math.sqrt(r*i)),v=a<1?o*Math.sqrt(1-a*a):0,l=1,d=a<1?(a*o+-c)/v:-c+o;function h(g){var u=t?t*g/1e3:g;return a<1?u=Math.exp(-u*a*o)*(l*Math.cos(v*u)+d*Math.sin(v*u)):u=(l+d*u)*Math.exp(-u*o),g===0||g===1?g:1-u}function w(){var g=R.springs[e];if(g)return g;for(var u=1/6,y=0,x=0;;)if(y+=u,h(y)===1){if(x++,x>=16)break}else x=0;var m=y*u*1e3;return R.springs[e]=m,m}return t?h:w}function qe(e){return e===void 0&&(e=10),function(t){return Math.ceil(P(t,1e-6,1)*e)*(1/e)}}var Fe=function(){var e=11,t=1/(e-1);function n(l,d){return 1-3*d+3*l}function i(l,d){return 3*d-6*l}function r(l){return 3*l}function s(l,d,h){return((n(d,h)*l+i(d,h))*l+r(d))*l}function c(l,d,h){return 3*n(d,h)*l*l+2*i(d,h)*l+r(d)}function o(l,d,h,w,g){var u,y,x=0;do y=d+(h-d)/2,u=s(y,w,g)-l,u>0?h=y:d=y;while(Math.abs(u)>1e-7&&++x<10);return y}function a(l,d,h,w){for(var g=0;g<4;++g){var u=c(d,h,w);if(u===0)return d;var y=s(d,h,w)-l;d-=y/u}return d}function v(l,d,h,w){if(!(0<=l&&l<=1&&0<=h&&h<=1))return;var g=new Float32Array(e);if(l!==d||h!==w)for(var u=0;u<e;++u)g[u]=s(u*t,l,h);function y(x){for(var m=0,p=1,S=e-1;p!==S&&g[p]<=x;++p)m+=t;--p;var A=(x-g[p])/(g[p+1]-g[p]),L=m+A*t,k=c(L,l,h);return k>=.001?a(x,L,l,h):k===0?L:o(x,m,m+t,l,h)}return function(x){return l===d&&h===w||x===0||x===1?x:s(y(x),d,w)}}return v}(),be=function(){var e={linear:function(){return function(i){return i}}},t={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Expo:function(){return function(i){return i?Math.pow(2,10*i-10):0}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,s=4;i<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var s=P(i,1,10),c=P(r,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-c/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/c)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(i,r){t[i]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(t).forEach(function(i){var r=t[i];e["easeIn"+i]=r,e["easeOut"+i]=function(s,c){return function(o){return 1-r(s,c)(1-o)}},e["easeInOut"+i]=function(s,c){return function(o){return o<.5?r(s,c)(o*2)/2:1-r(s,c)(o*-2+2)/2}},e["easeOutIn"+i]=function(s,c){return function(o){return o<.5?(1-r(s,c)(1-o*2))/2:(r(s,c)(o*2-1)+1)/2}}}),e}();function G(e,t){if(f.fnc(e))return e;var n=e.split("(")[0],i=be[n],r=ge(e);switch(n){case"spring":return ye(e,t);case"cubicBezier":return Q(Fe,r);case"steps":return Q(qe,r);default:return Q(i,r)}}function xe(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function N(e,t){for(var n=e.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<n;s++)if(s in e){var c=e[s];t.call(i,c,s,e)&&r.push(c)}return r}function $(e){return e.reduce(function(t,n){return t.concat(f.arr(n)?$(n):n)},[])}function ue(e){return f.arr(e)?e:(f.str(e)&&(e=xe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function X(e,t){return e.some(function(n){return n===t})}function ee(e){var t={};for(var n in e)t[n]=e[n];return t}function Z(e,t){var n=ee(e);for(var i in e)n[i]=t.hasOwnProperty(i)?t[i]:e[i];return n}function Y(e,t){var n=ee(e);for(var i in t)n[i]=f.und(e[i])?t[i]:e[i];return n}function Ve(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function je(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(o,a,v,l){return a+a+v+v+l+l}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(i[1],16),s=parseInt(i[2],16),c=parseInt(i[3],16);return"rgba("+r+","+s+","+c+",1)"}function He(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,s=t[4]||1;function c(h,w,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?h+(w-h)*6*g:g<1/2?w:g<2/3?h+(w-h)*(2/3-g)*6:h}var o,a,v;if(i==0)o=a=v=r;else{var l=r<.5?r*(1+i):r+i-r*i,d=2*r-l;o=c(d,l,n+1/3),a=c(d,l,n),v=c(d,l,n-1/3)}return"rgba("+o*255+","+a*255+","+v*255+","+s+")"}function Re(e){if(f.rgb(e))return Ve(e);if(f.hex(e))return je(e);if(f.hsl(e))return He(e)}function I(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Ne(e){if(j(e,"translate")||e==="perspective")return"px";if(j(e,"rotate")||j(e,"skew"))return"deg"}function J(e,t){return f.fnc(e)?e(t.target,t.id,t.total):e}function T(e,t){return e.getAttribute(t)}function te(e,t,n){var i=I(t);if(X([n,"deg","rad","turn"],i))return t;var r=R.CSS[t+n];if(!f.und(r))return r;var s=100,c=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(c),c.style.position="absolute",c.style.width=s+n;var a=s/c.offsetWidth;o.removeChild(c);var v=a*parseFloat(t);return R.CSS[t+n]=v,v}function we(e,t,n){if(t in e.style){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(i)||"0";return n?te(e,r,n):r}}function ae(e,t){if(f.dom(e)&&!f.inp(e)&&(!f.nil(T(e,t))||f.svg(e)&&e[t]))return"attribute";if(f.dom(e)&&X(Be,t))return"transform";if(f.dom(e)&&t!=="transform"&&we(e,t))return"css";if(e[t]!=null)return"object"}function Le(e){if(f.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=n.exec(t);)i.set(r[1],r[2]);return i}}function $e(e,t,n,i){var r=j(t,"scale")?1:0+Ne(t),s=Le(e).get(t)||r;return n&&(n.transforms.list.set(t,s),n.transforms.last=t),i?te(e,s,i):s}function re(e,t,n,i){switch(ae(e,t)){case"transform":return $e(e,t,i,n);case"css":return we(e,t,n);case"attribute":return T(e,t);default:return e[t]||0}}function ne(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=I(e)||0,r=parseFloat(t),s=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function Ee(e,t){if(f.col(e))return Re(e);if(/\s/g.test(e))return e;var n=I(e),i=n?e.substr(0,e.length-n.length):e;return t?i+t:i}function ie(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ye(e){return Math.PI*2*T(e,"r")}function Ue(e){return T(e,"width")*2+T(e,"height")*2}function We(e){return ie({x:T(e,"x1"),y:T(e,"y1")},{x:T(e,"x2"),y:T(e,"y2")})}function Se(e){for(var t=e.points,n=0,i,r=0;r<t.numberOfItems;r++){var s=t.getItem(r);r>0&&(n+=ie(i,s)),i=s}return n}function _e(e){var t=e.points;return Se(e)+ie(t.getItem(t.numberOfItems-1),t.getItem(0))}function Me(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ye(e);case"rect":return Ue(e);case"line":return We(e);case"polyline":return Se(e);case"polygon":return _e(e)}}function Qe(e){var t=Me(e);return e.setAttribute("stroke-dasharray",t),t}function Ze(e){for(var t=e.parentNode;f.svg(t)&&f.svg(t.parentNode);)t=t.parentNode;return t}function Ce(e,t){var n=t||{},i=n.el||Ze(e),r=i.getBoundingClientRect(),s=T(i,"viewBox"),c=r.width,o=r.height,a=n.viewBox||(s?s.split(" "):[0,0,c,o]);return{el:i,viewBox:a,x:a[0]/1,y:a[1]/1,w:c,h:o,vW:a[2],vH:a[3]}}function Je(e,t){var n=f.str(e)?xe(e)[0]:e,i=t||100;return function(r){return{property:r,el:n,svg:Ce(n),totalLength:Me(n)*(i/100)}}}function Ke(e,t,n){function i(l){l===void 0&&(l=0);var d=t+l>=1?t+l:0;return e.el.getPointAtLength(d)}var r=Ce(e.el,e.svg),s=i(),c=i(-1),o=i(1),a=n?1:r.w/r.vW,v=n?1:r.h/r.vH;switch(e.property){case"x":return(s.x-r.x)*a;case"y":return(s.y-r.y)*v;case"angle":return Math.atan2(o.y-c.y,o.x-c.x)*180/Math.PI}}function fe(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Ee(f.pth(e)?e.totalLength:e,t)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:f.str(e)||t?i.split(n):[]}}function se(e){var t=e?$(f.arr(e)?e.map(ue):ue(e)):[];return N(t,function(n,i,r){return r.indexOf(n)===i})}function Pe(e){var t=se(e);return t.map(function(n,i){return{target:n,id:i,total:t.length,transforms:{list:Le(n)}}})}function Ge(e,t){var n=ee(t);if(/^spring/.test(n.easing)&&(n.duration=ye(n.easing)),f.arr(e)){var i=e.length,r=i===2&&!f.obj(e[0]);r?e={value:e}:f.fnc(t.duration)||(n.duration=t.duration/i)}var s=f.arr(e)?e:[e];return s.map(function(c,o){var a=f.obj(c)&&!f.pth(c)?c:{value:c};return f.und(a.delay)&&(a.delay=o?0:t.delay),f.und(a.endDelay)&&(a.endDelay=o===s.length-1?t.endDelay:0),a}).map(function(c){return Y(c,n)})}function Xe(e){for(var t=N($(e.map(function(s){return Object.keys(s)})),function(s){return f.key(s)}).reduce(function(s,c){return s.indexOf(c)<0&&s.push(c),s},[]),n={},i=function(s){var c=t[s];n[c]=e.map(function(o){var a={};for(var v in o)f.key(v)?v==c&&(a.value=o[v]):a[v]=o[v];return a})},r=0;r<t.length;r++)i(r);return n}function et(e,t){var n=[],i=t.keyframes;i&&(t=Y(Xe(i),t));for(var r in t)f.key(r)&&n.push({name:r,tweens:Ge(t[r],e)});return n}function tt(e,t){var n={};for(var i in e){var r=J(e[i],t);f.arr(r)&&(r=r.map(function(s){return J(s,t)}),r.length===1&&(r=r[0])),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function at(e,t){var n;return e.tweens.map(function(i){var r=tt(i,t),s=r.value,c=f.arr(s)?s[1]:s,o=I(c),a=re(t.target,e.name,o,t),v=n?n.to.original:a,l=f.arr(s)?s[0]:v,d=I(l)||I(a),h=o||d;return f.und(c)&&(c=v),r.from=fe(l,h),r.to=fe(ne(c,l),h),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=G(r.easing,r.duration),r.isPath=f.pth(s),r.isPathTargetInsideSVG=r.isPath&&f.svg(t.target),r.isColor=f.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var Te={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,r){if(i.list.set(t,n),t===i.last||r){var s="";i.list.forEach(function(c,o){s+=o+"("+c+") "}),e.style.transform=s}}};function Ie(e,t){var n=Pe(e);n.forEach(function(i){for(var r in t){var s=J(t[r],i),c=i.target,o=I(s),a=re(c,r,o,i),v=o||I(a),l=ne(Ee(s,v),a),d=ae(c,r);Te[d](c,r,l,i.transforms,!0)}})}function rt(e,t){var n=ae(e.target,t.name);if(n){var i=at(t,e),r=i[i.length-1];return{type:n,property:t.name,animatable:e,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function nt(e,t){return N($(e.map(function(n){return t.map(function(i){return rt(n,i)})})),function(n){return!f.und(n)})}function Ae(e,t){var n=e.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,e.map(function(s){return i(s)+s.duration})):t.duration,r.delay=n?Math.min.apply(Math,e.map(function(s){return i(s)+s.delay})):t.delay,r.endDelay=n?r.duration-Math.max.apply(Math,e.map(function(s){return i(s)+s.duration-s.endDelay})):t.endDelay,r}var ve=0;function it(e){var t=Z(he,e),n=Z(K,e),i=et(n,e),r=Pe(e.targets),s=nt(r,i),c=Ae(s,n),o=ve;return ve++,Y(t,{id:o,children:[],animatables:r,animations:s,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var C=[],ke=function(){var e;function t(){!e&&(!me()||!b.suspendWhenDocumentHidden)&&C.length>0&&(e=requestAnimationFrame(n))}function n(r){for(var s=C.length,c=0;c<s;){var o=C[c];o.paused?(C.splice(c,1),s--):(o.tick(r),c++)}e=c>0?requestAnimationFrame(n):void 0}function i(){b.suspendWhenDocumentHidden&&(me()?e=cancelAnimationFrame(e):(C.forEach(function(r){return r._onDocumentVisibility()}),ke()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),t}();function me(){return!!document&&document.hidden}function b(e){e===void 0&&(e={});var t=0,n=0,i=0,r,s=0,c=null;function o(m){var p=window.Promise&&new Promise(function(S){return c=S});return m.finished=p,p}var a=it(e);o(a);function v(){var m=a.direction;m!=="alternate"&&(a.direction=m!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,r.forEach(function(p){return p.reversed=a.reversed})}function l(m){return a.reversed?a.duration-m:m}function d(){t=0,n=l(a.currentTime)*(1/b.speed)}function h(m,p){p&&p.seek(m-p.timelineOffset)}function w(m){if(a.reversePlayback)for(var S=s;S--;)h(m,r[S]);else for(var p=0;p<s;p++)h(m,r[p])}function g(m){for(var p=0,S=a.animations,A=S.length;p<A;){var L=S[p],k=L.animatable,B=L.tweens,O=B.length-1,E=B[O];O&&(E=N(B,function(De){return m<De.end})[0]||E);for(var z=P(m-E.start-E.delay,0,E.duration)/E.duration,H=isNaN(z)?1:E.easing(z),M=E.to.strings,U=E.round,W=[],ze=E.to.numbers.length,D=void 0,q=0;q<ze;q++){var F=void 0,oe=E.to.numbers[q],ce=E.from.numbers[q]||0;E.isPath?F=Ke(E.value,H*oe,E.isPathTargetInsideSVG):F=ce+H*(oe-ce),U&&(E.isColor&&q>2||(F=Math.round(F*U)/U)),W.push(F)}var le=M.length;if(!le)D=W[0];else{D=M[0];for(var V=0;V<le;V++){M[V];var de=M[V+1],_=W[V];isNaN(_)||(de?D+=_+de:D+=_+" ")}}Te[L.type](k.target,L.property,D,k.transforms),L.currentValue=D,p++}}function u(m){a[m]&&!a.passThrough&&a[m](a)}function y(){a.remaining&&a.remaining!==!0&&a.remaining--}function x(m){var p=a.duration,S=a.delay,A=p-a.endDelay,L=l(m);a.progress=P(L/p*100,0,100),a.reversePlayback=L<a.currentTime,r&&w(L),!a.began&&a.currentTime>0&&(a.began=!0,u("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,u("loopBegin")),L<=S&&a.currentTime!==0&&g(0),(L>=A&&a.currentTime!==p||!p)&&g(p),L>S&&L<A?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,u("changeBegin")),u("change"),g(L)):a.changeBegan&&(a.changeCompleted=!0,a.changeBegan=!1,u("changeComplete")),a.currentTime=P(L,0,p),a.began&&u("update"),m>=p&&(n=0,y(),a.remaining?(t=i,u("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&v()):(a.paused=!0,a.completed||(a.completed=!0,u("loopComplete"),u("complete"),!a.passThrough&&"Promise"in window&&(c(),o(a)))))}return a.reset=function(){var m=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=m==="reverse",a.remaining=a.loop,r=a.children,s=r.length;for(var p=s;p--;)a.children[p].reset();(a.reversed&&a.loop!==!0||m==="alternate"&&a.loop===1)&&a.remaining++,g(a.reversed?a.duration:0)},a._onDocumentVisibility=d,a.set=function(m,p){return Ie(m,p),a},a.tick=function(m){i=m,t||(t=i),x((i+(n-t))*b.speed)},a.seek=function(m){x(l(m))},a.pause=function(){a.paused=!0,d()},a.play=function(){a.paused&&(a.completed&&a.reset(),a.paused=!1,C.push(a),d(),ke())},a.reverse=function(){v(),a.completed=!a.reversed,d()},a.restart=function(){a.reset(),a.play()},a.remove=function(m){var p=se(m);Oe(p,a)},a.reset(),a.autoplay&&a.play(),a}function pe(e,t){for(var n=t.length;n--;)X(e,t[n].animatable.target)&&t.splice(n,1)}function Oe(e,t){var n=t.animations,i=t.children;pe(e,n);for(var r=i.length;r--;){var s=i[r],c=s.animations;pe(e,c),!c.length&&!s.children.length&&i.splice(r,1)}!n.length&&!i.length&&t.pause()}function st(e){for(var t=se(e),n=C.length;n--;){var i=C[n];Oe(t,i)}}function ot(e,t){t===void 0&&(t={});var n=t.direction||"normal",i=t.easing?G(t.easing):null,r=t.grid,s=t.axis,c=t.from||0,o=c==="first",a=c==="center",v=c==="last",l=f.arr(e),d=parseFloat(l?e[0]:e),h=l?parseFloat(e[1]):0,w=I(l?e[1]:e)||0,g=t.start||0+(l?d:0),u=[],y=0;return function(x,m,p){if(o&&(c=0),a&&(c=(p-1)/2),v&&(c=p-1),!u.length){for(var S=0;S<p;S++){if(!r)u.push(Math.abs(c-S));else{var A=a?(r[0]-1)/2:c%r[0],L=a?(r[1]-1)/2:Math.floor(c/r[0]),k=S%r[0],B=Math.floor(S/r[0]),O=A-k,E=L-B,z=Math.sqrt(O*O+E*E);s==="x"&&(z=-O),s==="y"&&(z=-E),u.push(z)}y=Math.max.apply(Math,u)}i&&(u=u.map(function(M){return i(M/y)*y})),n==="reverse"&&(u=u.map(function(M){return s?M<0?M*-1:-M:Math.abs(y-M)}))}var H=l?(h-d)/y:d;return g+H*(Math.round(u[m]*100)/100)+w}}function ct(e){e===void 0&&(e={});var t=b(e);return t.duration=0,t.add=function(n,i){var r=C.indexOf(t),s=t.children;r>-1&&C.splice(r,1);function c(h){h.passThrough=!0}for(var o=0;o<s.length;o++)c(s[o]);var a=Y(n,Z(K,e));a.targets=a.targets||e.targets;var v=t.duration;a.autoplay=!1,a.direction=t.direction,a.timelineOffset=f.und(i)?v:ne(i,v),c(t),t.seek(a.timelineOffset);var l=b(a);c(l),s.push(l);var d=Ae(s,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}b.version="3.2.1";b.speed=1;b.suspendWhenDocumentHidden=!0;b.running=C;b.remove=st;b.get=re;b.set=Ie;b.convertPx=te;b.path=Je;b.setDashoffset=Qe;b.stagger=ot;b.timeline=ct;b.easing=G;b.penner=be;b.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
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
`,document.querySelector(".btn-empezar").addEventListener("click",()=>{window.open("formulario/index.html","_blank")}),document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".menu-toggle"),a=document.querySelector(".nav"),v=document.body;o.addEventListener("click",function(){a.classList.toggle("active"),v.classList.toggle("menu-open"),document.body.style.overflow=a.classList.contains("active")?"hidden":""}),document.querySelectorAll(".nav a, .nav .btn-empezar").forEach(l=>{l.addEventListener("click",()=>{a.classList.remove("active"),v.classList.remove("menu-open"),document.body.style.overflow=""})})}),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#0056b3"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#0056b3",opacity:.4,width:1},move:{enable:!0,speed:3}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"}}}}),document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".modal-overlay"),a=document.querySelector(".demo-button"),v=document.querySelector(".close-modal"),l=document.querySelector(".modal-body iframe");a.addEventListener("click",()=>{l.setAttribute("src","https://www.youtube.com/embed/Z_-xEBg3gjM?autoplay=1"),o.classList.add("show"),document.body.style.overflow="hidden"}),v.addEventListener("click",()=>{o.classList.remove("show"),l.setAttribute("src",""),document.body.style.overflow=""}),o.addEventListener("click",d=>{d.target===o&&(o.classList.remove("show"),l.setAttribute("src",""),document.body.style.overflow="")})}),document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".carousel-track"),a=document.querySelectorAll(".carousel-item"),v=a[0].getBoundingClientRect().width;a.forEach(w=>{const g=w.cloneNode(!0);o.appendChild(g)});let l=0;function d(){o.style.transition="transform 0.5s ease-in-out",o.style.transform=`translateX(-${l*v}px)`,l>=a.length&&setTimeout(()=>{o.style.transition="none",l=0,o.style.transform="translateX(0)"},500)}function h(){l++,d()}setInterval(h,3e3),window.addEventListener("resize",()=>{o.style.transition="none",d(),setTimeout(()=>{o.style.transition="transform 0.5s ease-in-out"})})});function e(o){const a=o.getBoundingClientRect();return a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",()=>{const o=document.querySelector(".preProductos h1"),a=document.querySelector(".preProductos p");e(o)&&o.classList.add("fade-in"),e(a)&&a.classList.add("fade-in")});const t=b.timeline({easing:"easeOutExpo",duration:1e3});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".feature-modal-btn"),a=document.querySelectorAll(".feature-modal-overlay"),v=document.querySelectorAll(".close-feature-modal");o.forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-feature-modal");document.getElementById(d).classList.add("show")})}),v.forEach(l=>{l.addEventListener("click",()=>{l.closest(".feature-modal-overlay").classList.remove("show")})}),a.forEach(l=>{l.addEventListener("click",d=>{d.target===l&&l.classList.remove("show")})})}),t.add({targets:".navbar",opacity:[0,1],translateY:[-20,0],duration:800}).add({targets:".hero-content h1",opacity:[0,1],translateY:[50,0],duration:800},"-=400").add({targets:".hero-content .subtitle",opacity:[0,1],translateY:[30,0],duration:800},"-=600").add({targets:".hero-content .hero-description",opacity:[0,1],translateY:[20,0],duration:800},"-=600").add({targets:".stat-item",opacity:[0,1],translateY:[20,0],delay:b.stagger(100),duration:800},"-=400").add({targets:".hero-image",opacity:[0,1],translateX:[50,0],duration:800},"-=800").add({targets:".demo-button",opacity:[0,1],translateY:[30,0],duration:800},"-=600");const n={threshold:.2,rootMargin:"50px"},i=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(b({targets:a.target,opacity:[0,1],translateY:[20,0],duration:800,easing:"easeOutExpo"}),i.unobserve(a.target))})},n);document.querySelectorAll(".feature-card, .feature-item, .timeline-item, .pricing-card, .contact-card").forEach(o=>{o.style.opacity="0",i.observe(o)});let r=0;const s=document.querySelector(".navbar");window.addEventListener("scroll",()=>{const o=window.pageYOffset;if(o<=0){s.classList.remove("scroll-up");return}o>r&&!s.classList.contains("scroll-down")?(s.classList.remove("scroll-up"),s.classList.add("scroll-down")):o<r&&s.classList.contains("scroll-down")&&(s.classList.remove("scroll-down"),s.classList.add("scroll-up")),r=o});const c=document.getElementById("contactForm");c==null||c.addEventListener("submit",o=>{o.preventDefault();const a=c.querySelector(".submit-btn"),v=a.innerHTML;a.innerHTML='<i class="fas fa-spinner fa-spin"></i>',a.disabled=!0,setTimeout(()=>{a.innerHTML='<i class="fas fa-check"></i> Mensaje Enviado',a.classList.add("success"),setTimeout(()=>{a.innerHTML=v,a.classList.remove("success"),a.disabled=!1,c.reset()},2e3)},1500)}),b({targets:".floating-icons i",translateY:function(){return b.random(-20,20)},translateX:function(){return b.random(-20,20)},rotate:function(){return b.random(-15,15)},scale:function(){return b.random(.8,1.2)},opacity:function(){return b.random(.6,1)},duration:function(){return b.random(2e3,4e3)},delay:function(){return b.random(0,1e3)},loop:!0,direction:"alternate",easing:"easeInOutQuad"}),b({targets:".pulse-circle",scale:[1,1.5],opacity:[.6,0],easing:"easeOutSine",duration:1e3,loop:!0}),b({targets:".main-icon",translateY:[-10,10],duration:2e3,loop:!0,direction:"alternate",easing:"easeInOutQuad"}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".counter").forEach(u=>{const y=()=>{const x=+u.getAttribute("data-target"),m=+u.innerText,p=x/200;m<x?(u.innerText=Math.ceil(m+p),setTimeout(y,10)):u.innerText=x};y()});const a=[{title:"Gestión Integral",description:"Automatización completa de procesos."},{title:"Interfaz Intuitiva",description:"Fácil de usar para todos los usuarios."},{title:"Seguridad Avanzada",description:"Protección de datos de nivel empresarial."}],v=[{step:"1",description:"Análisis de Requisitos"},{step:"2",description:"Configuración del Sistema"},{step:"3",description:"Capacitación del Personal"},{step:"4",description:"Lanzamiento y Soporte"}],l=[{title:"Ahorro de Tiempo",description:"Optimización de tareas repetitivas."},{title:"Reducción de Costos",description:"Menor gasto en recursos operativos."},{title:"Mejor Toma de Decisiones",description:"Datos en tiempo real para decisiones estratégicas."}],d=document.getElementById("features");a.forEach(u=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md feature-card",y.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${u.title}</h3>
      <p class="text-gray-600">${u.description}</p>
    `,d.appendChild(y)});const h=document.getElementById("process");v.forEach(u=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md process-step",y.innerHTML=`
      <div class="text-3xl font-bold text-blue-600 mb-2">${u.step}</div>
      <p class="text-gray-600">${u.description}</p>
    `,h.appendChild(y)});const w=document.getElementById("benefits");l.forEach(u=>{const y=document.createElement("div");y.className="text-center p-6 bg-white rounded-lg shadow-md benefit-card",y.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">${u.title}</h3>
      <p class="text-gray-600">${u.description}</p>
    `,w.appendChild(y)});const g=new IntersectionObserver(u=>{u.forEach(y=>{y.isIntersecting&&y.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-fade-in, .feature-card, .process-step, .benefit-card").forEach(u=>{g.observe(u)})})});
