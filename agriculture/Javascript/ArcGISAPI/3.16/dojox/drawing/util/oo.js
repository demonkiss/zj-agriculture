//>>built
define("dojox/drawing/util/oo",[],function(){return{declare:function(){var b,c,e=0,a=arguments;2>a.length&&console.error("drawing.util.oo.declare; not enough arguments");2==a.length?(b=a[0],c=a[1]):(a=Array.prototype.slice.call(arguments),c=a.pop(),b=a.pop(),e=1);for(var d in c)b.prototype[d]=c[d];e&&(a.unshift(b),b=this.extend.apply(this,a));return b},extend:function(){var b=arguments,c=b[0];2>b.length&&console.error("drawing.util.oo.extend; not enough arguments");for(var e=function(){for(var a=
1;a<b.length;a++)b[a].prototype.constructor.apply(this,arguments);c.prototype.constructor.apply(this,arguments)},a=1;a<b.length;a++)for(var d in b[a].prototype)e.prototype[d]=b[a].prototype[d];for(d in c.prototype)e.prototype[d]=c.prototype[d];return e}}});