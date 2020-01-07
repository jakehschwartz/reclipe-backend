(function(){'use strict';
'use strict';var e="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},l="object"===typeof e.global&&e.global?e.global:"object"===typeof global&&global&&global.Object===Object?global:this;e.global=l;e.exportsNamespace="object"===typeof e.exportsNamespace&&e.exportsNamespace?e.exportsNamespace:l;l.Object.freeze(e);var m={envInfo:e,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.31",globalThis:this};l.Object.freeze(m);
l.Object.freeze(m.semantics);var p=l.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},r=l.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},t=0,u=l.WeakMap?new l.WeakMap:null;function v(a){return function(b,c){return!(!b||!b.$classData||b.$classData.k!==c||b.$classData.i!==a)}}
function aa(a){for(var b in a)return b}function w(a,b,c){var d=new a.A(b[c]);if(c<b.length-1){a=a.l;c+=1;for(var h=d.y,g=0;g<h.length;g++)h[g]=w(a,b,c)}return d}function ba(a){switch(typeof a){case "string":return x(y);case "number":var b=a|0;return b===a?z(b)?x(A):B(b)?x(C):x(D):"number"===typeof a?x(E):x(G);case "boolean":return x(H);case "undefined":return x(I);default:return null===a?a.S():a instanceof J?x(K):a&&a.$classData?x(a.$classData):null}}
function L(a){switch(typeof a){case "string":ca||(ca=(new M).f());for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+p(65535&(a.charCodeAt(d)|0),c)|0,c=p(31,c),d=-1+d|0;return b;case "number":N||(N=(new O).f());b=N;c=a|0;if(c===a&&-Infinity!==1/a)b=c;else{if(b.e)b.B[0]=a,b=P(b.r[b.D]|0,b.r[b.C]|0);else{if(a!==a)b=!1,a=2047,c=+l.Math.pow(2,51);else if(Infinity===a||-Infinity===a)b=0>a,a=2047,c=0;else if(0===a)b=-Infinity===1/a,c=a=0;else if(d=(b=0>a)?-a:a,d>=+l.Math.pow(2,-1022)){a=+l.Math.pow(2,52);c=
+l.Math.log(d)/.6931471805599453;c=+l.Math.floor(c)|0;c=1023>c?c:1023;var h=+l.Math.pow(2,c);h>d&&(c=-1+c|0,h/=2);h=d/h*a;d=+l.Math.floor(h);h-=d;d=.5>h?d:.5<h?1+d:0!==d%2?1+d:d;2<=d/a&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=a);a=c;c=d}else a=d/+l.Math.pow(2,-1074),c=+l.Math.floor(a),d=a-c,a=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c;c=+c;b=P(c|0,(b?-2147483648:0)|(a|0)<<20|c/4294967296|0)}b=b.s^b.q}return b;case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||
null===a?a.w():null===u?42:da(a)}}var da=null!==u?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return L(a);default:if(null===a)return 0;var b=u.get(a);void 0===b&&(t=b=t+1|0,u.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(l.Object.isSealed(a))return 42;t=b=t+1|0;return a.$idHashCode$0=b}return null===a?0:L(a)};function z(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function B(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function Q(){this.t=this.A=void 0;this.i=this.l=this.h=null;this.k=0;this.z=null;this.p="";this.b=this.n=this.o=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function R(a,b,c){var d=new Q;d.h={};d.l=null;d.z=a;d.p=b;d.b=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function S(a,b,c,d,h,g,k){var f=new Q,n=aa(a);g=g||function(q){return!!(q&&q.$classData&&q.$classData.h[n])};k=k||function(q,F){return!!(q&&q.$classData&&q.$classData.k===F&&q.$classData.i.h[n])};f.t=h;f.h=c;f.p="L"+b+";";f.b=k;f.name=b;f.isInterface=!1;f.isRawJSType=!!d;f.isInstance=g;return f}
function ea(a){function b(f){if("number"===typeof f){this.y=Array(f);for(var n=0;n<f;n++)this.y[n]=h}else this.y=f}var c=new Q,d=a.z,h="longZero"==d?T().u:d;b.prototype=new U;b.prototype.constructor=b;b.prototype.$classData=c;d="["+a.p;var g=a.i||a,k=a.k+1;c.A=b;c.t=fa;c.h={a:1,U:1,c:1};c.l=a;c.i=g;c.k=k;c.z=null;c.p=d;c.o=void 0;c.n=void 0;c.b=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(f){return g.b(f,k)};return c}
function x(a){if(!a.o){var b=new V;b.m=a;a.o=b}return a.o}Q.prototype.getFakeInstance=function(){if(this===y)return"some string";if(this===H)return!1;if(this===A||this===C||this===D||this===E||this===G)return 0;if(this===K)return T().u;if(this!==I)return{$classData:this}};Q.prototype.getSuperclass=function(){return this.t?x(this.t):null};Q.prototype.getComponentType=function(){return this.l?x(this.l):null};
Q.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.n||(b.n=ea(b)),b=b.n;return w(b,a,0)};var ha=R(!1,"Z","boolean"),ia=R(0,"C","char"),ja=R(0,"B","byte"),ka=R(0,"S","short"),la=R(0,"I","int"),ma=R("longZero","J","long"),na=R(0,"F","float"),oa=R(0,"D","double");ha.b=v(ha);ia.b=v(ia);ja.b=v(ja);ka.b=v(ka);la.b=v(la);ma.b=v(ma);na.b=v(na);oa.b=v(oa);function W(){}function U(){}U.prototype=W.prototype;W.prototype.f=function(){return this};W.prototype.x=function(){var a=ba(this).m.name,b=(+(this.w()>>>0)).toString(16);return a+"@"+b};W.prototype.w=function(){return da(this)};W.prototype.toString=function(){return this.x()};var fa=S({a:0},"java.lang.Object",{a:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.$classData){var c=a.k||0;return!(c<b)&&(c>b||!a.i.isPrimitive)}return!1});W.prototype.$classData=fa;
function V(){this.m=null}V.prototype=new U;V.prototype.constructor=V;V.prototype.x=function(){return(this.m.isInterface?"interface ":this.m.isPrimitive?"":"class ")+this.m.name};V.prototype.$classData=S({H:0},"java.lang.Class",{H:1,a:1});function O(){this.e=!1;this.B=this.r=this.j=null;this.v=!1;this.D=this.C=0}O.prototype=new U;O.prototype.constructor=O;
O.prototype.f=function(){N=this;this.j=(this.e=!!(l.ArrayBuffer&&l.Int32Array&&l.Float32Array&&l.Float64Array))?new l.ArrayBuffer(8):null;this.r=this.e?new l.Int32Array(this.j,0,2):null;this.e&&new l.Float32Array(this.j,0,2);this.B=this.e?new l.Float64Array(this.j,0,1):null;if(this.e)this.r[0]=16909060,a=1===((new l.Int8Array(this.j,0,8))[0]|0);else var a=!0;this.C=(this.v=a)?0:1;this.D=this.v?1:0;return this};O.prototype.$classData=S({N:0},"scala.scalajs.runtime.Bits$",{N:1,a:1});var N=void 0;
function M(){}M.prototype=new U;M.prototype.constructor=M;M.prototype.f=function(){return this};M.prototype.$classData=S({Q:0},"scala.scalajs.runtime.RuntimeString$",{Q:1,a:1});var ca=void 0;function X(){}X.prototype=new U;X.prototype.constructor=X;function pa(){}pa.prototype=X.prototype;var I=S({R:0},"scala.runtime.BoxedUnit",{R:1,a:1,c:1},void 0,void 0,function(a){return void 0===a}),H=S({F:0},"java.lang.Boolean",{F:1,a:1,c:1,d:1},void 0,void 0,function(a){return"boolean"===typeof a});
function Y(){this.u=null}Y.prototype=new U;Y.prototype.constructor=Y;Y.prototype.f=function(){Z=this;this.u=P(0,0);return this};
function qa(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+r(1E9)|0)-(0!==b?r(b):32+r(a)|0)|0,d=c,h=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var g=a,k=b;for(a=b=0;0<=c&&0!==(-2097152&k);){var f=g,n=k,q=h,F=d;if(n===F?(-2147483648^f)>=(-2147483648^q):(-2147483648^n)>=(-2147483648^F))f=k,n=d,k=g-h|0,f=(-2147483648^k)>(-2147483648^g)?-1+(f-n|0)|0:f-n|0,g=k,k=f,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;f=d>>>1|0;h=h>>>1|0|d<<31;d=f}c=k;if(0===c?-1147483648<=(-2147483648^
g):-2147483648<=(-2147483648^c))c=4294967296*k+ +(g>>>0),g=c/1E9,h=g/4294967296|0,d=b,b=g=d+(g|0)|0,a=(-2147483648^g)<(-2147483648^d)?1+(a+h|0)|0:a+h|0,g=c%1E9|0;c=""+g;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}Y.prototype.$classData=S({P:0},"scala.scalajs.runtime.RuntimeLong$",{P:1,a:1,V:1,c:1});var Z=void 0;function T(){Z||(Z=(new Y).f());return Z}
var y=S({E:0},"java.lang.String",{E:1,a:1,c:1,T:1,d:1},void 0,void 0,function(a){return"string"===typeof a}),A=S({G:0},"java.lang.Byte",{G:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return z(a)}),G=S({I:0},"java.lang.Double",{I:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return"number"===typeof a}),E=S({J:0},"java.lang.Float",{J:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return"number"===typeof a}),D=S({K:0},"java.lang.Integer",{K:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return"number"===
typeof a&&(a|0)===a&&1/a!==1/-0}),K=S({L:0},"java.lang.Long",{L:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return a instanceof J}),C=S({M:0},"java.lang.Short",{M:1,g:1,a:1,c:1,d:1},void 0,void 0,function(a){return B(a)});function J(){this.q=this.s=0}J.prototype=new pa;J.prototype.constructor=J;J.prototype.x=function(){T();var a=this.s,b=this.q;return b===a>>31?""+a:0>b?"-"+qa(-a|0,0!==a?~b:-b|0):qa(a,b)};function P(a,b){var c=new J;c.s=a;c.q=b;return c}J.prototype.w=function(){return this.s^this.q};
J.prototype.$classData=S({O:0},"scala.scalajs.runtime.RuntimeLong",{O:1,g:1,a:1,c:1,d:1});
}).call(this);
//# sourceMappingURL=reclipe-opt.js.map
