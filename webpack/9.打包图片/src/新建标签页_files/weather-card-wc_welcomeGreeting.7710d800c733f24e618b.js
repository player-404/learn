(window.webpackJsonp=window.webpackJsonp||[]).push([["weather-card-wc~welcomeGreeting"],{"+MTP":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("YJhp"),n=a("F+I8"),r=a("HDSB");const o={23:i.a.RainShowersDayV2,26:i.a.SnowShowersDayV2,6:i.a.BlowingHailV2,5:i.a.CloudyV3,20:i.a.LightSnowV2,91:i.a.WindyV2,27:i.a.ThunderstormsV2,10:i.a.FreezingRainV2,77:i.a.RainSnowV2,12:i.a.HazySmokeV2,39:i.a.HazeSmokeNightV2_106,24:i.a.RainSnowV2,78:i.a.RainSnowShowersNightV2,9:i.a.FogV2,3:i.a.PartlyCloudyDayV3,43:i.a.HailNightV2,16:i.a.HailDayV2,8:i.a.LightRainV2,15:i.a.HeavySnowV2,28:i.a.ClearNightV3,30:i.a.PartlyCloudyNightV2,14:i.a.ModerateRainV2,1:i.a.SunnyDayV3,7:i.a.BlowingSnowV2,50:i.a.RainShowersNightV2,82:i.a.SnowShowersNightV2,2:i.a.MostlySunnyDay,29:i.a.MostlyClearNight,4:i.a.MostlyCloudyDayV2,31:i.a.MostlyCloudyNightV2,17:i.a.LightRainV3};class s{static getWeatherGlyph(t,e,i){const s=Object.prototype.hasOwnProperty.call(n.b,t)?n.b[t]:t;let l=o[s]||"";return(!Object(r.a)()||i)&&a.p&&a.p.indexOf("assets")>-1&&l.indexOf("assets")<0&&(l=a.p+l.substr(l.lastIndexOf("/")+1)),l}}},"/FrS":function(t,e,a){"use strict";var i,n,r,o,s;a.d(e,"h",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"j",(function(){return o})),a.d(e,"i",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return h})),function(t){t[t.HomeFromCookie=1]="HomeFromCookie",t[t.HomeFromPdp=2]="HomeFromPdp",t[t.HomeFromUserSet=3]="HomeFromUserSet",t[t.HomeFromServerCookie=4]="HomeFromServerCookie"}(i||(i={})),function(t){t[t.DetectCurrentLocation=1]="DetectCurrentLocation",t[t.SpecifyLocation=2]="SpecifyLocation"}(n||(n={})),function(t){t[t.Start=1]="Start",t[t.WCComplete=2]="WCComplete"}(r||(r={})),function(t){t[t.Fahrenheit=1]="Fahrenheit",t[t.Celsius=2]="Celsius"}(o||(o={})),function(t){t[t.RainThreshold=11.9]="RainThreshold"}(s||(s={}));const l={WeatherSpartanHomeLocationCookie:"weaSpartanHomeLocation",WeatherHomeLocationCookie:"weaPeregrineHomeLocation",WeatherSpartanDegreeSettingCookie:"weaSpartanDegreeType",WeatherDegreeSettingCookie:"weaPeregrineDegreeType",WeatherSpartanDetectLocationSetting:"weaDetectLocation",WeatherDetectLocationSetting:"weaPeregrineDetectLocation",WeatherSpartanRecentLocationCookie:"weaSpartanRecentLocations",WeatherRecentLocationCookie:"weaPeregrineRecentLocations",WeatherSpartanFavoriteLocationCookie:"weaSpartanFavoriteLocations",WeatherFavoriteLocationCookie:"weaPeregrineFavoriteLocations",EnglishLocationMarkets:"en-",cookieExpirationTimeInDays:365};var c,u,d,h;!function(t){t[t.setHomeFail=1]="setHomeFail",t[t.exceedPinLocationLimit=2]="exceedPinLocationLimit"}(c||(c={})),function(t){t.Hurricane="Hurricane"}(u||(u={})),function(t){t.ImageContent="ImageContent"}(d||(d={})),function(t){t.L1Minimap="L1Minimap",t.CardMinimap="CardMinimap"}(h||(h={}))},"09SU":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("4X57"),n=a("xY0q");const r=i.a`
    ${Object(n.a)("flex")} :host {
        box-sizing: border-box;
        font-family: var(--body-font);
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        height: 100%;
    }
`},"0km5":function(t,e,a){"use strict";a.r(e),a.d(e,"QueryParameterKeys_ExtendInformation",(function(){return d})),a.d(e,"QueryParameterKeys_WeaDegreeType",(function(){return h})),a.d(e,"QueryParameterKeys_EncryptedLocation",(function(){return p})),a.d(e,"QueryParameterKeys_Ocid",(function(){return g})),a.d(e,"QueryParameterKeys_Latitude",(function(){return m})),a.d(e,"QueryParameterKeys_Longitude",(function(){return f})),a.d(e,"getLocalizedKeywordWeather",(function(){return v})),a.d(e,"getLocalizedKeywordToday",(function(){return b})),a.d(e,"getAllKeywordWeather",(function(){return y})),a.d(e,"buildTemplateLink",(function(){return w})),a.d(e,"buildLink",(function(){return x})),a.d(e,"buildWeatherMapLink",(function(){return C})),a.d(e,"buildWeatherAlertLink",(function(){return $})),a.d(e,"Params2UNIT_MAPS",(function(){return D})),a.d(e,"parseUnitFromLink",(function(){return S})),a.d(e,"setCommonQuery",(function(){return O})),a.d(e,"addUnit",(function(){return L})),a.d(e,"buildQuery",(function(){return k}));var i=a("qE0w"),n=a("rvYQ"),r=a("I6Lx"),o=a("W+kI"),s=a("/FrS"),l=a("vEDr"),c=a("HDSB");const u={default:["weather","today"],"es-xl":["el-tiempo","pronostico"],"es-ar":["el-tiempo","hoy"],"es-mx":["el-tiempo","pronostico"],"es-pe":["el-tiempo","pronostico"],"es-us":["el-tiempo","pronostico"],"es-ve":["el-tiempo","pronostico"],"es-cl":["el-tiempo","hoy"],"es-co":["el-tiempo","pronostico"],"fr-xl":["meteo","previsions"],"fr-be":["meteo","previsions"],"fr-fr":["meteo","previsions"],"it-it":["meteo","oggi"],"fr-ch":["meteo","aujourd-hui"],"fr-ca":["meteo","aujourd-hui"],"de-de":["wetter","heute"],"de-at":["wetter","heute"],"de-ch":["wetter","heute"],"nl-be":["weer","weerbericht"],"nl-nl":["weer","vandaag"],"cs-cz":["pocasi","today"],"pt-br":["clima","previsao-do-tempo"],"da-dk":["vejr","i-dag"],"es-es":["eltiempo","prevision"],"hu-hu":["idojaras","today"],"id-id":["cuaca","hariini"],"pt-pt":["meteorologia","hoje"],"fi-fi":["saa","tanaan"],"nb-no":["weather","idag"],"sv-se":["vader","idag"],"tr-tr":["havadurumu","bugun"],"pl-pl":["pogoda","dzisiaj"]},d="weaext0",h="weadegreetype",p="el",g="ocid",m="lat",f="lon";function v(t){return(t&&u[t.toLocaleLowerCase()]||u.default)[0]}function b(t){return(t&&u[t.toLocaleLowerCase()]||u.default)[1]}function y(){return Object.keys(Object.keys(u).map(t=>u[t][0]).reduce((t,e)=>(t[e]=1,t),{}))}function w(t,e,a){const r=i.toDetailShortInfo(e),o=["","F","C"][a||0]||"",s=t,l={};return s&&e&&Object.keys(s).reduce((t,a)=>(t[a]=(s[a]||"").replace("{locale}",n.a.CurrentMarket).replace("{latitude}",e.latitude).replace("{longitude}",e.longitude).replace("{weadegreetype}",o).replace("{weaext0}",encodeURIComponent(r)),t),l),l}function x(t,e,a){return M("ct",t,e,a)}function C(t,e,a){return M("cm",t,e,a)}function $(t,e,a){return M("ca",t,e,a)}const T={F:s.j.Fahrenheit,C:s.j.Celsius,f:s.j.Fahrenheit,c:s.j.Celsius},D=new Map([[s.j.Fahrenheit,"F"],[s.j.Celsius,"C"]]);function S(t){if(t){const e=Object(l.b)(t,h,["weaDegreeType"]);return e&&T[e]||void 0}}function O(t,e,a){if(e&&t){if(!a||!a.excludeItem){const a=t.getAll("item");for(let t=0;t<a.length;++t)e.append("item",a[t])}if(!a||!a.excludeOcid){const a=Object(l.a)(t);a&&e.set(g,a)}}return e||void 0}function L(t,e){const a=["","F","C"][e||0]||"";return a&&t&&t.set(h,a),t}function M(t,e,a,n){const o=r.b.Locale,s=`${e.latitude},${e.longitude}`,l=[e.locality,e.region,e.country].map(t=>t||"").join(","),c=(",,"!==l&&encodeURIComponent(l),k(a,n)),u=i.toDetailShortInfo(e);u&&c.set(d,u);const h=c.toString(),p=`https://a.msn.com/54/${o}/${t}${s}`;return h?p+"?"+h:p}function k(t,e){return!Object(c.a)()&&e&&e.locationHref?O(new URL(e.locationHref).searchParams,L(new URLSearchParams,t),e):O(Object(o.a)(),L(new URLSearchParams,t),e)}},"157b":function(t,e,a){"use strict";e.a=function(t,e){return t=+t,e=+e,function(a){return t*(1-a)+e*a}}},"59wa":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));var i,n=a("Am8i");!function(t){t.WeatherSettingCard="WeatherSettingCard",t.DetectRadio="weathercard_customization_location",t.SpecifyRadio="weathercard_customization_location",t.FahrenheitRadio="weathercard_customization_unit",t.CelsiusRadio="weathercard_customization_unit",t.DetectLocationButton="detectmylocation",t.SaveButton="save",t.CancelButton="cancel",t.LocationSearchInput="searchLocation",t.LocatonSuggest="autosuggestresults",t.Vertical="weather",t.Category="setting"}(i||(i={}));const r=(t,e)=>{if(!t)return;const a=t.addOrUpdateChild({name:i.WeatherSettingCard,content:{type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),r=a.addOrUpdateChild({name:i.DetectRadio,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.locationDetect,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),o=a.addOrUpdateChild({name:i.SpecifyRadio,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.locationSpecify,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),s=a.addOrUpdateChild({name:i.FahrenheitRadio,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.unitsFahrenheit,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),l=a.addOrUpdateChild({name:i.CelsiusRadio,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.unitsCelsius,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),c=a.addOrUpdateChild({name:i.DetectLocationButton,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.detectLocationActionLabel,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),u=a.addOrUpdateChild({name:i.SaveButton,behavior:n.c.Save,type:n.f.ActionButton,content:{headline:e.saveText,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),d=a.addOrUpdateChild({name:i.CancelButton,behavior:n.c.Cancel,type:n.f.ActionButton,content:{headline:e.cancelText,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),h=a.addOrUpdateChild({name:i.LocationSearchInput,type:n.f.InputBox,content:{vertical:i.Vertical,category:i.Category}}),p=a.addOrUpdateChild({name:i.LocatonSuggest,type:n.f.DropDown,content:{type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}});return{componentRoot:t,weatherSettingCard:a,detectRadio:r,specifyRadio:o,fahrenheitRadio:s,celsiusRadio:l,saveButton:u,cancelButton:d,locationSearchInput:h,locationSuggest:p,detectLocationButton:c}}},"7ffs":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l}));var i=a("D57K"),n=a("P4Ao"),r=a("QBS5"),o=a("oePG");class s{constructor(){this.actionAppearance="neutral"}}class l extends n.a{}Object(i.e)([r.b],l.prototype,"target",void 0),Object(i.e)([o.d],l.prototype,"data",void 0),Object(i.e)([o.d],l.prototype,"headerTelemetryTag",void 0),Object(i.e)([o.d],l.prototype,"seeMoreTelemetryTag",void 0)},"8CFJ":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));class i{static latlonToPixelXY(t,e,a){const i=this.clip(t,this.MinLatitude,this.MaxLatitude),n=(this.clip(e,this.MinLongitude,this.MaxLongitude)+180)*this.ReciprocalOf360,r=Math.sin(i*this.PerDegree),o=.5-Math.log((1+r)/(1-r))*this.ReciprocalOf4Pi;return[this.modPositive(n*a,a),this.modPositive(o*a,a)]}static modPositive(t,e){return(t%=e)<0?t+e:t}static clip(t,e,a){return Math.min(a,Math.max(e,t))}static MapSize(t){return 256<<t}static latLonsToPixel(t,e,a,n=i.zoomLevelMap){return i.toPixelArray(t,e,a,i.widthCardHalf,i.heightCardHalf,n)}static latLonsToPixelLandingPage(t,e,a,n=1600,r=210,o=i.zoomLevelMap){return i.toPixelArray(t,e,a,(n-1)/2,(r-1)/2,o)}static latLonToPixel(t,e,a=1600,n=210,r=i.zoomLevelMap){const o=t[0],s=t[1],l=i.latlonToPixelXY(o,s,i.getMapSizePixel(r));return[l[0]-e[0]+(a-1)/2,l[1]-e[1]+(n-1)/2]}static latLonToPixelCard(t,e,a=i.zoomLevelMap){const n=t[0],r=t[1],o=i.latlonToPixelXY(n,r,i.getMapSizePixel(a));return[o[0]-e[0]+i.widthCardHalf,o[1]-e[1]+i.heightCardHalf]}static toPixelArray(t,e,a,n,r,o=i.zoomLevelMap){const s=i.getMapSizePixel(o),l=i.latlonToPixelXY(e,a,s),c=[];return t.forEach(t=>{const e=t[1],a=t[0],o=i.latlonToPixelXY(e,a,s),u=o[0]-l[0]+n,d=o[1]-l[1]+r;c.push([u,d])}),c}static getMapSizePixel(t=7){return 256<<t}}i.MinLongitude=-180,i.MaxLongitude=180,i.MinLatitude=-85.05112878,i.MaxLatitude=85.05112878,i.ReciprocalOf360=1/360,i.TwoPi=2*Math.PI,i.ReciprocalOfPi=1/Math.PI,i.ReciprocalOf4Pi=1/(4*Math.PI),i.PerDegree=Math.PI/180,i.widthMap=1600,i.heightMap=210,i.maxHeightMap=400,i.widthMapCard=1200,i.heightMapCard=400,i.zoomLevelMap=7,i.widthHalf=(i.widthMap-1)/2,i.heightHalf=(i.heightMap-1)/2,i.widthCardHalf=(i.widthMapCard-1)/2,i.heightCardHalf=(i.heightMapCard-1)/2,i.mapSizePixel=256<<i.zoomLevelMap},"9ALJ":function(t,e,a){"use strict";a.d(e,"a",(function(){return dt}));var i=a("pUFC");function n(t){return t[0]}function r(t){return t[1]}var o=function(t){return function(){return t}};function s(t){this._context=t}s.prototype.areaStart=function(){this._line=0},s.prototype.areaEnd=function(){this._line=NaN},s.prototype.lineStart=function(){this._point=0},s.prototype.lineEnd=function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},s.prototype.point=function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}};var l=function(t){return new s(t)};function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new c}c.prototype=u.prototype={constructor:c},c.prototype.moveTo=function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},c.prototype.closePath=function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},c.prototype.lineTo=function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},c.prototype.bezierCurveTo=function(t,e,a,i,n,r){this._+="C"+ +t+","+ +e+","+ +a+","+ +i+","+(this._x1=+n)+","+(this._y1=+r)},c.prototype.toString=function(){return this._};var d=u,h=function(t,e,a){var i=null,s=o(!0),c=l,u=null;function h(n){var r,o,l,h,p,g,m=(g=n,n="object"==typeof g&&"length"in g?g:Array.from(g)).length,f=!1,v=new Array(m),b=new Array(m);for(u=c(p=d()),r=0;r<=m;++r){if(!(r<m&&s(h=n[r],r,n))===f)if(f=!f)o=r,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=r-1;l>=o;--l)u.point(v[l],b[l]);u.lineEnd(),u.areaEnd()}f&&(v[r]=+t(h,r,n),b[r]=+e(h,r,n),u.point(i?+i(h,r,n):v[r],a?+a(h,r,n):b[r]))}if(p)return u=null,p+""||null}return t="function"==typeof t?t:void 0===t?n:o(+t),e="function"==typeof e?e:o(void 0===e?0:+e),a="function"==typeof a?a:void 0===a?r:o(+a),h.x=function(e){return arguments.length?(t="function"==typeof e?e:o(+e),i=null,h):t},h.y0=function(t){return arguments.length?(e="function"==typeof t?t:o(+t),h):e},h.y1=function(t){return arguments.length?(a=null==t?null:"function"==typeof t?t:o(+t),h):a},h.curve=function(t){return arguments.length?(c=t,h):c},h};function p(t,e,a){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+a)/6)}function g(t){this._context=t}g.prototype.areaStart=function(){this._line=0},g.prototype.areaEnd=function(){this._line=NaN},g.prototype.lineStart=function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},g.prototype.lineEnd=function(){switch(this._point){case 3:p(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},g.prototype.point=function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:p(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e};function m(t,e){this._basis=new g(t),this._beta=e}var f=function t(e){function a(t){return 1===e?new g(t):new m(t,e)}return a.beta=function(e){return t(+e)},a}(.85),v=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},b=function(t){let e=t,a=t;function i(t,e,i,n){for(null==i&&(i=0),null==n&&(n=t.length);i<n;){const r=i+n>>>1;a(t[r],e)<0?i=r+1:n=r}return i}return 1===t.length&&(e=(e,a)=>t(e)-a,a=function(t){return(e,a)=>v(t(e),a)}(t)),{left:i,center:function(t,a,n,r){null==n&&(n=0),null==r&&(r=t.length);const o=i(t,a,n,r-1);return o>n&&e(t[o-1],a)>-e(t[o],a)?o-1:o},right:function(t,e,i,n){for(null==i&&(i=0),null==n&&(n=t.length);i<n;){const r=i+n>>>1;a(t[r],e)>0?n=r:i=r+1}return i}}};const y=b(v),w=y.right;y.left,b((function(t){return null===t?NaN:+t})).center;var x=w;function C(t){return function(){return t}}var $=function(t,e){e||(e=[]);var a,i=t?Math.min(e.length,t.length):0,n=e.slice();return function(r){for(a=0;a<i;++a)n[a]=t[a]*(1-r)+e[a]*r;return n}};function T(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var D="\\s*([+-]?\\d+)\\s*",S="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",O="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",L=/^#([0-9a-f]{3,8})$/,M=new RegExp("^rgb\\("+[D,D,D]+"\\)$"),k=new RegExp("^rgb\\("+[O,O,O]+"\\)$"),A=new RegExp("^rgba\\("+[D,D,D,S]+"\\)$"),j=new RegExp("^rgba\\("+[O,O,O,S]+"\\)$"),N=new RegExp("^hsl\\("+[S,O,O]+"\\)$"),I=new RegExp("^hsla\\("+[S,O,O,S]+"\\)$");function H(t){return new _(t>>16&255,t>>8&255,255&t,1)}function z(t,e,a,i){return i<=0&&(t=e=a=NaN),new _(t,e,a,i)}function P(t,e,a,i){return i<=0?t=e=a=NaN:a<=0||a>=1?t=e=NaN:e<=0&&(t=NaN),new B(t,e,a,i)}function F(t){return t instanceof Color||(t=function(t){var e,a;return t=(t+"").trim().toLowerCase(),(e=L.exec(t))?(a=e[1].length,e=parseInt(e[1],16),6===a?H(e):3===a?new _(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===a?new _(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===a?new _(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=M.exec(t))?new _(e[1],e[2],e[3],1):(e=k.exec(t))?new _(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=A.exec(t))?z(e[1],e[2],e[3],e[4]):(e=j.exec(t))?z(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=N.exec(t))?P(e[1],e[2]/100,e[3]/100,1):(e=I.exec(t))?P(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?H(named[t]):"transparent"===t?new _(NaN,NaN,NaN,0):null}(t)),t?new _((t=t.rgb()).r,t.g,t.b,t.opacity):new _}function R(t,e,a,i){return 1===arguments.length?F(t):new _(t,e,a,null==i?1:i)}function _(t,e,a,i){this.r=+t,this.g=+e,this.b=+a,this.opacity=+i}function B(t,e,a,i){this.h=+t,this.s=+e,this.l=+a,this.opacity=+i}var V=function(t,e){var a=new Date;return t=+t,e=+e,function(i){return a.setTime(t*(1-i)+e*i),a}};function E(t,e){var a,i=e?e.length:0,n=t?Math.min(i,t.length):0,r=new Array(n),o=new Array(i);for(a=0;a<n;++a)r[a]=Q(t[a],e[a]);for(;a<i;++a)o[a]=e[a];return function(t){for(a=0;a<n;++a)o[a]=r[a](t);return o}}var U=function(t,e){return t=+t,e=+e,function(a){return t*(1-a)+e*a}},W=function(t,e){var a,i={},n={};for(a in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)a in t?i[a]=Q(t[a],e[a]):n[a]=e[a];return function(t){for(a in i)n[a]=i[a](t);return n}};function q(t,e){var a=e-t;return a?linear(t,a):C(isNaN(t)?e:t)}var G=function t(e){var a=function(t){return 1==(t=+t)?q:function(e,a){return a-e?exponential(e,a,t):C(isNaN(e)?a:e)}}(e);function i(t,e){var i=a((t=R(t)).r,(e=R(e)).r),n=a(t.g,e.g),r=a(t.b,e.b),o=q(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=n(e),t.b=r(e),t.opacity=o(e),t+""}}return i.gamma=t,i}(1),Y=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Z=new RegExp(Y.source,"g");var K=function(t,e){var a,i,n,r=Y.lastIndex=Z.lastIndex=0,o=-1,s=[],l=[];for(t+="",e+="";(a=Y.exec(t))&&(i=Z.exec(e));)(n=i.index)>r&&(n=e.slice(r,n),s[o]?s[o]+=n:s[++o]=n),(a=a[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,l.push({i:o,x:U(a,i)})),r=Z.lastIndex;return r<e.length&&(n=e.slice(r),s[o]?s[o]+=n:s[++o]=n),s.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var a,i=0;i<e;++i)s[(a=l[i]).i]=a.x(t);return s.join("")})},Q=function(t,e){var a,i,n=typeof e;return null==e||"boolean"===n?(i=e,()=>i):("number"===n?U:"string"===n?(a=(void 0)(e))?(e=a,G):K:e instanceof void 0?G:e instanceof Date?V:T(e)?$:Array.isArray(e)?E:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?W:U)(t,e)};function X(t){return+t}var J=[0,1];function tt(t){return t}function et(t,e){return(e-=t=+t)?function(a){return(a-t)/e}:C(isNaN(e)?NaN:.5)}function at(t,e,a){var i=t[0],n=t[1],r=e[0],o=e[1];return n<i?(i=et(n,i),r=a(o,r)):(i=et(i,n),r=a(r,o)),function(t){return r(i(t))}}function it(t,e,a){var i=Math.min(t.length,e.length)-1,n=new Array(i),r=new Array(i),o=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<i;)n[o]=et(t[o],t[o+1]),r[o]=a(e[o],e[o+1]);return function(e){var a=x(t,e,1,i)-1;return r[a](n[a](e))}}function nt(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function rt(){var t,e,a,i=J,n=J,r=Q,o=tt;function s(){var t,r,s,c=Math.min(i.length,n.length);return o!==tt&&(t=i[0],r=i[c-1],t>r&&(s=t,t=r,r=s),o=function(e){return Math.max(t,Math.min(r,e))}),e=c>2?it:at,a=null,l}function l(s){return isNaN(s=+s)?void 0:(a||(a=e(i.map(t),n,r)))(t(o(s)))}return l.domain=function(t){return arguments.length?(i=Array.from(t,X),s()):i.slice()},l.range=function(t){return arguments.length?(n=Array.from(t),s()):n.slice()},function(e,a){return t=e,a,s()}}function ot(){return rt()(tt,tt)}function st(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function lt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}lt.prototype,lt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};function ct(t){var e=t.domain;return t.ticks=function(t){var a=e();return(void 0)(a[0],a[a.length-1],null==t?10:t)},t.tickFormat=function(t,a){var i=e();return function(t,e,a,i){var n,r=(void 0)(t,e,a);switch((i=(void 0)(null==i?",f":i)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(n=(void 0)(r,o))||(i.precision=n),(void 0)(i,o);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(n=(void 0)(r,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=n-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(n=(void 0)(r))||(i.precision=n-2*("%"===i.type))}return(void 0)(i)}(i[0],i[i.length-1],null==t?10:t,a)},t.nice=function(a){null==a&&(a=10);var i,n,r=e(),o=0,s=r.length-1,l=r[o],c=r[s],u=10;for(c<l&&(n=l,l=c,c=n,n=o,o=s,s=n);u-- >0;){if((n=(void 0)(l,c,a))===i)return r[o]=l,r[s]=c,e(r);if(n>0)l=Math.floor(l/n)*n,c=Math.ceil(c/n)*n;else{if(!(n<0))break;l=Math.ceil(l*n)/n,c=Math.floor(c*n)/n}i=n}return t},t}var ut=a("48GI");class dt{constructor(t,e){const a=e.paddingLeft;t&&e.isRTL?this.xScale=i=>a+("number"==typeof i?i:t.horrizonCount-i.offsetSliceCount+1)*e.sliceWidth:this.xScale=t=>a+("number"==typeof t?t:t.offsetSliceCount)*e.sliceWidth,this.yScale=this.computeYScale({minRain:i.b,maxRain:i.a},{min:e.offsetTopTimelineLabel,max:e.height-e.offsetBottomTimelineLabel-e.timelineChannelHeight}),this.height=e.height,this.nowcastData=t,this.canvasConfig=e}computeCurve(){const t=this.nowcastData.timeline,e=[{offsetSliceCount:0,rainfall:t[0].rainfall}];Array.prototype.push.apply(e,t);return h(e[0],e[1],e[2]).curve(f.beta(1)).x(t=>this.xScale(t)).y1(t=>this.yScale(t.rainfall+this.canvasConfig.randomFactor*Math.random())).y0(this.yScale(this.yScale.domain()[0]))(e)}computeClip(){let t={start:0,stop:-1};const e=this.nowcastData.timeline,a=[];for(;t.start>-1;)t=ht(e,t),t.start>-1&&(a.push(this.xScale(e[t.start])),a.push(this.canvasConfig.offsetTopTimelineLabel),a.push(this.xScale(e[t.stop])-this.xScale(e[t.start])),a.push(this.height-this.canvasConfig.offsetBottomTimelineLabel-this.canvasConfig.timelineChannelHeight));return a}computeTimestamps(){const t=[];return this.nowcastData.timeline.forEach(e=>{e.text&&t.push(e.text)}),t}computeDashlineXIndexes(){let t={start:0,stop:-1};const e=[],a=this.nowcastData.timeline;for(;t.start>-1;)t=ht(a,t),t.start>0&&(e.push(this.xScale(a[t.start])-1),e.push(this.xScale(a[t.start]))),t.stop<a.length-1&&(e.push(this.xScale(a[t.stop])-1),e.push(this.xScale(a[t.stop])));return e}computeYScale(t,e){const a=t.maxRain,i=t.minRain,n=a-i;return function t(){var e=ot();return e.copy=function(){return nt(e,t())},st.apply(e,arguments),ct(e)}().domain([i,a+.1*n]).range([e.max,e.min])}}function ht(t,e){let{start:a,stop:n}=e;return a=Object(ut.a)(t,t=>t.summary===i.e.Raining,n+1),n=Object(ut.a)(t,t=>t.summary===i.e.NoRain,a),n=n>-1?n:t.length-1,a>0&&n-a>1&&a++,{start:a,stop:n}}},DpmN:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("D57K"),n=a("P4Ao"),r=a("btax"),o=a("He1W"),s=a("4X57"),l=a("xY0q");const c=s.a`
    ${Object(l.a)("inline-flex")} :host {
        min-height: 4px;
        height: 4px;
        width: 4px;
        min-width: 4px;
        margin: 0;
        transition: transform 0.2s ease-in-out;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
        opacity: 1;
        min-height: 6px;
        min-width: 6px;
        height: 6px;
        width: 6px;
    }
`;var u=a("GJwX");let d=class extends u.a{};d=Object(i.e)([Object(n.b)({name:"msft-carousel-card-sequence-indicator",template:r.a,styles:[o.a,c]})],d)},"EK+a":function(t,e,a){"use strict";var i;a.d(e,"a",(function(){return c})),function(t){t.Hour="Hour",t.HourMin="HourMin",t.HourTimezone="HourTimezone",t.HourMinTimezone="HourMinTimezone",t.HourTimezoneLong="HourTimezoneLong",t.HourMinTimezoneLong="HourMinTimezoneLong",t.DayWeek="DayWeek",t.MonthDayYear="MonthDayYear",t.MonthDay="MonthDay",t.Year="Year",t.Month="Month",t.Day="Day"}(i||(i={}));const n=new Map([[i.DayWeek,{weekday:"short",day:"numeric"}],[i.MonthDayYear,{month:"short",day:"numeric",year:"numeric"}],[i.MonthDay,{month:"short",day:"numeric"}],[i.Year,{year:"numeric"}],[i.Month,{month:"numeric"}],[i.Day,{day:"numeric"}],[i.Hour,{hour:"numeric"}],[i.HourMin,{hour:"numeric",minute:"numeric"}],[i.HourTimezone,{hour:"numeric",timeZoneName:"short"}],[i.HourMinTimezone,{hour:"numeric",minute:"numeric",timeZoneName:"short"}],[i.HourTimezoneLong,{hour:"numeric",timeZoneName:"long"}],[i.HourMinTimezoneLong,{hour:"numeric",minute:"numeric",timeZoneName:"long"}]]),r=["en-us","en-gb","el-gr"],o=[i.DayWeek,i.HourTimezoneLong,i.HourMinTimezoneLong],s=new Map([["default",{longPm:"pm",shortPm:"p",longAm:"am",shortAm:"a"}],["el-gr",{longPm:"μ.μ.",shortPm:"μ",longAm:"π.μ.",shortAm:"π"}]]),l=new Map([["default",{hour:"numeric"}],["zh-cn",{hour:"numeric",hour12:!1}],["zh-tw",{hour:"numeric",hour12:!1}],["zh-hk",{hour:"numeric",hour12:!1}]]);class c{constructor(t,e){this.locale=t||"en-us",this.timeZone=e||void 0,this.hour12=Intl.DateTimeFormat(this.locale,l.get(this.locale)||l.get("default")).resolvedOptions().hour12,this.localeOption=s.get(this.locale)||s.get("default"),this.timeFormats=new Map,this.timeFormatsEnGb=new Map,this.timeFormatsEnUs=new Map}formatHour(t,e){return this.formatDateTimeFormatText(t,i.Hour,Object.assign({},e))}formatYear(t,e){return this.formatDateTimeFormatText(t,i.Year,Object.assign({},e))}formatMonth(t,e){return this.formatDateTimeFormatText(t,i.Month,Object.assign({},e))}formatDay(t,e){return this.formatDateTimeFormatText(t,i.Day,Object.assign({},e))}formatHourLabel(t){return this.formatHour(t,{excludeSpace:!1})}formatHourMinute(t,e){return this.formatDateTimeFormatText(t,i.HourMin,Object.assign({},e))}formatHourTimezone(t,e,a=!1){let n=i.HourTimezone;return a&&(n=i.HourTimezoneLong),this.formatDateTimeFormatText(t,n,Object.assign({},e))}formatHourMinuteTimezone(t,e,a=!1){let n=i.HourMinTimezone;return a&&(n=i.HourMinTimezoneLong),this.formatDateTimeFormatText(t,n,Object.assign({},e))}formatDayWithWeek(t,e){let a=this.formatDateTimeFormatText(t,i.DayWeek,Object.assign({},e));if(e&&e.forceWeekdayAhead&&a.indexOf(",")<0&&a.indexOf(" ")>0){const t=a.split(" ");2!=t.length||isNaN(parseInt(t[0]))||(a=`${t[1]} ${t[0]}`)}return a}formatWeek(t,e){let a=this.formatDateTimeFormatText(t,i.DayWeek,Object.assign({},e));if(a.indexOf(",")<0&&a.indexOf(" ")>0){const t=a.split(" ");2!=t.length||isNaN(parseInt(t[0]))||(a=t[1])}return a}formatMonthDayYear(t,e){let a=this.formatDateTimeFormatText(t,i.MonthDayYear,Object.assign({},e));if(e&&e.useComma){const n=this.formatDateTimeFormatText(t,i.MonthDay,Object.assign({},e));a=a.replace(n+" ",n+", ")}return a}getFormatObj(t){let e=t;return this.hour12||(t===i.Hour&&(e=i.HourMin),t===i.HourTimezone&&(e=i.HourMinTimezone),t===i.HourTimezoneLong&&(e=i.HourMinTimezoneLong)),r.indexOf(this.locale)<0&&o.indexOf(e)<0?this.hour12?(this.timeFormatsEnUs.has(e)||this.timeFormatsEnUs.set(e,new Intl.DateTimeFormat("en-us",Object.assign({timeZone:this.timeZone},n.get(e)))),this.timeFormatsEnUs.get(e)):(this.timeFormatsEnGb.has(e)||this.timeFormatsEnGb.set(e,new Intl.DateTimeFormat("en-gb",Object.assign({timeZone:this.timeZone},n.get(e)))),this.timeFormatsEnGb.get(e)):(this.timeFormats.has(e)||this.timeFormats.set(e,new Intl.DateTimeFormat(this.locale,Object.assign({timeZone:this.timeZone},n.get(e)))),this.timeFormats.get(e))}formatDateTimeFormatText(t,e,a){const i=this.getFormatObj(e).format(t);return this.postProcess(i,a)}postProcess(t,e){let a=t;return e&&e.excludeComma&&(a=a.replace(/,/g,"")),e&&e.excludeSpace&&(a=a.replace(/\s/g,"")),a}}},"F+I8":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o}));var i=a("ilNR");const n={23:"RainShowersDay",26:"SnowShowersDay",6:"BlowingHail",5:"Cloudy",20:"LightSnow",91:"Windy",27:"Thunderstorms",10:"FreezingRain",77:"RainSnowDay",12:"HazeSmoke",39:"HazeSmokeNightV2_106",24:"RainSnow",78:"RainSnowShowersNight",9:"Fog",3:"PartlyCloudyDay",43:"HailNight",16:"HailDay",8:"LightRain",15:"HeavySnow",28:"ClearNight",30:"PartlyCloudyNight",14:"ModerateRain",1:"SunnyDay",7:"BlowingSnow",50:"RainShowersNight",82:"SnowShowersNight",2:"MostlySunnyDay",29:"MostlyClearNight",4:"MostlyCloudy",31:"MostlyCloudy",17:"LightRainV3"},r={17:"17",31:"31",49:"14",41:"14",35:"8",4:"4",19:"17",22:"14",23:"23",40:"8",25:"15",34:"7",47:"20",52:"15",53:"26",57:"7",58:"7",59:"7",60:"7",81:"26",11:"10",37:"10",38:"10",51:"24",65:"16",66:"43",69:"10",70:"10",71:"10",72:"10",73:"16",74:"43",89:"12",92:"91",32:"5",2:"2",101:"1",42:"15",33:"6",61:"6",62:"6",87:"6",88:"6",93:"6",94:"6",95:"6",96:"6",54:"27",67:"27",68:"27",90:"39",18:"9",21:"9",36:"9",45:"9",48:"9",63:"9",64:"9",29:"29",102:"28",44:"17",46:"17",79:"23",80:"50",76:"24",75:"24",83:"77",84:"78",85:"24",86:"24",39:"39",13:"8"};class o{static getWeatherGlyphCode(t){const e=Object.prototype.hasOwnProperty.call(r,t)?r[t]:t;return n[e]}static getWeatherNormalizedSkyCode(t,e=!1){return e&&i.a.includes(t)?t:Object.prototype.hasOwnProperty.call(r,t)?r[t]:t}}},FB4n:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("D57K"),n=a("P4Ao"),r=a("QBS5");class o extends n.a{}Object(i.e)([Object(r.b)({mode:"boolean"})],o.prototype,"disabled",void 0)},GEHm:function(t,e,a){"use strict";var i=a("157b"),n=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,r=new RegExp(n.source,"g");e.a=function(t,e){var a,o,s,l=n.lastIndex=r.lastIndex=0,c=-1,u=[],d=[];for(t+="",e+="";(a=n.exec(t))&&(o=r.exec(e));)(s=o.index)>l&&(s=e.slice(l,s),u[c]?u[c]+=s:u[++c]=s),(a=a[0])===(o=o[0])?u[c]?u[c]+=o:u[++c]=o:(u[++c]=null,d.push({i:c,x:Object(i.a)(a,o)})),l=r.lastIndex;return l<e.length&&(s=e.slice(l),u[c]?u[c]+=s:u[++c]=s),u.length<2?d[0]?function(t){return function(e){return t(e)+""}}(d[0].x):function(t){return function(){return t}}(e):(e=d.length,function(t){for(var a,i=0;i<e;++i)u[(a=d[i]).i]=a.x(t);return u.join("")})}},GFO5:function(t,e,a){"use strict";var i;a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),function(t){t[t.Size30=1]="Size30",t[t.Size50=2]="Size50",t[t.Size24=3]="Size24",t[t.Size40=4]="Size40",t[t.Size68=5]="Size68",t[t.Size106=6]="Size106"}(i||(i={}));const n={23:"AAekRsY.img",26:"AAekP1G.img",6:"AAekzfx.img",5:"AAekHbj.img",20:"AAeku2v.img",91:"AAekP1I.img",27:"AAekZha.img",10:"AAekwJU.img",77:"AAekHbm.img",12:"AAekU2D.img",24:"AAekJUc.img",78:"AAeku2w.img",9:"AAekrqP.img",3:"AAekwJT.img",43:"AAekzfy.img",16:"BBaRgH.img",8:"AAekBPS.img",15:"AAeku2u.img",28:"AAekU2E.img",30:"AAekErI.img",14:"AAekErH.img",1:"AAekoR7.img",7:"AAekmhd.img",50:"AAekRsZ.img",82:"AAekmhg.img"},r={23:"AAehOqC.img",26:"AAehE44.img",6:"AAehOqA.img",5:"AAehyQC.img",20:"AAehE45.img",91:"AAehWcc.img",27:"AAehOqE.img",10:"AAehGG5.img",77:"AAehWca.img",12:"AAehYNC.img",24:"AAehGG6.img",78:"AAei6xK.img",9:"AAei3XW.img",3:"AAehLNN.img",43:"AAei6xL.img",16:"BBaRgH.img",8:"AAehyQD.img",15:"AAei6xJ.img",28:"AAehwh2.img",30:"AAehOqD.img",14:"AAehOqB.img",1:"AAehR3S.img",7:"AAehYNB.img",50:"AAehYND.img",82:"AAehWcb.img"},o={17:"8",31:"30",49:"14",41:"14",35:"8",4:"3",19:"8",22:"14",23:"23",40:"8",25:"15",34:"7",47:"20",52:"15",53:"26",57:"7",58:"7",59:"7",60:"7",81:"26",11:"10",37:"10",38:"10",51:"24",65:"16",66:"43",69:"10",70:"10",71:"10",72:"10",73:"16",74:"43",89:"12",92:"91",32:"5",2:"1",101:"1",42:"15",33:"6",61:"6",62:"6",87:"6",88:"6",93:"6",94:"6",95:"6",96:"6",54:"27",67:"27",68:"27",90:"12",18:"9",21:"9",36:"9",45:"9",48:"9",63:"9",64:"9",29:"28",102:"28",44:"8",46:"8",79:"23",80:"50",76:"24",75:"24",83:"77",84:"78",85:"24",86:"24",39:"12",13:"8"};class s{static getSkyCodeUrl(t,e){const a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:t;switch(e){case i.Size30:return s.skyCodePath+n[a];case i.Size50:return s.skyCodePath+r[a];default:return null}}}s.skyCodePath="//img-s-msn-com.akamaized.net/tenant/amp/entityid/"},GJwX:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("D57K"),n=a("P4Ao"),r=a("FB4n");class o extends r.a{}var s=a("btax"),l=a("He1W");let c=class extends o{};c=Object(i.e)([Object(n.b)({name:"msft-info-pane-tab",template:s.a,styles:l.a})],c)},"GsY+":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("F+I8");const n={23:"RainShowersDayV2",26:"SnowShowersDayV2",6:"BlowingHailV2",5:"CloudyV3",20:"LightSnowV2",91:"WindyV2",27:"ThunderstormsV2",10:"FreezingRainV2",77:"RainSnowV2",12:"HazySmokeV2",39:"HazeSmokeNightV2_106",24:"RainSnowV2",78:"RainSnowShowersNightV2",9:"FogV2",3:"PartlyCloudyDayV3",43:"HailNightV2",16:"HailDayV2",8:"LightRainV2",15:"HeavySnowV2",28:"ClearNightV3",30:"PartlyCloudyNightV2",14:"ModerateRainV2",1:"SunnyDayV3",7:"BlowingSnowV2",50:"RainShowersNightV2",82:"SnowShowersNightV2",2:"MostlySunnyDay",29:"MostlyClearNight",4:"MostlyCloudyDayV2",31:"MostlyCloudyNightV2",17:"LightRainV3"};class r{static getWeatherGlyph(t){const e=Object.prototype.hasOwnProperty.call(i.b,t)?i.b[t]:t,a=n[e]||"";return a?`https://assets.msn.com/bundles/v1/weather/latest/${a}.svg`:""}}},He1W:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("4X57"),n=a("j9Xn"),r=a("xY0q"),o=a("wHpb"),s=a("oqLQ"),l=a("kL0l");const c=i.a`
    ${Object(r.a)("inline-flex")} :host {
        box-sizing: border-box;
        font-family: var(--body-font);
        min-height: 6px;
        min-width: 6px;
        background-color: ${l.G.var};
        border-radius: 20px;
        opacity: 0.4;
        grid-row: 1;
        z-index: 1;
        margin: 10px 2px;
        border: calc(var(--outline-width) * 1px) solid transparent;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
        opacity: 1;
        min-width: 30px;
    }

    :host(:hover) {
        background: ${l.F.var};
        opacity: 1;
    }

    :host(:active) {
        background: ${l.B.var};
        opacity: 1;
    }

    :host(:${o.a}) {
        outline: none;
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) var(--background-color), 0 0 0 calc((var(--focus-outline-width) + var(--outline-width)) * 1px)
            ${l.z.var};
    }

    :host(:focus) {
        outline: none;
    }
`.withBehaviors(l.z,l.l,l.o,l.s,l.z,l.G,l.F,l.B,Object(s.c)(i.a`
            :host {
                forced-color-adjust: none;
                background: ${n.a.ButtonText};
                opacity: 1;
            }
            :host(:hover),
            :host([aria-selected="true"]:hover),
            :host([aria-selected="true"]) {
                background: ${n.a.Highlight};
            }
            :host(:${o.a}) {
                border-color: ${n.a.ButtonFace};
                box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px)
                rgba(0,0,0,1), 0 0 0 calc((var(--focus-outline-width) + var(--outline-width)) * 1px)
                ${n.a.ButtonText};
            }
        `))},I6Yn:function(t,e,a){"use strict";var i=a("PvqL");function n(t,e,a,i,n){var r=t*t,o=r*t;return((1-3*t+3*r-o)*e+(4-6*r+3*o)*a+(1+3*t+3*r-3*o)*i+o*n)/6}var r=a("PXG9");function o(t,e){return function(a){return t+a*e}}function s(t){return 1==(t=+t)?l:function(e,a){return a-e?function(t,e,a){return t=Math.pow(t,a),e=Math.pow(e,a)-t,a=1/a,function(i){return Math.pow(t+i*e,a)}}(e,a,t):Object(r.a)(isNaN(e)?a:e)}}function l(t,e){var a=e-t;return a?o(t,a):Object(r.a)(isNaN(t)?e:t)}e.a=function t(e){var a=s(e);function n(t,e){var n=a((t=Object(i.b)(t)).r,(e=Object(i.b)(e)).r),r=a(t.g,e.g),o=a(t.b,e.b),s=l(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=r(e),t.b=o(e),t.opacity=s(e),t+""}}return n.gamma=t,n}(1);function c(t){return function(e){var a,n,r=e.length,o=new Array(r),s=new Array(r),l=new Array(r);for(a=0;a<r;++a)n=Object(i.b)(e[a]),o[a]=n.r||0,s[a]=n.g||0,l[a]=n.b||0;return o=t(o),s=t(s),l=t(l),n.opacity=1,function(t){return n.r=o(t),n.g=s(t),n.b=l(t),n+""}}}c((function(t){var e=t.length-1;return function(a){var i=a<=0?a=0:a>=1?(a=1,e-1):Math.floor(a*e),r=t[i],o=t[i+1],s=i>0?t[i-1]:2*r-o,l=i<e-1?t[i+2]:2*o-r;return n((a-i/e)*e,s,r,o,l)}})),c((function(t){var e=t.length;return function(a){var i=Math.floor(((a%=1)<0?++a:a)*e),r=t[(i+e-1)%e],o=t[i%e],s=t[(i+1)%e],l=t[(i+2)%e];return n((a-i/e)*e,r,o,s,l)}}))},JYaR:function(t,e,a){"use strict";a.d(e,"a",(function(){return Tt})),a.d(e,"c",(function(){return Dt})),a.d(e,"b",(function(){return St}));var i=a("D57K"),n=a("P4Ao"),r=a("Z5nQ"),o=a("S35a"),s=a("m1Vi"),l=a("nySH"),c=a("6BDD"),u=a("6vBc"),d=a("UNqU"),h=a("jVi4"),p=a("gE8t"),g=a("hWPV"),m=a("eUhr"),f=a("ydPk");o.a,s.b,p.a,h.a;const v=c.b`
    <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        class="weather-current-precipitation-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.97 5.7c.19.36.28.76.28 1.17a3.06 3.06 0 01-.92 2.21 3.11 3.11 0 01-4.9-.63A3.17 3.17 0 010 6.87c0-.4.1-.8.27-1.17L3.1 0l2.87 5.7z"
        />
    </svg>
`,b=c.b`
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        class="weather-current-airquality-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.8125 5.99414C9.29688 5.99414 9.74805 5.93359 10.166 5.8125C10.5879 5.6875 11.0137 5.51562 11.4434 5.29688C11.5059 5.26562 11.5664 5.25 11.625 5.25C11.7266 5.25 11.8145 5.28711 11.8887 5.36133C11.9629 5.43555 12 5.52344 12 5.625C12 5.76562 11.9355 5.875 11.8066 5.95312C11.7363 5.99609 11.6602 6.03711 11.5781 6.07617C11.5 6.11523 11.4219 6.15234 11.3438 6.1875C10.9414 6.37109 10.5273 6.51172 10.1016 6.60938C9.67969 6.70312 9.25 6.75 8.8125 6.75C8.27344 6.75 7.75781 6.68164 7.26562 6.54492C6.77344 6.4082 6.29102 6.21094 5.81836 5.95312C5.72852 5.90234 5.63477 5.85547 5.53711 5.8125C5.44336 5.76562 5.34766 5.72266 5.25 5.68359V4.88086C5.41406 4.93945 5.57227 5.00391 5.72461 5.07422C5.88086 5.14062 6.0332 5.21484 6.18164 5.29688C6.5957 5.51953 7.01953 5.69141 7.45312 5.8125C7.88672 5.93359 8.33984 5.99414 8.8125 5.99414ZM8.8125 8.24414C9.29688 8.24414 9.74805 8.18359 10.166 8.0625C10.5879 7.9375 11.0137 7.76562 11.4434 7.54688C11.5059 7.51562 11.5664 7.5 11.625 7.5C11.7266 7.5 11.8145 7.53711 11.8887 7.61133C11.9629 7.68555 12 7.77344 12 7.875C12 8.01562 11.9355 8.125 11.8066 8.20312C11.6113 8.32812 11.4004 8.43555 11.1738 8.52539C10.9473 8.61133 10.7227 8.6875 10.5 8.75391V10.5C10.5 10.6055 10.4805 10.7031 10.4414 10.793C10.4023 10.8828 10.3477 10.9629 10.2773 11.0332C10.2109 11.0996 10.1328 11.1523 10.043 11.1914C9.95312 11.2305 9.85547 11.25 9.75 11.25H4.5C4.39453 11.25 4.29688 11.2305 4.20703 11.1914C4.11719 11.1523 4.03711 11.0996 3.9668 11.0332C3.90039 10.9629 3.84766 10.8828 3.80859 10.793C3.76953 10.7031 3.75 10.6055 3.75 10.5V7.53516C3.65625 7.52734 3.5625 7.52148 3.46875 7.51758C3.375 7.50977 3.2832 7.50586 3.19336 7.50586C2.95117 7.50586 2.7168 7.52148 2.49023 7.55273C2.26758 7.58398 2.04688 7.63086 1.82812 7.69336C1.61328 7.75195 1.40039 7.82422 1.18945 7.91016C0.982422 7.99609 0.771484 8.09375 0.556641 8.20312C0.494141 8.23438 0.433594 8.25 0.375 8.25C0.273438 8.25 0.185547 8.21289 0.111328 8.13867C0.0371094 8.06445 0 7.97656 0 7.875C0 7.73438 0.0644531 7.625 0.193359 7.54688C0.404297 7.41797 0.630859 7.30469 0.873047 7.20703C1.11523 7.10938 1.36523 7.02734 1.62305 6.96094C1.88086 6.89453 2.13867 6.8457 2.39648 6.81445C2.6582 6.7793 2.91016 6.76172 3.15234 6.76172C3.25391 6.76172 3.35352 6.76562 3.45117 6.77344C3.54883 6.77734 3.64844 6.7832 3.75 6.79102V5.28516C3.65625 5.27734 3.5625 5.27148 3.46875 5.26758C3.375 5.25977 3.2832 5.25586 3.19336 5.25586C2.95117 5.25586 2.7168 5.27148 2.49023 5.30273C2.26758 5.33398 2.04688 5.38086 1.82812 5.44336C1.61328 5.50195 1.40039 5.57422 1.18945 5.66016C0.982422 5.74609 0.771484 5.84375 0.556641 5.95312C0.494141 5.98438 0.433594 6 0.375 6C0.273438 6 0.185547 5.96289 0.111328 5.88867C0.0371094 5.81445 0 5.72656 0 5.625C0 5.48438 0.0644531 5.375 0.193359 5.29688C0.404297 5.16797 0.630859 5.05469 0.873047 4.95703C1.11523 4.85938 1.36523 4.77734 1.62305 4.71094C1.88086 4.64453 2.13867 4.5957 2.39648 4.56445C2.6582 4.5293 2.91016 4.51172 3.15234 4.51172C3.25391 4.51172 3.35352 4.51562 3.45117 4.52344C3.54883 4.52734 3.64844 4.5332 3.75 4.54102V3.03516C3.65625 3.02734 3.5625 3.02148 3.46875 3.01758C3.375 3.00977 3.2832 3.00586 3.19336 3.00586C2.95117 3.00586 2.7168 3.02148 2.49023 3.05273C2.26758 3.08398 2.04688 3.13086 1.82812 3.19336C1.61328 3.25195 1.40039 3.32422 1.18945 3.41016C0.982422 3.49609 0.771484 3.59375 0.556641 3.70312C0.494141 3.73437 0.433594 3.75 0.375 3.75C0.273438 3.75 0.185547 3.71289 0.111328 3.63867C0.0371094 3.56445 0 3.47656 0 3.375C0 3.23438 0.0644531 3.125 0.193359 3.04688C0.404297 2.91797 0.630859 2.80469 0.873047 2.70703C1.11523 2.60937 1.36523 2.52734 1.62305 2.46094C1.88086 2.39453 2.13867 2.3457 2.39648 2.31445C2.6582 2.2793 2.91016 2.26172 3.15234 2.26172C3.25391 2.26172 3.35352 2.26563 3.45117 2.27344C3.54883 2.27734 3.64844 2.2832 3.75 2.29102V1.5C3.75 1.39453 3.76953 1.29687 3.80859 1.20703C3.84766 1.11719 3.90039 1.03906 3.9668 0.972656C4.03711 0.902344 4.11719 0.847656 4.20703 0.808594C4.29688 0.769531 4.39453 0.75 4.5 0.75H9.75C9.85547 0.75 9.95312 0.769531 10.043 0.808594C10.1328 0.847656 10.2109 0.902344 10.2773 0.972656C10.3477 1.03906 10.4023 1.11719 10.4414 1.20703C10.4805 1.29687 10.5 1.39453 10.5 1.5V3.46289C10.668 3.4082 10.8281 3.3457 10.9805 3.27539C11.1328 3.20117 11.2871 3.125 11.4434 3.04688C11.4746 3.03125 11.5039 3.01953 11.5312 3.01172C11.5586 3.00391 11.5898 3 11.625 3C11.7266 3 11.8145 3.03711 11.8887 3.11133C11.9629 3.18555 12 3.27344 12 3.375C12 3.51562 11.9355 3.625 11.8066 3.70312C11.5957 3.83203 11.3672 3.94727 11.1211 4.04883C10.875 4.14648 10.6211 4.23047 10.3594 4.30078C10.1016 4.36719 9.83984 4.41797 9.57422 4.45312C9.3125 4.48438 9.05859 4.5 8.8125 4.5C8.27344 4.5 7.75781 4.43164 7.26562 4.29492C6.77344 4.1582 6.29102 3.96094 5.81836 3.70312C5.72852 3.65234 5.63477 3.60547 5.53711 3.5625C5.44336 3.51562 5.34766 3.47266 5.25 3.43359V2.63086C5.41406 2.68945 5.57227 2.75391 5.72461 2.82422C5.88086 2.89062 6.0332 2.96484 6.18164 3.04688C6.5957 3.26953 7.01953 3.44141 7.45312 3.5625C7.89062 3.68359 8.3457 3.74414 8.81836 3.74414C8.97461 3.74414 9.13086 3.73828 9.28711 3.72656C9.44336 3.71094 9.59766 3.68945 9.75 3.66211V1.5H4.5V10.5H9.75V8.92969C9.4375 8.97656 9.125 9 8.8125 9C8.27344 9 7.75781 8.93164 7.26562 8.79492C6.77344 8.6582 6.29102 8.46094 5.81836 8.20312C5.72852 8.15234 5.63477 8.10547 5.53711 8.0625C5.44336 8.01562 5.34766 7.97266 5.25 7.93359V7.13086C5.41406 7.18945 5.57227 7.25391 5.72461 7.32422C5.88086 7.39062 6.0332 7.46484 6.18164 7.54688C6.5957 7.76953 7.01953 7.94141 7.45312 8.0625C7.88672 8.18359 8.33984 8.24414 8.8125 8.24414Z"
        />
    </svg>
`,y=c.b`
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        class="weather-home-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.6013 0.43316C5.25918 0.125798 4.74041 0.125792 4.39831 0.43316L1.0983 3.39808C0.908321 3.56878 0.799805 3.81216 0.799805 4.06756V8.30004C0.799805 8.79708 1.20275 9.20004 1.6998 9.20004H2.8998C3.39686 9.20004 3.7998 8.79708 3.7998 8.30004V5.90004C3.7998 5.73438 3.93412 5.60004 4.0998 5.60004H5.89981C6.06546 5.60004 6.1998 5.73438 6.1998 5.90004V8.30004C6.1998 8.79708 6.60277 9.20004 7.0998 9.20004H8.29981C8.79684 9.20004 9.19981 8.79708 9.19981 8.30004V4.06756C9.19981 3.81216 9.09127 3.56878 8.90131 3.39808L5.6013 0.43316Z"
        />
    </svg>
`,w=c.b`
    <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        class="weather-detect-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 0C6.3077 0 6.5613 0.231624 6.59596 0.530027L6.6 0.6L6.60021 1.38838C8.68853 1.6575 10.3428 3.31199 10.6117 5.4004L11.4 5.4C11.7314 5.4 12 5.66863 12 6C12 6.3077 11.7684 6.5613 11.47 6.59596L11.4 6.6L10.6116 6.60021C10.3425 8.68832 8.68832 10.3425 6.60021 10.6116L6.6 11.4C6.6 11.7314 6.33137 12 6 12C5.6923 12 5.4387 11.7684 5.40404 11.47L5.4 11.4L5.4004 10.6117C3.31199 10.3428 1.6575 8.68853 1.38838 6.60021L0.6 6.6C0.268629 6.6 0 6.33137 0 6C0 5.6923 0.231624 5.4387 0.530027 5.40404L0.6 5.4L1.3883 5.4004C1.65718 3.31179 3.31179 1.65718 5.4004 1.3883L5.4 0.6C5.4 0.268629 5.66863 0 6 0ZM6 2.55C4.09462 2.55 2.55 4.09462 2.55 6C2.55 7.90538 4.09462 9.45 6 9.45C7.90538 9.45 9.45 7.90538 9.45 6C9.45 4.09462 7.90538 2.55 6 2.55ZM6 3.6C7.32548 3.6 8.4 4.67452 8.4 6C8.4 7.32548 7.32548 8.4 6 8.4C4.67452 8.4 3.6 7.32548 3.6 6C3.6 4.67452 4.67452 3.6 6 3.6Z"
        />
    </svg>
`,x=c.b`
    <li>
        <fluent-anchor
            class="weather-forecast-item ${(t,e)=>4===e.parent.weatherData.forecastData.length?"weather-forecast-item-4col":"weather-forecast-item-5col"} ${(t,e)=>e.parent.weatherData.dataProvider?"weather-forecast-item-pro":"weather-forecast-item-npro"}"
            part="${(t,e)=>4===e.parent.weatherData.forecastData.length?"weather-forecast-item-4col":"weather-forecast-item-5col"}"
            href="${t=>t.forecastLink}"
            target=${(t,e)=>e.parent.target}
            @focus="${(t,e)=>e.parent.focusOnForecastHandler()}"
            ${Object(m.b)((t,e)=>e.parent.forecastDayTelemetryTags&&e.parent.forecastDayTelemetryTags[e.index]||e.parent.forecastDayTelemetryTag)}
        >
            <div
                class="weather-forecast-day"
                part="weather-forecast-day"
                aria-label=${t=>t.dayOfWeekName||t.dayOfWeek}
            >
                ${t=>t.dayOfWeek}
            </div>
            ${t=>t.skycodeIcon}
            <div class="weather-forecast-temp" part="weather-forecast-temp">
                <div
                    class="weather-forecast-high"
                    part="weather-forecast-high"
                    aria-label="${t=>(t.highTempLabel?t.highTempLabel+" ":"")+t.highTemperature+"°"}"
                >
                    ${t=>t.highTemperature}°
                </div>
                <div
                    class="weather-forecast-low"
                    part="weather-forecast-low"
                    aria-label="${t=>(t.lowTempLabel?t.lowTempLabel+" ":"")+t.lowTemperature+"°"}"
                >
                    ${t=>t.lowTemperature}°
                </div>
            </div>
        </fluent-anchor>
    </li>
`,C=c.b`
    <div
        class="weather-alert"
        part="weather-alert"
        title="${t=>t.weatherData.alertTitle}"
    >
        <div class="weather-alert-info" part="weather-alert-info">
            <div class="weather-alert-icon" part="weather-alert-icon">
                ${t=>t.weatherData.alertIcon}
            </div>
            <span class="weather-alert-item1">${t=>t.weatherData.alertEvent}</span>
        </div>
        <div class="weather-alert-sig" part="weather-alert-sig">
            <span class="weather-alert-item2">
                ${t=>t.weatherData.alertSig}
            </span>
        </div>
    </div>
`,$=c.b`
    ${Object(u.a)(t=>t.weatherData.nowcast&&t.weatherData.nowcast.precipitationType!=g.a.NoRain,c.b`<div class="weather-nowcast" part="weather-nowcast">
            <span>${v} ${t=>{var e;return null===(e=t.weatherData.nowcast)||void 0===e?void 0:e.summary}}</span>
        </div>`)}
`,T=c.b`
    ${Object(u.a)(t=>t.weatherData.precipitation,c.b`
            <li
                class="weather-current-container-item"
                part="weather-current-container-item"
                title="${t=>(t.weatherData.precipitationLabel?t.weatherData.precipitationLabel+" ":"")+t.weatherData.precipitation}"
                aria-label="${t=>(t.weatherData.precipitationLabel?t.weatherData.precipitationLabel+" ":"")+t.weatherData.precipitation}"
            >
                ${v}
                <span
                    class="weather-current-container-item-text"
                    part="weather-current-container-item-text"
                >
                    ${t=>t.weatherData.precipitation}
                </span>
            </li>
        `)}
    ${Object(u.a)(t=>t.weatherData.aqi,c.b` <li
            class="weather-current-container-item"
            part="weather-current-container-item"
        >
        <a
           class="weather-current-container-item"
           part="weather-current-container-item"
           href="${t=>t.weatherData.link}"
           target=${t=>t.target}
           title="${t=>(t.weatherData.aqiLabel?t.weatherData.aqiLabel+" ":"")+t.weatherData.aqi}"
           aria-label="${t=>(t.weatherData.aqiLabel?t.weatherData.aqiLabel+" ":"")+t.weatherData.aqi}"
           ${Object(m.b)(t=>t.weatherAqiTelemetryTag)}
        >
            ${b}
            <span
                class="weather-current-container-item-text"
                part="weather-current-container-item-text"
            >
                ${t=>t.weatherData.aqi}
            </span>
        </li>`)}
`,D=c.b`
    <div class="weather-current-info" part="weather-current-info">
        ${Object(u.a)(t=>t.weatherData.weatherSummary,c.b`
                <span
                    class="weather-current-summary"
                    part="weather-current-summary"
                    title="${t=>t.weatherData.weatherSummary}"
                >
                    ${t=>t.weatherData.weatherSummary}
                </span>
            `)}
        ${Object(u.a)(t=>!t.weatherData.weatherSummary,c.b`
                <span
                    class="weather-current-skycode"
                    part="weather-current-skycode"
                    title="${t=>t.weatherData.skycode}"
                >
                    ${t=>t.weatherData.skycode}
                </span>
            `)}
        ${Object(u.a)(t=>(t.weatherData.precipitation||t.weatherData.aqi)&&(!t.weatherData.weatherSummary||t.weatherData.weatherSummary.length<=15),c.b`
                <div>
                    <ul
                        class="weather-current-container"
                        part="weather-current-container"
                    >
                        ${T}
                    </ul>
                </div>
            `)}
    </div>
`,S=c.b`
    <div
        class="weather-forecast-container"
        @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
        @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
    >
        <ul class="weather-forecast" part="weather-forecast">
            ${Object(d.c)(t=>t.weatherData.forecastData,x,{positioning:!0})}
        </ul>
        ${Object(u.a)(t=>t.weatherData.dataProvider,c.b`
                <div class="weather-footer-provider" part="weather-footer-provider">
                    ${t=>t.weatherData.dataProvider}
                </div>
            `)}
    </div>
`,O=c.b`
    <a
        class="weather-header"
        part="weather-header"
        href="${t=>t.weatherData.link}"
        target=${t=>t.target}
        title="${t=>t.weatherData.locationName}"
        ${Object(m.b)(t=>t.headerTelemetryTag||t.locationTelemetryTag)}
    >
        ${t=>t.weatherData.locationName}
    </a>
    <div class="weather-pen-btn" part="weather-pen-btn">
        <slot name="weather-pen-btn"></slot>
    </div>
`,L=c.b`
    <a
        class="weather-header"
        part="weather-header"
        href="${t=>t.weatherData.link}"
        target=${t=>t.target}
        title="${t=>t.weatherData.locationName}"
        ${Object(m.b)(t=>t.headerTelemetryTag||t.locationTelemetryTag)}
    >
        ${t=>t.weatherData.locationName}
    </a>

    <fluent-button
        class="weather-edit-btn"
        tabindex="0"
        aria-label=${t=>t.editLocationTip}
        title=${t=>t.editLocationTip}
        @click="${(t,e)=>t.switchToSettings()}"
        ${Object(m.b)(t=>t.weatherEditButtonTelemetryTag)}
    >
        ${t=>t.weatherData.editLocationButtonTemplate}
    </fluent-button>
`,M=c.b`
    <a
        class="weather-header"
        part="weather-header"
        href="${t=>t.weatherData.link}"
        target=${t=>t.target}
        title="${t=>t.weatherData.titleContent}"
        ${Object(m.b)(t=>t.headerTelemetryTag||t.locationTelemetryTag)}
    >
        <span class="weather-header-cont">${t=>t.weatherData.titleContent}</span>
    </a>
`,k=c.b`
    <div class="weather-locationwithedit-light">
        <a
            class="weather-location"
            part="weather-location"
            href="${t=>t.weatherData.link}"
            target=${t=>t.target}
            title="${t=>t.weatherData.locationName}"
            ${Object(m.b)(t=>t.locationTelemetryTag)}
        >
            ${t=>t.weatherData.locationMode==f.a.SpecifyLoc?y:w}
            ${t=>t.weatherData.locationName}
        </a>
        <div class="weather-pen-btn" part="weather-pen-btn">
            <slot name="weather-pen-btn"></slot>
        </div>
    </div>
`,A=c.b`
    ${Object(u.a)(t=>t.weatherData,c.b`
            <div
                class="weather-container"
                part="weather-container"
                style="${t=>"dynamic"==t.background&&t.weatherData.skycodeBackground?`background: ${t.weatherData.skycodeBackground};`:void 0}"
            >
                <div class="weather-title" part="weather-title">
                    ${Object(u.a)(t=>"light"!=t.background&&!(t.editLocationTip&&t.weatherData.editLocationButtonTemplate),O)}
                    ${Object(u.a)(t=>"light"!=t.background&&t.editLocationTip&&t.weatherData.editLocationButtonTemplate,L)}
                    ${Object(u.a)(t=>"light"==t.background,M)}
                    <div class="more-actions" part="more-actions">
                        <slot name="more-actions"></slot>
                    </div>
                </div>
                ${Object(u.a)(t=>"light"==t.background,k)}
                <a
                    class="weather-current"
                    part="weather-current"
                    href="${t=>t.weatherData.link}"
                    target=${t=>t.target}
                    ${Object(m.b)(t=>t.weaConditionTelemetryTag)}
                >
                    <div
                        class="weather-current-image"
                        part="weather-current-image"
                        title="${t=>t.weatherData.skycode}"
                    >
                        ${t=>t.weatherData.skycodeIcon}
                    </div>
                    <div
                        class="weather-current-temperature"
                        part="weather-current-temperature"
                        aria-label="${t=>t.weatherData.temperature+t.weatherData.unitSetting}"
                    >
                        ${t=>t.weatherData.temperature}
                        <div class="weather-degree-switch" part="weather-degree-switch">
                            <span
                                class="weather-degree-current"
                                part="weather-degree-current"
                            >
                                ${t=>t.weatherData.unitSetting}
                            </span>
                            <fluent-button
                                class="weather-degree-alternate"
                                part="weather-degree-alternate"
                                tabindex="0"
                                aria-label=${t=>t.switchUnitLabel}
                                title=${t=>t.switchUnitLabel}
                                @click="${(t,e)=>t.switchUnit()}"
                                ${Object(m.b)(t=>t.unitSwitchTelemetryTag)}
                            >
                                ${t=>t.weatherData.unitAlternate}
                            </fluent-button>
                        </div>
                    </div>
                    ${Object(u.a)(t=>t.weatherData.alertEvent,C)}
                    ${Object(u.a)(t=>t.hasNowcast(),$)}
                    ${Object(u.a)(t=>!t.weatherData.alertEvent&&!t.hasNowcast(),D)}
                </a>
                ${Object(u.a)(t=>t.layout===l.b.Full,c.b`
                        <div
                            class="weather-forecast-or-map-container ${t=>t.getRotationStyle()}"
                        >
                            ${Object(u.a)(t=>!!t.weatherData.forecastData&&t.weatherData.forecastData.length,S)}
                            ${Object(u.a)(t=>{var e,a;return!!t.weatherData.defaultMapPageUrl&&(!!t.weatherData.minimapButtons&&!!t.weatherData.minimapButtons.length||!!(null===(e=t.weatherData.minimap)||void 0===e?void 0:e.minimapButtons)&&!!(null===(a=t.weatherData.minimap)||void 0===a?void 0:a.minimapButtons.length)||t.hasSevereWeather())},c.b`<msft-weather-minimap
                                    :minimapData="${t=>({minimapButtons:t.weatherData.minimapButtons,minimapTooltip:t.weatherData.minimapTooltip,staticMapLink:t.weatherData.staticMapLink,weatherMinimapLink:t.weatherData.weatherMinimapLink,...t.weatherData.minimap})}"
                                    minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
                                    defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
                                    target="${t=>t.target}"
                                    style="width:100%; height:100%; position:absolute"
                                    @focusmap=${t=>t.focusOnMinimapHandler()}
                                    @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
                                    @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
                                />`)}
                            ${Object(u.a)(t=>t.weatherData.nowcast,c.b`<msft-weather-nowcast
                                    :nowcastData="${t=>t.weatherData.nowcast}"
                                    telemetryTag="${t=>t.nowcastTelemetryTags}"
                                    href="${t=>t.weatherData.link}"
                                    target="${t=>t.target}"
                                    class="nowcast"
                                    background="${t=>t.background}"
                                />`)}
                        </div>
                    `)}
                <div class="weather-footer" part="weather-footer">
                    <fluent-anchor
                        class="sd-action"
                        part="sd-action"
                        href="${t=>t.weatherData.link}"
                        target=${t=>t.target}
                        ${Object(m.b)(t=>t.seeForecastTelemetryTag)}
                    >
                        ${t=>t.weatherData.footerContent}
                    </fluent-anchor>
                </div>
            </div>
        `)}
`;var j=a("xY0q"),N=a("wHpb"),I=a("CzTk"),H=a("oqLQ"),z=a("sfV1"),P=a("kL0l"),F=a("4X57"),R=a("Lc5y"),_=a("j9Xn");const B=F.a`
    .weather-current-info,
    .weather-nowcast,
    .weather-alert {
        text-align: right;
    }
`,V=F.a`
    .weather-current-info,
    .weather-nowcast,
    .weather-alert {
        text-align: left;
    }
`,E=F.a`
    :host {
        --weather-card-forecast-background: rgba(255, 255, 255, 0.5);
        --weather-card-forecast-hover-background: rgba(255, 255, 255, 0.8);
    }
`,U=F.a`
    :host {
        --weather-card-forecast-background: rgba(255, 255, 255, 0.03);
        --weather-card-forecast-hover-background: rgba(255, 255, 255, 0.08);
    }
`,W=F.a`
    ${Object(j.a)("flex")}
    
    :host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: var(--body-font);
        flex-direction: column;
        outline: none;
    }

    .weather-container {
        overflow: hidden;
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: calc(var(--corner-radius) * 1px);
        height: 100%;
    }

    :host([background="dynamic"])
    .weather-container {
        background: ${z.b.var};
    }

    :host([background="light"])
    .weather-container {
        background: ${z.a.var};
    }

    .weather-title {
        display: flex;
    }

    .weather-header {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-top: 4px;
        color: ${P.G.var};
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 240px;
        z-index: 2;
    }

    .weather-header:hover,
    .weather-header:active,
    .weather-header:${N.a} {
        text-decoration: underline;
    }

    .weather-header-cont {
        margin-top: 0px;
        margin-inline-start: 2px;
    }

    .weather-locationwithedit-light {
        margin: 0 auto;
        display: inline-flex;
        align-items: center;
        height: 20px;
    }

    .weather-location {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        font-weight: 500;
        color: ${P.G.var};
        text-align: center;
        letter-spacing: 0.12px;
        text-decoration: none;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 3;
        display: block;
        max-width: 230px;
    }

    .weather-location:hover,
    .weather-location:active,
    .weather-location:${N.a} {
        text-decoration: underline;
    }

    .weather-home-glyph,
    .weather-detect-glyph {
        fill: currentcolor;
        margin-inline-end: 3px;
    }



    .more-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-inline-start: auto;
        margin-inline-end: 0px;
        z-index: 2;
    }

    .weather-pen-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
        margin: 4px 4px 0px;
    }

    :host([background="light"]) .weather-pen-btn {
        margin: 0px 4px;
    }

    .weather-current {
        text-decoration: none;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    :host([layout="half"]) .weather-current {
        margin: 5px 0;
    }

    :host([layout="full"]) .weather-current {
        margin: 8px 0;
    }

    :host([background="light"]) .weather-current {
        margin-top: 0;
    }

    .weather-current-image {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        margin-top: 6px;
    }

    .weather-current-temperature {
        font-style: normal;
        font-size: var(--type-ramp-plus-5-font-size);
        line-height: var(--type-ramp-plus-4-line-height);
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        display: flex;
        align-items: flex-start;
        margin-inline-start: 5px;
        margin-inline-end: 10px;
    }

    .weather-degree-switch {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin-inline-start: 5px;
    }

    .weather-degree-current {
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        position: relative;
        top: 2px;
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        margin-inline-start: 3px;
    }

    .weather-degree-alternate {
        align-items: center;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-top: 3px;
        text-decoration: none;
        color: ${P.D.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        margin-inline-start: auto;
        margin-inline-end: 0px;
        border-top: 1px solid ${P.D.var};
        z-index: 3;
        background: transparent;
        max-height: 20px;
        min-width: 20px;
        width: 20px;
    }

    .weather-degree-alternate:hover,
    .weather-degree-alternate:active,
    .weather-degree-alternate:${N.a} {
        color: ${P.F.var};
    }

    .weather-degree-alternate::part(control) {
        width: 20px;
        height: 20px;
    }

    .weather-current-info {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        flex-flow: column nowrap;
        max-width: 168px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .weather-nowcast {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        flex-flow: column nowrap;
        max-width: 168px;
        text-wrap: balance;
    }

    .weather-current-skycode,
    .weather-current-summary {
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-current-summary {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .weather-alert {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        font-weight: 500;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        text-transform: uppercase;
        max-width: 168px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .weather-alert-info {
        display: flex;
        align-items: center;
        margin-inline-start: auto;
        margin-inline-end: 0px;
    }

    .weather-alert-icon {
        margin-inline-start: auto;
        margin-inline-end: 2px;
    }

    .weather-alert-icon svg {
        vertical-align: middle;
    }

    .weather-alert-item1,
    .weather-alert-item2 {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .weather-alert-item2 {
        margin-inline-start: auto;
        margin-inline-end: 0px;
    }

    .weather-alert-sig {
        display: flex;
    }

    .weather-current-container {
        display: flex;
        margin: 0px;
        float: right
    }

    .weather-current-container > li {
        padding-inline-start: 10px;
        padding-inline-end: 1px;
        padding-bottom: 2px;
    }

    .weather-current-container-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        z-index: 3;
    }

    .weather-current-precipitation-glyph {
        margin-inline-start: auto;
        margin-inline-end: 4px;
        fill: currentcolor;
        box-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-current-container-item-text {
        font-size: var(--type-ramp-base-font-size);
        display: flex;
        margin-inline-end: 0px;
        color: ${P.G.var};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-current-airquality-glyph {
        margin-inline-start: auto;
        margin-inline-end: 4px;
        fill: ${P.G.var};
        box-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-forecast-or-map-container {
        overflow: hidden;
        position: relative;
        height: 136px;
        z-index: 2;
    }

    .weather-forecast-container {
        height: 100%;
    }

    /* styles for init rotation */
    .weather-rotate-container>* {
        position: absolute;
        top: 101%;
        left: 0;
        animation: 10s autoplay_init 2.5 ease-in-out;
    }
    .weather-rotate-container>*:nth-child(1) {
        animation-delay: 0s;
        animation-fill-mode: forwards;
        animation-iteration-count: 2.5;
    }
    .weather-rotate-container>*:nth-child(2) {
        animation-delay: 5s;
        animation-iteration-count: 2;
    }

    .weather-rotate-container-running > * {
        animation-play-state: running;
    }

    .weather-rotate-container-paused > * {
        animation-play-state: paused;
    }

    /* styles for focus on forecast, make the first element invisable */
    .weather-rotate-container-on-forecast>*:nth-child(2) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px; 
    }

    /* styles for focus on minimap, make the first element invisiable */
    .weather-rotate-container-on-map>*:nth-child(1) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px; 
    }

    .weather-forecast {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0px;
        margin: 0px;
    }

    .weather-forecast-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .weather-forecast-item-pro {
        height: 120px;
    }

    .weather-forecast-item-npro {
        height: 132px;
    }

    .weather-forecast-item-4col {
        width: 64px;
        min-width: 64px;
        border-radius: 6px;
    }

    .weather-forecast-item-5col {
        width: 50px;
        min-width: 50px;
        border-radius: 4px;
    }

    .weather-forecast > li {
        padding-inline-end: 4px;
    }

    @keyframes autoplay_init {
        0% {top: 101%; }
        5% {top: 0%; }
        50% {top: 0%; }
        55% {top: -101%; }
        100% {top: -101%; }
    }

    .nowcast:${N.a} {
        outline: none;
    }

    :host([background="light"])
    .weather-forecast-item {
        background: var(--weather-card-forecast-background);
    }

    :host([background="light"])
    .weather-forecast-item:hover,
    .weather-forecast-item:active,
    .weather-forecast-item:${N.a} {
        background: var(--weather-card-forecast-hover-background);
    }

    .weather-forecast-item::part(control) {
        width: 100%;
        padding: 9px 0;
    }

    .weather-forecast-item svg,
    .weather-forecast-item img {
        width: 24px;
        height: 24px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .weather-forecast-day {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 500;
        margin-top: 2px;
    }
   
    :host([background="light"])
    .weather-forecast-day {
        text-transform: none;
    }

    .weather-forecast-high {
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        font-weight: 500;
    }

    .weather-forecast-low {
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
    }

    .weather-footer {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    .sd-action {
        border-radius: 20px;
        height: 24px;
    }

    :host([background="dynamic"])
    .sd-action {
        background: rgba(255, 255, 255, 0.09);
    }

    :host([background="dynamic"])
    .sd-action:hover,
    .sd-action:active,
    .sd-action:${N.a} {
        background: rgba(255, 255, 255, 0.13);
    }

    .sd-action::part(control) {
        padding: 0px 24px 0px 24px;
    }

    :host([background="dynamic"])
    .sd-action::part(control) {
        color: rgba(255, 255, 255, 0.8);
    }

    .sd-action::part(control)::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    .weather-footer-provider {
        font-size: var(--type-ramp-minus-2-font-size);
        line-height: var(--type-ramp-minus-2-line-height);
        color: ${P.D.var};
        text-align: end;
        margin-inline-end: 5px;
    }

    .weather-edit-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
        background: transparent;
        margin: 2px 4px;
        min-width: 20px;
        width: 20px;
        height: 20px;
    }
    .weather-edit-btn svg {
        fill: currentcolor;
        width: 12px;
        height: 12px;
    }
    .weather-edit-btn:hover,
    .weather-edit-btn:active {
        background: ${P.o.var};
    }
    .weather-edit-btn:${N.a} {
        background: ${P.o.var};
        outline: 1px solid;
    }
    
    ::slotted(fluent-button[slot="weather-pen-btn"]) {
        min-width: 18px;
        width: 18px;
        height: 18px;
        background: none;
    }

    ::slotted(fluent-button[slot="more-actions"]) {
        min-width: 24px;
        width: 24px;
        height: 24px;
        border-radius: 16px;
        background: ${P.s.var};
    }

    :host([background="dynamic"])
    ::slotted(fluent-button[slot="more-actions"]){
        background: rgba(255, 255, 255, 0.09);
    }

    ::slotted([slot="weather-pen-btn"]:hover),
    ::slotted([slot="weather-pen-btn"]:active),
    ::slotted([slot="weather-pen-btn"]:${N.a}) {
        background: ${P.o.var};
    }

    ::slotted([slot="more-actions"]:hover),
    ::slotted([slot="more-actions"]:active),
    ::slotted([slot="more-actions"]:${N.a}) {
        background: ${P.o.var};
    }

    :host([background="dynamic"])
    ::slotted([slot="more-actions"]:hover),
    ::slotted([slot="more-actions"]:active),
    ::slotted([slot="more-actions"]:${N.a}) {
        background: rgba(255, 255, 255, 0.13);
    }
`.withBehaviors(P.o,P.z,P.D,P.F,P.G,P.O,P.P,z.a,z.b,new I.a(B,V),new R.a(E,U),Object(H.c)(F.a`
            :host {
                forced-color-adjust: auto;
            }
            .weather-glyph,
            .weather-home-glyph,
            .weather-detect-glyph,
            .weather-current-airquality-glyph,
            .weather-current-precipitation-glyph {
                fill: ${_.a.ButtonText};
            }
            .sd-action::part(control),
            :host([background="dynamic"]) .sd-action::part(control):hover {
                color: ${_.a.LinkText};
            }
            .weather-degree-alternate {
                color: ${_.a.ButtonText};
            }
            .weather-degree-alternate:hover {
                background: ${_.a.Highlight};
                color: ${_.a.HighlightText};
            }
            :host([background="dynamic"]) ::slotted([slot="more-actions"]:hover),
            ::slotted([slot="more-actions"]:hover) {
                background: ${_.a.Highlight};
            }
        `)),q=F.a`
    msft-structured-data-card::part(sd-action) {
        color: #003e92;
    }
`,G=F.a`
    msft-structured-data-card::part(sd-action) {
        color: #99ebff;
    }
`,Y=F.a`
    msft-structured-data-card {
        display: flex;
        flex-direction: column;
    }

    msft-structured-data-card::part(title-link) {
        color: ${P.G.var};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 240px;
    }

    msft-structured-data-card::part(title-link)::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    msft-structured-data-card::part(sd-action) {
        background: transparent;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    msft-structured-data-card::part(sd-action):hover,
    msft-structured-data-card::part(sd-action):active,
    msft-structured-data-card::part(sd-action):${N.a} {
        text-decoration: underline;
    }

    .weather-glyph {
        margin-top: 6px;
    }

    :host([background="light"]) msft-structured-data-card {
        background: ${z.a.var};
    }

    .weather-info {
        padding: 32px 24px 6px 24px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 0;
    }

    :host([layout="small"]) .weather-location {
        margin-top: 8px;
    }

    :host([layout="small"]) .weather-pen-btn {
        margin: 8px 4px 0px;
    }

    .weather-current {
        margin-bottom: 8px;
    }

    :host([layout="small"]) .weather-current {
        margin-bottom: 32px;
    }

    :host([layout="medium"]) .weather-forecast-or-map-container {
        height: 124px;
    }

    :host([layout="large"]) .weather-forecast-or-map-container {
        height: 120px;
    }

    .weather-forecast-item-4col {
        width: 60px;
        min-width: 60px;
    }

    .weather-forecast-item-5col {
        width: 47px;
        min-width: 47px;
    }
    
    .weather-forecast-temp {
        height: 46px;
    }

    .weather-forecast-high {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        padding-top: 3px;
    }

    .weather-forecast-low {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-top: 5px;
    }

    :host([layout="medium"]) .weather-forecast-item-npro {
        height: 120px;
    }

    :host([layout="large"]) .weather-forecast-item-pro {
        height: 104px;
    }

    :host([layout="large"]) .weather-forecast-item-npro {
        height: 116px;
    }

    :host([layout="large"]) .weather-forecast-item svg,
    :host([layout="large"]) .weather-forecast-item img {
        width: 20px;
        height: 20px;
    }

    .weather-minimap-container {
        height: 100%;
        width: 100%;
    }

    .weather-large-more-container {
        height: 118px;
        position: relative;
        margin-bottom: 6px;
        z-index: 2;
        display: flex;
        justify-content: center;
    }

    ::slotted(fluent-button[slot="more-actions"]) {
        min-width: 28px;
        width: 28px;
        height: 28px;
    }
`.withBehaviors(P.G,z.a,new R.a(q,G)),Z=F.a`
    .weather-nowcast {
        text-align: left;
    }
    .weather-manual-rotate-wrapper::part(previous-flipper) {
        left: 0px;
    }
    .weather-manual-rotate-wrapper::part(next-flipper) {
        right: 0px;
    }
`,K=F.a`
    .weather-nowcast {
        text-align: right;
    }
    .weather-manual-rotate-wrapper::part(previous-flipper) {
        left: 284px;
    }
    .weather-manual-rotate-wrapper::part(next-flipper) {
        right: 284px;
    }
`,Q=F.a`
    .weather-container {
        padding: 0px;
    }

    .weather-title {
        height: 40px;
        width: 100%;
        padding: 0px 16px;
        box-sizing: border-box;
    }

    .weather-header {
        padding: 16px 0px 8px 0px;
        margin-top: 0px;
    }

    :host([background="light"]) .weather-pen-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
        margin-top: 12px;
        margin-inline: 4px 0px;
    }

    .weather-edit-btn {
        width: 24px;
        height: 24px;
        min-width: 24px;
        background-color: transparent;
        margin-inline: 4px 0px;
        margin-top: 12px;
        z-index: 2;
    }

    .weather-edit-btn svg {
        width: 14px;
        height: 14px;
    }

    .weather-forecast-or-map-container {
        height: 150px;
    }

    .weather-forecast {
        padding: 18px 16px 0px;
    }

    .weather-forecast-item-pro {
        height: 111px;
    }

    .weather-forecast-item-npro {
        height: 111px;
    }

    .weather-forecast-day {
        margin-top: 8px;
        height: 15px;
        font-family: var(--body-font);
        font-weight: 400;
    }

    .weather-forecast-item svg {
        margin: 12px 0px 8px 0px;
        width: 18px;
        height: 18px;
    }

    .weather-forecast-high {
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-bottom: 4px;
    }

    .weather-forecast-low {
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-bottom: 2px;
    }

    .weather-footer-provider {
        font-size: var(--type-ramp-minus-2-font-size);
        line-height: var(--type-ramp-minus-1-font-size);
        padding-top: 6px;
        margin-inline-end: 24px;
    }

    .weather-footer {
        padding: 5px 0px 12px 0px;
        height: 40px;
        overflow: hidden;
    }

    .weather-alertmap-container {
        margin: 0px 16px;
    }

    .weather-alertmap {
        height: 117px;
        margin: 4px 0px;
        position: relative;
    }

    .weather-severealert-info {
        display: flex;
    }

    .weather-severealert-icon {
        margin: 0px 4px;
    }

    .weather-severealert-text {
        font-size: var(--type-ramp-base-font-size);
        text-transform: uppercase;
        font-weight: 500;
    }

    .weather-nowcast-container {
        margin: 0px 16px;
    }

    .weather-nowcast-chart {
        height: 118px;
        width: 268px;
        margin-top: 3px;
    }

    .weather-nowcast {
        max-width: none;
    }

    .weather-trend-container {
        margin: 14px 24px;
    }

    .weather-auto-rotate-fstpage {
        width: 100%;
    }

    .weather-auto-rotate-sndpage {
        width: 100%;
    }

    /* styles for init rotation */
    .weather-auto-rotate > * {
        position: absolute;
        top: 101%;
        left: 0;
        animation: calc(var(--animate-interval) * 2s) autoplay_init infinite ease-in-out;
    }

    .weather-auto-rotate > *:nth-child(1) {
        animation-delay: calc((var(--start-delay) - var(--animate-interval)) * 1s);
        animation-fill-mode: forwards;
    }

    .weather-auto-rotate > *:nth-child(2) {
        animation-delay: calc(var(--start-delay) * 1s);
    }

    .weather-auto-rotate-run > * {
        animation-play-state: running;
    }

    .weather-auto-rotate-pause > * {
        animation-play-state: paused;
    }

    .weather-manual-rotate-wrapper::part(tablist) {
        position: absolute;
        top: 145px;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0px;
    }

    .weather-manual-rotate-wrapper::part(previous-flipper) {
        top: 60px;
        position: absolute;
    }

    .weather-manual-rotate-wrapper::part(next-flipper) {
        top: 60px;
        position: absolute;
    }

    ::slotted(fluent-button[slot="weather-pen-btn"]) {
        min-width: 24px;
        width: 24px;
        height: 24px;
    }
`.withBehaviors(new I.a(Z,K),Object(H.c)(F.a`
            .weather-edit svg {
                fill: ${_.a.ButtonText};
            }
        `));var X=a("pQjM");o.a,s.b;const J=c.b` ${Object(u.a)(t=>t.trendData&&t.trendData.timelines,c.b` <fluent-anchor
        class="weatherTrendContainer"
        href="${t=>t.href}"
        target="${t=>t.target}"
        tabindex="-1"
        style="width:${t=>t.trendData.width}px;height:${t=>t.trendData.height}px;"
        ${Object(m.b)(t=>t.telemetryTag)}
    >
        <svg
            role="img"
            viewBox="0 0 ${t=>t.trendData.width} ${t=>t.trendData.height}"
            width="${t=>t.trendData.width}"
            height="${t=>t.trendData.height}"
            style="width:${t=>t.trendData.width}px;height:${t=>t.trendData.height}px;"
        >
            <g class="tempLabels">
                <text
                    x="${t=>t.trendData.timelines[0].tempx}"
                    y="${t=>t.trendData.timelines[0].tempy}"
                >
                    ${t=>t.trendData.timelines[0].temperature}
                </text>
                <text
                    x="${t=>t.trendData.timelines[1].tempx}"
                    y="${t=>t.trendData.timelines[1].tempy}"
                >
                    ${t=>t.trendData.timelines[1].temperature}
                </text>
                <text
                    x="${t=>t.trendData.timelines[2].tempx}"
                    y="${t=>t.trendData.timelines[2].tempy}"
                >
                    ${t=>t.trendData.timelines[2].temperature}
                </text>
                <text
                    x="${t=>t.trendData.timelines[3].tempx}"
                    y="${t=>t.trendData.timelines[3].tempy}"
                >
                    ${t=>t.trendData.timelines[3].temperature}
                </text>
            </g>
            <g class="precipitationLabels">
                ${t=>t.trendData.timelines[0].precipitation&&t.constructPrecipitationSVG(t.trendData.timelines[0].precipitationx-10,t.trendData.precipitationy-10)}
                <text
                    x="${t=>t.trendData.timelines[0].precipitationx}"
                    y="${t=>t.trendData.precipitationy}"
                >
                    ${t=>t.trendData.timelines[0].precipitation}
                </text>
                ${t=>t.trendData.timelines[1].precipitation&&t.constructPrecipitationSVG(t.trendData.timelines[1].precipitationx-10,t.trendData.precipitationy-10)}
                <text
                    x="${t=>t.trendData.timelines[1].precipitationx}"
                    y="${t=>t.trendData.precipitationy}"
                >
                    ${t=>t.trendData.timelines[1].precipitation}
                </text>
                ${t=>t.trendData.timelines[2].precipitation&&t.constructPrecipitationSVG(t.trendData.timelines[2].precipitationx-10,t.trendData.precipitationy-10)}
                <text
                    x="${t=>t.trendData.timelines[2].precipitationx}"
                    y="${t=>t.trendData.precipitationy}"
                >
                    ${t=>t.trendData.timelines[2].precipitation}
                </text>
                ${t=>t.trendData.timelines[3].precipitation&&t.constructPrecipitationSVG(t.trendData.timelines[3].precipitationx-10,t.trendData.precipitationy-10)}
                <text
                    x="${t=>t.trendData.timelines[3].precipitationx}"
                    y="${t=>t.trendData.precipitationy}"
                >
                    ${t=>t.trendData.timelines[3].precipitation}
                </text>
            </g>
            <g class="timelineChannel">
                <!-- timeline separator -->
                <line
                    x1="${t=>t.trendData.timesepx[0]}"
                    y1="${t=>t.trendData.timesepy1}"
                    x2="${t=>t.trendData.timesepx[0]}"
                    y2="${t=>t.trendData.timesepy2}"
                    class="timelineSeparator"
                ></line>
                <line
                    x1="${t=>t.trendData.timesepx[1]}"
                    y1="${t=>t.trendData.timesepy1}"
                    x2="${t=>t.trendData.timesepx[1]}"
                    y2="${t=>t.trendData.timesepy2}"
                    class="timelineSeparator"
                ></line>
                <line
                    x1="${t=>t.trendData.timesepx[2]}"
                    y1="${t=>t.trendData.timesepy1}"
                    x2="${t=>t.trendData.timesepx[2]}"
                    y2="${t=>t.trendData.timesepy2}"
                    class="timelineSeparator"
                ></line>
            </g>
            <g class="timelineLabels">
                <text
                    x="${t=>t.trendData.timelines[0].tempx}"
                    y="${t=>t.trendData.timestampy}"
                >
                    ${t=>t.trendData.timelines[0].timestamp}
                </text>
                <text
                    x="${t=>t.trendData.timelines[1].tempx}"
                    y="${t=>t.trendData.timestampy}"
                >
                    ${t=>t.trendData.timelines[1].timestamp}
                </text>
                <text
                    x="${t=>t.trendData.timelines[2].tempx}"
                    y="${t=>t.trendData.timestampy}"
                >
                    ${t=>t.trendData.timelines[2].timestamp}
                </text>
                <text
                    x="${t=>t.trendData.timelines[3].tempx}"
                    y="${t=>t.trendData.timestampy}"
                >
                    ${t=>t.trendData.timelines[3].timestamp}
                </text>
            </g>
            <g class="tempCurve">
                <path d="${t=>t.trendData.tempCurve}" id="temp-curve" />
            </g>
        </svg>
    </fluent-anchor>`)}`;var tt=a("oePG"),et=a("QBS5");class at extends n.a{connectedCallback(){super.connectedCallback()}constructPrecipitationSVG(t,e){return c.b`<svg
            x="${t}"
            y="${e}"
            class="weather-precipitation-glyph"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.97 5.7c.19.36.28.76.28 1.17a3.06 3.06 0 01-.92 2.21 3.11 3.11 0 01-4.9-.63A3.17 3.17 0 010 6.87c0-.4.1-.8.27-1.17L3.1 0l2.87 5.7z"
            />
        </svg>`}}Object(i.e)([tt.d],at.prototype,"trendData",void 0),Object(i.e)([et.b],at.prototype,"target",void 0),Object(i.e)([et.b],at.prototype,"telemetryTag",void 0),Object(i.e)([et.b],at.prototype,"href",void 0);var it=a("zrlR");const nt=F.a`
    .weatherTrendContainer {
        border-radius: calc(--corner-radius * 3px);
        background: rgba(255, 255, 255, 0.08);
    }

    .weather-precipitation-glyph {
        fill: currentcolor;
    }

    .tempLabels,
    .timelineLabels,
    .precipitationLabels {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .tempLabels,
    .timelineLabels {
        text-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
        text-anchor: middle;
    }

    .timelineSeparator {
        stroke: currentcolor;
        stroke-width: 1;
    }

    .tempCurve {
        fill: rgba(255, 255, 255, 0.3);
        stroke: rgb(98, 178, 239);
        stroke-width: 1;
    }

    ::slotted(fluent-anchor:hover),
    ::slotted(fluent-anchor:active),
    ::slotted(fluent-anchor:${N.a}) {
        background: ${P.v.var};
    }
`.withBehaviors(P.v,Object(it.a)(F.a`
        .tempCurve {
            fill: rgba(255, 255, 255, 0.03);
        }
    `),Object(H.c)(F.a`
        :host {
            forced-color-adjust: auto;
        }

        .timelineLabels {
            fill: ${_.a.ButtonText};
        }

        .weather-precipitation-glyph {
            fill: ${_.a.ButtonText};
        }
    `));let rt=class extends at{};rt=Object(i.e)([Object(n.b)({name:"msft-weather-trend",template:J,styles:[nt,r.b],shadowOptions:{delegatesFocus:!0}})],rt),o.a,s.b,X.a,p.a,h.a;c.b`
    <svg
        slot="title-icon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        class="weather-glyph"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.66789 3.33798C9.78022 3.33798 10.9785 4.73615 11.1528 6.42475H11.2061C12.5655 6.42475 13.6675 7.52388 13.6675 8.87974C13.6675 10.2356 12.5655 11.3347 11.2061 11.3347H4.12961C2.77023 11.3347 1.66823 10.2356 1.66823 8.87974C1.66823 7.52388 2.77023 6.42475 4.12963 6.42475H4.18293C4.35822 4.72508 5.55551 3.33798 7.66789 3.33798ZM1.91161 6.10828C2.00848 6.34214 1.91475 6.60741 1.70195 6.73135L1.64101 6.76154L1.0235 7.01734C0.768381 7.12301 0.475895 7.00188 0.370221 6.74675C0.273355 6.51288 0.367081 6.24761 0.579881 6.12361L0.640821 6.09348L1.25833 5.83768C1.51345 5.73201 1.80593 5.85315 1.91161 6.10828ZM6.23629 2.88613L6.12189 2.92452C4.93229 3.34477 4.08029 4.26148 3.71193 5.47314L3.66471 5.64021L3.62624 5.79875L3.48885 5.82441C3.08333 5.90961 2.70651 6.07408 2.37549 6.30101C2.31628 6.20094 2.26348 6.09461 2.21743 5.98341C1.66207 4.64266 2.29877 3.10554 3.63954 2.55017C4.53441 2.1795 5.51673 2.33985 6.23629 2.88613ZM0.960448 2.90685L1.03078 2.93012L1.64829 3.1859C1.90341 3.29158 2.02457 3.58406 1.91889 3.83919C1.82282 4.07111 1.57237 4.19232 1.33595 4.13304L1.26561 4.10978L0.648101 3.854C0.392975 3.74832 0.271828 3.45584 0.377501 3.20072C0.473568 2.96879 0.724028 2.84758 0.960448 2.90685ZM3.50393 0.915905L3.53411 0.976838L3.78989 1.59435C3.89557 1.84947 3.77441 2.14196 3.51929 2.24763C3.28543 2.3445 3.02017 2.25077 2.89619 2.03797L2.86601 1.97703L2.61023 1.35952C2.50455 1.1044 2.62571 0.811918 2.88083 0.706245C3.11469 0.609371 3.37995 0.703098 3.50393 0.915905ZM6.40615 0.703564C6.63809 0.799638 6.75929 1.05009 6.70002 1.28651L6.67675 1.35685L6.42095 1.97436C6.31529 2.22948 6.02282 2.35063 5.76769 2.24496C5.53576 2.14889 5.41455 1.89843 5.47383 1.66201L5.49709 1.59168L5.75289 0.974164C5.85855 0.719044 6.15102 0.597891 6.40615 0.703564Z"
            fill="#2373C3"
        />
    </svg>
`;const ot=c.b`
    <msft-weather-trend
        class="weather-trend-container"
        :trendData="${t=>t.weatherData.trendData}"
        telemetryTag="${t=>t.trendTelemetryTag}"
        href="${t=>t.weatherData.link}"
        target="${t=>t.target}"
    />
`,st=c.b`
    <msft-weather-minimap
        class="weather-minimap-container"
        :minimapData="${t=>t.weatherData.minimap}"
        minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
        defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
        target="${t=>t.target}"
    />
`,lt=c.b`
    <msft-weather-nowcast
        class="weather-nowcast-container"
        :nowcastData="${t=>t.weatherData.nowcast}"
        telemetryTag="${t=>t.nowcastTelemetryTags}"
        href="${t=>t.weatherData.link}"
        target="${t=>t.target}"
        background="${t=>t.background}"
    />
`,ct=c.b`
    ${Object(u.a)(t=>t.weatherData,c.b`
            <msft-structured-data-card
                target=${t=>t.target}
                :headerTelemetryTag=${t=>t.headerTelemetryTag}
                :seeMoreTelemetryTag=${t=>t.seeForecastTelemetryTag}
                :data=${t=>t.weatherData}
                tab-index="-1"
            >
                <slot name="title-icon" slot="title-icon"></slot>
                <slot name="more-actions" slot="more-actions"></slot>
                <div class="weather-info">
                    ${k}
                    <a
                        class="weather-current"
                        part="weather-current"
                        href="${t=>t.weatherData.link}"
                        target=${t=>t.target}
                        ${Object(m.b)(t=>t.weaConditionTelemetryTag)}
                    >
                        <div
                            class="weather-current-image"
                            part="weather-current-image"
                            title="${t=>t.weatherData.skycode}"
                        >
                            ${t=>t.weatherData.skycodeIcon}
                        </div>
                        <div
                            class="weather-current-temperature"
                            part="weather-current-temperature"
                        >
                            ${t=>t.weatherData.temperature}
                            <div
                                class="weather-degree-switch"
                                part="weather-degree-switch"
                            >
                                <span
                                    class="weather-degree-current"
                                    part="weather-degree-current"
                                >
                                    ${t=>t.weatherData.unitSetting}
                                </span>
                                <fluent-button
                                    class="weather-degree-alternate"
                                    part="weather-degree-alternate"
                                    tabindex="0"
                                    aria-label=${t=>t.switchUnitLabel}
                                    title=${t=>t.switchUnitLabel}
                                    @click="${(t,e)=>t.switchUnit()}"
                                    ${Object(m.b)(t=>t.unitSwitchTelemetryTag)}
                                >
                                    ${t=>t.weatherData.unitAlternate}
                                </fluent-button>
                            </div>
                        </div>
                        ${Object(u.a)(t=>t.weatherData.alertEvent,C)}
                        ${Object(u.a)(t=>t.hasNowcast(),$)}
                        ${Object(u.a)(t=>!t.weatherData.alertEvent&&!t.hasNowcast(),D)}
                    </a>
                    ${Object(u.a)(t=>"medium"===t.layout,c.b`
                            <div class="weather-forecast-or-map-container">
                                ${Object(u.a)(t=>t.weatherData.minimap,st)}
                                ${Object(u.a)(t=>!t.weatherData.minimap&&t.weatherData.nowcast,lt)}
                                ${Object(u.a)(t=>!t.weatherData.minimap&&!t.weatherData.nowcast&&t.weatherData.forecastData,S)}
                            </div>
                        `)}
                    ${Object(u.a)(t=>"large"===t.layout,c.b`
                            ${Object(u.a)(t=>t.weatherData.minimap||t.weatherData.nowcast,c.b`
                                    <div class="weather-large-more-container">
                                        ${Object(u.a)(t=>t.weatherData.minimap,st)}
                                        ${Object(u.a)(t=>!t.weatherData.minimap&&t.weatherData.nowcast,lt)}
                                    </div>
                                `)}
                            <div class="weather-forecast-or-map-container">
                                ${S}
                            </div>
                            ${Object(u.a)(t=>!t.weatherData.minimap&&!t.weatherData.nowcast,c.b`
                                    <div class="weather-large-more-container">
                                        ${Object(u.a)(t=>t.weatherData.trendData,ot)}
                                    </div>
                                `)}
                        `)}
                </div>
                <slot name="footer-start" slot="footer-start"></slot>
                <slot name="footer-end" slot="footer-end"></slot>
            </msft-structured-data-card>
        `)}
`;var ut=a("QwOJ"),dt=a("zmqX"),ht=a("DpmN"),pt=a("lOJQ");o.a,s.b,p.a,h.a,ut.a,dt.a,ht.a,pt.a;const gt=c.b`
    <div class="weather-severealert-info" part="weather-severealert-info">
        <div class="weather-severealert-icon" part="weather-severealert-icon">
            ${t=>t.weatherData.alertIcon}
        </div>
            <span class="weather-severealert-text">
                ${t=>t.weatherData.alertEvent} ${t=>t.weatherData.alertSig}
            </span>
        </div>
    </div>
`,mt=c.b`
    <div class="weather-alertmap-container">
        ${gt}
        <div class="weather-alertmap">
            <msft-weather-minimap
                :minimapData="${t=>t.weatherData.minimap}"
                minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
                defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
                target="${t=>t.target}"
            />
        </div>
    </div>
`,ft=c.b`
    <div class="weather-nowcast-container">
        ${$}
        <div class="weather-nowcast-chart">
            <msft-weather-nowcast
                :nowcastData="${t=>t.weatherData.nowcast}"
                telemetryTag="${t=>t.nowcastTelemetryTags}"
                href="${t=>t.weatherData.link}"
                target="${t=>t.target}"
                background="${t=>t.background}"
            />
        </div>
    </div>
`,vt=c.b`
    <div class="weather-trend-container">
        <msft-weather-trend
            :trendData="${t=>t.weatherData.trendData}"
            telemetryTag="${t=>t.trendTelemetryTag}"
            href="${t=>t.weatherData.link}"
            target="${t=>t.target}"
        />
    </div>
`,bt=c.b`
    <div class="weather-footer" part="weather-footer">
        <fluent-anchor
            class="sd-action"
            part="sd-action"
            href="${t=>t.weatherData.link}"
            target=${t=>t.target}
            ${Object(m.b)(t=>t.seeForecastTelemetryTag)}
        >
            ${t=>t.weatherData.footerContent}
        </fluent-anchor>
    </div>
`,yt=c.b`
    ${Object(u.a)(t=>!(t.hasSevereWeather()&&t.weatherData.alertEvent)&&!(t.weatherData.nowcast&&t.hasNowcast())&&!!t.weatherData.forecastData&&t.weatherData.forecastData.length,S)}
    ${Object(u.a)(t=>t.hasSevereWeather()&&t.weatherData.alertEvent,mt)}
    ${Object(u.a)(t=>!(t.hasSevereWeather()&&t.weatherData.alertEvent)&&t.weatherData.nowcast&&t.hasNowcast(),ft)}
`,wt={dailyforecast:S,hourlyforecast:vt,severeweather:mt,nowcast:ft},xt=c.b`
    <div
        class="weather-auto-rotate ${t=>t.getHoverRotationStyle()}"
        style="
        --animate-interval: ${t=>{var e;return(null===(e=t.hoverCardRotateConfig)||void 0===e?void 0:e.rotateInterval)||"5"}};
        --start-delay: ${t=>{var e;return(null===(e=t.hoverCardRotateConfig)||void 0===e?void 0:e.startDelay)||"3"}};
        "
    >
        <div
            class="weather-auto-rotate-fstpage"
            @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
            @focus="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @focusout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
        >
            ${t=>t.hoverCardRotateConfig&&t.hoverCardRotateConfig.rotateContent.length>1?wt[t.hoverCardRotateConfig.rotateContent[0]]:null}
        </div>
        <div
            class="weather-auto-rotate-sndpage"
            @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
            @focus="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @focusout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
        >
            ${t=>t.hoverCardRotateConfig&&t.hoverCardRotateConfig.rotateContent.length>1?wt[t.hoverCardRotateConfig.rotateContent[1]]:null}
        </div>
    </div>
`,Ct=c.b`
    <div class="weather-manual-rotate">
        <msft-carousel-card-wrapper
            class="weather-manual-rotate-wrapper"
            part="weather-manual-rotate-wrapper"
            :nextFlipperTelemetryTag=${t=>t.greetingNextFlipperTelemetryTag}
            :previousFlipperTelemetryTag=${t=>t.greetingPreviousFlipperTelemetryTag}
        >
            <msft-carousel-card-panel
                class="carousel-card-panel"
                part="carousel-card-panel"
            >
                ${t=>t.hoverCardRotateConfig?wt[t.hoverCardRotateConfig.rotateContent[0]]:null}
            </msft-carousel-card-panel>
            <msft-carousel-card-panel
                class="carousel-card-panel"
                part="carousel-card-panel"
            >
                ${t=>t.hoverCardRotateConfig?wt[t.hoverCardRotateConfig.rotateContent[1]]:null}
            </msft-carousel-card-panel>
            <msft-carousel-card-sequence-indicator
                class="sequence-indicator"
                part="sequence-indicator"
                id="1"
            >
            </msft-carousel-card-sequence-indicator>
            <msft-carousel-card-sequence-indicator
                class="sequence-indicator"
                part="sequence-indicator"
                id="2"
            >
            </msft-carousel-card-sequence-indicator>
        </msft-carousel-card-wrapper>
    </div>
`,$t=c.b`
    ${Object(u.a)(t=>t.weatherData,c.b`
            <div
                class="weather-container"
                part="weather-container"
                style="${t=>"dynamic"==t.background&&t.weatherData.skycodeBackground?`background: ${t.weatherData.skycodeBackground};`:void 0}"
            >
                <div class="weather-title" part="weather-title">
                    ${Object(u.a)(t=>!(t.editLocationTip&&t.weatherData.editLocationButtonTemplate),c.b` ${O} `)}
                    ${Object(u.a)(t=>t.editLocationTip&&t.weatherData.editLocationButtonTemplate,L)}
                </div>
                <div class="weather-forecast-or-map-container">
                    ${Object(u.a)(t=>!t.hoverCardRotateConfig||!!t.hoverCardRotateConfig&&"static"==t.hoverCardRotateConfig.rotateMode,yt)}
                    ${Object(u.a)(t=>!!t.hoverCardRotateConfig&&"autoRotate"==t.hoverCardRotateConfig.rotateMode,xt)}
                    ${Object(u.a)(t=>!!t.hoverCardRotateConfig&&"manualRotate"==t.hoverCardRotateConfig.rotateMode,Ct)}
                </div>
                ${bt}
            </div>
        `)}
`;let Tt=class extends l.a{};Tt=Object(i.e)([Object(n.b)({name:"msft-weather-card",template:A,styles:[W,r.b],shadowOptions:{delegatesFocus:!0}})],Tt);let Dt=class extends l.a{};Dt=Object(i.e)([Object(n.b)({name:"msft-weather-widget",template:ct,styles:[W,r.b,Y],shadowOptions:{delegatesFocus:!0}})],Dt);let St=class extends l.a{};St=Object(i.e)([Object(n.b)({name:"msft-weather-card-greeting",template:$t,styles:[W,r.b,Q],shadowOptions:{delegatesFocus:!0}})],St)},KdQ8:function(t,e,a){"use strict";var i=Math.PI,n=2*i,r=n-1e-6;function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new o}o.prototype=s.prototype={constructor:o,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,a,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+a)+","+(this._y1=+i)},bezierCurveTo:function(t,e,a,i,n,r){this._+="C"+ +t+","+ +e+","+ +a+","+ +i+","+(this._x1=+n)+","+(this._y1=+r)},arcTo:function(t,e,a,n,r){t=+t,e=+e,a=+a,n=+n,r=+r;var o=this._x1,s=this._y1,l=a-t,c=n-e,u=o-t,d=s-e,h=u*u+d*d;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(h>1e-6)if(Math.abs(d*l-c*u)>1e-6&&r){var p=a-o,g=n-s,m=l*l+c*c,f=p*p+g*g,v=Math.sqrt(m),b=Math.sqrt(h),y=r*Math.tan((i-Math.acos((m+h-f)/(2*v*b)))/2),w=y/b,x=y/v;Math.abs(w-1)>1e-6&&(this._+="L"+(t+w*u)+","+(e+w*d)),this._+="A"+r+","+r+",0,0,"+ +(d*p>u*g)+","+(this._x1=t+x*l)+","+(this._y1=e+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,a,o,s,l){t=+t,e=+e,l=!!l;var c=(a=+a)*Math.cos(o),u=a*Math.sin(o),d=t+c,h=e+u,p=1^l,g=l?o-s:s-o;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+d+","+h:(Math.abs(this._x1-d)>1e-6||Math.abs(this._y1-h)>1e-6)&&(this._+="L"+d+","+h),a&&(g<0&&(g=g%n+n),g>r?this._+="A"+a+","+a+",0,1,"+p+","+(t-c)+","+(e-u)+"A"+a+","+a+",0,1,"+p+","+(this._x1=d)+","+(this._y1=h):g>1e-6&&(this._+="A"+a+","+a+",0,"+ +(g>=i)+","+p+","+(this._x1=t+a*Math.cos(s))+","+(this._y1=e+a*Math.sin(s))))},rect:function(t,e,a,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +a+"v"+ +i+"h"+-a+"Z"},toString:function(){return this._}};var l=s,c=function(t){return function(){return t}};function u(t){this._context=t}u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};var d=function(t){return new u(t)};function h(t){return t[0]}function p(t){return t[1]}e.a=function(){var t=h,e=null,a=c(0),i=p,n=c(!0),r=null,o=d,s=null;function u(c){var u,d,h,p,g,m=c.length,f=!1,v=new Array(m),b=new Array(m);for(null==r&&(s=o(g=l())),u=0;u<=m;++u){if(!(u<m&&n(p=c[u],u,c))===f)if(f=!f)d=u,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),h=u-1;h>=d;--h)s.point(v[h],b[h]);s.lineEnd(),s.areaEnd()}f&&(v[u]=+t(p,u,c),b[u]=+a(p,u,c),s.point(e?+e(p,u,c):v[u],i?+i(p,u,c):b[u]))}if(g)return s=null,g+""||null}function g(){return function(){var t=h,e=p,a=c(!0),i=null,n=d,r=null;function o(o){var s,c,u,d=o.length,h=!1;for(null==i&&(r=n(u=l())),s=0;s<=d;++s)!(s<d&&a(c=o[s],s,o))===h&&((h=!h)?r.lineStart():r.lineEnd()),h&&r.point(+t(c,s,o),+e(c,s,o));if(u)return r=null,u+""||null}return o.x=function(e){return arguments.length?(t="function"==typeof e?e:c(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:c(+t),o):e},o.defined=function(t){return arguments.length?(a="function"==typeof t?t:c(!!t),o):a},o.curve=function(t){return arguments.length?(n=t,null!=i&&(r=n(i)),o):n},o.context=function(t){return arguments.length?(null==t?i=r=null:r=n(i=t),o):i},o}().defined(n).curve(o).context(r)}return u.x=function(a){return arguments.length?(t="function"==typeof a?a:c(+a),e=null,u):t},u.x0=function(e){return arguments.length?(t="function"==typeof e?e:c(+e),u):t},u.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:c(+t),u):e},u.y=function(t){return arguments.length?(a="function"==typeof t?t:c(+t),i=null,u):a},u.y0=function(t){return arguments.length?(a="function"==typeof t?t:c(+t),u):a},u.y1=function(t){return arguments.length?(i=null==t?null:"function"==typeof t?t:c(+t),u):i},u.lineX0=u.lineY0=function(){return g().x(t).y(a)},u.lineY1=function(){return g().x(t).y(i)},u.lineX1=function(){return g().x(e).y(a)},u.defined=function(t){return arguments.length?(n="function"==typeof t?t:c(!!t),u):n},u.curve=function(t){return arguments.length?(o=t,null!=r&&(s=o(r)),u):o},u.context=function(t){return arguments.length?(null==t?r=s=null:s=o(r=t),u):r},u}},Lc5y:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var i=a("ARa2"),n=a("9ZcS"),r=a("YBl9"),o=a("swXE"),s=a("oePG"),l=a("mObi");const c=Object(l.a)(t=>{let e=Object(r.d)(t);if(null!==e)return e;if(e=Object(r.e)(t),null!==e)return e;throw new Error(t+' cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"')});class u{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}bind(t){const e=n.a.findProvider(t);null!==e&&(e.$fastController&&e.$fastController.isConnected?this.attach(t,e):(Array.isArray(e.disconnectedRegistry)||(e.disconnectedRegistry=[]),e.disconnectedRegistry.push(this.attach.bind(this,t))))}unbind(t){const e=this.cache.get(t);e&&s.b.getNotifier(e[0].designSystem).unsubscribe(e[1])}attach(t,e){const a=new d(this.light,this.dark,t);s.b.getNotifier(e.designSystem).subscribe(a,"backgroundColor"),a.attach(e.designSystem.backgroundColor),this.cache.set(t,[e,a])}}class d{constructor(t,e,a){this.light=t,this.dark=e,this.source=a,this.attached=null}handleChange(t){this.attach(t.backgroundColor)}attach(t){const e=(a=t,Object(o.k)(c(a))<=i.a.DarkMode?"dark":"light");var a;this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},LshR:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"h",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"j",(function(){return h})),a.d(e,"o",(function(){return p})),a.d(e,"n",(function(){return g})),a.d(e,"m",(function(){return m})),a.d(e,"l",(function(){return f})),a.d(e,"k",(function(){return v}));const i=new Map([["Y","#f1c40e"],["O","#e67f22"],["R","#e74c3b"]]),n="#f1c40e",r="miniMapAnimationPattern",o={Left:15,Right:10},s=6,l=20,c=6,u="tooltipSevere",d={Temperature:"temperature",Precipitation:"precipitation",Radar:"radar",Wind:"wind",Cloud:"cloud",Winterstorm:"winterstorm",Wildfire:"wildfire",Severeweather:"severeweather",Hurricane:"hurricane",AirQuality:"airqualitystation"},h="AnTcaqBi2ypp0xI-OZNi4W_ik2KhjgpqioTAtXLC8GzkMBQRMlyxvxyTnd5b73im",p=600,g=268,m=136,f=268,v=117},Ni7E:function(t,e,a){var i;t.exports=(i=i||function(t,e){var a=Object.create||function(){function t(){}return function(e){var a;return t.prototype=e,a=new t,t.prototype=null,a}}(),i={},n=i.lib={},r=n.Base={extend:function(t){var e=a(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},o=n.WordArray=r.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var e=this.words,a=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var r=0;r<n;r++){var o=a[r>>>2]>>>24-r%4*8&255;e[i+r>>>2]|=o<<24-(i+r)%4*8}else for(r=0;r<n;r+=4)e[i+r>>>2]=a[r>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,a=this.sigBytes;e[a>>>2]&=4294967295<<32-a%4*8,e.length=t.ceil(a/4)},clone:function(){var t=r.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var a,i=[],n=function(e){e=e;var a=987654321,i=4294967295;return function(){var n=((a=36969*(65535&a)+(a>>16)&i)<<16)+(e=18e3*(65535&e)+(e>>16)&i)&i;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}},r=0;r<e;r+=4){var s=n(4294967296*(a||t.random()));a=987654071*s(),i.push(4294967296*s()|0)}return new o.init(i,e)}}),s=i.enc={},l=s.Hex={stringify:function(t){for(var e=t.words,a=t.sigBytes,i=[],n=0;n<a;n++){var r=e[n>>>2]>>>24-n%4*8&255;i.push((r>>>4).toString(16)),i.push((15&r).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,a=[],i=0;i<e;i+=2)a[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new o.init(a,e/2)}},c=s.Latin1={stringify:function(t){for(var e=t.words,a=t.sigBytes,i=[],n=0;n<a;n++){var r=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(r))}return i.join("")},parse:function(t){for(var e=t.length,a=[],i=0;i<e;i++)a[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new o.init(a,e)}},u=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},d=n.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var a=this._data,i=a.words,n=a.sigBytes,r=this.blockSize,s=n/(4*r),l=(s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0))*r,c=t.min(4*l,n);if(l){for(var u=0;u<l;u+=r)this._doProcessBlock(i,u);var d=i.splice(0,l);a.sigBytes-=c}return new o.init(d,c)},clone:function(){var t=r.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=d.extend({cfg:r.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,a){return new t.init(a).finalize(e)}},_createHmacHelper:function(t){return function(e,a){return new h.HMAC.init(t,a).finalize(e)}}}),i.algo={});return i}(Math),i)},Oa3u:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return u}));var i=a("m2Vd");const n=new RegExp("\\:([\\d]{2})");function r(){return new Date}function o(t){return(r().getTime()-t.getTime())/1e3}function s(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function l(t,e){return new Date(t.valueOf()+60*e*60*1e3)}function c(t,e){const a=parseInt(e),i=parseInt(n.exec(e)[1]),r=a<0?-1:1,o=new Date(t.getTime()+60*(60*a+r*i)*1e3),s=("0"+Math.abs(a)).substr(-2)+":"+("0"+Math.abs(i)).substr(-2);return o.toISOString().replace("Z",(r<0?"-":"+")+s)}function u(t){const e=o(t),a=function(){const t=r();return t.setHours(0,0,0,0),t}(),n=s(a,-1),l=s(a,-6),c=function(){const t=r();return new Date(t.getFullYear(),0,0,0,0,0,0)}();return e>=-3300&&e<-60?i.a.InMinutes:e<0?i.a.None:e<120?i.a.JustNow:e<3600?i.a.LessThanOneHour:t>=a?i.a.Today:t>=n?i.a.Yesterday:t>=l?i.a.ThisWeek:t>=c?i.a.ThisYear:i.a.FullDate}},PXG9:function(t,e,a){"use strict";e.a=function(t){return function(){return t}}},PgCS:function(t,e,a){"use strict";a.r(e),a.d(e,"abbreviateUSState",(function(){return n})),a.d(e,"toCamelCase",(function(){return r}));const i={Alabama:"AL",Alaska:"AK",Arizona:"AZ",Arkansas:"AR",California:"CA",Colorado:"CO",Connecticut:"CT",Delaware:"DE",Florida:"FL",Georgia:"GA",Hawaii:"HI",Idaho:"ID",Illinois:"IL",Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Maine:"ME",Maryland:"MD",Massachusetts:"MA",Michigan:"MI",Minnesota:"MN",Mississippi:"MS",Missouri:"MO",Montana:"MT",Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",Vermont:"VT",Virginia:"VA",Washington:"WA","West Virginia":"WV",Wisconsin:"WI",Wyoming:"WY","American Samoa":"AS","District of Columbia":"DC",Guam:"GU","Marshall Islands":"MH","Northern Mariana Island":"MP","Puerto Rico":"PR","Virgin Islands":"VI"};function n(t,e,a){return"US"!==a&&"us"!==a||"en-us"!==e?t:i[t]||t}function r(t,e){return t&&JSON.parse(JSON.stringify(t,(function(t,a){if(a&&"object"==typeof a&&!Array.isArray(a)){const t={};for(const i in a)if(Object.hasOwnProperty.call(a,i)){t[e&&e[i]||i&&i.charAt(0).toLowerCase()+i.substring(1)]=a[i]}return t}return a})))}},PvqL:function(t,e,a){"use strict";a.d(e,"a",(function(){return y})),a.d(e,"b",(function(){return $}));var i=function(t,e,a){t.prototype=e.prototype=a,a.constructor=t};function n(t,e){var a=Object.create(t.prototype);for(var i in e)a[i]=e[i];return a}function r(){}var o="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",c=/^#([0-9a-f]{3,8})$/,u=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),d=new RegExp("^rgb\\("+[l,l,l]+"\\)$"),h=new RegExp("^rgba\\("+[o,o,o,s]+"\\)$"),p=new RegExp("^rgba\\("+[l,l,l,s]+"\\)$"),g=new RegExp("^hsl\\("+[s,l,l]+"\\)$"),m=new RegExp("^hsla\\("+[s,l,l,s]+"\\)$"),f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(){return this.rgb().formatHex()}function b(){return this.rgb().formatRgb()}function y(t){var e,a;return t=(t+"").trim().toLowerCase(),(e=c.exec(t))?(a=e[1].length,e=parseInt(e[1],16),6===a?w(e):3===a?new T(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===a?new T(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===a?new T(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=u.exec(t))?new T(e[1],e[2],e[3],1):(e=d.exec(t))?new T(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=h.exec(t))?x(e[1],e[2],e[3],e[4]):(e=p.exec(t))?x(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(t))?L(e[1],e[2]/100,e[3]/100,1):(e=m.exec(t))?L(e[1],e[2]/100,e[3]/100,e[4]):f.hasOwnProperty(t)?w(f[t]):"transparent"===t?new T(NaN,NaN,NaN,0):null}function w(t){return new T(t>>16&255,t>>8&255,255&t,1)}function x(t,e,a,i){return i<=0&&(t=e=a=NaN),new T(t,e,a,i)}function C(t){return t instanceof r||(t=y(t)),t?new T((t=t.rgb()).r,t.g,t.b,t.opacity):new T}function $(t,e,a,i){return 1===arguments.length?C(t):new T(t,e,a,null==i?1:i)}function T(t,e,a,i){this.r=+t,this.g=+e,this.b=+a,this.opacity=+i}function D(){return"#"+O(this.r)+O(this.g)+O(this.b)}function S(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function O(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function L(t,e,a,i){return i<=0?t=e=a=NaN:a<=0||a>=1?t=e=NaN:e<=0&&(t=NaN),new k(t,e,a,i)}function M(t){if(t instanceof k)return new k(t.h,t.s,t.l,t.opacity);if(t instanceof r||(t=y(t)),!t)return new k;if(t instanceof k)return t;var e=(t=t.rgb()).r/255,a=t.g/255,i=t.b/255,n=Math.min(e,a,i),o=Math.max(e,a,i),s=NaN,l=o-n,c=(o+n)/2;return l?(s=e===o?(a-i)/l+6*(a<i):a===o?(i-e)/l+2:(e-a)/l+4,l/=c<.5?o+n:2-o-n,s*=60):l=c>0&&c<1?0:s,new k(s,l,c,t.opacity)}function k(t,e,a,i){this.h=+t,this.s=+e,this.l=+a,this.opacity=+i}function A(t,e,a){return 255*(t<60?e+(a-e)*t/60:t<180?a:t<240?e+(a-e)*(240-t)/60:e)}i(r,y,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:v,formatHex:v,formatHsl:function(){return M(this).formatHsl()},formatRgb:b,toString:b}),i(T,$,n(r,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:D,formatHex:D,formatRgb:S,toString:S})),i(k,(function(t,e,a,i){return 1===arguments.length?M(t):new k(t,e,a,null==i?1:i)}),n(r,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new k(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new k(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,a=this.l,i=a+(a<.5?a:1-a)*e,n=2*a-i;return new T(A(t>=240?t-240:t+120,n,i),A(t,n,i),A(t<120?t+240:t-120,n,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))},QwOJ:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var i=a("D57K"),n=a("P4Ao"),r=a("oePG"),o=a("Yn5/");Object(i.e)([r.d],class{}.prototype,"tabContent",void 0);class s extends o.a{contentDataChanged(){this.setTitles(this.activeTabIndex)}changeHandler(t){if(t.defaultPrevented)return!1;if(t.target instanceof o.a){const e=t.target;return this.setTitles(e.activeTabIndex),!1}return!0}setTitles(t){const e=this.contentData.length,a=0===t?e-1:t-1,i=e-1===t?0:t+1;this.nextFlipperTitle=this.contentData[i].ariaLabel,this.previousFlipperTitle=this.contentData[a].ariaLabel}}Object(i.e)([r.d],s.prototype,"contentData",void 0),Object(i.e)([r.d],s.prototype,"nextFlipperTitle",void 0),Object(i.e)([r.d],s.prototype,"previousFlipperTitle",void 0);var l=a("6BDD"),c=a("UNqU"),u=a("zmqX"),d=a("DpmN"),h=a("lOJQ");u.a,d.a,h.a;const p=l.b`<msft-carousel-card-sequence-indicator
    class="sequence-indicator"
    part="sequence-indicator"
    aria-label=${(t,e)=>t.ariaLabel}
    id=${(t,e)=>t.tabId}
></msft-carousel-card-sequence-indicator>`,g=l.b`<msft-carousel-card-panel
    class="carousel-card-panel"
    part="carousel-card-panel"
    id=${(t,e)=>t.tabPanelId}
    >${(t,e)=>t.tabContent}</msft-carousel-card-panel
>`,m=l.b`
    <msft-carousel-card-wrapper
        layout="${t=>t.layout}"
        ?auto-scroll=${t=>t.autoScroll}
        ?activeindicator=${t=>t.activeindicator}
        auto-scroll-interval-ms=${t=>t.autoScrollIntervalMs}
        :nextFlipperTelemetryTag=${t=>t.nextFlipperTelemetryTag}
        :previousFlipperTelemetryTag=${t=>t.previousFlipperTelemetryTag}
        previous-flipper-title=${t=>t.previousFlipperTitle}
        next-flipper-title=${t=>t.nextFlipperTitle}
        :direction=${t=>t.direction}
        orientation=${t=>t.orientation}
        activeid=${t=>t.activeid}
        @change=${(t,e)=>t.changeHandler(e.event)}
    >
        ${Object(c.c)(t=>t.contentData,g)}
        ${Object(c.c)(t=>t.contentData,p)}
    </msft-carousel-card-wrapper>
`;const f=a("4X57").a``;let v=class extends s{};v=Object(i.e)([Object(n.b)({name:"msft-carousel-card",template:m,styles:f})],v)},S35a:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var i=a("D57K"),n=a("QBS5"),r=a("P4Ao"),o=a("xQNS"),s=a("6BDD"),l=a("+53S"),c=a("UauI"),u=a("C5kU");const d=s.b`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
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
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Object(l.b)("control")}
    >
        ${u.c}
        <span class="content" part="content">
            <slot ${Object(c.b)("defaultSlottedContent")}></slot>
        </span>
        ${u.b}
    </a>
`;var h=a("4X57"),p=a("vHfj"),g=a("57ob");const m=h.a`
  ${p.b}
`.withBehaviors(Object(g.a)("accent",p.a),Object(g.a)("hypertext",p.c),Object(g.a)("lightweight",p.d),Object(g.a)("outline",p.e),Object(g.a)("stealth",p.f));let f=class extends o.a{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(t=>t.nodeType===Node.ELEMENT_NODE);1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};Object(i.e)([n.b],f.prototype,"appearance",void 0),f=Object(i.e)([Object(r.b)({name:"fluent-anchor",template:d,styles:m,shadowOptions:{delegatesFocus:!0,mode:"closed"}})],f)},Sdge:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var i,n=a("D57K"),r=a("P4Ao"),o=a("QBS5");!function(t){t.next="next",t.previous="previous"}(i||(i={}));class s extends r.a{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=i.next}}Object(n.e)([Object(o.b)({mode:"boolean"})],s.prototype,"disabled",void 0),Object(n.e)([Object(o.b)({attribute:"aria-hidden",converter:o.c})],s.prototype,"hiddenFromAT",void 0),Object(n.e)([o.b],s.prototype,"direction",void 0);var l=a("6BDD"),c=a("6vBc");const u=l.b`
    <template
        role="button"
        aria-disabled="${t=>!!t.disabled||void 0}"
        tabindex="${t=>t.hiddenFromAT?-1:0}"
        class="${t=>t.direction} ${t=>t.disabled?"disabled":""}"
    >
        ${Object(c.a)(t=>t.direction===i.next,l.b`
                <span part="next" class="next">
                    <slot name="next">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
                            />
                        </svg>
                    </slot>
                </span>
            `)}
        ${Object(c.a)(t=>t.direction===i.previous,l.b`
                <span part="previous" class="previous">
                    <slot name="previous">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
                            />
                        </svg>
                    </slot>
                </span>
            `)}
    </template>
`;var d=a("4X57"),h=a("xY0q"),p=a("2i1/"),g=a("wHpb"),m=a("oqLQ"),f=a("j9Xn"),v=a("QkLF"),b=a("kL0l");const y=d.a`
    ${Object(h.a)("inline-flex")} :host {
        width: calc(${v.a} * 1px);
        height: calc(${v.a} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${b.G.var};
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
    }

    :host::before {
        content: "";
        opacity: 0.8;
        background: ${b.w.var};
        border: calc(var(--outline-width) * 1px) solid ${b.P.var};
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        ${""} width: 16px;
        height: 16px;
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
        cursor: ${p.a};
    }

    :host(:hover) {
        cursor: pointer;
    }

    :host(:hover)::before {
        background: ${b.v.var};
        border-color: ${b.O.var};
    }

    :host(:${g.a}) {
        outline: none;
    }

    :host(:${g.a})::before {
        box-shadow: 0 0 0 1px ${b.z.var} inset;
        border-color: ${b.z.var};
    }

    :host(:active)::before {
        background: ${b.u.var};
        border-color: ${b.M.var};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors(b.u,b.v,b.w,b.z,b.G,b.M,b.O,b.P,Object(m.c)(d.a`
            :host {
                background: ${f.a.Canvas};
            }
            :host .next,
            :host .previous {
                color: ${f.a.ButtonText};
                fill: currentcolor;
            }
            :host::before {
                background: ${f.a.Canvas};
                border-color: ${f.a.ButtonText};
            }
            :host(:hover)::before {
                forced-color-adjust: none;
                background: ${f.a.Highlight};
                border-color: ${f.a.ButtonText};
                opacity: 1;
            }
            :host(:hover) .next,
            :host(:hover) .previous {
                forced-color-adjust: none;
                color: ${f.a.HighlightText};
                fill: currentcolor;
            }
            :host(.disabled) {
                opacity: 1;
            }
            :host(.disabled)::before,
            :host(.disabled:hover)::before,
            :host(.disabled) .next,
            :host(.disabled) .previous,
            :host(.disabled:hover) .next,
            :host(.disabled:hover) .previous {
                forced-color-adjust: none;
                background: ${f.a.Canvas};
                border-color: ${f.a.GrayText};
                color: ${f.a.GrayText};
                fill: ${f.a.GrayText};
            }
            :host(:${g.a})::before {
                forced-color-adjust: none;
                border-color: ${f.a.Highlight};
                box-shadow: 0 0 0 2px ${f.a.Field}, 0 0 0 4px ${f.a.FieldText};
            }
        `));let w=class extends s{};w=Object(n.e)([Object(r.b)({name:"fluent-flipper",template:u,styles:y,shadowOptions:{mode:"closed"}})],w)},TTa4:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("4X57"),n=a("j9Xn"),r=a("xY0q"),o=a("oqLQ"),s=a("kL0l"),l=a("cQsl");const c=i.a`
    ${Object(r.a)("grid")} :host {
        --elevation: 4;
        box-sizing: border-box;
        font-family: var(--body-font);
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        color: ${s.G.var};
        background: ${s.H.var};
        border-radius: calc(var(--elevated-corner-radius) * 1px);
        ${l.a};
        overflow: hidden;
        height: 100%;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
        width: 100%;
    }

    :host(:hover) ::slotted([slot="previous-flipper"]),
    :host(:hover) .previous-flipper,
    :host(:hover) ::slotted([slot="next-flipper"]),
    :host(:hover) .next-flipper {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: center;
        justify-self: center;
        grid-row: 1;
        grid-column: 1 / span 3;
        z-index: 3;
        cursor: pointer;
    }

    ::slotted([slot="previous-flipper"]),
    .previous-flipper {
        margin: 8px;
        grid-column: 1;
        grid-row: 1 / span 2;
        align-self: center;
        z-index: 2;
        opacity: 0;
    }

    ::slotted([slot="next-flipper"]),
    .next-flipper {
        margin: 8px;
        grid-column: 3;
        grid-row: 1 / span 2;
        align-self: center;
        z-index: 2;
        opacity: 0;
    }

    :host([layout="1-column"]) {
        --heading-font-size: var(--type-ramp-base-font-size);
        --heading-line-height: var(--type-ramp-base-line-height);
    }

    .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(var(--corner-radius) * 1px);
        justify-self: center;
        background: ${s.c.var};
    }

    .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
    }

    .tabpanel {
        grid-row: 1/3;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
    }
`.withBehaviors(s.c,s.G,Object(o.c)(i.a`
            .activeIndicator {
                forced-color-adjust: none;
                background: ${n.a.Highlight};
            }
            .tablist {
                background: ${n.a.Canvas};
            }
        `))},UDwi:function(t,e,a){"use strict";a.r(e),a.d(e,"AlertF0ToMapType",(function(){return o})),a.d(e,"WeatherMapType",(function(){return s})),a.d(e,"getTileRange",(function(){return l})),a.d(e,"fetchRadarData",(function(){return c})),a.d(e,"readVectorData",(function(){return u})),a.d(e,"parseMapTypeFromFeatures",(function(){return d})),a.d(e,"addMintuesToVersion",(function(){return g})),a.d(e,"DataTileZoomOfRadar",(function(){return m})),a.d(e,"AnimationImgMap",(function(){return f})),a.d(e,"AnimationColorMap",(function(){return v})),a.d(e,"ColorMapRadar",(function(){return b})),a.d(e,"PrecipitationIntensityMap",(function(){return y})),a.d(e,"createPattern",(function(){return w})),a.d(e,"PrecipitationTypeMap",(function(){return x})),a.d(e,"svgCreate",(function(){return C})),a.d(e,"minimapProng1CardWidth",(function(){return $})),a.d(e,"minimapProng1CardHeight",(function(){return T})),a.d(e,"getSizeOfMiniMap",(function(){return D}));var i=a("D57K"),n=a("8CFJ"),r=a("dMmp");const o=new Map([["SN","winterstorm"],["TL","winterstorm"],["IC","winterstorm"],["IM","winterstorm"],["FD","wildfire"],["AQ","airqualitystation"],["SM","airqualitystation"],["DU","airqualitystation"],["VO","airqualitystation"],["AS","airqualitystation"]]),s={Temperature:"temperature",Precipitation:"precipitation",Radar:"radar",Wind:"wind",Cloud:"cloud",Winterstorm:"winterstorm",Wildfire:"wildfire",Severeweather:"severeweather"};function l(t,e,a=n.a.widthMap,i=n.a.heightMap){const r=n.a.zoomLevelMap,o=(a-1)/2+30,s=(i-1)/2+30,l=n.a.mapSizePixel,c=n.a.latlonToPixelXY(t.lat,t.lon,l),u=[c[0]-o,c[1]-s],d=[c[0]+o,c[1]+s],h=r-e+8;return[u[0]>>h,d[0]>>h,u[1]>>h,d[1]>>h]}function c(t,e,a,o,s=n.a.widthMap,c=n.a.heightMap,d=0){return Object(i.b)(this,void 0,void 0,(function*(){if(!t)return null;const i=g(null==a?void 0:a.radarVersion,d),n=l(t,e,s,c),h=[];for(let t=n[0];t<=n[1];++t)for(let o=n[2];o<=n[3];++o){const n=r.String.Format(null==a?void 0:a.radarForecast,{time:i,z:e,x:t,y:o});h.push(fetch(n).then(t=>t.ok?t.arrayBuffer():null))}if(h.length>0){const e=yield Promise.all(h),a=[];for(const i of e)u(i,a,t,o,s,c);return a}return null}))}function u(t,e,a,i,r=n.a.widthMap,o=n.a.heightMap){if(!t)return;const s=n.a.latlonToPixelXY(a.lat,a.lon,32768);s[0]=Math.round(s[0]),s[1]=Math.round(s[1]);const l=new Uint8Array(t);if(0===l[0]){const t=l[1],a=l[2],c=1/(l[3]+256*l[4]);for(let u=5;u<l.length;){const d=l[u++],g=l[u++],m=[],f=[];let v="";do{v=String.fromCharCode(l[u++]),f.push(v),m.push(v);let e=1;"C"===v?e=3:"Z"===v&&(e=0);for(let i=0;i<e;i++){let e=0,i=0,d=1;for(let t=0;t<a;t++)e+=l[u]*d,i+=l[u+++a]*d,d*=256;u+=a,e*=c,i*=c,e>500&&(e=500-e),i>500&&(i=500-i),i>180&&2===t&&(i-=360);const h=n.a.latLonToPixel([e,i],s,r,o);f.push(Math.round(h[0])),f.push(Math.round(h[1]))}}while("Z"!==v);let y="";y=i?p(g):b.get(d.toString()).get(g.toString());const w=f.join(" ");e.push({path:w,color:y,fill:!i||h(d,g)})}}}function d(t,e){if(!t)return null;const a=o.get(t);return(null==e?void 0:e.includes(a))?a:(null==e?void 0:e.includes(s.Severeweather))?s.Severeweather:null}function h(t,e){const a=y.get(e.toString()),i=`${x.get(t.toString())}-${a}`;return f.get(i)}function p(t){const e=y.get(t.toString());return v.get(e)}function g(t,e){const a=parseInt(t.substring(0,4)),i=parseInt(t.substring(4,6))-1,n=parseInt(t.substring(6,8)),r=parseInt(t.substring(8,10)),o=parseInt(t.substring(10,12)),s=new Date(a,i,n,r,o),l=new Date(s);return l.setMinutes(s.getMinutes()+e),l.getFullYear().toString()+String(l.getMonth()+1).padStart(2,"0")+String(l.getDate()).padStart(2,"0")+String(l.getHours()).padStart(2,"0")+String(l.getMinutes()).padStart(2,"0")}const m=3,f=new Map([["rain-low","https://assets.msn.com/weathermapdata/1/static/img/animation/rain-low.png"],["rain-avg","https://assets.msn.com/weathermapdata/1/static/img/animation/rain-avg.png"],["rain-hvy","https://assets.msn.com/weathermapdata/1/static/img/animation/rain-hvy.png"],["sleet-low","https://assets.msn.com/weathermapdata/1/static/img/animation/sleet-low.png"],["sleet-avg","https://assets.msn.com/weathermapdata/1/static/img/animation/sleet-avg.png"],["sleet-hvy","https://assets.msn.com/weathermapdata/1/static/img/animation/sleet-hvy.png"],["snow-low","https://assets.msn.com/weathermapdata/1/static/img/animation/snow-low.png"],["snow-avg","https://assets.msn.com/weathermapdata/1/static/img/animation/snow-avg.png"],["snow-hvy","https://assets.msn.com/weathermapdata/1/static/img/animation/snow-hvy.png"]]),v=new Map([["low","#98B2CA"],["avg","#7891B5"],["hvy","#506984"]]),b=new Map([["0",new Map([["89","#001add"],["97","#00cc31"],["105","#00e300"],["113","#00bd00"],["121","#009600"],["129","#99d300"],["137","#f8ec00"],["145","#e7c000"],["153","#f89e00"],["161","#ff5600"],["169","#fb0000"],["177","#de0000"]])],["1",new Map([["89","#79b837"],["105","#078f33"],["121","#014b24"],["137","#eec040"],["153","#d05d2c"],["169","#830826"]])],["2",new Map([["89","#aae1e0"],["105","#5ad2e0"],["121","#249fdb"],["137","#1547bd"],["153","#101e96"],["169","#01016e"]])],["3",new Map([["89","#edb2c7"],["105","#df71a9"],["121","#bb338f"],["137","#8a139b"],["153","#660888"],["169","#470765"]])]]),y=new Map([["89","low"],["105","low"],["121","avg"],["137","hvy"],["153","hvy"],["169","hvy"]]);function w(t,e,a,i){const n=e+a+i;if(t&&!document.getElementById(n)){(new Image).src=e;const i=C("pattern");i.setAttribute("id",n),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("patternUnits","userSpaceOnUse"),i.setAttribute("width","200"),i.setAttribute("height","200");const r=C("rect");r.setAttribute("width","200"),r.setAttribute("height","200"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("fill-opacity",1),r.setAttribute("fill",a),i.appendChild(r),t.appendChild(i);const o=C("image");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttributeNS("http://www.w3.org/1999/xlink","href",e),o.setAttribute("width","3000"),o.setAttribute("height","200"),i.appendChild(o);const s=C("animate");s.setAttribute("attributeType","XML"),s.setAttribute("attributeName","x"),s.setAttribute("calcMode","discrete"),s.setAttribute("values","0;-200;-400;-600;-800;-1000;-1200;-1400;-1600;-1800;-2000;-2200;-2400;-2600;-2800"),s.setAttribute("dur","1s"),s.setAttribute("repeatCount","indefinite"),o.appendChild(s)}}const x=new Map([["1","rain"],["2","snow"],["3","sleet"]]);function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}const $=268,T=134;function D(t,e,a,i){let r=n.a.widthMap;a?r=a:t&&(r=$);let o=n.a.heightMap;return i?o=i:e?o=n.a.maxHeightMap:t&&(o=T),[r,o]}},"Uz+G":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("D57K"),n=a("P4Ao"),r=a("n251");class o extends r.a{}var s=a("pS8B"),l=a("09SU");let c=class extends o{};c=Object(i.e)([Object(n.b)({name:"msft-info-pane-panel",template:s.a,styles:l.a})],c)},VRJB:function(t,e,a){"use strict";function i(t,e,a){return a<t?e:a>e?t:a}function n(t,e,a){return Math.min(Math.max(a,t),e)}a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return n}))},WDvm:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("hqLi"),n=a("CCsL"),r=a("I6Lx"),o=a("EK+a"),s=a("pUFC");function l(t){let e=t;return e<s.g.Light?(e*=s.d/s.g.Light,e=.75*e+.25*s.d):e=e<s.g.Middle?s.d+(e-s.g.Light)*(s.d/(s.g.Middle-s.g.Light)):2*s.d+(e-s.g.Middle)*(s.d/(s.g.Heavy-s.g.Middle)),e}function c(t,e,a,c){if(Object(i.a)(t))return null;const u=[],d=t.precipitation||[];let h=!1;const p=new Date(t.timestamp);let g=0;if(c){const e=d.findIndex((e,a)=>p.getTime()+a*t.minutesBetweenHorrizons*60*1e3>c.getTime());g=Math.max(e-1,0),h=(t.horrizonCount-g)*t.minutesBetweenHorrizons<120}a||(a=1);const m=e.location&&e.location.TimezoneName,f={excludeSpace:!1,excludeComma:!0},v=new o.a(r.b.Locale,m);let b=0;return[...d.slice(g),Object(n.a)(d)].forEach((e,i)=>{const n=new Date(p.getTime()+(g+i)*t.minutesBetweenHorrizons*60*1e3);b=function(t){let e=Math.pow(Math.pow(10,t/10)/200,5/8);return e=Math.min(e,s.g.Heavy),e}(e),u.push({debug:""+i,offsetSliceCount:i,time:n,text:i%a==0?v.formatHourMinute(n,f):"",rainfall:l(b),summary:b>=s.g.NoRain||!t.enableRainSignal?s.e.Raining:s.e.NoRain,normalizedCode:""})}),{horrizonCount:t.horrizonCount-g,minutesBetweenHorrizons:t.minutesBetweenHorrizons,summary:t.summary,shortSummary:t.shortSummary,timestamp:t.timestamp,timeline:u,showTimeline:t.isRaining,showInValidData:h,weatherType:s.f[t.weathertype]||s.c}}},X9Vi:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"g",(function(){return r})),a.d(e,"f",(function(){return S})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return y})),a.d(e,"c",(function(){return H}));var i={};a.r(i),a.d(i,"parseWeatherLocation",(function(){return u})),a.d(i,"isValidAqi",(function(){return d})),a.d(i,"parseWeatherData",(function(){return h})),a.d(i,"getFormatedProvider",(function(){return p}));var n={};a.r(n),a.d(n,"decodeCookieValue",(function(){return w})),a.d(n,"buildCookieString",(function(){return $})),a.d(n,"parseCookieString",(function(){return T})),a.d(n,"parseHomeCookieString",(function(){return D}));var r={};a.r(r),a.d(r,"MAX_FAVORITE_COUNT",(function(){return O})),a.d(r,"MAX_RECENT_COUNT",(function(){return L})),a.d(r,"validateFix",(function(){return k})),a.d(r,"favor",(function(){return A})),a.d(r,"disfavor",(function(){return j})),a.d(r,"visit",(function(){return N})),a.d(r,"find",(function(){return I}));var o=a("qE0w"),s=a("dMmp"),l=a("I6Lx"),c=a("oilT");function u(t){const e={longitude:t.Longitude,latitude:t.Latitude,addressLine:t.AddressLine,locality:t.City,subRegion:t.SubRegion,region:t.State,country:t.Country,isoCode:t.CountryCode,language:t.Language||l.b.Locale};return e.displayName=o.getDisplayName(e),e}function d(t){const e=parseInt(t);return!(isNaN(e)||e<=0||e>500)}function h(t,e){return c.b.TranslateToWeatherOverview(t,e)}function p(t,e){return"中国天气网"==t?e&&s.String.Format(e,{provider:t}):null}var g=a("tZkf"),m=a.n(g),f=a("i3c9"),v=a.n(f),b=a("/FrS"),y=a("PgCS");function w(t){if(t)try{const e=function(t){if(0==t.length)return null;const e=t.slice(-1);t=(t=(t=t.slice(0,-1)).replace(/-/g,"+")).replace(/_/g,"/");for(let a=0;a<e;a++)t+="=";return t}(t),a=m.a.stringify(v.a.parse(e));return JSON.parse(a)}catch(e){console.log("ignore invalid preference object: "+t)}}function x(t){return t&&encodeURIComponent(t)||""}function C(t){if(t&&"undefined"!==t&&"null"!==t)return decodeURIComponent(t)}function $(t){t=t||[];return(Array.isArray(t)?t:[t]).filter(t=>t).map((function(t){const e=[];return e[0]="",e[1]="",e[2]=t.latitude,e[3]=t.longitude,e[4]=x(t.locality),e[5]=x(t.region),e[6]=x(t.country),e[7]=x(t.isoCode),e[8]=x(t.language||l.b.Locale),e[9]="1",e[10]=x(t.subRegion),e[11]=x(t.addressLine),e[12]="",e.join("|")})).join("/")}function T(t,e){const a=[],i=t?t.split("/"):[];for(let t=0;t<i.length;++t){const n=i[t].split("|");if(n.length>3&&n[2]&&n[3]){const t="0"!==n[8]&&C(n[8])?C(n[8]):l.b.Locale,i=C(n[7]),r={displayName:void 0,latitude:n[2],longitude:n[3],locality:C(n[4]),region:y.abbreviateUSState(C(n[5]),t,i),country:C(n[6]),isoCode:i,language:t,subRegion:"Address"!==n[10]&&C(n[10])?C(n[10]):void 0,addressLine:C(n[11])};e&&e(r),a.push(r)}}return a}function D(t){return T(t,t=>t.from=b.h.HomeFromCookie)[0]}var S=a("0km5");const O=10,L=10;function M(t){return!!t&&"null"!==t&&"undefined"!==t&&"false"!==t}function k(t){if(t.home&&(o.removeLocation(t.favorites,t.home),o.removeLocation(t.recents,t.home)),t.favorites){t.favorites=t.favorites.slice(0,O);for(let e=0,a=t.favorites.length;e<a;++e)o.removeLocation(t.recents,t.favorites[e])}else void 0===t.favorites&&(t.favorites=[]);return t.recents?(t.recents=t.recents.filter(t=>"JP"!==t.isoCode||M(t.locality)||M(t.region)),t.recents=t.recents.slice(0,L)):void 0===t.recents&&(t.recents=[]),t}function A(t,e){let a=o.addLocation(t.favorites,e),i=o.removeLocation(t.recents,e);return a&&a.length>O&&(a=a.slice(0,O)),i&&i.length>L&&(i=i.slice(0,L)),t.favorites=a,t.recents=i,t}function j(t,e,a=!0){let i=o.removeLocation(t.favorites,e),n=t.recents;return a&&(n=o.addLocation(t.recents,e)),i&&i.length>O&&(i=i.slice(0,O)),n&&n.length>L&&(n=n.slice(0,L)),t.favorites=i,t.recents=n,t}function N(t,e){return t.recents=o.addLocation(t.recents,e),k(t)}function I(t,e,a){const i=[];return t&&(i.push(t.home),Array.prototype.push.apply(i,t.favorites||[]),Array.prototype.push.apply(i,t.recents||[])),i.filter(t=>!!t&&t.latitude===e&&t.longitude===a)[0]}var H=a("UDwi")},XMNS:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"b",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"c",(function(){return g})),a.d(e,"i",(function(){return m})),a.d(e,"g",(function(){return f})),a.d(e,"d",(function(){return v})),a.d(e,"f",(function(){return C}));var i=a("S35a"),n=a("m1Vi"),r=a("6BDD"),o=a("+53S"),s=a("UNqU"),l=a("6vBc"),c=a("eUhr");i.a,n.b;const u=r.b`
    <svg width="20" height="20" viewBox="0 0 20 16" fill="#666666">
        <path
            d="M17.1973 8.11719C17.6139 8.23438 17.9915 8.41016 18.3301 8.64453C18.6751 8.8724 18.9714 9.14583 19.2188 9.46484C19.4661 9.77734 19.6582 10.1289 19.7949 10.5195C19.9316 10.9102 20 11.3203 20 11.75C20 12.2708 19.9023 12.7591 19.707 13.2148C19.5117 13.6641 19.2415 14.0612 18.8965 14.4062C18.5579 14.7448 18.1608 15.0117 17.7051 15.207C17.2493 15.4023 16.7643 15.5 16.25 15.5H5.625C5.01953 15.5 4.44987 15.3861 3.91602 15.1582C3.38867 14.9303 2.92643 14.6178 2.5293 14.2207C2.13216 13.8236 1.81966 13.3613 1.5918 12.834C1.36393 12.3001 1.25 11.7305 1.25 11.125C1.25 10.6367 1.32812 10.168 1.48438 9.71875C1.02214 9.36719 0.657552 8.93099 0.390625 8.41016C0.130208 7.88932 0 7.33594 0 6.75C0 6.23568 0.0976562 5.75065 0.292969 5.29492C0.488281 4.83919 0.755208 4.44206 1.09375 4.10352C1.4388 3.75846 1.83594 3.48828 2.28516 3.29297C2.74089 3.09766 3.22917 3 3.75 3C3.82161 3 3.88997 3.00326 3.95508 3.00977C4.02669 3.00977 4.09831 3.01302 4.16992 3.01953C4.3457 2.62891 4.57031 2.2806 4.84375 1.97461C5.1237 1.66211 5.43294 1.39844 5.77148 1.18359C6.11654 0.96224 6.48763 0.792969 6.88477 0.675781C7.28841 0.558594 7.70182 0.5 8.125 0.5C8.67188 0.5 9.18945 0.597656 9.67773 0.792969C10.1725 0.981771 10.612 1.24544 10.9961 1.58398C11.3867 1.91602 11.709 2.31315 11.9629 2.77539C12.2233 3.23763 12.3893 3.73893 12.4609 4.2793C13.0078 4.33138 13.5286 4.46484 14.0234 4.67969C14.5247 4.88802 14.9805 5.16146 15.3906 5.5C15.8073 5.83854 16.1686 6.22917 16.4746 6.67188C16.7871 7.11458 17.028 7.59635 17.1973 8.11719ZM3.75 4.25C3.40495 4.25 3.07943 4.3151 2.77344 4.44531C2.47396 4.57552 2.21029 4.75456 1.98242 4.98242C1.75456 5.21029 1.57552 5.47721 1.44531 5.7832C1.3151 6.08268 1.25 6.40495 1.25 6.75C1.25 7.10156 1.31836 7.43685 1.45508 7.75586C1.59831 8.06836 1.80013 8.34505 2.06055 8.58594C2.4707 8.00651 2.98828 7.55729 3.61328 7.23828C4.24479 6.91276 4.91536 6.75 5.625 6.75C5.8724 6.75 6.11654 6.76953 6.35742 6.80859C6.59831 6.84766 6.83268 6.90951 7.06055 6.99414C7.26888 6.62305 7.52279 6.28451 7.82227 5.97852C8.12174 5.67253 8.45052 5.40234 8.80859 5.16797C9.16667 4.93359 9.54753 4.74154 9.95117 4.5918C10.3548 4.44206 10.7682 4.34115 11.1914 4.28906C11.1198 3.92448 10.9896 3.58594 10.8008 3.27344C10.6185 2.96094 10.3906 2.69401 10.1172 2.47266C9.84375 2.24479 9.53451 2.06901 9.18945 1.94531C8.85091 1.8151 8.49609 1.75 8.125 1.75C7.72135 1.75 7.33724 1.82487 6.97266 1.97461C6.61458 2.11784 6.29557 2.31966 6.01562 2.58008C5.74219 2.83398 5.51758 3.13672 5.3418 3.48828C5.16602 3.83333 5.06185 4.20768 5.0293 4.61133C4.83398 4.50065 4.62891 4.41276 4.41406 4.34766C4.19922 4.28255 3.97786 4.25 3.75 4.25ZM16.25 14.25C16.5951 14.25 16.9173 14.1849 17.2168 14.0547C17.5228 13.9245 17.7897 13.7454 18.0176 13.5176C18.2454 13.2897 18.4245 13.026 18.5547 12.7266C18.6849 12.4206 18.75 12.0951 18.75 11.75C18.75 11.3919 18.6816 11.0599 18.5449 10.7539C18.4147 10.4479 18.2324 10.1842 17.998 9.96289C17.7637 9.73503 17.4902 9.55924 17.1777 9.43555C16.8652 9.31185 16.5332 9.25 16.1816 9.25C16.1035 8.71615 15.9375 8.22135 15.6836 7.76562C15.4297 7.30339 15.1107 6.90625 14.7266 6.57422C14.349 6.23568 13.916 5.97201 13.4277 5.7832C12.9395 5.5944 12.4219 5.5 11.875 5.5C11.3737 5.5 10.8952 5.58138 10.4395 5.74414C9.99023 5.9069 9.58008 6.13151 9.20898 6.41797C8.83789 6.70443 8.51562 7.04948 8.24219 7.45312C7.97526 7.85677 7.77995 8.29622 7.65625 8.77148C7.36979 8.52409 7.05404 8.33529 6.70898 8.20508C6.36393 8.06836 6.0026 8 5.625 8C5.19531 8 4.78841 8.08138 4.4043 8.24414C4.02669 8.4069 3.69466 8.63151 3.4082 8.91797C3.12826 9.19792 2.9069 9.52995 2.74414 9.91406C2.58138 10.2917 2.5 10.6953 2.5 11.125C2.5 11.5547 2.58138 11.9616 2.74414 12.3457C2.9069 12.7233 3.12826 13.0553 3.4082 13.3418C3.69466 13.6217 4.02669 13.8431 4.4043 14.0059C4.78841 14.1686 5.19531 14.25 5.625 14.25H16.25Z"
        ></path>
    </svg>
`,d=r.b`<svg
    width="16"
    height="16"
    viewBox="0 0 16 12"
    fill="#767676"
>
    <path
        d="M12 3C12 3.41667 11.9219 3.80729 11.7656 4.17188C11.6094 4.53125 11.3932 4.84896 11.1172 5.125C10.8464 5.39583 10.5286 5.60938 10.1641 5.76562C9.79948 5.92188 9.41146 6 9 6H0V5H9C9.27604 5 9.53385 4.94792 9.77344 4.84375C10.0182 4.73958 10.2318 4.59635 10.4141 4.41406C10.5964 4.23177 10.7396 4.02083 10.8438 3.78125C10.9479 3.53646 11 3.27604 11 3C11 2.72396 10.9479 2.46615 10.8438 2.22656C10.7396 1.98177 10.5964 1.76823 10.4141 1.58594C10.2318 1.40365 10.0182 1.26042 9.77344 1.15625C9.53385 1.05208 9.27604 1 9 1C8.72396 1 8.46354 1.05208 8.21875 1.15625C7.97917 1.26042 7.76823 1.40365 7.58594 1.58594C7.40365 1.76823 7.26042 1.98177 7.15625 2.22656C7.05208 2.46615 7 2.72396 7 3H6C6 2.58854 6.07812 2.20052 6.23438 1.83594C6.39062 1.47135 6.60417 1.15365 6.875 0.882812C7.15104 0.606771 7.46875 0.390625 7.82812 0.234375C8.19271 0.078125 8.58333 0 9 0C9.41146 0 9.79948 0.078125 10.1641 0.234375C10.5286 0.390625 10.8464 0.606771 11.1172 0.882812C11.3932 1.15365 11.6094 1.47135 11.7656 1.83594C11.9219 2.20052 12 2.58854 12 3ZM14 5C14.276 5 14.5339 5.05208 14.7734 5.15625C15.0182 5.26042 15.2318 5.40365 15.4141 5.58594C15.5964 5.76823 15.7396 5.98177 15.8438 6.22656C15.9479 6.46615 16 6.72396 16 7C16 7.27604 15.9479 7.53646 15.8438 7.78125C15.7396 8.02083 15.5964 8.23177 15.4141 8.41406C15.2318 8.59635 15.0182 8.73958 14.7734 8.84375C14.5339 8.94792 14.276 9 14 9H12.7344C12.9115 9.30208 13 9.63542 13 10C13 10.276 12.9479 10.5365 12.8438 10.7812C12.7396 11.0208 12.5964 11.2318 12.4141 11.4141C12.2318 11.5964 12.0182 11.7396 11.7734 11.8438C11.5339 11.9479 11.276 12 11 12C10.724 12 10.4635 11.9479 10.2188 11.8438C9.97917 11.7396 9.76823 11.5964 9.58594 11.4141C9.40365 11.2318 9.26042 11.0208 9.15625 10.7812C9.05208 10.5365 9 10.276 9 10H10C10 10.1406 10.026 10.2708 10.0781 10.3906C10.1302 10.5104 10.2005 10.6172 10.2891 10.7109C10.3828 10.7995 10.4896 10.8698 10.6094 10.9219C10.7292 10.974 10.8594 11 11 11C11.1406 11 11.2708 10.974 11.3906 10.9219C11.5104 10.8698 11.6146 10.7995 11.7031 10.7109C11.7969 10.6172 11.8698 10.5104 11.9219 10.3906C11.974 10.2708 12 10.1406 12 10C12 9.85938 11.974 9.72917 11.9219 9.60938C11.8698 9.48958 11.7969 9.38542 11.7031 9.29688C11.6146 9.20312 11.5104 9.13021 11.3906 9.07812C11.2708 9.02604 11.1406 9 11 9H0V8H11H14C14.1406 8 14.2708 7.97396 14.3906 7.92188C14.5104 7.86979 14.6146 7.79948 14.7031 7.71094C14.7969 7.61719 14.8698 7.51042 14.9219 7.39062C14.974 7.27083 15 7.14062 15 7C15 6.85938 14.974 6.72917 14.9219 6.60938C14.8698 6.48958 14.7969 6.38542 14.7031 6.29688C14.6146 6.20312 14.5104 6.13021 14.3906 6.07812C14.2708 6.02604 14.1406 6 14 6C13.8594 6 13.7292 6.02604 13.6094 6.07812C13.4896 6.13021 13.3828 6.20312 13.2891 6.29688C13.2005 6.38542 13.1302 6.48958 13.0781 6.60938C13.026 6.72917 13 6.85938 13 7H12C12 6.72396 12.0521 6.46615 12.1562 6.22656C12.2604 5.98177 12.4036 5.76823 12.5859 5.58594C12.7682 5.40365 12.9792 5.26042 13.2188 5.15625C13.4635 5.05208 13.724 5 14 5Z"
    ></path>
</svg>`,h=r.b`<svg
    width="16"
    height="16"
    viewBox="0 0 47 73"
    fill="#767676"
>
    <path
        d="M44.1904 41.5615C44.8649 42.916 45.3708 44.318 45.708 45.7676C46.0452 47.2171 46.2259 48.6904 46.25 50.1875C46.25 52.2786 45.973 54.2985 45.4189 56.2471C44.8649 58.1956 44.0941 60.0135 43.1064 61.7007C42.1188 63.3879 40.9144 64.9206 39.4932 66.2988C38.0719 67.6771 36.5062 68.8652 34.7959 69.8633C33.0856 70.8613 31.2428 71.6336 29.2676 72.1802C27.2923 72.7267 25.2448 73 23.125 73C21.0052 73 18.9577 72.7267 16.9824 72.1802C15.0072 71.6336 13.1644 70.8732 11.4541 69.8989C9.74382 68.9246 8.1901 67.7365 6.79297 66.3345C5.39583 64.9325 4.19141 63.3879 3.17969 61.7007C2.16797 60.0135 1.38509 58.1956 0.831055 56.2471C0.277018 54.2985 0 52.2786 0 50.1875C0 48.6904 0.16862 47.2171 0.505859 45.7676C0.843099 44.318 1.361 42.916 2.05957 41.5615L23.125 0L44.1904 41.5615ZM23.125 68.4375C25.6784 68.4375 28.0752 67.9622 30.3154 67.0117C32.5557 66.0612 34.5189 64.7661 36.2051 63.1265C37.8913 61.4868 39.2161 59.5501 40.1797 57.3164C41.1432 55.0827 41.625 52.7064 41.625 50.1875C41.625 49.0469 41.4925 47.9181 41.2275 46.8013C40.9626 45.6844 40.5651 44.6151 40.0352 43.5933L23.125 10.1943L6.21484 43.5933C5.6849 44.6151 5.28744 45.6844 5.02246 46.8013C4.75749 47.9181 4.625 49.0469 4.625 50.1875C4.625 52.7064 5.10677 55.0708 6.07031 57.2808C7.03385 59.4907 8.34668 61.4274 10.0088 63.0908C11.6709 64.7542 13.6341 66.0612 15.8984 67.0117C18.1628 67.9622 20.5716 68.4375 23.125 68.4375Z"
    ></path>
</svg>`,p=r.b`<svg
    width="20"
    height="20"
    viewBox="0 0 9 20"
    fill="#666666"
>
    <path
        d="M5 13.8672C5.18229 13.9323 5.35156 14.0234 5.50781 14.1406C5.66406 14.2578 5.79427 14.3945 5.89844 14.5508C6.00911 14.7005 6.09375 14.8698 6.15234 15.0586C6.21745 15.2409 6.25 15.4297 6.25 15.625C6.25 15.8854 6.20117 16.1296 6.10352 16.3574C6.00586 16.5853 5.8724 16.7839 5.70312 16.9531C5.53385 17.1224 5.33529 17.2559 5.10742 17.3535C4.87956 17.4512 4.63542 17.5 4.375 17.5C4.11458 17.5 3.87044 17.4512 3.64258 17.3535C3.41471 17.2559 3.21615 17.1224 3.04688 16.9531C2.8776 16.7839 2.74414 16.5853 2.64648 16.3574C2.54883 16.1296 2.5 15.8854 2.5 15.625C2.5 15.4297 2.5293 15.2409 2.58789 15.0586C2.65299 14.8698 2.73763 14.7005 2.8418 14.5508C2.95247 14.3945 3.08268 14.2578 3.23242 14.1406C3.38867 14.0234 3.5612 13.9323 3.75 13.8672V7.5H5V13.8672ZM7.5 12.8809C7.87109 13.291 8.16081 13.7467 8.36914 14.248C8.57747 14.7493 8.68164 15.2767 8.68164 15.8301C8.68164 16.416 8.56445 16.9629 8.33008 17.4707C8.10221 17.9785 7.78971 18.4212 7.39258 18.7988C6.99544 19.1699 6.53646 19.4629 6.01562 19.6777C5.49479 19.8926 4.94792 20 4.375 20C3.79557 20 3.24544 19.8926 2.72461 19.6777C2.21029 19.4629 1.75456 19.1699 1.35742 18.7988C0.960286 18.4212 0.644531 17.9785 0.410156 17.4707C0.182292 16.9629 0.0683594 16.416 0.0683594 15.8301C0.0683594 15.2767 0.172526 14.7493 0.380859 14.248C0.589193 13.7467 0.878906 13.291 1.25 12.8809V3.125C1.25 2.69531 1.33138 2.29167 1.49414 1.91406C1.6569 1.53646 1.87826 1.20768 2.1582 0.927734C2.44466 0.641276 2.77669 0.416667 3.1543 0.253906C3.53841 0.0846354 3.94531 0 4.375 0C4.80469 0 5.20833 0.0846354 5.58594 0.253906C5.96354 0.416667 6.29232 0.641276 6.57227 0.927734C6.85872 1.20768 7.08333 1.53646 7.24609 1.91406C7.41536 2.29167 7.5 2.69531 7.5 3.125V12.8809ZM4.375 18.75C4.77865 18.75 5.16276 18.6751 5.52734 18.5254C5.89844 18.3757 6.22396 18.1706 6.50391 17.9102C6.78385 17.6497 7.00521 17.3405 7.16797 16.9824C7.33724 16.6243 7.42188 16.2402 7.42188 15.8301C7.42188 15.3418 7.31445 14.8958 7.09961 14.4922C6.88477 14.082 6.60156 13.7142 6.25 13.3887V3.125C6.25 2.86458 6.20117 2.62044 6.10352 2.39258C6.00586 2.16471 5.8724 1.96615 5.70312 1.79688C5.53385 1.6276 5.33529 1.49414 5.10742 1.39648C4.87956 1.29883 4.63542 1.25 4.375 1.25C4.11458 1.25 3.87044 1.29883 3.64258 1.39648C3.41471 1.49414 3.21615 1.6276 3.04688 1.79688C2.8776 1.96615 2.74414 2.16471 2.64648 2.39258C2.54883 2.62044 2.5 2.86458 2.5 3.125V13.3887C2.14844 13.7142 1.86523 14.082 1.65039 14.4922C1.43555 14.8958 1.32812 15.3418 1.32812 15.8301C1.32812 16.2402 1.40951 16.6243 1.57227 16.9824C1.74154 17.3405 1.96615 17.6497 2.24609 17.9102C2.52604 18.1706 2.84831 18.3757 3.21289 18.5254C3.58398 18.6751 3.97135 18.75 4.375 18.75Z"
    ></path>
</svg>`,g=r.b`<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#767676"
>
    <path
        d="M15.5 0C15.6354 0 15.7526 0.0494792 15.8516 0.148438C15.9505 0.247396 16 0.364583 16 0.5C16 0.635417 15.9505 0.752604 15.8516 0.851562L8.35156 8.35156C8.2526 8.45052 8.13542 8.5 8 8.5C7.86458 8.5 7.7474 8.45052 7.64844 8.35156C7.54948 8.2526 7.5 8.13542 7.5 8C7.5 7.86458 7.54948 7.7474 7.64844 7.64844L15.1484 0.148438C15.2474 0.0494792 15.3646 0 15.5 0ZM8 6C7.72396 6 7.46354 6.05208 7.21875 6.15625C6.97917 6.26042 6.76823 6.40365 6.58594 6.58594C6.40365 6.76823 6.26042 6.98177 6.15625 7.22656C6.05208 7.46615 6 7.72396 6 8C6 8.27604 6.05208 8.53646 6.15625 8.78125C6.26042 9.02083 6.40365 9.23177 6.58594 9.41406C6.76823 9.59635 6.97917 9.73958 7.21875 9.84375C7.46354 9.94792 7.72396 10 8 10C8.26562 10 8.52083 9.95052 8.76562 9.85156C9.01042 9.7474 9.22656 9.60156 9.41406 9.41406L10.125 10.125C9.83854 10.4062 9.51302 10.6224 9.14844 10.7734C8.78385 10.9245 8.40104 11 8 11C7.58333 11 7.19271 10.9219 6.82812 10.7656C6.46875 10.6094 6.15104 10.3958 5.875 10.125C5.60417 9.84896 5.39062 9.53125 5.23438 9.17188C5.07812 8.80729 5 8.41667 5 8C5 7.58854 5.07812 7.20052 5.23438 6.83594C5.39062 6.47135 5.60417 6.15365 5.875 5.88281C6.15104 5.60677 6.46875 5.39062 6.82812 5.23438C7.19271 5.07812 7.58333 5 8 5C8.28646 5 8.57552 5.04427 8.86719 5.13281L8 6ZM8 15C8.46875 15 8.92708 14.9557 9.375 14.8672C9.82812 14.7734 10.263 14.6406 10.6797 14.4688C11.1016 14.2969 11.5026 14.0833 11.8828 13.8281C12.2682 13.5729 12.625 13.2812 12.9531 12.9531L13.6562 13.6562C12.8958 14.4167 12.0312 14.9974 11.0625 15.3984C10.099 15.7995 9.07812 16 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.526 4.55469 15.2578 3.96094 14.9141C3.36719 14.5651 2.82552 14.1484 2.33594 13.6641C1.85156 13.1745 1.4349 12.6328 1.08594 12.0391C0.742188 11.4453 0.473958 10.8099 0.28125 10.1328C0.09375 9.45052 0 8.73958 0 8C0 7.26562 0.09375 6.55729 0.28125 5.875C0.473958 5.19271 0.742188 4.55469 1.08594 3.96094C1.4349 3.36719 1.85156 2.82812 2.33594 2.34375C2.82552 1.85417 3.36719 1.4375 3.96094 1.09375C4.55469 0.744792 5.1901 0.476562 5.86719 0.289062C6.54948 0.0963542 7.26042 0 8 0C8.82292 0 9.61979 0.122396 10.3906 0.367188C11.1667 0.606771 11.8906 0.963542 12.5625 1.4375L11.8438 2.15625C11.276 1.77604 10.6641 1.48958 10.0078 1.29688C9.35677 1.09896 8.6875 1 8 1C7.35938 1 6.73958 1.08333 6.14062 1.25C5.54688 1.41667 4.98958 1.65365 4.46875 1.96094C3.95312 2.26302 3.48177 2.6276 3.05469 3.05469C2.6276 3.48177 2.26042 3.95573 1.95312 4.47656C1.65104 4.99219 1.41667 5.54948 1.25 6.14844C1.08333 6.74219 1 7.35938 1 8C1 8.64062 1.08333 9.26042 1.25 9.85938C1.41667 10.4531 1.65104 11.0104 1.95312 11.5312C2.26042 12.0469 2.6276 12.5182 3.05469 12.9453C3.48177 13.3724 3.95312 13.7396 4.46875 14.0469C4.98958 14.349 5.54688 14.5833 6.14062 14.75C6.73438 14.9167 7.35417 15 8 15ZM10.0234 3.97656C9.38802 3.65885 8.71354 3.5 8 3.5C7.38021 3.5 6.79688 3.61979 6.25 3.85938C5.70312 4.09375 5.22656 4.41406 4.82031 4.82031C4.41406 5.22656 4.09115 5.70312 3.85156 6.25C3.61719 6.79688 3.5 7.38021 3.5 8C3.5 8.61979 3.61719 9.20312 3.85156 9.75C4.09115 10.2969 4.41406 10.7734 4.82031 11.1797C5.22656 11.5859 5.70312 11.9089 6.25 12.1484C6.79688 12.3828 7.38021 12.5 8 12.5C8.59896 12.5 9.17188 12.388 9.71875 12.1641C10.2708 11.9349 10.7578 11.6068 11.1797 11.1797L11.8906 11.8906C11.3646 12.4115 10.7708 12.8099 10.1094 13.0859C9.44792 13.362 8.74479 13.5 8 13.5C7.49479 13.5 7.00781 13.4349 6.53906 13.3047C6.07031 13.1745 5.63021 12.9896 5.21875 12.75C4.8125 12.5104 4.44271 12.224 4.10938 11.8906C3.77604 11.5573 3.48958 11.1875 3.25 10.7812C3.01042 10.3698 2.82552 9.92969 2.69531 9.46094C2.5651 8.99219 2.5 8.50521 2.5 8C2.5 7.49479 2.5651 7.00781 2.69531 6.53906C2.82552 6.07031 3.01042 5.63281 3.25 5.22656C3.48958 4.8151 3.77604 4.44271 4.10938 4.10938C4.44271 3.77604 4.8125 3.48958 5.21875 3.25C5.63021 3.01042 6.07031 2.82552 6.53906 2.69531C7.00781 2.5651 7.49479 2.5 8 2.5C8.48958 2.5 8.96615 2.5625 9.42969 2.6875C9.89323 2.8125 10.3359 2.9974 10.7578 3.24219L10.0234 3.97656Z"
    ></path>
</svg>`,m=r.b`<svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#666666"
>
    <path
        d="M19.707 16.3379L18.3887 16.6895L18.7402 18.0078L17.5293 18.3301L17.0898 16.6602L15 15.459V17.8613L16.2207 19.0918L15.3418 19.9707L14.375 19.0039L13.4082 19.9707L12.5293 19.0918L13.75 17.8613V15.459L11.6602 16.6602L11.2207 18.3301L10.0098 18.0078L10.3613 16.6895L9.04297 16.3379L9.36523 15.1367L11.0352 15.5762L13.125 14.375L11.0352 13.1738L9.36523 13.6133L9.04297 12.4121L10.3613 12.0605L10.0098 10.7422L11.2207 10.4199L11.6602 12.0898L13.75 13.291V10.8887L12.5293 9.6582L13.4082 8.7793L14.375 9.74609L15.3418 8.7793L16.2207 9.6582L15 10.8887V13.291L17.0898 12.0898L17.5293 10.4199L18.7402 10.7422L18.3887 12.0605L19.707 12.4121L19.3848 13.6133L17.7148 13.1738L15.625 14.375L17.7148 15.5762L19.3848 15.1367L19.707 16.3379ZM12.6074 4.15039L14.375 3.125L12.6074 2.09961L13.2324 1.02539L15 2.04102V0H16.25V2.04102L18.0176 1.02539L18.6426 2.09961L16.875 3.125L18.6426 4.15039L18.0176 5.22461L16.25 4.20898V6.25H15V4.20898L13.2324 5.22461L12.6074 4.15039ZM7.91016 8.33984L8.94531 8.61328L8.61328 9.82422L7.93945 9.63867L7.76367 10.3125L6.55273 9.99023L6.82617 8.96484L5.625 6.875L4.42383 8.96484L4.69727 9.99023L3.48633 10.3125L3.31055 9.63867L2.63672 9.82422L2.30469 8.61328L3.33984 8.33984L4.54102 6.25H2.13867L1.37695 7.00195L0.498047 6.12305L0.996094 5.625L0.498047 5.12695L1.37695 4.24805L2.13867 5H4.54102L3.33984 2.91016L2.30469 2.63672L2.63672 1.42578L3.31055 1.61133L3.48633 0.9375L4.69727 1.25977L4.42383 2.28516L5.625 4.375L6.82617 2.28516L6.55273 1.25977L7.76367 0.9375L7.93945 1.61133L8.61328 1.42578L8.94531 2.63672L7.91016 2.91016L6.70898 5H9.11133L9.87305 4.24805L10.752 5.12695L10.2539 5.625L10.752 6.12305L9.87305 7.00195L9.11133 6.25H6.70898L7.91016 8.33984Z"
    ></path>
</svg>`,f=r.b`<svg
    width="16"
    height="22"
    viewBox="0 0 16 22"
    fill="#767676"
>
    <path
        d="M10.5 1.625C10.5 2.79036 10.7148 3.86458 11.1445 4.84766C11.5742 5.83073 12.1927 6.73568 13 7.5625C13.8073 8.38932 14.4258 9.29427 14.8555 10.2773C15.2852 11.2604 15.5 12.3346 15.5 13.5C15.5 14.1901 15.4089 14.8542 15.2266 15.4922C15.0508 16.1302 14.8001 16.7292 14.4746 17.2891C14.1491 17.8424 13.7585 18.347 13.3027 18.8027C12.847 19.2585 12.3392 19.6491 11.7793 19.9746C11.2259 20.3001 10.6302 20.554 9.99219 20.7363C9.35417 20.9121 8.6901 21 8 21C7.3099 21 6.64583 20.9121 6.00781 20.7363C5.36979 20.554 4.77083 20.3001 4.21094 19.9746C3.65755 19.6491 3.15299 19.2585 2.69727 18.8027C2.24154 18.347 1.85091 17.8424 1.52539 17.2891C1.19987 16.7292 0.945964 16.1302 0.763672 15.4922C0.587891 14.8542 0.5 14.1901 0.5 13.5C0.5 12.9531 0.558594 12.416 0.675781 11.8887C0.792969 11.3613 0.96224 10.8568 1.18359 10.375C1.40495 9.88672 1.67839 9.42773 2.00391 8.99805C2.32943 8.56836 2.69727 8.17448 3.10742 7.81641C3.15299 8.0638 3.21484 8.32096 3.29297 8.58789C3.37109 8.84831 3.46224 9.10872 3.56641 9.36914C3.67708 9.62305 3.80078 9.87044 3.9375 10.1113C4.07422 10.3457 4.22396 10.5605 4.38672 10.7559C4.51693 10.9186 4.6862 11 4.89453 11C5.07031 11 5.2168 10.9382 5.33398 10.8145C5.45768 10.6908 5.51953 10.541 5.51953 10.3652C5.51953 10.2936 5.50651 10.2285 5.48047 10.1699C5.46094 10.1113 5.43164 10.0527 5.39258 9.99414C5.21029 9.72721 5.04753 9.46354 4.9043 9.20312C4.76758 8.94271 4.65039 8.67578 4.55273 8.40234C4.45508 8.12891 4.38021 7.8457 4.32812 7.55273C4.27604 7.25977 4.25 6.95052 4.25 6.625C4.25 5.85026 4.39648 5.12109 4.68945 4.4375C4.98893 3.75391 5.39258 3.1582 5.90039 2.65039C6.4082 2.14258 7.00391 1.74219 7.6875 1.44922C8.37109 1.14974 9.10026 1 9.875 1H10.5V1.625ZM8 20.1699C8.46224 20.1699 8.89518 20.082 9.29883 19.9062C9.70247 19.7305 10.054 19.4928 10.3535 19.1934C10.6595 18.8874 10.8971 18.5326 11.0664 18.1289C11.2422 17.7253 11.3301 17.2923 11.3301 16.8301C11.3301 16.3613 11.252 15.9284 11.0957 15.5312C10.9395 15.1341 10.7083 14.7598 10.4023 14.4082C10.0703 14.0371 9.8099 13.6465 9.62109 13.2363C9.4388 12.8262 9.32161 12.3737 9.26953 11.8789C9.08073 11.9245 8.9082 11.9993 8.75195 12.1035C8.60221 12.2012 8.46875 12.3249 8.35156 12.4746C8.24089 12.6178 8.15299 12.7773 8.08789 12.9531C8.0293 13.1289 8 13.3112 8 13.5V15.1699C8 15.3392 7.96745 15.502 7.90234 15.6582C7.83724 15.8079 7.74609 15.9414 7.62891 16.0586C7.51823 16.1693 7.38477 16.2572 7.22852 16.3223C7.07878 16.3874 6.91927 16.4199 6.75 16.4199C6.58724 16.4199 6.43099 16.3906 6.28125 16.332C6.13802 16.2669 6.00781 16.1823 5.89062 16.0781C5.77995 15.9674 5.6888 15.8405 5.61719 15.6973C5.54557 15.554 5.50651 15.401 5.5 15.2383C5.2526 15.3294 5.05078 15.4824 4.89453 15.6973C4.74479 15.9121 4.66992 16.153 4.66992 16.4199V16.8301C4.66992 17.2923 4.75456 17.7253 4.92383 18.1289C5.09961 18.5326 5.33724 18.8874 5.63672 19.1934C5.94271 19.4928 6.29753 19.7305 6.70117 19.9062C7.10482 20.082 7.53776 20.1699 8 20.1699ZM11.4082 19.2324C11.916 18.9264 12.3685 18.5684 12.7656 18.1582C13.1693 17.7415 13.5111 17.2891 13.791 16.8008C14.0775 16.306 14.2956 15.7819 14.4453 15.2285C14.5951 14.6686 14.6699 14.0924 14.6699 13.5C14.6699 12.4648 14.4746 11.498 14.084 10.5996C13.6934 9.70117 13.1367 8.88737 12.4141 8.1582C11.5547 7.29232 10.8906 6.32878 10.4219 5.26758C9.95312 4.20638 9.70247 3.0638 9.66992 1.83984C9.0319 1.85938 8.43294 2.0026 7.87305 2.26953C7.31315 2.52995 6.82487 2.87826 6.4082 3.31445C5.99805 3.74414 5.67253 4.24544 5.43164 4.81836C5.19727 5.38477 5.08008 5.98698 5.08008 6.625C5.08008 7.17839 5.16471 7.68294 5.33398 8.13867C5.50326 8.5944 5.74414 9.04362 6.05664 9.48633C6.1543 9.62305 6.22917 9.76302 6.28125 9.90625C6.33333 10.043 6.35938 10.196 6.35938 10.3652C6.35938 10.5671 6.32031 10.7591 6.24219 10.9414C6.16406 11.1172 6.0599 11.2702 5.92969 11.4004C5.79948 11.5306 5.64323 11.6348 5.46094 11.7129C5.28516 11.791 5.09635 11.8301 4.89453 11.8301C4.66016 11.8301 4.44206 11.7812 4.24023 11.6836C4.04492 11.5794 3.8724 11.4362 3.72266 11.2539C3.51432 10.9805 3.32552 10.6908 3.15625 10.3848C2.98698 10.0788 2.83724 9.76628 2.70703 9.44727L2.6875 9.47656C2.40755 9.84766 2.16667 10.248 1.96484 10.6777C1.75651 11.127 1.59701 11.5859 1.48633 12.0547C1.38216 12.5169 1.33008 12.9987 1.33008 13.5C1.33008 14.0924 1.40495 14.6686 1.55469 15.2285C1.70443 15.7819 1.91927 16.306 2.19922 16.8008C2.48568 17.2891 2.82747 17.7415 3.22461 18.1582C3.62826 18.5684 4.08398 18.9264 4.5918 19.2324C4.3444 18.8809 4.1556 18.5 4.02539 18.0898C3.89518 17.6797 3.83008 17.2598 3.83008 16.8301V16.4199C3.83008 16.1335 3.88542 15.8633 3.99609 15.6094C4.10677 15.3555 4.25651 15.1341 4.44531 14.9453C4.63411 14.7565 4.85547 14.6068 5.10938 14.4961C5.36328 14.3854 5.63346 14.3301 5.91992 14.3301H6.33008V15.1699C6.33008 15.2871 6.3724 15.3848 6.45703 15.4629C6.54167 15.541 6.63932 15.5801 6.75 15.5801C6.86068 15.5801 6.95833 15.541 7.04297 15.4629C7.1276 15.3848 7.16992 15.2871 7.16992 15.1699V13.5C7.16992 13.1549 7.23503 12.8327 7.36523 12.5332C7.49544 12.2272 7.67448 11.9603 7.90234 11.7324C8.13021 11.5046 8.39388 11.3255 8.69336 11.1953C8.99935 11.0651 9.32487 11 9.66992 11H10.0801V11.4199C10.0801 12.3314 10.3926 13.1387 11.0176 13.8418C11.3952 14.265 11.6816 14.7272 11.877 15.2285C12.0723 15.7233 12.1699 16.2572 12.1699 16.8301C12.1699 17.2598 12.1048 17.6797 11.9746 18.0898C11.8444 18.5 11.6556 18.8809 11.4082 19.2324Z"
    ></path>
</svg>`,v=r.b`<svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="#795700"
>
    <path
        d="M18.75 18.75H0L9.375 0L18.75 18.75ZM2.02148 17.5H16.7285L9.375 2.79297L2.02148 17.5ZM10 7.5V13.75H8.75V7.5H10ZM8.75 15H10V16.25H8.75V15Z"
    ></path>
</svg>`,b=r.b`
    <a
        href="${t=>t.mapLink}"
        target=${(t,e)=>e.parent.target}
        class="minimap-tooltipbutton"
        @focus="${(t,e)=>e.parent.focusOnMinimapHandler()}"
        ${Object(c.b)(t=>t.telemetryTag)}
    >
        <div
            class="${t=>!0===t.selected?"tooltipbutton-selected":""} minimap-tooltipbutton-inner"
        >
            <span
                tabindex="-1"
                role="presentation"
                aria-hidden="true"
                style="height:26px;margin-top:4px;"
            >
                ${t=>t.buttonSvg}
            </span>
        </div>
        <span class="minimap-tooltip-text">${t=>t.tooltipText}</span>
    </a>
`,y=r.b`
    <svg
        class="weather-minimap-alert"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 ${t=>{var e,a;return(null===(a=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===a?void 0:a.width)||"1200"}} ${t=>{var e,a;return(null===(a=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===a?void 0:a.height)||"400"}}"
    >
        <polygon
            points="${t=>t.minimapData.severeAlertPixelCoordinatesArray}"
            fill="${t=>t.minimapData.severeAlertColor}"
            stroke="${t=>t.minimapData.severeAlertColor}"
            stroke-width="2"
            stroke-opacity="1"
            fill-opacity="0.6"
            @mouseover="${(t,e)=>t.showAlertToolTipHandler(e.event,document.dir,t.minimapData.severeAlertTooltip)}"
            @mouseout="${(t,e)=>t.hideAlertTooltipHandler()}"
            ${Object(c.b)(t=>t.minimapData.severeAlertTelemetryTag)}
        ></polygon>
    </svg>
    <div
        ${Object(o.b)("minimapAlertTooltipHtml")}
        class="weather-minimap-alert-tooltip weather-minimap-alert-tooltipstatic"
    ></div>
`,w=r.b`
    <svg>
        <polygon
            points="${t=>t.severeAlertPixelCoordinatesArray}"
            fill="${t=>t.severeAlertColor}"
            stroke="${t=>t.severeAlertColor}"
            stroke-width="2"
            stroke-opacity="1"
            fill-opacity="0.6"
            @mousemove="${(t,e)=>e.parent.showAlertToolTipHandler(e.event,document.dir,t.severeAlertTooltip,!1)}"
            @mouseout="${(t,e)=>e.parent.hideAlertTooltipHandler()}"
        ></polygon>
    </svg>
`,x=r.b`
    <svg
        ${Object(o.b)("minimapAlertSvgHtml")}
        class="weather-minimap-alert"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 ${t=>{var e,a;return(null===(a=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===a?void 0:a.width)||"1200"}} ${t=>{var e,a;return(null===(a=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===a?void 0:a.height)||"400"}}"
    >
        <g>
            ${Object(s.c)(t=>t.minimapData.severeAlertData,w)}
        </g>
    </svg>
    <div ${Object(o.b)("minimapAlertTooltipHtml")} class="weather-minimap-alert-tooltip"></div>
`,C=r.b` ${Object(l.a)(t=>t.minimapData,r.b`
        <div class="weather-minimap-container">
            <a
                href=${t=>t.defaultMapPageUrl}
                target=${t=>t.target}
                tabindex="-1"
                ${Object(c.b)(t=>t.minimapTelemetryTag)}
            >
                ${Object(l.a)(t=>t.isSevereWeatherMap(),r.b` <img
                        class="weather-minimap-base"
                        alt="static map image"
                        src=${t=>t.minimapData.staticGreyMapLink}
                    />`)}
                ${Object(l.a)(t=>!t.isSevereWeatherMap(),r.b` <img
                            class="weather-minimap-base"
                            alt="static map image"
                            src=${t=>t.minimapData.staticMapLink}
                        />
                        <img
                            class="weather-minimap-base weather-minimap"
                            alt="weather minimap"
                            src=${t=>t.minimapData.weatherMinimapLink}
                        />`)}
                <div class="weather-minimap-base">
                    <div class="weather-minimap-pin">
                        <div class="weather-minimap-pin-inner"></div>
                    </div>
                    ${Object(l.a)(t=>(!t.minimapData.severeAlertData||t.minimapData.severeAlertData.length<1)&&t.isSevereWeatherMap(),y)}
                    ${Object(l.a)(t=>t.minimapData.severeAlertData&&t.minimapData.severeAlertData.length>0,x)}
                </div>
            </a>
            ${Object(l.a)(t=>t.isSevereWeatherMap()?t.minimapData.enableButtonBar:!t.minimapData.enableButtonBar,r.b` <div class="weather-minimap-buttons-container">
                    <div class="weather-minimap-buttons-group">
                        ${Object(s.c)(t=>t.minimapData.minimapButtons,b)}
                    </div>
                </div>`)}
            ${Object(l.a)(t=>t.isSevereWeatherMap()?t.minimapData.enableExpandButton:!t.minimapData.enableExpandButton,r.b`
            <a  href=${t=>t.defaultMapPageUrl}
                target=${t=>t.target}
                ${Object(c.b)(t=>t.minimapTelemetryTag)}
                @focus="${(t,e)=>t.focusOnMinimapHandler()}"
                class="weather-minimap-expand">
                <span tabindex="-1">
                    <span class="weather-minimap-expand-button">${t=>t.minimapData.minimapTooltip}</span><span role="presentation" aria-hidden="true" style="margin:1px">
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 15">
                        <path d="M15.0059 6C15.0059 6.55228 14.5581 7 14.0059 7C13.4536 7 13.0059 6.55228 13.0059 6V4.414L4.41986 13H6.00586C6.55814 13 7.00586 13.4477 7.00586 14C7.00586 14.5523 6.55814 15 6.00586 15H1.75586C1.34165 15 1.00586 14.6642 1.00586 14.25V10C1.00586 9.44771 1.45357 9 2.00586 9C2.55814 9 3.00586 9.44771 3.00586 10V11.586L11.5919 3H10.0059C9.45357 3 9.00586 2.55228 9.00586 2C9.00586 1.44772 9.45357 1 10.0059 1H14.2559C14.6701 1 15.0059 1.33579 15.0059 1.75V6Z"></path>
                    </svg>
                </span>
            </a>`)}
        </div>
    `)}`},Xb5i:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i,n=a("Am8i"),r=a("rvYQ");!function(t){t.WeatherCard="WeatherCard",t.Hovercard="HoverCard",t.Header="weather_header",t.Location="weather_location",t.Current="weather_today",t.UnitSwitch="degreeswitch",t.DailyForecast="dailyforecast",t.SeeForecast="seefullforecast",t.EditLocation="weathercard_header_editloc",t.Customization="weathercard_customization",t.MenuEdit="weathercard_customization_editloc",t.MenuHide="weathercard_customization_hide",t.MenuMore="weathercard_customization_more",t.PrecipitationMap="Precipitation",t.WindMap="Wind",t.RadarMap="Radar",t.CloudMap="Cloud",t.TemperatureMap="Temperatue",t.WeatherMap="Minimap",t.WeatherAlertMap="AlertMinimap",t.AlertArea="AlertArea",t.Winterstorm="Winterstorm",t.Wildfire="Wildfire",t.SevereWeather="SevereWeather",t.Nowcast="Nowcast",t.HourlyTrend="HourlyTrend",t.Vertical="weather",t.Category="weather",t.AirQuality="airQuality",t.WeatherHoverManualRotatePre="rotatepre",t.WeatherHoverManualRotateNext="rotatenext"}(i||(i={}));const o=(t,e,a,o=i.WeatherCard)=>{var s;if(!t||!e)return;const l=e.link,c=t.addOrUpdateChild({name:o,content:{type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),u=c.addOrUpdateChild({name:i.Header,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:e.locationName,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),d=c.addOrUpdateChild({name:i.Location,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:e.locationName,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),h=c.addOrUpdateChild({name:i.Current,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:e.temperature,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),p=c.addOrUpdateChild({name:i.UnitSwitch,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:e.unitAlternate,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),g=c.addOrUpdateChild({name:i.DailyForecast,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:"#",type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),m=c.addOrUpdateChild({name:i.AirQuality,behavior:n.c.Navigate,action:n.b.Click,content:{headline:e.aqi,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),f=[];for(let t=1;t<=5;t++){const e=c.addOrUpdateChild({name:i.DailyForecast+t,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:"#",type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},destinationUrl:l});f.push(e.getMetadataTag())}const v=c.addOrUpdateChild({name:i.SeeForecast,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:a.seeFullForecast,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:l}),b=c.addOrUpdateChild({name:i.Customization,behavior:n.c.More,type:n.f.ActionButton,content:{headline:i.Customization,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),y=c.addOrUpdateChild({name:i.EditLocation,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:a.menuEdit,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),w=c.addOrUpdateChild({name:i.MenuEdit,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:a.menuEdit,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),x=c.addOrUpdateChild({name:i.MenuHide,behavior:n.c.Hide,type:n.f.ActionButton,content:{headline:a.menuHideCard,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),C=c.addOrUpdateChild({name:i.MenuMore,behavior:n.c.Navigate,type:n.f.ActionButton,content:{headline:a.moreSettingOptStr,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},overrideDestinationUrl:`https://${r.a.contentLinkHost}/${r.a.CurrentMarket}/feed/personalize/settings`}),$=(null===(s=null==e?void 0:e.minimap)||void 0===s?void 0:s.severeAlertPixelCoordinatesArray)?i.WeatherAlertMap:i.WeatherMap,T=c.addOrUpdateChild({name:$,content:{type:n.d.StructuredData}}),D=T.addOrUpdateChild({name:i.PrecipitationMap,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.precipitationMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),S=T.addOrUpdateChild({name:i.RadarMap,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.radarMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),O=T.addOrUpdateChild({name:i.WindMap,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.windMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),L=T.addOrUpdateChild({name:i.CloudMap,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.cloudMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),M=T.addOrUpdateChild({name:i.TemperatureMap,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.temperatureMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),k=T.addOrUpdateChild({name:i.Wildfire,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.wildfireMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),A=T.addOrUpdateChild({name:i.Winterstorm,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.winterstormMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),j=T.addOrUpdateChild({name:i.SevereWeather,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.severeweatherMapTooltip,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),N=T.addOrUpdateChild({name:i.Nowcast,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.seeFullForecast,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),I=c.addOrUpdateChild({name:i.AlertArea,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:i.AlertArea,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),H=c.addOrUpdateChild({name:i.HourlyTrend,behavior:n.c.Navigate,action:n.b.Click,type:n.f.ActionButton,content:{headline:a.seeFullForecast,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category},destinationUrl:l}),z=c.addOrUpdateChild({name:i.WeatherHoverManualRotatePre,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:i.WeatherHoverManualRotatePre,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}}),P=c.addOrUpdateChild({name:i.WeatherHoverManualRotateNext,behavior:n.c.Customize,type:n.f.ActionButton,content:{headline:i.WeatherHoverManualRotateNext,type:n.d.StructuredData,vertical:i.Vertical,category:i.Category}});return{componentRoot:t,weatherCard:c,headerAnchor:u,locationAnchor:d,currentAnchor:h,unitSwitch:p,dailyForecast:g,dailyForecasts:f,seeForecastAnchor:v,editLocation:y,actionButton:b,menuEdit:w,menuHide:x,menuMore:C,precipitationMap:D,radarMap:S,windMap:O,cloudMap:L,temperatureMap:M,wildfireMap:k,winterstormMap:A,severeweatherMap:j,minimapTelemetry:T,alertArea:I,nowcastChart:N,hourlyTrend:H,airQuality:m,greetingRotatePre:z,greetingRotateNext:P}}},"Yn5/":function(t,e,a){"use strict";a.d(e,"a",(function(){return $}));var i,n,r=a("D57K"),o=a("P4Ao"),s=a("oePG"),l=a("QBS5"),c=a("9ZcS"),u=a("Gy7L"),d=a("qibw"),h=a("VRJB");!function(t){t._1_column="1_column",t._2_column="2_column"}(i||(i={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(n||(n={}));class p extends o.a{constructor(){super(),this.slideKeyPressHandler=(t,e)=>{this.adjust(e)},this.layout=i._2_column,this.orientation=n.horizontal,this.activeindicator=!1,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.isHovered=!1,this.isFocused=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((e,a)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[a],i=this.tabpanelIds[a];e.setAttribute("id","string"!=typeof t?"tab-"+(a+1):t),e.setAttribute("aria-selected",this.activeTabIndex===a?"true":"false"),e.setAttribute("aria-controls","string"!=typeof i?"panel-"+(a+1):i),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===a?"0":"-1"),this.activeTabIndex===a&&(this.activetab=e)}else this.showActiveIndicator=!1;e.style[t]=""+(a+1),this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")})},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach((t,e)=>{const a=this.tabIds[e],i=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof i?"panel-"+(e+1):i),t.setAttribute("aria-labelledby","string"!=typeof a?"tab-"+(e+1):a),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.keyCode;if(this.isHorizontal())switch(e){case u.h:t.preventDefault(),this.adjustBackward(t);break;case u.i:t.preventDefault(),this.adjustForward(t)}else switch(e){case u.j:t.preventDefault(),this.adjustBackward(t);break;case u.g:t.preventDefault(),this.adjustForward(t)}switch(e){case u.n:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case u.k:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let a=0;for(a=this.activetab?e.indexOf(this.activetab)+1:1,a===e.length&&(a=0);a<e.length&&e.length>1;){if(this.isFocusableElement(e[a])){this.moveToTabByIndex(e,a);break}if(this.activetab&&a===e.indexOf(this.activetab))break;a+1>=e.length?a=0:a+=1}},this.adjustBackward=t=>{const e=this.tabs;let a=0;for(a=this.activetab?e.indexOf(this.activetab)-1:0,a=a<0?e.length-1:a;a>=0&&e.length>1;){if(this.isFocusableElement(e[a])){this.moveToTabByIndex(e,a);break}a-1<0?a=e.length-1:a-=1}},this.moveToTabByIndex=(t,e)=>{const a=t[e];this.activetab=a,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,a.focus(),this.setComponent()},this.$fastController.addBehaviors([c.b])}autoScrollChanged(){this.$fastController.isConnected&&this.updateAutoScroll()}autoScrollIntervalMsChanged(){this.$fastController.isConnected&&this.updateAutoScroll()}handleChange(t,e){this.direction=t[e]}connectedCallback(){var t,e;super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.direction||(this.direction=(null===(t=this.provider)||void 0===t?void 0:t.designSystem).direction||d.a.ltr);s.b.getNotifier(null===(e=this.provider)||void 0===e?void 0:e.designSystem).subscribe(this,"direction"),this.activeindicator||(this.activeindicator=!1),this.updateAutoScroll()}disconnectedCallback(){window.clearTimeout(this.autoScrollTimer)}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition(),this.$emit("tabpanels-changed",this.tabpanels))}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return void 0===this.tabs?[null]:this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return void 0===this.tabpanels?[null]:this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(t){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),t||this.focusTab(),this.change())}isHorizontal(){return this.orientation===n.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",a=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[a];this.activeIndicatorRef.style[t]=""+(this.activeTabIndex+1);const n=this.activeIndicatorRef[a];this.activeIndicatorRef.style[t]=""+(this.prevActiveTabIndex+1);const r=n-i;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=""+(this.activeTabIndex+1),this.activeIndicatorRef.style.transform=e+"(0px)",this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t,e){void 0!==this.tabs&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Object(h.b)(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent(e))}focusTab(){this.tabs[this.activeTabIndex].focus()}handleFocusIn(t){this.isFocused=!0,this.updateAutoScroll()}handleFocusOut(t){null!==t.relatedTarget&&this.contains(t.relatedTarget)||(this.isFocused=!1,this.updateAutoScroll())}handleMouseOver(t){this.isHovered=!0,this.updateAutoScroll()}handleMouseOut(t){this.isHovered=!1,this.updateAutoScroll()}updateAutoScroll(){let t=!1;this.isHovered||this.isFocused||!this.autoScroll||(t=!0),t&&void 0===this.autoScrollTimer&&(this.autoScrollTimer=window.setTimeout(()=>{this.adjust(1,!0),this.autoScrollTimer=void 0,this.updateAutoScroll()},this.autoScrollIntervalMs||6e3)),t||void 0===this.autoScrollTimer||(window.clearTimeout(this.autoScrollTimer),this.autoScrollTimer=void 0)}}Object(r.e)([l.b],p.prototype,"layout",void 0),Object(r.e)([Object(l.b)({attribute:"auto-scroll",mode:"boolean"})],p.prototype,"autoScroll",void 0),Object(r.e)([Object(l.b)({attribute:"auto-scroll-interval-ms"})],p.prototype,"autoScrollIntervalMs",void 0),Object(r.e)([s.d],p.prototype,"nextFlipperTelemetryTag",void 0),Object(r.e)([s.d],p.prototype,"previousFlipperTelemetryTag",void 0),Object(r.e)([s.d],p.prototype,"direction",void 0),Object(r.e)([l.b],p.prototype,"orientation",void 0),Object(r.e)([l.b],p.prototype,"activeid",void 0),Object(r.e)([s.d],p.prototype,"tabs",void 0),Object(r.e)([s.d],p.prototype,"tabpanels",void 0),Object(r.e)([Object(l.b)({mode:"boolean"})],p.prototype,"activeindicator",void 0),Object(r.e)([s.d],p.prototype,"activeIndicatorRef",void 0),Object(r.e)([s.d],p.prototype,"showActiveIndicator",void 0);var g=a("C5kU"),m=a("6BDD"),f=a("UauI"),v=a("6vBc"),b=a("+53S"),y=a("Sdge"),w=a("eUhr");y.a;const x=m.b`
    <template
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        @focusin="${(t,e)=>t.handleFocusIn(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot name="previous-flipper">
            <fluent-flipper
                part="previous-flipper"
                class="previous-flipper"
                direction="${t=>t.direction===d.a.rtl?"next":"previous"}"
                @keypress="${(t,e)=>t.slideKeyPressHandler(e.event,-1)}"
                @click="${(t,e)=>t.slideKeyPressHandler(e.event,-1)}"
                ${Object(w.b)(t=>t.previousFlipperTelemetryTag)}
            >
            </fluent-flipper>
        </slot>
        ${g.c}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Object(f.b)("tabs")}></slot>

            ${Object(v.a)(t=>t.activeindicator,m.b`
                    <div
                        ${Object(b.b)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        <slot name="next-flipper">
            <fluent-flipper
                part="next-flipper"
                class="next-flipper"
                direction="${t=>t.direction===d.a.rtl?"previous":"next"}"
                @keypress="${(t,e)=>t.slideKeyPressHandler(e.event,1)}"
                @click="${(t,e)=>t.slideKeyPressHandler(e.event,1)}"
                ${Object(w.b)(t=>t.nextFlipperTelemetryTag)}
            >
            </fluent-flipper>
        </slot>

        ${g.b}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Object(f.b)("tabpanels")}></slot>
        </div>
    </template>
`;var C=a("TTa4");let $=class extends p{};$=Object(r.e)([Object(o.b)({name:"msft-info-pane",template:x,styles:C.a})],$)},Z5nQ:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var i=a("4X57");const n=i.a`
    .line-clamp {
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 3);
    }
`,r=i.a`
    .sd-action:not([appearance="lightweight"]) {
        --corner-radius: 999;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .sd-action::part(control) {
        width: 100%;
    }

    .sd-action::part(content) {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`},ZRAw:function(t,e,a){"use strict";a.d(e,"a",(function(){return K}));var i=Math.sqrt(50),n=Math.sqrt(10),r=Math.sqrt(2);function o(t,e,a){var o=(e-t)/Math.max(0,a),s=Math.floor(Math.log(o)/Math.LN10),l=o/Math.pow(10,s);return s>=0?(l>=i?10:l>=n?5:l>=r?2:1)*Math.pow(10,s):-Math.pow(10,-s)/(l>=i?10:l>=n?5:l>=r?2:1)}var s=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},l=function(t){let e=t,a=t;function i(t,e,i,n){for(null==i&&(i=0),null==n&&(n=t.length);i<n;){const r=i+n>>>1;a(t[r],e)<0?i=r+1:n=r}return i}return 1===t.length&&(e=(e,a)=>t(e)-a,a=function(t){return(e,a)=>s(t(e),a)}(t)),{left:i,center:function(t,a,n,r){null==n&&(n=0),null==r&&(r=t.length);const o=i(t,a,n,r-1);return o>n&&e(t[o-1],a)>-e(t[o],a)?o-1:o},right:function(t,e,i,n){for(null==i&&(i=0),null==n&&(n=t.length);i<n;){const r=i+n>>>1;a(t[r],e)>0?n=r:i=r+1}return i}}};const c=l(s),u=c.right;c.left,l((function(t){return null===t?NaN:+t})).center;var d=u,h=a("PvqL"),p=a("I6Yn"),g=function(t,e){e||(e=[]);var a,i=t?Math.min(e.length,t.length):0,n=e.slice();return function(r){for(a=0;a<i;++a)n[a]=t[a]*(1-r)+e[a]*r;return n}};function m(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function f(t,e){var a,i=e?e.length:0,n=t?Math.min(i,t.length):0,r=new Array(n),o=new Array(i);for(a=0;a<n;++a)r[a]=C(t[a],e[a]);for(;a<i;++a)o[a]=e[a];return function(t){for(a=0;a<n;++a)o[a]=r[a](t);return o}}var v=function(t,e){var a=new Date;return t=+t,e=+e,function(i){return a.setTime(t*(1-i)+e*i),a}},b=a("157b"),y=function(t,e){var a,i={},n={};for(a in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)a in t?i[a]=C(t[a],e[a]):n[a]=e[a];return function(t){for(a in i)n[a]=i[a](t);return n}},w=a("GEHm"),x=a("PXG9"),C=function(t,e){var a,i=typeof e;return null==e||"boolean"===i?Object(x.a)(e):("number"===i?b.a:"string"===i?(a=Object(h.a)(e))?(e=a,p.a):w.a:e instanceof h.a?p.a:e instanceof Date?v:m(e)?g:Array.isArray(e)?f:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?y:b.a)(t,e)},$=function(t,e){return t=+t,e=+e,function(a){return Math.round(t*(1-a)+e*a)}},T=function(t){return+t},D=[0,1];function S(t){return t}function O(t,e){return(e-=t=+t)?function(a){return(a-t)/e}:(a=isNaN(e)?NaN:.5,function(){return a});var a}function L(t,e,a){var i=t[0],n=t[1],r=e[0],o=e[1];return n<i?(i=O(n,i),r=a(o,r)):(i=O(i,n),r=a(r,o)),function(t){return r(i(t))}}function M(t,e,a){var i=Math.min(t.length,e.length)-1,n=new Array(i),r=new Array(i),o=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<i;)n[o]=O(t[o],t[o+1]),r[o]=a(e[o],e[o+1]);return function(e){var a=d(t,e,1,i)-1;return r[a](n[a](e))}}function k(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function A(){var t,e,a,i,n,r,o=D,s=D,l=C,c=S;function u(){var t,e,a,l=Math.min(o.length,s.length);return c!==S&&(t=o[0],e=o[l-1],t>e&&(a=t,t=e,e=a),c=function(a){return Math.max(t,Math.min(e,a))}),i=l>2?M:L,n=r=null,d}function d(e){return isNaN(e=+e)?a:(n||(n=i(o.map(t),s,l)))(t(c(e)))}return d.invert=function(a){return c(e((r||(r=i(s,o.map(t),b.a)))(a)))},d.domain=function(t){return arguments.length?(o=Array.from(t,T),u()):o.slice()},d.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},d.rangeRound=function(t){return s=Array.from(t),l=$,u()},d.clamp=function(t){return arguments.length?(c=!!t||S,u()):c!==S},d.interpolate=function(t){return arguments.length?(l=t,u()):l},d.unknown=function(t){return arguments.length?(a=t,d):a},function(a,i){return t=a,e=i,u()}}function j(){return A()(S,S)}function N(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}var I=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function H(t){if(!(e=I.exec(t)))throw new Error("invalid format: "+t);var e;return new z({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function z(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}H.prototype=z.prototype,z.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var P,F,R,_,B=function(t,e){if((a=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var a,i=t.slice(0,a);return[i.length>1?i[0]+i.slice(2):i,+t.slice(a+1)]},V=function(t){return(t=B(Math.abs(t)))?t[1]:NaN},E=function(t,e){var a=B(t,e);if(!a)return t+"";var i=a[0],n=a[1];return n<0?"0."+new Array(-n).join("0")+i:i.length>n+1?i.slice(0,n+1)+"."+i.slice(n+1):i+new Array(n-i.length+2).join("0")},U={"%":function(t,e){return(100*t).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return E(100*t,e)},r:E,s:function(t,e){var a=B(t,e);if(!a)return t+"";var i=a[0],n=a[1],r=n-(P=3*Math.max(-8,Math.min(8,Math.floor(n/3))))+1,o=i.length;return r===o?i:r>o?i+new Array(r-o+1).join("0"):r>0?i.slice(0,r)+"."+i.slice(r):"0."+new Array(1-r).join("0")+B(t,Math.max(0,e+r-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},W=function(t){return t},q=Array.prototype.map,G=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];F=function(t){var e,a,i=void 0===t.grouping||void 0===t.thousands?W:(e=q.call(t.grouping,Number),a=t.thousands+"",function(t,i){for(var n=t.length,r=[],o=0,s=e[0],l=0;n>0&&s>0&&(l+s+1>i&&(s=Math.max(1,i-l)),r.push(t.substring(n-=s,n+s)),!((l+=s+1)>i));)s=e[o=(o+1)%e.length];return r.reverse().join(a)}),n=void 0===t.currency?"":t.currency[0]+"",r=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?W:function(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}(q.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"-":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function d(t){var e=(t=H(t)).fill,a=t.align,d=t.sign,h=t.symbol,p=t.zero,g=t.width,m=t.comma,f=t.precision,v=t.trim,b=t.type;"n"===b?(m=!0,b="g"):U[b]||(void 0===f&&(f=12),v=!0,b="g"),(p||"0"===e&&"="===a)&&(p=!0,e="0",a="=");var y="$"===h?n:"#"===h&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",w="$"===h?r:/[%p]/.test(b)?l:"",x=U[b],C=/[defgprs%]/.test(b);function $(t){var n,r,l,h=y,$=w;if("c"===b)$=x(t)+$,t="";else{var T=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:x(Math.abs(t),f),v&&(t=function(t){t:for(var e,a=t.length,i=1,n=-1;i<a;++i)switch(t[i]){case".":n=e=i;break;case"0":0===n&&(n=i),e=i;break;default:if(!+t[i])break t;n>0&&(n=0)}return n>0?t.slice(0,n)+t.slice(e+1):t}(t)),T&&0==+t&&"+"!==d&&(T=!1),h=(T?"("===d?d:c:"-"===d||"("===d?"":d)+h,$=("s"===b?G[8+P/3]:"")+$+(T&&"("===d?")":""),C)for(n=-1,r=t.length;++n<r;)if(48>(l=t.charCodeAt(n))||l>57){$=(46===l?o+t.slice(n+1):t.slice(n))+$,t=t.slice(0,n);break}}m&&!p&&(t=i(t,1/0));var D=h.length+t.length+$.length,S=D<g?new Array(g-D+1).join(e):"";switch(m&&p&&(t=i(S+t,S.length?g-$.length:1/0),S=""),a){case"<":t=h+t+$+S;break;case"=":t=h+S+t+$;break;case"^":t=S.slice(0,D=S.length>>1)+h+t+$+S.slice(D);break;default:t=S+h+t+$}return s(t)}return f=void 0===f?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,f)):Math.max(0,Math.min(20,f)),$.toString=function(){return t+""},$}return{format:d,formatPrefix:function(t,e){var a=d(((t=H(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(V(e)/3))),n=Math.pow(10,-i),r=G[8+i/3];return function(t){return a(n*t)+r}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),R=F.format,_=F.formatPrefix;var Y=function(t,e,a,o){var s,l=function(t,e,a){var o=Math.abs(e-t)/Math.max(0,a),s=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),l=o/s;return l>=i?s*=10:l>=n?s*=5:l>=r&&(s*=2),e<t?-s:s}(t,e,a);switch((o=H(null==o?",f":o)).type){case"s":var c=Math.max(Math.abs(t),Math.abs(e));return null!=o.precision||isNaN(s=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(V(e)/3)))-V(Math.abs(t)))}(l,c))||(o.precision=s),_(o,c);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(s=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,V(e)-V(t))+1}(l,Math.max(Math.abs(t),Math.abs(e))))||(o.precision=s-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(s=function(t){return Math.max(0,-V(Math.abs(t)))}(l))||(o.precision=s-2*("%"===o.type))}return R(o)};function Z(t){var e=t.domain;return t.ticks=function(t){var a=e();return function(t,e,a){var i,n,r,s,l=-1;if(a=+a,(t=+t)===(e=+e)&&a>0)return[t];if((i=e<t)&&(n=t,t=e,e=n),0===(s=o(t,e,a))||!isFinite(s))return[];if(s>0){let a=Math.round(t/s),i=Math.round(e/s);for(a*s<t&&++a,i*s>e&&--i,r=new Array(n=i-a+1);++l<n;)r[l]=(a+l)*s}else{s=-s;let a=Math.round(t*s),i=Math.round(e*s);for(a/s<t&&++a,i/s>e&&--i,r=new Array(n=i-a+1);++l<n;)r[l]=(a+l)/s}return i&&r.reverse(),r}(a[0],a[a.length-1],null==t?10:t)},t.tickFormat=function(t,a){var i=e();return Y(i[0],i[i.length-1],null==t?10:t,a)},t.nice=function(a){null==a&&(a=10);var i,n=e(),r=0,s=n.length-1,l=n[r],c=n[s];return c<l&&(i=l,l=c,c=i,i=r,r=s,s=i),(i=o(l,c,a))>0?i=o(l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i,a):i<0&&(i=o(l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i,a)),i>0?(n[r]=Math.floor(l/i)*i,n[s]=Math.ceil(c/i)*i,e(n)):i<0&&(n[r]=Math.ceil(l*i)/i,n[s]=Math.floor(c*i)/i,e(n)),t},t}function K(){var t=j();return t.copy=function(){return k(t,K())},N.apply(t,arguments),Z(t)}},btax:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i=a("6BDD").b`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`},dMmp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.IsNullOrWhiteSpace=function(t){try{return null==t||"undefined"==t||t.toString().replace(/\s/g,"").length<1}catch(t){return console.log(t),!1}},t.Join=function(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];try{var n=a[0];if(Array.isArray(n)||n instanceof Array){for(var r=t.Empty,o=0;o<n.length;o++){var s=n[o];o<n.length-1?r+=s+e:r+=s}return r}if("object"==typeof n){var l=t.Empty,c=n;return Object.keys(n).forEach((function(t){l+=c[t]+e})),l=l.slice(0,l.length-e.length)}var u=a;return t.join.apply(t,[e].concat(u))}catch(e){return console.log(e),t.Empty}},t.Format=function(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];try{return e.match(t.regexNumber)?t.format(t.regexNumber,e,a):e.match(t.regexObject)?t.format(t.regexObject,e,a,!0):t.Empty}catch(e){return console.log(e),t.Empty}},t.format=function(e,a,i,n){return void 0===n&&(n=!1),a.replace(e,(function(e,a){var r,o=e.split(":");return o.length>1&&(a=o[0].replace("{",""),e=o[1].replace("}","")),null==(r=n?i[0][a]:i[a])||null==r||e.match(/{\d+}/)||void 0!==(r=t.parsePattern(e,r))&&null!=r?r:t.Empty}))},t.parsePattern=function(e,a){switch(e){case"L":return a.toLowerCase();case"U":return a.toUpperCase();case"d":if("string"==typeof a)return t.getDisplayDateFromString(a);if(a instanceof Date)return t.Format("{0:00}.{1:00}.{2:0000}",a.getDate(),a.getMonth(),a.getFullYear());break;case"s":if("string"==typeof a)return t.getSortableDateFromString(a);if(a instanceof Date)return t.Format("{0:0000}-{1:00}-{2:00}",a.getFullYear(),a.getMonth(),a.getDate());break;case"n":"string"!=typeof a&&(a=a.toString());var i=a.replace(/,/g,".");if(isNaN(parseFloat(i))||i.length<=3)break;var n=i.split(/[^0-9]+/g),r=n;n.length>1&&(r=[t.join.apply(t,[""].concat(n.splice(0,n.length-1))),n[n.length-1]]);var o=r[0],s=o.length%3,l=s>0?o.substring(0,s):t.Empty,c=o.substring(s).match(/.{3}/g);return(l=l+"."+t.Join(".",c))+(r.length>1?","+r[1]:"")}return"number"!=typeof a&&isNaN(a)||isNaN(+e)||t.IsNullOrWhiteSpace(a)?a:t.formatNumber(a,e)},t.getDisplayDateFromString=function(t){var e;if((e=t.split("-")).length<=1)return t;var a=e[e.length-1],i=e[e.length-2],n=e[e.length-3];return(a=(a=a.split("T")[0]).split(" ")[0])+"."+i+"."+n},t.getSortableDateFromString=function(e){var a=e.replace(",","").split(".");if(a.length<=1)return e;var i=a[a.length-1].split(" "),n=t.Empty;i.length>1&&(n=i[i.length-1]);var r=a[a.length-1].split(" ")[0]+"-"+a[a.length-2]+"-"+a[a.length-3];return!t.IsNullOrWhiteSpace(n)&&n.length>1?r+="T"+n:r+="T00:00:00",r},t.formatNumber=function(t,e){var a=e.length,i=t.toString();if(a<=i.length)return i;var n=a-i.length;return new Array(n+=1).join("0")+i},t.join=function(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];for(var n=t.Empty,r=0;r<a.length;r++)if(!("string"==typeof a[r]&&t.IsNullOrWhiteSpace(a[r])||"number"!=typeof a[r]&&"string"!=typeof a[r])){n+=""+a[r];for(var o=r+1;o<a.length;o++)if(!t.IsNullOrWhiteSpace(a[o])){n+=e,r=o-1;break}}return n},t.regexNumber=/{(\d+(:\w*)?)}/g,t.regexObject=/{(\w+(:\w*)?)}/g,t.Empty="",t}();e.String=i;var n=function(){function t(t){void 0===t&&(t=i.Empty),this.Values=[],this.Values=new Array(t)}return t.prototype.ToString=function(){return this.Values.join("")},t.prototype.Append=function(t){this.Values.push(t)},t.prototype.AppendFormat=function(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];this.Values.push(i.Format.apply(i,[t].concat(e)))},t.prototype.Clear=function(){this.Values=[]},t}();e.StringBuilder=n},eNhF:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("YBl9"),n=a("6eT7"),r=a("JIBo"),o=a("lFvR"),s=a("qTjs");function l(t=0,e=1,a=(()=>"#FFF"),l=s.b){return Object(r.d)(r=>{const s=Object(o.o)(l,r),c=Object(o.o)(a,r),{r:u,g:d,b:h}=Object(i.d)(s);return`linear-gradient(160deg, ${new n.a(u,d,h,t).toStringWebRGBA()}, ${new n.a(u,d,h,e).toStringWebRGBA()}), ${c}`})}},foc0:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const i={1:["#1360A7","linear-gradient(150.64deg, #1B7BC1 0%, #1360A7 100%)"],4:["#1C54A7","linear-gradient(150.64deg, #4177C1 0%, #1C54A7 100%)"],8:["#2A5194","linear-gradient(150.64deg, #5173AF 0%, #2A5194 100%)"],27:["#37368F","linear-gradient(150.64deg, #6B6DC0 0%, #37368F 100%)"],7:["#4F598D","linear-gradient(150.64deg, #6974A7 0%, #4F598D 100%)"],9:["#5D5B75","linear-gradient(150.64deg, #73738D 0%, #5D5B75 100%)"],6:["#68553C","linear-gradient(150.64deg, #846D4D 0%, #68553C 100%)"]},n={1:["#FFECB1","linear-gradient(315deg, #FFECB1 0%, rgba(255, 236, 177, 0) 100%)"],4:["#DFF9FF","linear-gradient(320.01deg, #DFF9FF 0%, rgba(223, 249, 255, 0) 100%)"],8:["#BFE0FF","linear-gradient(320.01deg, #BFE0FF 0%, rgba(191, 224, 255, 0) 100%)"],27:["#C4D4FE","linear-gradient(313.85deg, #C4D4FE 0%, rgba(196, 212, 254, 0) 112.31%)"],7:["#C1BAD1","linear-gradient(320.01deg, #C1BAD1 0%, rgba(193, 186, 209, 0) 100%)"],9:["#E5CFAD","linear-gradient(320.01deg, #E5CFAD 0%, rgba(229, 207, 173, 0) 100%)"],6:["#F2E8FF","linear-gradient(318.98deg, #F2E8FF 6.05%, rgba(242, 232, 255, 0) 100%)"]},r={1:["#565138","linear-gradient(315deg, #565138 0%, rgba(86, 81, 56, 0) 100%)"],4:["#253539","linear-gradient(320.01deg, #253539 0%, rgba(37, 53, 57, 0) 100%)"],8:["#2F3F48","linear-gradient(320.01deg, #2F3F48 0%, rgba(47, 63, 72, 0) 100%)"],27:["#2A3342","linear-gradient(313.85deg, #2A3342 0%, rgba(42, 51, 66, 0) 112.31%)"],7:["#434453","linear-gradient(320.01deg, #434453 0%, rgba(67, 68, 83, 0) 100%)"],9:["#403737","linear-gradient(320.01deg, #403737 0%, rgba(64, 55, 55, 0) 100%)"],6:["#342D3A","linear-gradient(318.98deg, #342D3A 6.05%, rgba(52, 45, 58, 0) 100%)"]},o={1:"1",2:"1",3:"1",4:"4",5:"4",6:"6",7:"7",8:"8",9:"9",10:"8",11:"8",12:"9",13:"8",14:"8",15:"7",16:"7",17:"8",18:"9",19:"8",20:"7",21:"9",22:"8",23:"8",24:"7",25:"7",26:"7",27:"27",28:"1",29:"1",30:"4",31:"4",32:"4",33:"6",34:"7",35:"8",36:"9",37:"8",38:"8",39:"9",40:"8",41:"8",42:"7",43:"7",44:"8",45:"9",46:"8",47:"7",48:"9",49:"8",50:"8",51:"8",52:"7",53:"7",54:"27",57:"7",58:"7",59:"7",60:"7",61:"6",62:"6",63:"9",64:"9",65:"9",66:"9",67:"27",68:"27",69:"8",70:"8",71:"8",72:"8",73:"9",74:"9",75:"8",76:"8",77:"8",78:"8",79:"8",80:"8",81:"7",82:"7",83:"8",84:"8",85:"8",86:"8",87:"6",88:"6",89:"9",90:"9",91:"6",92:"6",93:"6",94:"6",95:"9",96:"9",101:"1",102:"1"};class s{static getSkyCodeBackgroundGradientColors(t){const e=Object.prototype.hasOwnProperty.call(o,t)?o[t]:t;return i[e]}static getSkyCodeLightBackgroundGradientColors(t){const e=Object.prototype.hasOwnProperty.call(o,t)?o[t]:t;return n[e]}static getSkyCodeDarkBackgroundGradientColors(t){const e=Object.prototype.hasOwnProperty.call(o,t)?o[t]:t;return r[e]}static getAlertIconSvgFillColors(t){return"Y"===t?["#FFD02C","#795700"]:"O"===t?["#E67E22","white"]:"R"===t?["#E74C3C","white"]:["#FFD02A","#795700"]}static getAlertIconSvgString(t){const e=this.getAlertIconSvgFillColors(t);return`\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                <path d="M6.77446 3.44842C7.16811 2.79728 8.11588 2.80686 8.49628 3.46584L13.1341 11.5001C13.519 12.1667 13.0379 13 12.2681 13H2.7731C1.99431 13 1.51441 12.1491 1.91733 11.4826L6.77446 3.44842Z" fill="${e[0]}"/>\n                <rect x="7.01489" y="6" width="1" height="4" rx="0.5" fill="${e[1]}"/>\n                <rect x="7.01489" y="11" width="1" height="1" rx="0.5" fill="${e[1]}"/>\n            </svg>\n        `}}},gE8t:function(t,e,a){"use strict";a.d(e,"a",(function(){return C}));var i=a("D57K"),n=a("P4Ao"),r=a("hWPV"),o=a("kL0l"),s=a("4X57"),l=a("wHpb"),c=a("oqLQ"),u=a("j9Xn");const d=s.a`
    .weatherNowcastContainer {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 6px;
        height: 100%;
        width: 268px;
        overflow: hidden;
    }

    .timelineLabels {
        font-size: 12px;
        line-height: 20px;
        text-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
        fill: currentcolor;
        text-anchor: middle;
    }

    .nowcastChart {
        height: 136px;
        width: 268px;
    }

    .stroke03 {
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 1;
    }

    :host([background="light"]) .stroke03 {
        stroke: ${o.P.var};
    }

    .stroke05 {
        stroke: rgba(255, 255, 255, 0.5);
    }

    :host([background="light"]) .stroke05 {
        stroke: ${o.P.var};
    }

    .stroke1 {
        stroke: currentcolor;
    }

    .rainCurve {
        fill: rgba(255, 255, 255, 0.15);
        stroke: rgb(98, 178, 239);
        stroke-width: 1;
    }

    :host([background="light"]) .rainCurve {
        fill: rgba(170, 227, 255, 0.3);
    }

    ::slotted(fluent-anchor:hover),
    ::slotted(fluent-anchor:active),
    ::slotted(fluent-anchor:${l.a}) {
        background: ${o.v.var};
    }
`.withBehaviors(o.P,o.v,Object(c.c)(s.a`
        :host {
            forced-color-adjust: auto;
        }

        .timelineLabels {
            fill: ${u.a.ButtonText};
        }

        .stroke03 {
            stroke: ${u.a.GrayText};
            stroke-width: 1;
        }

        .stroke05 {
            stroke: ${u.a.GrayText};
        }

        .stroke1 {
            stroke: ${u.a.GrayText};
        }
    `));var h=a("Z5nQ"),p=a("S35a"),g=a("m1Vi"),m=a("6BDD"),f=a("6vBc"),v=a("UNqU"),b=a("eUhr");p.a,g.b;const y="https://assets.msn.com/weathermapdata/1/static/timeline/rainfall_blue.svg",w="https://assets.msn.com/weathermapdata/1/static/timeline/snowfall_blue.svg",x=m.b` ${Object(f.a)(t=>t.nowcastData,m.b` <fluent-anchor
        class="weatherNowcastContainer"
        href="${t=>t.href}"
        target="${t=>t.target}"
        tabindex="-1"
        ${Object(b.b)(t=>t.telemetryTag)}
    >
        <svg
            class="nowcastChart"
            role="img"
            viewBox="0 0 268 136"
            width="268"
            height="136"
        >
            ${t=>t.constructClipRects()}
            <g class="startStopLines">
                ${Object(v.c)(t=>[...Array(t.nowcastData.dashlineXIndexes.length/2).keys()],m.b` <svg>
                        <line
                            x1="${(t,e)=>e.parent.nowcastData.dashlineXIndexes[2*t]}"
                            x2="${(t,e)=>e.parent.nowcastData.dashlineXIndexes[2*t+1]}"
                            y1="25"
                            y2="100"
                            class="stroke05"
                            stroke-dasharray="3 3"
                        />
                    </svg>`)}
            </g>
            <g class="timelineChannel">
                <!-- 4 horizontal lines -->
                <line x1="49" y1="25" x2="241" y2="25" class="stroke03"></line>
                <line x1="49" y1="50" x2="241" y2="50" class="stroke03"></line>
                <line x1="49" y1="75" x2="241" y2="75" class="stroke03"></line>
                <line x1="49" y1="100" x2="241" y2="100" class="stroke1"></line>

                <!-- timeline markers -->
                <line x1="49" y1="103" x2="49" y2="109" class="stroke03"></line>
                <line x1="81" y1="103" x2="81" y2="107" class="stroke03"></line>
                <line x1="113" y1="103" x2="113" y2="107" class="stroke03"></line>
                <line x1="145" y1="103" x2="145" y2="109" class="stroke03"></line>
                <line x1="177" y1="103" x2="177" y2="107" class="stroke03"></line>
                <line x1="209" y1="103" x2="209" y2="107" class="stroke03"></line>
                <line x1="242" y1="103" x2="242" y2="109" class="stroke03"></line>
            </g>
            <g class="timelineLabels">
                <text x="48" y="125">
                    ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[0]}
                </text>
                <text x="144" y="125">
                    ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[1]}
                </text>
                <text x="241" y="125">
                    ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[2]}
                </text>
            </g>
            <g class="labels">
                <!-- light region -->
                <image
                    x="23.5"
                    y="84.5"
                    href="${t=>t.nowcastData.precipitationType!==r.a.Snow?y:w}"
                ></image>
                <!-- middle rain region -->
                <image
                    x="19.5"
                    y="59.5"
                    href="${t=>t.nowcastData.precipitationType!==r.a.Snow?y:w}"
                ></image>
                <image
                    x="27.5"
                    y="59.5"
                    href="${t=>t.nowcastData.precipitationType===r.a.Rain?y:w}"
                ></image>
                <!-- heavy rain region -->
                <image
                    x="15.5"
                    y="34.5"
                    href="${t=>t.nowcastData.precipitationType!==r.a.Snow?y:w}"
                ></image>
                <image
                    x="23.5"
                    y="34.5"
                    href="${t=>t.nowcastData.precipitationType===r.a.Rain?y:w}"
                ></image>
                <image
                    x="31.5"
                    y="34.5"
                    href="${t=>t.nowcastData.precipitationType!==r.a.Snow?y:w}"
                ></image>
            </g>
            <g class="rainCurve">
                <path
                    d="${t=>t.nowcastData.curvePath}"
                    id="rain-curve"
                    clip-path="url(#${t=>t.nowcastData.clipId})"
                />
            </g>
        </svg>
    </fluent-anchor>`)}`;let C=class extends r.b{};C=Object(i.e)([Object(n.b)({name:"msft-weather-nowcast",template:x,styles:[d,h.b],shadowOptions:{delegatesFocus:!0}})],C)},hWPV:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c}));var i,n=a("D57K"),r=a("P4Ao"),o=a("6BDD"),s=a("oePG"),l=a("QBS5");!function(t){t[t.Rain=0]="Rain",t[t.Snow=1]="Snow",t[t.Sleet=2]="Sleet",t[t.NoRain=255]="NoRain"}(i||(i={}));class c extends r.a{connectedCallback(){super.connectedCallback()}constructClipRects(){let t=`<svg><defs><clipPath id="${this.nowcastData.clipId}">`;for(let e=0;e<this.nowcastData.clips.length;e+=4)t=`${t}<rect x="${this.nowcastData.clips[e]}" y="25"\n                           width="${this.nowcastData.clips[e+2]}" height="75"></rect>`;return o.b`${t}</clipPath></defs></svg>`}}Object(n.e)([s.d],c.prototype,"nowcastData",void 0),Object(n.e)([l.b],c.prototype,"target",void 0),Object(n.e)([l.b],c.prototype,"telemetryTag",void 0),Object(n.e)([l.b],c.prototype,"href",void 0),Object(n.e)([l.b],c.prototype,"background",void 0)},i3c9:function(t,e,a){var i,n,r;t.exports=(r=a("Ni7E"),n=(i=r).lib.WordArray,i.enc.Base64={stringify:function(t){var e=t.words,a=t.sigBytes,i=this._map;t.clamp();for(var n=[],r=0;r<a;r+=3)for(var o=(e[r>>>2]>>>24-r%4*8&255)<<16|(e[r+1>>>2]>>>24-(r+1)%4*8&255)<<8|e[r+2>>>2]>>>24-(r+2)%4*8&255,s=0;s<4&&r+.75*s<a;s++)n.push(i.charAt(o>>>6*(3-s)&63));var l=i.charAt(64);if(l)for(;n.length%4;)n.push(l);return n.join("")},parse:function(t){var e=t.length,a=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var r=0;r<a.length;r++)i[a.charCodeAt(r)]=r}var o=a.charAt(64);if(o){var s=t.indexOf(o);-1!==s&&(e=s)}return function(t,e,a){for(var i=[],r=0,o=0;o<e;o++)if(o%4){var s=a[t.charCodeAt(o-1)]<<o%4*2,l=a[t.charCodeAt(o)]>>>6-o%4*2;i[r>>>2]|=(s|l)<<24-r%4*8,r++}return n.create(i,r)}(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},r.enc.Base64)},ilNR:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i=["1","2","3","4","6","7","8","9","10","13","17","19","20","24","28","29","30","31","32","34","35","37","40","41","42","44","47","51","80","15","25","26","59","22","23","79","11","69","71","14","27","67","81","75","77","83","85","38","70","72","54","68","52","53","60","46","49","50","82","76","78","84","86","33","61","62","87","88","93","94","95","96","12","18","21","36","39","45","48","63","64","89","90"]},jVi4:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var i=a("D57K"),n=a("P4Ao"),r=a("5ZAu"),o=a("QBS5"),s=a("oePG");class l extends n.a{constructor(){super(...arguments),this.pendingTooltipReposition=!1}focusOnMinimapHandler(){this.$emit("focusmap")}isSevereWeatherMap(){return!!this.minimapData.severeAlertTooltip&&!!this.minimapData.severeAlertColor&&!!this.minimapData.severeAlertPixelCoordinatesArray||!!this.minimapData.severeAlertData&&this.minimapData.severeAlertData.length>0}showAlertToolTipHandler(t,e,a,i=!0){a&&this.minimapAlertTooltipHtml&&(this.minimapAlertTooltipHtml.innerHTML=a,this.minimapAlertTooltipHtml.style.display="block",i||this.pendingTooltipReposition||(this.pendingTooltipReposition=!0,r.a.queueUpdate(()=>this.updateAlertTooltipPosition(t,e,a))))}updateAlertTooltipPosition(t,e,a){if(this.minimapAlertSvgHtml&&this.minimapAlertTooltipHtml){const i=6*a.length+12,n=32,r=this.minimapAlertSvgHtml.getBoundingClientRect(),o=r.right-r.left,s=r.bottom-r.top,l=s/2*-1,c=t.clientY-r.top-s/2-n-5,u="rtl"!=e?o-i:0,d="rtl"!=e?0:-1*(o-i),h="rtl"!=e?t.clientX-r.left-i/2:t.clientX-r.left-o+i/2;this.minimapAlertTooltipHtml.style.transform=`translateX(${Math.min(Math.max(d,h),u)}px) translateY(${Math.max(l,c)}px)`,this.pendingTooltipReposition=!1}}hideAlertTooltipHandler(){this.minimapAlertTooltipHtml&&(this.minimapAlertTooltipHtml.style.display="none")}connectedCallback(){super.connectedCallback()}}Object(i.e)([o.b],l.prototype,"target",void 0),Object(i.e)([o.b],l.prototype,"minimapTelemetryTag",void 0),Object(i.e)([o.b],l.prototype,"defaultMapPageUrl",void 0),Object(i.e)([s.d],l.prototype,"minimapData",void 0);var c=a("CzTk"),u=a("oqLQ"),d=a("sfV1"),h=a("cQsl"),p=a("kL0l"),g=a("4X57"),m=a("j9Xn");const f=g.a`
    .weather-minimap-expand {
        right: 6px;
    }

    .weather-minimap-buttons-container {
        left: 6px;
    }

    .minimap-tooltip-text {
        left: 120%;
    }

    .minimap-tooltip-text::before {
        right: 100%;
    }

    .weather-minimap-alert-tooltipstatic {
        left: 50%;
    }

    .weather-minimap-expand-button {
        border-right: 1px solid #ececec;
    }
`,v=g.a`
    .weather-minimap-expand {
        left: 6px;
    }
    .weather-minimap-buttons-container {
        right: 6px;
    }

    .minimap-tooltip-text {
        right: 120%;
    }

    .minimap-tooltip-text::before {
        left: 100%;
    }

    .weather-minimap-alert-tooltipstatic {
        right: 50%;
    }

    .weather-minimap-expand-button {
        border-left: 1px solid #ececec;
    }
`,b=g.a`
    .weather-minimap-container {
        width: 100%;
        height: 100%;
        border: 0px;
        cursor: pointer;
    }

    .weather-minimap-base {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100% !important;
        width: 100%;
        object-fit: cover;
        transform: translate(-50%, -50%);
        border-radius: calc(var(--corner-radius) * 1px);
    }

    .weather-minimap-alert {
        cursor: pointer;
        height: 100%;
        width: 100%;
    }

    .weather-minimap-alert-tooltip {
        display: none;
        position: absolute;
        cursor: pointer;
        overflow: hidden;
        border-radius: calc(var(--corner-radius) * 3px);
        font-size: 13px;
        pointer-events: none;
        white-space: nowrap;
        --elevation: 4;
        ${h.a}
        padding: 6px;
        top: 50%;
        transform: translate(0%, -100%);
    }

    .weather-minimap-alert-tooltip {
        background-color: #ffffff;
        color: #444444;
    }

    .weather-minimap-pin {
        position: absolute;
        cursor: pointer;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        object-fit: cover;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        overflow: visible;
        background: #ffd02e;
        border: 3px solid #fff;
        box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .weather-minimap-pin-inner {
        height: 24px;
        width: 24px;
        min-width: 24px;
        border-radius: 50%;
        border: 5px solid #fff9;
        box-shadow: 0px 4px 13px rgb(0 0 0 / 12%);
        animation-name: location-pin-border;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes location-pin-border {
        0% {
            transform: scale(0.2, 0.2);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8, 0.8);
            opacity: 0;
        }
    }

    .weather-minimap {
        opacity: 0.55;
    }

    .weather-minimap-buttons-container {
        position: absolute;
        border: 0px;
        top: 12px;
    }

    .weather-minimap-buttons-group {
        width: 24px;
        border-radius: 3px;
        padding: 1px;
        background-color: #ffffff;
        --elevation: 4;
        ${h.a}
        animation: delayFadeIn ease 0.8s;
    }

    .minimap-tooltipbutton {
        position: relative;
        display: inline-block;
        border-radius: 1px;
        border: 0px;
    }

    .tooltipbutton-selected {
        background-color: #ffd02c;
    }

    .minimap-tooltipbutton-inner {
        width: 22px;
        height: 26px;
        padding: 0px;
        overflow: visible;
        margin: 1px;
        border: 0px;
        outline: none;
        border-radius: calc(var(--corner-radius) * 3px);
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .minimap-tooltip-text::before {
        content: "";
        position: absolute;
        top: 0px;
        margin-top: 9px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #ffd02c transparent transparent;
    }

    .minimap-tooltip-text {
        visibility: hidden;
        background-color: #ffd02c;
        color: #666666;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        text-align: center;
        border-radius: 1px;
        padding: 3px 2px;
        position: absolute;
        white-space: nowrap;
        z-index: 600;
        top: 6px;
    }

    .minimap-tooltipbutton:hover .minimap-tooltipbutton-inner {
        background-color: #ffd02c;
    }

    .minimap-tooltipbutton:focus .minimap-tooltipbutton-inner {
        background-color: #ffd02c;
    }

    .minimap-tooltipbutton:hover .minimap-tooltip-text {
        visibility: visible;
    }

    .minimap-tooltipbutton:focus .minimap-tooltip-text {
        visibility: visible;
    }

    .weather-minimap-expand {
        position: absolute;
        display: inline-flex;
        width: -webkit-fit-content;
        bottom: 12px;
        border-radius: calc(var(--corner-radius) * 2px);
        background: #ffffff;
        cursor: pointer;
        animation: delayFadeIn ease 0.8s;
        text-decoration: none;
    }

    .weather-minimap-expand > span:first-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        outline: none;
    }

    .weather-minimap-expand-button {
        font-style: normal;
        font-weight: 500;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        text-align: center;
        width: -webkit-fit-content;
        color: #666666;
        z-index: 1;
        padding: 0 10px;
    }
`.withBehaviors(p.o,p.z,p.D,p.G,p.O,p.P,d.a,d.b,new c.a(f,v),Object(u.c)(g.a`
            .minimap-tooltipbutton svg {
                opacity: 1;
                fill: ${m.a.ButtonText};
            }
            .weather-minimap-expand svg {
                opacity: 1;
                fill: ${m.a.ButtonText};
            }
        `));var y=a("XMNS");let w=class extends l{};w=Object(i.e)([Object(n.b)({name:"msft-weather-minimap",template:y.f,styles:[b],shadowOptions:{delegatesFocus:!0}})],w)},jyFo:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var i=a("Jw3B");i.a.c4,i.a.c3,i.a.c2,i.a.c4,i.a.c3,i.a.c2;var n=a("EK+a"),r=a("+MTP"),o=a("C8K2"),s=a("plCa");class l{static now(){return new Date}static getSunMoonRotate(t=0,e,a,i=0,n=!1){const r=n?a:e,o=n?e:a;let s=0;if(t<r.getTime())s=0;else if(t>o.getTime())s=180;else{s=180*(t-r.getTime())/Math.abs(o.getTime()-r.getTime())}return(n?-s:s-180)-i}static indexOfMax(t,e){let a=Number.MIN_VALUE,i=-1;for(let n=0;n<t.length;++n){const r=e(t[n]);r>a&&(a=r,i=n)}return t[i]}static interval(t,e){return Math.abs(t.getTime()-e.getTime())/36e5}static extractTimeLabel(t){const e=l.REG_TIME.exec(t);return e?e[0]:null}static resetHHMM(t){const e=l.REG_ISOSTRING_HH_MM.exec(t),a=e.index,i=e[0].length;return t.substr(0,a)+"00:00.000"+t.substr(a+i)}static getLocalizedDayLabel(t,e){return e.formatDayWithWeek(t,{forceWeekdayAhead:!0,excludeComma:!0})}static getLocalizedMonthDayYearLabel(t,e,a){return e.formatMonthDayYear(t,{excludeComma:!1,useComma:a})}static localizedTimeFromDate(t,e,a,i=!0){const n=new Date(t),r={excludeSpace:i,excludeComma:!0};return a?e.formatHour(n,r):e.formatHourMinute(n,r)}static generateBlock(t,e){const a=[];let i={items:[]};for(let n=0,r=t.length;n<r;++n){const r=t[n],o=e(r);void 0!==i.start&&i.key===o||(i={items:[]},i.key=o,i.start=r,a.push(i)),i.items.push(r)}for(let t=0,e=a.length;t<e;++t)a[t].end=a[t].items.slice(-1)[0];return a}static isLocalTimeZone(t,e){const a=t.getTimezoneOffset(),i=parseInt(e);return a===0-(60*i+(i<0?-1:1)*parseInt(l.REG_OFFSET_MINS.exec(e)[1]))}static isNorthAmericanArea(t,e){return t<=84&&t>=7&&e<=-11&&e>=-172.5}static isEuropeRegion(t,e){return t>=31&&t<=74&&e>=-30&&e<=36}static getMsnCompitableLocationName(t){return[t.locality,t.region,t.country].filter(t=>!!t).join(",").replace(/[&\s]/g,"-").replace(".","")}static isValidValue(t){const e=""+t;return""!==e&&e.indexOf("null")<0&&e.indexOf("undefined")<0&&e.indexOf("N/A")<0}static mapColumnToWidth(t){switch(t){case i.a.c1:return o.b;case i.a.c2:return o.c;case i.a.c3:return o.d;case i.a.c4:return o.e;case i.a.c5:return o.f;default:throw new Error("Unknown columnArrangement: "+t)}}}l.REG_TIME=new RegExp("([\\d]{2}):([\\d]{2})"),l.REG_OFFSET_MINS=new RegExp("\\:([\\d]{2})"),l.REG_ISOSTRING_HH_MM=new RegExp("[\\d]{2}:[\\d]{2}.[\\d}]{3}"),l.calculateContainerWidthAndColumn=(t,e)=>{switch(Object(s.a)().currentColumnArrangement){case i.a.c1:return[o.b,1];case i.a.c2:return[o.c,2];case i.a.c3:return t||e?[o.d,3]:[o.c,2];case i.a.c4:return t?[o.e,4]:[o.d,3];case i.a.c5:return t?[o.f,5]:[o.e,4]}};var c=a("I6Lx");class u{constructor(t){this.data=t,this.day24HDict=new Map,this.forecasts=(t&&t.forecast||[]).slice(0,10);const e=this.data&&this.data.source.location&&this.data.source.location.TimezoneName;this.timeUtility=new n.a(c.b.Locale,e)}get currentLocation(){return this.data.currentLocation}get currentCondition(){return this.data.currentCondition}get source(){return this.data.source}get alertsInfo(){return this.data.alertsInfo}get regionData(){return this.data.regionData}get mapsMetaData(){return this.data.mapsMetaData}get provider(){return this.data.provider}get aqiProvider(){return this.data.aqiProvider}get nowcasting(){return this.data.nowcasting}get lastUpdated(){return this.data.lastUpdated}get isPartialHour(){return this.data.isPartialHour}get summary(){return this._summary||(this._summary=this.computeSummary()),this._summary}get poor(){return this.summary.poor}get timeline(){return this.summary.timelineData}get timelineSample(){return this.summary.poor?this.summary.timelineData:this.summary.timelineData.filter((t,e)=>e%2==0)}get timelineSample2(){const t=this.summary.timelineData.findIndex(t=>1===t.dayIndex);return this.summary.poor?this.summary.timelineData:this.summary.timelineData.filter((e,a)=>0===e.dayIndex?a%4==0:(a-t-1)%4==0)}get tempRange(){return this.summary}get totalTimelineSliceCount(){return this.summary.totalTimelineSliceCount}sliceOffset(t,e=!1){var a,i,n,r,o,s;const l=this.summary.dayIndexes[t];if(this.summary.poor)return l<0||void 0===this.summary.timelineData[l]?-1:Math.max(0,this.summary.timelineData[l].offsetSliceCount-1);if(0!==t&&e)return null!==(i=null===(a=this.summary.timelineData[l+1])||void 0===a?void 0:a.offsetSliceCount)&&void 0!==i?i:-1;return l%2==0?null!==(r=null===(n=this.summary.timelineData[l])||void 0===n?void 0:n.offsetSliceCount)&&void 0!==r?r:-1:null!==(s=null===(o=this.summary.timelineData[l+1])||void 0===o?void 0:o.offsetSliceCount)&&void 0!==s?s:-1}skyCode(t){return this.forecasts[t].normalizedSkyCode}day24H(t,e=!1){const a=t+(e?100:0);let i=this.day24HDict.get(a);if(!i){const n=this.forecasts[t-1]||{hourly:[]},r=this.forecasts[t+1]||{hourly:[]},o=this.forecasts[t];if(o){let a;e?a=o.hourly||[]:this.poor?(a=o.hourly||[],0===t&&(a=(o.hourly||[]).concat(r.hourly||[]).slice(0,9))):a=t===this.forecasts.length-1?n.hourly.concat(o.hourly||[]).slice(-24):(o.hourly||[]).concat(r.hourly).slice(0,24);const s=a.reduce((t,e)=>Math.min(e.temperature,t),1e4),l=a.reduce((t,e)=>Math.max(e.temperature,t),-1e4);i={h24:a,minTemp:s,maxTemp:l,scale:u.createScale(s,l)}}this.day24HDict.set(a,i)}return i}computeSummary(){const t={minTemp:1e4,maxTemp:-1e4,timelineData:[],dayIndexes:[],start:null,totalTimelineSliceCount:0,poor:!0,indexOfDayNoData:0,indexOfTimelineNoData:0};if(!this.data||!this.data.forecast)return t;let e=0;for(let a=0;a<this.data.forecast.length;++a){const i=this.data.forecast[a];if(t.minTemp=Math.min(t.minTemp,i.lowTemp),t.maxTemp=Math.max(t.maxTemp,i.highTemp),!(a>0&&i.hourly.length<=0)){for(let e=0;e<i.hourly.length;++e){const n=i.hourly[e],o=new Date(n.timeStr);t.start||(t.start=new Date(n.timeStr)),t.minTemp=Math.min(t.minTemp,n.temperature),t.maxTemp=Math.max(t.maxTemp,n.temperature);const s={debug:`${a}-${e}`,snapshot:n,offsetSliceCount:l.interval(t.start,o),time:o,text:this.timeUtility.formatHourLabel(new Date(n.timeStr)),textHour:this.timeUtility.formatHour(new Date(n.timeStr)),temperature:n.temperature,precipitation:"N/A"!=n.precipitation?n.precipitation:"",iconSrc:r.a.getWeatherGlyph(n.pvdrIcon,!1),normalizedCode:n.normalizedSkyCode,gifName:null,dayIndex:a,dayofWeek:i.dayofWeek};t.timelineData.push(s)}t.dayIndexes.push(e),e+=i.hourly.length,a<=1&&(t.poor=i.hourly.length<24,t.timelineData.length>2&&(t.poor=l.interval(t.timelineData[1].time,t.timelineData[0].time)>1))}}const a=t.dayIndexes.length-1,i=t.timelineData[t.timelineData.length-1].offsetSliceCount+1;return t.poor?(t.dayIndexes[a]=-1,t.indexOfDayNoData=a,t.indexOfTimelineNoData=e):t.dayIndexes[a]=i-24,t.totalTimelineSliceCount=i,t}static createScale(t,e){const a=e-t;if(a<4){const a=97.5,i=(t+e)/2;return function(t){return a+10*(t-i)}}const i=87/((e=Math.floor(e+.5*a))-t);return function(e){return 54+i*(e-t)}}}},lOJQ:function(t,e,a){"use strict";a.d(e,"a",(function(){return $}));var i=a("D57K"),n=a("QBS5"),r=a("P4Ao"),o=a("seDg"),s=a("C5kU"),l=a("6BDD"),c=a("UauI"),u=a("6vBc"),d=a("+53S"),h=a("Sdge"),p=a("qibw"),g=a("eUhr");h.a;const m=()=>t=>t.orientation!==o.b.vertical?l.b`
            <svg
                slot="previous"
                width="7"
                height="9"
                viewBox="0 0 7 9"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 4.5C0.5 4.25781 0.557292 4.02865 0.671875 3.8125C0.786458 3.59635 0.94401 3.41927 1.14453 3.28125L4.92969 0.679687C5.09896 0.559896 5.28906 0.5 5.5 0.5C5.66406 0.5 5.82031 0.539062 5.96875 0.617187C6.13281 0.703125 6.26172 0.824219 6.35547 0.980469C6.45182 1.13672 6.5 1.30729 6.5 1.49219L6.5 7.51172C6.5 7.69401 6.45182 7.86328 6.35547 8.01953C6.26172 8.17578 6.13281 8.29818 5.96875 8.38672C5.81771 8.46224 5.66276 8.5 5.50391 8.5C5.29036 8.5 5.09896 8.4401 4.92969 8.32031L1.14453 5.71875C0.94401 5.58073 0.786458 5.40365 0.671875 5.1875C0.557291 4.97135 0.5 4.74219 0.5 4.5Z"
                />
            </svg>
            <svg
                slot="next"
                width="7"
                height="9"
                viewBox="0 0 7 9"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 1.49219C0.5 1.30729 0.546875 1.13672 0.640625 0.980468C0.736979 0.824218 0.86849 0.703125 1.03516 0.617187C1.18099 0.539062 1.33594 0.5 1.5 0.5C1.71094 0.5 1.90104 0.559896 2.07031 0.679687L5.85547 3.28125C6.05078 3.41667 6.20052 3.59245 6.30469 3.80859C6.40885 4.02474 6.46094 4.25521 6.46094 4.5C6.46094 4.74219 6.40885 4.97135 6.30469 5.1875C6.20052 5.40625 6.05078 5.58333 5.85547 5.71875L2.07031 8.32031C1.90104 8.4401 1.71094 8.5 1.5 8.5C1.34115 8.5 1.1862 8.46224 1.03516 8.38672C0.868489 8.29818 0.736979 8.17578 0.640625 8.01953C0.546875 7.86328 0.5 7.69401 0.5 7.51172L0.5 1.49219Z"
                />
            </svg>
        `:l.b`
            <svg
                slot="previous"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.00192 6.60547C0.194077 6.60547 -0.28047 5.6973 0.180865 5.0341L2.81398 1.24898C3.41087 0.390957 4.68026 0.390967 5.27715 1.24899L7.91028 5.0341C8.37156 5.6973 7.89707 6.60547 7.08922 6.60547H1.00192Z"
                />
            </svg>
            <svg
                slot="next"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.00192 0.605469C0.194077 0.605469 -0.280471 1.51367 0.180865 2.17683L2.81398 5.96196C3.41087 6.82002 4.68027 6.81992 5.27716 5.96196L7.91029 2.17682C8.37157 1.51367 7.89709 0.605469 7.08924 0.605469H1.00192Z"
                />
            </svg>
        `,f=l.b`
    <template
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        @focusin="${(t,e)=>t.handleFocusIn(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot name="previous-flipper">
            <fluent-flipper
                part="previous-flipper"
                class="previous-flipper"
                title="${t=>t.previousFlipperTitle}"
                direction="${t=>t.direction===p.a.rtl?"next":"previous"}"
                @keypress="${(t,e)=>t.slideKeyPressHandler(e.event,-1)}"
                @click="${(t,e)=>t.slideKeyPressHandler(e.event,-1)}"
                ${Object(g.b)(t=>t.previousFlipperTelemetryTag)}
            >
                ${m()}
            </fluent-flipper>
        </slot>
        ${s.c}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Object(c.b)("tabs")}></slot>

            ${Object(u.a)(t=>t.activeindicator,l.b`
                    <div
                        ${Object(d.b)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        <slot name="next-flipper">
            <fluent-flipper
                part="next-flipper"
                class="next-flipper"
                title="${t=>t.nextFlipperTitle}"
                direction="${t=>t.direction===p.a.rtl?"previous":"next"}"
                @keypress="${(t,e)=>t.slideKeyPressHandler(e.event,1)}"
                @click="${(t,e)=>t.slideKeyPressHandler(e.event,1)}"
                ${Object(g.b)(t=>t.nextFlipperTelemetryTag)}
            >
                ${m()}
            </fluent-flipper>
        </slot>

        ${s.b}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Object(c.b)("tabpanels")}></slot>
        </div>
    </template>
`;var v=a("TTa4"),b=a("4X57"),y=a("xY0q"),w=a("kL0l");const x=b.a`
    ${Object(y.a)("grid")} :host {
        background: none;
        border-radius: 0;
        box-shadow: none;
        grid-template-rows: 1fr auto;
    }

    ::slotted([slot="previous-flipper"]),
    .previous-flipper {
        margin: 0;
        height: 38px;
        width: 16px;
    }

    ::slotted([slot="next-flipper"]),
    .next-flipper {
        margin: 0;
        height: 38px;
        width: 16px;
    }

    .next-flipper::before,
    .previous-flipper::before {
        border-radius: 3px;
        border: calc(var(--outline-width) * 1px) solid transparent;
        background: ${w.s.var};
    }

    .next-flipper:hover::before,
    .previous-flipper:hover::before {
        background: ${w.o.var};
    }

    .next-flipper:active::before,
    .previous-flipper:active::before {
        background: ${w.l.var};
    }

    .next-flipper::part(previous),
    .next-flipper::part(next),
    .previous-flipper::part(previous),
    .previous-flipper::part(next) {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
    }

    .tablist {
        grid-row: 2;
        grid-gap: 6px;
        padding: var(--sequence-indicator-padding, 10px);
        align-items: center;
        justify-items: center;
        grid-template-rows: auto;
    }

    .tabpanel {
        grid-row: 1 / span 3;
        grid-column: 1 / span 3;
        position: relative;
    }

    :host([orientation="vertical"]) {
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr auto;
    }

    :host([orientation="vertical"]) .tabpanel {
        grid-row: 1/3;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    :host([orientation="vertical"]) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column: 2;
        grid-template-rows: auto;
        padding: 20px 0;
        justify-self: center;
    }

    :host([orientation="vertical"]) .tabpanel {
        grid-column: 1 / span 2;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    :host([orientation="vertical"]) .previous-flipper {
        grid-column: 2;
        grid-row: 1;
        align-self: flex-end;
        height: 16px;
        width: 20px;
        margin: 0 2px;
    }

    :host([orientation="vertical"]) .next-flipper {
        grid-column: 2;
        grid-row: 3;
        align-self: flex-start;
        height: 16px;
        width: 20px;
        margin: 0 2px;
    }
`.withBehaviors(w.l,w.o,w.s);var C=a("Yn5/");let $=class extends C.a{};Object(i.e)([Object(n.b)({attribute:"previous-flipper-title"})],$.prototype,"previousFlipperTitle",void 0),Object(i.e)([Object(n.b)({attribute:"next-flipper-title"})],$.prototype,"nextFlipperTitle",void 0),$=Object(i.e)([Object(r.b)({name:"msft-carousel-card-wrapper",template:f,styles:[v.a,x]})],$)},m2Vd:function(t,e,a){"use strict";var i;a.d(e,"a",(function(){return i})),function(t){t[t.None=0]="None",t[t.JustNow=1]="JustNow",t[t.LessThanOneHour=2]="LessThanOneHour",t[t.Today=3]="Today",t[t.Yesterday=4]="Yesterday",t[t.ThisWeek=5]="ThisWeek",t[t.ThisYear=6]="ThisYear",t[t.FullDate=7]="FullDate",t[t.InMinutes=8]="InMinutes"}(i||(i={}))},n251:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("P4Ao");class n extends i.a{}},nySH:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return u}));var i,n,r=a("D57K"),o=a("P4Ao"),s=a("QBS5"),l=a("oePG"),c=a("hWPV");!function(t){t.Half="half",t.Full="full"}(i||(i={})),function(t){t[t.Init=0]="Init",t[t.StopOnForecast=1]="StopOnForecast",t[t.StopOnMinimap=2]="StopOnMinimap"}(n||(n={}));class u extends o.a{switchUnit(){this.$emit("switch")}switchToSettings(){this.$emit("toSettings")}focusOnForecastHandler(){return this.rotationState=n.StopOnForecast,!0}focusOnMinimapHandler(){return this.rotationState=n.StopOnMinimap,!0}focusOnHoverCardHandler(t){return this.eventMode=t?"mouseenter":"none",!0}getRotationStyle(){if(!this.weatherData.forecastData||!this.weatherData.forecastData.length||!this.weatherData.defaultMapPageUrl)return"";if(this.weatherData.nowcast&&this.weatherData.nowcast.summary)return"";let t="";switch(this.rotationState){case n.StopOnForecast:t="-on-forecast";break;case n.StopOnMinimap:t="-on-map"}return`weather-rotate-container${t} ${"mouseenter"==this.eventMode?"weather-rotate-container-paused":"weather-rotate-container-running"}`}getHoverRotationStyle(){return"weather-auto-rotate"+("mouseenter"!=this.eventMode?"-run":"-pause")}hasNowcast(){return!this.weatherData.alertEvent&&!(!this.weatherData.nowcast||this.weatherData.nowcast.precipitationType==c.a.NoRain)}hasSevereWeather(){var t,e,a;return!!(null===(t=this.weatherData.minimap)||void 0===t?void 0:t.severeAlertTooltip)&&!!this.weatherData.minimap.severeAlertColor&&!!this.weatherData.minimap.severeAlertTooltip||!!(null===(e=this.weatherData.minimap)||void 0===e?void 0:e.severeAlertData)&&(null===(a=this.weatherData.minimap)||void 0===a?void 0:a.severeAlertData.length)>0}editSetting(){this.$emit("edit")}connectedCallback(){super.connectedCallback(),this.layout||(this.layout="half"),this.background||(this.background="dynamic"),null==this.darkMode&&(this.darkMode=!1),this.target||(this.target="_blank")}}Object(r.e)([s.b],u.prototype,"background",void 0),Object(r.e)([s.b],u.prototype,"darkMode",void 0),Object(r.e)([s.b],u.prototype,"layout",void 0),Object(r.e)([s.b],u.prototype,"target",void 0),Object(r.e)([s.b],u.prototype,"switchUnitLabel",void 0),Object(r.e)([s.b],u.prototype,"editLocationTip",void 0),Object(r.e)([l.d],u.prototype,"weatherData",void 0),Object(r.e)([l.d],u.prototype,"headerTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"locationTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"weaConditionTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"weatherAqiTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"unitSwitchTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"weatherEditButtonTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"forecastDayTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"forecastDayTelemetryTags",void 0),Object(r.e)([l.d],u.prototype,"seeForecastTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"minimapTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"minimapExtendButtonTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"nowcastTelemetryTags",void 0),Object(r.e)([l.d],u.prototype,"trendTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"editSettingTelemetryTags",void 0),Object(r.e)([l.d],u.prototype,"greetingPreviousFlipperTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"greetingNextFlipperTelemetryTag",void 0),Object(r.e)([l.d],u.prototype,"rotationState",void 0),Object(r.e)([l.d],u.prototype,"hoverCardRotateConfig",void 0),Object(r.e)([l.d],u.prototype,"eventMode",void 0)},oilT:function(t,e,a){"use strict";a.d(e,"a",(function(){return h})),a.d(e,"b",(function(){return p}));var i=a("GFO5"),n=a("I6Lx"),r=a("/FrS"),o=a("Y7RG"),s=a("F+I8"),l=a("Oa3u");const c={"Aachen, Germany":"3","Abilene, TX":"2","Acworth, GA":"29","Tokyo, Japan":"1","Afton, WY":"28","Ahmedabad, Gujarat, India":"30","Kanagawa, Japan":"4","Ajaccio, France":"31","Akron, OH":"32","Albuquerque, NM":"8","Appleton, WI":"22","Aquebogue, NY":"23","Arlington, TX":"79","Asheville, NC":"35","Atlanta, GA":"17","Austin, TX":"44","Avignon, France":"13","Awendaw, SC":"40","Axminster, England, United Kingdom":"10","Aylesbury, England, United Kingdom":"37","Azle, TX":"19","Bakersfield, CA":"41","BB Rd, Lebanon, Kansas":"80","Barcelona, Spain":"20","Bellevue, WA":"47","BF Homes Parañaque, National Capital Region, Philippines":"42","Bg Pierce Ln, Normangee, Texas":"7","Bhubaneswar, Orissa, India":"34","Billings, MT":"24","Bjelovar, Croatia":"51","Bloomington, IN":"6","Greenville, NC":"9"};function u(t,e){return c[t.displayName]||e}var d=a("0km5");class h{constructor(t,e){this.truncateTimezone=t,this.locationHref=e}setLocationHref(t){this.locationHref=t}static isValidWeatherSummaryResponse(t){return t&&t.responses&&t.responses[0]&&t.responses[0].weather&&t.responses[0].weather[0]&&t.responses[0].weather[0].forecast&&t.responses[0].weather[0].forecast.days&&t.responses[0].weather[0].forecast.days.length>0}TranslateToWeatherForecast(t,e){var a,r,o,l,c,u;if(!h.isValidWeatherSummaryResponse(t))throw new Error("Weather Service response schema validation error: no summary found!");const d=e.latitude||(null===(o=null===(r=null===(a=t.responses[0])||void 0===a?void 0:a.source)||void 0===r?void 0:r.coordinates)||void 0===o?void 0:o.lat),p=e.longitude||(null===(u=null===(c=null===(l=t.responses[0])||void 0===l?void 0:l.source)||void 0===c?void 0:c.coordinates)||void 0===u?void 0:u.lon),{degree:g,unit:m}=h.getStandardDegree(t.units.temperature),f=t.responses[0].weather[0],v=t.responses[0].weather[0].provider,b={isAlert:f.alerts>0,normalizedSkyCode:s.a.getWeatherNormalizedSkyCode(f.current.pvdrIcon),currentTemperature:f.current.temp&&f.current.temp.toString(),feels:f.current.feels&&f.current.feels.toString(),pvdrIcon:f.current&&f.current.pvdrIcon,aqi:f.current.aqi&&f.current.aqi.toString(),image:{src:i.c.getSkyCodeUrl(f.current&&f.current.pvdrIcon,i.a.Size50),alt:f.current&&f.current.cap},shortCap:f.current&&f.current.capAbbr,skycode:{children:f.current&&f.current.cap},precipitation:{children:f.forecast&&f.forecast.days&&f.forecast.days[0]&&null!=f.forecast.days[0].precip?f.forecast.days[0].precip+"%":void 0},windDir:f.current.windDir,windSpeed:f.current.windSpd&&t.units.speed&&`${f.current.windSpd} ${t.units.speed}`,deepLink:`https://a.msn.com/54/${Object(n.a)().Locale}/ct${d},${p}?weadegreetype=${g.replace("°","")}`,degreeSetting:g,alternateDegreeSetting:g.includes("C")?"°F":"°C"},y=f.forecast.days.map((t,e)=>({id:Math.random().toString(24).substring(2),day:t.valid&&new Date(t.valid),highTemperature:t.tempHi+"°",lowTemperature:t.tempLo+"°",image:{src:i.c.getSkyCodeUrl(t.icon&&t.icon.toString()||t.pvdrIcon,i.a.Size30),alt:t.cap},pvdrIcon:t.pvdrIcon||""+t.icon,deepLink:`https://a.msn.com/54/${Object(n.a)().Locale}/ct${d},${p}?day=${e+1}&weadegreetype=${g.replace("°","")}`}));return{lastUpdated:f.current&&f.current.created,currentCondition:b,forecast:y,unit:m,provider:v}}TranslateToHourlyForecast(t){const{unit:e}=h.getStandardDegree(t.units.temperature),a=t.responses[0].weather[0],i=[];for(let e=0;e<a.days.length;++e){const n=a.days[e],r={hourly:[]};if(n.hourly)for(let e=0;e<n.hourly.length;++e)r.hourly.push(h.GenerateHourlySnapshot(n.hourly[e],t.units));i.push(r)}return{forecast:i,unit:e,source:t.responses[0].source,isPartialHour:!1}}TranslateToWeatherOverview(t,e,a,n=!1){var r,o,l,c,p;if(!h.isValidWeatherSummaryResponse(t)||!t.responses[0].weather[0].current)throw new Error("Weather Service response schema validation error: no summary found!");const g=t.responses[0].weather[0],m="n"===g.current.daytime,{degree:f,unit:v}=h.getStandardDegree(t.units.temperature),b=g.current,y=this.locationHref?{locationHref:this.locationHref}:void 0,w=Object(d.buildLink)(e,v,y),x=null===(p=null===(c=null===(l=null===(o=null===(r=t.responses)||void 0===r?void 0:r[0])||void 0===o?void 0:o.weather)||void 0===l?void 0:l[0])||void 0===c?void 0:c.regiondata)||void 0===p?void 0:p.alert;let C=0,$="";(null==x?void 0:x[0])&&(null==x?void 0:x.some(t=>t.dist<=0))&&(C=x.filter(t=>t.dist<=0).length,$=x[0].significance);const T={isAlert:g.alerts&&g.alerts.length>0,currentTemperature:b.temp&&b.temp.toString(),pvdrIcon:b.pvdrIcon,normalizedSkyCode:(null==a?void 0:a.useMockSkyCode)?u(e,b.pvdrIcon):s.a.getWeatherNormalizedSkyCode(b.pvdrIcon,a&&a.enableAppImages),image:{src:i.c.getSkyCodeUrl(b.pvdrIcon,i.a.Size50),alt:b.cap},shortCap:b.capAbbr,skycode:{children:b.cap},precipitation:{children:g.forecast&&g.forecast.days&&g.forecast.days[0]&&g.forecast.days[0].daily&&null!=g.forecast.days[0].daily.precip?g.forecast.days[0].daily.precip+"%":void 0},deepLink:w,degreeSetting:f,alternateDegreeSetting:f.includes("C")?"°F":"°C",uv:Math.floor(b.uv),uvDescription:b.uvDesc,feels:b.feels+"°",humidity:Math.floor(b.rh)+"%",windDesc:`${b.pvdrWindDir} ${b.pvdrWindSpd}`,windSpeed:`${b.windSpd} ${t.units.speed}`,windDir:b.windDir,dewPoint:null!=b.dewPt?b.dewPt+"°":"N/A",baro:`${g.current.baro} ${t.units.pressure}`,visiblity:`${g.current.vis} ${t.units.distance}`,richCaps:g.current.richCaps,aqi:""+g.current.aqi,aqiSeverity:g.current.aqiSeverity,primaryPollutant:g.current.primaryPollutant,isNight:m,currentRaw:b,unitsRaw:t.units,alertCount:C,alertSignificance:$},D=[];let S=null;for(let e=0;e<g.forecast.days.length;++e){const a=g.forecast.days[e],n=a.daily,r=m?n.night:n.day,o=0===e?r:n.day;let l;if(this.truncateTimezone&&n.valid&&n.valid.includes("T")){const t=n.valid.split("T")[0].split("-");l=new Date(Number(t[0]),Number(t[1])-1,Number(t[2]))}else l=n.valid&&new Date(n.valid);const c={id:Math.random().toString(24).substring(2),day:l,highTemp:n.tempHi,lowTemp:n.tempLo,highTemperature:n.tempHi+"°",lowTemperature:n.tempLo+"°",image:{src:i.c.getSkyCodeUrl(n.pvdrIcon||n.icon&&n.icon.toString(),i.a.Size30),alt:n.pvdrCap},pvdrIcon:n.pvdrIcon||""+n.icon,glyphCode:s.a.getWeatherGlyphCode(n.pvdrIcon),normalizedSkyCode:s.a.getWeatherNormalizedSkyCode(n.pvdrIcon),precipitation:null!=n.precip?""+n.precip:"N/A",humidity:""+n.rhLo,humidityLow:""+n.rhLo,humidityHi:""+n.rhHi,windSpeed:r?""+r.windSpd:"N/A",windSpeedUnit:t.units.speed,airPressure:"N/A",summaries:o?o.summaries:[],almanac:a.almanac,deepLink:`${w}&day=${e+1}`,hourly:[],uv:n.uv,uvDesc:n.uvDesc,windMax:`${n.windMax} ${t.units.speed}`,windMaxDir:n.windMaxDir,cap:n.pvdrCap,rainAmount:null!=n.rainAmount&&`${n.rainAmount} ${t.units.height}`};if(a.hourly)for(let e=0;e<a.hourly.length;++e){const i=a.hourly[e];S||(S=i),c.hourly.push(h.GenerateHourlySnapshot(i,t.units))}D.push(c)}if(a&&a.weatherApi&&S){const e=this.getHistoryData(a.weatherApi.history,t,S);e&&e.length>0&&(D[0].hourly=e.concat(D[0].hourly))}const O=this.translateToAlertsDetail(t),L=this.translateToRegionData(t),M=this.translateToContentData(t),k=this.translateToMapsMetaData(t);return{lastUpdated:g.current&&g.current.created,currentCondition:T,forecast:D,nowcasting:h.translateToNowcastData(g.nowcasting),source:t.responses[0].source,provider:g.provider,aqiProvider:g.aqiProvider,alertsInfo:O,regionData:L,contentData:M,mapsMetaData:k,unit:v,isPartialHour:n}}static translateToNowcastData(t){let e;if(t){const a=Object(o.a)(t.precipitation,t=>t>=r.i.RainThreshold);e=Object.assign(Object.assign({},t),{isRaining:a,useNowcastSummary:a&&t.summary&&t.shortSummary})}return e}translateToAlertsDetail(t){var e,a,i,n,r,o,s,l,c;const u=null===(n=null===(i=null===(a=null===(e=null==t?void 0:t.responses)||void 0===e?void 0:e[0])||void 0===a?void 0:a.weather)||void 0===i?void 0:i[0])||void 0===n?void 0:n.alerts,d=null===(c=null===(l=null===(s=null===(o=null===(r=null==t?void 0:t.responses)||void 0===r?void 0:r[0])||void 0===o?void 0:o.weather)||void 0===s?void 0:s[0])||void 0===l?void 0:l.regiondata)||void 0===c?void 0:c.alert;if(!u||!u[0])return;if(!d||!d.length)return u[0];let h;for(let t=0;t<d.length;t++)if(d[t].dist<=0){h=Object.assign({},u[t]);break}return h}translateToRegionData(t){var e,a,i,n,r,o,s,l,c;const u=null===(r=null===(n=null===(i=null===(a=null===(e=null==t?void 0:t.responses)||void 0===e?void 0:e[0])||void 0===a?void 0:a.weather)||void 0===i?void 0:i[0])||void 0===n?void 0:n.regiondata)||void 0===r?void 0:r.alert,d=null===(c=null===(l=null===(s=null===(o=null==t?void 0:t.responses)||void 0===o?void 0:o[0])||void 0===s?void 0:s.weather)||void 0===l?void 0:l[0])||void 0===c?void 0:c.alerts;if(u&&(null==d?void 0:d[0])&&(null==u?void 0:u.some(t=>t.dist<=0))&&u.length==d.length){for(let t=0;t<u.length;++t)u[t].localizedTitle=null==d?void 0:d[t].title;return u}return null}translateToContentData(t){var e,a,i,n;try{const r=null===(n=null===(i=null===(a=null===(e=null==t?void 0:t.responses)||void 0===e?void 0:e[0])||void 0===a?void 0:a.weather)||void 0===i?void 0:i[0])||void 0===n?void 0:n.contentdata,o=[];return(null==r?void 0:r.length)>0&&r.forEach(t=>{var e;if(!(null===(e=null==t?void 0:t.content)||void 0===e?void 0:e.length))return;const a={ranking:t.ranking,contenttype:t.contenttype,owner:t.owner,content:[],createtime:new Date(t.createtime),validtime:new Date(t.validtime)};t.content.forEach(t=>{if(!t)return;const e={title:t.title,imgUrl:t.imgUrl,destUrl:t.destUrl,metadata:t.metadata,displayType:t.displayType,renderPlaces:t.renderPlaces};a.content.push(e)}),o.push(a)}),o.length>0?o:null}catch(t){return null}}translateToMapsMetaData(t){var e,a,i,n;return null===(n=null===(i=null===(a=null===(e=null==t?void 0:t.responses)||void 0===e?void 0:e[0])||void 0===a?void 0:a.weather)||void 0===i?void 0:i[0])||void 0===n?void 0:n.mapsmetadata}getHistoryData(t,e,a){var i;if(-1===t){const t=e.responses[0].weather[0],n=t.current,r=e.responses[0].source.utcOffset,o=(null==a?void 0:a.valid)&&Object(l.a)(new Date(a.valid),-1);let c,u=t.forecast&&t.forecast.days&&t.forecast.days[0];return u&&(u=u,c=null===(i=null==u?void 0:u.daily)||void 0===i?void 0:i.precip,u.hourly&&u.hourly[0]&&(c=u.hourly[0].precip)),[{temperature:n.temp,cap:n.cap,airPressure:null!=n.baro?""+n.baro:"N/A",pressureUnit:e.units.pressure,humidity:null!=n.rh?n.rh+"%":"N/A",windGust:null!=n.windGust?`${n.windGust} ${e.units.speed}`:"N/A",dewPt:null!=n.dewPt?n.dewPt+"°":"N/A",cloudCover:null!=n.cloudCover?n.cloudCover+"%":"N/A",vis:null!=n.vis?`${n.vis} ${e.units.distance}`:"N/A",glyphCode:s.a.getWeatherGlyphCode(n.pvdrIcon),pvdrIcon:n.pvdrIcon,normalizedSkyCode:s.a.getWeatherNormalizedSkyCode(n.pvdrIcon),feels:n.feels,precipitation:null!=c?""+c:"N/A",uv:""+(n.uv||0),time:o,timeStr:o&&Object(l.d)(o,r),windSpeed:n.windSpd+"",windSpeedUnit:e.units.speed,windDir:n.windDir}]}return[]}static getStandardDegree(t){return"°ฟาเรนไฮด์"===t||"‎°ف"===t||t===r.j.Fahrenheit?{degree:"°F",unit:r.j.Fahrenheit}:"°เซลเซียส"===t||"‎°م"===t||t===r.j.Celsius?{degree:"°C",unit:r.j.Celsius}:(""+t).replace(/\u200e/g,"").includes("F")?{degree:"°F",unit:r.j.Fahrenheit}:{degree:"°C",unit:r.j.Celsius}}static GenerateHourlySnapshot(t,e){return{temperature:t.temp,cap:t.cap,airPressure:null!=t.baro?""+t.baro:"N/A",pressureUnit:e.pressure,humidity:null!=t.rh?t.rh+"%":"N/A",windGust:null!=t.windGust?`${t.windGust} ${e.speed}`:"N/A",dewPt:null!=t.dewPt?t.dewPt+"°":"N/A",cloudCover:null!=t.cloudCover?t.cloudCover+"%":"N/A",vis:null!=t.vis?`${t.vis} ${e.distance}`:"N/A",glyphCode:s.a.getWeatherGlyphCode(t.pvdrIcon),normalizedSkyCode:s.a.getWeatherNormalizedSkyCode(t.pvdrIcon),pvdrIcon:t.pvdrIcon,feels:t.feels,precipitation:null!=t.precip?""+t.precip:"N/A",uv:null!=t.uv?""+t.uv:"N/A",time:new Date(t.valid),timeStr:t.valid,windSpeed:t.windSpd+"",windSpeedUnit:e.speed,windDir:t.windDir,windDesc:t.pvdrWindDir,summary:t.summary}}}const p=new h(!0)},pQjM:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var i=a("D57K"),n=a("P4Ao"),r=a("7ffs"),o=a("xY0q"),s=a("wHpb"),l=a("oqLQ"),c=a("sfV1"),u=a("kL0l"),d=a("4X57"),h=a("j9Xn");const p=d.a`
    ${Object(o.a)("grid")}:host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: var(--body-font);
        grid-template-rows: auto 1fr auto;
        padding: var(--content-padding, 12px 0);
        outline: none;
    }

    .footer {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        padding: var(--footer-padding, 0 16px);
    }

    .title {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 12px;
        padding: var(--title-padding, 0 16px);
        overflow: visible;
    }

    .title-link {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 12px;
        color: ${u.D.var};
        display: flex;
        font-size: var(--type-ramp-minus-1-font-size);
        justify-content: flex-start;
        line-height: var(--type-ramp-minus-1-line-height);
        outline: none;
        cursor: pointer;
        text-decoration: none;
        letter-spacing: 0.7px;
    }

    .title-link:hover,
    .title-link:active,
    .title-link:${s.a} {
        text-decoration: underline;
    }

    .title-content {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-top: 4px;
    }

    ::slotted([slot="title-icon"]) {
        margin-top: 4px;
        fill: ${u.D.var};
    }

    .sd-action {
        --corner-radius: 16;
        height: 24px;
        grid-column: 2;
        z-index: 1;
    }

    .sd-action:not([appearance="lightweight"]) {
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .sd-action::part(control) {
        width: 100%;
        padding: var(--sd-action-padding, 0px 24px);
    }

    .sd-action::part(content) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    ::slotted([slot="more-actions"]) {
        min-width: 24px;
        width: 24px;
        height: 24px;
        --corner-radius: 16;
        z-index: 1;
    }
`.withBehaviors(u.o,u.z,u.D,u.G,u.O,u.P,c.a,c.b,Object(l.c)(d.a`
            .title-link {
                color: ${h.a.ButtonText};
            }
            a[href] {
                color: ${h.a.LinkText};
            }
        `));var g=a("6BDD"),m=a("6vBc"),f=a("S35a"),v=a("eUhr");f.a;const b=g.b`
    <div class="title" part="title">
        <a
            class="title-link"
            part="title-link"
            href="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.link}}"
            target=${t=>t.target}
            title="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.titleContent}}"
            ${Object(v.b)(t=>t.headerTelemetryTag)}
        >
            <slot name="title-icon"></slot>
            <div class="title-content" part="title-content">
                ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.titleContent}}
            </div>
        </a>
        <slot name="more-actions"></slot>
    </div>
    <slot></slot>
    <div class="footer" part="footer">
        <slot name="footer-start"></slot>
        ${Object(m.a)(t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent},g.b`
                <fluent-anchor
                    class="sd-action"
                    part="sd-action"
                    appearance="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.actionAppearance}}"
                    href="${t=>{var e,a,i;return(null===(e=t.data)||void 0===e?void 0:e.footerLink)?null===(a=t.data)||void 0===a?void 0:a.footerLink:null===(i=t.data)||void 0===i?void 0:i.link}}"
                    target=${t=>t.target}
                    ${Object(v.b)(t=>t.seeMoreTelemetryTag)}
                >
                    ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}}
                </fluent-anchor>
            `)}
        <slot name="footer-end"></slot>
    </div>
`;let y=class extends r.b{};y=Object(i.e)([Object(n.b)({name:"msft-structured-data-card",template:b,styles:p,shadowOptions:{delegatesFocus:!0}})],y)},pS8B:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i=a("6BDD").b`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`},pUFC:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c}));const i={NoRain:.2,Light:2.5,Middle:7.5,Heavy:50,VioletRain:null},n={Raining:"raining",NoRain:"noRain"},r="rain",o=[r,"snow","precipitation"],s=20,l=0,c=3*s},qE0w:function(t,e,a){"use strict";a.r(e),a.d(e,"AUTOSUGGEST_TYPE",(function(){return d})),a.d(e,"AUTOSUGGEST_SUBTYPE",(function(){return h})),a.d(e,"isHyperlocal",(function(){return p})),a.d(e,"hyperlocalLabeled",(function(){return g})),a.d(e,"getHyperlocalType",(function(){return m})),a.d(e,"isSameLocationPoint",(function(){return f})),a.d(e,"shouldIgnoreSubRegion",(function(){return v})),a.d(e,"distance",(function(){return y})),a.d(e,"toDetailShortInfo",(function(){return w})),a.d(e,"parseDetailShortInfo",(function(){return x})),a.d(e,"reset",(function(){return $})),a.d(e,"isValid",(function(){return T})),a.d(e,"isValidLocationToSuggest",(function(){return D})),a.d(e,"toDebugString",(function(){return S})),a.d(e,"normalizeLatLong",(function(){return O})),a.d(e,"getDisplayName",(function(){return L})),a.d(e,"getAutoSuggestionName",(function(){return M})),a.d(e,"isValidLocationNameStructure",(function(){return k})),a.d(e,"resolveNameFromLocalityRegionCountry",(function(){return A})),a.d(e,"getAutoSuggestLocationFirstLine",(function(){return N})),a.d(e,"getAutoSuggestLocationSecondLine",(function(){return I})),a.d(e,"formatLocation",(function(){return H})),a.d(e,"addLocation",(function(){return z})),a.d(e,"removeLocation",(function(){return P})),a.d(e,"isCurrentLocaleName",(function(){return F})),a.d(e,"extractLanguageTag",(function(){return R})),a.d(e,"headLocation",(function(){return _})),a.d(e,"toLatLong",(function(){return B}));var i=a("rvYQ"),n=a("I6Lx"),r=a("ypwz"),o=a("PgCS");const s=new Set(["CN","JP","TW"]),l=new Set(["ZH-CN","KO-KR","JA-JP"]),c=new Set(["北京市","上海市","重庆市","天津市","香港"]);var u;!function(t){t[t.HYPERLOCAL=101]="HYPERLOCAL",t[t.NONHYPERLOCAL=102]="NONHYPERLOCAL",t[t.UNKNOWN=103]="UNKNOWN"}(u||(u={}));const d={PLACE:"Place",LOCAL_BUSINESS:"LocalBusiness",ADDRESS:"PostalAddress"},h={ADDRESS:"Address",ROAD:"Road"};function p(t){return t.locationType===u.HYPERLOCAL||t.locationType===u.UNKNOWN}function g(t){return!!t.locationType&&(t.locationType===u.HYPERLOCAL||t.locationType===u.NONHYPERLOCAL||t.locationType===u.UNKNOWN)}function m(t,e){switch(t){case d.PLACE:return u.NONHYPERLOCAL;case d.LOCAL_BUSINESS:return u.HYPERLOCAL;case d.ADDRESS:return e===h.ADDRESS?u.HYPERLOCAL:e===h.ROAD?u.NONHYPERLOCAL:u.UNKNOWN;default:return u.UNKNOWN}}function f(t,e){if(t&&e){const a=""+(t[0]||t.latitude),i=""+(e[0]||e.latitude),n=""+(t[1]||t.longitude),r=""+(e[1]||e.longitude);return a===i&&n==r}return!1}function v(t){return!s.has((t||"").toUpperCase())}function b(t){return t&&l.has(t.toUpperCase())}function y(t,e){function a(t){const e=Math.sin(t/2);return e*e}function i(t){return t*Math.PI/180}e=e||{};const n=[i(+(t=t||{}).latitude),i(+t.longitude)],r=[i(+e.latitude),i(+e.longitude)],o=a(Math.abs(n[0]-r[0]))+Math.cos(n[0])*Math.cos(r[0])*a(Math.abs(n[1]-r[1]));return 12742*Math.asin(Math.sqrt(o))}function w(t){const e={a:t.addressLine,l:t.locality,r:t.region,r2:t.subRegion,c:t.country,i:t.isoCode,t:t.locationType,g:t.language},a=JSON.stringify(e,(t,e)=>e||void 0);return"{}"!==a?a:void 0}function x(t){if(t)try{const e=JSON.parse(t),a={};return a.addressLine=e.a,a.locality=e.l,a.region=e.r,a.subRegion=e.r2,a.country=e.c,a.isoCode=e.i,a.locationType=e.t,a.language=e.g,a}catch(t){return}}function C(t,e,a){return!isNaN(t)&&t>=e&&t<=a}function $(t){const e=t||{};Object.keys(e).forEach(t=>{e[t]=null})}function T(t){return t&&!!t.latitude&&!!t.longitude&&"null"!==t.latitude&&"null"!==t.longitude&&"undefined"!==t.latitude&&"undefined"!==t.longitude&&"NaN"!==t.latitude&&"NaN"!==t.longitude&&"Infinity"!==t.latitude&&"Infinity"!==t.longitude&&C(parseFloat(t.latitude),-85,85)&&C(parseFloat(t.longitude),-180,180)}function D(t){var e;if("zh-cn"===(null===(e=null==t?void 0:t.language)||void 0===e?void 0:e.toLowerCase()))if(null==t?void 0:t.addressLine){if(!((null==t?void 0:t.locality)||(null==t?void 0:t.subRegion)||(null==t?void 0:t.region)||c.has(t.addressLine)))return!1}else if(!(null==t?void 0:t.subRegion)&&!(null==t?void 0:t.region)&&!c.has(null==t?void 0:t.locality))return!1;return!(!t||!t.addressLine&&!t.locality)}function S(t){if(t)return t.el?`el=[${t.el}]`:`lat=${t.latitude},long=${t.longitude}`}function O(t,e){return{latitude:""+parseFloat(t),longitude:""+parseFloat(e)}}function L(t,e){if(t)return t.displayName?t.displayName:t.addressLine?H(t):A(t,e)}function M(t){if(t){if(t.autoSuggestionName)return t.autoSuggestionName;return A(t,{enforceSmallLocaleFirst:!0})}}function k(t){const e=i.a.AppType;return[r.a.WindowsShell,r.a.Windows,r.a.NewsAndInterests,r.a.WindowsNewsPlus].indexOf(e)>=0?!(!t||!t.locality&&!t.region):"zh-cn"===t.language||"CN"===t.isoCode?!(!t||!(t.locality||t.subRegion||t.addressLine)):!(!t||!t.locality)}function A(t,e){const a=!e||!e.skipLocale,n=i.a&&i.a.CurrentRequestTargetScope&&i.a.CurrentRequestTargetScope.locale&&i.a.CurrentRequestTargetScope.locale.market,r=(i.a&&i.a.CurrentRequestTargetScope&&i.a.CurrentRequestTargetScope.locale&&i.a.CurrentRequestTargetScope.locale.language,(t.isoCode||"").toUpperCase()),o=r&&n&&n.substr(-r.length).toUpperCase()===r,s=v(t.isoCode)?null:t.subRegion,l=[a?t.locality:"",s,t.region,t.country].filter(t=>!!t);let c=0;for(;l[c+1];)l[c+1]===l[c]?l.splice(c+1,1):c++;const u="CN"==(null==n?void 0:n.toUpperCase())?1:2;return t.country&&o&&l.length>u&&l.splice(-1,1),e&&e.enforceSmallLocaleFirst||b(t.language)&&l.reverse(),l.join(", ")}function j(t,e){var a,n;const r=null===(n=null===(a=null===i.a||void 0===i.a?void 0:i.a.CurrentRequestTargetScope)||void 0===a?void 0:a.locale)||void 0===n?void 0:n.market,o=(t.isoCode||"").toUpperCase(),s=o&&r&&r.substr(-o.length).toUpperCase()===o,l=[t.addressLine,t.locality,!v(t.isoCode)&&t.subRegion,!(null==e?void 0:e.skipRegionAndCountry)&&t.region,!(null==e?void 0:e.skipRegionAndCountry)&&!s&&t.country].filter(t=>!!t);return l.filter((t,e)=>t!==l[e+1])}function N(t){return j(t)[0]}function I(t){return j(t).slice(1).join(", ")}function H(t,e){const a=j(t,e);return b(t.language)&&a.reverse(),a.join(", ")}function z(t,e){if(!e)return t;t=t||[];const a=[e,...t],i={},n=[];for(let t=0;t<a.length;++t){const e=L(a[t]),r=`${a[t].latitude},${a[t].longitude}`;i[e]||i[r]||(n.push(a[t]),i[e]=t+1,i[r]=t+1)}return n}function P(t,e){if(!t||!e)return t;for(let a=0;a<t.length;++a)if(L(t[a])===L(e)||t[a].latitude===e.latitude&&t[a].longitude===e.longitude){t.splice(a,1);break}return t}function F(t){const e=n.b.Locale;return t&&t.language&&(t.language===e||/en-/i.test(t.language)&&/en-/i.test(e))}function R(t){return(/,g=([a-z]+-[a-z]+)$/i.exec(t)||[])[1]}function _(){if(n.b.ClientSettings&&n.b.ClientSettings.geo_lat&&n.b.ClientSettings.geo_long&&""!==n.b.ClientSettings.geo_lat&&""!==n.b.ClientSettings.geo_long){const t={latitude:n.b.ClientSettings.geo_lat,longitude:n.b.ClientSettings.geo_long,locality:n.b.ClientSettings.geo_city,region:n.b.ClientSettings.geo_subdivision,country:n.b.ClientSettings.geo_countryname,isoCode:n.b.ClientSettings.geo_country,isDetected:!0,language:"en-us"};return t.region=Object(o.abbreviateUSState)(t.region,t.language,t.isoCode),t.displayName=L(t),t}return null}function B(t){return`${t.latitude},${t.longitude}`}},qgrC:function(t,e,a){"use strict";a.d(e,"h",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"i",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"b",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"a",(function(){return f})),a.d(e,"f",(function(){return v}));var i=a("LshR"),n=a("8CFJ");const r=new Map([["SN","winterstorm"],["TL","winterstorm"],["IC","winterstorm"],["IM","winterstorm"],["FD","wildfire"],["AQ","airqualitystation"],["SM","airqualitystation"],["DU","airqualitystation"],["VO","airqualitystation"],["AS","airqualitystation"]]);function o(t){const e=[];return t.forEach(t=>{e.push(t.join(","))}),e.join(" ")}function s(t){const e=t>=0,a=1e3*(Math.abs(t)+Number.EPSILON),i=(Math.round(a)/1e3).toFixed(3);return e?i:"-"+i}function l(t,e){const a=r.get(t);return(null==e?void 0:e.includes(a))?a:(null==e?void 0:e.includes(i.i.Severeweather))?i.i.Severeweather:null}function c(t,e){const{enable:a,enableMultiPolygon:i,startZoomLevel:n,minZoomLevel:r,mapWidth:o,mapHeight:s,location:l,sourceLocation:c,minimapSevereWeatherType:d}=e||{};let p=[],g=n,m=void 0;if(!(a&&t&&t.length&&t.some(t=>t.dist<=0)))return{zoomLevel:g,alertAreaData:p,alertType:m};for(;g>=r;){p=[];for(let e=0;e<t.length;++e){const a=u(t[e],l,c,d,o,s,g);if(a&&(p.push(a.alertAreaMapData),0==e&&(m=a.alertType)),0==e&&!i)break}if(!(h(p.map(t=>t.severeAlertBBox),o,s)&&g>r))break;--g}return{zoomLevel:g,alertAreaData:p,alertType:m}}function u(t,e,a,r,s,c,u=7){if(!(t&&t.area&&"Polygon"==t.area.type&&t.area.coordinates&&r))return null;r&&e&&e.isoCode&&"us"!=e.isoCode.toLocaleLowerCase()&&(r=r.filter(t=>t!=i.i.Wildfire));const h=l(t.eventclass,r);if(!h||!r.includes(h))return null;const p=i.a.get(t.significance||"Y")||i.b,g=t.localizedTitle||[t.eventname||"",t.level||""].join(" "),m=n.a.latLonsToPixelLandingPage(t.area.coordinates[0]||[],Number(a.lat),Number(a.lon),s,c,u),f=o(m);return p&&g&&f?{alertAreaMapData:{severeAlertColor:p,severeAlertTooltip:g,severeAlertPixelCoordinatesArray:f,severeAlertBBox:d(m)},alertType:h}:null}function d(t){if(!(null==t?void 0:t.length))return null;let e,a,i,n;for(const[r,o]of t)e=null==e?r:Math.min(e,r),a=null==a?o:Math.min(a,o),i=null==i?r:Math.max(i,r),n=null==n?o:Math.max(n,o);return{x:e,y:a,width:i-e,height:n-a}}function h(t,e,a,i=.5){if(!(null==t?void 0:t.length))return!1;const n=e/2,r=a/2;let o=1/0,s=1/0,l=0,c=0;for(const e of t){if(!e)continue;const{x:t,y:a,width:i,height:u}=e;t>n||t+i<n||a>r||a+u<r||(o=Math.min(o,t),s=Math.min(s,a),l=Math.max(l,t+i),c=Math.max(c,a+u))}return(o===1/0?0:(l-o)*(c-s))/(e*a)>i}function p(t){let e=void 0;try{const a=new URL(t);e=new URLSearchParams(a.search)}catch(t){e=void 0}return e}var g,m;!function(t){t.TC="TC",t.TD="TD",t.TS="TS",t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5"}(g||(g={})),function(t){t.Observation="Observation",t.Current="Current",t.Forecast="Forecast"}(m||(m={}));new Map([[g.TS,-7],[g.TD,-7],[g.TC,-7],[g.H1,-7],[g.H2,-10],[g.H3,-13],[g.H4,-15],[g.H5,-18]]),new Map([[g.TS,28],[g.TD,28],[g.TC,28],[g.H1,28],[g.H2,32],[g.H3,36],[g.H4,40],[g.H5,44]]);const f={[i.i.Severeweather]:500,[i.i.Wildfire]:500,[i.i.Winterstorm]:500,[i.i.Precipitation]:1e3,[i.i.Temperature]:1e3,[i.i.Cloud]:1e3,[i.i.Wind]:1e3,[i.i.Radar]:1e3,[i.i.AirQuality]:1e3,NormalWeather:2e3},v=4},seDg:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return h}));var i,n=a("D57K"),r=a("P4Ao"),o=a("QBS5"),s=a("oePG"),l=a("Gy7L"),c=a("VRJB"),u=a("C5kU"),d=a("6fxl");!function(t){t.vertical="vertical",t.horizontal="horizontal"}(i||(i={}));class h extends r.a{constructor(){super(...arguments),this.orientation=i.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((e,a)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[a],i=this.tabpanelIds[a];e.setAttribute("id","string"!=typeof t?"tab-"+(a+1):t),e.setAttribute("aria-selected",this.activeTabIndex===a?"true":"false"),e.setAttribute("aria-controls","string"!=typeof i?"panel-"+(a+1):i),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===a?"0":"-1"),this.activeTabIndex===a&&(this.activetab=e)}e.style[t]=""+(a+1),this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")})},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach((t,e)=>{const a=this.tabIds[e],i=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof i?"panel-"+(e+1):i),t.setAttribute("aria-labelledby","string"!=typeof a?"tab-"+(e+1):a),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.keyCode;if(this.isHorizontal())switch(e){case l.h:t.preventDefault(),this.adjustBackward(t);break;case l.i:t.preventDefault(),this.adjustForward(t)}else switch(e){case l.j:t.preventDefault(),this.adjustBackward(t);break;case l.g:t.preventDefault(),this.adjustForward(t)}switch(e){case l.n:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case l.k:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let a=0;for(a=this.activetab?e.indexOf(this.activetab)+1:1,a===e.length&&(a=0);a<e.length&&e.length>1;){if(this.isFocusableElement(e[a])){this.moveToTabByIndex(e,a);break}if(this.activetab&&a===e.indexOf(this.activetab))break;a+1>=e.length?a=0:a+=1}},this.adjustBackward=t=>{const e=this.tabs;let a=0;for(a=this.activetab?e.indexOf(this.activetab)-1:0,a=a<0?e.length-1:a;a>=0&&e.length>1;){if(this.isFocusableElement(e[a])){this.moveToTabByIndex(e,a);break}a-1<0?a=e.length-1:a-=1}},this.moveToTabByIndex=(t,e)=>{const a=t[e];this.activetab=a,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,a.focus(),this.setComponent()}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),this.focusTab(),this.change())}isHorizontal(){return this.orientation===i.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",a=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[a];this.activeIndicatorRef.style[t]=""+(this.activeTabIndex+1);const n=this.activeIndicatorRef[a];this.activeIndicatorRef.style[t]=""+(this.prevActiveTabIndex+1);const r=n-i;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=""+(this.activeTabIndex+1),this.activeIndicatorRef.style.transform=e+"(0px)",this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Object(c.b)(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Object(n.e)([o.b],h.prototype,"orientation",void 0),Object(n.e)([o.b],h.prototype,"activeid",void 0),Object(n.e)([s.d],h.prototype,"tabs",void 0),Object(n.e)([s.d],h.prototype,"tabpanels",void 0),Object(n.e)([Object(o.b)({mode:"boolean"})],h.prototype,"activeindicator",void 0),Object(n.e)([s.d],h.prototype,"activeIndicatorRef",void 0),Object(n.e)([s.d],h.prototype,"showActiveIndicator",void 0),Object(d.a)(h,u.a)},sfV1:function(t,e,a){"use strict";a.d(e,"b",(function(){return T})),a.d(e,"a",(function(){return D})),a.d(e,"c",(function(){return S})),a.d(e,"d",(function(){return O}));var i=a("Kt+H"),n=a("TgmJ"),r=a("qTjs"),o=a("jbxw"),s=a("lFvR"),l=a("JIBo"),c=a("YBl9"),u=a("6eT7"),d=a("hv+n");function h(t,e,a){a*=1;const i=Object(c.c)(t)||new u.a(1,0,1,1),n=Object(c.c)(e)||new u.a(1,0,1,1),r=n.r*(1-a)+i.r*a,o=n.g*(1-a)+i.g*a,s=n.b*(1-a)+i.b*a;return new u.a(r,o,s,1).toStringHexRGB()}const p=Object(l.f)(s.C,s.w,s.t);function g(t){return e=>{Object(d.a)(e),p(e);return function(t){return e=>{const a=h("#FFF",Object(s.l)(e),t);return h(Object(s.b)(e),a,t)}}((11+1*t(e))/100)(e)}}const m=Object(l.d)(t=>({rest:f(t),hover:v(t),active:b(t),focus:y(t),selected:w(t)})),f=Object(l.d)(g(t=>0)),v=Object(l.d)(g(t=>9)),b=Object(l.d)(g(t=>-2)),y=Object(l.d)(g(t=>0)),w=Object(l.d)(g(t=>0));var x=a("eNhF");const C=t=>{const e=Object(d.b)(s.T,Object(s.l)(t))(t);return Object(d.d)(e-5,Object(s.T)(t))};function $(t){return"function"==typeof t?e=>C(Object.assign({},e,{backgroundColor:t(e)})):C(t)}Object(i.b)("accent-muted-fill-rest",t=>m(t).rest,n.a.findProvider);const T=Object(i.b)("gradient-white-fill",t=>Object(x.a)(.8,1)(t),n.a.findProvider),D=Object(i.b)("gradient-background-fill",t=>Object(x.a)(0,1,Object(s.l)(t))(t),n.a.findProvider),S=Object(i.b)("neutral-fill-bubble-over-rest",t=>$(r.b)(t),n.a.findProvider),O=Object(i.b)("neutral-foreground-hint-over-bubble",t=>Object(o.a)(t=>$(r.b)(t))(t),n.a.findProvider)},tZkf:function(t,e,a){var i;t.exports=(i=a("Ni7E"),i.enc.Utf8)},uFVb:function(t,e,a){"use strict";a.d(e,"a",(function(){return V})),a.d(e,"b",(function(){return E}));var i=a("D57K"),n=a("P4Ao"),r=a("Z5nQ"),o=a("ydPk"),s=a("kL0l"),l=a("xY0q"),c=a("wHpb"),u=a("CzTk"),d=a("oqLQ"),h=a("4X57"),p=a("j9Xn");const g=h.a`
    :host([layout="half"]) .setting-suggest-list {
        left: 12px;
    }

    :host([layout="full"]) .setting-suggest-list {
        left: 16px;
    }
`,m=h.a`
    :host([layout="half"]) .setting-suggest-list {
        right: 12px;
    }

    :host([layout="full"]) .setting-suggest-list {
        right: 16px;
    }
`,f=h.a`
    ${Object(l.a)("flex")} :host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: var(--body-font);
        flex-direction: column;
        outline: none;
    }

    .setting-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: calc(var(--corner-radius) * 2px);
        height: 100%;
    }

    :host([layout="half"]) .setting-container {
        padding: 6px 12px;
    }

    :host([layout="half"]):host([locationModeV2="true"]) .setting-container {
        padding: 12px;
    }

    :host([layout="full"]) .setting-container {
        padding: 16px;
    }

    .setting-edit {
        font-weight: 500;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        display: flex;
        align-items: center;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        color: ${s.D.var};
    }

    .setting-auto-suggest {
        position: relative;
    }

    .setting-location-v2 {
        display: flex;
        flex-direction: column;
    }

    .specify-location-label {
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        font-weight: 500;
    }

    :host([layout="half"]) .specify-location-label {
        margin-bottom: 4px;
    }

    .specify-location-label {
        margin-bottom: 12px;
    }
    .detect-location-icon {
        vertical-align: middle;
        border: none;
    }
    .detect-location-text {
        color: ${s.h.var};
    }
    .detect-location-label {
        height: 16px;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-top: 4px;
        text-decoration: none;
        background: transparent;
        padding: 0;
        max-width: fit-content;
    }
    .detect-location-label:hover,
    .detect-location-label:active,
    .detect-location-label:${c.a} {
        outline: 1px solid
    }

    .detect-location-label::part(control) {
        padding: 0;
        border: none;
    }

    .setting-location-textaction {
        margin: 0;
        height: 32px;
        width: 100%;
        border: 1px solid #949494;
        border-radius: 2px;
        display: flex;
    }

    .setting-location-icon {
        margin: 6px;
        fill: currentcolor;
    }

    .setting-location-input {
        height: calc(100% - 4px);
        margin: 2px 1px;
        flex: 1 0 0px;
        background: transparent;
        min-width: inherit;
        width: 100%;
        padding: 0 5px;
        border: none;
        outline: none;
        color: ${s.G.var};
    }

    .detect-location-icon path {
        fill: ${s.h.var};
    }

    .setting-location-input:disabled {
        background: ${s.s.var};
        opacity: var(--disabled-opacity);
    }

    :host([layout="half"]) .setting-suggest-list {
        top: 100px;
        width: 276px;
    }

    :host([layout="full"]) .setting-suggest-list {
        top: 150px;
        width: 268px;
    }
    :host([layout="full"]):host([cardType="greeting"]) .setting-suggest-list {
        top: 128px;
    }

    :host([layout="half"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 70px;
        width: 276px;
    }

    :host([layout="full"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 122px;
        width: 268px;
    }

    :host([layout="half"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 60px;
        width: 276px;
    }

    :host([layout="full"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 132px;
        width: 268px;
    }

    :host([layout="full"]):host([cardType="greeting"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 100px;
    }
    :host([layout="full"]):host([cardType="greeting"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 112px;
    }
    :host([layout="full"]):host([cardType="greeting"]) .setting-container {
        padding-bottom: 8px;
        height: 206px;
    }

    :host([layout="full"]):host([cardType="greeting"]) .setting-edit {
        padding-bottom: 8px;
        color: ${s.G.var};
    }

    :host([layout="full"]):host([cardType="greeting"]) .specify-location-label {
        margin-bottom: 8px;
        color: ${s.G.var};
    }

    :host([layout="full"]):host([cardType="greeting"]) .detect-location-label {
        margin-bottom: 12px;
    }

    .setting-suggest-list {
        display: block;
        position: absolute;
        list-style: none;
        background: ${s.s.var};
        border: 1px solid;
        border-radius: 2px;
        margin: 0;
        padding: 0;
        z-index: 99;
        outline: none;
        border-color: ${s.P.var};
    }

    .setting-suggest-text {
        text-overflow: ellipsis;
        word-wrap: break-word;
        padding: 5px;
        cursor: pointer;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .setting-suggest-text:hover {
        background: ${s.o.var};
    }

    .setting-suggest-text-h {
        background: ${s.o.var};
    }

    .setting-unit-title {
        font-weight: 500;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        align-items: center;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        color: ${s.G.var};
    }

    .setting-save-button,
    .setting-cancel-button {
        min-width: 80px;
        align-self: center;
    }
`.withBehaviors(s.o,s.z,s.D,s.G,s.P,s.h,new u.a(g,m),Object(d.c)(h.a`
            :host {
                forced-color-adjust: auto;
                color: ${p.a.ButtonText};
            }
            .detect-location-text {
                color: ${p.a.ButtonText};
            }
            .detect-location-icon path {
                opacity: 1;
                fill: ${p.a.ButtonText};
            }
            .detect-location-label:hover span,
            .detect-location-label:${c.a} span,
            .setting-suggest-text:hover span {
                color: ${p.a.HighlightText};
            }
            .detect-location-label:hover path,
            .detect-location-label:${c.a} path,
            .setting-suggest-text:hover path {
                fill: ${p.a.HighlightText};
            }
            .detect-location-label {
                outline: 1px solid;
            }
            .setting-suggest-list {
                background: ${p.a.ButtonFace};
                border-color: ${p.a.CanvasText};
            }
            .setting-suggest-item {
                background: ${p.a.ButtonFace};
            }
            .setting-suggest-text:hover {
                forced-color-adjust: none;
                background: ${p.a.Highlight};
                color: ${p.a.HighlightText};
            }
            .setting-suggest-text-h {
                forced-color-adjust: none;
                color: ${p.a.HighlightText};
            }
        `));var v=a("m1Vi"),b=a("duBZ"),y=a("CCFo"),w=a("P2Ap"),x=a("6BDD"),C=a("6vBc"),$=a("+53S"),T=a("UNqU"),D=a("eUhr"),S=a("nySH");v.b,b.a,y.a,w.a;const O=x.b`
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="setting-location-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        />
    </svg>
`,L=x.b`<svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M6 0C6.3077 0 6.5613 0.231624 6.59596 0.530027L6.6 0.6L6.60021 1.38838C8.68853 1.6575 10.3428 3.31199 10.6117 5.4004L11.4 5.4C11.7314 5.4 12 5.66863 12 6C12 6.3077 11.7684 6.5613 11.47 6.59596L11.4 6.6L10.6116 6.60021C10.3425 8.68832 8.68832 10.3425 6.60021 10.6116L6.6 11.4C6.6 11.7314 6.33137 12 6 12C5.6923 12 5.4387 11.7684 5.40404 11.47L5.4 11.4L5.4004 10.6117C3.31199 10.3428 1.6575 8.68853 1.38838 6.60021L0.6 6.6C0.268629 6.6 0 6.33137 0 6C0 5.6923 0.231624 5.4387 0.530027 5.40404L0.6 5.4L1.3883 5.4004C1.65718 3.31179 3.31179 1.65718 5.4004 1.3883L5.4 0.6C5.4 0.268629 5.66863 0 6 0ZM6 2.55C4.09462 2.55 2.55 4.09462 2.55 6C2.55 7.90538 4.09462 9.45 6 9.45C7.90538 9.45 9.45 7.90538 9.45 6C9.45 4.09462 7.90538 2.55 6 2.55ZM6 3.6C7.32548 3.6 8.4 4.67452 8.4 6C8.4 7.32548 7.32548 8.4 6 8.4C4.67452 8.4 3.6 7.32548 3.6 6C3.6 4.67452 4.67452 3.6 6 3.6Z"
    />
</svg> `,M=x.b`
    <li
        class="${(t,e)=>e.index==e.parent.activeSuggestIndex?"setting-suggest-text setting-suggest-text-h":"setting-suggest-text"}"
        role="option"
        id=${(t,e)=>"locationSug_"+e.index}
        title="${t=>""+t.displayName}"
        aria-label="${t=>""+t.displayName}"
        aria-selected="${(t,e)=>e.index==e.parent.activeSuggestIndex}"
        @click="${(t,e)=>e.parent.selectSuggestLocation(t,e.event)}"
        ${Object(D.b)((t,e)=>e.parent.suggestTelemetryTag)}
    >
        ${t=>""+t.displayName}
    </li>
`,k=x.b`
    <div class="setting-auto-suggest">
        <div class="setting-location-textaction">
            ${O}
            ${Object(C.a)(t=>t.settingData.locationMode!==o.a.SpecifyLoc,x.b`
                    <input
                        class="setting-location-input"
                        part="setting-location-input"
                        placeholder="${t=>t.searchPlaceHolder}"
                        @input=${t=>t.handleInputForSuggest()}
                        disabled
                        type="search"
                        ${Object($.b)("inputControl")}
                    />
                `)}
            ${Object(C.a)(t=>t.settingData.locationMode===o.a.SpecifyLoc,x.b`
                    <input
                        class="setting-location-input"
                        part="setting-location-input"
                        id="weather_location_input"
                        placeholder="${t=>t.searchPlaceHolder}"
                        @input="${t=>t.handleInputForSuggest()}"
                        @click="${(t,e)=>t.handleInputForSuggest(e.event)}"
                        @focus="${(t,e)=>t.handleInputForSuggest(e.event)}"
                        type="text"
                        autocomplete="off"
                        aria-autocomplete="both"
                        aria-activedescendant=${t=>null!=t.activeSuggestIndex&&t.activeSuggestIndex>=0?"locationSug_"+t.activeSuggestIndex:null}
                        value="${t=>t.getSelectedName()}"
                        aria-owns="weather_location_search_list"
                        aria-controls="weather_location_search_list"
                        ${Object($.b)("inputControl")}
                        ${Object(D.b)(t=>t.inputTelemetryTag)}
                    />
                `)}
        </div>
    </div>
`,A=x.b`
    <div class="setting-location">
        <div>
            <fluent-radio-group
                value="${t=>t.settingData.locationMode}"
                @change="${(t,e)=>t.chooseLocationMode(e.event)}"
                aria-labelledby="setlocationmode"
                name="set-location-mode"
                orientation="vertical"
            >
                <fluent-radio
                    value="${o.a.AutoDetectLoc}"
                    tabindex="${t=>t.settingData.locationMode==o.a.AutoDetectLoc?0:null}"
                    ${Object(D.b)(t=>t.detectTelemetryTag)}
                    >${t=>t.detectLocationLabel}</fluent-radio
                >
                <fluent-radio
                    value="${o.a.SpecifyLoc}"
                    tabindex="${t=>t.settingData.locationMode==o.a.SpecifyLoc?0:null}"
                    ${Object(D.b)(t=>t.specifyTelemetryTag)}
                    >${t=>t.specifyLocationLabel}</fluent-radio
                >
            </fluent-radio-group>
        </div>
        ${k}
    </div>
`,j=x.b`
    <div class="setting-location-v2">
        ${Object(C.a)(t=>t.layout===S.b.Full,x.b`<span class="specify-location-label"
                >${t=>t.specifyLocationActionButton}</span
            >`)}
        ${k}
        ${Object(C.a)(t=>"v3"!==t.locationModeV2,x.b` <fluent-button
                class="detect-location-label"
                tabindex="0"
                aria-label=${t=>t.detectLocationActionLabel}
                title=${t=>t.detectLocationActionLabel}
                @click="${(t,e)=>t.detectCurrentLocation()}"
                ${Object(D.b)(t=>t.detectLocationTelemetryTag)}
            >
                <i class="detect-location-icon">${L} </i>
                <span class="detect-location-text"
                    >${t=>t.detectLocationActionLabel}</span
                >
            </fluent-button>`)}
    </div>
`,N=x.b`
    <div class="setting-action-button">
        <fluent-button
            class="setting-save-button sd-action"
            appearance="accent"
            @click="${t=>t.saveSetting()}"
            :disabled=${t=>!t.settingData.changeSignal}
            ${Object(D.b)(t=>t.saveTelemetryTag)}
        >
            ${t=>t.saveButtonCont}
        </fluent-button>
        <fluent-button
            class="setting-cancel-button sd-action"
            appearance="outline"
            @click="${t=>t.cancelSetting()}"
            ${Object(D.b)(t=>t.cancelTelemetryTag)}
        >
            ${t=>t.cancelButtonCont}
        </fluent-button>
    </div>
`,I=x.b` ${Object(C.a)(t=>!!t.showSuggests,x.b`
        <div
            id="weather_location_search_list"
            aria-expanded="${t=>!!t.showSuggests}"
            aria-label="${t=>t.searchPlaceHolder}"
            aria-live="polite"
        >
            <ul
                class="setting-suggest-list"
                tabindex="-1"
                aria-labelledby="weather_location_input"
                ${Object($.b)("suggestList")}
            >
                ${Object(C.a)(t=>t.userQuery&&t.settingData.suggestedLocations&&t.settingData.suggestedLocations.length>0,x.b`${Object(T.c)(t=>t.settingData.suggestedLocations,M,{positioning:!0})}`)}
                ${Object(C.a)(t=>t.userQuery&&t.settingData.suggestedLocations&&0==t.settingData.suggestedLocations.length,x.b`<li
                        role="option"
                        aria-label="${t=>t.searchNoResult}"
                        title="${t=>t.searchNoResult}"
                        class="setting-suggest-text"
                    >
                        ${t=>t.searchNoResult}
                    </li>`)}
                ${Object(C.a)(t=>"v3"===t.locationModeV2&&!t.userQuery,x.b`<li
                        role="option"
                        id="locationSug_0"
                        aria-label="${t=>t.detectLocationActionLabel}"
                        title="${t=>t.detectLocationActionLabel}"
                        class="${t=>0===t.activeSuggestIndex?"setting-suggest-text setting-suggest-text-h":"setting-suggest-text"}"
                        aria-selected="${t=>0===t.activeSuggestIndex}"
                        @click="${t=>t.detectCurrentLocation()}"
                        ${Object(D.b)(t=>t.detectLocationTelemetryTag)}
                    >
                        <i class="detect-location-icon">${L} </i>
                        <span class="detect-location-text"
                            >${t=>t.detectLocationActionLabel}</span
                        >
                    </li>`)}
            </ul>
        </div>
    `)}`,H=x.b` <div
    class="setting-unit"
>
    ${Object(C.a)(t=>t.layout===S.b.Full,x.b`<label id="unitsgroup" class="setting-unit-title"
            >${t=>t.unitsTitle}</label
        >`)}
    <fluent-radio-group
        value="${t=>t.settingData.unitSet}"
        @change="${(t,e)=>t.chooseWeatherUnit(e.event)}"
        aria-labelledby="unitsgroup"
        name="set-unit"
    >
        <fluent-radio
            value="${o.c.Fahrenheit}"
            tabindex="${t=>t.settingData.unitSet==o.c.Fahrenheit?0:null}"
            ${Object(D.b)(t=>t.fahrenheitTelemetryTag)}
            >${t=>t.fahrenheitLabel}</fluent-radio
        >
        <fluent-radio
            value="${o.c.Celsius}"
            tabindex="${t=>t.settingData.unitSet==o.c.Celsius?0:null}"
            ${Object(D.b)(t=>t.celsiusTelemetryTag)}
            >${t=>t.celsiusLabel}</fluent-radio
        >
    </fluent-radio-group>
</div>`,z=x.b`
    <div class="setting-edit">
        ${t=>t.editHeader}
    </div>
    ${j} ${H}
`,P=x.b`
    ${Object(C.a)(t=>t.settingData,x.b`
            <div class="setting-container">
                ${Object(C.a)(t=>"v3"===t.locationModeV2,z)}
                ${Object(C.a)(t=>"v3"!==t.locationModeV2&&t.layout===S.b.Full,x.b`
                        <div class="setting-edit">
                            ${t=>t.editHeader}
                        </div>
                        ${Object(C.a)(t=>!t.locationModeV2,A)}
                        ${Object(C.a)(t=>t.locationModeV2,j)}
                        ${H}
                    `)}
                ${Object(C.a)(t=>"v3"!==t.locationModeV2&&t.layout===S.b.Half,x.b`
                        ${Object(C.a)(t=>!t.locationModeV2,A)}
                        ${Object(C.a)(t=>t.locationModeV2,j)}
                    `)}
                ${N}
            </div>
            ${I}
        `)}
`,F=h.a`
    :host([layout="full"]) .setting-suggest-list {
        left: 24px;
    }
`,R=h.a`
    :host([layout="full"]) .setting-suggest-list {
        right: 24px;
    }
`,_=h.a`
    .sd-action {
        border-radius: 4px;
    }
    :host([layout="full"]) .setting-container {
        padding: 55px 24px 24px 24px;
    }
    :host([layout="full"]) .setting-suggest-list {
        top: 120px;
        width: 252px;
    }
    :host([layout="full"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 120px;
        width: 252px;
    }
    .setting-area {
        height: 176px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .setting-unit-title {
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }
    .setting-save-button,
    .setting-cancel-button {
        width: 120px;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }
`.withBehaviors(new u.a(F,R));v.b,b.a,y.a,w.a;const B=x.b` ${Object(C.a)(t=>t.settingData,x.b`
        <div class="setting-container">
            <div class="setting-area">
                ${j} ${H}
            </div>
            ${N}
        </div>
        ${I}
    `)}`;let V=class extends o.b{};V=Object(i.e)([Object(n.b)({name:"msft-weather-setting-card",template:P,styles:[f,r.b],shadowOptions:{delegatesFocus:!0}})],V);let E=class extends o.b{};E=Object(i.e)([Object(n.b)({name:"msft-weather-setting-card-widget",template:B,styles:[f,r.b,_],shadowOptions:{delegatesFocus:!0}})],E)},w5BF:function(t,e,a){"use strict";function i(t){this._context=t}function n(t){var e,a,i=t.length-1,n=new Array(i),r=new Array(i),o=new Array(i);for(n[0]=0,r[0]=2,o[0]=t[0]+2*t[1],e=1;e<i-1;++e)n[e]=1,r[e]=4,o[e]=4*t[e]+2*t[e+1];for(n[i-1]=2,r[i-1]=7,o[i-1]=8*t[i-1]+t[i],e=1;e<i;++e)a=n[e]/r[e-1],r[e]-=a,o[e]-=a*o[e-1];for(n[i-1]=o[i-1]/r[i-1],e=i-2;e>=0;--e)n[e]=(o[e]-n[e+1])/r[e];for(r[i-1]=(t[i]+n[i-1])/2,e=0;e<i-1;++e)r[e]=2*t[e+1]-n[e+1];return[n,r]}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,a=t.length;if(a)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),2===a)this._context.lineTo(t[1],e[1]);else for(var i=n(t),r=n(e),o=0,s=1;s<a;++o,++s)this._context.bezierCurveTo(i[0][o],r[0][o],i[1][o],r[1][o],t[s],e[s]);(this._line||0!==this._line&&1===a)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}},e.a=function(t){return new i(t)}},xQNS:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var i=a("D57K"),n=a("P4Ao"),r=a("QBS5"),o=a("oePG"),s=a("uXNP"),l=a("C5kU"),c=a("6fxl");class u extends n.a{}Object(i.e)([r.b],u.prototype,"download",void 0),Object(i.e)([r.b],u.prototype,"href",void 0),Object(i.e)([r.b],u.prototype,"hreflang",void 0),Object(i.e)([r.b],u.prototype,"ping",void 0),Object(i.e)([r.b],u.prototype,"referrerpolicy",void 0),Object(i.e)([r.b],u.prototype,"rel",void 0),Object(i.e)([r.b],u.prototype,"target",void 0),Object(i.e)([r.b],u.prototype,"type",void 0),Object(i.e)([o.d],u.prototype,"defaultSlottedContent",void 0);class d{}Object(i.e)([Object(r.b)({attribute:"aria-expanded",mode:"fromView"})],d.prototype,"ariaExpanded",void 0),Object(c.a)(d,s.a),Object(c.a)(u,l.a,d)},ydPk:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return d}));var i,n,r,o=a("D57K"),s=a("P4Ao"),l=a("QBS5"),c=a("oePG"),u=a("Gy7L");!function(t){t[t.AutoDetectLoc=1]="AutoDetectLoc",t[t.SpecifyLoc=2]="SpecifyLoc"}(i||(i={})),function(t){t[t.Success=1]="Success",t[t.Failure=2]="Failure"}(n||(n={})),function(t){t[t.Fahrenheit=1]="Fahrenheit",t[t.Celsius=2]="Celsius"}(r||(r={}));class d extends s.a{constructor(){super(...arguments),this.handleDocumentKeydown=t=>{if(t.defaultPrevented||!this.settingData)return;const e=this.userQuery&&this.settingData.suggestedLocations&&this.settingData.suggestedLocations.length>0;if(!e&&("v3"!==this.locationModeV2||this.userQuery))return;let a=this.settingData.suggestedLocations?this.settingData.suggestedLocations.length:0;this.userQuery||(a=1);const i=this.settingData.suggestedLocations||[];switch(t.keyCode){case u.g:t.preventDefault(),null==this.activeSuggestIndex||this.activeSuggestIndex<0||this.activeSuggestIndex>=a-1?this.activeSuggestIndex=0:this.activeSuggestIndex=this.activeSuggestIndex+1;break;case u.j:null==this.activeSuggestIndex||this.activeSuggestIndex<=0||this.activeSuggestIndex>a-1?this.activeSuggestIndex=a-1:this.activeSuggestIndex=this.activeSuggestIndex-1,t.preventDefault();break;case u.l:case u.q:null!=this.activeSuggestIndex&&this.activeSuggestIndex>=0&&this.activeSuggestIndex<a&&(e?this.selectSuggestLocation(i[this.activeSuggestIndex]):this.detectCurrentLocation(),this.activeSuggestIndex=-1,t.preventDefault());break;case u.r:this.showSuggests=!1;break;default:return}},this.handleClickOutside=t=>{t.defaultPrevented||this.suggestList&&!this.suggestList.contains(t.target)&&(this.showSuggests=!1)}}handleInputForSuggest(t){0==this.showSuggests&&(this.showSuggests=!0),t&&t.preventDefault(),this.inputControl&&(this.userQuery!==this.inputControl.value&&(this.userQuery=this.inputControl.value),this.inputControl.value&&(this.$emit("suggest",this.inputControl.value),this.settingData.selectedLocation&&this.settingData.selectedLocation.displayName!==this.inputControl.value&&this.$emit("select",null)))}detectCurrentLocation(){this.$emit("detectLocation"),this.showSuggests=!1}getSelectedName(){var t;const e=(null===(t=this.settingData.selectedLocation)||void 0===t?void 0:t.displayName)||"";return this.inputControl&&e&&(this.inputControl.value=e),e}selectSuggestLocation(t,e){this.inputControl&&t&&(this.inputControl.value=""+t.displayName),this.showSuggests=!1,e&&e.preventDefault(),this.$emit("select",t)}chooseLocationMode(t){if(t.defaultPrevented||!t.target)return;t.preventDefault(),this.showSuggests=!1;const e=parseInt(t.target.value);this.$emit("setLocationMode",e)}chooseWeatherUnit(t){if(t.defaultPrevented||!t.target)return;t.preventDefault(),this.showSuggests=!1;const e=parseInt(t.target.value);this.$emit("setUnitMode",e)}cancelSetting(){this.$emit("cancel"),this.inputControl&&(this.inputControl.value="")}saveSetting(){this.$emit("save"),this.inputControl&&(this.inputControl.value="")}connectedCallback(){super.connectedCallback(),this.layout||(this.layout="half"),this.focus(),document.addEventListener("keydown",this.handleDocumentKeydown),document.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),document.removeEventListener("click",this.handleClickOutside)}}Object(o.e)([l.b],d.prototype,"layout",void 0),Object(o.e)([l.b],d.prototype,"editHeader",void 0),Object(o.e)([l.b],d.prototype,"detectLocationLabel",void 0),Object(o.e)([l.b],d.prototype,"specifyLocationLabel",void 0),Object(o.e)([l.b],d.prototype,"detectLocationActionLabel",void 0),Object(o.e)([l.b],d.prototype,"specifyLocationActionButton",void 0),Object(o.e)([l.b],d.prototype,"searchPlaceHolder",void 0),Object(o.e)([l.b],d.prototype,"searchNoResult",void 0),Object(o.e)([l.b],d.prototype,"unitsTitle",void 0),Object(o.e)([l.b],d.prototype,"fahrenheitLabel",void 0),Object(o.e)([l.b],d.prototype,"celsiusLabel",void 0),Object(o.e)([l.b],d.prototype,"saveButtonCont",void 0),Object(o.e)([l.b],d.prototype,"cancelButtonCont",void 0),Object(o.e)([l.b],d.prototype,"locationModeV2",void 0),Object(o.e)([c.d],d.prototype,"settingData",void 0),Object(o.e)([c.d],d.prototype,"activeSuggestIndex",void 0),Object(o.e)([c.d],d.prototype,"showSuggests",void 0),Object(o.e)([c.d],d.prototype,"userQuery",void 0),Object(o.e)([c.d],d.prototype,"saveTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"cancelTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"detectTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"specifyTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"fahrenheitTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"celsiusTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"inputTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"suggestTelemetryTag",void 0),Object(o.e)([c.d],d.prototype,"detectLocationTelemetryTag",void 0)},yewK:function(t,e,a){"use strict";var i,n;a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),function(t){t[t.None=0]="None",t[t.LocationAndUnit=1]="LocationAndUnit",t[t.Unit=2]="Unit",t[t.Location=3]="Location"}(i||(i={})),function(t){t[t.Unit=2]="Unit",t[t.Location=3]="Location"}(n||(n={}));class r{constructor(){}useServerCookie(t){this.read=t}saveServerCookie(t){this.save=t}setClientRequestInfo(t){this.requestInfo=t}setFilterRule(t){this.filterRule=t}get readChoice(){return this.read}get saveChoice(){return this.save}get clientRequestInfo(){return this.requestInfo}get filterRuleValue(){return this.filterRule}}},zmqX:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("D57K"),n=a("P4Ao"),r=a("pS8B"),o=a("09SU");const s=a("4X57").a`
    ::slotted(*) {
        width: 100%;
    }
`;var l=a("Uz+G");let c=class extends l.a{};c=Object(i.e)([Object(n.b)({name:"msft-carousel-card-panel",template:r.a,styles:[o.a,s]})],c)}}]);