//>>built
define("dojox/wire/ml/util",["dijit","dojo","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(l,f,g){f.provide("dojox.wire.ml.util");f.require("dojox.xml.parser");f.require("dojox.wire.Wire");g.wire.ml._getValue=function(a,b){if(a){var d=void 0;if(b&&9<=a.length&&"arguments"==a.substring(0,9))return d=a.substring(9),(new g.wire.Wire({property:d})).getValue(b);var c=a.indexOf(".");0<=c&&(d=a.substring(c+1),a=a.substring(0,c));c=l.byId(a)||f.byId(a)||f.getObject(a);return!c?void 0:d?
(new g.wire.Wire({object:c,property:d})).getValue():c}};g.wire.ml._setValue=function(a,b){if(a){var d=a.indexOf(".");if(!(0>d)){var c=this._getValue(a.substring(0,d));c&&(d=a.substring(d+1),(new g.wire.Wire({object:c,property:d})).setValue(b))}}};f.declare("dojox.wire.ml.XmlElement",null,{constructor:function(a){f.isString(a)&&(a=this._getDocument().createElement(a));this.element=a},getPropertyValue:function(a){var b=void 0;if(!this.element||!a)return b;if("@"==a.charAt(0))b=a.substring(1),b=this.element.getAttribute(b);
else if("text()"==a){if(a=this.element.firstChild)b=a.nodeValue}else{for(var d=[],c=0;c<this.element.childNodes.length;c++){var e=this.element.childNodes[c];1===e.nodeType&&e.nodeName==a&&d.push(new g.wire.ml.XmlElement(e))}0<d.length&&(b=1===d.length?d[0]:d)}return b},setPropertyValue:function(a,b){var d;if(this.element&&a)if("@"==a.charAt(0)){var c=a.substring(1);b?this.element.setAttribute(c,b):this.element.removeAttribute(c)}else if("text()"==a){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);
b&&(d=this._getDocument().createTextNode(b),this.element.appendChild(d))}else{var c=null,e;for(d=this.element.childNodes.length-1;0<=d;d--)e=this.element.childNodes[d],1===e.nodeType&&e.nodeName==a&&(c||(c=e.nextSibling),this.element.removeChild(e));if(b)if(f.isArray(b))for(d in b)e=b[d],e.element&&this.element.insertBefore(e.element,c);else b instanceof g.wire.ml.XmlElement?b.element&&this.element.insertBefore(b.element,c):(e=this._getDocument().createElement(a),d=this._getDocument().createTextNode(b),
e.appendChild(d),this.element.insertBefore(e,c))}},toString:function(){var a="";if(this.element){var b=this.element.firstChild;b&&(a=b.nodeValue)}return a},toObject:function(){if(!this.element)return null;var a="",b={},d=0,c;for(c=0;c<this.element.childNodes.length;c++){var e=this.element.childNodes[c];if(1===e.nodeType){d++;var h=(new g.wire.ml.XmlElement(e)).toObject(),e=e.nodeName,k=b[e];k?f.isArray(k)?k.push(h):b[e]=[k,h]:b[e]=h}else if(3===e.nodeType||4===e.nodeType)a+=e.nodeValue}h=0;if(1===
this.element.nodeType){h=this.element.attributes.length;for(c=0;c<h;c++)e=this.element.attributes[c],b["@"+e.nodeName]=e.nodeValue}if(0===d){if(0===h)return a;b["text()"]=a}return b},_getDocument:function(){return this.element?9==this.element.nodeType?this.element:this.element.ownerDocument:g.xml.parser.parse()}})});