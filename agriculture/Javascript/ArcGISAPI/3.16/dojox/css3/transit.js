//>>built
define("dojox/css3/transit",["dojo/_base/array","dojo/dom-style","dojo/promise/all","dojo/sniff","./transition"],function(n,f,k,l,e){return function(b,c,a){var m=a&&a.reverse?-1:1;if(!a||!a.transition||!e[a.transition]||l("ie")&&10>l("ie"))return b&&f.set(b,"display","none"),c&&f.set(c,"display",""),a.transitionDefs&&(a.transitionDefs[b.id]&&a.transitionDefs[b.id].resolve(b),a.transitionDefs[c.id]&&a.transitionDefs[c.id].resolve(c)),new k([]);var h=[],g=[],d=2E3;a.duration?d=a.duration:(d=250,"fade"===
a.transition?d=600:"flip"===a.transition&&(d=200));b&&(f.set(b,"display",""),b=e[a.transition](b,{"in":!1,direction:m,duration:d,deferred:a.transitionDefs&&a.transitionDefs[b.id]?a.transitionDefs[b.id]:null}),h.push(b.deferred),g.push(b));c&&(f.set(c,"display",""),c=e[a.transition](c,{direction:m,duration:d,deferred:a.transitionDefs&&a.transitionDefs[c.id]?a.transitionDefs[c.id]:null}),h.push(c.deferred),g.push(c));"flip"===a.transition?e.chainedPlay(g):e.groupedPlay(g);return k(h)}});