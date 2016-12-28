!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.EffectUnit=n():t.EffectUnit=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),i=r(o);n.default=i.default},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),i=r(o),u=e(3),f=r(u),c=e(22),a=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",effectChain:{},values:[]},e=arguments[1];if((0,i.default)(this,t),this.isEffectUnit=!0,!e)throw new Error("The AudioContext specified (3° parameter) is not defined!");this.name=name,this.audioCtx=e,this.effectChain=(0,c.functionsToValues)(n.effectChain),this.values=(0,c.bindMethodsToValues)(n.values,this.effectChain),this.values.forEach(function(t){t.options.defaultValue&&t.set(t.options.defaultValue)}),this.setupEffectChain()}return(0,f.default)(t,[{key:"enable",value:function(){this.effectGain.gain.value=1,this.directGain.gain.value=0}},{key:"disable",value:function(){this.effectGain.gain.value=0,this.directGain.gain.value=1}},{key:"connect",value:function(t){t.isEffectUnit?this.output.connect(t.input):this.output.connect(t)}},{key:"setValue",value:function(t,n){(0,c.filterValue)(this.values,t).set(n)}},{key:"getValueOptions",value:function(t){return(0,c.filterValue)(this.values,t).options}},{key:"setupEffectChain",value:function(){this.effectGain=this.audioCtx.createGain(),this.directGain=this.audioCtx.createGain(),this.output=this.audioCtx.createGain(),this.input=this.audioCtx.createGain(),this.input.connect(this.effectGain),this.input.connect(this.directGain),this.directGain.connect(this.output);var t=(0,c.objToArray)(this.effectChain);if(t.length>=1){this.effectGain.connect(t[0]);for(var n=0;n<t.length-1;n++)t[n].connect(t[n+1]);t[t.length-1].connect(this.output)}this.enable()}}]),t}();n.default=a},function(t,n){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(4),i=r(o);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){t.exports={default:e(5),__esModule:!0}},function(t,n,e){e(6);var r=e(9).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(7);r(r.S+r.F*!e(17),"Object",{defineProperty:e(13).f})},function(t,n,e){var r=e(8),o=e(9),i=e(10),u=e(12),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,d=t&c.G,h=t&c.S,v=t&c.P,y=t&c.B,b=t&c.W,x=d?o:o[n]||(o[n]={}),_=x[f],g=d?r:h?r[n]:(r[n]||{})[f];d&&(e=n);for(a in e)s=!p&&g&&void 0!==g[a],s&&a in x||(l=s?g[a]:e[a],x[a]=d&&"function"!=typeof g[a]?e[a]:y&&s?i(l,r):b&&g[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[a]=l,t&c.R&&_&&!_[a]&&u(_,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(11);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(13),o=e(21);t.exports=e(17)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(14),o=e(16),i=e(20),u=Object.defineProperty;n.f=e(17)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(17)&&!e(18)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(15),o=e(8).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(15);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.filterValue=n.objToArray=n.functionsToValues=n.bindMethodsToValues=void 0;var o=e(23),i=r(o);n.bindMethodsToValues=function(t,n){return t.map(function(t){if("function"!=typeof t.set)throw new Error("The specified value for the 'set'-field of the '"+t.name+"' - value is not a function!");return(0,i.default)({},t,{set:t.set.bind(void 0,n)})})},n.functionsToValues=function(t){var n=Object.assign({},t);for(var e in n)"function"==typeof n[e]&&(n[e]=n[e]());return n},n.objToArray=function(t){var n=[];for(var e in t)n.push(t[e]);return n},n.filterValue=function(t,n){var e=t.filter(function(t){return t.name===n})[0];if(!e)throw new Error("Tried to access inexistent value '"+n+"'.");return e}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(24),i=r(o);n.default=i.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){t.exports={default:e(25),__esModule:!0}},function(t,n,e){e(26),t.exports=e(9).Object.assign},function(t,n,e){var r=e(7);r(r.S+r.F,"Object",{assign:e(27)})},function(t,n,e){"use strict";var r=e(28),o=e(43),i=e(44),u=e(45),f=e(32),c=Object.assign;t.exports=!c||e(18)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=u(t),c=arguments.length,a=1,s=o.f,l=i.f;c>a;)for(var p,d=f(arguments[a++]),h=s?r(d).concat(s(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(e[p]=d[p]);return e}:c},function(t,n,e){var r=e(29),o=e(42);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(30),o=e(31),i=e(35)(!1),u=e(39)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(32),o=e(34);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(31),o=e(36),i=e(38);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(37),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(37),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(40)("keys"),o=e(41);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(8),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(34);t.exports=function(t){return Object(r(t))}}])});