"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var VueTranslations=function(n){var a={};function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static/dist",r(r.s=2)}([function(t,e,n){t.exports=function(){"function"!=typeof Object.assign&&(Object.assign=function(t){var e,n,a,r,s=arguments;if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(e=Object(t),n=1;n<arguments.length;n++)if(null!=(a=s[n]))for(r in a)a.hasOwnProperty(r)&&(e[r]=a[r]);return e});function g(t,e){switch(e="number"==typeof(e=parseInt(e))&&isNaN(e)?1:e,2<t.length&&"pt_BR"!==t&&(t=t.split("_")[0]),t){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return e%10!=1||e%100==11?1:0;case"jv":return 0!==e?1:0;case"mk":return 1===e||e%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return 1<e?1:0;case"lv":return e%10==1&&e%100!=11?0:0!==e?1:2;case"lt":return e%10==1&&e%100!=11?0:2<=e%10&&(e%100<10||20<=e%100)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return e%10==1&&e%100!=11?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2;case"mnk":return 0===e?0:1===e?1:2;case"ro":return 1===e?0:0===e||0<e%100&&e%100<20?1:2;case"pl":return 1===e?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2;case"cs":case"sk":return 1===e?0:2<=e&&e<=4?1:2;case"csb":return 1===e?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mt":return 1===e?0:0===e||1<e%100&&e%100<11?1:10<e%100&&e%100<20?2:3;case"gd":return 1===e||11===e?0:2===e||12===e?1:2<e&&e<20?2:3;case"cy":return 1===e?0:2===e?1:8!==e&&11!==e?2:3;case"kw":return 1===e?0:2===e?1:3===e?2:3;case"ga":return 1===e?0:2===e?1:2<e&&e<7?2:6<e&&e<11?3:4;case"ar":return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5;default:return 1!==e?1:0}}var d,f=/\s{2,}/g,p={getTranslation:function(e,t,n,a,r){if(void 0===t&&(t=1),void 0===n&&(n=null),void 0===a&&(a=null),void 0===r&&(r=d.config.language),!e)return"";var s=d.config.getTextPluginSilent||-1!==d.config.getTextPluginMuteLanguages.indexOf(r),i=a&&0<g(r,t)?a:e,o=d.$translations[r]||d.$translations[r.split("_")[0]];if(!o)return s||console.warn("No translations found for "+r),i;e=e.trim();var u=o[e];if(!u&&f.test(e)&&Object.keys(o).some(function(t){if(t.replace(f," ")===e.replace(f," "))return u=o[t]}),u&&n&&(u=u[n]),!u){if(!s){var l="Untranslated "+r+" key found: "+e;n&&(l+=" (with context: "+n+")"),console.warn(l)}return i}u instanceof Array||!u.hasOwnProperty("")||(u=u[""]),"string"==typeof u&&(u=[u]);var c=g(r,t);return 1===u.length&&1===t&&(c=0),u[c]},gettext:function(t){return this.getTranslation(t)},pgettext:function(t,e){return this.getTranslation(e,1,t)},ngettext:function(t,e,n){return this.getTranslation(t,n,null,e)},npgettext:function(t,e,n,a){return this.getTranslation(e,a,t,n)}};function r(){var t,e,n="";for(t=0;t<32;t++)e=16*Math.random()|0,8!==t&&12!==t&&16!==t&&20!==t||(n+="-"),n+=(12===t?4:16===t?3&e|8:e).toString(16);return n}function h(t,s,i){return void 0===s&&(s={}),void 0===i&&(i=!1),!d.config.getTextPluginSilent&&n.test(t)&&console.warn('Mustache syntax cannot be used with vue-gettext. Please use "%{}" instead of "{{}}" in: '+t),t.replace(e,function(t,e){var n,a=e.trim(),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return function t(a){try{n=function(t,e){for(var n=a.split(o).filter(function(t){return t});n.length;)t=t[n.shift()];return t}(this)}catch(t){}if(void 0===n){if(this.$parent)return t.call(this.$parent,a);console.warn("Cannot evaluate expression: "+a),n=a}var e=n.toString();return i?e:e.replace(/[&<>"']/g,function(t){return r[t]})}.call(s,a)})}var u={name:"translate",created:function(){if(this.msgid="",this.$options._renderChildren&&(this.$options._renderChildren[0].hasOwnProperty("text")?this.msgid=this.$options._renderChildren[0].text:this.msgid=this.$options._renderChildren[0]),this.isPlural=void 0!==this.translateN&&void 0!==this.translatePlural,!this.isPlural&&(this.translateN||this.translatePlural))throw new Error("`translate-n` and `translate-plural` attributes must be used together: "+this.msgid+".")},props:{tag:{type:String,default:"span"},translateN:{type:Number,required:!1},translatePlural:{type:String,required:!1},translateContext:{type:String,required:!1},translateParams:{type:Object,required:!1},translateComment:{type:String,required:!1}},computed:{translation:function(){var t=p.getTranslation(this.msgid,this.translateN,this.translateContext,this.isPlural?this.translatePlural:null,this.$language.current),e=this.$parent;return this.translateParams&&(e=Object.assign({},this.$parent,this.translateParams)),this.$gettextInterpolate(t,e)}},render:function(t){return d.config.autoAddKeyAttributes&&!this.$vnode.key&&(this.$vnode.key=r()),t(this.tag,[this.translation])}},o=/[[\].]{1,2}/g,e=/%\{((?:.|\n)+?)\}/g,n=/\{\{((?:.|\n)+?)\}\}/g;h.INTERPOLATION_RE=e,h.INTERPOLATION_PREFIX="%{";function s(t,e,n){var a=n.data.attrs||{},r=t.dataset.msgid,s=a["translate-context"],i=a["translate-n"],o=a["translate-plural"],u=void 0!==i&&void 0!==o,l=n.context,c="true"===a["render-html"];if(!u&&(i||o))throw new Error("`translate-n` and `translate-plural` attributes must be used together:"+r+".");!d.config.getTextPluginSilent&&a["translate-params"]&&console.warn("`translate-params` is required as an expression for v-translate directive. Please change to `v-translate='params'`: "+r),e.value&&"object"==_typeof(e.value)&&(l=Object.assign({},n.context,e.value));var g=p.getTranslation(r,i,s,u?o:null,t.dataset.currentLanguage),f=h(g,l,c);t.innerHTML=f}var l,c={bind:function(t,e,n){d.config.autoAddKeyAttributes&&!n.key&&(n.key=r());var a=t.innerHTML;t.dataset.msgid=a,t.dataset.currentLanguage=d.config.language,d.config.getTextPluginSilent||-1===a.indexOf(h.INTERPOLATION_PREFIX)||e.expression||console.info("No expression is provided for change detection. The translation for this key will be static:\n"+a),s(t,e,n)},update:function(t,e,n){var a=!1;t.dataset.currentLanguage!==d.config.language&&(t.dataset.currentLanguage=d.config.language,a=!0),!a&&e.expression&&e.value!==e.oldValue&&(a=!0),a&&s(t,e,n)}};return function(t,e){void 0===e&&(e={});var n,a,r,s,i,o={autoAddKeyAttributes:!1,availableLanguages:{en_US:"English"},defaultLanguage:"en_US",languageVmMixin:{},muteLanguages:[],silent:t.config.silent,translations:null};if(Object.keys(e).forEach(function(t){if(-1===Object.keys(o).indexOf(t))throw new Error(t+" is an invalid option for the translate plugin.")}),!e.translations)throw new Error("No translations available.");e=Object.assign(o,e),l=new t({created:function(){this.available=e.availableLanguages},data:{current:e.defaultLanguage},mixins:[e.languageVmMixin]}),function(t,n){var a=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={});var e=t._parent||t.parent||this;this.$language=e.$language||n,a.call(this,t)};var e=t.prototype._destroy;t.prototype._destroy=function(){this.$language=null,e.apply(this,arguments)}}(d=t,l),n=t,a=l,r=e.silent,s=e.autoAddKeyAttributes,i=e.muteLanguages,Object.defineProperty(n.config,"language",{enumerable:!0,configurable:!0,get:function(){return a.current},set:function(t){a.current=t}}),Object.defineProperty(n.config,"getTextPluginSilent",{enumerable:!0,writable:!0,value:r}),Object.defineProperty(n.config,"autoAddKeyAttributes",{enumerable:!0,writable:!0,value:s}),Object.defineProperty(n.config,"getTextPluginMuteLanguages",{enumerable:!0,writable:!0,value:i}),t.component("translate",u),t.directive("translate",c),t.$translations=e.translations,t.prototype.$gettext=p.gettext.bind(p),t.prototype.$pgettext=p.pgettext.bind(p),t.prototype.$ngettext=p.ngettext.bind(p),t.prototype.$npgettext=p.npgettext.bind(p),t.prototype.$gettextInterpolate=h.bind(h)}}()},function(t){t.exports=JSON.parse("{}")},function(t,e,n){n.r(e);var a=n(0),r=n.n(a),s=n(1);e.default=function(t){Vue.use(r.a,{defaultLanguage:"en_US",translations:s,silent:!0}),Vue.config.language=t}}]);