(window.webpackJsonp=window.webpackJsonp||[]).push([["outlook-email-preview-wc"],{"1TxV":function(e,t){t.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,l=(1<<a)-1,c=l>>1,d=-7,u=n?i-1:0,h=n?-1:1,f=e[t+u];for(u+=h,o=f&(1<<-d)-1,f>>=-d,d+=a;d>0;o=256*o+e[t+u],u+=h,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=r;d>0;s=256*s+e[t+u],u+=h,d-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=c}return(f?-1:1)*s*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var s,a,l,c=8*o-i-1,d=(1<<c)-1,u=d>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+u>=1?h/l:h*Math.pow(2,1-u))*l>=2&&(s++,l/=2),s+u>=d?(a=0,s=d):s+u>=1?(a=(t*l-1)*Math.pow(2,i),s+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*g}},"3mcw":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e=5242880)=>{return e>62914560&&(e=62914560),(t=e)>327680&&(t=320*Math.floor(t/327680)*1024),t;var t}},"4X0Z":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("D57K");class i{constructor(e=-1,t=-1){this.minValue=e,this.maxValue=t}}class o{constructor(e,t,n,r={}){this.DEFAULT_FILE_SIZE=5242880,this.client=e,this.file=t,void 0===r.rangeSize&&(r.rangeSize=this.DEFAULT_FILE_SIZE),this.options=r,this.uploadSession=n,this.nextRange=new i(0,this.options.rangeSize-1)}static createUploadSession(e,t,n,i={}){return r.b(this,void 0,void 0,(function*(){try{const r=yield e.api(t).headers(i).post(n);return{url:r.uploadUrl,expiry:new Date(r.expirationDateTime)}}catch(e){throw e}}))}parseRange(e){const t=e[0];if(void 0===t||""===t)return new i;const n=t.split("-"),r=parseInt(n[0],10);let o=parseInt(n[1],10);return Number.isNaN(o)&&(o=this.file.size-1),new i(r,o)}updateTaskStatus(e){this.uploadSession.expiry=new Date(e.expirationDateTime),this.nextRange=this.parseRange(e.nextExpectedRanges)}getNextRange(){if(-1===this.nextRange.minValue)return this.nextRange;const e=this.nextRange.minValue;let t=e+this.options.rangeSize-1;return t>=this.file.size&&(t=this.file.size-1),new i(e,t)}sliceFile(e){return this.file.content.slice(e.minValue,e.maxValue+1)}upload(){return r.b(this,void 0,void 0,(function*(){try{for(;;){const e=this.getNextRange();if(-1===e.maxValue){const e=new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");throw e.name="Invalid Session",e}const t=this.sliceFile(e),n=yield this.uploadSlice(t,e,this.file.size);if(void 0!==n.id)return n;this.updateTaskStatus(n)}}catch(e){throw e}}))}uploadSlice(e,t,n){return r.b(this,void 0,void 0,(function*(){try{return yield this.client.api(this.uploadSession.url).headers({"Content-Length":""+(t.maxValue-t.minValue+1),"Content-Range":`bytes ${t.minValue}-${t.maxValue}/${n}`}).put(e)}catch(e){throw e}}))}cancel(){return r.b(this,void 0,void 0,(function*(){try{return yield this.client.api(this.uploadSession.url).delete()}catch(e){throw e}}))}getStatus(){return r.b(this,void 0,void 0,(function*(){try{const e=yield this.client.api(this.uploadSession.url).get();return this.updateTaskStatus(e),e}catch(e){throw e}}))}resume(){return r.b(this,void 0,void 0,(function*(){try{return yield this.getStatus(),yield this.upload()}catch(e){throw e}}))}}},"6fq4":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("HDSB");let i=!1;Object(r.a)()&&(window.addEventListener("keydown",()=>{i=!0}),window.addEventListener("mousedown",()=>{i=!1}))},GmLw:function(e,t,n){"use strict";(function(e){var r=n("dEMF"),i=n("1TxV"),o=n("Rl48");function s(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(s()<t)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=l.prototype:(null===e&&(e=new l(t)),e.length=t),e}function l(e,t,n){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return c(this,e,t,n)}function c(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=h(e,t);return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!l.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|p(t,n),i=(e=a(e,r)).write(t,n);i!==r&&(e=e.slice(0,i));return e}(e,t,n):function(e,t){if(l.isBuffer(t)){var n=0|f(t.length);return 0===(e=a(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?a(e,0):h(e,t);if("Buffer"===t.type&&o(t.data))return h(e,t.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function d(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(d(t),e=a(e,t<0?0:0|f(t)),!l.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function h(e,t){var n=t.length<0?0:0|f(t.length);e=a(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function f(e){if(e>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return H(e).length;default:if(r)return N(e).length;t=(""+t).toLowerCase(),r=!0}}function g(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,n);case"utf8":case"utf-8":return C(this,t,n);case"ascii":return S(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return R(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function m(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function y(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=l.from(t,r)),l.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,i);if("number"==typeof t)return t&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,i){var o,s=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var d=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===d?0:o-d)){if(-1===d&&(d=o),o-d+1===l)return d*s}else-1!==d&&(o-=o-d),d=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){for(var u=!0,h=0;h<l;h++)if(c(e,o+h)!==c(t,h)){u=!1;break}if(u)return o}return-1}function b(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[n+s]=a}return s}function w(e,t,n,r){return F(N(t,e.length-n),e,n,r)}function E(e,t,n,r){return F(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function O(e,t,n,r){return E(e,t,n,r)}function x(e,t,n,r){return F(H(t),e,n,r)}function T(e,t,n,r){return F(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function R(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function C(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,s,a,l,c=e[i],d=null,u=c>239?4:c>223?3:c>191?2:1;if(i+u<=n)switch(u){case 1:c<128&&(d=c);break;case 2:128==(192&(o=e[i+1]))&&(l=(31&c)<<6|63&o)>127&&(d=l);break;case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(l=(15&c)<<12|(63&o)<<6|63&s)>2047&&(l<55296||l>57343)&&(d=l);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(l=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(d=l)}null===d?(d=65533,u=1):d>65535&&(d-=65536,r.push(d>>>10&1023|55296),d=56320|1023&d),r.push(d),i+=u}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}t.Buffer=l,t.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},t.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=s(),l.poolSize=8192,l._augment=function(e){return e.__proto__=l.prototype,e},l.from=function(e,t,n){return c(null,e,t,n)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(e,t,n){return function(e,t,n,r){return d(t),t<=0?a(e,t):void 0!==n?"string"==typeof r?a(e,t).fill(n,r):a(e,t).fill(n):a(e,t)}(null,e,t,n)},l.allocUnsafe=function(e){return u(null,e)},l.allocUnsafeSlow=function(e){return u(null,e)},l.isBuffer=function(e){return!(null==e||!e._isBuffer)},l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=l.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var s=e[n];if(!l.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,i),i+=s.length}return r},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)m(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},l.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?C(this,0,e):g.apply(this,arguments)},l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},l.prototype.compare=function(e,t,n,r,i){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),c=this.slice(r,i),d=e.slice(t,n),u=0;u<a;++u)if(c[u]!==d[u]){o=c[u],s=d[u];break}return o<s?-1:s<o?1:0},l.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},l.prototype.indexOf=function(e,t,n){return y(this,e,t,n,!0)},l.prototype.lastIndexOf=function(e,t,n){return y(this,e,t,n,!1)},l.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return w(this,e,t,n);case"ascii":return E(this,e,t,n);case"latin1":case"binary":return O(this,e,t,n);case"base64":return x(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function S(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function A(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function _(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=k(e[o]);return i}function D(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function B(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,n,r,i,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function M(e,t,n,r){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function L(e,t,n,r){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function U(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function $(e,t,n,r,o){return o||U(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function I(e,t,n,r,o){return o||U(e,0,n,8),i.write(e,t,n,r,52,8),n+8}l.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),l.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=l.prototype;else{var i=t-e;n=new l(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e]}return n},l.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||B(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},l.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||B(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},l.prototype.readUInt8=function(e,t){return t||B(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return t||B(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return t||B(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return t||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return t||B(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||B(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},l.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||B(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return t||B(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){t||B(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt16BE=function(e,t){t||B(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt32LE=function(e,t){return t||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return t||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return t||B(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return t||B(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return t||B(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return t||B(e,8,this.length),i.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||P(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},l.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||P(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},l.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,1,255,0),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},l.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},l.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):L(this,e,t,!0),t+4},l.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},l.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,1,127,-128),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},l.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},l.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):L(this,e,t,!0),t+4},l.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},l.prototype.writeFloatLE=function(e,t,n){return $(this,e,t,!0,n)},l.prototype.writeFloatBE=function(e,t,n){return $(this,e,t,!1,n)},l.prototype.writeDoubleLE=function(e,t,n){return I(this,e,t,!0,n)},l.prototype.writeDoubleBE=function(e,t,n){return I(this,e,t,!1,n)},l.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n];else if(o<1e3||!l.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},l.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!l.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var s=l.isBuffer(e)?e:N(new l(e,r).toString()),a=s.length;for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this};var j=/[^+\/0-9A-Za-z-_]/g;function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function N(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function H(e){return r.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(j,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}}).call(this,n("fRV1"))},Rl48:function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},S35a:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("D57K"),i=n("QBS5"),o=n("P4Ao"),s=n("xQNS"),a=n("6BDD"),l=n("+53S"),c=n("UauI"),d=n("C5kU");const u=a.b`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedBy="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Object(l.b)("control")}
    >
        ${d.c}
        <span class="content" part="content">
            <slot ${Object(c.b)("defaultSlottedContent")}></slot>
        </span>
        ${d.b}
    </a>
`;var h=n("4X57"),f=n("vHfj"),p=n("57ob");const g=h.a`
  ${f.b}
`.withBehaviors(Object(p.a)("accent",f.a),Object(p.a)("hypertext",f.c),Object(p.a)("lightweight",f.d),Object(p.a)("outline",f.e),Object(p.a)("stealth",f.f));let m=class extends s.a{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};Object(r.e)([i.b],m.prototype,"appearance",void 0),m=Object(r.e)([Object(o.b)({name:"fluent-anchor",template:u,styles:g,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],m)},VGvG:function(e,t,n){"use strict";n.r(t),n.d(t,"ToolingInfo",(function(){return lt})),n.d(t,"OutlookEmailPreview",(function(){return fe})),n.d(t,"OutlookEmailPreviewTemplate",(function(){return at}));var r=n("A03o"),i=n("sydv"),o=n("C49W"),s=n("akWC"),a=n("Zn5T");const l=Object(r.a)(a.a.outlookEmailPreview,"Outlook email preview WC experience",Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(i.c)("authProviderType","Auth provider type","Auth provider type to be used")),Object(o.d)("maxMessageDisplayedCount","Max message display count","Max number of message displayed count")),Object(i.c)("newEmailButtonUrl","New Email Button URL","URL for new emails")),Object(i.c)("newEventButtonUrl","New Event Button URL","URL for new events")),Object(o.c)("openLinksInNewTab","Open links in new tab","Open all links in new tab flag",!1)),Object(o.d)("width","Width","Width of preview card")),Object(s.a)({emptyInboxMessage:"Your inbox is empty",enableButtonText:"Enable",errorMessage:"We are unable to retrieve your inbox at this time",freMessage:"Sign in to Microsoft Edge with your Microsoft account to preview your email here.",justNowText:"Just now",lastUpdatedText:"Last updated:",newEmailButtonText:"New Email",newEventButtonText:"New Event",noThanksButtonText:"No, thanks",signInButtonText:"Sign in",signInMessage:"Preview your Outlook inbox, start a new email, or create a calendar invite.",title:"Inbox",yesterdayAtText:"Yesterday at",accessibility:{event:"Event",flagStatus_complete:"Flag Status: Complete",flagStatus_flagged:"Flag Status: Flagged",flagStatus_notFlagged:"Flag Status: Not flagged",importanceLow:"Importance low",importanceHigh:"Importance high",loading:"Loading",unread:"Unread",unreadEmailCount:"Unread email count",withAttachments:"With attachments"}})),["authProviderType","newEmailButtonUrl","newEventButtonUrl","openLinksInNewTab","localizedStrings"]);var c,d=n("D57K"),u=n("IqCT"),h=n("oePG"),f=n("QBS5"),p=n("s9+9");!function(e){e.Custom="custom",e.MSA="msa",e.AAD="aad"}(c||(c={}));var g;!function(e){e.Enabled="enabled",e.Error="error",e.FRE="fre",e.Loading="loading",e.Normal="normal",e.NotStarted="not-started"}(g||(g={}));var m,y,v=n("dTwT"),b=n("XzyE"),w=n("jE1l"),E=n("rvYQ"),O=n("ypwz");class x{constructor(){this.eventHandlers=[]}fire(e){for(const t of this.eventHandlers)t(e)}add(e){this.eventHandlers.push(e)}remove(e){for(let t=0;t<this.eventHandlers.length;t++)this.eventHandlers[t]===e&&(this.eventHandlers.splice(t,1),t--)}}!function(e){e[e.Popup=0]="Popup",e[e.Redirect=1]="Redirect",e[e.EdgeAuthPrivate=2]="EdgeAuthPrivate"}(m||(m={})),function(e){e[e.Loading=0]="Loading",e[e.SignedOut=1]="SignedOut",e[e.SignedIn=2]="SignedIn"}(y||(y={}));n("VcX0");class T{constructor(e=[]){this.middlewareOptions=new Map;for(const t of e){const e=t.constructor;this.middlewareOptions.set(e,t)}}getMiddlewareOptions(e){return this.middlewareOptions.get(e)}setMiddlewareOptions(e,t){this.middlewareOptions.set(e,t)}}const R=(e,t,n)=>{let r=null;if("undefined"!=typeof Request&&e instanceof Request)r=e.headers.get(n);else if(void 0!==t&&void 0!==t.headers)if("undefined"!=typeof Headers&&t.headers instanceof Headers)r=t.headers.get(n);else if(t.headers instanceof Array){const e=t.headers;for(let t=0,i=e.length;t<i;t++)if(e[t][0]===n){r=e[t][1];break}}else void 0!==t.headers[n]&&(r=t.headers[n]);return r},C=(e,t,n,r)=>{if("undefined"!=typeof Request&&e instanceof Request)e.headers.set(n,r);else if(void 0!==t)if(void 0===t.headers)t.headers=new Headers({[n]:r});else if("undefined"!=typeof Headers&&t.headers instanceof Headers)t.headers.set(n,r);else if(t.headers instanceof Array){let e=0;const i=t.headers.length;for(;e<i;e++){const i=t.headers[e];if(i[0]===n){i[1]=r;break}}e===i&&t.headers.push([n,r])}else Object.assign(t.headers,{[n]:r})},S=(e,t,n,r)=>{"undefined"!=typeof Request&&e instanceof Request?e.headers.append(n,r):void 0!==t&&(void 0===t.headers?t.headers=new Headers({[n]:r}):"undefined"!=typeof Headers&&t.headers instanceof Headers?t.headers.append(n,r):t.headers instanceof Array?t.headers.push([n,r]):void 0===t.headers?t.headers={[n]:r}:void 0===t.headers[n]?t.headers[n]=r:t.headers[n]+=", "+r)};class A{constructor(e,t){this.authenticationProvider=e,this.authenticationProviderOptions=t}}var _;!function(e){e[e.NONE=0]="NONE",e[e.REDIRECT_HANDLER_ENABLED=1]="REDIRECT_HANDLER_ENABLED",e[e.RETRY_HANDLER_ENABLED=2]="RETRY_HANDLER_ENABLED",e[e.AUTHENTICATION_HANDLER_ENABLED=4]="AUTHENTICATION_HANDLER_ENABLED"}(_||(_={}));class D{constructor(){this.featureUsage=_.NONE}static updateFeatureUsageFlag(e,t){let n;e.middlewareControl instanceof T?n=e.middlewareControl.getMiddlewareOptions(D):e.middlewareControl=new T,void 0===n&&(n=new D,e.middlewareControl.setMiddlewareOptions(D,n)),n.setFeatureUsage(t)}setFeatureUsage(e){this.featureUsage=this.featureUsage|e}getFeatureUsage(){return this.featureUsage.toString(16)}}class B{constructor(e){this.authenticationProvider=e}execute(e){return d.b(this,void 0,void 0,(function*(){try{let t,n,r;e.middlewareControl instanceof T&&(t=e.middlewareControl.getMiddlewareOptions(A)),void 0!==t&&(n=t.authenticationProvider,r=t.authenticationProviderOptions),void 0===n&&(n=this.authenticationProvider);const i="Bearer "+(yield n.getAccessToken(r));return S(e.request,e.options,B.AUTHORIZATION_HEADER,i),D.updateFeatureUsageFlag(e,_.AUTHENTICATION_HANDLER_ENABLED),yield this.nextMiddleware.execute(e)}catch(e){throw e}}))}setNext(e){this.nextMiddleware=e}}B.AUTHORIZATION_HEADER="Authorization";class P{execute(e){return d.b(this,void 0,void 0,(function*(){try{return void(e.response=yield fetch(e.request,e.options))}catch(e){throw e}}))}}var M=n("cpZP");class L{constructor(e=L.DEFAULT_DELAY,t=L.DEFAULT_MAX_RETRIES,n=L.DEFAULT_SHOULD_RETRY){if(e>L.MAX_DELAY&&t>L.MAX_MAX_RETRIES){const e=new Error(`Delay and MaxRetries should not be more than ${L.MAX_DELAY} and ${L.MAX_MAX_RETRIES}`);throw e.name="MaxLimitExceeded",e}if(e>L.MAX_DELAY){const e=new Error("Delay should not be more than "+L.MAX_DELAY);throw e.name="MaxLimitExceeded",e}if(t>L.MAX_MAX_RETRIES){const e=new Error("MaxRetries should not be more than "+L.MAX_MAX_RETRIES);throw e.name="MaxLimitExceeded",e}if(e<0&&t<0){const e=new Error("Delay and MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}if(e<0){const e=new Error("Delay should not be negative");throw e.name="MinExpectationNotMet",e}if(t<0){const e=new Error("MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}this.delay=Math.min(e,L.MAX_DELAY),this.maxRetries=Math.min(t,L.MAX_MAX_RETRIES),this.shouldRetry=n}getMaxDelay(){return L.MAX_DELAY}}L.DEFAULT_DELAY=3,L.DEFAULT_MAX_RETRIES=3,L.MAX_DELAY=180,L.MAX_MAX_RETRIES=10,L.DEFAULT_SHOULD_RETRY=()=>!0;class U{constructor(e=new L){this.options=e}isRetry(e){return-1!==U.RETRY_STATUS_CODES.indexOf(e.status)}isBuffered(e,t){const n="string"==typeof e?t.method:e.method;if(n===M.a.PUT||n===M.a.PATCH||n===M.a.POST){if("application/octet-stream"===R(e,t,"Content-Type"))return!1}return!0}getDelay(e,t,n){const r=()=>Number(Math.random().toFixed(3)),i=void 0!==e.headers?e.headers.get(U.RETRY_AFTER_HEADER):null;let o;return o=null!==i?Number.isNaN(Number(i))?Math.round((new Date(i).getTime()-Date.now())/1e3):Number(i):t>=2?this.getExponentialBackOffTime(t)+n+r():n+r(),Math.min(o,this.options.getMaxDelay()+r())}getExponentialBackOffTime(e){return Math.round(.5*(Math.pow(2,e)-1))}sleep(e){return d.b(this,void 0,void 0,(function*(){const t=1e3*e;return new Promise(e=>setTimeout(e,t))}))}getOptions(e){let t;return e.middlewareControl instanceof T&&(t=e.middlewareControl.getMiddlewareOptions(this.options.constructor)),void 0===t&&(t=Object.assign(new L,this.options)),t}executeWithRetry(e,t,n){return d.b(this,void 0,void 0,(function*(){try{if(yield this.nextMiddleware.execute(e),t<n.maxRetries&&this.isRetry(e.response)&&this.isBuffered(e.request,e.options)&&n.shouldRetry(n.delay,t,e.request,e.options,e.response)){++t,C(e.request,e.options,U.RETRY_ATTEMPT_HEADER,t.toString());const r=this.getDelay(e.response,t,n.delay);return yield this.sleep(r),yield this.executeWithRetry(e,t,n)}return}catch(e){throw e}}))}execute(e){return d.b(this,void 0,void 0,(function*(){try{const t=0,n=this.getOptions(e);return D.updateFeatureUsageFlag(e,_.RETRY_HANDLER_ENABLED),yield this.executeWithRetry(e,t,n)}catch(e){throw e}}))}setNext(e){this.nextMiddleware=e}}U.RETRY_STATUS_CODES=[429,503,504],U.RETRY_ATTEMPT_HEADER="Retry-Attempt",U.RETRY_AFTER_HEADER="Retry-After";class ${constructor(e=$.DEFAULT_MAX_REDIRECTS,t=$.DEFAULT_SHOULD_RETRY){if(e>$.MAX_MAX_REDIRECTS){const e=new Error("MaxRedirects should not be more than "+$.MAX_MAX_REDIRECTS);throw e.name="MaxLimitExceeded",e}if(e<0){const e=new Error("MaxRedirects should not be negative");throw e.name="MinExpectationNotMet",e}this.maxRedirects=e,this.shouldRedirect=t}}$.DEFAULT_MAX_REDIRECTS=5,$.MAX_MAX_REDIRECTS=20,$.DEFAULT_SHOULD_RETRY=()=>!0;class I{constructor(e=new $){this.options=e}isRedirect(e){return-1!==I.REDIRECT_STATUS_CODES.indexOf(e.status)}hasLocationHeader(e){return e.headers.has(I.LOCATION_HEADER)}getLocationHeader(e){return e.headers.get(I.LOCATION_HEADER)}isRelativeURL(e){return-1===e.indexOf("://")}shouldDropAuthorizationHeader(e,t){const n=/^[A-Za-z].+?:\/\/.+?(?=\/|$)/,r=n.exec(e);let i,o;null!==r&&(i=r[0]);const s=n.exec(t);return null!==s&&(o=s[0]),void 0!==i&&void 0!==o&&i!==o}updateRequestUrl(e,t){return d.b(this,void 0,void 0,(function*(){var n,r;t.request="string"==typeof t.request?e:yield(n=e,r=t.request,d.b(void 0,void 0,void 0,(function*(){const e=r.headers.get("Content-Type")?yield r.blob():yield Promise.resolve(void 0),{method:t,headers:i,referrer:o,referrerPolicy:s,mode:a,credentials:l,cache:c,redirect:d,integrity:u,keepalive:h,signal:f}=r;return new Request(n,{method:t,headers:i,body:e,referrer:o,referrerPolicy:s,mode:a,credentials:l,cache:c,redirect:d,integrity:u,keepalive:h,signal:f})})))}))}getOptions(e){let t;return e.middlewareControl instanceof T&&(t=e.middlewareControl.getMiddlewareOptions($)),void 0===t&&(t=Object.assign(new $,this.options)),t}executeWithRedirect(e,t,n){return d.b(this,void 0,void 0,(function*(){try{yield this.nextMiddleware.execute(e);const r=e.response;if(!(t<n.maxRedirects&&this.isRedirect(r)&&this.hasLocationHeader(r)&&n.shouldRedirect(r)))return;if(++t,r.status===I.STATUS_CODE_SEE_OTHER)e.options.method=M.a.GET,delete e.options.body;else{const t=this.getLocationHeader(r);!this.isRelativeURL(t)&&this.shouldDropAuthorizationHeader(r.url,t)&&C(e.request,e.options,I.AUTHORIZATION_HEADER,void 0),yield this.updateRequestUrl(t,e)}yield this.executeWithRedirect(e,t,n)}catch(e){throw e}}))}execute(e){return d.b(this,void 0,void 0,(function*(){try{const t=0,n=this.getOptions(e);return e.options.redirect=I.MANUAL_REDIRECT,D.updateFeatureUsageFlag(e,_.REDIRECT_HANDLER_ENABLED),yield this.executeWithRedirect(e,t,n)}catch(e){throw e}}))}setNext(e){this.nextMiddleware=e}}I.REDIRECT_STATUS_CODES=[301,302,303,307,308],I.STATUS_CODE_SEE_OTHER=303,I.LOCATION_HEADER="Location",I.AUTHORIZATION_HEADER="Authorization",I.MANUAL_REDIRECT="manual";class j{execute(e){return d.b(this,void 0,void 0,(function*(){try{let t=R(e.request,e.options,j.CLIENT_REQUEST_ID_HEADER);null===t&&(t=(()=>{let e="";for(let t=0;t<32;t++)8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=Math.floor(16*Math.random()).toString(16);return e})(),C(e.request,e.options,j.CLIENT_REQUEST_ID_HEADER,t));let n,r=j.PRODUCT_NAME+"/2.0.0";if(e.middlewareControl instanceof T&&(n=e.middlewareControl.getMiddlewareOptions(D)),void 0!==n){const e=n.getFeatureUsage();r+=` (${j.FEATURE_USAGE_STRING}=${e})`}return S(e.request,e.options,j.SDK_VERSION_HEADER,r),yield this.nextMiddleware.execute(e)}catch(e){throw e}}))}setNext(e){this.nextMiddleware=e}}j.CLIENT_REQUEST_ID_HEADER="client-request-id",j.SDK_VERSION_HEADER="SdkVersion",j.PRODUCT_NAME="graph-js",j.FEATURE_USAGE_STRING="featureUsage";n("4X0Z"),n("ebFE");class k{constructor(e){this.provider=e}getAccessToken(){return d.b(this,void 0,void 0,(function*(){return new Promise((e,t)=>{this.provider((n,r)=>{r?e(r):t(n)})})}))}}class N{constructor(e=-1){this.statusCode=e,this.code=null,this.message=null,this.requestId=null,this.date=new Date,this.body=null}}class H{static constructError(e,t){const n=new N(t);return void 0!==e.name&&(n.code=e.name),n.body=e.toString(),n.message=e.message,n.date=new Date,n}static constructErrorFromResponse(e,t){e=e.error;const n=new N(t);n.code=e.code,n.message=e.message,void 0!==e.innerError&&(n.requestId=e.innerError["request-id"],n.date=new Date(e.innerError.date));try{n.body=JSON.stringify(e)}catch(e){}return n}static getError(e=null,t=-1,n){return d.b(this,void 0,void 0,(function*(){let r;if(r=e&&e.error?H.constructErrorFromResponse(e,t):"undefined"!=typeof Error&&e instanceof Error?H.constructError(e,t):new N(t),"function"!=typeof n)return r;n(r,null)}))}}var F,q,V,Y,z=n("bYbp");!function(e){e.ARRAYBUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.RAW="raw",e.STREAM="stream",e.TEXT="text"}(F||(F={})),function(e){e.TEXT_HTML="text/html",e.TEXT_XML="text/xml",e.APPLICATION_XML="application/xml",e.APPLICATION_XHTML="application/xhtml+xml"}(q||(q={})),function(e){e.TEXT_PLAIN="text/plain",e.APPLICATION_JSON="application/json"}(V||(V={})),function(e){e.DOCUMENT="^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$",e.IMAGE="^image\\/.+"}(Y||(Y={}));class X{static parseDocumentResponse(e,t){try{return"undefined"!=typeof DOMParser?new Promise((n,r)=>{e.text().then(e=>{try{const r=(new DOMParser).parseFromString(e,t);n(r)}catch(e){r(e)}})}):Promise.resolve(e.body)}catch(e){throw e}}static convertResponse(e,t){return d.b(this,void 0,void 0,(function*(){if(204===e.status)return Promise.resolve();let n;try{switch(t){case F.ARRAYBUFFER:n=yield e.arrayBuffer();break;case F.BLOB:n=yield e.blob();break;case F.DOCUMENT:n=yield X.parseDocumentResponse(e,q.TEXT_XML);break;case F.JSON:n=yield e.json();break;case F.STREAM:n=yield Promise.resolve(e.body);break;case F.TEXT:n=yield e.text();break;default:const t=e.headers.get("Content-type");if(null!==t){const r=t.split(";")[0];n=new RegExp(Y.DOCUMENT).test(r)?yield X.parseDocumentResponse(e,r):new RegExp(Y.IMAGE).test(r)?e.blob():r===V.TEXT_PLAIN?yield e.text():r===V.APPLICATION_JSON?yield e.json():Promise.resolve(e.body)}else n=Promise.resolve(e.body)}}catch(e){throw e}return n}))}static getResponse(e,t,n){return d.b(this,void 0,void 0,(function*(){try{if(t===F.RAW)return Promise.resolve(e);{const r=yield X.convertResponse(e,t);if(!e.ok)throw r;if("function"!=typeof n)return r;n(null,r)}}catch(e){throw e}}))}}class W{constructor(e,t,n){this.parsePath=e=>{if(-1!==e.indexOf("https://")){const t=(e=e.replace("https://","")).indexOf("/");-1!==t&&(this.urlComponents.host="https://"+e.substring(0,t),e=e.substring(t+1,e.length));const n=e.indexOf("/");-1!==n&&(this.urlComponents.version=e.substring(0,n),e=e.substring(n+1,e.length))}"/"===e.charAt(0)&&(e=e.substr(1));const t=e.indexOf("?");if(-1===t)this.urlComponents.path=e;else{this.urlComponents.path=e.substr(0,t);const n=e.substring(t+1,e.length).split("&");for(const e of n){const t=e.split("="),n=t[0],r=t[1];-1!==z.a.indexOf(n)?this.urlComponents.oDataQueryParams[n]=r:this.urlComponents.otherURLQueryParams[n]=r}}},this.httpClient=e,this.config=t,this.urlComponents={host:this.config.baseUrl,version:this.config.defaultVersion,oDataQueryParams:{},otherURLQueryParams:{}},this._headers={},this._options={},this._middlewareOptions=[],this.parsePath(n)}addCsvQueryParameter(e,t,n){this.urlComponents.oDataQueryParams[e]=this.urlComponents.oDataQueryParams[e]?this.urlComponents.oDataQueryParams[e]+",":"";let r=[];n.length>1&&"string"==typeof t?r=Array.prototype.slice.call(n):"string"==typeof t?r.push(t):r=r.concat(t),this.urlComponents.oDataQueryParams[e]+=r.join(",")}buildFullUrl(){const e=Object(z.c)([this.urlComponents.host,this.urlComponents.version,this.urlComponents.path])+this.createQueryString();return this.config.debugLogging&&console.log(e),e}createQueryString(){const e=this.urlComponents,t=[];if(0!==Object.keys(e.oDataQueryParams).length)for(const n in e.oDataQueryParams)e.oDataQueryParams.hasOwnProperty(n)&&t.push(n+"="+e.oDataQueryParams[n]);if(0!==Object.keys(e.otherURLQueryParams).length)for(const n in e.otherURLQueryParams)e.otherURLQueryParams.hasOwnProperty(n)&&t.push(n+"="+e.otherURLQueryParams[n]);return t.length>0?"?"+t.join("&"):""}updateRequestOptions(e){const t=Object.assign({},e.headers);if(void 0!==this.config.fetchOptions){const t=Object.assign({},this.config.fetchOptions);Object.assign(e,t),void 0!==typeof this.config.fetchOptions.headers&&(e.headers=Object.assign({},this.config.fetchOptions.headers))}Object.assign(e,this._options),void 0!==e.headers&&Object.assign(t,e.headers),Object.assign(t,this._headers),e.headers=t}send(e,t,n){return d.b(this,void 0,void 0,(function*(){let r;const i=new T(this._middlewareOptions);this.updateRequestOptions(t);try{r=(yield this.httpClient.sendRequest({request:e,options:t,middlewareControl:i})).response;return yield X.getResponse(r,this._responseType,n)}catch(e){let t;void 0!==r&&(t=r.status);throw yield H.getError(e,t,n)}}))}header(e,t){return this._headers[e]=t,this}headers(e){for(const t in e)e.hasOwnProperty(t)&&(this._headers[t]=e[t]);return this}option(e,t){return this._options[e]=t,this}options(e){for(const t in e)e.hasOwnProperty(t)&&(this._options[t]=e[t]);return this}middlewareOptions(e){return this._middlewareOptions=e,this}version(e){return this.urlComponents.version=e,this}responseType(e){return this._responseType=e,this}select(e){return this.addCsvQueryParameter("$select",e,arguments),this}expand(e){return this.addCsvQueryParameter("$expand",e,arguments),this}orderby(e){return this.addCsvQueryParameter("$orderby",e,arguments),this}filter(e){return this.urlComponents.oDataQueryParams.$filter=e,this}search(e){return this.urlComponents.oDataQueryParams.$search=e,this}top(e){return this.urlComponents.oDataQueryParams.$top=e,this}skip(e){return this.urlComponents.oDataQueryParams.$skip=e,this}skipToken(e){return this.urlComponents.oDataQueryParams.$skipToken=e,this}count(e){return this.urlComponents.oDataQueryParams.$count=e.toString(),this}query(e){const t=this.urlComponents.otherURLQueryParams;if("string"==typeof e){const n=e.split("="),r=n[0],i=n[1];t[r]=i}else for(const n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return this}get(e){return d.b(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),n={method:M.a.GET};try{return yield this.send(t,n,e)}catch(e){throw e}}))}post(e,t){return d.b(this,void 0,void 0,(function*(){const n=this.buildFullUrl(),r={method:M.a.POST,body:Object(z.b)(e),headers:"undefined"!=typeof FormData&&e instanceof FormData?{}:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}}))}create(e,t){return d.b(this,void 0,void 0,(function*(){try{return yield this.post(e,t)}catch(e){throw e}}))}put(e,t){return d.b(this,void 0,void 0,(function*(){const n=this.buildFullUrl(),r={method:M.a.PUT,body:Object(z.b)(e),headers:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}}))}patch(e,t){return d.b(this,void 0,void 0,(function*(){const n=this.buildFullUrl(),r={method:M.a.PATCH,body:Object(z.b)(e),headers:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}}))}update(e,t){return d.b(this,void 0,void 0,(function*(){try{return yield this.patch(e,t)}catch(e){throw e}}))}delete(e){return d.b(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),n={method:M.a.DELETE};try{return yield this.send(t,n,e)}catch(e){throw e}}))}del(e){return d.b(this,void 0,void 0,(function*(){try{return yield this.delete(e)}catch(e){throw e}}))}getStream(e){return d.b(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),n={method:M.a.GET};this.responseType(F.STREAM);try{return yield this.send(t,n,e)}catch(e){throw e}}))}putStream(e,t){return d.b(this,void 0,void 0,(function*(){const n=this.buildFullUrl(),r={method:M.a.PUT,headers:{"Content-Type":"application/octet-stream"},body:e};try{return yield this.send(n,r,t)}catch(e){throw e}}))}}class G{constructor(e){this.middleware=e}sendRequest(e){return d.b(this,void 0,void 0,(function*(){try{if("string"==typeof e.request&&void 0===e.options){const e=new Error;throw e.name="InvalidRequestOptions",e.message="Unable to execute the middleware, Please provide valid options for a request",e}return yield this.middleware.execute(e),e}catch(e){throw e}}))}}class Q{static createWithAuthenticationProvider(e){const t=new B(e),n=new U(new L),r=new j,i=new P;if(t.setNext(n),new Function("try {return this === global;}catch(e){return false;}")()){const e=new I(new $);n.setNext(e),e.setNext(r)}else n.setNext(r);return r.setNext(i),Q.createWithMiddleware(t)}static createWithMiddleware(e){return new G(e)}}class Z{constructor(e){this.config={baseUrl:"https://graph.microsoft.com/",debugLogging:!1,defaultVersion:"v1.0"};try{(()=>{if("undefined"==typeof Promise&&"undefined"==typeof fetch){const e=new Error("Library cannot function without Promise and fetch. So, please provide polyfill for them.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof Promise){const e=new Error("Library cannot function without Promise. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof fetch){const e=new Error("Library cannot function without fetch. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}})()}catch(e){throw e}for(const t in e)e.hasOwnProperty(t)&&(this.config[t]=e[t]);let t;if(void 0!==e.authProvider&&void 0!==e.middleware){const e=new Error;throw e.name="AmbiguityInInitialization",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both",e}if(void 0!==e.authProvider)t=Q.createWithAuthenticationProvider(e.authProvider);else{if(void 0===e.middleware){const e=new Error;throw e.name="InvalidMiddlewareChain",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain",e}t=new G(e.middleware)}this.httpClient=t}static init(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]="authProvider"===n?new k(e[n]):e[n]);return Z.initWithMiddleware(t)}static initWithMiddleware(e){try{return new Z(e)}catch(e){throw e}}api(e){return new W(this.httpClient,this.config,e)}}function K(...e){return[new A(void 0,{scopes:e})]}function J(...e){const t=e[0];let n=t;for(let t=1;t<e.length;++t){const r=e[t];n.setNext&&n.setNext(r),n=r}return t}class ee{constructor(e,t="v1.0"){this._client=e,this._version=t}get client(){return this._client}get version(){return this._version}api(e){const t=this._client.api(e).version(this._version);return t.middlewareOptions=e=>{const n=t;return n._middlewareOptions=n._middlewareOptions.concat(e),t},t}}class te extends class{constructor(){this._loginChangedDispatcher=new x,this._state=y.Loading}get state(){return this._state}setState(e){e!==this._state&&(this._state=e,this._loginChangedDispatcher.fire(this._state))}onStateChanged(e){this._loginChangedDispatcher.add(e)}removeStateChangedHandler(e){this._loginChangedDispatcher.remove(e)}getAccessTokenForScopes(...e){return this.getAccessToken({scopes:e})}}{constructor(e,t,n){super(),this._getAccessTokenHandler=e,this._loginHandler=t,this._logoutHandler=n,this.graph=function(e,t){const n=[new B(e),new U(new L),new j,new P],r=Z.initWithMiddleware({middleware:J(...n)});return new ee(r,t)}(this)}getAccessToken(e){return this._getAccessTokenHandler(e.scopes)}login(){return this._loginHandler()}logout(){return this._logoutHandler()}}var ne=n("XlyT"),re=n("HxRh"),ie=n("hnBi");function oe(e){switch(e){case c.Custom:return new te(e=>function(){return Object(d.b)(this,void 0,void 0,(function*(){return"true"===new URLSearchParams(location.search).get("atoverride")?Object(v.a)().getItem("atoken"):new Promise((e,t)=>{if(!window.chrome||!window.chrome.authPrivate||!window.chrome.authPrivate.getPrimaryAccountInfo)return e(null);se().then(n=>{const r={account_id:n.accountId,account_type:n.accountType,client_id:"f3222e55-ab35-49de-81f3-88a3be08cf77",scope_or_resource:"https://graph.microsoft.com/User.Read&api-version=2.0"};window.chrome.authPrivate.acquireAccessTokenSilently(r,n=>{n&&n.is_success&&n.is_token_valid?e(n.access_token):(Object(ne.c)(n.error_info.error_string,re.cg,"Failed to fetch access_token from privateAuth API"),t(null))})})})}))}())}}function se(){return Object(d.b)(this,void 0,void 0,(function*(){const e=ie.a.getInstance().rootReducer.connector(p.a.ChromiumPageSettings);return e?yield e.getPrimaryAccountInfoAsync(!1):null}))}function ae(){return Object(d.b)(this,void 0,void 0,(function*(){if(E.a.AppType!==O.a.EdgeChromium)return!0;return(yield se()).accountType===w.d.MSA}))}function le(e,t,n,r,i,o,s){return Object(d.b)(this,void 0,void 0,(function*(){return e.api(t+"/messages").top(o).select(""+i).filter(""+r).middlewareOptions(K(...n)).get()}))}function ce(e,t,n){return Object(d.b)(this,void 0,void 0,(function*(){e.renderState=g.Loading;const r=yield function(e,t){return Object(d.b)(this,void 0,void 0,(function*(){let e=void 0;try{e=(yield function(e,t){return Object(d.b)(this,void 0,void 0,(function*(){return e.api("me/mailFolders/inbox/messages").filter("isRead ne true").count(!0).middlewareOptions(K(...t)).get()}))}(t.graph,["user.read","mail.read"]))["@odata.count"]}catch(e){Object(ne.c)(e,re.eg,"Failed to fetch unread email count")}return e}))}(0,t),i=yield function(e,t,n){return Object(d.b)(this,void 0,void 0,(function*(){let r=[];try{r=yield(i=t.graph,o="",s="receivedDateTime,hasAttachments,subject,importance,isRead,webLink,from,flag,",a=n,le(i,"me/mailFolders/inbox",["mail.read"],o,s,a))}catch(t){r=null,e.renderState=g.Error,Object(ne.c)(t,re.dg,"Failed to fetch emails")}var i,o,s,a;return r}))}(e,t,n),o=(new Date).toLocaleString();null!==i&&(e.lastUpdatedDate=o,e.messages=i,e.renderState=g.Normal,e.unreadCount=r)}))}var de=n("XLvf");class ue{constructor(e,t,n){this.experienceType=a.a.outlookEmailPreview,this.getMessagedCalled=!1,this.initShouldFire=()=>{"true"!==Object(v.a)().getItem("outlookenabled")?this.outlookWC.renderState=g.FRE:(this.initGetMessageData(),this.getMessagedCalled=!0)},this.renderShouldFire=e=>{if(!e)return;this.getMessagedCalled||this.outlookWC.renderState!=g.Enabled||(this.initGetMessageData(),this.getMessagedCalled=!0);const t=e.getBoundingClientRect();Object(de.isNullOrUndefined)(t)||Object(de.isNullOrUndefined)(t.top)||Object(de.isNullOrUndefined)(t.bottom)||Object(de.isNullOrUndefined)(t.left)||Object(de.isNullOrUndefined)(t.right)||(this.outlookWC.isUserSignedIn||ae().then(e=>{e&&(this.outlookWC.isUserSignedIn=!0)}),this.outlookWC.renderHoverComponent=!0,this.outlookWC.requestOpen=!0,this.outlookWC.targetRect=t)},this.unmountShouldFire=()=>{this.outlookWC.focusTop=void 0,this.outlookWC.requestOpen=!1},this.focusShouldMove=e=>(this.outlookWC.focusTop=e,!0),this.outlookWC=e,this.maxEmailCount=t,this.authProvider=n}initGetMessageData(){ce(this.outlookWC,this.authProvider,this.maxEmailCount).then(()=>{const e=ie.a.getInstance().rootReducer.connector(p.a.SmartListSharedData);if(e){let t;const n=this.outlookWC.unreadCount;t=n>99?{children:"99+"}:n&&0!==n?{children:n.toString()}:null,b.a.updateSmartListBadgeProps.getActionSender(e).send(a.a.outlookEmailPreview,t)}})}}var he=n("Am8i");class fe extends u.a{constructor(){super(...arguments),this.isUserSignedIn=!1,this.maxEmailCount=3,this.renderHoverComponent=!1,this.enableHandler=()=>{Object(v.a)().setItem("outlookenabled","true"),this.lastUpdatedDate=Date.now().toString(),this.renderState=g.Enabled,this.smartListRegistration.initGetMessageData()},this.flyoutCloseCallback=()=>{this.renderHoverComponent=!1},this.noThanksHandler=()=>{b.a.disableSmartList.getActionSender(this.smartListConnector).send(a.a.outlookEmailPreview),this.renderHoverComponent=!1}}getExperienceType(){return a.a.outlookEmailPreview}experienceConnected(){this.maxEmailCount=this.config.maxMessageDisplayedCount?this.config.maxMessageDisplayedCount:3;const e=oe(this.config.authProviderType);this.smartListConnector=ie.a.getInstance().rootReducer.connector(p.a.SmartListSharedData),this.smartListRegistration=new ue(this,this.maxEmailCount,e),ae().then(e=>{e&&(this.isUserSignedIn=!0)}),b.a.registerSmartList.getActionSender(this.smartListConnector).send(this.smartListRegistration)}get emailMessages(){return this.messages.value.map((e,t)=>({flag:e.flag.flagStatus,from:e.from.emailAddress.name,hasAttachments:e.hasAttachments,importance:e.importance,isEvent:this.isEventMessageProps(e),isRead:e.isRead,receivedDateTime:new Date(e.receivedDateTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),subject:e.subject,telemetryTag:this.telemetryObject&&this.telemetryObject.addOrUpdateChild({name:"Email Click",content:{headline:"Email Click"},behavior:he.c.Navigate}).getMetadataTag(),webLink:this.webLinkCleanup(e.webLink)}))}get lastUpdatedMessage(){const e=this.config.localizedStrings.lastUpdatedText,t=this.config.localizedStrings.justNowText,n=this.config.localizedStrings.yesterdayAtText,r=new Date(this.lastUpdatedDate),i=new Date;let o="";return i.getMonth()===r.getMonth()&&i.getDay()===r.getDay()&&i.getFullYear()===r.getFullYear()?o+=e+" "+t:i.getMonth()===r.getMonth()&&i.getDay()-1===r.getDay()&&i.getFullYear()===r.getFullYear()?o+=e+" "+n+" "+r.toLocaleTimeString():o+=e+" "+r.toLocaleDateString(),o}isEventMessageProps(e){return!Object(de.isNullOrUndefined)(e.meetingMessageType)}webLinkCleanup(e){return e.replace(/&exvsurl=1/,"")}}Object(d.e)([h.d],fe.prototype,"actionButtons",void 0),Object(d.e)([h.d],fe.prototype,"focusTop",void 0),Object(d.e)([Object(f.b)({mode:"boolean"})],fe.prototype,"isUserSignedIn",void 0),Object(d.e)([h.d],fe.prototype,"lastUpdatedDate",void 0),Object(d.e)([f.b],fe.prototype,"maxEmailsDisplayed",void 0),Object(d.e)([h.d],fe.prototype,"messages",void 0),Object(d.e)([h.d],fe.prototype,"profileImageSrc",void 0),Object(d.e)([Object(f.b)({mode:"boolean"})],fe.prototype,"renderHoverComponent",void 0),Object(d.e)([h.d],fe.prototype,"renderState",void 0),Object(d.e)([h.d],fe.prototype,"requestOpen",void 0),Object(d.e)([h.d],fe.prototype,"targetRect",void 0),Object(d.e)([f.b],fe.prototype,"unreadCount",void 0),Object(d.e)([f.b],fe.prototype,"updatedStatus",void 0),Object(d.e)([h.d],fe.prototype,"wrapperComponent",void 0),Object(d.e)([h.f],fe.prototype,"emailMessages",null),Object(d.e)([h.f],fe.prototype,"lastUpdatedMessage",null);var pe,ge,me,ye=n("6BDD"),ve=n("6vBc"),be=n("P4Ao");!function(e){e.NotFlagged="notFlagged",e.Flagged="flagged",e.Complete="complete"}(pe||(pe={})),function(e){e.Low="low",e.Normal="normal",e.High="high"}(ge||(ge={})),function(e){e.Enabled="enabled",e.Error="error",e.FRE="fre",e.Loading="loading",e.Normal="normal",e.NotStarted="not-started"}(me||(me={}));class we extends be.a{connectedCallback(){super.connectedCallback(),this.lastFocusElement=document.activeElement}disconnectedCallback(){super.disconnectedCallback()}focusTopChanged(e,t){Object(de.isNullOrUndefined)(e)||e!==t&&this.focusElement(e)}handleKeyDown(e){switch(e.code){case"ArrowUp":this.focusPreviousItem(),e.preventDefault();break;case"ArrowDown":this.focusNextItem(),e.preventDefault();break;case"Tab":e.shiftKey?this.focusPreviousItem():this.focusNextItem(),e.preventDefault()}}focusElement(e){this.lastFocusElement=document.activeElement;const t=Object(de.isNullOrUndefined)(this.emailButtonRef_first)?this.actionButtonRef_first:this.emailButtonRef_first;(e?t:this.actionButtonRef_second).focus()}focusNextItem(){const e=document.activeElement.nextSibling;let t=e;for(;t&&0!==t.tabIndex;)t=t.nextSibling;Object(de.isNullOrUndefined)(t)&&(Object(de.isNullOrUndefined)(e)?this.lastFocusElement.focus():(this.shadowRoot.querySelector("actionButton").focus(),this.actionButtonRef_first.focus())),t&&t.focus()}focusPreviousItem(){const e=document.activeElement,t=e.previousSibling;let n=t;for(;n&&0!==n.tabIndex;)n=n.previousSibling;if(Object(de.isNullOrUndefined)(n)){const n=this.actionButtonRef_first;if(Object(de.isNullOrUndefined)(t)&&e===n)if(Object(de.isNullOrUndefined)(this.emailButtonRef_first))this.lastFocusElement.focus();else{let e=this.emailButtonRef_first.nextSibling,t=e;for(;e;){if(e=e.nextSibling,Object(de.isNullOrUndefined)(e)){t.focus();break}0===e.tabIndex&&(t=e)}}else this.lastFocusElement.focus()}n&&n.focus()}generateEmailButtonAriaLabel(e,t){let n="";return t.isRead||(n+=e.unread+" "),t.isEvent&&(n+=e.event+" "),t.importance===ge.High?n+=e.importanceHigh+" ":t.importance===ge.Low&&(n+=e.importanceLow+" "),t.hasAttachments&&(n+=e.withAttachments+" "),n+=t.from+" ",n+=t.subject+" ",n+=t.receivedDateTime+" ",t.flag===pe.Flagged?n+=e.flagStatus_flagged:t.flag===pe.Complete?n+=e.flagStatus_complete:n+=e.flagStatus_notFlagged,n}}Object(d.e)([Object(f.b)({mode:"boolean"})],we.prototype,"focusTop",void 0),Object(d.e)([h.d],we.prototype,"actionButtons",void 0),Object(d.e)([h.d],we.prototype,"heading",void 0),Object(d.e)([h.d],we.prototype,"inbox",void 0),Object(d.e)([h.d],we.prototype,"inboxStatusMessage",void 0),Object(d.e)([h.d],we.prototype,"maxEmailsDisplayed",void 0),Object(d.e)([h.d],we.prototype,"profileImageSrc",void 0),Object(d.e)([h.d],we.prototype,"renderState",void 0),Object(d.e)([h.d],we.prototype,"unreadMessageCount",void 0),Object(d.e)([h.d],we.prototype,"updatedStatus",void 0),Object(d.e)([h.d],we.prototype,"wrapperComponent",void 0);var Ee=n("0fst"),Oe=n("4X57"),xe=n("kL0l"),Te=n("TgmJ"),Re=n("CzTk");const Ce=Oe.a`
    .dateLine {
        padding-right: 12px;
    }
    .freAccentButton {
        margin-right: 8px;
    }
    .status {
        padding-right: 4px;
    }
    .statusIcon {
        padding-right: 2px;
    }
    .title_noProfile {
        padding-left: 16px;
    }
    .unreadEmailCount {
        padding-right: 16px;
    }
`,Se=Oe.a`
    .dateLine {
        padding-left: 12px;
    }
    .freAccentButton {
        margin-left: 8px;
    }
    .freSVG {
        transform: rotateY(180deg);
    }
    .status {
        padding-left: 4px;
    }
    .statusIcon {
        padding-left: 2px;
    }
    .title_noProfile {
        padding-right: 16px;
    }
    .unreadEmailCount {
        padding-left: 16px;
    }
`,Ae=Oe.a`
    .actionButton {
        background-color: ${xe.J.var};
        height: 32px;
        width: 100%;
    }
    .actionButton:hover {
        background-color: ${xe.o.var};
    }
    .actionButton::part(content) {
        width: 100%;
    }
    .actionButton::part(control) {
        padding: 0;
    }
    .actionButton::part(start) {
        margin: 0;
    }
    .actionButtonContainer {
        padding: 6px 2px;
    }
    .actionButtonIcon {
        padding: 0 12px 0 16px;
    }
    .actionButtonMessage {
        text-align: start;
    }
    .control {
        width: 100%;
        padding: 0;
    }
    .dateLine {
        align-self: center;
        color: ${xe.D.var};
        font-size: 12px;
        grid-row: 3;
        justify-self: end;
    }
    .divider {
        border-color: ${xe.P.var};
        margin: 0;
    }
    .emailButton {
        background-color: ${xe.J.var};
        height: ${"70px"};
        margin: 0;
        padding: 0;
        width: 100%;
    }
    .emailButton:hover {
        background-color: ${xe.o.var};
    }
    .emailButton::part(content) {
        width: 100%;
    }
    .emailButton::part(control) {
        padding: 0;
    }
    .emailButtonAfterContent {
        display: grid;
        grid-column: 3;
        grid-row: 2 / span 2;
        grid-template-rows: 15% 35% 35% 15%;
        height: 70px;
        width: 100%;
    }
    .emailButtonContent {
        align-items: center;
        display: grid;
        grid-row: 2 / span 2;
        grid-template-columns: 10% 65% 25%;
        grid-template-rows: 15% 35% 35% 15%;
        width: 100%;
    }
    .emailIcon {
        color: ${xe.h.var};
        grid-column: 1;
        grid-row: 2;
        justify-self: center;
    }
    .emailIcon_unread {
        opacity: 0;
    }
    .emailPreview {
        z-index: ${Ee.a.Flyout.toFixed()};
    }
    .emailPreviewContent {
        background-color: ${xe.J.var};
    }
    .freButton {
        width: 135px;
    }
    .freButtonContainer {
        text-align: center;
    }
    .freContainer {
        padding: 16px;
    }
    .freSVG_line {
        fill: ${xe.G.var};
    }
    .freText {
        font-size: 14px;
        padding-bottom: 14px;
        user-select: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .fromLine {
        grid-row: 2;
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        width: inherit;
    }
    .fromLine_unread {
        font-weight: bold;
    }
    .inbox {
        background-color: ${xe.I.var};
        min-height: 210px;
        width: 100%;
    }
    .inboxStatus {
        color: ${xe.D.var};
        display: table-cell;
        font-size: 12px;
        text-align: center;
        user-select: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .loading {
        display: table-cell;
        text-align: center;
        user-select: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .otherLine_unread {
        color: ${xe.h.var} !important;
        font-weight: bold;
    }
    .profile {
        align-self: center;
        border-radius: 50%;
        grid-column: 1;
        height: 24px;
        justify-self: center;
        width: 24px;
    }
    .status {
        align-self: center;
        grid-row: 2;
        justify-self: end;
    }
    .subjectLine {
        color: ${xe.D.var};
        grid-column: 2;
        grid-row: 3;
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        width: inherit;
    }
    .title {
        align-self: center;
        cursor: default;
        font-weight: bold;
        grid-column: 2;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .title_noProfile {
        grid-column: 1;
        margin: unset;
    }
    .topBar {
        background-color: ${xe.J.var};
        display: grid;
        grid-template-columns: 64px 60% 20%;
        height: 46px;
    }
    .topBar_noProfile {
        grid-template-columns: 80% 20%;
    }
    .unreadEmailCount {
        align-self: center;
        color: ${xe.h.var};
        cursor: default;
        font-weight: bold;
        grid-column: 3;
        justify-self: end;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .unreadEmailCount_noProfile {
        grid-column: 2;
    }
    .updatedStatus {
        color: ${xe.D.var};
        font-size: 12px;
        text-align: center;
        user-select: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .updatedStatusSection {
        align-items: center;
        background-color: ${xe.I.var};
        display: flex;
        height: 32px;
        justify-content: center;
        width: 100%;
    }
`.withBehaviors(new Re.a(Ce,Se),xe.o,xe.P,xe.h,xe.D,xe.G,xe.I,xe.J);Te.a;var _e=n("S35a"),De=n("m1Vi"),Be=n("nSud"),Pe=n("VcPv"),Me=n("+53S"),Le=n("UNqU"),Ue=n("cc39"),$e=n("eUhr");_e.a,De.b,Be.a,Pe.a,Ue.a;const Ie=ye.b`
    <div class="freContainer">
        <div class="freText">${e=>e.actionButtons.text}</div>
        <div class="freButtonContainer">
            <fluent-button
                appearance="accent"
                class="freButton freAccentButton"
                ?disabled=${e=>!Object(de.isNullOrUndefined)(e.actionButtons.notSignedInMessage)}
                title=${e=>e.actionButtons.notSignedInMessage}
                ${Object(Me.b)("actionButtonRef_first")}
                ${Object($e.b)(e=>e.actionButtons.accentButtonTelemetryTag)}
                @click="${e=>e.actionButtons.accentButtonOnClick()}"
            >
                ${e=>e.actionButtons.accentButtonText}
            </fluent-button>
            <fluent-button
                appearance="outline"
                class="freButton"
                ${Object(Me.b)("actionButtonRef_second")}
                ${Object($e.b)(e=>e.actionButtons.outlineButtonTelemetryTag)}
                @click="${e=>e.actionButtons.outlineButtonOnClick()}"
            >
                ${e=>e.actionButtons.outlineButtonText}
            </fluent-button>
        </div>
    </div>
`,je=ye.b`
    <div class="actionButtonContainer">
        <fluent-anchor
            appearance="stealth"
            class="actionButton"
            ?disabled=${e=>e.renderState===me.Error}
            href=${e=>e.actionButtons.newEmailButtonHref}
            ${Object(Me.b)("actionButtonRef_first")}
            ${Object($e.b)(e=>e.actionButtons.newEmailButtonTelemetryTag)}
        >
            <svg class="actionButtonIcon" slot="start">
                <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                >
                    <path
                        d="M16 3V13H0V3H16ZM1.11719 4L8 7.44531L14.8828 4H1.11719ZM15 12V5.0625L8 8.55469L1 5.0625V12H15Z"
                    />
                </mask>
                <g mask="url(#mask0)">
                    <rect x="-2" y="-2" width="20" height="20"/>
                </g>
            </svg>
            <div class="actionButtonMessage">
                ${e=>e.actionButtons.newEmailButtonText}
            </div>
        </fluent-anchor>
        <fluent-anchor
            appearance="stealth"
            class="actionButton"
            ?disabled=${e=>e.renderState===me.Error}
            href=${e=>e.actionButtons.newEventButtonHref}
            ${Object(Me.b)("actionButtonRef_second")}
            ${Object($e.b)(e=>e.actionButtons.newEventButtonTelemetryTag)}
        >
            <svg class="actionButtonIcon" slot="start">
                <path
                    d="M13 1H16V15H0V1H3V0H4V1H12V0H13V1ZM3 2H1V4H15V2H13V3H12V2H4V3H3V2ZM1 14H15V5H1V14ZM8.5 6V9H11.5V10H8.5V13H7.5V10H4.5V9H7.5V6H8.5Z"/>
            </svg>
            <div class="actionButtonMessage">
                ${e=>e.actionButtons.newEventButtonText}
            </div>
        </fluent-anchor>
    </div>
`,ke=ye.b`
    ${e=>e.renderState===me.FRE?Ie:je}
`,Ne=ye.b`
    <svg
        class="freSVG"
        fill="none"
        height="214"
        viewBox="0 0 320 214"
        width="320"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect class="freSVG_line" y="213" width="320" height="1" style="fill-opacity: 0.09;"/>
        <rect class="freSVG_line" y="142" width="320" height="1" style="fill-opacity: 0.09;"/>
        <rect class="freSVG_line" y="71" width="320" height="1" style="fill-opacity: 0.09;"/>
        <rect class="freSVG_line" width="320" height="1" style="fill-opacity: 0.09;"/>
        <rect y="1" width="320" height="70"/>
        <rect class="freSVG_line" opacity="0.48" x="29" y="20" width="200" height="8" rx="4" style="fill-opacity: 0.55;"/>
        <rect class="freSVG_line" opacity="0.24" x="29" y="44" width="100" height="8" rx="4" style="fill-opacity: 0.55;"/>
        <path style="fill: var(--accent-foreground-rest);" d="M11 24C11 22.3431 12.3431 21 14 21C15.6569 21 17 22.3431 17 24C17 25.6569 15.6569 27 14 27C12.3431 27 11 25.6569 11 24Z"/>
        <rect y="72" width="320" height="70"/>
        <rect class="freSVG_line" opacity="0.48" x="29" y="91" width="200" height="8" rx="4" style="fill-opacity: 0.46;"/>
        <rect class="freSVG_line" opacity="0.24" x="29" y="115" width="100" height="8" rx="4" style="fill-opacity: 0.23;"/>
        <path style="fill: var(--accent-foreground-rest);" d="M11 95C11 93.3431 12.3431 92 14 92C15.6569 92 17 93.3431 17 95C17 96.6569 15.6569 98 14 98C12.3431 98 11 96.6569 11 95Z" style="fill-opacity: 0.46;"/>
        <rect y="143" width="320" height="70"/>
        <rect class="freSVG_line" opacity="0.48" x="29" y="162" width="200" height="8" rx="4" style="fill-opacity: 0.26;"/>
        <rect class="freSVG_line" opacity="0.24" x="29" y="186" width="100" height="8" rx="4" style="fill-opacity: 0.13;"/>
        <path style="fill: var(--accent-foreground-rest);" d="M11 166C11 164.343 12.3431 163 14 163C15.6569 163 17 164.343 17 166C17 167.657 15.6569 169 14 169C12.3431 169 11 167.657 11 166Z" style="fill-opacity: 0.26;"/>
    </svg>
`,He=ye.b`
    <svg
        class="statusIcon"
        height="10"
        viewBox="0 0 5 10"
        width="5"
    >
        <path d="M4.5 1.875V7.8125C4.5 8.11523 4.44141 8.40007 4.32422 8.66699C4.21029 8.93066 4.05404 9.16178 3.85547 9.36035C3.66016 9.55566 3.42904 9.71191 3.16211 9.8291C2.89844 9.94303 2.61523 10 2.3125 10C2.00977 10 1.72493 9.94303 1.45801 9.8291C1.19434 9.71191 0.963216 9.55566 0.764648 9.36035C0.569336 9.16178 0.413086 8.93066 0.295898 8.66699C0.181966 8.40007 0.125 8.11523 0.125 7.8125V1.5625C0.125 1.34766 0.16569 1.14583 0.24707 0.957031C0.331706 0.768229 0.44401 0.603841 0.583984 0.463867C0.727214 0.320638 0.893229 0.208333 1.08203 0.126953C1.27083 0.0423177 1.47266 0 1.6875 0C1.90234 0 2.10417 0.0423177 2.29297 0.126953C2.48177 0.208333 2.64616 0.320638 2.78613 0.463867C2.92936 0.603841 3.04167 0.768229 3.12305 0.957031C3.20768 1.14583 3.25 1.34766 3.25 1.5625V7.8125C3.25 7.94271 3.22559 8.06478 3.17676 8.17871C3.12793 8.29264 3.0612 8.39193 2.97656 8.47656C2.89193 8.5612 2.79264 8.62793 2.67871 8.67676C2.56478 8.72559 2.44271 8.75 2.3125 8.75C2.18229 8.75 2.06022 8.72559 1.94629 8.67676C1.83236 8.62793 1.73307 8.5612 1.64844 8.47656C1.5638 8.39193 1.49707 8.29264 1.44824 8.17871C1.39941 8.06478 1.375 7.94271 1.375 7.8125V2.5H2V7.8125C2 7.89714 2.03092 7.97038 2.09277 8.03223C2.15462 8.09408 2.22786 8.125 2.3125 8.125C2.39714 8.125 2.47038 8.09408 2.53223 8.03223C2.59408 7.97038 2.625 7.89714 2.625 7.8125V1.5625C2.625 1.43229 2.60059 1.31022 2.55176 1.19629C2.50293 1.08236 2.4362 0.983073 2.35156 0.898438C2.26693 0.813802 2.16764 0.74707 2.05371 0.698242C1.93978 0.649414 1.81771 0.625 1.6875 0.625C1.55729 0.625 1.43522 0.649414 1.32129 0.698242C1.20736 0.74707 1.10807 0.813802 1.02344 0.898438C0.938802 0.983073 0.87207 1.08236 0.823242 1.19629C0.774414 1.31022 0.75 1.43229 0.75 1.5625V7.8125C0.75 8.02734 0.79069 8.22917 0.87207 8.41797C0.956706 8.60677 1.06901 8.77279 1.20898 8.91602C1.35221 9.05599 1.51823 9.16829 1.70703 9.25293C1.89583 9.33431 2.09766 9.375 2.3125 9.375C2.52734 9.375 2.72917 9.33431 2.91797 9.25293C3.10677 9.16829 3.27116 9.05599 3.41113 8.91602C3.55436 8.77279 3.66667 8.60677 3.74805 8.41797C3.83268 8.22917 3.875 8.02734 3.875 7.8125V1.875H4.5Z"/>
    </svg>
`,Fe=ye.b`
    <svg
        class="statusIcon"
        height="10"
        viewBox="0 0 9 10"
        width="9"
    >
        <path d="M8.375 1.25V6.25H4V5H0.875V10H0.25V0H4.625V1.25H8.375ZM4 4.375V0.625H0.875V4.375H4ZM7.75 1.875H4.625V5.625H7.75V1.875Z"/>
    </svg>
`,qe=ye.b`
    <svg
        class="statusIcon"
        height="6"
        viewBox="0 0 8 6"
        width="8"
    >
        <path d="M7.96973 0.719727L2.75 5.94434L0.0302734 3.21973L0.469727 2.78027L2.75 5.05566L7.53027 0.280273L7.96973 0.719727Z"/>
    </svg>
`,Ve=ye.b`
    <svg
        class="statusIcon"
        height="10"
        viewBox="0 0 2 10"
        width="2"
    >
        <path d="M1.625 6.875H0.375V0.625H1.625V6.875ZM1.625 9.375H0.375V8.125H1.625V9.375Z"/>
    </svg>
`,Ye=ye.b`
    <svg
        class="statusIcon"
        height="10"
        viewBox="0 0 10 10"
        width="10"
    >
        <path d="M9.59473 5.37598L5 9.9707L0.405273 5.37598L0.844727 4.93652L4.6875 8.7793V0H5.3125V8.7793L9.15527 4.93652L9.59473 5.37598Z"/>
    </svg>
`,ze=ye.b`
    <svg
        class="statusIcon"
        height="10"
        viewBox="0 0 10 10"
        width="10"
    >
        <path d="M8.125 0.625H10V9.375H0V0.625H1.875V0H2.5V0.625H7.5V0H8.125V0.625ZM1.875 1.25H0.625V2.5H9.375V1.25H8.125V1.875H7.5V1.25H2.5V1.875H1.875V1.25ZM0.625 8.75H9.375V3.125H0.625V8.75Z"/>
    </svg>
`,Xe=ye.b`
    <div
        class="inbox"
        role="list"
        style="overflow-y: ${e=>e.inbox.messages.length>e.maxEmailsDisplayed?"scroll":"unset"}"
    >
        <fluent-divider class="divider"></fluent-divider>
        ${Object(Le.c)(e=>e.inbox.messages,ye.b`
            <fluent-anchor
                aria-label=${(e,t)=>t.parent.generateEmailButtonAriaLabel&&t.parent.generateEmailButtonAriaLabel(t.parent.inbox.accessibility,e)}
                appearance="stealth"
                class="emailButton"
                href=${e=>e.webLink}
                role="listitem"
                ${(e,t)=>0===t.index?Object(Me.b)("emailButtonRef_first"):null}
                ${Object($e.b)(e=>e.telemetryTag)}
            >
                <div class="emailButtonContent">
                    <svg
                        class="emailIcon  ${e=>e.isRead?"emailIcon_unread":""}"
                        height="6"
                        viewBox="0 0 6 6"
                        width="6"
                    >
                        <path d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"/>
                    </svg>
                    <div class="fromLine ${e=>e.isRead?"":"fromLine_unread"}">
                        ${e=>e.from}
                    </div>
                    <div
                        class="subjectLine ${e=>e.isRead?"":"otherLine_unread"}"
                    >
                        ${e=>e.subject}
                    </div>
                    <div class="emailButtonAfterContent">
                        <div class="status">
                            ${Object(ve.a)(e=>e.hasAttachments,He)}
                            ${Object(ve.a)(e=>e.flag===pe.Flagged,Fe)}
                            ${Object(ve.a)(e=>e.flag===pe.Complete,qe)}
                            ${Object(ve.a)(e=>e.importance===ge.High,Ve)}
                            ${Object(ve.a)(e=>e.importance===ge.Low,Ye)}
                            ${Object(ve.a)(e=>e.isEvent,ze)}
                        </div>
                        <div
                            class="dateLine ${e=>e.isRead?"":"otherLine_unread"}"
                        >
                                ${e=>e.receivedDateTime}
                        </div>
                    </div>
                </div>
            </fluent-anchor>
            <fluent-divider class="divider"></fluent-divider>
        `)}
    </div>
`,We=ye.b`
    <div
        class="inbox"
        style="display: table;"
    >
        <fluent-progress-ring class="loading"></fluent-progress-ring>
    </div>
`,Ge=ye.b`
    <div
        class="inbox"
        style="display: table;"
    >
        <div class="inboxStatus">
            ${e=>e.inboxStatusMessage}
        </div>
    </div>
`,Qe=ye.b`
    ${e=>e.renderState===me.FRE?Ne:e.renderState===me.Normal?Xe:e.renderState===me.Error?Ge:We}
`,Ze=ye.b`
    <div
        class="topBar ${e=>Object(de.isNullOrUndefined)(e.profileImageSrc)?"topBar_noProfile":""}"
    >
        ${Object(ve.a)(e=>e.profileImageSrc,ye.b`
            <image
                class="profile"
                src=${e=>e.profileImageSrc}
            />
        `)}
        <div class="title ${e=>Object(de.isNullOrUndefined)(e.profileImageSrc)?"title_noProfile":""}">
            ${e=>e.heading}
        </div>
        ${Object(ve.a)(e=>e.unreadMessageCount,ye.b`
            <div class="unreadEmailCount ${e=>Object(de.isNullOrUndefined)(e.profileImageSrc)?"unreadEmailCount_noProfile":""}">
                ${e=>e.unreadMessageCount}
            </div>
        `)}
    </div>
`,Ke=ye.b`
    <div class="updatedStatusSection">
        <div class="updatedStatus">
            ${e=>e.updatedStatus}
        </div>
    </div>
`,Je=ye.b`
    <hover-flyout
        class="emailPreview"
        :flyoutWidth=${e=>e.wrapperComponent.flyoutWidth}
        :onClosed=${e=>e.wrapperComponent.onClosed}
        :requestOpen=${e=>e.wrapperComponent.requestOpen}
        :targetRect=${e=>e.wrapperComponent.targetRect}
    >
        <div
            class="emailPreviewContent"
            @keydown=${(e,t)=>e.handleKeyDown&&e.handleKeyDown(t.event)}
        >
            ${Ze}
            ${Qe}
            ${ke}
            ${Object(ve.a)(e=>e.renderState!==me.FRE,Ke)}
        </div>
    </hover-flyout>
`,et=ye.b`
    ${Object(ve.a)(e=>e.wrapperComponent,Je)}
`;let tt=class extends we{};tt=Object(d.e)([Object(be.b)({name:"email-preview",template:et,styles:Ae})],tt);const nt=ye.b`
    <email-preview
        :actionButtons="${e=>({accentButtonText:e.config.localizedStrings.enableButtonText,accentButtonOnClick:e.enableHandler,accentButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"Turn On Preview",content:{headline:"Turn On Preview"},behavior:he.c.TurnOn}).getMetadataTag(),notSignedInMessage:e.isUserSignedIn?null:e.config.localizedStrings.freMessage,text:e.config.localizedStrings.freMessage,outlineButtonText:e.config.localizedStrings.noThanksButtonText,outlineButtonOnClick:e.noThanksHandler,outlineButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"Turn Off Preview",content:{headline:"Turn Off Preview"},behavior:he.c.TurnOff}).getMetadataTag()})}"
        focusTop="${e=>e.focusTop}"
        :heading="${e=>e.config.localizedStrings.title}"
        :inbox="${e=>{}}"
        :maxEmailsDisplayed="${e=>e.config.maxMessageDisplayedCount||3}"
        :renderHoverComponent="${e=>e.renderHoverComponent}"
        :renderState="${e=>e.renderState}"
        :updatedStatus="${e=>""}"
        :wrapperComponent="${e=>({flyoutWidth:e.config.width||320,onClosed:e.flyoutCloseCallback,requestOpen:e.requestOpen,targetRect:e.targetRect})}"
    ></email-preview>
`,rt=ye.b`
    <email-preview
        :actionButtons="${e=>({newEmailButtonText:e.config.localizedStrings.newEmailButtonText,newEmailButtonHref:"#",newEventButtonText:e.config.localizedStrings.newEventButtonText,newEventButtonHref:"#"})}"
        focusTop="${e=>e.focusTop}"
        :heading="${e=>e.config.localizedStrings.title}"
        :inbox="${e=>{}}"
        :inboxStatusMessage="${e=>e.config.localizedStrings.errorMessage}"
        :maxEmailsDisplayed="${e=>e.config.maxMessageDisplayedCount||3}"
        :profileImageSrc="${e=>e.profileImageSrc||null}"
        :renderState="${e=>e.renderState}"
        :unreadMessageCount="${e=>null}"
        :updatedStatus="${e=>""}"
        :wrapperComponent="${e=>({flyoutWidth:e.config.width||320,onClosed:e.flyoutCloseCallback,requestOpen:e.requestOpen,targetRect:e.targetRect})}"
    ></email-preview>
`,it=ye.b`
    <email-preview
        :actionButtons="${e=>({newEmailButtonText:e.config.localizedStrings.newEmailButtonText,newEmailButtonHref:e.config.newEmailButtonUrl,newEmailButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"New Email",content:{headline:"New Email"},behavior:he.c.Navigate}).getMetadataTag(),newEventButtonText:e.config.localizedStrings.newEventButtonText,newEventButtonHref:e.config.newEventButtonUrl,newEventButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"New Event",content:{headline:"New Event"},behavior:he.c.Navigate}).getMetadataTag()})}"
        focusTop="${e=>e.focusTop}"
        :heading="${e=>e.config.localizedStrings.title}"
        :inbox="${e=>{}}"
        :maxEmailsDisplayed="${e=>e.config.maxMessageDisplayedCount||3}"
        :profileImageSrc="${e=>e.profileImageSrc||null}"
        :renderState="${e=>e.renderState}"
        :unreadMessageCount="${e=>null}"
        :updatedStatus="${e=>""}"
        :wrapperComponent="${e=>({flyoutWidth:e.config.width||320,onClosed:e.flyoutCloseCallback,requestOpen:e.requestOpen,targetRect:e.targetRect})}"
    ></email-preview>
`,ot=ye.b`
    <email-preview
        :actionButtons="${e=>({newEmailButtonText:e.config.localizedStrings.newEmailButtonText,newEmailButtonHref:e.config.newEmailButtonUrl,newEmailButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"New Email",content:{headline:"New Email"},behavior:he.c.Navigate}).getMetadataTag(),newEventButtonText:e.config.localizedStrings.newEventButtonText,newEventButtonHref:e.config.newEventButtonUrl,newEventButtonTelemetryTag:e.telemetryObject&&e.telemetryObject.addOrUpdateChild({name:"New Event",content:{headline:"New Event"},behavior:he.c.Navigate}).getMetadataTag()})}"
        focusTop="${e=>e.focusTop}"
        :heading="${e=>e.config.localizedStrings.title}"
        :inbox="${e=>({accessibility:{event:e.config.localizedStrings.accessibility.event,flagStatus_complete:e.config.localizedStrings.accessibility.flagStatus_complete,flagStatus_flagged:e.config.localizedStrings.accessibility.flagStatus_flagged,flagStatus_notFlagged:e.config.localizedStrings.accessibility.flagStatus_notFlagged,importanceLow:e.config.localizedStrings.accessibility.importanceLow,importanceHigh:e.config.localizedStrings.accessibility.importanceHigh,unread:e.config.localizedStrings.accessibility.unread,withAttachments:e.config.localizedStrings.accessibility.withAttachments},messages:e.emailMessages})}"
        :maxEmailsDisplayed="${e=>e.config.maxMessageDisplayedCount||3}"
        :profileImageSrc="${e=>e.profileImageSrc||null}"
        :renderState="${e=>e.renderState}"
        :unreadMessageCount="${e=>e.unreadCount}"
        :updatedStatus="${e=>e.lastUpdatedMessage}"
        :wrapperComponent="${e=>({flyoutWidth:e.config.width||320,onClosed:e.flyoutCloseCallback,requestOpen:e.requestOpen,targetRect:e.targetRect})}"
    ></email-preview>
`,st=ye.b`
    ${e=>{switch(e.renderState){case g.FRE:return nt;case g.Error:return rt;case g.Loading:return it;case g.Normal:return ot;default:return rt}}}
`,at=ye.b`
    ${Object(ve.a)(e=>e.targetRect&&e.renderState&&e.renderHoverComponent,st)}
`,lt={experienceConfigSchema:l}},VcPv:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("D57K"),i=n("P4Ao"),o=n("tezw"),s=n("6BDD"),a=n("6vBc");const l=s.b`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Object(a.a)(e=>"number"==typeof e.value,s.b`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.value/100}px 44px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Object(a.a)(e=>"number"!=typeof e.value,s.b`
                <slot name="indeterminate" slot="indeterminate">
                    <svg class="progress" part="progress" viewBox="0 0 16 16">
                        <circle
                            class="background"
                            part="background"
                            cx="8px"
                            cy="8px"
                            r="7px"
                        ></circle>
                        <circle
                            class="indeterminate-indicator-1"
                            part="indeterminate-indicator-1"
                            cx="8px"
                            cy="8px"
                            r="7px"
                        ></circle>
                    </svg>
                </slot>
            `)}
    </template>
`;var c=n("4X57"),d=n("j9Xn"),u=n("xY0q"),h=n("oqLQ"),f=n("QkLF"),p=n("kL0l");const g=c.a`
  ${Object(u.a)("flex")} :host {
    align-items: center;
    outline: none;
    height: calc(${f.a} * 1px);
    width: calc(${f.a} * 1px);
    margin: calc(${f.a} * 1px) 0;
  }

  .progress {
    height: 100%;
    width: 100%;
  }

  .background {
    stroke: ${p.s.var};
    fill: none;
    stroke-width: 2px;
  }

  .determinate {
    stroke: ${p.h.var};
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
  }

  .indeterminate-indicator-1 {
    stroke: ${p.h.var};
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
    animation: spin-infinite 2s linear infinite;
  }

  :host(.paused) .indeterminate-indicator-1 {
    animation-play-state: paused;
    stroke: ${p.s.var};
  }

  :host(.paused) .determinate {
    stroke: ${p.D.var};
  }

  @keyframes spin-infinite {
    0% {
      stroke-dasharray: 0.01px 43.97px;
      transform: rotate(0deg);
    }
    50% {
      stroke-dasharray: 21.99px 21.99px;
      transform: rotate(450deg);
    }
    100% {
      stroke-dasharray: 0.01px 43.97px;
      transform: rotate(1080deg);
    }
  }
`.withBehaviors(p.h,p.s,p.D,Object(h.c)(c.a`
      .indeterminate-indicator-1,
      .determinate {
        stroke: ${d.a.FieldText};
      }
      .background {
        stroke: ${d.a.Field};
      }
      :host(.paused) .indeterminate-indicator-1 {
        stroke: ${d.a.Field};
      }
      :host(.paused) .determinate {
        stroke: ${d.a.GrayText};
      }
    `));let m=class extends o.a{};m=Object(r.e)([Object(i.b)({name:"fluent-progress-ring",template:l,styles:g,shadowOptions:{mode:"closed"}})],m)},VcX0:function(e,t,n){"use strict";(function(e){var t=n("D57K"),r=n("cpZP");class i{constructor(e){if(this.requests=new Map,void 0!==e){const t=i.requestLimit;if(e.length>t){const e=new Error("Maximum requests limit exceeded, Max allowed number of requests are "+t);throw e.name="Limit Exceeded Error",e}for(const t of e)this.addRequest(t)}}static validateDependencies(e){if(0===e.size){const e=new Error("Empty requests map, Please provide at least one request.");throw e.name="Empty Requests Error",e}return(e=>{const t=e.entries();let n=t.next();for(;!n.done;){const e=n.value[1];if(void 0!==e.dependsOn&&e.dependsOn.length>0)return!1;n=t.next()}return!0})(e)||(e=>{const t=e.entries();let n=t.next();const r=n.value[1];if(void 0!==r.dependsOn&&r.dependsOn.length>0)return!1;let i=n;for(n=t.next();!n.done;){const e=n.value[1];if(void 0===e.dependsOn||1!==e.dependsOn.length||e.dependsOn[0]!==i.value[1].id)return!1;i=n,n=t.next()}return!0})(e)||(e=>{const t=e.entries();let n=t.next();const r=n.value[1];let i;if(void 0===r.dependsOn||0===r.dependsOn.length)i=r.id;else{if(1!==r.dependsOn.length)return!1;{const t=r.dependsOn[0];if(t===r.id||!e.has(t))return!1;i=t}}for(n=t.next();!n.done;){const e=n.value[1];if((void 0===e.dependsOn||0===e.dependsOn.length)&&i!==e.id)return!1;if(void 0!==e.dependsOn&&0!==e.dependsOn.length){if(1===e.dependsOn.length&&(e.id===i||e.dependsOn[0]!==i))return!1;if(e.dependsOn.length>1)return!1}n=t.next()}return!0})(e)}static getRequestData(e){return t.b(this,void 0,void 0,(function*(){const t={url:""},n=new RegExp("^https?://");t.url=n.test(e.url)?"/"+e.url.split(/.*?\/\/.*?\//)[1]:e.url,t.method=e.method;const o={};return e.headers.forEach((e,t)=>{o[t]=e}),Object.keys(o).length&&(t.headers=o),e.method!==r.a.PATCH&&e.method!==r.a.POST&&e.method!==r.a.PUT||(t.body=yield i.getRequestBody(e)),t}))}static getRequestBody(n){return t.b(this,void 0,void 0,(function*(){let t,r=!1;try{const e=n.clone();t=yield e.json(),r=!0}catch(e){}if(!r)try{if("undefined"!=typeof Blob){const e=yield n.blob(),r=new FileReader;t=yield new Promise(t=>{r.addEventListener("load",()=>{const e=r.result,n=new RegExp("^s*data:(.+?/.+?(;.+?=.+?)*)?(;base64)?,(.*)s*$").exec(e);t(n[4])},!1),r.readAsDataURL(e)})}else if(void 0!==e){t=(yield n.buffer()).toString("base64")}r=!0}catch(e){}return t}))}addRequest(e){const t=i.requestLimit;if(""===e.id){const e=new Error("Id for a request is empty, Please provide an unique id");throw e.name="Empty Id For Request",e}if(this.requests.size===t){const e=new Error("Maximum requests limit exceeded, Max allowed number of requests are "+t);throw e.name="Limit Exceeded Error",e}if(this.requests.has(e.id)){const t=new Error(`Adding request with duplicate id ${e.id}, Make the id of the requests unique`);throw t.name="Duplicate RequestId Error",t}return this.requests.set(e.id,e),e.id}removeRequest(e){const t=this.requests.delete(e),n=this.requests.entries();let r=n.next();for(;!r.done;){const t=r.value[1].dependsOn;if(void 0!==t){const n=t.indexOf(e);-1!==n&&t.splice(n,1),0===t.length&&delete r.value[1].dependsOn}r=n.next()}return t}getContent(){return t.b(this,void 0,void 0,(function*(){const e=[],t={requests:e},n=this.requests.entries();let r=n.next();if(r.done){const e=new Error("No requests added yet, Please add at least one request.");throw e.name="Empty Payload",e}if(!i.validateDependencies(this.requests)){const e=new Error("Invalid dependency found, Dependency should be:\n1. Parallel - no individual request states a dependency in the dependsOn property.\n2. Serial - all individual requests depend on the previous individual request.\n3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.");throw e.name="Invalid Dependency",e}for(;!r.done;){const t=r.value[1],o=yield i.getRequestData(t.request);if(void 0!==o.body&&(void 0===o.headers||void 0===o.headers["content-type"])){const e=new Error(`Content-type header is not mentioned for request #${t.id}, For request having body, Content-type header should be mentioned`);throw e.name="Invalid Content-type header",e}o.id=t.id,void 0!==t.dependsOn&&t.dependsOn.length>0&&(o.dependsOn=t.dependsOn),e.push(o),r=n.next()}return t.requests=e,t}))}addDependency(e,t){if(!this.requests.has(e)){const t=new Error(`Dependent ${e} does not exists, Please check the id`);throw t.name="Invalid Dependent",t}if(void 0!==t&&!this.requests.has(t)){const e=new Error(`Dependency ${t} does not exists, Please check the id`);throw e.name="Invalid Dependency",e}if(void 0!==t){const n=this.requests.get(e);if(void 0===n.dependsOn&&(n.dependsOn=[]),-1!==n.dependsOn.indexOf(t)){const n=new Error(`Dependency ${t} is already added for the request ${e}`);throw n.name="Duplicate Dependency",n}n.dependsOn.push(t)}else{const n=this.requests.entries();let r,i=n.next();for(;!i.done&&i.value[1].id!==e;)r=i,i=n.next();if(void 0===r){const e=new Error(`Can't add dependency ${t}, There is only a dependent request in the batch`);throw e.name="Invalid Dependency Addition",e}{const t=r.value[0];if(void 0===i.value[1].dependsOn&&(i.value[1].dependsOn=[]),-1!==i.value[1].dependsOn.indexOf(t)){const n=new Error(`Dependency ${t} is already added for the request ${e}`);throw n.name="Duplicate Dependency",n}i.value[1].dependsOn.push(t)}}}removeDependency(e,t){const n=this.requests.get(e);if(void 0===n||void 0===n.dependsOn||0===n.dependsOn.length)return!1;if(void 0!==t){const e=n.dependsOn.indexOf(t);return-1!==e&&(n.dependsOn.splice(e,1),!0)}return delete n.dependsOn,!0}}i.requestLimit=20}).call(this,n("GmLw").Buffer)},bYbp:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));const r=["$select","$expand","$orderby","$filter","$top","$skip","$skipToken","$count"],i=e=>{const t=e=>e.replace(/^\/+/,"");return Array.prototype.slice.call(e).reduce((e,n)=>{return[(r=e,r.replace(/\/+$/,"")),t(n)].join("/");var r})},o=t=>{const n=t.constructor.name;if("Buffer"===n||"Blob"===n||"File"===n||"FormData"===n||"string"==typeof t)return t;if("ArrayBuffer"===n)t=e.from(t);else if("Int8Array"===n||"Int16Array"===n||"Int32Array"===n||"Uint8Array"===n||"Uint16Array"===n||"Uint32Array"===n||"Uint8ClampedArray"===n||"Float32Array"===n||"Float64Array"===n||"DataView"===n)t=e.from(t.buffer);else try{t=JSON.stringify(t)}catch(e){throw new Error("Unable to stringify the content")}return t}}).call(this,n("GmLw").Buffer)},cc39:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("D57K"),i=n("P4Ao"),o=n("oePG"),s=n("6fq4"),a=n("Gy7L");class l extends i.a{constructor(){super(...arguments),this.isTransparent=!1,this.handleResize=()=>{this.onClosed(!0)},this.handleScroll=()=>{this.onClosed(!0)}}get styles(){if(!this.targetRect)return;const e=this.targetRect.top+this.targetRect.bottom<window.innerHeight;let t,n,r,i=Math.round((this.targetRect.left+this.targetRect.right-this.flyoutWidth)/2);i<16?i=16:i>innerWidth-16-this.flyoutWidth&&(i=innerWidth-16-this.flyoutWidth);const o=i+"px",s=this.flyoutWidth+"px";if(e){const e=this.targetRect.bottom+0;r=e+"px",n=window.innerHeight-e-16+"px"}else{t=window.innerHeight-this.targetRect.top+0+"px",n=this.targetRect.top-0-16+"px"}return`bottom: ${t}; left: ${o}; max-height: ${n};  top: ${r}; width: ${s};`}requestOpenChanged(e,t){t?(this.cancelCloseIfNeeded(),this.cancelStrayMouseTimerIfNeeded()):this.startStrayMouseTimerIfNeeded()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.isTransparent=!0}disconnectedCallback(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll),this.cancelStrayMouseTimerIfNeeded(),this.cancelCloseIfNeeded()}handleBlur(e){this.focusInFlyout=!1,this.startStrayMouseTimerIfNeeded()}handleFocus(e){s.a&&(this.focusInFlyout=!0,this.cancelCloseIfNeeded(),this.cancelStrayMouseTimerIfNeeded())}handleKeyDown(e){e.keyCode===a.m&&this.onClosed(!0)}handleMouseEnter(e){this.mouseOverFlyout=!0,this.cancelCloseIfNeeded(),this.cancelStrayMouseTimerIfNeeded()}handleMouseLeave(e){this.mouseOverFlyout=!1,this.startStrayMouseTimerIfNeeded()}cancelCloseIfNeeded(){this.closeAnimationTimerHandle&&clearTimeout(this.closeAnimationTimerHandle),this.isTransparent||(this.isTransparent=!0)}cancelStrayMouseTimerIfNeeded(){this.strayMouseTimerHandle&&clearTimeout(this.strayMouseTimerHandle)}startStrayMouseTimerIfNeeded(){this.strayMouseTimerHandle=setTimeout(()=>{this.mouseOverFlyout||this.focusInFlyout||(this.startClosing(),this.strayMouseTimerHandle=null)},200)}startClosing(){this.closeAnimationTimerHandle=setTimeout(()=>{this.onClosed(!1)},200),this.isTransparent=!1}}Object(r.e)([o.d],l.prototype,"flyoutWidth",void 0),Object(r.e)([o.d],l.prototype,"isTransparent",void 0),Object(r.e)([o.d],l.prototype,"onClosed",void 0),Object(r.e)([o.d],l.prototype,"requestOpen",void 0),Object(r.e)([o.d],l.prototype,"targetRect",void 0),Object(r.e)([o.f],l.prototype,"styles",null);var c=n("0fst"),d=n("4X57"),u=n("kL0l");const h=d.a`
    .hoverFlyout {
        box-shadow: 2px 5px 20px 0px rgba(0,0,0,0.22), 0px 13px 13px rgba(0,0,0,0.18);
        border-radius: 4px;
        opacity: 1;
        overflow: auto;
        position: fixed;
        transition: opacity .2s ease-in;
        opacity:1;
        z-index: ${c.a.Flyout.toString()}
    }
    .hoverFlyout.hide{
        opacity: 0;
    }
`.withBehaviors(u.J);const f=n("6BDD").b`
    <div
        @blur=${(e,t)=>e.handleBlur(t.event)}
        @focus=${(e,t)=>e.handleFocus(t.event)}
        @keydown=${(e,t)=>e.handleKeyDown(t.event)}
        @mouseenter=${(e,t)=>e.handleMouseEnter(t.event)}
        @mouseleave=${(e,t)=>e.handleMouseLeave(t.event)}
        class="${e=>e.isTransparent?"hoverFlyout":"hoverFlyout hide"}"
        part="contentWrapper"
        style="${e=>e.styles}"
    >
        <slot></slot>
    </div>
`;let p=class extends l{};p=Object(r.e)([Object(i.b)({name:"hover-flyout",template:f,styles:h})],p)},cpZP:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.GET="GET",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(r||(r={}))},dEMF:function(e,t,n){"use strict";t.byteLength=function(e){var t=c(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,r=c(e),s=r[0],a=r[1],l=new o(function(e,t,n){return 3*(t+n)/4-n}(0,s,a)),d=0,u=a>0?s-4:s;for(n=0;n<u;n+=4)t=i[e.charCodeAt(n)]<<18|i[e.charCodeAt(n+1)]<<12|i[e.charCodeAt(n+2)]<<6|i[e.charCodeAt(n+3)],l[d++]=t>>16&255,l[d++]=t>>8&255,l[d++]=255&t;2===a&&(t=i[e.charCodeAt(n)]<<2|i[e.charCodeAt(n+1)]>>4,l[d++]=255&t);1===a&&(t=i[e.charCodeAt(n)]<<10|i[e.charCodeAt(n+1)]<<4|i[e.charCodeAt(n+2)]>>2,l[d++]=t>>8&255,l[d++]=255&t);return l},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(d(e,s,s+16383>a?a:s+16383));1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return o.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=s.length;a<l;++a)r[a]=s[a],i[s.charCodeAt(a)]=a;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var i,o,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},ebFE:function(e,t,n){"use strict";(function(e){var t=n("D57K"),r=n("4X0Z"),i=n("3mcw");class o extends r.a{constructor(e,t,n,r){super(e,t,n,r)}static constructCreateSessionUrl(e,t=o.DEFAULT_UPLOAD_PATH){return e=e.trim(),""===(t=t.trim())&&(t="/"),"/"!==t[0]&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),encodeURI(`/me/drive/root:${t}${e}:/createUploadSession`)}static create(n,r,s){return t.b(this,void 0,void 0,(function*(){const t=s.fileName;let a,l;if("undefined"!=typeof Blob&&r instanceof Blob)a=new File([r],t),l=a.size;else if("undefined"!=typeof File&&r instanceof File)a=r,l=a.size;else if(void 0!==e&&r instanceof e){const e=r;l=e.byteLength-e.byteOffset,a=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}try{const e=o.constructCreateSessionUrl(s.fileName,s.path),r=yield o.createUploadSession(n,e,s.fileName),c=Object(i.a)(s.rangeSize);return new o(n,{name:t,content:a,size:l},r,{rangeSize:c})}catch(e){throw e}}))}static createUploadSession(e,n,r){const i=Object.create(null,{createUploadSession:{get:()=>super.createUploadSession}});return t.b(this,void 0,void 0,(function*(){const t={item:{"@microsoft.graph.conflictBehavior":"rename",name:r}};try{return i.createUploadSession.call(this,e,n,t)}catch(e){throw e}}))}commit(e){return t.b(this,void 0,void 0,(function*(){try{const t={name:this.file.name,"@microsoft.graph.conflictBehavior":"rename","@microsoft.graph.sourceUrl":this.uploadSession.url};return yield this.client.api(e).put(t)}catch(e){throw e}}))}}o.DEFAULT_UPLOAD_PATH="/"}).call(this,n("GmLw").Buffer)},tezw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("D57K"),i=n("P4Ao"),o=n("QBS5");class s extends i.a{}Object(r.e)([Object(o.b)({converter:o.d})],s.prototype,"value",void 0),Object(r.e)([Object(o.b)({converter:o.d})],s.prototype,"min",void 0),Object(r.e)([Object(o.b)({converter:o.d})],s.prototype,"max",void 0),Object(r.e)([Object(o.b)({mode:"boolean"})],s.prototype,"paused",void 0)},xQNS:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("D57K"),i=n("P4Ao"),o=n("QBS5"),s=n("oePG"),a=n("uXNP"),l=n("C5kU"),c=n("6fxl");class d extends i.a{}Object(r.e)([o.b],d.prototype,"download",void 0),Object(r.e)([o.b],d.prototype,"href",void 0),Object(r.e)([o.b],d.prototype,"hreflang",void 0),Object(r.e)([o.b],d.prototype,"ping",void 0),Object(r.e)([o.b],d.prototype,"referrerpolicy",void 0),Object(r.e)([o.b],d.prototype,"rel",void 0),Object(r.e)([o.b],d.prototype,"target",void 0),Object(r.e)([o.b],d.prototype,"type",void 0),Object(r.e)([s.d],d.prototype,"defaultSlottedContent",void 0);class u{}Object(r.e)([Object(o.b)({attribute:"aria-expanded",mode:"fromView"})],u.prototype,"ariaExpanded",void 0),Object(c.a)(u,a.a),Object(c.a)(d,l.a,u)}}]);