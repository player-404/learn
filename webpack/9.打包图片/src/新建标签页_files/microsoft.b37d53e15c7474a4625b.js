(window.webpackJsonp=window.webpackJsonp||[]).push([["microsoft"],{"+53S":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("/w5G");class r{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function o(t){return new i.a("fast-ref",r,t)}},"+viU":function(t,e,n){"use strict";var i=n("iX68");const r=n("oXkQ");e.a=function(t){return function(e){class n extends i.a{constructor(){super(...arguments),this.styles=t,this.managedComponent=e}}return n.displayName=`withJSS(${e.displayName||e.name})`,r(n,e)}}},"+yEz":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("5ZAu");class r{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function o(t){return t.map(t=>t instanceof r?o(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function s(t){return t.map(t=>t instanceof r?t.behaviors:null).reduce((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e)),null)}r.create=(()=>{if(i.a.supportsAdoptedStyleSheets){const t=new Map;return e=>new a(e,t)}return t=>new l(t)})();class a extends r{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=s(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=o(t).map(t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n})}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter(t=>-1===e.indexOf(t)),super.removeStylesFrom(t)}}let c=0;class l extends r{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=s(t),this.styleSheets=o(t),this.styleClass="fast-style-class-"+ ++c}addStylesTo(t){const e=this.styleSheets,n=this.styleClass;t=this.normalizeTarget(t);for(let i=e.length-1;i>-1;--i){const r=document.createElement("style");r.innerHTML=e[i],r.className=n,t.prepend(r)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll("."+this.styleClass);for(let n=0,i=e.length;n<i;++n)t.removeChild(e[n]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}},"/48e":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("+viU"),r=n("TMFx");const o=Object(i.a)()(r.Column)},"/w5G":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s}));var i=n("5ZAu");class r{constructor(){this.targetIndex=0}}class o extends r{constructor(){super(...arguments),this.createPlaceholder=i.a.createInterpolationPlaceholder}}class s extends r{constructor(t,e,n){super(),this.name=t,this.behavior=e,this.options=n}createPlaceholder(t){return i.a.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}},"/xkD":function(t,e){},"0S4z":function(t,e,n){"use strict";var i=n("fz//"),r=n("3ZGc"),o=n("iuMt"),s=n("SP+O"),a=n("odxL"),c=n("7b0X"),l=n("MF9s"),u=n("objN");const d={hypertext:{outline:"none","text-decoration":"none",color:s.c,transition:"all 0.2s ease-in-out, border 0.03s ease-in-out","&:link, &:visited":Object.assign(Object.assign({"border-bottom":Object(i.a)("{0} solid {1}",Object(r.a)(l.X),a.d),color:a.d,"&:hover":{"border-bottom-color":a.b,color:a.b,[u.D]:{"border-bottom-color":u.v,color:u.v}},"&:active":{"border-bottom-color":a.a,color:a.a}},Object(o.a)({"border-bottom":Object(i.a)("{0} solid {1}",Object(r.a)(l.s),c.a),[u.D]:{"border-bottom-color":u.v,color:u.v}})),{[u.D]:{color:u.v,"border-bottom-color":u.v}}),[u.D]:Object.assign(Object.assign({},u.w),{color:u.a.text})}};e.a=d},"0q6d":function(t,e,n){"use strict";function i(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function r(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function o(t,e,n){return isNaN(t)?e:e+t*(n-e)}function s(t){return t*(Math.PI/180)}function a(t){return t*(180/Math.PI)}function c(t){const e=Math.round(i(t,0,255)).toString(16);return 1===e.length?"0"+e:e}function l(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function u(t,e,n){if(t<=0)return e%360;if(t>=1)return n%360;const i=(e-n+360)%360;return i<=(n-e+360)%360?(e-i*t+360)%360:(e+i*t+360)%360}n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return d}));Math.PI;function d(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}},"1j0g":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ERkP"),r=n.n(i),o=n("dVu6"),s=n("qGiF");class a extends r.a.Component{constructor(t,e){super(t),this.updateDownstreamDesignSystem()}render(){return this.updateDownstreamDesignSystem(),r.a.createElement(s.b,{value:this.downstreamDesignSystem},this.props.children)}updateDownstreamDesignSystem(){let t=!1;this.upstreamDesignSystem!==this.context&&(this.upstreamDesignSystem=this.context,t=!0),this.designSystemOverrides!==this.props.designSystem&&(this.designSystemOverrides=this.props.designSystem,t=!0),t&&(this.downstreamDesignSystem=this.createDesignSystem())}createDesignSystem(){return"function"==typeof this.props.designSystemMergingFunction?this.props.designSystemMergingFunction(this.upstreamDesignSystem,this.designSystemOverrides):Object(o.a)(this.upstreamDesignSystem,this.designSystemOverrides)}}a.contextType=s.c},"2i1/":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i="not-allowed"},"39vG":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=n("6BDD").b`
    <slot></slot>
`},"3ZGc":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var i=n("LB+V");function r(t="px"){return e=>e+t}const o=r();function s(t){return Object(i.a)(t)?e=>o(t(e)):o(t)}},"4X57":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var i=n("olMv"),r=n("+yEz");function o(t,e){const n=[];let o="";const s=[];for(let a=0,c=t.length-1;a<c;++a){o+=t[a];let c=e[a];if(c instanceof i.a){const t=c.createBehavior();c=c.createCSS(),t&&s.push(t)}c instanceof r.a||c instanceof CSSStyleSheet?(""!==o.trim()&&(n.push(o),o=""),n.push(c)):o+=c}return o+=t[t.length-1],""!==o.trim()&&n.push(o),{styles:n,behaviors:s}}function s(t,...e){const{styles:n,behaviors:i}=o(t,e),s=r.a.create(n);return i.length&&s.withBehaviors(...i),s}class a extends i.a{constructor(t,e){super(),this.behaviors=e,this.css="";const n=t.reduce((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t),[]);n.length&&(this.styles=r.a.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function c(t,...e){const{styles:n,behaviors:i}=o(t,e);return new a(n,i)}},"4zka":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n("HOx9"),r=i.h;function o(t,e){return typeof t===e}function s(t){return void 0===t||o(t,r)}function a(t){return s(t)||null===t}function c(t,e){return t&&Object.prototype.hasOwnProperty.call(t,e)}function l(t){return o(t,"object")}function u(t){return o(t,"function")}function d(t,e,n,i){void 0===i&&(i=!1);var r=!1;if(!a(t))try{a(t.addEventListener)?a(t.attachEvent)||(t.attachEvent("on"+e,n),r=!0):(t.addEventListener(e,n,i),r=!0)}catch(t){}return r}function h(t,e,n,i){if(void 0===i&&(i=!1),!a(t))try{a(t.removeEventListener)?a(t.detachEvent)||t.detachEvent("on"+e,n):t.removeEventListener(e,n,i)}catch(t){}}var b=function(){function t(){}return t.isDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)},t.isString=function(t){return o(t,"string")},t.isNumber=function(t){return o(t,"number")},t.isBoolean=function(t){return o(t,"boolean")},t.disableCookies=function(){t._canUseCookies=!1},t.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(p,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},t.toISOString=function(e){if(t.isDate(e)){var n=function(t){var e=String(t);return 1===e.length&&(e="0"+e),e};return e.getUTCFullYear()+"-"+n(e.getUTCMonth()+1)+"-"+n(e.getUTCDate())+"T"+n(e.getUTCHours())+":"+n(e.getUTCMinutes())+":"+n(e.getUTCSeconds())+"."+String((e.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}},t.arrForEach=function(t,e,n){for(var i=t.length,r=0;r<i;++r)r in t&&e.call(n||t,t[r],r,t)},t.arrIndexOf=function(t,e,n){for(var i=t.length,r=n||0,o=Math.max(r>=0?r:i-Math.abs(r),0);o<i;o++)if(o in t&&t[o]===e)return o;return-1},t.arrMap=function(t,e,n){for(var i=t.length,r=n||t,o=new Array(i),s=0;s<i;s++)s in t&&(o[s]=e.call(r,t[s],t));return o},t.arrReduce=function(t,e,n){var i,r=t.length,o=0;if(arguments.length>=3)i=n;else{for(;o<r&&!(o in t);)o++;i=t[o++]}for(;o<r;)o in t&&(i=e(i,t[o],o,t)),o++;return i},t.objCreate=function(t){if(null==t)return{};if(!l(t)&&!u(t))throw new TypeError("Object prototype may only be an Object: "+t);function e(){}return e.prototype=t,new e},t.objKeys=function(t){var e=!{toString:null}.propertyIsEnumerable("toString");if(!(u(t)||l(t)&&null!==t))throw new TypeError("objKeys called on non-object");var n=[];for(var i in t)c(t,i)&&n.push(i);if(e)for(var r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=r.length,s=0;s<o;s++)c(t,r[s])&&n.push(r[s]);return n},t.objDefineAccessors=function(t,e,n,i){var r=Object.defineProperty;if(r)try{var o={enumerable:!0,configurable:!0};return n&&(o.get=n),i&&(o.set=i),r(t,e,o),!0}catch(t){}return!1},t.addEventHandler=function(t,e){var n=!1,r=Object(i.d)();r&&(n=d(r,t,e),n=d(r.body,t,e)||n);var o=Object(i.a)();return o&&(n=f.Attach(o,t,e)||n),n},t.isTypeof=o,t.isUndefined=s,t.isNullOrUndefined=a,t.hasOwnProperty=c,t.isFunction=u,t.isObject=l,t}(),p=/[xy]/g,f=function(){function t(){}return t.Attach=d,t.AttachEvent=d,t.Detach=h,t.DetachEvent=h,t}()},"57ob":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("adbA");function r(t,e){return new i.a("appearance",t,e)}},"5ZAu":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d}));var i=n("oZuh");const r=[],o=i.a.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let s=o;function a(){let t=0;for(;t<r.length;){if(r[t].call(),t++,t>1024){for(let e=0,n=r.length-t;e<n;e++)r[e]=r[e+t];r.length-=t,t=0}}r.length=0}const c="fast-"+Math.random().toString(36).substring(2,8),l=c+"{",u="}"+c,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(s!==o)throw new Error("The HTML policy can only be set once.");s=t},createHTML:t=>s.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(c),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(c+":","")),createInterpolationPlaceholder:t=>`${l}${t}${u}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${c}:${t}--\x3e`,queueUpdate(t){r.length<1&&window.requestAnimationFrame(a),r.push(t)},nextUpdate:()=>new Promise(t=>{d.queueUpdate(t)}),setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)})},"6BDD":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var i=n("5ZAu"),r=n("oePG"),o=n("hPPo"),s=n("Ne8q"),a=n("/w5G"),c=n("OvhW");class l{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=i.a.createHTML(e);const n=t.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(t=n)}else t=e;const n=Object(o.a)(t,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,r=new Array(this.behaviorCount),a=i.a.createTemplateWalker(e);let c=0,l=this.targetOffset,u=a.nextNode();for(let t=n.length;c<t;++c){const t=n[c],e=t.targetIndex;for(;null!==u;){if(l===e){r[c]=t.createBehavior(u);break}u=a.nextNode(),l++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let n=0,i=e.length;n<i;++n,++c)r[c]=e[n].createBehavior(t)}return new s.a(e,r)}render(t,e,n){"string"==typeof e&&(e=document.getElementById(e)),void 0===n&&(n=e);const i=this.create(n);return i.bind(t,r.c),i.appendTo(e),i}}const u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,...e){const n=[];let i="";for(let r=0,o=t.length-1;r<o;++r){const o=t[r];let s=e[r];if(i+=o,s instanceof l){const t=s;s=()=>t}if("function"==typeof s&&(s=new c.b(s)),s instanceof a.c){const t=u.exec(o);null!==t&&(s.targetName=t[2])}s instanceof a.b?(i+=s.createPlaceholder(n.length),n.push(s)):i+=s}return i+=t[t.length-1],new l(i,n)}},"6QMD":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"h",(function(){return b})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return f}));var i,r=n("YBl9"),o=n("swXE"),s=n("mObi");function a(t){const e=Object(s.a)(t);return function(t){return"function"==typeof t?n=>e(Object.assign({},n,{backgroundColor:t(n)})):e(t)}}function c(t,e){const n=Object(s.a)(e);return e=>"function"==typeof e?i=>n(Object.assign({},i,{backgroundColor:e(i)}))[t]:n(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(i||(i={}));const l=Object(s.a)(t=>{let e=Object(r.d)(t);if(null!==e)return e;if(e=Object(r.e)(t),null!==e)return e;throw new Error(t+' cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"')});function u(t){return Object(r.a)(t)||Object(r.b)(t)}function d(t,e){return l(t).equalValue(l(e))}const h=Object(s.a)((t,e)=>Object(o.a)(l(t),l(e)),(t,e)=>t+e);function b(t){return Object(o.k)(l(t))}function p(...t){return e=>Math.max.apply(null,t.map(t=>t(e)))}const f=(t,e,n)=>Math.min(Math.max(t,e),n)},"6eT7":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n,i){this.r=t,this.g=e,this.b=n,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new r(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Object(i.c)(this.r,0,255))},${Math.round(Object(i.c)(this.g,0,255))},${Math.round(Object(i.c)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Object(i.c)(this.r,0,255))},${Math.round(Object(i.c)(this.g,0,255))},${Math.round(Object(i.c)(this.b,0,255))},${Object(i.a)(this.a,0,1)})`}roundToPrecision(t){return new r(Object(i.i)(this.r,t),Object(i.i)(this.g,t),Object(i.i)(this.b,t),Object(i.i)(this.a,t))}clamp(){return new r(Object(i.a)(this.r,0,1),Object(i.a)(this.g,0,1),Object(i.a)(this.b,0,1),Object(i.a)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return Object(i.d)(Object(i.c)(t,0,255))}}},"6fxl":function(t,e,n){"use strict";function i(t,...e){e.forEach(e=>{if(Object.getOwnPropertyNames(e.prototype).forEach(n=>{Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))}),e.attributes){const n=t.attributes||[];t.attributes=n.concat(e.attributes)}})}n.d(e,"a",(function(){return i}))},"6u3Q":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return f}));var i,r=n("HzrG"),o=n("MF9s"),s=n("6QMD");function a(t,e){return n=>{if(!Object(s.g)(e))return-1;const i=Object(r.a)(t,n),o=i.indexOf(e);return-1!==o?o:i.findIndex(t=>Object(s.g)(t)&&Object(s.c)(e,t))}}function c(t,e){return n=>{const i=Object(r.a)(t,n),o=Object(r.a)(e,n),c=a(i,o)(n);let l;if(-1!==c)return c;try{l=Object(s.h)(o)}catch(t){l=-1}return-1===l?0:i.map((t,e)=>({luminance:Object(s.h)(t),index:e})).reduce((t,e)=>Math.abs(e.luminance-l)<Math.abs(t.luminance-l)?e:t).index}}function l(t){return Object(s.h)(Object(o.k)(t))<=(-.1+Math.sqrt(.21))/2}function u(t,e){return"function"==typeof t?n=>e(n)[Object(s.b)(t(n),0,e(n).length-1)]:e[Object(s.b)(t,0,e.length-1)]}function d(t){return(e,n)=>i=>u(l(i)?Object(r.a)(n,i):Object(r.a)(e,i),t(i))}function h(t){return e=>n=>i=>o=>a=>{const c=Object(r.a)(t,a),l=Object(r.a)(e,a),u=l.length,d=Object(s.b)(n(c,l,a),0,u-1),h=i(d,l,a);const b=[].concat(l),p=u-1;let f=d;return-1===h&&(b.reverse(),f=p-f),function t(e,n,i=0,r=e.length-1){if(r===i)return e[i];const o=Math.floor((r-i)/2)+i;return n(e[o])?t(e,n,i,o):t(e,n,o+1,r)}(b,(function(t){return o(Object(s.e)(c,t))}),f,p)}}function b(t,e,n){return c(e,t)(n)}function p(t){return c(o.W,Object(o.k)(t))(t)}function f(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(i||(i={}))},"6vBc":function(t,e,n){"use strict";function i(t,e){const n="function"==typeof e?e:()=>e;return(e,i)=>t(e,i)?n(e,i):null}n.d(e,"a",(function(){return i}))},"7b0X":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var i=n("MF9s"),r=n("6u3Q"),o=n("6QMD");function s(t){return t>3.5}const a=Object(r.h)(i.k)(i.W)((function(t,e,n){return Object(r.b)(i.W,t)(n)}))((function(t,e,n){return Object(r.e)(n)?-1:1}))(s),c=Object(o.d)(a);function l(t,e,n){return Object(r.e)(n)?1:-1}function u(t){return Object(r.h)(c)(i.j)(function(t){return(e,n,i)=>n.indexOf(t(i))}(t))(l)(s)}},"83R0":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("CiAa"),r=n("+viU"),o=n("0S4z");const s=Object(r.a)(o.a)(i.default)},"8yfO":function(t,e,n){"use strict";n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return m}));var i=n("3ZGc"),r=n("Dfx/"),o=n("zP2P");const s=[[60,72],[46,56],[34,44],[28,36],[20,28],[16,24],[14,20],[12,16],[10,16]].reduce((t,e,n)=>Object.assign(t,{["t"+(n+1)]:{fontSize:e[0],lineHeight:e[1]}}),{});function a(t){return s.hasOwnProperty(t)?t:"t7"}function c(t){return e=>{const n=parseInt(t.replace("t",""),10),i=Object(o.a)(-1,0,1)(e),s=Object(r.a)(n-i,1,9);return a("t".concat(s.toString()))}}function l(t){return s[a(t)].fontSize}function u(t){return s[a(t)].lineHeight}function d(t){return Object(i.a)(l(t))}function h(t){return Object(i.a)(u(t))}function b(t){return e=>u(c(t)(e))}function p(t){return e=>h(c(t)(e))}function f(t,e){return n=>({"font-size":t(n),"line-height":e(n)})}const g=f(d,h),v=f((function(t){return e=>d(c(t)(e))}),p),m=g},"9/ga":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("D57K"),r=n("P4Ao"),o=n("QBS5"),s=n("oePG");class a extends r.a{constructor(){super(...arguments),this.actionAlignment="horizontal"}actionsSlottedNodesChanged(){var t;null===(t=this.actionsSlottedNodes[0])||void 0===t||t.focus()}}Object(i.e)([Object(o.b)({attribute:"align-actions"})],a.prototype,"actionAlignment",void 0),Object(i.e)([o.b],a.prototype,"hideStoryTitle",void 0),Object(i.e)([s.d],a.prototype,"actionsSlottedNodes",void 0);var c=n("4X57"),l=n("xY0q"),u=n("kL0l");const d=c.a`
    ${Object(l.a)("flex")} :host {
        --action-region-padding-top: 0;
        --content-region-padding-top: 16px;
        --content-region-width: 236px;
        box-sizing: border-box;
        flex-direction: column;
        height: 100%;
        position: relative;
        width: 100%;
    }

    .action-region {
        display: flex;
        position: absolute;
        padding: 0 16px 16px;
        padding-top: var(--action-region-padding-top);
        justify-content: space-around;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
    }

    :host([align-actions="vertical"]) .action-region {
        display: block;
        margin: auto;
        position: static;
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        padding: 16px 16px 0 16px;
        padding-top: var(--content-region-padding-top);
        cursor: default;
    }

    :host([align-actions="vertical"]) .content-region {
        display: block;
        margin: auto;
        text-align: center;
        width: var(--content-region-width);
    }

    .heading {
        text-decoration: none;
        color: ${u.G.var};
        font-size: var(--heading-font-size, var(--type-ramp-plus-1-font-size));
        line-height: var(--heading-line-height, var(--type-ramp-plus-1-line-height));
        font-weight: 600;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 2);
    }

    ::slotted(fluent-button) {
        margin-bottom: 8px;
        width: 48%;
    }
`.withBehaviors(u.G);var h=n("6BDD"),b=n("UauI"),p=n("Q5AN");n("m1Vi").b;const f=h.b`
    <div class="content-region" part="content-region">
        <span class="heading" part="heading">${t=>t.hideStoryTitle}</span>
    </div>
    <div class="action-region" part="action-region">
        <slot
            name="actions"
            ${Object(b.b)({property:"actionsSlottedNodes",filter:Object(p.b)("fluent-radio, fluent-button, fluent-anchor")})}
        ></slot>
    </div>
`;let g=class extends a{};g=Object(i.e)([Object(r.b)({name:"msft-hide-story-card",template:f,styles:d,shadowOptions:{delegatesFocus:!0}})],g)},"9CwC":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("MF9s"),r=n("MLPK"),o=n("6QMD");const s=(t,e)=>Object(o.e)(r.b,t)>=e?r.b:r.a;function a(t){return function(e){return"function"==typeof e?n=>s(e(n),t):s(Object(i.a)(e),t)}}const c=a(4.5);a(3)},"9ZcS":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return g}));var i=n("D57K"),r=n("P4Ao"),o=n("5ZAu"),s=n("oePG"),a=n("QBS5"),c=n("+yEz");class l{constructor(){this.queue=new Set,this.customPropertyTarget=null,this._owner=null,this.ticking=!1,this.cssCustomPropertyDefinitions=new Map}get owner(){return this._owner}register(t){const e=this.cssCustomPropertyDefinitions.get(t.name);e?e.count+=1:(this.cssCustomPropertyDefinitions.set(t.name,Object.assign(Object.assign({},t),{count:1})),this.set(t))}unregister(t){const e=this.cssCustomPropertyDefinitions.get(t);e&&(e.count-=1,0===e.count&&(this.cssCustomPropertyDefinitions.delete(t),this.remove(t)))}set(t){this.owner&&(this.customPropertyTarget?this.customPropertyTarget.setProperty("--"+t.name,this.owner.evaluate(t)):this.queue.add(this.set.bind(this,t)))}remove(t){this.customPropertyTarget?this.customPropertyTarget.removeProperty("--"+t):this.queue.add(this.remove.bind(this,t))}setAll(){this.ticking||(this.ticking=!0,o.a.queueUpdate(()=>{this.ticking=!1,this.cssCustomPropertyDefinitions.forEach(t=>{this.set(t)})}))}}class u extends l{constructor(t){super(),this.subscribers=new Set,this.sheet=t,this.styles=c.a.create([t]),this.customPropertyTarget=t.cssRules[t.insertRule(":host{}")].style}subscribe(t){this.subscribers.add(t),1===this.subscribers.size&&(this._owner=t),t.cssCustomPropertyDefinitions.forEach(t=>{this.register(t)}),t.$fastController.addStyles(this.styles)}unsubscribe(t){this.subscribers.delete(t),t.cssCustomPropertyDefinitions.forEach(t=>this.unregister(t.name)),this.owner===t&&(this._owner=this.subscribers.size?this.subscribers.values().next().value:null),!this.sheet.ownerNode&&this.styles&&t.$fastController.removeStyles(this.styles)}isSubscribed(t){return this.subscribers.has(t)}}class d extends l{constructor(t,e){super(),this._sheet=null,this.handleConnection={handleChange:()=>{var t;this._sheet=this.styles.sheet;const e=this.sheet.insertRule(":host{}");this.customPropertyTarget=this.sheet.rules[e].style,s.b.getNotifier(null===(t=this._owner)||void 0===t?void 0:t.$fastController).unsubscribe(this.handleConnection,"isConnected")}};const n=e.$fastController;n.addStyles(t),this.styles=t,this._owner=e,e.isConnected?this.handleConnection.handleChange():s.b.getNotifier(n).subscribe(this.handleConnection,"isConnected"),e.cssCustomPropertyDefinitions.forEach(t=>{this.register(t)})}get sheet(){return this._sheet}customPropertyTargetChanged(t,e){!t&&this.queue.size&&(this.queue.forEach(t=>t()),this.queue.clear())}}function h(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function b(t){const e=t.provider;return null!=e&&f.isDesignSystemProvider(e)}Object(i.e)([s.d],d.prototype,"customPropertyTarget",void 0);const p={bind(t){t.provider=f.findProvider(t)},unbind(t){}};class f extends r.a{constructor(){super(),this.isDesignSystemProvider=!0,this.designSystem={},this.useDefaults=!1,this.provider=null,this.cssCustomPropertyDefinitions=new Map,this.attributeChangeHandler={handleChange:(t,e)=>{const n=this[e],i=this.customPropertyManager;if(this.isValidDesignSystemValue(n)){this.designSystem[e]=n;const t=this.designSystemProperties[e];t&&t.cssCustomProperty&&i&&i.set({name:t.cssCustomProperty,value:n})}else{this.syncDesignSystemWithProvider();const t=this.designSystemProperties[e].cssCustomProperty;i&&("string"==typeof t&&i.remove(t),i.setAll())}}},this.localDesignSystemChangeHandler={handleChange:()=>{const t=this.customPropertyManager;t&&t.owner===this&&t.setAll()}},this.providerDesignSystemChangeHandler={handleChange:(t,e)=>{t[e]===this.designSystem[e]||this.isValidDesignSystemValue(this[e])||(this.designSystem[e]=t[e])}},o.a.supportsAdoptedStyleSheets?this.customPropertyManager=new u(new CSSStyleSheet):this.customPropertyManager=new d(document.createElement("style"),this),void 0===this.designSystemProperties&&(this.designSystemProperties={}),this.$fastController.addBehaviors([p])}static get tagNames(){return f._tagNames}static isDesignSystemProvider(t){return t.isDesignSystemProvider||-1!==f.tagNames.indexOf(t.tagName)}static findProvider(t){if(b(t))return t.provider;let e=h(t);for(;null!==e;){if(f.isDesignSystemProvider(e))return t.provider=e,e;if(b(e))return t.provider=e.provider,e.provider;e=h(e)}return null}static registerTagName(t){const e=t.toUpperCase();-1===f.tagNames.indexOf(e)&&f._tagNames.push(e)}useDefaultsChanged(){if(this.useDefaults){const t=this.designSystemProperties;Object.keys(t).forEach(e=>{void 0===this[e]&&(this[e]=t[e].default)})}}providerChanged(t,e){if(t instanceof HTMLElement){const e=s.b.getNotifier(t.designSystem);s.b.getAccessors(t.designSystem).forEach(t=>{e.unsubscribe(this.providerDesignSystemChangeHandler,t.name)})}if(e instanceof HTMLElement&&f.isDesignSystemProvider(e)){const t=s.b.getNotifier(e.designSystem),n=s.b.getAccessors(this.designSystem).reduce((t,e)=>Object.assign(Object.assign({},t),{[e.name]:e}),{}),i=s.b.getNotifier(this.designSystem);s.b.getAccessors(e.designSystem).forEach(e=>{t.subscribe(this.providerDesignSystemChangeHandler,e.name),n[e.name]||(Object(s.d)(this.designSystem,e.name),i.subscribe(this.localDesignSystemChangeHandler,e.name))}),this.syncDesignSystemWithProvider()}}customPropertyManagerChanged(t,e){t&&t.unsubscribe&&t.unsubscribe(this),e.subscribe&&e.subscribe(this)}connectedCallback(){super.connectedCallback(),this.customPropertyManager.subscribe&&this.customPropertyManager.isSubscribed&&!this.customPropertyManager.isSubscribed(this)&&this.customPropertyManager.subscribe(this);const t=s.b.getNotifier(this),e=s.b.getNotifier(this.designSystem);if(Object.keys(this.designSystemProperties).forEach(n=>{Object(s.d)(this.designSystem,n),t.subscribe(this.attributeChangeHandler,n),e.subscribe(this.localDesignSystemChangeHandler,n);const i=this[n];if(this.isValidDesignSystemValue(i)){this.designSystem[n]=i;const{cssCustomProperty:t}=this.designSystemProperties[n];"string"==typeof t&&this.customPropertyManager&&this.customPropertyManager.owner===this&&this.customPropertyManager.set({name:t,value:this[n]})}}),Array.isArray(this.disconnectedCSSCustomPropertyRegistry)){for(let t=0;t<this.disconnectedCSSCustomPropertyRegistry.length;t++)this.registerCSSCustomProperty(this.disconnectedCSSCustomPropertyRegistry[t]);delete this.disconnectedCSSCustomPropertyRegistry}if(Array.isArray(this.disconnectedRegistry)){for(let t=0;t<this.disconnectedRegistry.length;t++)this.disconnectedRegistry[t](this);delete this.disconnectedRegistry}}disconnectedCallback(){super.disconnectedCallback(),this.customPropertyManager.unsubscribe&&this.customPropertyManager.unsubscribe(this)}registerCSSCustomProperty(t){this.cssCustomPropertyDefinitions.set(t.name,t),this.customPropertyManager.register(t)}unregisterCSSCustomProperty(t){this.cssCustomPropertyDefinitions.delete(t.name),this.customPropertyManager.unregister(t.name)}evaluate(t){return"function"==typeof t.value?t.value(Object.assign({},this.designSystem)):t.value}syncDesignSystemWithProvider(){if(this.provider){const t=s.b.getAccessors(this.designSystem).reduce((t,e)=>(t[e.name]=e,t),{});s.b.getAccessors(this.provider.designSystem).forEach(e=>{var n;this.designSystemProperties.hasOwnProperty(e.name)&&this.isValidDesignSystemValue(this[e.name])||!this.isValidDesignSystemValue(null===(n=this.provider)||void 0===n?void 0:n.designSystem[e.name])||(t[e.name]||s.b.defineProperty(this.designSystem,e.name),this.designSystem[e.name]=this.provider.designSystem[e.name])})}}isValidDesignSystemValue(t){return null!=t}}f._tagNames=[],Object(i.e)([Object(a.b)({attribute:"use-defaults",mode:"boolean"})],f.prototype,"useDefaults",void 0),Object(i.e)([s.d],f.prototype,"provider",void 0),Object(i.e)([s.d],f.prototype,"customPropertyManager",void 0);const g=function(t){return e=>{Object(r.b)(t)(e),e.registerTagName("string"==typeof t?t:t.name)}}},A6yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("4zka"),r=n("kyf+"),o=i.a.isFunction,s=function(){function t(){var t=this,e=!1,n=null,i=null;t.core=null,t.diagLog=function(e){return t._getTelCtx(e).diagLog()},t.isInitialized=function(){return e},t.setInitialized=function(t){e=t},t.setNextPlugin=function(t){i=t},t.processNext=function(t,e){e?e.processNext(t):i&&o(i.processTelemetry)&&i.processTelemetry(t,null)},t._getTelCtx=function(e){void 0===e&&(e=null);var o=e;if(!o){var s=n||new r.a(null,{},t.core);o=i&&i.getPlugin?s.createNew(null,i.getPlugin):s.createNew(null,i)}return o},t._baseTelInit=function(o,s,a,c){o&&(o.extensionConfig=o.extensionConfig||[]),!c&&s&&(c=s.getProcessTelContext().getNext());var l=i;i&&i.getPlugin&&(l=i.getPlugin()),t.core=s,n=new r.a(c,o,s,l),e=!0}}return t.prototype.initialize=function(t,e,n,i){this._baseTelInit(t,e,n,i)},t}()},ARa2:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return x})),n.d(e,"b",(function(){return C})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return F})),n.d(e,"g",(function(){return D})),n.d(e,"h",(function(){return S})),n.d(e,"i",(function(){return P}));var i=n("6eT7"),r=n("0q6d");function o(t){return(...e)=>n=>{const i=e[0];let r="function"==typeof i?i(n):i;for(let i=1;i<e.length;i++){const o=e[i];r=t(r,"function"==typeof o?o(n):o)}return r}}const s=o((t,e)=>t+e),a=o((t,e)=>t-e),c=o((t,e)=>t*e);o((t,e)=>t/e);function l(...t){return s.apply(this,t)}function u(...t){return a.apply(this,t)}function d(...t){return c.apply(this,t)}var h,b=n("lFvR"),p=n("hv+n"),f=n("JIBo");function g(t,e){return n=>-1===Object(b.m)(n)?e(n):t(n)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(h||(h={}));const v=Object(p.b)(b.T,t=>{const e=Object(b.m)(t);return new i.a(e,e,e,1).toStringHexRGB()}),m=t=>Object(r.a)(u(v,b.u)(t),0,Object(b.T)(t).length-1),y=Object(f.f)(b.C,b.w,b.t),O=Object(f.f)(l(v,b.u),y),j=t=>{const e=new i.a(.14,.14,.14,1);return Object(p.b)(b.T,e.toStringHexRGB())(t)},x=Object(f.d)(g(Object(p.d)(u(m,b.u),b.T),Object(p.i)(b.T)(0,u(j,d(b.u,5))))),C=Object(f.d)(g(Object(p.d)(m,b.T),Object(p.i)(b.T)(0,u(j,d(b.u,4))))),w=Object(f.d)(g(Object(p.d)(l(m,b.u),b.T),Object(p.i)(b.T)(b.u,u(j,d(b.u,3))))),k=Object(f.d)(g(Object(p.d)(v,b.T),Object(p.i)(b.T)(0,u(j,d(b.u,3))))),F=w,D=Object(f.d)(g(Object(p.d)(O,b.T),Object(p.i)(b.T)(y,u(j,d(b.u,2))))),S=Object(f.d)(g(Object(p.d)(l(O,b.u),b.T),Object(p.i)(b.T)(l(y,b.u),u(j,b.u)))),P=Object(f.d)(g(Object(p.d)(l(O,d(b.u,2)),b.T),Object(p.i)(b.T)(l(y,d(b.u,2)),j)))},B85f:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return g}));var i,r=n("D57K"),o=n("5ZAu"),s=n("QBS5"),a=n("oePG"),c=n("uXNP"),l=n("C5kU"),u=n("6fxl"),d=n("P4Ao"),h=n("o87Z");class b extends d.a{}class p extends(Object(h.a)(b)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(t){t.email="email",t.password="password",t.tel="tel",t.text="text",t.url="url"}(i||(i={}));class f extends p{constructor(){super(...arguments),this.type=i.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&o.a.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}Object(r.e)([Object(s.b)({attribute:"readonly",mode:"boolean"})],f.prototype,"readOnly",void 0),Object(r.e)([Object(s.b)({mode:"boolean"})],f.prototype,"autofocus",void 0),Object(r.e)([s.b],f.prototype,"placeholder",void 0),Object(r.e)([s.b],f.prototype,"type",void 0),Object(r.e)([s.b],f.prototype,"list",void 0),Object(r.e)([Object(s.b)({converter:s.d})],f.prototype,"maxlength",void 0),Object(r.e)([Object(s.b)({converter:s.d})],f.prototype,"minlength",void 0),Object(r.e)([s.b],f.prototype,"pattern",void 0),Object(r.e)([Object(s.b)({converter:s.d})],f.prototype,"size",void 0),Object(r.e)([Object(s.b)({mode:"boolean"})],f.prototype,"spellcheck",void 0),Object(r.e)([a.d],f.prototype,"defaultSlottedNodes",void 0);class g{}Object(u.a)(g,c.a),Object(u.a)(f,l.a,g)},BOCF:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i,r,o=n("+viU"),s=n("ERkP"),a=n.n(s),c=n("OnwC"),l=n("o1qX"),u=n("FGLN"),d=n("3ZGc"),h=n("l4WF"),b=n("Uaaq"),p=n("/48e");!function(t){t.div="div",t.section="section",t.form="form",t.article="article",t.main="main"}(i||(i={})),function(t){t.start="start",t.center="center",t.end="end",t.stretch="stretch"}(r||(r={}));class f extends c.a{constructor(){super(...arguments),this.handledProps={columnCount:void 0,gridColumn:void 0,gutter:void 0,horizontalAlign:void 0,managedClasses:void 0,tag:void 0,verticalAlign:void 0,cssGridPropertyName:void 0},this.update=()=>{this.forceUpdate()}}get tag(){return this.generateHTMLTag()}render(){return a.a.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),style:this.generateStyleAttributes()}),this.renderChildren())}componentDidMount(){this.shouldTrackBreakpoints(this.props)&&h.a.subscribe(this.update)}componentWillUnmount(){h.a.unsubscribe(this.update)}componentDidUpdate(t){this.shouldTrackBreakpoints(this.props)&&!this.shouldTrackBreakpoints(t)?h.a.subscribe(this.update):!this.shouldTrackBreakpoints(this.props)&&this.shouldTrackBreakpoints(t)&&h.a.unsubscribe(this.update)}generateClassNames(){return super.generateClassNames(Object(l.a)(this.props.managedClasses.grid))}shouldTrackBreakpoints(t){return Array.isArray(t.gutter)&&t.gutter.length>1}generateGutter(){return"number"==typeof this.props.gutter?this.props.gutter:Array.isArray(this.props.gutter)?Object(b.b)(this.props.gutter):null}generateAlignment(t){return r[t]}generateStyleAttributes(){const t=this.props.cssGridPropertyName||f.display;return Object.assign(Object.assign({display:t},"grid"===t?this.cssGridStyles():this.msGridStyles()),this.unhandledProps().style)}cssGridStyles(){return{alignItems:this.generateAlignment(this.props.verticalAlign),gridAutoRows:"auto",gridColumn:this.props.gridColumn,gridColumnGap:this.generateGutter()+"px",gridRow:this.props.row,gridTemplateColumns:`repeat(${this.props.columnCount}, 1fr)`,justifyItems:this.generateAlignment(this.props.horizontalAlign)}}msGridStyles(){return{msGridColumns:`1fr (${Object(d.a)(this.generateGutter())} 1fr)[${this.props.columnCount-1}]`,msGridRow:this.props.row,msGridColumn:this.props.gridColumn}}generateHTMLTag(){return i[this.props.tag]||i.div}renderChildren(){return Object(u.a)()?this.props.children:a.a.Children.map(this.props.children,t=>!t||t.type!==p.a||t.props.gutter?t:a.a.cloneElement(t,{gutter:this.props.gutter},t.props.children))}}f.displayName="Grid",f.defaultProps={tag:i.div,gridColumn:2,gutter:8,verticalAlign:r.stretch,horizontalAlign:r.stretch,columnCount:12,managedClasses:{}},f.display=Object(u.a)()?"grid":"-ms-grid";const g=Object(o.a)()(f)},BoLm:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return b}));var i=n("lFvR"),r=n("JIBo"),o=n("hv+n");const s=Object(r.f)(i.C,i.w,i.t,i.v,i.H,i.G,i.E,i.F);function a(t){return e=>{const n=Object(o.a)(e),r=n>=s(e)?-1:1;return Object(o.d)(n+r*t(e),Object(i.T)(e))}}const c=Object(r.d)(a(i.H)),l=Object(r.d)(a(i.G)),u=Object(r.d)(a(i.E)),d=Object(r.d)(a(i.F)),h=Object(r.d)(a(i.I)),b=Object(r.d)(t=>({rest:c(t),hover:l(t),active:u(t),focus:d(t),selected:h(t)}))},C5kU:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a}));var i=n("6BDD"),r=n("+53S");class o{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const s=i.b`
    <span part="end" ${Object(r.b)("endContainer")}>
        <slot
            name="end"
            ${Object(r.b)("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,a=i.b`
    <span part="start" ${Object(r.b)("startContainer")}>
        <slot
            name="start"
            ${Object(r.b)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`},CCFo:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("D57K"),r=n("P4Ao"),o=n("QBS5"),s=n("oePG"),a=n("h/k5"),c=n("Gy7L"),l=n("qibw"),u=n("CzyP");class d extends r.a{constructor(){super(...arguments),this.orientation=a.a.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const n=t[e];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach(t=>{t!==n&&t.setAttribute("tabindex","-1")}):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,n=t.target,i=null!==n?e.indexOf(n):0,r=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===r&&i===r||r===e.length-1&&r===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,n)=>t===e.length&&this.isInsideToolbar&&n===c.i,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===c.h,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,e,t.keyCode))this.moveRightOffGroup();else for(n===e.length&&(n=0);n<e.length&&e.length>1;){if(!e[n].disabled){this.moveToRadioByIndex(e,n);break}if(this.focusedRadio&&n===e.indexOf(this.focusedRadio))break;if(n+1>=e.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,n=n<0?e.length-1:n,this.shouldMoveOffGroupToTheLeft(e,t.keyCode))this.moveLeftOffGroup();else for(;n>=0&&e.length>1;){if(!e[n].disabled){this.moveToRadioByIndex(e,n);break}if(this.focusedRadio&&n===e.indexOf(this.focusedRadio))break;n-1<0?n=e.length-1:n-=1}},this.keydownHandler=t=>{const e=t.key;if(e in c.a&&this.isInsideFoundationToolbar)return!0;switch(e){case c.s:this.checkFocusedRadio();break;case c.e:case c.c:this.direction===l.a.ltr?this.moveRight(t):this.moveLeft(t);break;case c.d:case c.f:this.direction===l.a.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Object(u.a)(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(t=>t.hasAttribute("checked")),e=t?t.length:0;if(e>1){t[e-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach(t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.getAttribute("value")?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter(t=>t.hasAttribute("checked")),e=null!==t?t.length:0;if(e>0&&!n){const n=t[e-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Object(i.e)([Object(o.b)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),Object(i.e)([Object(o.b)({attribute:"disabled",mode:"boolean"})],d.prototype,"disabled",void 0),Object(i.e)([o.b],d.prototype,"name",void 0),Object(i.e)([o.b],d.prototype,"value",void 0),Object(i.e)([o.b],d.prototype,"orientation",void 0),Object(i.e)([s.d],d.prototype,"childItems",void 0),Object(i.e)([s.d],d.prototype,"slottedRadioButtons",void 0);var h=n("6BDD"),b=n("UauI"),p=n("Q5AN");const f=h.b`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===a.a.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Object(b.b)({property:"slottedRadioButtons",filter:Object(p.b)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;var g=n("4X57"),v=n("xY0q");const m=g.a`
  ${Object(v.a)("flex")} :host {
    align-items: flex-start;
    margin: calc(var(--design-unit) * 1px) 0;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`;let y=class extends d{};y=Object(i.e)([Object(r.b)({name:"fluent-radio-group",template:f,styles:m,shadowOptions:{mode:"closed"}})],y)},CR6t:function(t,e){},CiAa:function(t,e,n){"use strict";var i=n("w/m2");n.o(i,"AutoSuggestContext")&&n.d(e,"AutoSuggestContext",(function(){return i.AutoSuggestContext})),n.o(i,"ButtonDirection")&&n.d(e,"ButtonDirection",(function(){return i.ButtonDirection})),n.o(i,"ProgressType")&&n.d(e,"ProgressType",(function(){return i.ProgressType})),n.o(i,"RadioSlot")&&n.d(e,"RadioSlot",(function(){return i.RadioSlot})),e.default=i.default},CzTk:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("oePG"),r=n("9ZcS");class o{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){const e=r.a.findProvider(t);null!==e&&(e.$fastController&&e.$fastController.isConnected?this.attach(t,e):(Array.isArray(e.disconnectedRegistry)||(e.disconnectedRegistry=[]),e.disconnectedRegistry.push(this.attach.bind(this,t))))}unbind(t){const e=this.cache.get(t);e&&i.b.getNotifier(e[0].designSystem).unsubscribe(e[1])}attach(t,e){const n=new s(this.ltr,this.rtl,t);i.b.getNotifier(e.designSystem).subscribe(n,"direction"),n.attach(e.designSystem.direction),this.cache.set(t,[e,n])}}class s{constructor(t,e,n){this.ltr=t,this.rtl=e,this.source=n,this.attached=null}handleChange(t){this.attach(t.direction)}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},CzyP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("qibw");const r=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?i.a.rtl:i.a.ltr}},FGLN:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return d}));var i=n("yqT/"),r=n("Blok");function o(...t){return t.every(t=>t instanceof HTMLElement)}function s(t,e){if(!o(t))return;return Array.from(t.querySelectorAll(e)).filter(t=>null!==t.offsetParent)}let a,c;function l(){if(Object(r.a)(a))return a;if(!Object(i.a)())return a=!1,a;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),a=!0}catch(t){a=!1}finally{document.head.removeChild(t)}return a}function u(){if(Object(r.a)(c))return c;try{c=CSS.supports("display","grid")}catch(t){c=!1}return c}function d(){return Object(i.a)()&&(window.matchMedia("(forced-colors: none)").matches||window.matchMedia("(forced-colors: active)").matches)}},FPTP:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("OOr/"),r=n("+viU"),o=n("rAAu");const s=Object(r.a)(o.a)(i.a)},Fao1:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("+viU"),r=n("pSdj"),o=n("OnwC"),s=n("y2Il"),a=n("o1qX"),c=n("ERkP"),l=n.n(c),u=n("FPTP"),d=n("yR4y"),h=n("e0li");class b extends o.a{constructor(){super(...arguments),this.handledProps={size:void 0,managedClasses:void 0,tag:void 0}}get tag(){return this.props.tag?s.b[this.props.tag]:s.b.h1}get size(){return s.a["_"+this.props.size]}render(){return l.a.createElement(u.a,Object.assign({},this.unhandledProps(),{tag:this.tag,size:this.size,className:this.generateClassNames()}),this.props.children)}generateClassNames(){const t=this.props.managedClasses;return super.generateClassNames(Object(a.a)(t.heading,t["heading__"+this.props.size]))}}b.displayName=d.a+"Heading",b.defaultProps={size:h.a._1,managedClasses:{}};var p=b;const f=Object(i.a)(r.a)(p)},GaXA:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fz//"),r=n("MF9s"),o=n("ZEO0"),s=n("objN");function a(t){return Object.assign(Object.assign({opacity:Object(i.c)(r.q)},Object(o.b)()),{[s.D]:{opacity:"1",color:s.a.disabledText}})}},Gy7L:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return a})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return u})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return h})),n.d(e,"p",(function(){return b})),n.d(e,"q",(function(){return p})),n.d(e,"r",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return y})),n.d(e,"s",(function(){return O})),n.d(e,"a",(function(){return j})),function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(i||(i={}));const r=40,o=37,s=39,a=38,c=35,l=13,u=27,d=36,h=34,b=33,p=32,f=9,g="ArrowDown",v="ArrowLeft",m="ArrowRight",y="ArrowUp",O="Enter",j={ArrowDown:g,ArrowLeft:v,ArrowRight:m,ArrowUp:y}},HOx9:function(t,e,n){"use strict";(function(t){n.d(e,"h",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return d}));var i="undefined";function r(e){var n=typeof globalThis!==i&&globalThis?globalThis:typeof self!==i&&self?self:typeof window!==i&&window?window:typeof t!==i&&t?t:null;return n&&n[e]?n[e]:"window"===e&&o()?window:null}function o(){return Boolean("object"==typeof window&&window)}function s(){return o()?window:r("window")}function a(){return Boolean("object"==typeof document&&document)?document:r("document")}function c(){return Boolean("object"==typeof navigator&&navigator)}function l(){return c()?navigator:r("navigator")}function u(){return Boolean("object"==typeof JSON&&JSON||null!==r("JSON"))}function d(){return u()?JSON||r("JSON"):null}}).call(this,n("fRV1"))},HZZz:function(t,e,n){"use strict";n.d(e,"fontWeight",(function(){return i}));const i=n("HzrG").c},Hq6N:function(t,e,n){"use strict";n.d(e,"Page",(function(){return c}));var i=n("ERkP"),r=n.n(i),o=n("OnwC"),s=n("o1qX"),a=n("FGLN");class c extends o.a{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,margin:void 0,maxWidth:void 0,cssGridPropertyName:void 0}}render(){return r.a.createElement("div",Object.assign({},this.generateAttributes()),this.props.children)}generateAttributes(){const t=`${this.props.margin} minmax(0, ${this.props.maxWidth}) ${this.props.margin}`,e=Object.assign(Object.assign({},this.unhandledProps()),{className:super.generateClassNames(Object(s.a)(this.props.managedClasses.page))});return Object.assign(Object.assign({},e),{style:Object.assign({display:"grid"===this.props.cssGridPropertyName?"grid":"-ms-grid"===this.props.cssGridPropertyName?"-ms-grid":Object(a.a)()?"grid":"-ms-grid",gridTemplateColumns:t,msGridColumns:t},e.style)})}}c.displayName="Page",c.defaultProps={margin:"minmax(5vw, 1fr)",maxWidth:"1600px",managedClasses:{}}},HzrG:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return d}));var i=n("qibw"),r=n("mObi"),o=n("dVu6");var s=n("LB+V"),a=n("MLPK");const c={light:100,semilight:200,normal:400,semibold:600,bold:700},l={backgroundColor:a.b,contrast:0,density:0,designUnit:4,baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,direction:i.a.ltr,cornerRadius:2,elevatedCornerRadius:4,focusOutlineWidth:2,fontWeight:c,disabledOpacity:.3,outlineWidth:1,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],accentBaseColor:"#0078D4",accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundDarkIndex:93,neutralForegroundLightIndex:0,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25},u=t=>{return(e=l,Object(r.a)(t=>Object(o.a)(e,t)))(t);var e};function d(t,e){return Object(s.a)(t)?t(e):t}e.b=l},IQrE:function(t,e,n){"use strict";var i=n("mfsn"),r="object"==typeof self&&self&&self.Object===Object&&self,o=i.a||r||Function("return this")();e.a=o},Ibl0:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i,r=n("6eT7"),o=n("swXE"),s=n("PT2o"),a=n("RN7+"),c=n("SiT+"),l=n("0q6d");function u(t,e,n=18){const i=Object(o.i)(t);let r=i.c+e*n;return r<0&&(r=0),Object(o.e)(new c.a(i.l,r,i.h))}function d(t,e){return t*e}function h(t,e){return new r.a(d(t.r,e.r),d(t.g,e.g),d(t.b,e.b),1)}function b(t,e){return t<.5?Object(l.a)(2*e*t,0,1):Object(l.a)(1-2*(1-e)*(1-t),0,1)}function p(t,e){return new r.a(b(t.r,e.r),b(t.g,e.g),b(t.b,e.b),1)}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(i||(i={}));var f,g=n("tq/8"),v=n("xAa8");function m(t,e,n,i){if(isNaN(t)||t<=0)return n;if(t>=1)return i;switch(e){case f.HSL:return Object(o.b)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new s.a(Object(l.f)(t,e.h,n.h),Object(l.e)(t,e.s,n.s),Object(l.e)(t,e.l,n.l))}(t,Object(o.f)(n),Object(o.f)(i)));case f.HSV:return Object(o.c)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new g.a(Object(l.f)(t,e.h,n.h),Object(l.e)(t,e.s,n.s),Object(l.e)(t,e.v,n.v))}(t,Object(o.g)(n),Object(o.g)(i)));case f.XYZ:return Object(o.m)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new v.a(Object(l.e)(t,e.x,n.x),Object(l.e)(t,e.y,n.y),Object(l.e)(t,e.z,n.z))}(t,Object(o.l)(n),Object(o.l)(i)));case f.LAB:return Object(o.d)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new a.a(Object(l.e)(t,e.l,n.l),Object(l.e)(t,e.a,n.a),Object(l.e)(t,e.b,n.b))}(t,Object(o.h)(n),Object(o.h)(i)));case f.LCH:return Object(o.e)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new c.a(Object(l.e)(t,e.l,n.l),Object(l.e)(t,e.c,n.c),Object(l.f)(t,e.h,n.h))}(t,Object(o.i)(n),Object(o.i)(i)));default:return function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new r.a(Object(l.e)(t,e.r,n.r),Object(l.e)(t,e.g,n.g),Object(l.e)(t,e.b,n.b),Object(l.e)(t,e.a,n.a))}(t,n,i)}}!function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(f||(f={}));class y{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let n=0;n<t.length;n++)0===n?e[n]={color:t[n],position:0}:n===t.length-1?e[n]={color:t[n],position:1}:e[n]={color:t[n],position:n*(1/(t.length-1))};return new y(e)}getColor(t,e=f.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let n=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(n=e);let i=n+1;i>=this.stops.length&&(i=this.stops.length-1);return m((t-this.stops[n].position)*(1/(this.stops[i].position-this.stops[n].position)),e,this.stops[n].color,this.stops[i].color)}trim(t,e,n=f.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new y([{color:this.getColor(t,n),position:0}]);const i=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=t&&this.stops[n].position<=e&&i.push(this.stops[n]);if(0===i.length)return new y([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);i[0].position!==t&&i.unshift({color:this.getColor(t),position:t}),i[i.length-1].position!==e&&i.push({color:this.getColor(e),position:e});const r=e-t,o=new Array(i.length);for(let e=0;e<i.length;e++)o[e]={color:i[e].color,position:(i[e].position-t)/r};return new y(o)}findNextColor(t,e,n=!1,i=f.RGB,r=.005,s=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const a=this.getColor(t,i),c=n?0:1,l=this.getColor(c,i);if(Object(o.a)(a,l)<=e)return c;let u=n?0:t,d=n?t:0,h=c,b=0;for(;b<=s;){h=Math.abs(d-u)/2+u;const t=this.getColor(h,i),s=Object(o.a)(a,t);if(Math.abs(s-e)<=r)return h;s>e?n?u=h:d=h:n?d=h:u=h,b++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new y(t)}sortColorScaleStops(t){return t.sort((t,e)=>{const n=t.position,i=e.position;return n<i?-1:n>i?1:0})}}var O=n("YBl9");class j{constructor(t){this.config=Object.assign({},j.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const n in t)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(t[n])||(this.config[n]=t[n],e=!0):t[n]!==this.config[n]&&(this.config[n]=t[n],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=Object(o.f)(this.config.baseColor),e=new y([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=e.getColor(0),i=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(n=u(n,this.config.saturationLight),i=u(i,this.config.saturationDark)),0!==this.config.multiplyLight){const t=h(this.config.baseColor,n);n=m(this.config.multiplyLight,this.config.interpolationMode,n,t)}if(0!==this.config.multiplyDark){const t=h(this.config.baseColor,i);i=m(this.config.multiplyDark,this.config.interpolationMode,i,t)}if(0!==this.config.overlayLight){const t=p(this.config.baseColor,n);n=m(this.config.overlayLight,this.config.interpolationMode,n,t)}if(0!==this.config.overlayDark){const t=p(this.config.baseColor,i);i=m(this.config.overlayDark,this.config.interpolationMode,i,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new y([{position:0,color:this.config.baseColor},{position:1,color:i.clamp()}]):this.config.baseScalePosition>=1?new y([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new y([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:i.clamp()}]):new y([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:i.clamp()}])}}j.defaultPaletteConfig={baseColor:Object(O.d)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new r.a(1,1,1,1),scaleColorDark:new r.a(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},j.greyscalePaletteConfig={baseColor:Object(O.d)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new r.a(1,1,1,1),scaleColorDark:new r.a(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};j.defaultPaletteConfig.scaleColorLight,j.defaultPaletteConfig.scaleColorDark;class x{constructor(t){this.palette=[],this.config=Object.assign({},x.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=new r.a(.14,.14,.14,1),n=new j(Object.assign(Object.assign({},j.greyscalePaletteConfig),{baseColor:e,baseScalePosition:86/94,steps:t})).palette,i=(Object(o.j)(this.config.baseColor)+Object(o.f)(this.config.baseColor).l)/2,a=this.matchRelativeLuminanceIndex(i,n)/(t-1),c=this.matchRelativeLuminanceIndex(.14,n)/(t-1),l=Object(o.f)(this.config.baseColor),u=Object(o.b)(s.a.fromObject({h:l.h,s:l.s,l:.14})),d=Object(o.b)(s.a.fromObject({h:l.h,s:l.s,l:.06})),h=new Array(5);h[0]={position:0,color:new r.a(1,1,1,1)},h[1]={position:a,color:this.config.baseColor},h[2]={position:c,color:u},h[3]={position:.99,color:d},h[4]={position:1,color:new r.a(0,0,0,1)};const b=new y(h);this.palette=new Array(t);for(let e=0;e<t;e++){const n=b.getColor(e/(t-1),f.RGB);this.palette[e]=n}}matchRelativeLuminanceIndex(t,e){let n=Number.MAX_VALUE,i=0,r=0;const s=e.length;for(;r<s;r++){const s=Math.abs(Object(o.j)(e[r])-t);s<n&&(n=s,i=r)}return i}}x.defaultPaletteConfig={baseColor:Object(O.d)("#808080"),steps:94}},J4ZL:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("rRWH"),r=n("9CwC"),o=n("odxL"),s=n("SP+O"),a=n("zP2P"),c=n("objN");const l={button:{"max-width":"100%","min-width":"initial"},button_contentRegion:{transition:"all 600ms cubic-bezier(0.19, 1, 0.22, 1)",display:"flex","align-items":"center"}},u={actionTrigger:{"& $actionTrigger_glyph":Object.assign({},c.o),"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[c.D]:Object.assign({},c.B)}},"&$actionTrigger__justified, &$actionTrigger__lightweight":{"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[c.D]:{fill:"Highlight !important"}}}}},actionTrigger_glyph:{display:"inline-block",position:"relative",width:a.b,height:a.b,"flex-shrink":"0"},actionTrigger__primary:{"& $actionTrigger_glyph":{fill:r.a,[c.D]:Object.assign({},c.B)},"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[c.D]:{fill:"Highlight !important"}}},"&$actionTrigger__disabled $actionTrigger_glyph":Object.assign({fill:r.a},c.l)},actionTrigger__lightweight:{"& $actionTrigger_glyph":{fill:o.d},"&:hover":{"& $actionTrigger_glyph":{fill:o.b}},"&:active":{"& $actionTrigger_glyph":{fill:o.a}},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:o.d}},actionTrigger__justified:{"& $actionTrigger_glyph":{fill:o.d},"&:hover":{"& $actionTrigger_glyph":{fill:o.b}},"&:active":{"& $actionTrigger_glyph":{fill:o.a}},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:o.d}},actionTrigger__outline:{"& $actionTrigger_glyph":{fill:s.c},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:s.c}},actionTrigger__stealth:{"& $actionTrigger_glyph":{fill:s.c},"&$actionTrigger__disabled $actionTrigger_glyph":Object.assign({fill:s.c},c.l)},actionTrigger__disabled:{"& $actionTrigger_glyph":Object.assign({},c.l)},actionTrigger__hasGlyphAndContent:{"& $actionTrigger_glyph":{"margin-right":Object(i.c)(Object(a.f)(),""),"margin-left":Object(i.c)("",Object(a.f)())}}};e.b=u},JIBo:function(t,e,n){"use strict";n.d(e,"a",(function(){return et})),n.d(e,"d",(function(){return it})),n.d(e,"i",(function(){return rt})),n.d(e,"g",(function(){return at})),n.d(e,"c",(function(){return ct})),n.d(e,"e",(function(){return lt})),n.d(e,"h",(function(){return ut})),n.d(e,"f",(function(){return dt})),n.d(e,"b",(function(){return ht}));var i=n("YBl9"),r=n("swXE"),o=n("xR5m"),s=n("PeVN");var a,c=function(t){if(!Object(s.a)(t))return!1;var e=Object(o.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},l=n("IQrE"),u=l.a["__core-js_shared__"],d=(a=/[^.]+$/.exec(u&&u.keys&&u.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"";var h=function(t){return!!d&&d in t},b=Function.prototype.toString;var p=function(t){if(null!=t){try{return b.call(t)}catch(t){}try{return t+""}catch(t){}}return""},f=/^\[object .+?Constructor\]$/,g=Function.prototype,v=Object.prototype,m=g.toString,y=v.hasOwnProperty,O=RegExp("^"+m.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var j=function(t){return!(!Object(s.a)(t)||h(t))&&(c(t)?O:f).test(p(t))};var x=function(t,e){return null==t?void 0:t[e]};var C=function(t,e){var n=x(t,e);return j(n)?n:void 0},w=C(Object,"create");var k=function(){this.__data__=w?w(null):{},this.size=0};var F=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},D=Object.prototype.hasOwnProperty;var S=function(t){var e=this.__data__;if(w){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return D.call(e,t)?e[t]:void 0},P=Object.prototype.hasOwnProperty;var T=function(t){var e=this.__data__;return w?void 0!==e[t]:P.call(e,t)};var $=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=w&&void 0===e?"__lodash_hash_undefined__":e,this};function A(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}A.prototype.clear=k,A.prototype.delete=F,A.prototype.get=S,A.prototype.has=T,A.prototype.set=$;var B=A;var E=function(){this.__data__=[],this.size=0};var R=function(t,e){return t===e||t!=t&&e!=e};var L=function(t,e){for(var n=t.length;n--;)if(R(t[n][0],e))return n;return-1},_=Array.prototype.splice;var N=function(t){var e=this.__data__,n=L(e,t);return!(n<0)&&(n==e.length-1?e.pop():_.call(e,n,1),--this.size,!0)};var M=function(t){var e=this.__data__,n=L(e,t);return n<0?void 0:e[n][1]};var I=function(t){return L(this.__data__,t)>-1};var z=function(t,e){var n=this.__data__,i=L(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function H(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}H.prototype.clear=E,H.prototype.delete=N,H.prototype.get=M,H.prototype.has=I,H.prototype.set=z;var V=H,G=C(l.a,"Map");var q=function(){this.size=0,this.__data__={hash:new B,map:new(G||V),string:new B}};var U=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var W=function(t,e){var n=t.__data__;return U(e)?n["string"==typeof e?"string":"hash"]:n.map};var Q=function(t){var e=W(this,t).delete(t);return this.size-=e?1:0,e};var X=function(t){return W(this,t).get(t)};var Z=function(t){return W(this,t).has(t)};var K=function(t,e){var n=W(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function J(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}J.prototype.clear=q,J.prototype.delete=Q,J.prototype.get=X,J.prototype.has=Z,J.prototype.set=K;var Y=J;function tt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var s=t.apply(this,i);return n.cache=o.set(r,s)||o,s};return n.cache=new(tt.Cache||Y),n}tt.Cache=Y;var et,nt=tt;function it(t){const e=nt(t);return function(t){return"function"==typeof t?n=>e(Object.assign({},n,{backgroundColor:t(n)})):e(t)}}function rt(t,e){const n=nt(e);return e=>"function"==typeof e?i=>n(Object.assign({},i,{backgroundColor:e(i)}))[t]:n(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(et||(et={}));const ot=new Map;function st(t){const e=ot.get(t);if(!e){let e=Object(i.d)(t);if(null===e&&(e=Object(i.e)(t)),null===e)throw new Error(t+' cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"');return ot.set(t,e),e}return e}function at(t){return Object(i.a)(t)||Object(i.b)(t)}function ct(t,e){return st(t).equalValue(st(e))}const lt=nt((t,e)=>Object(r.a)(st(t),st(e)),(t,e)=>t+e);function ut(t){return Object(r.k)(st(t))}function dt(...t){return e=>Math.max.apply(null,t.map(t=>t(e)))}const ht=(t,e,n)=>Math.min(Math.max(t,e),n)},KHt8:function(t,e,n){"use strict";n.d(e,"b",(function(){return D})),n.d(e,"a",(function(){return S}));var i=n("D57K"),r=n("P4Ao"),o=n("5ZAu"),s=n("QBS5"),a=n("Gy7L"),c=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],l=c.join(","),u="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,d=function(t,e,n){var i=Array.prototype.slice.apply(t.querySelectorAll(l));return e&&u.call(t,l)&&i.unshift(t),i=i.filter(n)},h=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:"AUDIO"!==t.nodeName&&"VIDEO"!==t.nodeName&&"DETAILS"!==t.nodeName||null!==t.getAttribute("tabindex")?t.tabIndex:0:e},b=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},p=function(t){return"INPUT"===t.tagName},f=function(t){return function(t){return p(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||t.ownerDocument,i=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=i(window.CSS.escape(t.name));else try{e=i(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!r||r===t}(t)},g=function(t,e){return!(e.disabled||function(t){return p(t)&&"hidden"===t.type}(e)||function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0;var n=u.call(t,"details>summary:first-of-type")?t.parentElement:t;if(u.call(n,"details:not([open]) *"))return!0;if(e&&"full"!==e){if("non-zero-area"===e){var i=t.getBoundingClientRect(),r=i.width,o=i.height;return 0===r&&0===o}}else for(;t;){if("none"===getComputedStyle(t).display)return!0;t=t.parentElement}return!1}(e,t.displayCheck)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e))},v=function(t,e){return!(!g(t,e)||f(e)||h(e)<0)},m=function(t,e){var n=[],i=[];return d(t,(e=e||{}).includeContainer,v.bind(null,e)).forEach((function(t,e){var r=h(t);0===r?n.push(t):i.push({documentOrder:e,tabIndex:r,node:t})})),i.sort(b).map((function(t){return t.node})).concat(n)};class y extends r.a{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.onChildListChange=t=>{t.length&&(this.tabbableElements=m(this))},this.trapFocusChanged=()=>{this.trapFocus?(this.tabbableElements=m(this),document.addEventListener("focusin",this.handleDocumentFocus),this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()):document.removeEventListener("focusin",this.handleDocumentFocus)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.keyCode){case a.m:this.dismiss();break;case a.r:this.handleTabKeyDown(t)}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus)return;const e=this.tabbableElements.length;if(0===e)return this.dialog.focus(),void t.preventDefault();t.shiftKey&&t.target===this.tabbableElements[0]?(this.tabbableElements[e-1].focus(),t.preventDefault()):t.shiftKey||t.target!==this.tabbableElements[e-1]||(this.tabbableElements[0].focus(),t.preventDefault())},this.focusFirstElement=()=>{0===this.tabbableElements.length?this.dialog.focus():this.tabbableElements[0].focus()},this.shouldForceFocus=t=>!this.hidden&&!this.contains(t)}dismiss(){this.$emit("dismiss")}show(){this.hidden=!1}hide(){this.hidden=!0}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),document.addEventListener("keydown",this.handleDocumentKeydown),o.a.queueUpdate(this.trapFocusChanged)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.trapFocus&&document.removeEventListener("focusin",this.handleDocumentFocus)}}Object(i.e)([Object(s.b)({mode:"boolean"})],y.prototype,"modal",void 0),Object(i.e)([Object(s.b)({mode:"boolean"})],y.prototype,"hidden",void 0),Object(i.e)([Object(s.b)({attribute:"trap-focus",mode:"boolean"})],y.prototype,"trapFocus",void 0),Object(i.e)([Object(s.b)({attribute:"aria-describedby"})],y.prototype,"ariaDescribedby",void 0),Object(i.e)([Object(s.b)({attribute:"aria-labelledby"})],y.prototype,"ariaLabelledby",void 0),Object(i.e)([Object(s.b)({attribute:"aria-label"})],y.prototype,"ariaLabel",void 0);var O=n("6BDD"),j=n("6vBc"),x=n("+53S");const C=O.b`
    <div class="positioning-region" part="positioning-region">
        ${Object(j.a)(t=>t.modal,O.b`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    tabindex="-1"
                    @click="${t=>t.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            class="control"
            part="control"
            aria-modal="${t=>t.modal}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-label="${t=>t.ariaLabel}"
            ${Object(x.b)("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;var w=n("4X57"),k=n("cQsl");const F=w.a`
  :host([hidden]) {
    display: none;
  }

  :host {
    --elevation: 14;
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    ${k.a}
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(var(--elevated-corner-radius) * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: var(--background-color);
    z-index: 1;
    border: calc(var(--outline-width) * 1px) solid transparent;
  }
`;let D=class extends y{};D=Object(i.e)([Object(r.b)({name:"fluent-dialog",template:C,styles:F})],D);const S=F},Ki0l:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("4X57"),r=n("kL0l");const o=i.a`
  :host([appearance='filled']:not(.disabled):active)::after,
  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: calc(var(--focus-outline-width) * 1px) solid ${r.c.var};
    border-bottom-left-radius: calc(var(--corner-radius) * 1px);
    border-bottom-right-radius: calc(var(--corner-radius) * 1px);
    z-index: 2;
    transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
  }

  :host([appearance='filled']:not(.disabled):active)::after {
    left: 50%;
    width: 40%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    left: 0;
    width: 100%;
  }
`},"Kt+H":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));class i{constructor(t,e,n){this.name=t,this.value=e,this.host=n,this.propertyName="--"+t,this.var=`var(${this.propertyName})`}bind(t){const e=this.host(t);null!==e&&("function"==typeof e.registerCSSCustomProperty?e.registerCSSCustomProperty(this):(Array.isArray(e.disconnectedCSSCustomPropertyRegistry)||(e.disconnectedCSSCustomPropertyRegistry=[]),e.disconnectedCSSCustomPropertyRegistry.push(this)))}unbind(t){const e=this.host(t);null!==e&&"function"==typeof e.unregisterCSSCustomProperty&&e.unregisterCSSCustomProperty(this)}}function r(t,e,n){return new i(t,e,n)}},LCcN:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("HzrG"),r=n("MF9s"),o=n("6u3Q");function s(t,e,n,s,a,c){return l=>{const u=Object(i.a)(t,l),d=Object(o.e)(l)?-1:1,h=Object(o.h)(r.k)(u)(o.g)(()=>d)(Object(o.f)(Object(i.a)(e,l)))(l),b=Object(o.c)(t,h)(l),p=Object(i.a)(n,l),f=Object(i.a)(s,l),g=Object(i.a)(a,l),v=Object(i.a)(c,l);return function(t,e,n,i,r,s,a){const c=t+n*Math.abs(i-r),l=1===n?i<r:n*i>n*r,u=l?t:c,d=l?c:t,h=u+n*s,b=u+n*a;return{rest:Object(o.d)(u,e),hover:Object(o.d)(d,e),active:Object(o.d)(h,e),focus:Object(o.d)(b,e)}}(b,u,d,p,f,g,v)}}},LD6M:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return h}));var i=n("MF9s"),r=n("6QMD"),o=n("6u3Q");const s=Object(r.f)(i.F,i.z,i.w,i.y,i.K,i.J,i.H,i.I);function a(t){return e=>{const n=Object(o.a)(e),r=n>=s(e)?-1:1;return Object(o.d)(n+r*t(e),Object(i.W)(e))}}const c=Object(r.d)(a(i.K)),l=Object(r.d)(a(i.J)),u=Object(r.d)(a(i.H)),d=Object(r.d)(a(i.I)),h=Object(r.d)(a(i.L));Object(r.d)(t=>({rest:c(t),hover:l(t),active:u(t),focus:d(t),selected:h(t)}))},MF9s:function(t,e,n){"use strict";n.d(e,"t",(function(){return r})),n.d(e,"k",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"o",(function(){return a})),n.d(e,"r",(function(){return c})),n.d(e,"W",(function(){return l})),n.d(e,"j",(function(){return u})),n.d(e,"p",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return b})),n.d(e,"X",(function(){return p})),n.d(e,"s",(function(){return f})),n.d(e,"q",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return y})),n.d(e,"e",(function(){return O})),n.d(e,"i",(function(){return j})),n.d(e,"h",(function(){return x})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return w})),n.d(e,"F",(function(){return k})),n.d(e,"z",(function(){return F})),n.d(e,"w",(function(){return D})),n.d(e,"y",(function(){return S})),n.d(e,"G",(function(){return P})),n.d(e,"D",(function(){return T})),n.d(e,"C",(function(){return $})),n.d(e,"A",(function(){return A})),n.d(e,"B",(function(){return B})),n.d(e,"E",(function(){return E})),n.d(e,"K",(function(){return R})),n.d(e,"J",(function(){return L})),n.d(e,"H",(function(){return _})),n.d(e,"I",(function(){return N})),n.d(e,"L",(function(){return M})),n.d(e,"O",(function(){return I})),n.d(e,"M",(function(){return z})),n.d(e,"N",(function(){return H})),n.d(e,"n",(function(){return V})),n.d(e,"x",(function(){return G})),n.d(e,"R",(function(){return q})),n.d(e,"P",(function(){return U})),n.d(e,"Q",(function(){return W})),n.d(e,"v",(function(){return Q})),n.d(e,"V",(function(){return X})),n.d(e,"U",(function(){return Z})),n.d(e,"S",(function(){return K})),n.d(e,"u",(function(){return J})),n.d(e,"T",(function(){return Y}));var i=n("HzrG");function r(t){return e=>e&&void 0!==e[t]?e[t]:i.b[t]}const o=r("backgroundColor"),s=r("accentBaseColor"),a=r("cornerRadius"),c=r("elevatedCornerRadius"),l=r("neutralPalette"),u=r("accentPalette"),d=(r("contrast"),r("designUnit")),h=r("baseHeightMultiplier"),b=r("baseHorizontalSpacingMultiplier"),p=(r("direction"),r("outlineWidth")),f=r("focusOutlineWidth"),g=r("disabledOpacity"),v=(r("accentFillRestDelta"),r("accentFillHoverDelta")),m=r("accentFillActiveDelta"),y=r("accentFillFocusDelta"),O=r("accentFillSelectedDelta"),j=r("accentForegroundRestDelta"),x=r("accentForegroundHoverDelta"),C=r("accentForegroundActiveDelta"),w=r("accentForegroundFocusDelta"),k=r("neutralFillRestDelta"),F=r("neutralFillHoverDelta"),D=r("neutralFillActiveDelta"),S=r("neutralFillFocusDelta"),P=r("neutralFillSelectedDelta"),T=r("neutralFillInputRestDelta"),$=r("neutralFillInputHoverDelta"),A=r("neutralFillInputActiveDelta"),B=r("neutralFillInputFocusDelta"),E=r("neutralFillInputSelectedDelta"),R=r("neutralFillStealthRestDelta"),L=r("neutralFillStealthHoverDelta"),_=r("neutralFillStealthActiveDelta"),N=r("neutralFillStealthFocusDelta"),M=r("neutralFillStealthSelectedDelta"),I=r("neutralFillToggleHoverDelta"),z=r("neutralFillToggleActiveDelta"),H=r("neutralFillToggleFocusDelta"),V=r("baseLayerLuminance"),G=r("neutralFillCardDelta"),q=(r("neutralForegroundDarkIndex"),r("neutralForegroundLightIndex"),r("neutralForegroundHoverDelta")),U=r("neutralForegroundActiveDelta"),W=r("neutralForegroundFocusDelta"),Q=r("neutralDividerRestDelta"),X=r("neutralOutlineRestDelta"),Z=r("neutralOutlineHoverDelta"),K=r("neutralOutlineActiveDelta"),J=r("fontWeight"),Y=r("neutralOutlineFocusDelta")},MLPK:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var i=n("YBl9");const r="#FFFFFF",o="#000000",s={steps:94,clipLight:0,clipDark:0};Object.assign({},s),Object.assign(Object.assign({},s),{baseColor:Object(i.d)("#0078D4")})},MZhw:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return C}));var i,r,o,s=n("mIHV"),a=n("6eT7"),c=n("0q6d"),l=n("MF9s"),u=n("6u3Q"),d=n("6QMD");function h(t,e){return n=>-1===Object(l.n)(n)?e(n):t(n)}!function(t){t[t.L1=0]="L1",t[t.L1Alt=3]="L1Alt",t[t.L2=10]="L2",t[t.L3=13]="L3",t[t.L4=16]="L4"}(i||(i={})),function(t){t[t.L1=76]="L1",t[t.L1Alt=76]="L1Alt",t[t.L2=79]="L2",t[t.L3=82]="L3",t[t.L4=85]="L4"}(r||(r={})),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(o||(o={}));const b=Object(u.b)(l.W,t=>{const e=Object(l.n)(t);return new a.a(e,e,e,1).toStringHexRGB()}),p=t=>Object(c.a)(Object(s.d)(b,l.x)(t),0,Object(l.W)(t).length-1),f=Object(d.f)(l.F,l.z,l.w),g=Object(d.f)(Object(s.a)(b,l.x),f),v=t=>{const e=new a.a(.14,.14,.14,1);return Object(u.b)(l.W,e.toStringHexRGB())(t)},m=Object(d.d)(h(Object(u.d)(Object(s.d)(p,l.x),l.W),Object(u.i)(l.W)(0,Object(s.d)(v,Object(s.c)(l.x,5))))),y=Object(d.d)(h(Object(u.d)(p,l.W),Object(u.i)(l.W)(0,Object(s.d)(v,Object(s.c)(l.x,4))))),O=Object(d.d)(h(Object(u.d)(Object(s.a)(p,l.x),l.W),Object(u.i)(l.W)(l.x,Object(s.d)(v,Object(s.c)(l.x,3))))),j=Object(d.d)(h(Object(u.d)(b,l.W),Object(u.i)(l.W)(0,Object(s.d)(v,Object(s.c)(l.x,3))))),x=Object(d.d)(h(Object(u.d)(g,l.W),Object(u.i)(l.W)(f,Object(s.d)(v,Object(s.c)(l.x,2))))),C=(Object(d.d)(h(Object(u.d)(Object(s.a)(g,l.x),l.W),Object(u.i)(l.W)(Object(s.a)(f,l.x),Object(s.d)(v,l.x)))),Object(d.d)(h(Object(u.d)(Object(s.a)(g,Object(s.c)(l.x,2)),l.W),Object(u.i)(l.W)(Object(s.a)(f,Object(s.c)(l.x,2)),v))))},NS3c:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.justified="justified",t.lightweight="lightweight",t.outline="outline",t.primary="primary",t.stealth="stealth"}(i||(i={}))},NYhc:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.menuitem="menuitem",t.menuitemcheckbox="menuitemcheckbox",t.menuitemradio="menuitemradio"}(i||(i={}))},Nc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var i=n("/w5G"),r=n("Q5AN");class o extends r.a{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function s(t){return"string"==typeof t&&(t={property:t}),new i.a("fast-children",o,t)}},Ne8q:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const i=document.createRange();class r{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,n=this.lastChild;let i,r=this.firstChild;for(;r!==n;)i=r.nextSibling,e.insertBefore(r,t),r=i;e.insertBefore(n,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.appendChild(i),i=n;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.removeChild(i),i=n;t.removeChild(e);const r=this.behaviors,o=this.source;for(let t=0,e=r.length;t<e;++t)r[t].unbind(o)}bind(t,e){const n=this.behaviors;if(this.source!==t)if(null!==this.source){const i=this.source;this.source=t,this.context=e;for(let r=0,o=n.length;r<o;++r){const o=n[r];o.unbind(i),o.bind(t,e)}}else{this.source=t,this.context=e;for(let i=0,r=n.length;i<r;++i)n[i].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let n=0,i=t.length;n<i;++n)t[n].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){i.setStartBefore(t[0].firstChild),i.setEndAfter(t[t.length-1].lastChild),i.deleteContents();for(let e=0,n=t.length;e<n;++e){const n=t[e],i=n.behaviors,r=n.source;for(let t=0,e=i.length;t<e;++t)i[t].unbind(r)}}}}},"O/9U":function(t,e,n){"use strict";function i(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function r(t){const e=this.spillover,n=e.indexOf(t);-1!==n&&e.splice(n,1)}function o(t){const e=this.spillover,n=this.source;for(let i=0,r=e.length;i<r;++i)e[i].handleChange(n,t)}function s(t){return-1!==this.spillover.indexOf(t)}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));class a{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=i,this.unsubscribe=r,this.notify=o,this.has=s,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,n=this.sub2,i=this.source;void 0!==e&&e.handleChange(i,t),void 0!==n&&n.handleChange(i,t)}}class c{constructor(t){this.subscribers={},this.source=t}notify(t){const e=this.subscribers[t];void 0!==e&&e.notify(t)}subscribe(t,e){let n=this.subscribers[e];void 0===n&&(this.subscribers[e]=n=new a(this.source)),n.subscribe(t)}unsubscribe(t,e){const n=this.subscribers[e];void 0!==n&&n.unsubscribe(t)}}},OJLQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("4zka"),r=n("D57K"),o=n("A6yc"),s=n("kyf+"),a=i.a.isFunction;function c(t,e){for(var n=[],r=null,o=t.getNext();o;){var s=o.getPlugin();s&&(r&&a(r.setNextPlugin)&&a(s.processTelemetry)&&r.setNextPlugin(s),a(s.isInitialized)&&s.isInitialized()||n.push(s),r=s,o=o.getNext())}i.a.arrForEach(n,(function(n){n.initialize(t.getCfg(),t.core(),e,t.getNext())}))}function l(t){return t.sort((function(t,e){var n=0,i=a(e.processTelemetry);return a(t.processTelemetry)?n=i?t.priority-e.priority:1:i&&(n=-1),n}))}var u=i.a.arrForEach,d=i.a.objDefineAccessors;function h(t,e){e&&e.length>0&&(function(t){u(t,(function(t){if(t.priority<500)throw Error("Channel has invalid priority"+t.identifier)}))}(e=e.sort((function(t,e){return t.priority-e.priority}))),t.push(e))}var b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.identifier="ChannelControllerPlugin",e.priority=500,e}return r.f(e,t),e.prototype.processTelemetry=function(t,e){var n=this;this._channelQueue&&u(this._channelQueue,(function(i){i.length>0&&n._getTelCtx(e).createNew(i).processNext(t)}))},e.prototype.getChannelControls=function(){return this._channelQueue},e.prototype.initialize=function(e,n,r){if(!this.isInitialized()){t.prototype.initialize.call(this,e,n,r),e.isCookieUseDisabled&&i.a.disableCookies();var o=this._channelQueue=function(t,e){var n=[];if(t&&u(t,(function(t){return h(n,t)})),e){var i=[];u(e,(function(t){t.priority>500&&i.push(t)})),h(n,i)}return n}((e||{}).channels,r);u(o,(function(t){return c(new s.a(t,e,n),r)}))}},e._staticInit=(d(e.prototype,"ChannelControls",e.prototype.getChannelControls),void d(e.prototype,"channelQueue",e.prototype.getChannelControls)),e}(o.a),p=i.a.arrForEach,f=i.a.isNullOrUndefined,g=function(){function t(){var t=!1;this._extensions=new Array,this._channelController=new b,this.isInitialized=function(){return t},this._setInit=function(e){t=e},this._eventQueue=[]}return t.prototype.initialize=function(t,e,n,r){if(this.isInitialized())throw Error("Core should not be initialized more than once");if(!t||f(t.instrumentationKey))throw Error("Please provide instrumentation key");this.config=t;var o=this._channelController;r||(r=i.a.objCreate({addNotificationListener:function(t){},removeNotificationListener:function(t){},eventsSent:function(t){},eventsDiscarded:function(t,e){}})),this._notificationManager=r,t.extensions=f(t.extensions)?[]:t.extensions,(t.extensionConfig=f(t.extensionConfig)?{}:t.extensionConfig).NotificationManager=r,n||(n=i.a.objCreate({throwInternal:function(t,e,n,i,r){void 0===r&&(r=!1)},warnToConsole:function(t){},resetInternalMessageCount:function(){}})),this.logger=n;var a=[];a.push.apply(a,e.concat(t.extensions)),a=l(a);var u=[],d=[],h={};if(p(a,(function(t){if(f(t)||f(t.initialize))throw Error("Extensions must provide callback to initialize");var e=t.priority,i=t.identifier;t&&e&&(f(h[e])?h[e]=i:n.warnToConsole("Two extensions have same priority #"+e+" - "+h[e]+", "+i)),!e||e<o.priority?u.push(t):d.push(t)})),a.push(o),u.push(o),a=l(a),this._extensions=a,c(new s.a([o],t,this),a),c(new s.a(u,t,this),a),this._extensions=u,0===this.getTransmissionControls().length)throw new Error("No channels available");this._setInit(!0)},t.prototype.getTransmissionControls=function(){return this._channelController.getChannelControls()},t.prototype.track=function(t){var e=this;t.iKey||(t.iKey=e.config.instrumentationKey),t.time||(t.time=i.a.toISOString(new Date)),f(t.ver)&&(t.ver="4.0"),e.isInitialized()?(e._eventQueue.length>0&&(p(e._eventQueue,(function(t){e.getProcessTelContext().processNext(t)})),e._eventQueue=[]),e.getProcessTelContext().processNext(t)):e._eventQueue.push(t)},t.prototype.getProcessTelContext=function(){var t=this._extensions,e=t;return t&&0!==t.length||(e=[this._channelController]),new s.a(e,this.config,this)},t}()},"OOr/":function(t,e,n){"use strict";var i=n("OnwC"),r=n("o1qX"),o=n("ERkP"),s=n.n(o),a=n("eGM7"),c=n("y2Il");class l extends i.a{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,tag:void 0,size:void 0}}get tag(){return this.generateHTMLTag()}render(){return s.a.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames()}),this.props.children)}generateClassNames(){const t=this.props.managedClasses;return super.generateClassNames(Object(r.a)(t.typography,t["typography__"+this.props.size]))}generateHTMLTag(){return c.b[this.props.tag]||c.b.p}}l.defaultProps={tag:c.b.p,size:c.a._1,managedClasses:{}},l.displayName=a.DisplayNamePrefix+"Typography";var u=l;e.a=u},OnwC:function(t,e,n){"use strict";var i=n("ERkP"),r=n.n(i),o=n("r6MD"),s=n("FYor"),a=n("bOQk"),c=n("hTSy");class l extends r.a.Component{constructor(){super(...arguments),this.referenceResolverStore={},this.referenceStore={}}setRef(...t){const e=this.processStorageKey(t);let n=Object(o.a)(this.referenceResolverStore,e);if(e&&!Object(s.a)(n)&&!Array.isArray(n))return"function"==typeof n||(n=t=>{Object(a.a)(this.referenceStore,e,t)},Object(a.a)(this.referenceResolverStore,e,n)),n}getRef(...t){return Object(o.a)(this.referenceStore,this.processStorageKey(t))}unhandledProps(){const t=Object.keys(this.props).filter(t=>!(l.defaultHandledProps.indexOf(t)>-1)&&this.handledProps&&!this.handledProps.hasOwnProperty(t));return Object(c.a)(this.props,t)}generateClassNames(t=""){return t.concat(" "+(this.props.className||"")).trim().replace(/(\s){2,}/g," ")||null}withSlot(t,e=this.props.children){return r.a.Children.map(e,e=>this.hasSlot(t,e)?e:null)}withoutSlot(t,e=this.props.children){return r.a.Children.map(e,e=>this.hasSlot(t,e)?null:e)}hasSlot(t,e){const n=Object(o.a)(e,"props.slot");return Array.isArray(t)?-1!==t.indexOf(n):t===n}processStorageKey(t){return t.filter(t=>"string"==typeof t||"number"==typeof t).map((t,e)=>0===e?t:`[${t}]`).join("")}}l.defaultHandledProps=["children"];var u=l;e.a=u},OvhW:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return v}));var i=n("5ZAu"),r=n("oePG"),o=n("/w5G");function s(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=r.b.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function a(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function c(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function l(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function u(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function d(t){i.a.setAttribute(this.target,this.targetName,t)}function h(t){i.a.setBooleanAttribute(this.target,this.targetName,t)}function b(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function p(t){this.target[this.targetName]=t}function f(t){const e=this.classVersions||Object.create(null),n=this.target;let i=this.version||0;if(null!=t&&t.length){const r=t.split(/\s+/);for(let t=0,o=r.length;t<o;++t){const o=r[t];""!==o&&(e[o]=i,n.classList.add(o))}}if(this.classVersions=e,this.version=i+1,0!==i){i-=1;for(const t in e)e[t]===i&&n.classList.remove(t)}}class g extends o.c{constructor(t){super(),this.binding=t,this.bind=s,this.unbind=c,this.updateTarget=d,this.isBindingVolatile=r.b.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=p,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,n)=>i.a.createHTML(t(e,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=h;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=a,this.unbind=u;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=f)}}targetAtContent(){this.updateTarget=b,this.unbind=l}createBehavior(t){return new v(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class v{constructor(t,e,n,i,r,o,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=n,this.bind=i,this.unbind=r,this.updateTarget=o,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){Object(r.e)(t);const e=this.binding(this.source,this.context);Object(r.e)(null),!0!==e&&t.preventDefault()}}},P2Ap:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var i=n("D57K"),r=n("QBS5"),o=n("P4Ao"),s=n("B85f"),a=n("6BDD"),c=n("UauI"),l=n("+53S"),u=n("C5kU");const d=a.b`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Object(c.b)({property:"defaultSlottedNodes",filter:function(t,e,n){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${u.c}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedBy="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Object(l.b)("control")}
            />
            ${u.b}
        </div>
    </template>
`;var h=n("4X57"),b=n("oqLQ"),p=n("xY0q"),f=n("wHpb"),g=n("2i1/"),v=n("j9Xn"),m=n("kL0l"),y=n("Ki0l"),O=n("QkLF"),j=n("57ob");const x=h.a`
  :host([appearance='filled']) .root {
    background: ${m.s.var};
    border-color: transparent;
  }

  :host([appearance='filled']:hover:not(.disabled)) .root {
    background: ${m.o.var};
    border-color: transparent;
  }

  :host([appearance='filled']:focus-within:not(.disabled)) .root {
    border-color: transparent;
    box-shadow: none;
  }
  ${y.a}
`.withBehaviors(m.c,m.o,m.s,Object(b.c)(h.a`
      :host([appearance='filled']) .root {
        background: ${v.a.Field};
        border-color: ${v.a.FieldText};
      }
      :host([appearance='filled']:hover:not([disabled])) .root,
      :host([appearance='filled']:focus-within:not([disabled])) .root {
        background: ${v.a.Field};
        border-color: ${v.a.FieldText};
      }
      :host([appearance='filled']:active:not([disabled])) .root {
        background: ${v.a.Field};
        border-color: ${v.a.FieldText};
      }
      :host([appearance='filled']:not([disabled]):active)::after,
      :host([appearance='filled']:not([disabled]):focus-within:not(:active))::after {
        border-bottom-color: ${v.a.Highlight};
      }
      :host([appearance='filled'][disabled]) .root {
        border-color: ${v.a.GrayText};
        background: ${v.a.Field};
      }
    `)),C=h.a`
    ${Object(p.a)("inline-block")} :host {
        font-family: var(--body-font);
        outline: none;
        user-select: none;
        position: relative;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${m.G.var};
        background: ${m.r.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid ${m.P.var};
        height: calc(${O.a} * 1px);
    }

    .control {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(var(--design-unit) * 2px + 1px);
        color: ${m.G.var};
        font-family: inherit;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    .control:hover,
    .control:${f.a},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${m.G.var};
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .start,
    .end {
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {      ${""} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not(.disabled)) .root {
        background: ${m.q.var};
        border-color: ${m.O.var};
    }

    :host(:focus-within:not(.disabled)) .root {
        border-color: ${m.z.var};
        box-shadow: 0 0 0 1px ${m.z.var} inset;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
        cursor: ${g.a};
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(Object(j.a)("filled",x),m.q,m.r,m.z,m.G,m.O,m.P,Object(b.c)(h.a`
      .root {
        forced-color-adjust: none;
        background: ${v.a.Field};
        border-color: ${v.a.FieldText};
      }
      :host(:hover:not(.disabled)) .root {
        background: ${v.a.Field};
        border-color: ${v.a.Highlight};
      }
      .start,
      .end {
        fill: ${v.a.ButtonText};
      }
      :host(.disabled) {
        opacity: 1;
      }
      :host(.disabled) .root {
        border-color: ${v.a.GrayText};
        background: ${v.a.Field};
      }
      :host(:focus-within:enabled) .root {
        border-color: ${v.a.Highlight};
        box-shadow: 0 0 0 1px ${v.a.Highlight} inset;
      }
      .control {
        color: ${v.a.ButtonText};
      }
      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${v.a.FieldText};
      }
      :host(.disabled) ::placeholder,
      :host(.disabled) ::-webkit-input-placeholder,
      :host([disabled]) .label {
        color: ${v.a.GrayText};
      }
    `));let w=class extends s.b{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};Object(i.e)([r.b],w.prototype,"appearance",void 0),w=Object(i.e)([Object(o.b)({name:"fluent-text-field",template:d,styles:C,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],w)},P4Ao:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var i=n("wvmI"),r=n("WniA");function o(t){return class extends t{constructor(){super(),i.a.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}}}const s=Object.assign(o(HTMLElement),{from:t=>o(t),define:(t,e)=>new r.a(t,e).define().type});function a(t){return function(e){new r.a(e,t).define()}}},PT2o:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n){this.h=t,this.s=e,this.l=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new r(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new r(Object(i.i)(this.h,t),Object(i.i)(this.s,t),Object(i.i)(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},PeVN:function(t,e,n){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},PfRV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return d}));var i=n("3ZGc"),r=n("fz//"),o=n("MF9s");function s(t){return{"border-radius":t}}function a(){return s(Object(i.a)(o.o))}function c(){return s(Object(i.a)(o.r))}function l(){return c()}function u(){return s("999px")}function d(t){return{border:Object(r.a)("{0} solid transparent",Object(i.a)(o.s))}}},Q5AN:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));var i=n("oePG"),r=n("oZuh");function o(t){return t?function(e,n,i){return 1===e.nodeType&&e.matches(t)}:function(t,e,n){return 1===t.nodeType}}class s{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=i.b.getAccessors(t).some(t=>t.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r.b),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}},QBS5:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var i=n("oePG"),r=n("5ZAu");const o={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},s={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class a{constructor(t,e,n=e.toLowerCase(),i="reflect",r){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=i,this.converter=r,this.fieldName="_"+e,this.callbackName=e+"Changed",this.hasCallback=this.callbackName in t.prototype,"boolean"===i&&void 0===r&&(this.converter=o)}setValue(t,e){const n=t[this.fieldName],i=this.converter;void 0!==i&&(e=i.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return i.b.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||r.a.queueUpdate(()=>{n.add(t);const i=t[this.fieldName];switch(e){case"reflect":const e=this.converter;r.a.setAttribute(t,this.attribute,void 0!==e?e.toView(i):i);break;case"boolean":r.a.setBooleanAttribute(t,this.attribute,i)}n.delete(t)})}static collect(t,...e){const n=[];e.push(t.attributes);for(let i=0,r=e.length;i<r;++i){const r=e[i];if(void 0!==r)for(let e=0,i=r.length;e<i;++e){const i=r[e];"string"==typeof i?n.push(new a(t,i)):n.push(new a(t,i.property,i.attribute,i.mode,i.converter))}}return n}}function c(t,e){let n;function i(t,e){arguments.length>1&&(n.property=e);const i=t.constructor.attributes||(t.constructor.attributes=[]);i.push(n)}return arguments.length>1?(n={},void i(t,e)):(n=void 0===t?{}:t,i)}},QhQn:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var i=n("MF9s"),r=n("6u3Q"),o=n("6QMD");const s=Object(o.d)(t=>{const e=Object(i.W)(t),n=Object(r.a)(t),o=Object(r.e)(t)?-1:1,s=Object(i.V)(t),a=n+o*s,c=a+o*(Object(i.U)(t)-s),l=a+o*(Object(i.S)(t)-s),u=a+o*(Object(i.T)(t)-s);return{rest:Object(r.d)(a,e),hover:Object(r.d)(c,e),active:Object(r.d)(l,e),focus:Object(r.d)(u,e)}}),a=Object(o.j)(o.a.rest,s),c=Object(o.j)(o.a.hover,s),l=Object(o.j)(o.a.active,s);Object(o.j)(o.a.focus,s)},QkLF:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i="(var(--base-height-multiplier) + var(--density)) * var(--design-unit)"},"RN7+":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n){this.l=t,this.a=e,this.b=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new r(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new r(Object(i.i)(this.l,t),Object(i.i)(this.a,t),Object(i.i)(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}r.epsilon=216/24389,r.kappa=24389/27},"SP+O":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var i=n("MF9s"),r=n("6QMD"),o=n("LCcN");const s=Object(r.d)(Object(o.a)(i.W,14,0,i.R,i.P,i.Q)),a=Object(r.j)(r.a.rest,s),c=Object(r.j)(r.a.hover,s),l=Object(r.j)(r.a.active,s);Object(r.j)(r.a.focus,s)},"SiT+":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n){this.l=t,this.c=e,this.h=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new r(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new r(Object(i.i)(this.l,t),Object(i.i)(this.c,t),Object(i.i)(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}},Sunj:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("D57K"),r=n("P4Ao"),o=n("oePG"),s=n("d/Vl"),a=n("a4r/"),c=n("FGLN"),l=n("Gy7L"),u=n("NYhc");class d extends r.a{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Object(c.e)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.setItems=()=>{const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0),t.forEach((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus)})},this.resetItems=t=>{t.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.changeHandler=t=>{const e=t.target,n=this.menuItems.indexOf(e);if(-1!==n&&"menuitemradio"===e.role&&!0===e.checked){for(let t=n-1;t>=0;--t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===u.a.menuitemradio&&(e.checked=!1),"separator"===n)break}const t=this.menuItems.length-1;for(let e=n+1;e<=t;++e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===u.a.menuitemradio&&(t.checked=!1),"separator"===n)break}}},this.isMenuItemElement=t=>Object(c.e)(t)&&d.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&(this.menuItems=this.domChildren(),this.resetItems(t),this.setItems())}connectedCallback(){super.connectedCallback(),this.menuItems=this.domChildren(),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.menuItems=[],this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented)switch(t.keyCode){case l.g:return void this.setFocus(this.focusIndex+1,1);case l.j:return void this.setFocus(this.focusIndex-1,-1);case l.k:return void this.setFocus(this.menuItems.length-1,-1);case l.n:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children)}setFocus(t,e){if(void 0!==this.menuItems)for(;Object(s.a)(t,this.menuItems.length);){const n=this.menuItems[t];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,n.setAttribute("tabindex","0"),n.focus();break}t+=e}}}d.focusableElementRoles=Object(a.a)(u.a),Object(i.e)([o.d],d.prototype,"items",void 0);var h=n("6BDD"),b=n("UauI");const p=h.b`
    <template
        slot="${t=>t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot ${Object(b.b)("items")}></slot>
    </template>
`;var f=n("4X57"),g=n("xY0q"),v=n("kL0l"),m=n("cQsl");const y=f.a`
  ${Object(g.a)("block")} :host {
    --elevation: 11;
    background: ${v.J.var};
    border: calc(var(--outline-width) * 1px) solid transparent;
    border-radius: var(--elevated-corner-radius);
    ${m.a}
    margin: 0;
    border-radius: calc(var(--corner-radius) * 1px);
    padding: calc(var(--design-unit) * 1px) 0;
    max-width: 368px;
    min-width: 64px;
  }

  :host([slot='submenu']) {
    width: max-content;
    margin: 0 calc(var(--design-unit) * 1px);
  }

  ::slotted(hr) {
    box-sizing: content-box;
    height: 0;
    margin: 0;
    border: none;
    border-top: calc(var(--outline-width) * 1px) solid var(--neutral-divider-rest);
  }
`.withBehaviors(v.J,v.k);let O=class extends d{};O=Object(i.e)([Object(r.b)({name:"fluent-menu",template:p,styles:y,shadowOptions:{mode:"closed"}})],O)},TLwk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("6BDD"),r=n("+53S"),o=n("UauI"),s=n("C5kU");const a=i.b`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Object(r.b)("control")}
    >
        ${s.c}
        <span class="content" part="content">
            <slot ${Object(o.b)("defaultSlottedContent")}></slot>
        </span>
        ${s.b}
    </button>
`},TMFx:function(t,e,n){"use strict";n.d(e,"Column",(function(){return d}));var i=n("ERkP"),r=n.n(i),o=n("yqT/"),s=n("OnwC"),a=n("o1qX"),c=n("FGLN"),l=n("l4WF"),u=n("Uaaq");class d extends s.a{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,span:void 0,position:void 0,row:void 0,order:void 0,gutter:void 0,cssGridPropertyName:void 0,defaultBreakpoint:void 0},this.update=()=>{this.forceUpdate()}}componentDidMount(){this.shouldTrackBreakpoints(this.props)&&l.a.subscribe(this.update)}componentWillUnmount(){l.a.unsubscribe(this.update)}componentDidUpdate(t){this.shouldTrackBreakpoints(this.props)&&!this.shouldTrackBreakpoints(t)?l.a.subscribe(this.update):!this.shouldTrackBreakpoints(this.props)&&this.shouldTrackBreakpoints(t)&&l.a.unsubscribe(this.update)}render(){return r.a.createElement("div",Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),style:this.generateStyleAttribute()}),this.props.children)}generateClassNames(){return super.generateClassNames(Object(a.a)(this.props.managedClasses.column))}getValueByBreakpoint(t){const e=Object(o.a)()?Object(u.c)(window.innerWidth):this.props.defaultBreakpoint;return t.slice(0,e+1).pop()}generateColumnSpan(){return"number"==typeof this.props.span?this.props.span:Array.isArray(this.props.span)?this.getValueByBreakpoint(this.props.span):d.defaultProps.span}generateColumnPosition(){return"number"==typeof this.props.position?this.props.position:Array.isArray(this.props.position)?this.getValueByBreakpoint(this.props.position):null}generateRow(){return"number"==typeof this.props.row?this.props.row.toString():Array.isArray(this.props.row)?this.getValueByBreakpoint(this.props.row).toString():null}augmentMsGrid(t){return 0===this.props.gutter||null===t?t:1===t?1:2*t-1}generateStyleAttribute(){const t=this.generateColumnPosition(),e=this.generateRow(),n=this.generateColumnSpan(),i=[t,"span "+n].filter(t=>Boolean(t)).join(" / "),r=Array.isArray(this.props.order)?this.getValueByBreakpoint(this.props.order):this.props.order,o="grid"===this.props.cssGridPropertyName||"-ms-grid"!==this.props.cssGridPropertyName&&Object(c.a)()?{gridColumn:i,gridRowStart:e}:{msGridColumn:this.augmentMsGrid(t),msGridColumnSpan:this.augmentMsGrid(n),msGridRow:e};return Object.assign(Object.assign(Object.assign({},o),{order:"number"==typeof r?r:null,minWidth:"0"}),this.unhandledProps().style)}shouldTrackBreakpoints(t){return Array.isArray(t.span)&&t.span.length>1||Array.isArray(t.position)&&t.position.length>1}}d.displayName="Column",d.defaultProps={managedClasses:{},span:12,defaultBreakpoint:0}},TgmJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i=n("D57K"),r=n("4X57"),o=n("QBS5"),s=n("j9Xn"),a=n("Kt+H"),c=n("oqLQ"),l=n("9ZcS"),u=n("oePG");function d(t){return(e,n)=>{((t,e,n)=>{const{cssCustomProperty:i,attribute:r}=n;t.designSystemProperties||(t.designSystemProperties={}),!1===r?Object(u.d)(t,e):(void 0===n.mode&&(n=Object.assign(Object.assign({},n),{mode:"fromView"})),Object(o.b)(n)(t,e)),t.designSystemProperties[e]={cssCustomProperty:!1!==i&&("string"==typeof i?i:"string"==typeof r?r:e),default:n.default}})(e,n,t)}}const h=n("6BDD").b`
    <slot></slot>
`;var b=n("YBl9"),p=n("xzNF"),f=n("Ibl0");function g(t){return new f.a({baseColor:t}).palette.map(t=>t.toStringHexRGB().toUpperCase())}var v=n("lFvR"),m=n("xY0q");const y=r.a`
  ${Object(m.a)("block")};
`,O=new a.a("neutral-foreground-rest",p.b,t=>t),j=r.a`
  :host {
    background-color: var(--background-color);
    color: ${O.var};
  }
`.withBehaviors(O,Object(c.c)(r.a`
      :host {
        background-color: ${s.a.ButtonFace};
        box-shadow: 0 0 0 1px ${s.a.CanvasText};
        color: ${s.a.ButtonText};
      }
    `));let x=class extends l.a{constructor(){super(...arguments),this.noPaint=!1}noPaintChanged(){this.noPaint||void 0===this.backgroundColor?this.$fastController.removeStyles(j):this.$fastController.addStyles(j)}backgroundColorChanged(){this.noPaintChanged()}neutralBaseColorChanged(t,e){const n=Object(b.d)(e);n&&(this.neutralPalette=g(n))}accentBaseColorChanged(t,e){const n=Object(b.d)(e);n&&(this.accentPalette=g(n))}};Object(i.e)([Object(o.b)({attribute:"no-paint",mode:"boolean"})],x.prototype,"noPaint",void 0),Object(i.e)([d({attribute:"background-color",default:v.a.backgroundColor})],x.prototype,"backgroundColor",void 0),Object(i.e)([d({attribute:"neutral-base-color",cssCustomProperty:!1,default:v.a.neutralBaseColor})],x.prototype,"neutralBaseColor",void 0),Object(i.e)([d({attribute:"accent-base-color",cssCustomProperty:!1,default:v.a.accentBaseColor})],x.prototype,"accentBaseColor",void 0),Object(i.e)([d({attribute:!1,cssCustomProperty:!1,default:v.a.neutralPalette})],x.prototype,"neutralPalette",void 0),Object(i.e)([d({attribute:!1,cssCustomProperty:!1,default:v.a.accentPalette})],x.prototype,"accentPalette",void 0),Object(i.e)([d({default:v.a.density,converter:o.d})],x.prototype,"density",void 0),Object(i.e)([d({attribute:"design-unit",converter:o.d,default:v.a.designUnit})],x.prototype,"designUnit",void 0),Object(i.e)([d({attribute:"direction",cssCustomProperty:!1,default:v.a.direction})],x.prototype,"direction",void 0),Object(i.e)([d({attribute:"base-height-multiplier",default:v.a.baseHeightMultiplier,converter:o.d})],x.prototype,"baseHeightMultiplier",void 0),Object(i.e)([d({attribute:"base-horizontal-spacing-multiplier",converter:o.d,default:v.a.baseHorizontalSpacingMultiplier})],x.prototype,"baseHorizontalSpacingMultiplier",void 0),Object(i.e)([d({attribute:"corner-radius",converter:o.d,default:v.a.cornerRadius})],x.prototype,"cornerRadius",void 0),Object(i.e)([d({attribute:"elevated-corner-radius",converter:o.d,default:v.a.elevatedCornerRadius})],x.prototype,"elevatedCornerRadius",void 0),Object(i.e)([d({attribute:"outline-width",converter:o.d,default:v.a.outlineWidth})],x.prototype,"outlineWidth",void 0),Object(i.e)([d({attribute:"focus-outline-width",converter:o.d,default:v.a.focusOutlineWidth})],x.prototype,"focusOutlineWidth",void 0),Object(i.e)([d({attribute:"disabled-opacity",converter:o.d,default:v.a.disabledOpacity})],x.prototype,"disabledOpacity",void 0),Object(i.e)([d({attribute:"type-ramp-minus-2-font-size",default:v.a.typeRampMinus2FontSize})],x.prototype,"typeRampMinus2FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-minus-2-line-height",default:v.a.typeRampMinus2LineHeight})],x.prototype,"typeRampMinus2LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-minus-1-font-size",default:v.a.typeRampMinus1FontSize})],x.prototype,"typeRampMinus1FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-minus-1-line-height",default:v.a.typeRampMinus1LineHeight})],x.prototype,"typeRampMinus1LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-base-font-size",default:v.a.typeRampBaseFontSize})],x.prototype,"typeRampBaseFontSize",void 0),Object(i.e)([d({attribute:"type-ramp-base-line-height",default:v.a.typeRampBaseLineHeight})],x.prototype,"typeRampBaseLineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-1-font-size",default:v.a.typeRampPlus1FontSize})],x.prototype,"typeRampPlus1FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-1-line-height",default:v.a.typeRampPlus1LineHeight})],x.prototype,"typeRampPlus1LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-2-font-size",default:v.a.typeRampPlus2FontSize})],x.prototype,"typeRampPlus2FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-2-line-height",default:v.a.typeRampPlus2LineHeight})],x.prototype,"typeRampPlus2LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-3-font-size",default:v.a.typeRampPlus3FontSize})],x.prototype,"typeRampPlus3FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-3-line-height",default:v.a.typeRampPlus3LineHeight})],x.prototype,"typeRampPlus3LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-4-font-size",default:v.a.typeRampPlus4FontSize})],x.prototype,"typeRampPlus4FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-4-line-height",default:v.a.typeRampPlus4LineHeight})],x.prototype,"typeRampPlus4LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-5-font-size",default:v.a.typeRampPlus5FontSize})],x.prototype,"typeRampPlus5FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-5-line-height",default:v.a.typeRampPlus5LineHeight})],x.prototype,"typeRampPlus5LineHeight",void 0),Object(i.e)([d({attribute:"type-ramp-plus-6-font-size",default:v.a.typeRampPlus6FontSize})],x.prototype,"typeRampPlus6FontSize",void 0),Object(i.e)([d({attribute:"type-ramp-plus-6-line-height",default:v.a.typeRampPlus6LineHeight})],x.prototype,"typeRampPlus6LineHeight",void 0),Object(i.e)([d({attribute:"accent-fill-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentFillRestDelta})],x.prototype,"accentFillRestDelta",void 0),Object(i.e)([d({attribute:"accent-fill-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentFillHoverDelta})],x.prototype,"accentFillHoverDelta",void 0),Object(i.e)([d({attribute:"accent-fill-active-delta",cssCustomProperty:!1,converter:o.d,default:v.a.accentFillActiveDelta})],x.prototype,"accentFillActiveDelta",void 0),Object(i.e)([d({attribute:"accent-fill-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentFillFocusDelta})],x.prototype,"accentFillFocusDelta",void 0),Object(i.e)([d({attribute:"accent-fill-selected-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentFillSelectedDelta})],x.prototype,"accentFillSelectedDelta",void 0),Object(i.e)([d({attribute:"accent-foreground-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentForegroundRestDelta})],x.prototype,"accentForegroundRestDelta",void 0),Object(i.e)([d({attribute:"accent-foreground-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentForegroundHoverDelta})],x.prototype,"accentForegroundHoverDelta",void 0),Object(i.e)([d({attribute:"accent-foreground-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentForegroundActiveDelta})],x.prototype,"accentForegroundActiveDelta",void 0),Object(i.e)([d({attribute:"accent-foreground-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.accentForegroundFocusDelta})],x.prototype,"accentForegroundFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillRestDelta})],x.prototype,"neutralFillRestDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillHoverDelta})],x.prototype,"neutralFillHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillActiveDelta})],x.prototype,"neutralFillActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillFocusDelta})],x.prototype,"neutralFillFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-selected-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillSelectedDelta})],x.prototype,"neutralFillSelectedDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-input-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillInputRestDelta})],x.prototype,"neutralFillInputRestDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-input-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillInputHoverDelta})],x.prototype,"neutralFillInputHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-input-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillInputActiveDelta})],x.prototype,"neutralFillInputActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-input-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillInputFocusDelta})],x.prototype,"neutralFillInputFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-input-selected-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillInputSelectedDelta})],x.prototype,"neutralFillInputSelectedDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-stealth-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillStealthRestDelta})],x.prototype,"neutralFillStealthRestDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-stealth-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillStealthHoverDelta})],x.prototype,"neutralFillStealthHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-stealth-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillStealthActiveDelta})],x.prototype,"neutralFillStealthActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-stealth-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillStealthFocusDelta})],x.prototype,"neutralFillStealthFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-stealth-selected-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillStealthSelectedDelta})],x.prototype,"neutralFillStealthSelectedDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-toggle-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillToggleHoverDelta})],x.prototype,"neutralFillToggleHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-toggle-hover-active",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillToggleActiveDelta})],x.prototype,"neutralFillToggleActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-fill-toggle-hover-focus",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillToggleFocusDelta})],x.prototype,"neutralFillToggleFocusDelta",void 0),Object(i.e)([d({attribute:"base-layer-luminance",converter:o.d,cssCustomProperty:!1,default:v.a.baseLayerLuminance})],x.prototype,"baseLayerLuminance",void 0),Object(i.e)([d({attribute:"neutral-fill-card-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralFillCardDelta})],x.prototype,"neutralFillCardDelta",void 0),Object(i.e)([d({attribute:"neutral-foreground-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralForegroundHoverDelta})],x.prototype,"neutralForegroundHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-foreground-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralForegroundActiveDelta})],x.prototype,"neutralForegroundActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-foreground-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralForegroundFocusDelta})],x.prototype,"neutralForegroundFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-divider-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralDividerRestDelta})],x.prototype,"neutralDividerRestDelta",void 0),Object(i.e)([d({attribute:"neutral-outline-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralOutlineRestDelta})],x.prototype,"neutralOutlineRestDelta",void 0),Object(i.e)([d({attribute:"neutral-outline-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralOutlineHoverDelta})],x.prototype,"neutralOutlineHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-outline-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralOutlineActiveDelta})],x.prototype,"neutralOutlineActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-outline-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralOutlineFocusDelta})],x.prototype,"neutralOutlineFocusDelta",void 0),Object(i.e)([d({attribute:"neutral-contrast-fill-rest-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralContrastFillRestDelta})],x.prototype,"neutralContrastFillRestDelta",void 0),Object(i.e)([d({attribute:"neutral-contrast-fill-hover-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralContrastFillHoverDelta})],x.prototype,"neutralContrastFillHoverDelta",void 0),Object(i.e)([d({attribute:"neutral-contrast-fill-active-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralContrastFillActiveDelta})],x.prototype,"neutralContrastFillActiveDelta",void 0),Object(i.e)([d({attribute:"neutral-contrast-fill-focus-delta",converter:o.d,cssCustomProperty:!1,default:v.a.neutralContrastFillFocusDelta})],x.prototype,"neutralContrastFillFocusDelta",void 0),x=Object(i.e)([Object(l.c)({name:"fluent-design-system-provider",template:h,styles:y,shadowOptions:{mode:"closed"}})],x)},U6fx:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t[t._1=1]="_1",t[t._2=2]="_2",t[t._3=3]="_3"}(i||(i={}))},UNqU:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return p}));var i=n("5ZAu"),r=n("oePG"),o=n("miql"),s=n("oZuh"),a=n("/w5G"),c=n("Ne8q");const l=Object.freeze({positioning:!1});function u(t,e,n,i){t.bind(e[n],i)}function d(t,e,n,i){const r=Object.create(i);r.index=n,r.length=e.length,t.bind(e[n],r)}class h{constructor(t,e,n,i,o,s){this.location=t,this.itemsBinding=e,this.templateBinding=i,this.options=s,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=u,this.itemsBindingObserver=r.b.binding(e,this,n),this.templateBindingObserver=r.b.binding(i,this,o),s.positioning&&(this.bindView=d)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items)return void(this.items=s.b);const e=this.itemsObserver,n=this.itemsObserver=r.b.getNotifier(this.items),i=e!==n;i&&null!==e&&e.unsubscribe(this),(i||t)&&n.subscribe(this)}updateViews(t){const e=this.childContext,n=this.views,i=[],r=this.bindView;let o=0;for(let e=0,r=t.length;e<r;++e){const r=t[e],s=r.removed;i.push(...n.splice(r.index+o,s.length)),o-=r.addedCount}const s=this.items,a=this.template;for(let o=0,c=t.length;o<c;++o){const c=t[o];let l=c.index;const u=l+c.addedCount;for(;l<u;++l){const t=n[l],o=t?t.firstChild:this.location,c=i.length>0?i.shift():a.create();n.splice(l,0,c),r(c,s,l,e),c.insertBefore(o)}}for(let t=0,e=i.length;t<e;++t)i[t].dispose();if(this.options.positioning)for(let t=0,e=n.length;t<e;++t){const i=n[t].context;i.length=e,i.index=t}}refreshAllViews(t=!1){const e=this.items,n=this.childContext,i=this.template,r=this.location,o=this.bindView;let s=e.length,a=this.views,l=a.length;if((0===s||t)&&(c.a.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let t=0;t<s;++t){const s=i.create();o(s,e,t,n),a[t]=s,s.insertBefore(r)}}else{let t=0;for(;t<s;++t)if(t<l){o(a[t],e,t,n)}else{const s=i.create();o(s,e,t,n),a.push(s),s.insertBefore(r)}const c=a.splice(t,l-t);for(t=0,s=c.length;t<s;++t)c[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,n=t.length;e<n;++e)t[e].unbind()}}class b extends a.b{constructor(t,e,n){super(),this.itemsBinding=t,this.templateBinding=e,this.options=n,this.createPlaceholder=i.a.createBlockPlaceholder,Object(o.a)(),this.isItemsBindingVolatile=r.b.isVolatileBinding(t),this.isTemplateBindingVolatile=r.b.isVolatileBinding(e)}createBehavior(t){return new h(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function p(t,e,n=l){return new b(t,"function"==typeof e?e:()=>e,n)}},Uaaq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s}));var i=n("yqT/");const r=[0,540,768,1084,1400,1779];function o(t,e=r){for(let n=e.length-1;n>=0;n--)if(t>=e[n])return n}function s(t,e){if(!Object(i.a)())return t[0];const n=e?o(window.innerWidth,e):o(window.innerWidth);return t.slice(0,n+1).pop()}},UauI:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var i=n("/w5G"),r=n("Q5AN");class o extends r.a{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function s(t){return"string"==typeof t&&(t={property:t}),new i.a("fast-slotted",o,t)}},W6uJ:function(t,e,n){"use strict";var i,r=n("OnwC"),o=n("o1qX"),s=n("ERkP"),a=n.n(s),c=n("eGM7"),l=n("CR6t");n.o(l,"AutoSuggestContext")&&n.d(e,"AutoSuggestContext",(function(){return l.AutoSuggestContext})),n.o(l,"ButtonDirection")&&n.d(e,"ButtonDirection",(function(){return l.ButtonDirection})),n.o(l,"ProgressType")&&n.d(e,"ProgressType",(function(){return l.ProgressType})),n.o(l,"RadioSlot")&&n.d(e,"RadioSlot",(function(){return l.RadioSlot})),function(t){t.a="a",t.button="button"}(i||(i={}));class u extends r.a{constructor(){super(...arguments),this.handledProps={disabled:void 0,href:void 0,managedClasses:void 0}}render(){return a.a.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),href:this.props.href||null},this.renderDisabledAttribute()),this.props.children)}generateClassNames(){const{button:t,button__disabled:e}=this.props.managedClasses;return super.generateClassNames(Object(o.a)(t,[e,this.props.disabled]))}renderDisabledAttribute(){if(!0===this.props.disabled)return this.tag===i.a?{"aria-disabled":!0}:{disabled:!0}}get tag(){return"string"==typeof this.props.href?i.a:i.button}}u.displayName=c.DisplayNamePrefix+"Button",u.defaultProps={managedClasses:{}},e.default=u},WniA:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("oePG"),r=n("+yEz"),o=n("QBS5");const s={mode:"open"},a={},c=new Map;class l{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const n=o.a.collect(t,e.attributes),i=new Array(n.length),c={},l={};for(let t=0,e=n.length;t<e;++t){const e=n[t];i[t]=e.attribute,c[e.name]=e,l[e.attribute]=e}this.attributes=n,this.observedAttributes=i,this.propertyLookup=c,this.attributeLookup=l,this.shadowOptions=void 0===e.shadowOptions?s:null===e.shadowOptions?void 0:Object.assign(Object.assign({},s),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?a:Object.assign(Object.assign({},a),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?r.a.create(e.styles):e.styles instanceof r.a?e.styles:r.a.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,n=e.prototype;for(let e=0,r=t.length;e<r;++e)i.b.defineProperty(n,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),c.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return c.get(t)}}},"X9F+":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return h}));var i=n("MF9s"),r=n("6QMD"),o=n("6u3Q");const s=Object(r.f)(i.F,i.z,i.w,i.y);function a(t){return e=>{const n=Object(o.a)(e),r=n>=s(e)?-1:1;return Object(o.d)(n+r*t(e),Object(i.W)(e))}}const c=Object(r.d)(a(i.F)),l=Object(r.d)(a(i.z)),u=Object(r.d)(a(i.w)),d=Object(r.d)(a(i.y)),h=Object(r.d)(a(i.G));Object(r.d)(t=>({rest:c(t),hover:l(t),active:u(t),focus:d(t),selected:h(t)}))},XI4f:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("MF9s"),r=n("6QMD"),o=n("LCcN");function s(t){return Object(o.a)(i.W,t,0,0,0,0)}const a=Object(r.j)(r.a.rest,Object(r.d)(s(4.5)));Object(r.j)(r.a.rest,Object(r.d)(s(3)))},XR5X:function(t,e,n){"use strict";var i=n("mDtb"),r=n("ZEO0");const o={paragraph:Object.assign(Object.assign({},Object(r.a)()),Object(i.c)()),paragraph__1:{},paragraph__2:{},paragraph__3:{}};e.a=o},YBl9:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return f}));var i=n("6eT7"),r=n("0q6d");const o={aliceblue:{r:.941176,g:.972549,b:1},antiquewhite:{r:.980392,g:.921569,b:.843137},aqua:{r:0,g:1,b:1},aquamarine:{r:.498039,g:1,b:.831373},azure:{r:.941176,g:1,b:1},beige:{r:.960784,g:.960784,b:.862745},bisque:{r:1,g:.894118,b:.768627},black:{r:0,g:0,b:0},blanchedalmond:{r:1,g:.921569,b:.803922},blue:{r:0,g:0,b:1},blueviolet:{r:.541176,g:.168627,b:.886275},brown:{r:.647059,g:.164706,b:.164706},burlywood:{r:.870588,g:.721569,b:.529412},cadetblue:{r:.372549,g:.619608,b:.627451},chartreuse:{r:.498039,g:1,b:0},chocolate:{r:.823529,g:.411765,b:.117647},coral:{r:1,g:.498039,b:.313725},cornflowerblue:{r:.392157,g:.584314,b:.929412},cornsilk:{r:1,g:.972549,b:.862745},crimson:{r:.862745,g:.078431,b:.235294},cyan:{r:0,g:1,b:1},darkblue:{r:0,g:0,b:.545098},darkcyan:{r:0,g:.545098,b:.545098},darkgoldenrod:{r:.721569,g:.52549,b:.043137},darkgray:{r:.662745,g:.662745,b:.662745},darkgreen:{r:0,g:.392157,b:0},darkgrey:{r:.662745,g:.662745,b:.662745},darkkhaki:{r:.741176,g:.717647,b:.419608},darkmagenta:{r:.545098,g:0,b:.545098},darkolivegreen:{r:.333333,g:.419608,b:.184314},darkorange:{r:1,g:.54902,b:0},darkorchid:{r:.6,g:.196078,b:.8},darkred:{r:.545098,g:0,b:0},darksalmon:{r:.913725,g:.588235,b:.478431},darkseagreen:{r:.560784,g:.737255,b:.560784},darkslateblue:{r:.282353,g:.239216,b:.545098},darkslategray:{r:.184314,g:.309804,b:.309804},darkslategrey:{r:.184314,g:.309804,b:.309804},darkturquoise:{r:0,g:.807843,b:.819608},darkviolet:{r:.580392,g:0,b:.827451},deeppink:{r:1,g:.078431,b:.576471},deepskyblue:{r:0,g:.74902,b:1},dimgray:{r:.411765,g:.411765,b:.411765},dimgrey:{r:.411765,g:.411765,b:.411765},dodgerblue:{r:.117647,g:.564706,b:1},firebrick:{r:.698039,g:.133333,b:.133333},floralwhite:{r:1,g:.980392,b:.941176},forestgreen:{r:.133333,g:.545098,b:.133333},fuchsia:{r:1,g:0,b:1},gainsboro:{r:.862745,g:.862745,b:.862745},ghostwhite:{r:.972549,g:.972549,b:1},gold:{r:1,g:.843137,b:0},goldenrod:{r:.854902,g:.647059,b:.12549},gray:{r:.501961,g:.501961,b:.501961},green:{r:0,g:.501961,b:0},greenyellow:{r:.678431,g:1,b:.184314},grey:{r:.501961,g:.501961,b:.501961},honeydew:{r:.941176,g:1,b:.941176},hotpink:{r:1,g:.411765,b:.705882},indianred:{r:.803922,g:.360784,b:.360784},indigo:{r:.294118,g:0,b:.509804},ivory:{r:1,g:1,b:.941176},khaki:{r:.941176,g:.901961,b:.54902},lavender:{r:.901961,g:.901961,b:.980392},lavenderblush:{r:1,g:.941176,b:.960784},lawngreen:{r:.486275,g:.988235,b:0},lemonchiffon:{r:1,g:.980392,b:.803922},lightblue:{r:.678431,g:.847059,b:.901961},lightcoral:{r:.941176,g:.501961,b:.501961},lightcyan:{r:.878431,g:1,b:1},lightgoldenrodyellow:{r:.980392,g:.980392,b:.823529},lightgray:{r:.827451,g:.827451,b:.827451},lightgreen:{r:.564706,g:.933333,b:.564706},lightgrey:{r:.827451,g:.827451,b:.827451},lightpink:{r:1,g:.713725,b:.756863},lightsalmon:{r:1,g:.627451,b:.478431},lightseagreen:{r:.12549,g:.698039,b:.666667},lightskyblue:{r:.529412,g:.807843,b:.980392},lightslategray:{r:.466667,g:.533333,b:.6},lightslategrey:{r:.466667,g:.533333,b:.6},lightsteelblue:{r:.690196,g:.768627,b:.870588},lightyellow:{r:1,g:1,b:.878431},lime:{r:0,g:1,b:0},limegreen:{r:.196078,g:.803922,b:.196078},linen:{r:.980392,g:.941176,b:.901961},magenta:{r:1,g:0,b:1},maroon:{r:.501961,g:0,b:0},mediumaquamarine:{r:.4,g:.803922,b:.666667},mediumblue:{r:0,g:0,b:.803922},mediumorchid:{r:.729412,g:.333333,b:.827451},mediumpurple:{r:.576471,g:.439216,b:.858824},mediumseagreen:{r:.235294,g:.701961,b:.443137},mediumslateblue:{r:.482353,g:.407843,b:.933333},mediumspringgreen:{r:0,g:.980392,b:.603922},mediumturquoise:{r:.282353,g:.819608,b:.8},mediumvioletred:{r:.780392,g:.082353,b:.521569},midnightblue:{r:.098039,g:.098039,b:.439216},mintcream:{r:.960784,g:1,b:.980392},mistyrose:{r:1,g:.894118,b:.882353},moccasin:{r:1,g:.894118,b:.709804},navajowhite:{r:1,g:.870588,b:.678431},navy:{r:0,g:0,b:.501961},oldlace:{r:.992157,g:.960784,b:.901961},olive:{r:.501961,g:.501961,b:0},olivedrab:{r:.419608,g:.556863,b:.137255},orange:{r:1,g:.647059,b:0},orangered:{r:1,g:.270588,b:0},orchid:{r:.854902,g:.439216,b:.839216},palegoldenrod:{r:.933333,g:.909804,b:.666667},palegreen:{r:.596078,g:.984314,b:.596078},paleturquoise:{r:.686275,g:.933333,b:.933333},palevioletred:{r:.858824,g:.439216,b:.576471},papayawhip:{r:1,g:.937255,b:.835294},peachpuff:{r:1,g:.854902,b:.72549},peru:{r:.803922,g:.521569,b:.247059},pink:{r:1,g:.752941,b:.796078},plum:{r:.866667,g:.627451,b:.866667},powderblue:{r:.690196,g:.878431,b:.901961},purple:{r:.501961,g:0,b:.501961},red:{r:1,g:0,b:0},rosybrown:{r:.737255,g:.560784,b:.560784},royalblue:{r:.254902,g:.411765,b:.882353},saddlebrown:{r:.545098,g:.270588,b:.07451},salmon:{r:.980392,g:.501961,b:.447059},sandybrown:{r:.956863,g:.643137,b:.376471},seagreen:{r:.180392,g:.545098,b:.341176},seashell:{r:1,g:.960784,b:.933333},sienna:{r:.627451,g:.321569,b:.176471},silver:{r:.752941,g:.752941,b:.752941},skyblue:{r:.529412,g:.807843,b:.921569},slateblue:{r:.415686,g:.352941,b:.803922},slategray:{r:.439216,g:.501961,b:.564706},slategrey:{r:.439216,g:.501961,b:.564706},snow:{r:1,g:.980392,b:.980392},springgreen:{r:0,g:1,b:.498039},steelblue:{r:.27451,g:.509804,b:.705882},tan:{r:.823529,g:.705882,b:.54902},teal:{r:0,g:.501961,b:.501961},thistle:{r:.847059,g:.74902,b:.847059},tomato:{r:1,g:.388235,b:.278431},transparent:{r:0,g:0,b:0,a:0},turquoise:{r:.25098,g:.878431,b:.815686},violet:{r:.933333,g:.509804,b:.933333},wheat:{r:.960784,g:.870588,b:.701961},white:{r:1,g:1,b:1},whitesmoke:{r:.960784,g:.960784,b:.960784},yellow:{r:1,g:1,b:0},yellowgreen:{r:.603922,g:.803922,b:.196078}},s=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,a=/^rgba\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){3}(?:0|1|0?\.\d*)\s*)\)$/i,c=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i,l=/^#((?:[0-9a-f]{8}|[0-9a-f]{4}))$/i;function u(t){return c.test(t)}function d(t){return function(t){return l.test(t)}(t)}function h(t){return s.test(t)}function b(t){const e=c.exec(t);if(null===e)return null;let n=e[1];if(3===n.length){const t=n.charAt(0),e=n.charAt(1),i=n.charAt(2);n=t.concat(t,e,e,i,i)}const o=parseInt(n,16);return isNaN(o)?null:new i.a(Object(r.g)((16711680&o)>>>16,0,255),Object(r.g)((65280&o)>>>8,0,255),Object(r.g)(255&o,0,255),1)}function p(t){const e=s.exec(t);if(null===e)return null;const n=e[1].split(",");return new i.a(Object(r.g)(Number(n[0]),0,255),Object(r.g)(Number(n[1]),0,255),Object(r.g)(Number(n[2]),0,255),1)}function f(t){const e=t.toLowerCase();return u(e)?b(e):d(e)?function(t){const e=l.exec(t);if(null===e)return null;let n=e[1];if(4===n.length){const t=n.charAt(0),e=n.charAt(1),i=n.charAt(2),r=n.charAt(3);n=t.concat(t,e,e,i,i,r,r)}const o=parseInt(n,16);return isNaN(o)?null:new i.a(Object(r.g)((16711680&o)>>>16,0,255),Object(r.g)((65280&o)>>>8,0,255),Object(r.g)(255&o,0,255),Object(r.g)((4278190080&o)>>>24,0,255))}(e):h(e)?p(e):function(t){return a.test(t)}(e)?function(t){const e=a.exec(t);if(null===e)return null;const n=e[1].split(",");return 4===n.length?new i.a(Object(r.g)(Number(n[0]),0,255),Object(r.g)(Number(n[1]),0,255),Object(r.g)(Number(n[2]),0,255),Number(n[3])):null}(e):function(t){return o.hasOwnProperty(t)}(e)?function(t){const e=o[t.toLowerCase()];return e?new i.a(e.r,e.g,e.b,e.hasOwnProperty("a")?e.a:void 0):null}(e):null}},Z6nj:function(t,e,n){"use strict";n.r(e);var i=n("oZuh");n.d(e,"$global",(function(){return i.a})),n.d(e,"emptyArray",(function(){return i.b}));var r=n("6BDD");n.d(e,"ViewTemplate",(function(){return r.a})),n.d(e,"html",(function(){return r.b}));var o=n("P4Ao");n.d(e,"FASTElement",(function(){return o.a})),n.d(e,"customElement",(function(){return o.b}));var s=n("WniA");n.d(e,"FASTElementDefinition",(function(){return s.a}));var a=n("QBS5");n.d(e,"booleanConverter",(function(){return a.c})),n.d(e,"nullableNumberConverter",(function(){return a.d})),n.d(e,"AttributeDefinition",(function(){return a.a})),n.d(e,"attr",(function(){return a.b}));var c=n("wvmI");n.d(e,"Controller",(function(){return c.a}));var l=n("iyNs");for(var u in l)["FASTElementDefinition","ElementStyles","css","cssPartial","CSSDirective","enableArrayObservation","DOM","elements","$global","emptyArray","ViewTemplate","html","FASTElement","customElement","booleanConverter","nullableNumberConverter","AttributeDefinition","attr","Controller","default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(u);var d=n("hPPo");n.d(e,"compileTemplate",(function(){return d.a}));var h=n("+yEz");n.d(e,"ElementStyles",(function(){return h.a}));var b=n("4X57");n.d(e,"css",(function(){return b.a})),n.d(e,"cssPartial",(function(){return b.b}));var p=n("olMv");n.d(e,"CSSDirective",(function(){return p.a}));var f=n("Ne8q");n.d(e,"HTMLView",(function(){return f.a}));var g=n("oePG");n.d(e,"Observable",(function(){return g.b})),n.d(e,"observable",(function(){return g.d})),n.d(e,"volatile",(function(){return g.f})),n.d(e,"setCurrentEvent",(function(){return g.e})),n.d(e,"ExecutionContext",(function(){return g.a})),n.d(e,"defaultExecutionContext",(function(){return g.c}));var v=n("O/9U");n.d(e,"SubscriberSet",(function(){return v.b})),n.d(e,"PropertyChangeNotifier",(function(){return v.a}));var m=n("miql");n.d(e,"enableArrayObservation",(function(){return m.a}));var y=n("5ZAu");n.d(e,"DOM",(function(){return y.a}));var O=n("/xkD");for(var u in O)["FASTElementDefinition","ElementStyles","css","cssPartial","CSSDirective","enableArrayObservation","DOM","elements","$global","emptyArray","ViewTemplate","html","FASTElement","customElement","booleanConverter","nullableNumberConverter","AttributeDefinition","attr","Controller","compileTemplate","HTMLView","Observable","observable","volatile","setCurrentEvent","ExecutionContext","defaultExecutionContext","SubscriberSet","PropertyChangeNotifier","default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return O[t]}))}(u);var j=n("OvhW");n.d(e,"HTMLBindingDirective",(function(){return j.b})),n.d(e,"BindingBehavior",(function(){return j.a}));var x=n("/w5G");n.d(e,"HTMLDirective",(function(){return x.b})),n.d(e,"TargetedHTMLDirective",(function(){return x.c})),n.d(e,"AttachedBehaviorHTMLDirective",(function(){return x.a}));var C=n("+53S");n.d(e,"RefBehavior",(function(){return C.a})),n.d(e,"ref",(function(){return C.b}));var w=n("6vBc");n.d(e,"when",(function(){return w.a}));var k=n("UNqU");n.d(e,"RepeatBehavior",(function(){return k.a})),n.d(e,"RepeatDirective",(function(){return k.b})),n.d(e,"repeat",(function(){return k.c}));var F=n("UauI");n.d(e,"SlottedBehavior",(function(){return F.a})),n.d(e,"slotted",(function(){return F.b}));var D=n("Nc2c");n.d(e,"ChildrenBehavior",(function(){return D.a})),n.d(e,"children",(function(){return D.b}));var S=n("Q5AN");n.d(e,"elements",(function(){return S.b}))},ZEO0:function(t,e,n){"use strict";function i(t){return{cursor:t}}function r(){return i("default")}function o(){return i("not-allowed !important")}function s(){return i("pointer")}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s}))},Zp2t:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.justified="justified",t.lightweight="lightweight",t.outline="outline",t.primary="primary",t.stealth="stealth"}(i||(i={}))},aP31:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return f}));var i=n("d/Vl"),r=n("MF9s"),o=n("9CwC"),s=n("6QMD"),a=n("6u3Q");const c=Object(s.f)(r.F,r.z,r.w);function l(t){return e=>{const n=Object(r.j)(e),l=n.length,u=Object(r.a)(e),d=Object(o.a)(Object.assign({},e,{backgroundColor:u})),h=Object(r.d)(e),b=Object(a.a)(e)>=c(e)?-1:1,p=l-1,f=Object(a.b)(r.j,u)(e);let g=0;for(;g<b*h&&Object(i.a)(f+g+b,0,l)&&Object(s.e)(n[f+g+b],d)>=t&&Object(i.a)(f+g+b+b,0,p);)g+=b;const v=f+g,m=v+-1*b*h,y=m+b*Object(r.b)(e),O=m+b*Object(r.c)(e);return{rest:Object(a.d)(m,n),hover:Object(a.d)(v,n),active:Object(a.d)(y,n),focus:Object(a.d)(O,n),selected:Object(a.d)(m+(Object(a.e)(e)?-1*Object(r.e)(e):Object(r.e)(e)),n)}}}const u=Object(s.d)(l(4.5)),d=Object(s.d)(l(3)),h=Object(s.j)(s.a.rest,u),b=Object(s.j)(s.a.hover,u),p=Object(s.j)(s.a.active,u),f=(Object(s.j)(s.a.focus,u),Object(s.j)(s.a.selected,u));Object(s.j)(s.a.rest,d),Object(s.j)(s.a.hover,d),Object(s.j)(s.a.active,d),Object(s.j)(s.a.focus,d),Object(s.j)(s.a.selected,d)},adbA:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("oePG");class r{constructor(t,e,n){this.propertyName=t,this.value=e,this.styles=n}bind(t){i.b.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){i.b.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}},bica:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return y}));var i=n("D57K"),r=n("oePG"),o=n("QBS5"),s=n("YBl9"),a=n("9ZcS"),c=n("39vG"),l=n("cqAE"),u=n("TgmJ"),d=n("4X57"),h=n("xY0q"),b=n("oqLQ"),p=n("j9Xn"),f=n("cQsl"),g=n("kL0l");const v=d.a`
  ${Object(h.a)("block")} :host {
    --elevation: 4;
    display: block;
    contain: content;
    height: var(--card-height, 100%);
    width: var(--card-width, 100%);
    box-sizing: border-box;
    border-radius: calc(var(--elevated-corner-radius) * 1px);
    ${f.a}
  }

  :host(:hover) {
    --elevation: 8;
  }

  :host(:focus-within) {
    --elevation: 8;
  }

  :host {
    content-visibility: auto;
  }
`.withBehaviors(g.m,Object(b.c)(d.a`
      :host {
        forced-color-adjust: none;
        background: ${p.a.Canvas};
        box-shadow: 0 0 0 1px ${p.a.CanvasText};
      }
    `));let m=class extends u.a{cardBackgroundColorChanged(t,e){if(e){null!==Object(s.d)(this.cardBackgroundColor)&&(this.neutralBaseColor=this.cardBackgroundColor,this.backgroundColor=this.cardBackgroundColor)}else this.provider&&this.provider.designSystem&&this.handleChange(this.provider.designSystem,"backgroundColor")}handleChange(t,e){this.cardBackgroundColor||(this.neutralBaseColor?this.backgroundColor=Object(l.a)(this.designSystem):this.backgroundColor=Object(l.a)(t))}connectedCallback(){var t,e;super.connectedCallback();const n=r.b.getNotifier(null===(t=this.provider)||void 0===t?void 0:t.designSystem);n.subscribe(this,"backgroundColor"),n.subscribe(this,"neutralPalette"),this.handleChange(null===(e=this.provider)||void 0===e?void 0:e.designSystem,"backgroundColor")}};Object(i.e)([Object(o.b)({attribute:"card-background-color",mode:"fromView"})],m.prototype,"cardBackgroundColor",void 0),m=Object(i.e)([Object(a.c)({name:"fluent-card",template:c.a,styles:v,shadowOptions:{mode:"closed"}})],m);const y=v},cQsl:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"},cqAE:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("lFvR"),r=n("hv+n");const o=t=>{const e=Object(i.u)(t),n=Object(r.b)(i.T,Object(i.l)(t))(t);return Object(r.d)(n-e,Object(i.T)(t))};function s(t){return"function"==typeof t?e=>o(Object.assign({},e,{backgroundColor:t(e)})):o(t)}},dVu6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("lbfK");function r(t,e){return Object(i.a)({},t,e,(t,e)=>{if(Array.isArray(e))return e})}},duBZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var i=n("D57K"),r=n("P4Ao"),o=n("QBS5"),s=n("oePG"),a=n("Gy7L"),c=n("o87Z");class l extends r.a{}class u extends(Object(c.a)(l)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends u{constructor(){var t;super(),this.initialValue="on",this.checkedAttribute=!1,this.dirtyChecked=!1,this.formResetCallback=()=>{this.checked=!!this.defaultChecked,this.dirtyChecked=!1},this.keypressHandler=t=>{switch(t.keyCode){case a.q:return void(this.checked||this.readOnly||(this.checked=!0))}return!0},this.clickHandler=t=>{this.disabled||this.readOnly||this.checked||(this.checked=!0)},this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}checkedChanged(){this.$fastController.isConnected&&(this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),this.$emit("change"),this.validate())}connectedCallback(){var t,e;super.connectedCallback(),this.proxy.setAttribute("type","radio"),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.updateForm(),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}}Object(i.e)([Object(o.b)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),Object(i.e)([s.d],d.prototype,"name",void 0),Object(i.e)([Object(o.b)({attribute:"checked",mode:"boolean"})],d.prototype,"checkedAttribute",void 0),Object(i.e)([s.d],d.prototype,"defaultSlottedNodes",void 0),Object(i.e)([s.d],d.prototype,"defaultChecked",void 0),Object(i.e)([s.d],d.prototype,"checked",void 0);var h=n("6BDD"),b=n("UauI");const p=h.b`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                <div part="checked-indicator" class="checked-indicator"></div>
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Object(b.b)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var f=n("4X57"),g=n("j9Xn"),v=n("xY0q"),m=n("wHpb"),y=n("2i1/"),O=n("oqLQ"),j=n("QkLF"),x=n("kL0l");const C=f.a`
    ${Object(v.a)("inline-flex")} :host {
        --input-size: calc((${j.a} / 2) + var(--design-unit));
        align-items: center;
        outline: none;
        margin: calc(var(--design-unit) * 1px) 0;
        ${""} user-select: none;
        position: relative;
        flex-direction: row;
        transition: all 0.2s ease-in-out;
    }

    .control {
        position: relative;
        width: calc(var(--input-size) * 1px);
        height: calc(var(--input-size) * 1px);
        box-sizing: border-box;
        border-radius: 50%;
        border: calc(var(--outline-width) * 1px) solid ${x.P.var};
        background: ${x.r.var};
        outline: none;
        cursor: pointer;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        font-family: var(--body-font);
        color: ${x.G.var};
        ${""} padding-inline-start: calc(var(--design-unit) * 2px + 2px);
        margin-inline-end: calc(var(--design-unit) * 2px + 2px);
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    .control, .checked-indicator {
      flex-shrink: 0;
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        display: inline-block;
        background: ${x.G.var};
        fill: ${x.G.var};
        opacity: 0;
        pointer-events: none;
    }

    :host(:enabled) .control:hover{
        background: ${x.q.var};
        border-color: ${x.O.var};
    }

    :host(:enabled) .control:active {
        background: ${x.p.var};
        border-color: ${x.M.var};
    }

    :host(:${m.a}) .control {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px ${x.z.var};
        border-color: ${x.z.var};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
        cursor: ${y.a};
    }

    :host(.checked) .checked-indicator {
        opacity: 1;
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(x.l,x.q,x.r,x.z,x.G,x.M,x.O,x.P,x.p,Object(O.c)(f.a`
            .control {
                forced-color-adjust: none;
                border-color: ${g.a.FieldText};
                background: ${g.a.Field};
            }
            :host(:enabled) .control:hover, .control:active {
                border-color: ${g.a.Highlight};
                background: ${g.a.Field};
            }
            :host(:${m.a}) .control {
                border-color: ${g.a.Highlight};
                box-shadow: 0 0 0 2px ${g.a.Field}, 0 0 0 4px ${g.a.FieldText};
            }
            :host(.checked:${m.a}:enabled) .control {
                border-color: ${g.a.Highlight};
                box-shadow: 0 0 0 2px ${g.a.Field}, 0 0 0 4px ${g.a.FieldText};
            }
            :host(.checked:enabled) .control:hover, .control:active {
                border-color: ${g.a.Highlight};
                background: ${g.a.Highlight};
            }
            :host(.checked) .checked-indicator {
                background: ${g.a.Highlight};
                fill: ${g.a.Highlight};
            }
            :host(.checked) .control:hover .checked-indicator {
                background: ${g.a.HighlightText};
                fill: ${g.a.HighlightText};
            }
            :host(.disabled) {
                forced-color-adjust: none;
                opacity: 1;
            }
            :host(.disabled) .label {
                color: ${g.a.GrayText};
            }
            :host(.disabled) .control,
            :host(.checked.disabled) .control:hover, .control:active {
                background: ${g.a.Field};
                border-color: ${g.a.GrayText};
            }
            :host(.disabled) .checked-indicator,
            :host(.checked.disabled) .control:hover .checked-indicator {
                fill: ${g.a.GrayText};
                background: ${g.a.GrayText};
            }
        `));let w=class extends d{};w=Object(i.e)([Object(r.b)({name:"fluent-radio",template:p,styles:C,shadowOptions:{mode:"closed"}})],w)},e0li:function(t,e,n){"use strict";var i,r,o;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),function(t){t.small="small",t.large="large"}(i||(i={})),function(t){t[t._1=1]="_1",t[t._2=2]="_2",t[t._3=3]="_3",t[t._4=4]="_4",t[t._5=5]="_5",t[t._6=6]="_6",t[t._7=7]="_7"}(r||(r={})),function(t){t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6",t.p="p"}(o||(o={}))},eGM7:function(t,e,n){"use strict";n.d(e,"DisplayNamePrefix",(function(){return i}));const i="Base"},eUhr:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return p}));var i=n("/w5G"),r=n("5ZAu"),o=n("OvhW");const s=Object.freeze({bind(){},unbind(){}}),a=Object.freeze({targetIndex:0,createBehavior:()=>s});class c extends i.b{constructor(t,e){super(),this.metadataOrBinding=t,this.options=e,this._factory=null}get factory(){let t=this._factory;return null===t&&(this._factory=t=this.selectFactory()),t}createBehavior(t){return this.factory.createBehavior(t)}createPlaceholder(t){return r.a.createCustomAttributePlaceholder("fast-telemetry",t)}static installFactorySelector(t){c.prototype.selectFactory=t}selectFactory(){return a}}function l(t,e){return new c(t,e)}class u{constructor(t,e,n){this.target=t,this.attribute=e,this.binding=n}bind(t,e){r.a.setAttribute(this.target,this.attribute,this.binding(t,e))}unbind(){}}class d{constructor(t,e){this.binding=t,this.attribute=e,this.targetIndex=0}createBehavior(t){return new u(t,this.attribute,this.binding)}}class h{constructor(t,e){this.value=t,this.attribute=e,this.targetIndex=0}createBehavior(t){return t.setAttribute(this.attribute,this.value),s}}let b={dynamicBindings:!0,telemetryAttribute:"data-t"};function p(t=b){b=t,c.installFactorySelector((function(){const e=Object.assign({},b,this.options),n=this.metadataOrBinding;if("function"==typeof n){if(e.dynamicBindings){const t=new o.b(n);return t.targetName=e.telemetryAttribute,t}return new d(n,e.telemetryAttribute)}return new h(n,t.telemetryAttribute)}))}},f6oE:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("D57K"),r=n("P4Ao"),o=n("5ZAu"),s=n("QBS5"),a=n("oePG"),c=n("qibw");var l=n("CzyP"),u=n("oZuh");class d extends r.a{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.pendingPositioningUpdate=!1,this.pendingLayoutUpdate=!1,this.pendingReset=!1,this.currentDirection=c.a.ltr,this.regionVisible=!1,this.updateThreshold=.5,this.update=()=>{null!==this.viewportRect&&null!==this.regionDimension?this.requestPositionUpdates():this.requestLayoutUpdate()},this.updateAnchorOffset=(t,e)=>{this.anchorLeft=this.anchorLeft+t,this.anchorRight=this.anchorRight+t,this.anchorTop=this.anchorTop+e,this.anchorBottom=this.anchorBottom+e,this.updateLayout()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&this.resizeDetector.observe(this.anchorElement))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(d.intersectionService.requestPosition(this,this.handleIntersection),d.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&d.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,d.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&d.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&d.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&null!==this.regionRect&&(this.initialLayoutComplete||(this.containingBlockHeight=this.regionRect.height,this.containingBlockWidth=this.regionRect.width),this.updateRegionOffset(this.regionRect),this.updateLayout()))},this.applyIntersectionEntries=t=>{let e=t.find(t=>t.target===this),n=t.find(t=>t.target===this.anchorElement),i=t.find(t=>t.target===this.viewportElement);return void 0!==e&&void 0!==i&&void 0!==n&&(!!(null===this.regionRect||null===this.anchorRect||null===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportRect=i.boundingClientRect,this.handleRegionIntersection(e),this.handleAnchorIntersection(n),!0))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleAnchorIntersection=t=>{this.anchorTop=t.boundingClientRect.top,this.anchorRight=t.boundingClientRect.right,this.anchorBottom=t.boundingClientRect.bottom,this.anchorLeft=t.boundingClientRect.left,this.anchorHeight=t.boundingClientRect.height,this.anchorWidth=t.boundingClientRect.width},this.handleRegionIntersection=t=>{const e=t.boundingClientRect;this.regionDimension={height:e.height,width:e.width}},this.handleResize=t=>{this.initialLayoutComplete&&this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=Object(l.a)(this),this.startObservers())},this.updateLayout=()=>{this.pendingLayoutUpdate=!1;let t="undefined",e="undefined";if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getHorizontalPositioningOptions();if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=Object(l.a)(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===c.a.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetLeft":"left";break;case"right":e=this.horizontalInset?"insetRight":"right"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:this.regionDimension.width;("undefined"===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableWidth(e)<n)&&(e=this.getAvailableWidth(t[0])>this.getAvailableWidth(t[1])?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getVerticalPositioningOptions();if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetTop":"top";break;case"bottom":t=this.verticalInset?"insetBottom":"bottom"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:this.regionDimension.height;("undefined"===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableHeight(t)<n)&&(t=this.getAvailableHeight(e[0])>this.getAvailableHeight(e[1])?e[0]:e[1])}const n=this.getNextRegionDimension(e,t),i=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,n),this.setVerticalPosition(t,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),i&&(this.requestPositionUpdates(),this.$emit("positionchange",this,{bubbles:!1}))},this.updateRegionStyle=()=>{this.classList.toggle("top","top"===this.verticalPosition),this.classList.toggle("bottom","bottom"===this.verticalPosition),this.classList.toggle("inset-top","insetTop"===this.verticalPosition),this.classList.toggle("inset-bottom","insetBottom"===this.verticalPosition),this.classList.toggle("left","left"===this.horizontalPosition),this.classList.toggle("right","right"===this.horizontalPosition),this.classList.toggle("inset-left","insetLeft"===this.horizontalPosition),this.classList.toggle("inset-right","insetRight"===this.horizontalPosition),this.style.position=this.fixedPlacement?"fixed":"absolute",this.style.transformOrigin=`${this.yTransformOrigin} ${this.xTransformOrigin}`,"uncontrolled"===this.horizontalPositioningMode?(this.style.width="unset",this.style.right="unset",this.style.left="unset"):(this.style.width=this.regionWidth,this.style.right=this.regionRight,this.style.left=this.regionLeft),"uncontrolled"===this.verticalPositioningMode?(this.style.height="unset",this.style.top="unset",this.style.bottom="unset"):(this.style.height=this.regionHeight,this.style.top=this.regionTop,this.style.bottom=this.regionBottom)},this.setHorizontalPosition=(t,e)=>{let n=null,i=null,r="left";switch(t){case"left":r="right",n=this.containingBlockWidth-this.baseHorizontalOffset;break;case"insetLeft":r="right",n=this.containingBlockWidth-this.anchorWidth-this.baseHorizontalOffset;break;case"insetRight":r="left",i=this.baseHorizontalOffset;break;case"right":r="left",i=this.anchorWidth+this.baseHorizontalOffset}switch(this.xTransformOrigin=r,this.regionRight=null===n?"unset":n+"px",this.regionLeft=null===i?"unset":i+"px",this.horizontalPosition=t,this.horizontalScaling){case"anchor":this.regionWidth=this.anchorWidth+"px";break;case"fill":this.regionWidth=e.width+"px";break;case"content":this.regionWidth="unset"}},this.setVerticalPosition=(t,e)=>{let n=null,i=null,r="top";switch(t){case"top":r="bottom",i=this.containingBlockHeight-this.baseVerticalOffset;break;case"insetTop":r="bottom",i=this.containingBlockHeight-this.baseVerticalOffset-this.anchorHeight;break;case"insetBottom":r="top",n=this.baseVerticalOffset;break;case"bottom":r="top",n=this.baseVerticalOffset+this.anchorHeight}switch(this.yTransformOrigin=r,this.regionTop=null===n?"unset":n+"px",this.regionBottom=null===i?"unset":i+"px",this.verticalPosition=t,this.verticalScaling){case"anchor":this.regionHeight=this.anchorHeight+"px";break;case"fill":this.regionHeight=e.height+"px";break;case"content":this.regionHeight="unset"}},this.updateRegionOffset=t=>{if("uncontrolled"===this.horizontalPositioningMode)this.baseHorizontalOffset=this.anchorLeft-t.left;else switch(this.horizontalPosition){case"undefined":this.baseHorizontalOffset=this.anchorLeft-t.left;break;case"left":this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorLeft-t.right);break;case"insetLeft":this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRight-t.right);break;case"insetRight":this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorLeft-t.left);break;case"right":this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRight-t.left)}if("uncontrolled"===this.verticalPositioningMode)this.baseVerticalOffset=this.anchorTop-t.top;else switch(this.verticalPosition){case"undefined":this.baseVerticalOffset=this.anchorTop-t.top;break;case"top":this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorTop-t.bottom);break;case"insetTop":this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorBottom-t.bottom);break;case"insetBottom":this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorTop-t.top);break;case"bottom":this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorBottom-t.top)}},this.getHorizontalPositioningOptions=()=>this.horizontalInset?["insetLeft","insetRight"]:["left","right"],this.getVerticalPositioningOptions=()=>this.verticalInset?["insetTop","insetBottom"]:["top","bottom"],this.getAvailableWidth=t=>{if(null!==this.viewportRect){const e=this.anchorLeft-this.viewportRect.left,n=this.viewportRect.right-(this.anchorLeft+this.anchorWidth);switch(t){case"left":return e;case"insetLeft":return e+this.anchorWidth;case"insetRight":return n+this.anchorWidth;case"right":return n}}return 0},this.getAvailableHeight=t=>{if(null!==this.viewportRect){const e=this.anchorTop-this.viewportRect.top,n=this.viewportRect.bottom-(this.anchorTop+this.anchorHeight);switch(t){case"top":return e;case"insetTop":return e+this.anchorHeight;case"insetBottom":return n+this.anchorHeight;case"bottom":return n}}return 0},this.getNextRegionDimension=(t,e)=>{const n={height:this.regionDimension.height,width:this.regionDimension.width};return"fill"===this.horizontalScaling&&(n.width=this.getAvailableWidth(t)),"fill"===this.verticalScaling&&(n.height=this.getAvailableHeight(e)),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update),window.addEventListener("scroll",this.update,!0),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.update()}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestLayoutUpdate(){!1===this.pendingLayoutUpdate&&!1===this.pendingReset&&(this.pendingLayoutUpdate=!0,o.a.queueUpdate(()=>this.updateLayout()))}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.pendingLayoutUpdate=!1,this.setInitialState(),o.a.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.regionTop="0",this.regionRight="0",this.regionBottom="0",this.regionLeft="0",this.regionWidth="100%",this.regionHeight="100%",this.xTransformOrigin="left",this.yTransformOrigin="top",this.viewportRect=null,this.regionRect=null,this.anchorRect=null,this.regionDimension={height:0,width:0},this.anchorTop=0,this.anchorRight=0,this.anchorBottom=0,this.anchorLeft=0,this.anchorHeight=0,this.anchorWidth=0,this.verticalPosition="undefined",this.horizontalPosition="undefined",this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.style.opacity="0",this.style.pointerEvents="none",this.updateRegionStyle()}}d.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var n;null!==this.intersectionDetector&&(this.observedElements.has(t)?null===(n=this.observedElements.get(t))||void 0===n||n.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const n=this.observedElements.get(t);if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}},this.initializeIntersectionDetector=()=>{u.a.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],n=[];t.forEach(t=>{var i;null===(i=this.intersectionDetector)||void 0===i||i.unobserve(t.target);const r=this.observedElements.get(t.target);void 0!==r&&(r.forEach(i=>{let r=e.indexOf(i);-1===r&&(r=e.length,e.push(i),n.push([])),n[r].push(t)}),this.observedElements.delete(t.target))}),e.forEach((t,e)=>{t(n[e])})},this.initializeIntersectionDetector()}},Object(i.e)([s.b],d.prototype,"anchor",void 0),Object(i.e)([s.b],d.prototype,"viewport",void 0),Object(i.e)([Object(s.b)({attribute:"horizontal-positioning-mode"})],d.prototype,"horizontalPositioningMode",void 0),Object(i.e)([Object(s.b)({attribute:"horizontal-default-position"})],d.prototype,"horizontalDefaultPosition",void 0),Object(i.e)([Object(s.b)({attribute:"horizontal-inset",mode:"boolean"})],d.prototype,"horizontalInset",void 0),Object(i.e)([Object(s.b)({attribute:"horizontal-threshold"})],d.prototype,"horizontalThreshold",void 0),Object(i.e)([Object(s.b)({attribute:"horizontal-scaling"})],d.prototype,"horizontalScaling",void 0),Object(i.e)([Object(s.b)({attribute:"vertical-positioning-mode"})],d.prototype,"verticalPositioningMode",void 0),Object(i.e)([Object(s.b)({attribute:"vertical-default-position"})],d.prototype,"verticalDefaultPosition",void 0),Object(i.e)([Object(s.b)({attribute:"vertical-inset",mode:"boolean"})],d.prototype,"verticalInset",void 0),Object(i.e)([Object(s.b)({attribute:"vertical-threshold"})],d.prototype,"verticalThreshold",void 0),Object(i.e)([Object(s.b)({attribute:"vertical-scaling"})],d.prototype,"verticalScaling",void 0),Object(i.e)([Object(s.b)({attribute:"fixed-placement",mode:"boolean"})],d.prototype,"fixedPlacement",void 0),Object(i.e)([Object(s.b)({attribute:"auto-update-mode"})],d.prototype,"autoUpdateMode",void 0),Object(i.e)([a.d],d.prototype,"anchorElement",void 0),Object(i.e)([a.d],d.prototype,"viewportElement",void 0),Object(i.e)([a.d],d.prototype,"initialLayoutComplete",void 0);var h=n("6BDD"),b=n("6vBc");const p=h.b`
    <template class="${t=>t.initialLayoutComplete?"loaded":""}">
        ${Object(b.a)(t=>t.initialLayoutComplete,h.b`
                <slot></slot>
            `)}
    </template>
`;const f=n("4X57").a`
  :host {
    contain: layout;
    display: block;
  }
`;let g=class extends d{};g=Object(i.e)([Object(r.b)({name:"fluent-anchored-region",template:p,styles:f})],g)},"fz//":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s}));var i=n("MptA");function r(t,...e){return n=>e.reduce((t,e,i)=>t.replace(new RegExp(`\\{${i}\\}`,"g"),e(n)),t)}function o(t){return e=>String(t(e))}function s(t){return Object(i.a)(t)?t+" !important":e=>s(t(e))}},g6KR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("lFvR"),r=n("hv+n");function o(t,e,n,o,s,a){return c=>{const l=Object(i.o)(t,c),u=Object(r.e)(c)?-1:1,d=Object(r.h)(i.l)(l)(r.g)(()=>u)(Object(r.f)(Object(i.o)(e,c)))(c),h=Object(r.c)(t,d)(c),b=Object(i.o)(n,c),p=Object(i.o)(o,c),f=Object(i.o)(s,c),g=Object(i.o)(a,c);return function(t,e,n,i,o,s,a){const c=t+n*Math.abs(i-o),l=1===n?i<o:n*i>n*o,u=l?t:c,d=l?c:t,h=u+n*s,b=u+n*a;return{rest:Object(r.d)(u,e),hover:Object(r.d)(d,e),active:Object(r.d)(h,e),focus:Object(r.d)(b,e)}}(h,l,u,b,p,f,g)}}},gQ7Y:function(t,e,n){"use strict";var i=n("W6uJ");n.o(i,"AutoSuggestContext")&&n.d(e,"AutoSuggestContext",(function(){return i.AutoSuggestContext})),n.o(i,"ButtonDirection")&&n.d(e,"ButtonDirection",(function(){return i.ButtonDirection})),n.o(i,"ProgressType")&&n.d(e,"ProgressType",(function(){return i.ProgressType})),n.o(i,"RadioSlot")&&n.d(e,"RadioSlot",(function(){return i.RadioSlot})),e.default=i.default},"h/k5":function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.horizontal="horizontal",t.vertical="vertical"}(i||(i={}))},hPPo:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("5ZAu"),r=n("OvhW");let o=null;class s{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){o=this}static borrow(t){const e=o||new s;return e.directives=t,e.reset(),o=null,e}}function a(t){if(1===t.length)return t[0];let e;const n=t.length,i=t.map(t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding)),o=new r.b((t,e)=>{let r="";for(let o=0;o<n;++o)r+=i[o](t,e);return r});return o.targetName=e,o}const c=i.b.length;function l(t,e){const n=e.split(i.c);if(1===n.length)return null;const r=[];for(let e=0,o=n.length;e<o;++e){const o=n[e],s=o.indexOf(i.b);let a;if(-1===s)a=o;else{const e=parseInt(o.substring(0,s));r.push(t.directives[e]),a=o.substring(s+c)}""!==a&&r.push(a)}return r}function u(t,e,n=!1){const i=e.attributes;for(let o=0,s=i.length;o<s;++o){const c=i[o],u=c.value,d=l(t,u);let h=null;null===d?n&&(h=new r.b(()=>u),h.targetName=c.name):h=a(d),null!==h&&(e.removeAttributeNode(c),o--,s--,t.addFactory(h))}}function d(t,e,n){const i=l(t,e.textContent);if(null!==i){let r=e;for(let o=0,s=i.length;o<s;++o){const s=i[o],a=0===o?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",t.captureContentBinding(s)),r=a,t.targetIndex++,a!==e&&n.nextNode()}t.targetIndex--}}function h(t,e){const n=t.content;document.adoptNode(n);const r=s.borrow(e);u(r,t,!0);const o=r.behaviorFactories;r.reset();const a=i.a.createTemplateWalker(n);let c;for(;c=a.nextNode();)switch(r.targetIndex++,c.nodeType){case 1:u(r,c);break;case 3:d(r,c,a);break;case 8:i.a.isMarker(c)&&r.addFactory(e[i.a.extractDirectiveIndexFromMarker(c)])}let l=0;(i.a.isMarker(n.firstChild)||1===n.childNodes.length&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),l=-1);const h=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:h,hostBehaviorFactories:o,targetOffset:l}}},"hv+n":function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return p}));var i,r=n("lFvR"),o=n("JIBo");function s(t,e){return n=>{if(!Object(o.g)(e))return-1;const i=Object(r.o)(t,n),s=i.indexOf(e);return-1!==s?s:i.findIndex(t=>Object(o.g)(t)&&Object(o.c)(e,t))}}function a(t,e){return n=>{const i=Object(r.o)(t,n),a=Object(r.o)(e,n),c=s(i,a)(n);let l;if(-1!==c)return c;try{l=Object(o.h)(a)}catch(t){l=-1}return-1===l?0:i.map((t,e)=>({luminance:Object(o.h)(t),index:e})).reduce((t,e)=>Math.abs(e.luminance-l)<Math.abs(t.luminance-l)?e:t).index}}function c(t){return Object(o.h)(Object(r.l)(t))<=(-.1+Math.sqrt(.21))/2}function l(t,e){return"function"==typeof t?n=>e(n)[Object(o.b)(t(n),0,e(n).length-1)]:e[Object(o.b)(t,0,e.length-1)]}function u(t){return(e,n)=>i=>l(c(i)?Object(r.o)(n,i):Object(r.o)(e,i),t(i))}function d(t){return e=>n=>i=>s=>a=>{const c=Object(r.o)(t,a),l=Object(r.o)(e,a),u=l.length,d=Object(o.b)(n(c,l,a),0,u-1),h=i(d,l,a);const b=[].concat(l),p=u-1;let f=d;return-1===h&&(b.reverse(),f=p-f),function t(e,n,i=0,r=e.length-1){if(r===i)return e[i];const o=Math.floor((r-i)/2)+i;return n(e[o])?t(e,n,i,o):t(e,n,o+1,r)}(b,(function(t){return s(Object(o.e)(c,t))}),f,p)}}function h(t,e,n){return a(e,t)(n)}function b(t){return a(r.T,Object(r.l)(t))(t)}function p(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(i||(i={}))},iX68:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("lbfK"),r=n("ERkP"),o=n.n(r),s=n("qGiF"),a=n("wK6v");function c(t,e){return"string"==typeof t&&"string"==typeof e?t.concat(" ",e):"string"==typeof t?t:"string"==typeof e?e:void 0}class l extends o.a.Component{constructor(t,e){super(t,e),this.hasCreatedIntialStyleSheets=!1,this.index=l.index-=1,this.designSystem=e}static set jss(t){l.sheetManager.jss=t}static get jss(){return l.sheetManager.jss}static subscribe(t){return l.sheetManager.subscribe(t)}static unsubscribe(t){l.sheetManager.unsubscribe(t)}render(){if(!this.hasCreatedIntialStyleSheets){if(this.styles){const t={meta:this.managedComponent.displayName||this.managedComponent.name,index:this.index};"function"==typeof l.createGenerateClassName&&(t.generateClassName=l.createGenerateClassName(this.designSystem)),l.sheetManager.add(this.styles,this.designSystem,t)}this.props.jssStyleSheet&&this.createPropStyleSheet(),this.hasCreatedIntialStyleSheets=!0}return o.a.createElement(this.managedComponent,this.managedComponentProps())}componentDidUpdate(t){const e=!!this.props.jssStyleSheet,n=!!t.jssStyleSheet;this.designSystem!==this.context?(this.styles&&(l.sheetManager.update(this.styles,this.designSystem,this.context),this.forceUpdate()),n&&e?(t.jssStyleSheet===this.props.jssStyleSheet?l.sheetManager.update(this.props.jssStyleSheet,this.designSystem,this.context):(l.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(this.context)),this.forceUpdate()):n&&!e?l.sheetManager.remove(t.jssStyleSheet,this.designSystem):!n&&e&&(this.createPropStyleSheet(this.context),this.forceUpdate()),this.designSystem=this.context):n&&e&&t.jssStyleSheet!==this.props.jssStyleSheet&&(l.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(),this.forceUpdate()),n&&!e?l.sheetManager.remove(t.jssStyleSheet,this.designSystem):!n&&e&&(this.createPropStyleSheet(),this.forceUpdate())}componentWillUnmount(){this.styles&&l.sheetManager.remove(this.styles,this.designSystem),this.props.jssStyleSheet&&l.sheetManager.remove(this.props.jssStyleSheet,this.designSystem),l.index++,this.hasCreatedIntialStyleSheets=!1}primaryStyleSheet(){if(this.styles)return l.sheetManager.get(this.styles,this.designSystem)}secondaryStyleSheet(){if(this.props.jssStyleSheet)return l.sheetManager.get(this.props.jssStyleSheet,this.designSystem)}managedComponentProps(){const t=Object.assign(Object.assign({},this.props),{managedClasses:this.getManagedClassNames(),ref:this.props.innerRef});return delete t.jssStyleSheet,delete t.innerRef,t}getManagedClassNames(){let t={},e={};const n=this.primaryStyleSheet(),r=this.secondaryStyleSheet();return n&&n.hasOwnProperty("classes")&&(t=Object.assign({},n.classes)),r&&r.hasOwnProperty("classes")&&(e=Object.assign({},r.classes)),Object(i.a)(t,e,c)}createPropStyleSheet(t=this.designSystem){const e=this.primaryStyleSheet(),n={meta:(this.managedComponent.displayName||this.managedComponent.name)+" - jssStyleSheet",index:e?e.options.index+1:this.index+1};"function"==typeof l.createGenerateClassName&&(n.generateClassName=l.createGenerateClassName(t)),l.sheetManager.add(this.props.jssStyleSheet,t,n)}}l.contextType=s.c,l.index=-1e3,l.sheetManager=new class{constructor(){this.jss=a.a,this.registry=new WeakMap}add(t,e,n){const i=this.getTracker(t,e);if(Array.isArray(i))return void i[1]++;let r=this.registry.get(t);void 0===r&&(r=new WeakMap,this.registry.set(t,r)),this.registry.get(t).set(e,[this.createStyleSheet(t,e,n),1])}get(t,e){const n=this.getTracker(t,e);if(Array.isArray(n)&&n[0])return n[0]}update(t,e,n){const i=this.getTracker(t,e);if(i)if(1===i[1]&&!this.get(t,n)&&t&&"object"==typeof t){const r=i[0];r.update(n),this.notify("update",r),this.registry.get(t).delete(e),this.registry.get(t).set(n,i)}else this.remove(t,e),this.add(t,n,i[0].options)}remove(t,e){const n=this.getTracker(t,e);if(Array.isArray(n)&&(n[1]--,0===n[1])){const i=n[0];this.jss.removeStyleSheet(i),a.b.remove(i),this.notify("remove",i),this.registry.get(t).delete(e)}}count(t,e){const n=this.getTracker(t,e);return Array.isArray(n)?n[1]:-1}clean(){this.registry=new WeakMap}getTracker(t,e){const n=this.registry.get(t);if(n instanceof WeakMap){const t=n.get(e);if(Array.isArray(t))return t}}createStyleSheet(t,e,n={}){const i="function"==typeof t?t(e):t,r=this.jss.createStyleSheet(i,Object.assign({link:!0},n));return r.update(e).attach(),a.b.add(r),this.notify("add",r),r}notify(t,e){Array.isArray(this.subscribers)&&this.subscribers.forEach(n=>n({type:t,sheet:e}))}subscribe(t){return Array.isArray(this.subscribers)||(this.subscribers=[]),-1===this.subscribers.indexOf(t)&&this.subscribers.push(t),()=>{this.unsubscribe(t)}}unsubscribe(t){if(Array.isArray(this.subscribers)){const e=this.subscribers.indexOf(t);-1!==e&&this.subscribers.splice(e,1)}}}},idb7:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("+viU"),r=n("XR5X"),o=n("OnwC"),s=n("y2Il"),a=n("o1qX"),c=n("ERkP"),l=n.n(c),u=n("FPTP"),d=n("yR4y"),h=n("U6fx");class b extends o.a{constructor(){super(...arguments),this.handledProps={size:void 0,managedClasses:void 0}}render(){return l.a.createElement(u.a,Object.assign({},this.unhandledProps(),{tag:s.b.p,size:this.size,className:this.generateClassNames()}),this.props.children)}generateClassNames(){const t=this.props.managedClasses;return super.generateClassNames(Object(a.a)(t.paragraph,t["paragraph__"+this.props.size]))}get size(){switch(this.props.size){case h.a._1:return s.a._5;case h.a._2:return s.a._6;default:return s.a._7}}}b.defaultProps={size:h.a._3,managedClasses:{}},b.displayName=d.a+"Paragraph";var p=b;const f=Object(i.a)(r.a)(p)},iuMt:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("FGLN");function r(t=""){return"&:focus-visible"+t}function o(t=""){return`body:not(.js-focus-visible) &:focus${t}, .js-focus-visible &.focus-visible${t}, .js-focus-visible [data-focus-visible-added]&${t}`}function s(t,e){let n,s;if("object"==typeof t&&null!==t)s="",n=t;else{if("string"!=typeof t)return{};s=t,n=e}return Object.assign({"&:focus":{outline:"none"}},Object(i.b)()?{[r(s)]:n}:{[o(s)]:n})}},iyNs:function(t,e){},"j48/":function(t,e){},j9Xn:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(i||(i={}))},jbxw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var i=n("lFvR"),r=n("JIBo"),o=n("g6KR");function s(t){return Object(o.a)(i.T,t,0,0,0,0)}const a=Object(r.i)(r.a.rest,Object(r.d)(s(4.5))),c=Object(r.i)(r.a.rest,Object(r.d)(s(3)))},k0Z1:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("+viU"),r=n("J4ZL"),o=n("OnwC"),s=n("o1qX"),a=n("XJ1h"),c=n("ERkP"),l=n.n(c),u=n("xDbA"),d=n("NS3c"),h=n("yR4y"),b=n("Zp2t");class p extends o.a{constructor(){super(...arguments),this.handledProps={appearance:void 0,href:void 0,managedClasses:void 0,disabled:void 0,glyph:void 0},this.generateGlyph=()=>this.props.glyph(Object(s.a)(this.props.managedClasses.actionTrigger_glyph))}render(){return l.a.createElement(u.a,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),disabled:this.props.disabled,href:this.props.href,appearance:d.a[b.a[this.props.appearance]],jssStyleSheet:r.a,beforeContent:this.generateGlyph}),this.props.children)}generateClassNames(){const{actionTrigger:t,actionTrigger__disabled:e,actionTrigger__hasGlyphAndContent:n}=this.props.managedClasses;return super.generateClassNames(Object(s.a)(t,[e,this.props.disabled],[this.props.managedClasses["actionTrigger__"+this.props.appearance],"string"==typeof this.props.appearance],[n,this.hasGlyphAndContent()]))}hasGlyphAndContent(){return!Object(a.a)(this.props.glyph)&&!Object(a.a)(this.props.children)}}p.displayName=h.a+"ActionTrigger",p.defaultProps={managedClasses:{}};var f=p;const g=Object(i.a)(r.b)(f)},kL0l:function(t,e,n){"use strict";n.d(e,"G",(function(){return dt})),n.d(e,"F",(function(){return ht})),n.d(e,"B",(function(){return bt})),n.d(e,"C",(function(){return pt})),n.d(e,"D",(function(){return ft})),n.d(e,"E",(function(){return gt})),n.d(e,"h",(function(){return vt})),n.d(e,"g",(function(){return mt})),n.d(e,"e",(function(){return yt})),n.d(e,"f",(function(){return Ot})),n.d(e,"s",(function(){return jt})),n.d(e,"o",(function(){return xt})),n.d(e,"l",(function(){return Ct})),n.d(e,"n",(function(){return wt})),n.d(e,"t",(function(){return kt})),n.d(e,"w",(function(){return Ft})),n.d(e,"v",(function(){return Dt})),n.d(e,"u",(function(){return St})),n.d(e,"x",(function(){return Pt})),n.d(e,"y",(function(){return Tt})),n.d(e,"r",(function(){return $t})),n.d(e,"q",(function(){return At})),n.d(e,"p",(function(){return Bt})),n.d(e,"c",(function(){return Et})),n.d(e,"b",(function(){return Rt})),n.d(e,"a",(function(){return Lt})),n.d(e,"d",(function(){return _t})),n.d(e,"m",(function(){return Nt})),n.d(e,"P",(function(){return Mt})),n.d(e,"O",(function(){return It})),n.d(e,"M",(function(){return zt})),n.d(e,"N",(function(){return Ht})),n.d(e,"k",(function(){return Vt})),n.d(e,"J",(function(){return Gt})),n.d(e,"H",(function(){return qt})),n.d(e,"I",(function(){return Ut})),n.d(e,"K",(function(){return Wt})),n.d(e,"L",(function(){return Qt})),n.d(e,"z",(function(){return Xt})),n.d(e,"A",(function(){return Zt})),n.d(e,"j",(function(){return Jt})),n.d(e,"i",(function(){return Yt}));var i=n("Kt+H"),r=n("qibw"),o=n("xzNF");var s=n("JIBo"),a=n("lFvR"),c=n("g6KR");const l=Object(s.d)(Object(c.a)(a.T,4.5,0,a.L,a.J,a.K)),u=Object(s.i)(s.a.rest,l),d=(Object(s.i)(s.a.hover,l),Object(s.i)(s.a.active,l),Object(s.i)(s.a.focus,l),(t,e)=>Object(s.e)("#FFFFFF",t)>=e?"#FFFFFF":"#000000");function h(t){return function(e){return"function"==typeof e?n=>d(e(n),t):d(u(e),t)}}const b=h(4.5),p=h(3);var f=n("jbxw"),g=n("hv+n");function v(t){return e=>{const n=Object(a.k)(e),i=Object(a.b)(e),r=Object(g.b)(a.k,i)(e),o={rest:Object(a.j)(e),hover:Object(a.i)(e),active:Object(a.g)(e),focus:Object(a.h)(e)},s=Object(g.e)(e)?-1:1,c=r+(1===s?Math.min(o.rest,o.hover):Math.max(s*o.rest,s*o.hover)),l=Object(g.h)(a.l)(a.k)(()=>c)(()=>s)(e=>e>=t)(e),u=Object(g.c)(a.k,l)(e),d=u+s*Math.abs(o.rest-o.hover),h=1===s?o.rest<o.hover:s*o.rest>s*o.hover,b=h?u:d,p=h?d:u,f=b+s*o.active,v=b+s*o.focus;return{rest:Object(g.d)(b,n),hover:Object(g.d)(p,n),active:Object(g.d)(f,n),focus:Object(g.d)(v,n)}}}const m=Object(s.d)(v(4.5)),y=Object(s.d)(v(3)),O=(Object(s.i)(s.a.rest,m),Object(s.i)(s.a.hover,m),Object(s.i)(s.a.active,m),Object(s.i)(s.a.focus,m),Object(s.i)(s.a.rest,y),Object(s.i)(s.a.hover,y),Object(s.i)(s.a.active,y),Object(s.i)(s.a.focus,y),(t,e)=>Object(s.e)("#FFFFFF",t)>=e?"#FFFFFF":"#000000");function j(t){return function(e){return"function"==typeof e?n=>O(e(n),t):O(Object(a.b)(e),t)}}const x=j(4.5);j(3);var C=n("qTjs"),w=n("BoLm");function k(t){return e=>{const n=Object(g.e)(e)?-1:1;return Object(g.d)(Object(g.a)(e)-t(e)*n,Object(a.T)(e))}}const F=Object(s.d)(k(a.A)),D=Object(s.d)(k(a.z)),S=Object(s.d)(k(a.x)),P=Object(s.d)(k(a.y)),T=Object(s.d)(k(a.B)),$=Object(s.d)(t=>({rest:F(t),hover:D(t),active:S(t),focus:P(t),selected:T(t)}));var A=Math.max,B=Math.min;var E=function(t,e,n){return t>=B(e,n)&&t<A(e,n)},R=/\s/;var L=function(t){for(var e=t.length;e--&&R.test(t.charAt(e)););return e},_=/^\s+/;var N=function(t){return t?t.slice(0,L(t)+1).replace(_,""):t},M=n("PeVN"),I=n("xR5m");var z=function(t){return null!=t&&"object"==typeof t};var H=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==Object(I.a)(t)},V=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,q=/^0o[0-7]+$/i,U=parseInt;var W=function(t){if("number"==typeof t)return t;if(H(t))return NaN;if(Object(M.a)(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Object(M.a)(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=N(t);var n=G.test(t);return n||q.test(t)?U(t.slice(2),n?2:8):V.test(t)?NaN:+t};var Q=function(t){return t?(t=W(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var X=function(t,e,n){return e=Q(e),void 0===n?(n=e,e=0):n=Q(n),t=W(t),E(t,e,n)};const Z=Object(s.f)(a.C,a.w,a.t);function K(t){return e=>{const n=Object(a.k)(e),i=n.length,r=Object(a.b)(e),o=x(Object.assign({},e,{backgroundColor:r})),c=Object(a.e)(e),l=Object(g.a)(e)>=Z(e)?-1:1,u=i-1,d=Object(g.b)(a.k,r)(e);let h=0;for(;h<l*c&&X(d+h+l,0,i)&&Object(s.e)(n[d+h+l],o)>=t&&X(d+h+l+l,0,u);)h+=l;const b=d+h,p=b+-1*l*c,f=p+l*Object(a.c)(e),v=p+l*Object(a.d)(e);return{rest:Object(g.d)(p,n),hover:Object(g.d)(b,n),active:Object(g.d)(f,n),focus:Object(g.d)(v,n),selected:Object(g.d)(p+(Object(g.e)(e)?-1*Object(a.f)(e):Object(a.f)(e)),n)}}}const J=Object(s.d)(K(4.5)),Y=Object(s.d)(K(3));Object(s.i)(s.a.rest,J),Object(s.i)(s.a.hover,J),Object(s.i)(s.a.active,J),Object(s.i)(s.a.focus,J),Object(s.i)(s.a.selected,J),Object(s.i)(s.a.rest,Y),Object(s.i)(s.a.hover,Y),Object(s.i)(s.a.active,Y),Object(s.i)(s.a.focus,Y),Object(s.i)(s.a.selected,Y);var tt=n("cqAE");const et=Object(s.d)(t=>{const e=Object(a.T)(t),n=Object(g.a)(t),i=Object(g.e)(t)?-1:1,r=Object(a.S)(t),o=n+i*r,s=o+i*(Object(a.R)(t)-r),c=o+i*(Object(a.P)(t)-r),l=o+i*(Object(a.Q)(t)-r);return{rest:Object(g.d)(o,e),hover:Object(g.d)(s,e),active:Object(g.d)(c,e),focus:Object(g.d)(l,e)}}),nt=(Object(s.i)(s.a.rest,et),Object(s.i)(s.a.hover,et),Object(s.i)(s.a.active,et),Object(s.i)(s.a.focus,et),Object(s.d)(t=>{const e=Object(a.T)(t),n=Object(g.a)(t),i=Object(a.s)(t),r=n+(Object(g.e)(t)?-1:1)*i;return Object(g.d)(r,e)}));var it=n("ARa2");function rt(t){return t>3.5}const ot=Object(g.h)(a.l)(a.T)((function(t,e,n){return Object(g.b)(a.T,t)(n)}))((function(t,e,n){return Object(g.e)(n)?-1:1}))(rt),st=Object(s.d)(ot);function at(t,e,n){return Object(g.e)(n)?1:-1}const ct=Object(s.d)(Object(c.a)(a.T,14,0,a.r,a.p,a.q)),lt=Object(s.i)(s.a.rest,ct);Object(s.i)(s.a.hover,ct),Object(s.i)(s.a.active,ct),Object(s.i)(s.a.focus,ct);var ut=n("TgmJ");const dt=Object(i.b)("neutral-foreground-rest",t=>Object(o.a)(t).rest,ut.a.findProvider),ht=Object(i.b)("neutral-foreground-hover",t=>Object(o.a)(t).hover,ut.a.findProvider),bt=Object(i.b)("neutral-foreground-active",t=>Object(o.a)(t).active,ut.a.findProvider),pt=Object(i.b)("neutral-foreground-focus",t=>Object(o.a)(t).focus,ut.a.findProvider),ft=(Object(i.b)("neutral-foreground-toggle",b,ut.a.findProvider),Object(i.b)("neutral-foreground-toggle-large",p,ut.a.findProvider),Object(i.b)("neutral-foreground-hint",f.a,ut.a.findProvider)),gt=Object(i.b)("neutral-foreground-hint-large",f.b,ut.a.findProvider),vt=Object(i.b)("accent-foreground-rest",t=>m(t).rest,ut.a.findProvider),mt=Object(i.b)("accent-foreground-hover",t=>m(t).hover,ut.a.findProvider),yt=Object(i.b)("accent-foreground-active",t=>m(t).active,ut.a.findProvider),Ot=(Object(i.b)("accent-foreground-focus",t=>m(t).focus,ut.a.findProvider),Object(i.b)("accent-foreground-cut-rest",t=>x(t),ut.a.findProvider)),jt=(Object(i.b)("accent-foreground-large-rest",t=>y(t).rest,ut.a.findProvider),Object(i.b)("accent-foreground-large-hover",t=>y(t).hover,ut.a.findProvider),Object(i.b)("accent-foreground-large-active",t=>y(t).active,ut.a.findProvider),Object(i.b)("accent-foreground-large-focus",t=>y(t).focus,ut.a.findProvider),Object(i.b)("neutral-fill-rest",t=>Object(C.a)(t).rest,ut.a.findProvider)),xt=Object(i.b)("neutral-fill-hover",t=>Object(C.a)(t).hover,ut.a.findProvider),Ct=Object(i.b)("neutral-fill-active",t=>Object(C.a)(t).active,ut.a.findProvider),wt=Object(i.b)("neutral-fill-focus",t=>Object(C.a)(t).focus,ut.a.findProvider),kt=Object(i.b)("neutral-fill-selected",t=>Object(C.a)(t).selected,ut.a.findProvider),Ft=Object(i.b)("neutral-fill-stealth-rest",t=>Object(w.a)(t).rest,ut.a.findProvider),Dt=Object(i.b)("neutral-fill-stealth-hover",t=>Object(w.a)(t).hover,ut.a.findProvider),St=Object(i.b)("neutral-fill-stealth-active",t=>Object(w.a)(t).active,ut.a.findProvider),Pt=(Object(i.b)("neutral-fill-stealth-focus",t=>Object(w.a)(t).focus,ut.a.findProvider),Object(i.b)("neutral-fill-stealth-selected",t=>Object(w.a)(t).selected,ut.a.findProvider)),Tt=(Object(i.b)("neutral-fill-toggle-rest",t=>l(t).rest,ut.a.findProvider),Object(i.b)("neutral-fill-toggle-hover",t=>l(t).hover,ut.a.findProvider)),$t=(Object(i.b)("neutral-fill-toggle-active",t=>l(t).active,ut.a.findProvider),Object(i.b)("neutral-fill-toggle-focus",t=>l(t).focus,ut.a.findProvider),Object(i.b)("neutral-fill-input-rest",t=>$(t).rest,ut.a.findProvider)),At=Object(i.b)("neutral-fill-input-hover",t=>$(t).hover,ut.a.findProvider),Bt=Object(i.b)("neutral-fill-input-active",t=>$(t).active,ut.a.findProvider),Et=(Object(i.b)("neutral-fill-input-focus",t=>$(t).focus,ut.a.findProvider),Object(i.b)("accent-fill-rest",t=>J(t).rest,ut.a.findProvider)),Rt=Object(i.b)("accent-fill-hover",t=>J(t).hover,ut.a.findProvider),Lt=Object(i.b)("accent-fill-active",t=>J(t).active,ut.a.findProvider),_t=(Object(i.b)("accent-fill-focus",t=>J(t).focus,ut.a.findProvider),Object(i.b)("accent-fill-selected",t=>J(t).selected,ut.a.findProvider)),Nt=(Object(i.b)("accent-fill-large-rest",t=>Y(t).rest,ut.a.findProvider),Object(i.b)("accent-fill-large-hover",t=>Y(t).hover,ut.a.findProvider),Object(i.b)("accent-fill-large-active",t=>Y(t).active,ut.a.findProvider),Object(i.b)("accent-fill-large-focus",t=>Y(t).focus,ut.a.findProvider),Object(i.b)("accent-fill-large-selected",t=>Y(t).selected,ut.a.findProvider),Object(i.b)("neutral-fill-card-rest",t=>Object(tt.a)(t),ut.a.findProvider)),Mt=Object(i.b)("neutral-outline-rest",t=>et(t).rest,ut.a.findProvider),It=Object(i.b)("neutral-outline-hover",t=>et(t).hover,ut.a.findProvider),zt=Object(i.b)("neutral-outline-active",t=>et(t).active,ut.a.findProvider),Ht=Object(i.b)("neutral-outline-focus",t=>et(t).focus,ut.a.findProvider),Vt=Object(i.b)("neutral-divider-rest",nt,ut.a.findProvider),Gt=Object(i.b)("neutral-layer-floating",it.d,ut.a.findProvider),qt=Object(i.b)("neutral-layer-card",it.b,ut.a.findProvider),Ut=Object(i.b)("neutral-layer-card-container",it.c,ut.a.findProvider),Wt=Object(i.b)("neutral-layer-l1",it.e,ut.a.findProvider),Qt=(Object(i.b)("neutral-layer-l1-alt",it.f,ut.a.findProvider),Object(i.b)("neutral-layer-l2",it.g,ut.a.findProvider)),Xt=(Object(i.b)("neutral-layer-l3",it.h,ut.a.findProvider),Object(i.b)("neutral-layer-l4",it.i,ut.a.findProvider),Object(i.b)("neutral-focus",st,ut.a.findProvider)),Zt=Object(i.b)("neutral-focus-inner-accent",(Kt=a.b,Object(g.h)(st)(a.k)(function(t){return(e,n,i)=>n.indexOf(t(i))}(Kt))(at)(rt)),ut.a.findProvider);var Kt;const Jt=Object(i.b)("neutral-contrast-foreground-rest",t=>Object(o.b)(lt)(t),ut.a.findProvider),Yt=Object(i.b)("neutral-contrast-fill-rest",t=>ct(t).rest,ut.a.findProvider);Object(i.b)("neutral-contrast-fill-hover",t=>ct(t).hover,ut.a.findProvider),Object(i.b)("neutral-contrast-fill-active",t=>ct(t).active,ut.a.findProvider),Object(i.b)("neutral-contrast-fill-focus",t=>ct(t).focus,ut.a.findProvider),Object(i.b)("inline-start",t=>Object(a.n)(t)===r.a.ltr?"left":"right",ut.a.findProvider),Object(i.b)("inline-end",t=>Object(a.n)(t)===r.a.ltr?"right":"left",ut.a.findProvider)},kpPY:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o}));n("nwjK");function i(t,...e){return t.replace(/{(\d+)}/g,(function(t,n){if(n>=e.length)return t;const i=e[n];return"number"==typeof i||i?i:""}))}function r(t,e,n=0){return!(!t||!e)&&t.substr(n,e.length)===e}function o(t){return!t||!t.trim()}},"kyf+":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("4zka"),r=n("xiVQ"),o=n("oGZu"),s=i.a.isFunction,a=function(t,e){var n=this,i=null,r=s(t.processTelemetry),a=s(t.setNextPlugin);n._hasRun=!1,n.getPlugin=function(){return t},n.getNext=function(){return i},n.setNext=function(t){i=t},n.processTelemetry=function(s,c){if(c||(c=e),t&&r){n._hasRun=!0;try{c.setNext(i),a&&t.setNextPlugin(i),i&&(i._hasRun=!1),t.processTelemetry(s,c)}catch(e){var l=i&&i._hasRun;i&&l||c.diagLog().throwInternal(o.a.CRITICAL,o.b.PluginException,"Plugin ["+t.identifier+"] failed during processTelemetry - "+e),i&&!l&&i.processTelemetry(s,c)}}else i&&(n._hasRun=!0,i.processTelemetry(s,c))}},c=i.a.isNullOrUndefined;function l(t,e){var n=[];if(t&&t.length>0)for(var r=null,o=0;o<t.length;o++){var s=t[o];if(s&&i.a.isFunction(s.processTelemetry)){var c=new a(s,e);n.push(c),r&&r.setNext(c),r=c}}return n.length>0?n[0]:null}var u=function t(e,n,o,s){var a=this,u=null;null!==s&&(e&&i.a.isFunction(e.getPlugin)?u=function(t,e,n){var i=[],r=!n;if(t)for(;t;){var o=t.getPlugin();(r||o===n)&&(r=!0,i.push(o)),t=t.getNext()}return r||i.push(n),l(i,e)}(e,a,s||e.getPlugin()):s?u=function(t,e,n){var r=t,o=!1;return n&&t&&(r=[],i.a.arrForEach(t,(function(t){(o||t===n)&&(o=!0,r.push(t))}))),n&&!o&&(r||(r=[]),r.push(n)),l(r,e)}(e,a,s):i.a.isUndefined(s)&&(u=l(e,a))),a.core=function(){return o},a.diagLog=function(){var t=(o||{}).logger;return t||(t=new r.a(n||{})),t},a.getCfg=function(){return n},a.getExtCfg=function(t,e){var i;if(void 0===e&&(e={}),n){var r=n.extensionConfig;r&&t&&(i=r[t])}return i||e},a.getConfig=function(t,e,i){var r;void 0===i&&(i=!1);var o=a.getExtCfg(t,null);return o&&!c(o[e])?r=o[e]:n&&!c(n[e])&&(r=n[e]),c(r)?i:r},a.hasNext=function(){return null!=u},a.getNext=function(){return u},a.setNext=function(t){u=t},a.processNext=function(t){var e=u;e&&(u=e.getNext(),e.processTelemetry(t,a))},a.createNew=function(e,i){return void 0===e&&(e=null),new t(e||u,n,o,i)}}},l4WF:function(t,e,n){"use strict";var i=n("yqT/"),r=n("Uaaq");e.a=new class{constructor(){this._breakpoints=r.a,this._defaultBreakpoint=0,this.subscriptions=[],this.update=()=>{const t=Object(i.a)()?Object(r.c)(window.innerWidth,this._breakpoints):this.defaultBreakpoint;this.breakpoint!==t&&(this.breakpoint=t,this.notifySubscribers(this.breakpoint)),this.openRequestAnimationFrame=!1},this.currentBreakpoint=()=>this.breakpoint,this.requestFrame=()=>{this.openRequestAnimationFrame||(this.openRequestAnimationFrame=!0,window.requestAnimationFrame(this.update))},Object(i.a)()?(this.breakpoint=Object(r.c)(window.innerWidth,this._breakpoints),window.addEventListener("resize",this.requestFrame)):this.breakpoint=this.defaultBreakpoint}get breakpoints(){return this._breakpoints}set breakpoints(t){this._breakpoints=t,this.update()}get defaultBreakpoint(){return this._defaultBreakpoint}set defaultBreakpoint(t){this._defaultBreakpoint=t,this.update()}subscribe(t){this.subscriptions.includes(t)||this.subscriptions.push(t)}unsubscribe(t){this.subscriptions=this.subscriptions.filter(e=>t!==e)}notifySubscribers(t){this.subscriptions.forEach(e=>{e(t)})}}},lFvR:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"o",(function(){return r})),n.d(e,"l",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"T",(function(){return c})),n.d(e,"k",(function(){return l})),n.d(e,"n",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"f",(function(){return p})),n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return g})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"C",(function(){return y})),n.d(e,"w",(function(){return O})),n.d(e,"t",(function(){return j})),n.d(e,"v",(function(){return x})),n.d(e,"D",(function(){return C})),n.d(e,"A",(function(){return w})),n.d(e,"z",(function(){return k})),n.d(e,"x",(function(){return F})),n.d(e,"y",(function(){return D})),n.d(e,"B",(function(){return S})),n.d(e,"H",(function(){return P})),n.d(e,"G",(function(){return T})),n.d(e,"E",(function(){return $})),n.d(e,"F",(function(){return A})),n.d(e,"I",(function(){return B})),n.d(e,"L",(function(){return E})),n.d(e,"J",(function(){return R})),n.d(e,"K",(function(){return L})),n.d(e,"m",(function(){return _})),n.d(e,"u",(function(){return N})),n.d(e,"O",(function(){return M})),n.d(e,"M",(function(){return I})),n.d(e,"N",(function(){return z})),n.d(e,"s",(function(){return H})),n.d(e,"S",(function(){return V})),n.d(e,"R",(function(){return G})),n.d(e,"P",(function(){return q})),n.d(e,"Q",(function(){return U})),n.d(e,"r",(function(){return W})),n.d(e,"p",(function(){return Q})),n.d(e,"q",(function(){return X}));const i={typeRampMinus2FontSize:"10px",typeRampMinus2LineHeight:"16px",typeRampMinus1FontSize:"12px",typeRampMinus1LineHeight:"16px",typeRampBaseFontSize:"14px",typeRampBaseLineHeight:"20px",typeRampPlus1FontSize:"16px",typeRampPlus1LineHeight:"24px",typeRampPlus2FontSize:"20px",typeRampPlus2LineHeight:"28px",typeRampPlus3FontSize:"28px",typeRampPlus3LineHeight:"36px",typeRampPlus4FontSize:"34px",typeRampPlus4LineHeight:"44px",typeRampPlus5FontSize:"46px",typeRampPlus5LineHeight:"56px",typeRampPlus6FontSize:"60px",typeRampPlus6LineHeight:"72px",accentBaseColor:"#0078D4",accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],backgroundColor:"#FFFFFF",baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,cornerRadius:2,elevatedCornerRadius:4,density:0,designUnit:4,direction:n("qibw").a.ltr,disabledOpacity:.3,focusOutlineWidth:2,neutralBaseColor:"#808080",neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],outlineWidth:1,accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25,neutralContrastFillRestDelta:0,neutralContrastFillHoverDelta:-3,neutralContrastFillActiveDelta:7,neutralContrastFillFocusDelta:0};function r(t,e){return"function"==typeof t?t(e):t}function o(t){return e=>e&&void 0!==e[t]?e[t]:i[t]}const s=o("backgroundColor"),a=(o("neutralBaseColor"),o("accentBaseColor")),c=(o("cornerRadius"),o("neutralPalette")),l=o("accentPalette"),u=(o("designUnit"),o("baseHeightMultiplier"),o("baseHorizontalSpacingMultiplier"),o("outlineWidth"),o("focusOutlineWidth"),o("disabledOpacity"),o("direction")),d=(o("accentFillRestDelta"),o("accentFillHoverDelta")),h=o("accentFillActiveDelta"),b=o("accentFillFocusDelta"),p=o("accentFillSelectedDelta"),f=o("accentForegroundRestDelta"),g=o("accentForegroundHoverDelta"),v=o("accentForegroundActiveDelta"),m=o("accentForegroundFocusDelta"),y=o("neutralFillRestDelta"),O=o("neutralFillHoverDelta"),j=o("neutralFillActiveDelta"),x=o("neutralFillFocusDelta"),C=o("neutralFillSelectedDelta"),w=o("neutralFillInputRestDelta"),k=o("neutralFillInputHoverDelta"),F=o("neutralFillInputActiveDelta"),D=o("neutralFillInputFocusDelta"),S=o("neutralFillInputSelectedDelta"),P=o("neutralFillStealthRestDelta"),T=o("neutralFillStealthHoverDelta"),$=o("neutralFillStealthActiveDelta"),A=o("neutralFillStealthFocusDelta"),B=o("neutralFillStealthSelectedDelta"),E=o("neutralFillToggleHoverDelta"),R=o("neutralFillToggleActiveDelta"),L=o("neutralFillToggleFocusDelta"),_=o("baseLayerLuminance"),N=o("neutralFillCardDelta"),M=o("neutralForegroundHoverDelta"),I=o("neutralForegroundActiveDelta"),z=o("neutralForegroundFocusDelta"),H=o("neutralDividerRestDelta"),V=o("neutralOutlineRestDelta"),G=o("neutralOutlineHoverDelta"),q=o("neutralOutlineActiveDelta"),U=o("neutralOutlineFocusDelta"),W=(o("neutralContrastFillRestDelta"),o("neutralContrastFillHoverDelta")),Q=o("neutralContrastFillActiveDelta"),X=o("neutralContrastFillFocusDelta")},"li++":function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var i=n("D57K"),r=n("P4Ao"),o=n("QBS5"),s=n("oePG"),a=n("6fxl"),c=n("C5kU"),l=n("o87Z");class u extends(Object(l.a)(class extends r.a{constructor(){super(...arguments),this.proxy=document.createElement("input")}})){}class d extends u{readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly)}autocompleteChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autocomplete=this.autocomplete)}autofocusChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autofocus=this.autofocus)}placeholderChanged(){this.proxy instanceof HTMLElement&&(this.proxy.placeholder=this.placeholder)}maxlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.minLength=this.minlength)}sizeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLElement&&(this.proxy.spellcheck=this.spellcheck)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}valueChanged(){this.$fastController.isConnected&&this.setFormValue(this.value),this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.$emit("change")}submitSearch(){var t;this.$emit("submit"),null===(t=this.form)||void 0===t||t.submit()}connectedCallback(){super.connectedCallback(),this.autofocus&&this.focus(),this.setFormValue(this.value,this.value)}handleTextInput(){this.control&&null!==this.control.value&&(this.value=this.control.value)}}Object(i.e)([Object(o.b)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),Object(i.e)([o.b],d.prototype,"autocomplete",void 0),Object(i.e)([Object(o.b)({mode:"boolean"})],d.prototype,"autofocus",void 0),Object(i.e)([o.b],d.prototype,"placeholder",void 0),Object(i.e)([Object(o.b)({converter:o.d})],d.prototype,"maxlength",void 0),Object(i.e)([Object(o.b)({converter:o.d})],d.prototype,"minlength",void 0),Object(i.e)([Object(o.b)({converter:o.d})],d.prototype,"size",void 0),Object(i.e)([Object(o.b)({mode:"boolean"})],d.prototype,"spellcheck",void 0),Object(i.e)([Object(o.b)({mode:"boolean"})],d.prototype,"isOnImage",void 0),Object(i.e)([Object(o.b)({attribute:"button-label"})],d.prototype,"buttonLabel",void 0),Object(i.e)([s.d],d.prototype,"buttonTelemetryTag",void 0),Object(i.e)([s.d],d.prototype,"inputTelemetryTag",void 0),Object(i.e)([s.d],d.prototype,"defaultSlottedNodes",void 0),Object(a.a)(d,c.a);var h=n("6BDD"),b=n("+53S"),p=n("m1Vi"),f=n("eUhr");p.b;const g=h.b`
    <template
        tabindex="${t=>t.disabled?null:0}"
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.isOnImage?"onimage":""}
        "
    >
        <div class="root" part="root">
            ${c.c}
            <input
                class="control"
                part="control"
                type="search"
                id="${t=>t.id}"
                title="${t=>t.title}"
                name="${t=>t.name}"
                @input=${t=>t.handleTextInput()}
                aria-label="${t=>t.title}"
                placeholder=${t=>t.placeholder}
                autocomplete=${t=>t.autocomplete}
                ?required=${t=>t.required}
                ?disabled=${t=>t.disabled}
                ?readonly=${t=>t.readOnly}
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                ${Object(b.b)("control")}
                ${Object(f.b)(t=>t.inputTelemetryTag)}
            />
        </div>
        <div class="searchoptions">
            <slot name="search-options"></slot>
        </div>
        <fluent-button
            title=${t=>t.buttonLabel}
            aria-label=${t=>t.buttonLabel}
            tabIndex=${t=>t.disabled?"-1":"0"}
            appearance="${t=>t.isOnImage?"stealth":"accent"}"
            @click="${t=>t.submitSearch()}"
            @keypress="${t=>t.submitSearch()}"
            ${Object(f.b)(t=>t.buttonTelemetryTag)}
        >
            <span part="end" class="end-slot" ${Object(b.b)("endContainer")}>
                <slot
                    name="end"
                    ${Object(b.b)("end")}
                    @slotchange=${t=>t.handleEndContentChange()}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="3 3 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                        />
                    </svg>
                </slot>
            </span>
        </fluent-button>
    </template>
`;var v=n("xY0q"),m=n("wHpb"),y=n("2i1/"),O=n("CzTk"),j=n("oqLQ"),x=n("kL0l"),C=n("cQsl"),w=n("4X57"),k=n("j9Xn"),F=n("zrlR");const D=w.a`
    fluent-button {
        border-radius: 0 var(--search-box-radius) var(--search-box-radius) 0;
    }

    :host(:not([disabled])) .root:focus-within::after {
        border-radius: var(--search-box-radius) 0 0 var(--search-box-radius);
    }

    :host(:focus-within:not([disabled])) fluent-button::after,
    :host([isonimage]:focus-within:not([disabled])) fluent-button::after {
        border-radius: 0 var(--search-box-radius) var(--search-box-radius) 0;
    }

    .searchoptions {
        right: 70px;
    }
`,S=w.a`
    fluent-button {
        border-radius: var(--search-box-radius) 0 0 var(--search-box-radius);
    }

    :host(:not([disabled])) .root:focus-within::after {
        border-radius: 0 var(--search-box-radius) var(--search-box-radius) 0;
    }

    :host(:focus-within:not([disabled])) fluent-button::after,
    :host([isonimage]:focus-within:not([disabled])) fluent-button::after {
        border-radius: var(--search-box-radius) 0 0 var(--search-box-radius);
    }

    .searchoptions {
        left: 70px;
    }
`,P=w.a`
    ${Object(v.a)("inline-flex")} :host {
        --search-box-radius: calc(var(--corner-radius) * 2px);
        font-family: var(--body-font);
        outline: none;
        user-select: none;
        --elevation: 4;
        border-radius: var(--search-box-radius);
        transition: all 0.2s ease-in-out;
        position: relative;
        background: ${x.J.var};
        ${C.a}
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${x.D.var};        
        border-radius: var(--search-box-radius) 0 0 var(--search-box-radius);
    }

    .control {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        margin-top: auto;
        margin-bottom: auto; 
        border: none;
        padding: calc(var(--design-unit) * 2px + 2px) 12px;
        color: ${x.G.var};
        ${""}
        font-size: 15px;
        font-weight: 400;
        line-height: var(--type-ramp-plus-1-line-height);
        width: 100%;
        z-index: 1;
    }

    .searchoptions {
        position: absolute;
        z-index: 900;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

    .control:hover,
    .control:${m.a},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .before-content,
    .after-content {
        ${""} width: 16px;
        height: 16px;
        margin: auto;
        fill: ${x.G.var};
    }

    .end-slot {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    fluent-button {
        height: auto;
        position: relative;
    }

    fluent-button.stealth {
        background: transparent;
    }

    fluent-button.stealth:hover {
        background: ${x.v.var}
    }

    fluent-button::part(control) {
        padding-right: 24px !important;
        padding-left: 24px !important;
    }
    
    :host(:hover:not([disabled])) {
        --elevation: 6;
        ${C.a}
    }

    :host(:not([disabled])) .root:focus-within::after,
    :host(:focus-within:not([disabled])) fluent-button::after,
    :host([isonimage]:focus-within:not([disabled])) fluent-button::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    :host([isonimage]) .end-slot slot[name="end"] > svg {
        fill: ${x.h.var};
    }

    :host([isonimage]) fluent-button.stealth:hover {
        background: transparent;
    }

    :host(:not([disabled])) .root:focus-within::after {
        border-right: 0;
    }

    :host(:focus-within:not([disabled])) fluent-button::after,
	:host([isonimage]:focus-within:not([disabled])) fluent-button::after	{
        border-left: 0;
    }

    :host(:focus-within:not([disabled])) fluent-button:focus::after {
        content: unset;
    }

    :host([disabled]) .label,
    :host([readOnly]) .label,
    :host([readOnly]) .control,
    :host([disabled]) .control {
        cursor: ${y.a};
    }

    :host([disabled]) {
        opacity: var(--disabled-opacity);
    }

    :host([disabled]) fluent-button {
        pointer-events: none;
    }
`.withBehaviors(new O.a(D,S),x.D,x.z,x.G,x.v,x.D,x.J,Object(F.a)(w.a`
            :host([isonimage]) .end-slot slot[name="end"] > svg {
                fill: ${x.G.var};
            }
        `),Object(j.c)(w.a`
            :host {
                forced-color-adjust: none;
                background: ${k.a.Field};
                box-shadow: ${k.a.FieldText} 0px 0px 0px 1px;
            }

            :host(:hover:not([disabled])) {
                box-shadow: ${k.a.Highlight} 0px 0px 0px 1px;
            }

            :host([isonimage]) .end-slot slot[name="end"] > svg {
                fill: ${k.a.ButtonText};
            }

            :host([isonimage]) fluent-button.stealth:hover svg {
                fill: ${k.a.HighlightText};
            }

            :host([disabled]) {
                box-shadow: ${k.a.GrayText} 0px 0px 0px 1px;
                opacity: 1;
            }

            :host([disabled]) .label {
                color: ${k.a.GrayText};
            }

            :host([disabled]) fluent-button::part(control) {
                background: ${k.a.ButtonFace};
                color: ${k.a.GrayText};
                fill: currentColor;
            }
        `));let T=class extends d{};T=Object(i.e)([Object(r.b)({name:"msft-search-box",template:g,styles:P,shadowOptions:{delegatesFocus:!0}})],T)},m1Vi:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return k}));var i=n("D57K"),r=n("QBS5"),o=n("P4Ao"),s=n("oePG"),a=n("uXNP"),c=n("C5kU"),l=n("6fxl"),u=n("o87Z");class d extends o.a{}class h extends(Object(u.a)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class b extends h{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}get root(){return this.control}}Object(i.e)([Object(r.b)({mode:"boolean"})],b.prototype,"autofocus",void 0),Object(i.e)([Object(r.b)({attribute:"form"})],b.prototype,"formId",void 0),Object(i.e)([r.b],b.prototype,"formaction",void 0),Object(i.e)([r.b],b.prototype,"formenctype",void 0),Object(i.e)([r.b],b.prototype,"formmethod",void 0),Object(i.e)([Object(r.b)({mode:"boolean"})],b.prototype,"formnovalidate",void 0),Object(i.e)([r.b],b.prototype,"formtarget",void 0),Object(i.e)([r.b],b.prototype,"type",void 0),Object(i.e)([s.d],b.prototype,"defaultSlottedContent",void 0);class p{}Object(i.e)([Object(r.b)({attribute:"aria-expanded",mode:"fromView"})],p.prototype,"ariaExpanded",void 0),Object(i.e)([Object(r.b)({attribute:"aria-pressed",mode:"fromView"})],p.prototype,"ariaPressed",void 0),Object(l.a)(p,a.a),Object(l.a)(b,c.a,p);var f=n("TLwk"),g=n("4X57"),v=n("2i1/"),m=n("oqLQ"),y=n("j9Xn"),O=n("kL0l"),j=n("vHfj"),x=n("57ob");const C=g.a`
  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    opacity: var(--disabled-opacity);
    background-color: ${O.s.var};
    cursor: ${v.a};
  }

  ${j.b}
`.withBehaviors(Object(m.c)(g.a`
      :host([disabled]),
      :host([disabled]:hover),
      :host([disabled]:active),
      :host([disabled]) .control,
      :host([disabled]) .control:hover,
      :host([appearance='neutral'][disabled]:hover) .control {
        forced-color-adjust: none;
        background-color: ${y.a.ButtonFace};
        border-color: ${y.a.GrayText};
        color: ${y.a.GrayText};
        opacity: 1;
      }
    `),Object(x.a)("accent",g.a`
      :host([appearance='accent'][disabled]),
      :host([appearance='accent'][disabled]:hover),
      :host([appearance='accent'][disabled]:active) {
        background: ${O.c.var};
      }

      ${j.a}
    `.withBehaviors(Object(m.c)(g.a`
          :host([appearance='accent'][disabled]) .control,
          :host([appearance='accent'][disabled]) .control:hover {
            background: ${y.a.ButtonFace};
            border-color: ${y.a.GrayText};
            color: ${y.a.GrayText};
          }
        `))),Object(x.a)("lightweight",g.a`
      :host([appearance='lightweight'][disabled]:hover),
      :host([appearance='lightweight'][disabled]:active) {
        background-color: transparent;
        color: ${O.h.var};
      }

      :host([appearance='lightweight'][disabled]) .content::before,
      :host([appearance='lightweight'][disabled]:hover) .content::before,
      :host([appearance='lightweight'][disabled]:active) .content::before {
        background: transparent;
      }

      ${j.d}
    `.withBehaviors(Object(m.c)(g.a`
          :host([appearance='lightweight'][disabled]) .control {
            forced-color-adjust: none;
            color: ${y.a.GrayText};
          }

          :host([appearance='lightweight'][disabled]) .control:hover .content::before {
            background: none;
          }
        `))),Object(x.a)("outline",g.a`
      :host([appearance='outline'][disabled]:hover),
      :host([appearance='outline'][disabled]:active) {
        background: transparent;
        border-color: ${O.P.var};
      }

      ${j.e}
    `.withBehaviors(Object(m.c)(g.a`
          :host([appearance='outline'][disabled]) .control {
            border-color: ${y.a.GrayText};
          }
        `))),Object(x.a)("stealth",g.a`
      :host([appearance='stealth'][disabled]),
      :host([appearance='stealth'][disabled]:hover),
      :host([appearance='stealth'][disabled]:active) {
        background: ${O.w.var};
      }

      ${j.f}
    `.withBehaviors(Object(m.c)(g.a`
          :host([appearance='stealth'][disabled]),
          :host([appearance='stealth'][disabled]:hover) {
            background: ${y.a.ButtonFace};
          }

          :host([appearance='stealth'][disabled]) .control {
            background: ${y.a.ButtonFace};
            border-color: transparent;
            color: ${y.a.GrayText};
          }
        `))));let w=class extends b{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(t=>t.nodeType===Node.ELEMENT_NODE);1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};Object(i.e)([r.b],w.prototype,"appearance",void 0),w=Object(i.e)([Object(o.b)({name:"fluent-button",template:f.a,styles:C,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],w);const k=C},mDtb:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return u}));var i=n("MF9s");function r(t){return e=>Object(i.u)(e)[t].toString()}function o(t){return{"font-weight":t}}function s(){return o(r("light"))}function a(){return o(r("semilight"))}function c(){return o(r("normal"))}function l(){return o(r("semibold"))}function u(){return o(r("bold"))}},mIHV:function(t,e,n){"use strict";function i(t){return(...e)=>n=>{const i=e[0];let r="function"==typeof i?i(n):i;for(let i=1;i<e.length;i++){const o=e[i];r=t(r,"function"==typeof o?o(n):o)}return r}}n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d}));const r=i((t,e)=>t+e),o=i((t,e)=>t-e),s=i((t,e)=>t*e),a=i((t,e)=>t/e);function c(...t){return r.apply(this,t)}function l(...t){return o.apply(this,t)}function u(...t){return s.apply(this,t)}function d(...t){return a.apply(this,t)}},mfsn:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n("fRV1"))},miql:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("5ZAu"),r=n("oZuh");function o(t,e,n){return{index:t,removed:e,addedCount:n}}function s(t,e,n,i,s,a){let c=0,l=0;const u=Math.min(n-e,a-s);if(0===e&&0===s&&(c=function(t,e,n){for(let i=0;i<n;++i)if(t[i]!==e[i])return i;return n}(t,i,u)),n===t.length&&a===i.length&&(l=function(t,e,n){let i=t.length,r=e.length,o=0;for(;o<n&&t[--i]===e[--r];)o++;return o}(t,i,u-c)),s+=c,a-=l,(n-=l)-(e+=c)==0&&a-s==0)return r.b;if(e===n){const t=o(e,[],0);for(;s<a;)t.removed.push(i[s++]);return[t]}if(s===a)return[o(e,[],n-e)];const d=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n];const r=[];for(;e>0||n>0;){if(0===e){r.push(2),n--;continue}if(0===n){r.push(3),e--;continue}const o=t[e-1][n-1],s=t[e-1][n],a=t[e][n-1];let c;c=s<a?s<o?s:o:a<o?a:o,c===o?(o===i?r.push(0):(r.push(1),i=o),e--,n--):c===s?(r.push(3),e--,i=s):(r.push(2),n--,i=a)}return r.reverse(),r}(function(t,e,n,i,r,o){const s=o-r+1,a=n-e+1,c=new Array(s);let l,u;for(let t=0;t<s;++t)c[t]=new Array(a),c[t][0]=t;for(let t=0;t<a;++t)c[0][t]=t;for(let n=1;n<s;++n)for(let o=1;o<a;++o)t[e+o-1]===i[r+n-1]?c[n][o]=c[n-1][o-1]:(l=c[n-1][o]+1,u=c[n][o-1]+1,c[n][o]=l<u?l:u);return c}(t,e,n,i,s,a)),h=[];let b=void 0,p=e,f=s;for(let t=0;t<d.length;++t)switch(d[t]){case 0:void 0!==b&&(h.push(b),b=void 0),p++,f++;break;case 1:void 0===b&&(b=o(p,[],0)),b.addedCount++,p++,b.removed.push(i[f]),f++;break;case 2:void 0===b&&(b=o(p,[],0)),b.addedCount++,p++;break;case 3:void 0===b&&(b=o(p,[],0)),b.removed.push(i[f]),f++}return void 0!==b&&h.push(b),h}const a=Array.prototype.push;function c(t,e,n,i){const r=o(e,n,i);let s=!1,c=0;for(let e=0;e<t.length;e++){const n=t[e];if(n.index+=c,s)continue;const i=(l=r.index,u=r.index+r.removed.length,d=n.index,h=n.index+n.addedCount,u<d||h<l?-1:u===d||h===l?0:l<d?u<h?u-d:h-d:h<u?h-l:u-l);if(i>=0){t.splice(e,1),e--,c-=n.addedCount-n.removed.length,r.addedCount+=n.addedCount-i;const o=r.removed.length+n.removed.length-i;if(r.addedCount||o){let t=n.removed;if(r.index<n.index){const e=r.removed.slice(0,n.index-r.index);a.apply(e,t),t=e}if(r.index+r.removed.length>n.index+n.addedCount){const e=r.removed.slice(n.index+n.addedCount-r.index);a.apply(t,e)}r.removed=t,n.index<r.index&&(r.index=n.index)}else s=!0}else if(r.index<n.index){s=!0,t.splice(e,0,r),e++;const i=r.addedCount-r.removed.length;n.index+=i,c+=i}}var l,u,d,h;s||t.push(r)}function l(t,e){let n=[];const i=function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];c(e,i.index,i.removed,i.addedCount)}return e}(e);for(let e=0,r=i.length;e<r;++e){const r=i[e];1!==r.addedCount||1!==r.removed.length?n=n.concat(s(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==t[r.index]&&n.push(r)}return n}var u=n("O/9U"),d=n("oePG");let h=!1;function b(t,e){let n=t.index;const i=e.length;return n>i?n=i-t.addedCount:n<0&&(n=i+t.removed.length+n-t.addedCount),n<0&&(n=0),t.index=n,t}class p extends u.b{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,t.$fastController=this}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,i.a.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,i.a.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(void 0===t&&void 0===e)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===e?l(this.source,t):s(this.source,0,this.source.length,e,0,e.length);this.notify(n)}}function f(){if(h)return;h=!0,d.b.setArrayObserverFactory(t=>new p(t));const t=Array.prototype,e=t.pop,n=t.push,i=t.reverse,r=t.shift,s=t.sort,a=t.splice,c=t.unshift;t.pop=function(){const t=this.length>0,n=e.apply(this,arguments),i=this.$fastController;return void 0!==i&&t&&i.addSplice(o(this.length,[n],0)),n},t.push=function(){const t=n.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(b(o(this.length-arguments.length,[],arguments.length),this)),t},t.reverse=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const n=i.apply(this,arguments);return void 0!==e&&e.reset(t),n},t.shift=function(){const t=this.length>0,e=r.apply(this,arguments),n=this.$fastController;return void 0!==n&&t&&n.addSplice(o(0,[e],0)),e},t.sort=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const n=s.apply(this,arguments);return void 0!==e&&e.reset(t),n},t.splice=function(){const t=a.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(b(o(+arguments[0],t,arguments.length>2?arguments.length-2:0),this)),t},t.unshift=function(){const t=c.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(b(o(0,[],arguments.length),this)),t}}},nSud:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i,r=n("D57K"),o=n("P4Ao"),s=n("QBS5");!function(t){t.separator="separator",t.presentation="presentation"}(i||(i={}));class a extends o.a{constructor(){super(...arguments),this.role=i.separator}}Object(r.e)([s.b],a.prototype,"role",void 0);const c=n("6BDD").b`
    <template role="${t=>t.role}"></template>
`;var l=n("4X57"),u=n("xY0q"),d=n("kL0l");const h=l.a`
  ${Object(u.a)("block")} :host {
    box-sizing: content-box;
    height: 0;
    margin: calc(var(--design-unit) * 1px) 0;
    border: none;
    border-top: calc(var(--outline-width) * 1px) solid ${d.k.var};
  }
`.withBehaviors(d.k);let b=class extends a{};b=Object(r.e)([Object(o.b)({name:"fluent-divider",template:c,styles:h,shadowOptions:{mode:"closed"}})],b)},o1qX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("LB+V"),r=n("MptA");function o(...t){return t.reduce((t,e)=>{const n=t.length?" ":"",s=Array.isArray(e)&&e[1]?o.call(null,e[0]):Object(i.a)(e)?e():Object(r.a)(e)?e:"";return s.length?t+n+s:t},"")}},o87Z:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("oZuh"),r=n("5ZAu"),o=n("QBS5"),s=n("oePG"),a=n("Gy7L");const c="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,l=new Map;function u(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=t=>{this.disabled=t},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return c}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?e.concat(Array.from(t)):e;return Object.freeze(n)}return i.b}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),r.a.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),r.a.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!c)return null;let t=l.get(this);return t||(t=this.attachInternals(),l.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,n){this.elementInternals?this.elementInternals.setValidity(t,e,n):"string"==typeof e&&this.proxy.setCustomValidity(e)}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(t=>this.proxy.addEventListener(t,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot","form-associated-proxy"),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name","form-associated-proxy")),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){switch(t.keyCode){case a.l:if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}}stopPropagation(t){t.stopPropagation()}};return Object(o.b)({mode:"boolean"})(e.prototype,"disabled"),Object(o.b)({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),Object(o.b)(e.prototype,"name"),Object(o.b)({mode:"boolean"})(e.prototype,"required"),Object(s.d)(e.prototype,"value"),e}},oGZu:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),function(t){t[t.CRITICAL=1]="CRITICAL",t[t.WARNING=2]="WARNING"}(i||(i={}));var r={BrowserDoesNotSupportLocalStorage:0,BrowserCannotReadLocalStorage:1,BrowserCannotReadSessionStorage:2,BrowserCannotWriteLocalStorage:3,BrowserCannotWriteSessionStorage:4,BrowserFailedRemovalFromLocalStorage:5,BrowserFailedRemovalFromSessionStorage:6,CannotSendEmptyTelemetry:7,ClientPerformanceMathError:8,ErrorParsingAISessionCookie:9,ErrorPVCalc:10,ExceptionWhileLoggingError:11,FailedAddingTelemetryToBuffer:12,FailedMonitorAjaxAbort:13,FailedMonitorAjaxDur:14,FailedMonitorAjaxOpen:15,FailedMonitorAjaxRSC:16,FailedMonitorAjaxSend:17,FailedMonitorAjaxGetCorrelationHeader:18,FailedToAddHandlerForOnBeforeUnload:19,FailedToSendQueuedTelemetry:20,FailedToReportDataLoss:21,FlushFailed:22,MessageLimitPerPVExceeded:23,MissingRequiredFieldSpecification:24,NavigationTimingNotSupported:25,OnError:26,SessionRenewalDateIsZero:27,SenderNotInitialized:28,StartTrackEventFailed:29,StopTrackEventFailed:30,StartTrackFailed:31,StopTrackFailed:32,TelemetrySampledAndNotSent:33,TrackEventFailed:34,TrackExceptionFailed:35,TrackMetricFailed:36,TrackPVFailed:37,TrackPVFailedCalc:38,TrackTraceFailed:39,TransmissionFailed:40,FailedToSetStorageBuffer:41,FailedToRestoreStorageBuffer:42,InvalidBackendResponse:43,FailedToFixDepricatedValues:44,InvalidDurationValue:45,TelemetryEnvelopeInvalid:46,CreateEnvelopeError:47,CannotSerializeObject:48,CannotSerializeObjectNonSerializable:49,CircularReferenceDetected:50,ClearAuthContextFailed:51,ExceptionTruncated:52,IllegalCharsInName:53,ItemNotInArray:54,MaxAjaxPerPVExceeded:55,MessageTruncated:56,NameTooLong:57,SampleRateOutOfRange:58,SetAuthContextFailed:59,SetAuthContextFailedAccountName:60,StringValueTooLong:61,StartCalledMoreThanOnce:62,StopCalledWithoutStart:63,TelemetryInitializerFailed:64,TrackArgumentsNotSpecified:65,UrlTooLong:66,SessionStorageBufferFull:67,CannotAccessCookie:68,IdTooLong:69,InvalidEvent:70,FailedMonitorAjaxSetRequestHeader:71,SendBrowserInfoOnUserInit:72,PluginException:73}},oZuh:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==t)return t;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===i.trustedTypes&&(i.trustedTypes={createPolicy:(t,e)=>e});const r=Object.freeze([])}).call(this,n("fRV1"))},objN:function(t,e,n){"use strict";n.d(e,"D",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"w",(function(){return u})),n.d(e,"v",(function(){return d})),n.d(e,"E",(function(){return h})),n.d(e,"x",(function(){return b})),n.d(e,"b",(function(){return p})),n.d(e,"u",(function(){return f})),n.d(e,"i",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return m})),n.d(e,"j",(function(){return y})),n.d(e,"y",(function(){return O})),n.d(e,"n",(function(){return j})),n.d(e,"m",(function(){return x})),n.d(e,"z",(function(){return C})),n.d(e,"C",(function(){return w})),n.d(e,"F",(function(){return k})),n.d(e,"o",(function(){return F})),n.d(e,"B",(function(){return D})),n.d(e,"r",(function(){return S})),n.d(e,"t",(function(){return P})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return $})),n.d(e,"s",(function(){return A})),n.d(e,"h",(function(){return B})),n.d(e,"c",(function(){return E})),n.d(e,"f",(function(){return R})),n.d(e,"A",(function(){return L})),n.d(e,"p",(function(){return _})),n.d(e,"g",(function(){return N})),n.d(e,"q",(function(){return M}));var i=n("fz//"),r=n("3ZGc"),o=n("mIHV"),s=n("FGLN"),a=n("MF9s");const c="@media (-ms-high-contrast:active)";var l;!function(t){t.text="WindowText",t.forcedColorLink="LinkText",t.msLink="-ms-hotlight",t.disabledText="GrayText",t.selectedText="HighlightText",t.selectedBackground="Highlight",t.buttonText="ButtonText",t.buttonBackground="ButtonFace",t.background="Window"}(l||(l={}));const u={"-ms-high-contrast-adjust":"none"};const d=Object(s.c)()?"LinkText !important":"-ms-hotlight !important",h={[c]:Object.assign({background:l.buttonBackground,border:"none",color:l.buttonText,fill:l.buttonText},u)},b={[c]:Object.assign({background:l.buttonBackground,"border-color":l.buttonText,color:l.buttonText,fill:l.buttonText},u)},p={[c]:Object.assign({background:l.selectedBackground,"border-color":l.selectedBackground,color:l.selectedText,fill:l.selectedText},u)},f={[c]:{background:l.background,"border-color":d,color:d,fill:d}},g={[c]:{opacity:"1",background:Object(i.b)(l.buttonBackground),color:Object(i.b)(l.disabledText),fill:Object(i.b)(l.disabledText)}},v={[c]:{opacity:"1",background:Object(i.b)(l.buttonBackground),color:Object(i.b)(l.disabledText),fill:Object(i.b)(l.disabledText),"border-color":Object(i.b)(l.disabledText)}},m={[c]:{opacity:"1",color:Object(i.b)(l.disabledText),fill:Object(i.b)(l.disabledText)}},y={[c]:{opacity:"1",background:Object(i.b)(l.disabledText)}},O={[c]:{"border-color":l.buttonText,"box-shadow":Object(i.a)("0 0 0 {0} inset {1}",Object(r.a)(a.X),()=>l.buttonText)}},j={[c]:{"box-shadow":Object(i.a)("0 0 0 2px Background, 0 0 0 {0} {1}",Object(r.a)(Object(o.a)(a.s,2)),()=>l.buttonText)}},x={[c]:{"border-color":Object(i.b)(l.buttonText),"box-shadow":Object(i.a)("0 0 0 {0} inset {1}",Object(r.a)(a.s),()=>l.buttonBackground)}},C={[c]:{background:l.selectedBackground,color:l.selectedText,fill:l.selectedText}},w={[c]:{background:l.selectedText,"border-color":l.selectedBackground,color:l.selectedBackground,fill:l.selectedBackground}},k={[c]:{color:Object(i.b)(l.text),fill:Object(i.b)(l.text)}},F={[c]:{color:Object(i.b)(l.buttonText),fill:Object(i.b)(l.buttonText)}},D={[c]:{color:Object(i.b)(l.selectedText),fill:Object(i.b)(l.selectedText)}},S={[c]:{color:Object(i.b)(l.selectedBackground),fill:Object(i.b)(l.selectedBackground)}},P={[c]:{color:d,fill:d}},T={[c]:{border:Object(i.a)("{0} solid {1}",Object(r.a)(a.X),()=>l.text)}},$={[c]:{"border-color":l.buttonText}},A={[c]:{background:l.buttonBackground,"box-shadow":Object(i.a)("0 0 0 {0} inset {1}",Object(r.a)(a.X),()=>d)}},B={[c]:{background:l.background}},E={[c]:{background:l.buttonText}},R={[c]:{background:l.buttonBackground}},L={[c]:{background:l.selectedText}},_={[c]:{background:l.selectedBackground}},N={[c]:{opacity:"1",background:l.buttonBackground,"border-color":l.selectedText}},M={[c]:{opacity:"1",background:l.selectedBackground,"border-color":l.selectedText}}},odxL:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h}));var i=n("MF9s"),r=n("6u3Q"),o=n("6QMD");function s(t){return e=>{const n=Object(i.j)(e),o=Object(i.a)(e),s=Object(r.b)(i.j,o)(e),a={rest:Object(i.i)(e),hover:Object(i.h)(e),active:Object(i.f)(e),focus:Object(i.g)(e)},c=Object(r.e)(e)?-1:1,l=s+(1===c?Math.min(a.rest,a.hover):Math.max(c*a.rest,c*a.hover)),u=Object(r.h)(i.k)(i.j)(()=>l)(()=>c)(e=>e>=t)(e),d=Object(r.c)(i.j,u)(e),h=d+c*Math.abs(a.rest-a.hover),b=1===c?a.rest<a.hover:c*a.rest>c*a.hover,p=b?d:h,f=b?h:d,g=p+c*a.active,v=p+c*a.focus;return{rest:Object(r.d)(p,n),hover:Object(r.d)(f,n),active:Object(r.d)(g,n),focus:Object(r.d)(v,n)}}}const a=Object(o.d)(s(4.5)),c=Object(o.d)(s(3)),l=Object(o.j)(o.a.rest,a),u=Object(o.j)(o.a.hover,a),d=Object(o.j)(o.a.active,a),h=(Object(o.j)(o.a.focus,a),Object(o.j)(o.a.rest,c));Object(o.j)(o.a.hover,c),Object(o.j)(o.a.active,c),Object(o.j)(o.a.focus,c)},oePG:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return O}));var i=n("5ZAu"),r=n("O/9U");const o=/(:|&&|\|\||if)/,s=new WeakMap,a=new WeakMap;let c=void 0,l=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class u{constructor(t){this.name=t,this.field="_"+t,this.callback=t+"Changed"}getValue(t){return void 0!==c&&c.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,i=t[n];if(i!==e){t[n]=e;const r=t[this.callback];"function"==typeof r&&r.call(t,i,e),h(t).notify(this.name)}}}const d=Object.freeze({setArrayObserverFactory(t){l=t},getNotifier(t){let e=t.$fastController||s.get(t);return void 0===e&&(Array.isArray(t)?e=l(t):s.set(t,e=new r.a(t))),e},track(t,e){void 0!==c&&c.watch(t,e)},trackVolatile(){void 0!==c&&(c.needsRefresh=!0)},notify(t,e){h(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new u(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=a.get(t);if(void 0===e){let n=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==n;)e=a.get(n),n=Reflect.getPrototypeOf(n);e=void 0===e?[]:e.slice(0),a.set(t,e)}return e},binding(t,e,n=this.isVolatileBinding(t)){return new j(t,e,n)},isVolatileBinding:t=>o.test(t.toString())}),h=d.getNotifier,b=d.trackVolatile,p=i.a.queueUpdate;function f(t,e){d.defineProperty(t,e)}function g(t,e,n){return Object.assign({},n,{get:function(){return b(),n.get.apply(this)}})}let v=null;function m(t){v=t}class y{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return v}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}d.defineProperty(y.prototype,"index"),d.defineProperty(y.prototype,"length");const O=Object.seal(new y);class j extends r.b{constructor(t,e,n=!1){super(t,e),this.binding=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const n=c;c=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(t,e);return c=n,i}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const n=this.last,i=h(t),r=null===n?this.first:{};if(r.propertySource=t,r.propertyName=e,r.notifier=i,i.subscribe(this,e),null!==n){if(!this.needsRefresh){c=void 0;const e=n.propertySource[n.propertyName];c=this,t===e&&(this.needsRefresh=!0)}n.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,p(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}},olMv:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{createCSS(){return""}createBehavior(){}}},oqLQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return s}));class i extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,n=this.constructListener(t);n.bind(e)(),e.addListener(n),this.listenerCache.set(t,n)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new i(t,e)}constructListener(t){let e=!1;const n=this.styles;return function(){const{matches:i}=this;i&&!e?(t.$fastController.addStyles(n),e=i):!i&&e&&(t.$fastController.removeStyles(n),e=i)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const r=i.with(window.matchMedia("(forced-colors)")),o=i.with(window.matchMedia("(prefers-color-scheme: dark)")),s=i.with(window.matchMedia("(prefers-color-scheme: light)"))},oyTd:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("+viU"),r=n("Hq6N");const o=Object(i.a)()(r.Page)},pH9t:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var i=n("D57K"),r=n("P4Ao"),o=n("5ZAu"),s=n("QBS5"),a=n("oePG"),c=n("qibw"),l=n("Gy7L"),u=n("C5kU"),d=n("CzyP"),h=n("6fxl"),b=n("NYhc");class p extends r.a{constructor(){super(...arguments),this.role=b.a.menuitem,this.hasSubmenu=!1,this.currentDirection=c.a.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.keyCode){case l.l:case l.q:return this.invoke(),!1;case l.i:return this.expandAndFocus(),!1;case l.h:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case b.a.menuitemcheckbox:this.checked=!this.checked,this.$emit("change");break;case b.a.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case b.a.menuitemradio:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>"menu"===t.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=Object(d.a)(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),o.a.queueUpdate(()=>{this.updateSubmenu()}),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}Object(i.e)([Object(s.b)({mode:"boolean"})],p.prototype,"disabled",void 0),Object(i.e)([Object(s.b)({attribute:"expanded"})],p.prototype,"expanded",void 0),Object(i.e)([s.b],p.prototype,"role",void 0),Object(i.e)([s.b],p.prototype,"checked",void 0),Object(i.e)([a.d],p.prototype,"submenuRegion",void 0),Object(i.e)([a.d],p.prototype,"hasSubmenu",void 0),Object(i.e)([a.d],p.prototype,"currentDirection",void 0),Object(i.e)([a.d],p.prototype,"submenu",void 0),Object(h.a)(p,u.a);var f=n("6BDD"),g=n("6vBc"),v=n("+53S");const m=(y="fast",f.b`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==b.a.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""}"
    >

            ${Object(g.a)(t=>t.role===b.a.menuitemcheckbox,f.b`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                <svg
                                    aria-hidden="true"
                                    part="checkbox-indicator"
                                    class="checkbox-indicator"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
                                    />
                                </svg>
                            </slot>
                        </span>
                    </div>
                `)}
            ${Object(g.a)(t=>t.role===b.a.menuitemradio,f.b`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                <span
                                    part="radio-indicator"
                                    class="radio-indicator"
                                ></span>
                            </slot>
                        </span>
                    </div>
                `)}
            ${Object(g.a)(t=>t.hasSubmenu,f.b`
                    <div
                        part="expand-collapse-glyph-container"
                        class="expand-collapse-glyph-container"
                    >
                        <span part="expand-collapse" class="expand-collapse">
                            <slot name="expand-collapse-indicator">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="expand-collapse-glyph"
                                    part="expand-collapse-glyph"
                                >
                                    <path
                                        d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
                                    />
                                </svg>
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${u.c}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${u.b}
        ${Object(g.a)(t=>t.expanded,f.b`
                <${y}-anchored-region
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${Object(v.b)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${y}-anchored-region>
            `)}
    </template>
`);var y;var O=n("4X57"),j=n("xY0q"),x=n("wHpb"),C=n("2i1/"),w=n("oqLQ"),k=n("j9Xn"),F=n("QkLF"),D=n("kL0l");const S=O.a`
    ${Object(j.a)("grid")} :host {
        outline: none;
        box-sizing: border-box;
        height: calc(${F.a} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(var(--design-unit) * 1px);
        white-space: nowrap;
        overflow: hidden;
        color: ${D.G.var};
        fill: currentcolor;
        cursor: pointer;
        font-family: var(--body-font);
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid transparent;
    }

    :host(:${x.a}) {
        border: calc(var(--outline-width) * 1px) solid ${D.z.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${D.z.var};
    }

    :host(:hover) {
        background: ${D.v.var};
    }

    :host(:active) {
        background: ${D.u.var};
    }

    :host(.disabled) {
        cursor: ${C.a};
        opacity: var(--disabled-opacity);
    }

    :host(.disabled:hover) .start,
    :host(.disabled:hover) .end,
    :host(.disabled:hover)::slotted(svg) {
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        display: flex;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
        fill: ${D.G.var};
    }


    :host([role="menuitemcheckbox"]),
    :host([role="menuitemradio"]) {
        display: grid;
        grid-template-columns: auto auto 1fr minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host .input-container {
        display: none;
    }

    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([role="menuitemcheckbox"]) .start,
    :host([role="menuitemradio"]) .start {
        grid-column-start: 2;
        margin-inline-end: 10px;
    }

    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([role="menuitemcheckbox"]) .end,
    :host([role="menuitemradio"]) .end {
        grid-column-start: 4;
    }

    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: calc(var(--outline-width) * 1px) solid ${D.G.var};
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox {
        border-radius: calc(var(--corner-radius) * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]) {
        display: none;
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${D.G.var};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 999px;
        display: block;
        background: ${D.G.var};
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }
`.withBehaviors(D.u,D.v,D.w,D.z,D.G,Object(w.c)(O.a`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${k.a.ButtonText};
                fill: ${k.a.ButtonText};
            }
            :host(:hover) {
                background: ${k.a.Highlight};
                color: ${k.a.HighlightText};
            }
            :host(:hover) .start,
            :host(:hover) .end,
            :host(:hover)::slotted(svg),
            :host(:active) .start,
            :host(:active) .end,
            :host(:active)::slotted(svg) {
                fill: ${k.a.HighlightText};
            }
            :host(:${x.a}) {
                background: ${k.a.Highlight};
                border-color: ${k.a.ButtonText};
                box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${k.a.HighlightText};
                color: ${k.a.HighlightText};
                fill: currentcolor;
            }
            :host(.disabled),
            :host(.disabled:hover),
            :host(.disabled:hover) .start,
            :host(.disabled:hover) .end,
            :host(.disabled:hover)::slotted(svg) {
                background: ${k.a.Canvas};
                color: ${k.a.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .checkbox,
            :host .radio{
                border-color: ${k.a.ButtonText};
                background: ${k.a.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${k.a.HighlightText};
                border-color: ${k.a.HighlightText};
            }

            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${x.a}) .checkbox,
            :host(:${x.a}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${x.a}) .checkbox,
            :host([checked="true"]:${x.a}) .radio {
                border-color: ${k.a.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${k.a.Highlight};
                color: ${k.a.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${k.a.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${k.a.Highlight};
            }
        `));let P=class extends p{};P=Object(i.e)([Object(r.b)({name:"fluent-menu-item",template:m,styles:S,shadowOptions:{mode:"closed"}})],P)},pSdj:function(t,e,n){"use strict";var i=n("mDtb"),r=n("ZEO0");const o={heading:{"&$heading__1, &$heading__2, &$heading__3, &$heading__4, &$heading__5, &$heading__6, &$heading__7":Object.assign(Object.assign({},Object(r.a)()),Object(i.d)())},heading__1:{},heading__2:{},heading__3:{},heading__4:{},heading__5:{},heading__6:{},heading__7:{}};e.a=o},qGiF:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return r}));var i=n("ERkP");const r=n.n(i).a.createContext({}),{Provider:o,Consumer:s}=r},qTjs:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return b}));var i=n("lFvR"),r=n("JIBo"),o=n("hv+n");const s=Object(r.f)(i.C,i.w,i.t,i.v);function a(t){return e=>{const n=Object(o.a)(e),r=n>=s(e)?-1:1;return Object(o.d)(n+r*t(e),Object(i.T)(e))}}const c=Object(r.d)(a(i.C)),l=Object(r.d)(a(i.w)),u=Object(r.d)(a(i.t)),d=Object(r.d)(a(i.v)),h=Object(r.d)(a(i.D)),b=Object(r.d)(t=>({rest:c(t),hover:l(t),active:u(t),focus:d(t),selected:h(t)}))},qibw:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}))},qlcP:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={Unknown:0,NonRetryableStatus:1,InvalidEvent:2,SizeLimitExceeded:3,KillSwitch:4,QueueFull:5}},rAAu:function(t,e,n){"use strict";var i=n("8yfO");const r={typography:{color:n("SP+O").c,"margin-top":"0","margin-bottom":"0",transition:"all 0.2s ease-in-out"},typography__1:Object.assign({},Object(i.b)("t1")),typography__2:Object.assign({},Object(i.b)("t2")),typography__3:Object.assign({},Object(i.b)("t3")),typography__4:Object.assign({},Object(i.b)("t4")),typography__5:Object.assign({},Object(i.b)("t5")),typography__6:Object.assign({},Object(i.b)("t6")),typography__7:Object.assign({},Object(i.b)("t7")),typography__8:Object.assign({},Object(i.b)("t8")),typography__9:Object.assign({},Object(i.b)("t9"))};e.a=r},rRWH:function(t,e,n){"use strict";var i;function r(t){return e=>{if("string"!=typeof e)return"";const n=e.split(" ");return 4!==n.length?e:t===i.rtl?[n[0],n[3],n[2],n[1]].join(" "):e}}function o(t,e,n){return n===i.ltr?t:e}function s(t,e){return n=>{const r=(n&&n.direction?n.direction:i.ltr)===i.rtl?e:t;return"function"==typeof r?r(n):r}}n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}))},sNWd:function(t,e,n){"use strict";var i=n("iuMt"),r=n("3ZGc"),o=n("fz//"),s=n("mIHV"),a=n("rRWH"),c=n("PfRV"),l=n("odxL"),u=n("SP+O"),d=n("X9F+"),h=n("7b0X"),b=n("9CwC"),p=n("aP31"),f=n("QhQn"),g=n("LD6M"),v=n("ZEO0"),m=n("zP2P"),y=n("MF9s"),O=n("GaXA"),j=n("objN"),x=n("8yfO");const C={"background-color":"transparent"},w=Object(y.t)("density"),k=Object.assign(Object.assign(Object.assign(Object.assign({color:l.d,fill:l.d},C),Object(i.a)(Object.assign(Object.assign({"border-color":"transparent","box-shadow":"none"},j.r),{"& $button_contentRegion::before":Object.assign({background:u.c,height:Object(r.a)(y.s)},j.p)}))),{"& $button_contentRegion::before":{[j.D]:{background:j.a.buttonText}},"&:hover $button_contentRegion::before":Object.assign({background:l.b},j.p),"&:hover$button__disabled $button_contentRegion::before":{display:"none"},"&:active $button_contentRegion::before":{background:l.a},"&$button__disabled, &$button__disabled $button_contentRegion::before":Object.assign({},C),"&:hover:enabled, a&:not($button__disabled):hover":Object.assign(Object.assign(Object.assign({color:l.b},C),j.r),{"& $button_beforeContent, & $button_afterContent":Object.assign({fill:l.b},j.r)}),"&:active:enabled, a&:not($button__disabled):active":Object.assign({color:l.a,fill:l.a},C)}),j.E),F={button:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(x.b)("t7")),{"font-family":"inherit"}),Object(v.c)()),{"box-sizing":"border-box","max-width":"374px","min-width":t=>w(t)<=-2?"28px":"32px",padding:Object(o.a)("0 {0}",Object(m.f)(y.s)),display:"inline-flex","justify-content":"center","align-items":"center",height:Object(m.d)()}),Object(c.d)()),Object(c.a)()),{"line-height":"1",overflow:"hidden","text-decoration":"none","white-space":"nowrap",transition:"all 0.1s ease-in-out",color:u.c,fill:u.c,background:d.c,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign(Object.assign({background:d.b},j.z),{"& $button_beforeContent, & $button_afterContent":Object.assign({},j.B)}),"&:active:enabled, a&:not($button__disabled):active":{background:d.a}}),Object(i.a)(Object.assign(Object.assign({},j.y),{"border-color":h.a}))),{"&:disabled":Object.assign({},j.k),"&::-moz-focus-inner":{border:"0"}}),j.x),{"a&:not($button__disabled)":Object.assign(Object.assign({},j.u),{"&:not($button__disabled):hover":Object.assign(Object.assign({},j.s),{"& $button_beforeContent, & $button_afterContent":Object.assign({},j.t)}),"&$button__disabled":Object.assign(Object.assign({},j.k),{"&:hover":{[j.D]:{"box-shadow":"none !important"}}})})}),button__primary:Object.assign(Object.assign(Object.assign(Object.assign({color:b.a,fill:b.a,background:p.c,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({background:p.b},j.C),"&:active:enabled, a&:not($button__disabled):active":{background:p.a}},Object(i.a)(Object.assign({"border-color":h.a,"box-shadow":Object(o.a)("0 0 0 {0} inset {1}",Object(r.a)(y.s),Object(h.b)(p.c))},j.m))),{"& $button_beforeContent, & $button_afterContent":{fill:b.a}}),j.b),{"a&:not($button__disabled)":{"& $button_beforeContent, & $button_afterContent":Object.assign({},j.t)}}),button__outline:Object.assign(Object.assign({background:"transparent",border:Object(o.a)("{0} solid {1}",Object(r.a)(y.X),f.c),padding:Object(o.a)("0 {0}",Object(m.f)(y.X)),"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({background:"transparent",border:Object(o.a)("{0} solid {1}",Object(r.a)(y.X),f.b)},j.z),"&:active:enabled, a&:not($button__disabled):active":{background:"transparent",border:Object(o.a)("{0} solid {1}",Object(r.a)(y.X),f.a)}},Object(i.a)(Object.assign(Object.assign({},j.y),{"box-shadow":Object(o.a)("0 0 0 {0} {1} inset",Object(r.a)(Object(s.d)(y.s,y.X)),h.a),"border-color":h.a}))),j.x),button__lightweight:Object.assign(Object.assign({},k),{"a&:not($button__disabled)":{"&:not($button__disabled):hover":{[j.D]:{"box-shadow":"none !important",color:j.v,fill:j.v},"& $button_contentRegion::before":{[j.D]:{background:j.v}}},"&$button__disabled":Object.assign({},j.k),"& $button_contentRegion::before":{[j.D]:{background:"transparent"}}}}),button__justified:Object.assign(Object.assign({},k),{"min-width":"74px","padding-left":"0","padding-right":"0","border-width":"0","justify-content":"flex-start","a&:not($button__disabled)":{"&:not($button__disabled):hover":{[j.D]:{"box-shadow":"none !important",color:j.v,fill:j.v},"& $button_contentRegion::before":{[j.D]:{background:j.v}}},"&$button__disabled":Object.assign({},j.k)}}),button__stealth:Object.assign(Object.assign({background:g.c,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({"background-color":g.b},j.z),"&:active:enabled, a&:not($button__disabled):active":{"background-color":g.a}},Object(i.a)(Object.assign(Object.assign({},j.y),{"border-color":h.a}))),j.E),button_contentRegion:{position:"relative","&::before":{content:"''",display:"block",height:Object(r.a)(y.X),position:"absolute",bottom:"-3px",width:"100%",left:Object(a.c)("0",""),right:Object(a.c)("","0")},"& svg":{width:m.b,height:m.b}},button__disabled:Object.assign(Object.assign(Object.assign({},Object(O.a)()),j.k),{"& $button_beforeContent, & $button_afterContent":Object.assign({},j.l)}),button_beforeContent:{width:m.b,height:m.b,"margin-right":Object(a.c)(Object(m.f)(),""),"margin-left":Object(a.c)("",Object(m.f)())},button_afterContent:{width:m.b,height:m.b,"margin-right":Object(a.c)("",Object(m.f)()),"margin-left":Object(a.c)(Object(m.f)(),"")}};e.a=F},swXE:function(t,e,n){"use strict";n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return y})),n.d(e,"h",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"i",(function(){return x})),n.d(e,"e",(function(){return C}));var i=n("PT2o"),r=n("tq/8"),o=n("RN7+"),s=n("SiT+"),a=n("6eT7"),c=n("xAa8"),l=n("0q6d");function u(t){return.2126*t.r+.7152*t.g+.0722*t.b}function d(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return u(new a.a(e(t.r),e(t.g),e(t.b),1))}const h=(t,e)=>(t+.05)/(e+.05);function b(t,e){const n=d(t),i=d(e);return n>i?h(n,i):h(i,n)}function p(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),r=e-n;let o=0;0!==r&&(o=e===t.r?(t.g-t.b)/r%6*60:e===t.g?60*((t.b-t.r)/r+2):60*((t.r-t.g)/r+4)),o<0&&(o+=360);const s=(e+n)/2;let a=0;return 0!==r&&(a=r/(1-Math.abs(2*s-1))),new i.a(o,a,s)}function f(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,i=n*(1-Math.abs(t.h/60%2-1)),r=t.l-n/2;let o=0,s=0,c=0;return t.h<60?(o=n,s=i,c=0):t.h<120?(o=i,s=n,c=0):t.h<180?(o=0,s=n,c=i):t.h<240?(o=0,s=i,c=n):t.h<300?(o=i,s=0,c=n):t.h<360&&(o=n,s=0,c=i),new a.a(o+r,s+r,c+r,e)}function g(t){const e=Math.max(t.r,t.g,t.b),n=e-Math.min(t.r,t.g,t.b);let i=0;0!==n&&(i=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),i<0&&(i+=360);let o=0;return 0!==e&&(o=n/e),new r.a(i,o,e)}function v(t,e=1){const n=t.s*t.v,i=n*(1-Math.abs(t.h/60%2-1)),r=t.v-n;let o=0,s=0,c=0;return t.h<60?(o=n,s=i,c=0):t.h<120?(o=i,s=n,c=0):t.h<180?(o=0,s=n,c=i):t.h<240?(o=0,s=i,c=n):t.h<300?(o=i,s=0,c=n):t.h<360&&(o=n,s=0,c=i),new a.a(o+r,s+r,c+r,e)}function m(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const n=e(t.r),i=e(t.g),r=e(t.b),o=.4124564*n+.3575761*i+.1804375*r,s=.2126729*n+.7151522*i+.072175*r,a=.0193339*n+.119192*i+.9503041*r;return new c.a(o,s,a)}function y(t,e=1){function n(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const i=n(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),r=n(-.969266*t.x+1.8760108*t.y+.041556*t.z),o=n(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new a.a(i,r,o,e)}function O(t){return function(t){function e(t){return t>o.a.epsilon?Math.pow(t,1/3):(o.a.kappa*t+16)/116}const n=e(t.x/c.a.whitePoint.x),i=e(t.y/c.a.whitePoint.y),r=116*i-16,s=500*(n-i),a=200*(i-e(t.z/c.a.whitePoint.z));return new o.a(r,s,a)}(m(t))}function j(t,e=1){return y(function(t){const e=(t.l+16)/116,n=e+t.a/500,i=e-t.b/200,r=Math.pow(n,3),s=Math.pow(e,3),a=Math.pow(i,3);let l=0;l=r>o.a.epsilon?r:(116*n-16)/o.a.kappa;let u=0;u=t.l>o.a.epsilon*o.a.kappa?s:t.l/o.a.kappa;let d=0;return d=a>o.a.epsilon?a:(116*i-16)/o.a.kappa,l=c.a.whitePoint.x*l,u=c.a.whitePoint.y*u,d=c.a.whitePoint.z*d,new c.a(l,u,d)}(t),e)}function x(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=Object(l.h)(Math.atan2(t.b,t.a))),e<0&&(e+=360);const n=Math.sqrt(t.a*t.a+t.b*t.b);return new s.a(t.l,n,e)}(O(t))}function C(t,e=1){return j(function(t){let e=0,n=0;return 0!==t.h&&(e=Math.cos(Object(l.b)(t.h))*t.c,n=Math.sin(Object(l.b)(t.h))*t.c),new o.a(t.l,e,n)}(t),e)}},"tq/8":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n){this.h=t,this.s=e,this.v=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new r(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new r(Object(i.i)(this.h,t),Object(i.i)(this.s,t),Object(i.i)(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}},uXNP:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("D57K"),r=n("QBS5");class o{}Object(i.e)([Object(r.b)({attribute:"aria-atomic",mode:"fromView"})],o.prototype,"ariaAtomic",void 0),Object(i.e)([Object(r.b)({attribute:"aria-busy",mode:"fromView"})],o.prototype,"ariaBusy",void 0),Object(i.e)([Object(r.b)({attribute:"aria-controls",mode:"fromView"})],o.prototype,"ariaControls",void 0),Object(i.e)([Object(r.b)({attribute:"aria-current",mode:"fromView"})],o.prototype,"ariaCurrent",void 0),Object(i.e)([Object(r.b)({attribute:"aria-describedby",mode:"fromView"})],o.prototype,"ariaDescribedby",void 0),Object(i.e)([Object(r.b)({attribute:"aria-details",mode:"fromView"})],o.prototype,"ariaDetails",void 0),Object(i.e)([Object(r.b)({attribute:"aria-disabled",mode:"fromView"})],o.prototype,"ariaDisabled",void 0),Object(i.e)([Object(r.b)({attribute:"aria-errormessage",mode:"fromView"})],o.prototype,"ariaErrormessage",void 0),Object(i.e)([Object(r.b)({attribute:"aria-flowto",mode:"fromView"})],o.prototype,"ariaFlowto",void 0),Object(i.e)([Object(r.b)({attribute:"aria-haspopup",mode:"fromView"})],o.prototype,"ariaHaspopup",void 0),Object(i.e)([Object(r.b)({attribute:"aria-hidden",mode:"fromView"})],o.prototype,"ariaHidden",void 0),Object(i.e)([Object(r.b)({attribute:"aria-invalid",mode:"fromView"})],o.prototype,"ariaInvalid",void 0),Object(i.e)([Object(r.b)({attribute:"aria-keyshortcuts",mode:"fromView"})],o.prototype,"ariaKeyshortcuts",void 0),Object(i.e)([Object(r.b)({attribute:"aria-label",mode:"fromView"})],o.prototype,"ariaLabel",void 0),Object(i.e)([Object(r.b)({attribute:"aria-labelledby",mode:"fromView"})],o.prototype,"ariaLabelledby",void 0),Object(i.e)([Object(r.b)({attribute:"aria-live",mode:"fromView"})],o.prototype,"ariaLive",void 0),Object(i.e)([Object(r.b)({attribute:"aria-owns",mode:"fromView"})],o.prototype,"ariaOwns",void 0),Object(i.e)([Object(r.b)({attribute:"aria-relevant",mode:"fromView"})],o.prototype,"ariaRelevant",void 0),Object(i.e)([Object(r.b)({attribute:"aria-roledescription",mode:"fromView"})],o.prototype,"ariaRoledescription",void 0)},vHfj:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return f}));var i=n("4X57"),r=n("j9Xn"),o=n("xY0q"),s=n("wHpb"),a=n("oqLQ"),c=n("QkLF"),l=n("kL0l");const u=i.a`
  ${Object(o.a)("inline-flex")} :host {
    font-family: var(--body-font);
    outline: none;
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    height: calc(${c.a} * 1px);
    min-width: calc(${c.a} * 1px);
    background-color: ${l.s.var};
    color: ${l.G.var};
    border-radius: calc(var(--corner-radius) * 1px);
    fill: currentcolor;
    cursor: pointer;
  }

  .control {
    background: transparent;
    height: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
    white-space: nowrap;
    outline: none;
    text-decoration: none;
    border: calc(var(--outline-width) * 1px) solid transparent;
    color: inherit;
    border-radius: inherit;
    fill: inherit;
    cursor: inherit;
    font-family: inherit;
  }

  .control,
  .end,
  .start {
    font: inherit;
  }

  .control.icon-only {
    padding: 0;
    line-height: 0;
  }

  :host(:hover) {
    background-color: ${l.o.var};
  }

  :host(:active) {
    background-color: ${l.l.var};
  }

  .control:${s.a} {
    border: calc(var(--outline-width) * 1px) solid ${l.z.var};
    box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${l.z.var};
  }

  .control::-moz-focus-inner {
    border: 0;
  }

  .content {
    pointer-events: none;
  }

  .start,
  .end {
    display: flex;
    pointer-events: none;
  }

  ::slotted(svg) {
    ${""} width: 16px;
    height: 16px;
    pointer-events: none;
  }

  .start {
    margin-inline-end: 11px;
  }

  .end {
    margin-inline-start: 11px;
  }
`.withBehaviors(l.s,l.z,l.G,l.o,l.l,Object(a.c)(i.a`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${r.a.ButtonFace};
          border-color: ${r.a.ButtonText};
          color: ${r.a.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${r.a.Highlight};
          color: ${r.a.HighlightText};
        }

        .control:${s.a},
        :host([appearance="outline"]) .control:${s.a},
        :host([appearance="neutral"]:${s.a}) .control {
          forced-color-adjust: none;
          background-color: ${r.a.Highlight};
          border-color: ${r.a.ButtonText};
          box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${r.a.ButtonText};
          color: ${r.a.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${r.a.ButtonText};
        }

        :host([href]) .control {
          border-color: ${r.a.LinkText};
          color: ${r.a.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${s.a}{
          forced-color-adjust: none;
          background: ${r.a.ButtonFace};
          border-color: ${r.a.LinkText};
          box-shadow: 0 0 0 1px ${r.a.LinkText} inset;
          color: ${r.a.LinkText};
          fill: currentcolor;
        }
    `)),d=i.a`
    :host([appearance="accent"]) {
        background: ${l.c.var};
        color: ${l.f.var};
    }

    :host([appearance="accent"]:hover) {
        background: ${l.b.var};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${l.a.var};
    }

    :host([appearance="accent"]) .control:${s.a} {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${l.A.var}, 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${l.z.var}
    }
`.withBehaviors(l.c,l.f,l.b,l.a,l.A,Object(a.c)(i.a`
        :host([appearance="accent"]) .control {
            forced-color-adjust: none;
            background: ${r.a.Highlight};
            color: ${r.a.HighlightText};
        }

        :host([appearance="accent"]) .control:hover,
        :host([appearance="accent"]:active) .control:active {
            background: ${r.a.HighlightText};
            border-color: ${r.a.Highlight};
            color: ${r.a.Highlight};
        }

        :host([appearance="accent"]) .control:${s.a} {
            border-color: ${r.a.ButtonText};
            box-shadow: 0 0 0 2px ${r.a.HighlightText} inset;
        }

        :host([appearance="accent"][href]) .control{
            background: ${r.a.LinkText};
            color: ${r.a.HighlightText};
        }

        :host([appearance="accent"][href]) .control:hover {
            background: ${r.a.ButtonFace};
            border-color: ${r.a.LinkText};
            box-shadow: none;
            color: ${r.a.LinkText};
            fill: currentcolor;
        }

        :host([appearance="accent"][href]) .control:${s.a} {
          border-color: ${r.a.LinkText};
          box-shadow: 0 0 0 2px ${r.a.HighlightText} inset;
      }
    `)),h=i.a`
    :host([appearance="hypertext"]) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${l.h.var};
        border-bottom: calc(var(--outline-width) * 1px) solid ${l.h.var};
    }
    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${l.g.var};
    }
    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${l.e.var};
    }
    :host([appearance="hypertext"]) .control:${s.a} {
        border-bottom: calc(var(--focus-outline-width) * 1px) solid ${l.z.var};
        margin-bottom: calc(calc(var(--outline-width) - var(--focus-outline-width)) * 1px);
    }
`.withBehaviors(l.h,l.g,l.e,l.z,Object(a.c)(i.a`
      :host([appearance="hypertext"]) .control:${s.a} {
        color: ${r.a.LinkText};
        border-bottom-color: ${r.a.LinkText};
      }
    `)),b=i.a`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${l.h.var};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${l.g.var};
    }

    :host([appearance="lightweight"]:active) {
        color: ${l.e.var};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${l.g.var};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${l.e.var};
    }

    :host([appearance="lightweight"]) .control:${s.a} .content::before {
        background: ${l.G.var};
        height: calc(var(--focus-outline-width) * 1px);
    }
`.withBehaviors(l.h,l.g,l.e,l.g,l.G,Object(a.c)(i.a`
        :host([appearance="lightweight"]) {
            color: ${r.a.ButtonText};
        }
        :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${s.a} {
            forced-color-adjust: none;
            background: ${r.a.ButtonFace};
            color: ${r.a.Highlight};
        }
        :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${s.a} .content::before {
            background: ${r.a.Highlight};
        }

        :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${s.a} {
            background: ${r.a.ButtonFace};
            box-shadow: none;
            color: ${r.a.LinkText};
        }

        :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${s.a} .content::before {
            background: ${r.a.LinkText};
        }
    `)),p=i.a`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${l.P.var};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${l.O.var};
    }

    :host([appearance="outline"]:active) {
        border-color: ${l.M.var};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${s.a} {
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${l.z.var};
        border-color: ${l.z.var};
    }
`.withBehaviors(l.P,l.O,l.M,l.z,Object(a.c)(i.a`
      :host([appearance='outline']) {
        border-color: ${r.a.ButtonText};
      }
      :host([appearance='outline'][href]) {
        border-color: ${r.a.LinkText};
      }
    `)),f=i.a`
  :host([appearance='stealth']) {
    background: ${l.w.var};
  }

  :host([appearance='stealth']:hover) {
    background: ${l.v.var};
  }

  :host([appearance='stealth']:active) {
    background: ${l.u.var};
  }
`.withBehaviors(l.w,l.v,l.u,Object(a.c)(i.a`
        :host([appearance="stealth"]),
        :host([appearance="stealth"]) .control {
            forced-color-adjust: none;
            background: ${r.a.ButtonFace};
            border-color: transparent;
            color: ${r.a.ButtonText};
            fill: currentcolor;
        }

        :host([appearance="stealth"]:hover) .control {
            background: ${r.a.Highlight};
            border-color: ${r.a.Highlight};
            color: ${r.a.HighlightText};
            fill: currentcolor;
        }

        :host([appearance="stealth"]:${s.a}) .control {
            background: ${r.a.Highlight};
            box-shadow: 0 0 0 1px ${r.a.Highlight};
            color: ${r.a.HighlightText};
            fill: currentcolor;
        }

        :host([appearance="stealth"][href]) .control {
            color: ${r.a.LinkText};
        }

        :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${s.a}[href]) .control {
            background: ${r.a.LinkText};
            border-color: ${r.a.LinkText};
            color: ${r.a.HighlightText};
            fill: currentcolor;
        }

      :host([appearance="stealth"]:${s.a}[href]) .control {
          box-shadow: 0 0 0 1px ${r.a.LinkText};
      }
    `))},"w/m2":function(t,e,n){"use strict";var i=n("OnwC"),r=n("ERkP"),o=n.n(r),s=n("eGM7"),a=n("j48/");n.o(a,"AutoSuggestContext")&&n.d(e,"AutoSuggestContext",(function(){return a.AutoSuggestContext})),n.o(a,"ButtonDirection")&&n.d(e,"ButtonDirection",(function(){return a.ButtonDirection})),n.o(a,"ProgressType")&&n.d(e,"ProgressType",(function(){return a.ProgressType})),n.o(a,"RadioSlot")&&n.d(e,"RadioSlot",(function(){return a.RadioSlot}));class c extends i.a{constructor(){super(...arguments),this.handledProps={managedClasses:void 0}}render(){return o.a.createElement("a",Object.assign({},this.unhandledProps(),{className:this.generateClassNames()}),this.props.children)}generateClassNames(){return super.generateClassNames(this.props.managedClasses.hypertext)}}c.displayName=s.DisplayNamePrefix+"Hypertext",c.defaultProps={managedClasses:{}},e.default=c},wHpb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("FGLN");const r=Object(i.b)()?"focus-visible":"focus"},wK6v:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var i=n("b4vE"),r=n("omUM"),o=n.n(r);const s=Object(i.create)(o()()),a=(new i.SheetsManager,new i.SheetsRegistry)},wvmI:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("5ZAu"),r=n("O/9U"),o=n("oePG"),s=n("WniA");const a=new WeakMap,c={bubbles:!0,composed:!0,cancelable:!0};function l(t){return t.shadowRoot||a.get(t)||null}class u extends r.a{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.view=null,this.element=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){const e=t.attachShadow(n);"closed"===n.mode&&a.set(t,e)}const i=o.b.getAccessors(t);if(i.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,r=i.length;n<r;++n){const r=i[n].name,o=t[r];void 0!==o&&(delete t[r],e[r]=o)}}}get isConnected(){return o.b.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,o.b.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=l(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.prepend(t);else if(!t.isAttachedTo(e)){const n=t.behaviors;t.addStylesTo(e),null!==n&&this.addBehaviors(n)}}removeStyles(t){const e=l(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const n=t.behaviors;t.removeStylesFrom(e),null!==n&&this.removeBehaviors(n)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),n=t.length,i=[];for(let r=0;r<n;++r){const n=t[r];e.has(n)?e.set(n,e.get(n)+1):(e.set(n,1),i.push(n))}if(this._isConnected){const t=this.element;for(let e=0;e<i.length;++e)i[e].bind(t,o.c)}}removeBehaviors(t,e=!1){const n=this.behaviors;if(null===n)return;const i=t.length,r=[];for(let o=0;o<i;++o){const i=t[o];if(n.has(i)){const t=n.get(i)-1;0===t||e?n.delete(i)&&r.push(i):n.set(i,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<r.length;++e)r[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,o.c);const e=this.behaviors;if(null!==e)for(const[n]of e)n.bind(t,o.c);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[n]of e)n.unbind(t)}}onAttributeChangedCallback(t,e,n){const i=this.definition.attributeLookup[t];void 0!==i&&i.onAttributeChangedCallback(this.element,n)}emit(t,e,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},c),n)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const n=Object.keys(e);for(let i=0,r=n.length;i<r;++i){const r=n[i];t[r]=e[r]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,n=l(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||i.a.removeChildNodes(n),t&&(this.view=t.render(e,n,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=s.a.forType(t.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return t.$fastController=new u(t,n)}}},xAa8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("0q6d");class r{constructor(t,e,n){this.x=t,this.y=e,this.z=n}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new r(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new r(Object(i.i)(this.x,t),Object(i.i)(this.y,t),Object(i.i)(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}r.whitePoint=new r(.95047,1,1.08883)},xDbA:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i,r=n("+viU"),o=n("sNWd"),s=n("OnwC"),a=n("gQ7Y"),c=n("o1qX"),l=n("ERkP"),u=n.n(l),d=n("yR4y"),h=n("NS3c");!function(t){t.before="before",t.after="after"}(i||(i={}));class b extends s.a{constructor(){super(...arguments),this.handledProps={appearance:void 0,beforeContent:void 0,afterContent:void 0,disabled:void 0,href:void 0,managedClasses:void 0}}render(){const t=this.props.managedClasses;return u.a.createElement(a.default,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),managedClasses:t,href:this.props.href,disabled:this.props.disabled}),this.withSlot(i.before),this.generateBeforeContent(),u.a.createElement("span",{className:Object(c.a)(t.button_contentRegion)},this.withoutSlot([i.before,i.after])),this.withSlot(i.after),this.generateAfterContent())}generateClassNames(){return super.generateClassNames(Object(c.a)([this.props.managedClasses["button__"+h.a[this.props.appearance]],"string"==typeof this.props.appearance]))}generateBeforeContent(){if("function"==typeof this.props.beforeContent)return this.props.beforeContent(Object(c.a)(this.props.managedClasses.button_beforeContent))}generateAfterContent(){if("function"==typeof this.props.afterContent)return this.props.afterContent(Object(c.a)(this.props.managedClasses.button_afterContent))}}b.displayName=d.a+"Button",b.defaultProps={managedClasses:{}};var p=b;const f=Object(r.a)(o.a)(p)},xR5m:function(t,e,n){"use strict";var i=n("IQrE").a.Symbol,r=Object.prototype,o=r.hasOwnProperty,s=r.toString,a=i?i.toStringTag:void 0;var c=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var i=!0}catch(t){}var r=s.call(t);return i&&(e?t[a]=n:delete t[a]),r},l=Object.prototype.toString;var u=function(t){return l.call(t)},d=i?i.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?c(t):u(t)}},xY0q:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));const i=":host([hidden]){display:none}";function r(t){return`${i}:host{display:${t}}`}},xiVQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("oGZu"),r=n("4zka"),o=n("HOx9"),s=function(){function t(e,n,i,r){void 0===i&&(i=!1),this.messageId=e,this.message=(i?t.AiUserActionablePrefix:t.AiNonUserActionablePrefix)+e;var s="";Object(o.e)()&&(s=Object(o.b)().stringify(r));var a=(n?" message:"+t.sanitizeDiagnosticText(n):"")+(r?" props:"+t.sanitizeDiagnosticText(s):"");this.message+=a}return t.sanitizeDiagnosticText=function(t){return t?'"'+t.replace(/\"/g,"")+'"':""},t.dataType="MessageData",t.AiNonUserActionablePrefix="AI (Internal): ",t.AiUserActionablePrefix="AI: ",t}(),a=function(){function t(t){this.queue=[],this.AIInternalMessagePrefix="AITR_",this._messageCount=0,this._messageLogged={},this.enableDebugExceptions=function(){return!1},this.consoleLoggingLevel=function(){return 0},this.telemetryLoggingLevel=function(){return 1},this.maxInternalMessageLimit=function(){return 25},r.a.isNullOrUndefined(t)||(r.a.isNullOrUndefined(t.loggingLevelConsole)||(this.consoleLoggingLevel=function(){return t.loggingLevelConsole}),r.a.isNullOrUndefined(t.loggingLevelTelemetry)||(this.telemetryLoggingLevel=function(){return t.loggingLevelTelemetry}),r.a.isNullOrUndefined(t.maxMessageLimit)||(this.maxInternalMessageLimit=function(){return t.maxMessageLimit}),r.a.isNullOrUndefined(t.enableDebugExceptions)||(this.enableDebugExceptions=function(){return t.enableDebugExceptions}))}return t.prototype.throwInternal=function(t,e,n,o,a){void 0===a&&(a=!1);var c=new s(e,n,a,o);if(this.enableDebugExceptions())throw c;if(!r.a.isUndefined(c)&&c&&!r.a.isUndefined(c.message)){if(a){var l=+c.messageId;!this._messageLogged[l]&&this.consoleLoggingLevel()>=i.a.WARNING&&(this.warnToConsole(c.message),this._messageLogged[l]=!0)}else this.consoleLoggingLevel()>=i.a.WARNING&&this.warnToConsole(c.message);this.logInternalMessage(t,c)}},t.prototype.warnToConsole=function(t){!r.a.isUndefined(console)&&console&&(r.a.isFunction(console.warn)?console.warn(t):r.a.isFunction(console.log)&&console.log(t))},t.prototype.resetInternalMessageCount=function(){this._messageCount=0,this._messageLogged={}},t.prototype.logInternalMessage=function(t,e){if(!this._areInternalMessagesThrottled()){var n=!0,r=this.AIInternalMessagePrefix+e.messageId;if(this._messageLogged[r]?n=!1:this._messageLogged[r]=!0,n&&(t<=this.telemetryLoggingLevel()&&(this.queue.push(e),this._messageCount++),this._messageCount===this.maxInternalMessageLimit())){var o="Internal events throttle limit per PageView reached for this app.",a=new s(i.b.MessageLimitPerPVExceeded,o,!1);this.queue.push(a),this.warnToConsole(o)}}},t.prototype._areInternalMessagesThrottled=function(){return this._messageCount>=this.maxInternalMessageLimit()},t}()},xzNF:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var i=n("lFvR"),r=n("JIBo"),o=n("g6KR");const s=Object(r.d)(Object(o.a)(i.T,14,0,i.O,i.M,i.N)),a=Object(r.i)(r.a.rest,s);Object(r.i)(r.a.hover,s),Object(r.i)(r.a.active,s),Object(r.i)(r.a.focus,s)},y2Il:function(t,e,n){"use strict";var i,r;n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),function(t){t.caption="caption",t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6",t.p="p",t.span="span",t.figcaption="figcaption"}(i||(i={})),function(t){t[t._1=1]="_1",t[t._2=2]="_2",t[t._3=3]="_3",t[t._4=4]="_4",t[t._5=5]="_5",t[t._6=6]="_6",t[t._7=7]="_7",t[t._8=8]="_8",t[t._9=9]="_9"}(r||(r={}))},yR4y:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i="MSFT"},zP2P:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return b}));var i,r=n("3ZGc"),o=n("HzrG"),s=n("MF9s");function a(t=1){return e=>(Object(s.l)(e)+Object(s.t)("density")(e))*Object(s.p)(e)*t}function c(t=1,e){return n=>Object(r.b)(e)(a(t)(n))}function l(t,e,n){return r=>{const a=function(t){const e=Object(s.t)("density")(t);return e>=2?i.spacious:e<=-2?i.compact:i.normal}(r);return Object(o.a)(a===i.compact?t:a===i.spacious?n:e,r)}}function u(t=0){return e=>(Object(s.m)(e)+l(-1,0,1)(e))*Object(s.p)(e)-t}function d(t=0,e){return n=>Object(r.b)(e)(u(Object(o.a)(t,n))(n))}function h(t){const e=Object(s.p)(t)/2,n=l(-1*e,0,e)(t);return Object(s.l)(t)/2*Object(s.p)(t)+n}function b(t){return"string"==typeof t?e=>Object(r.b)(t)(h(e)):Object(r.a)(h(t))}!function(t){t.compact="compact",t.normal="normal",t.spacious="spacious"}(i||(i={}))},zrlR:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=n("oqLQ").a.with(window.matchMedia("(prefers-color-scheme: dark)"))}}]);