//>>built
define("dojox/xml/widgetParser","dojo/_base/lang dojo/_base/window dojo/_base/sniff dojo/query dojo/parser dojox/xml/parser".split(" "),function(d,k,l,m,h,n){h=lang.getObject("dojox.xml",!0);xXml.widgetParser=new function(){this.parseNode=function(a){var b=[];d.query("script[type\x3d'text/xml']",a).forEach(function(a){b.push.apply(b,this._processScript(a))},this).orphan();return d.parser.instantiate(b)};this._processScript=function(a){var b=a.src?d._getText(a.src):a.innerHTML||a.firstChild.nodeValue,
b=this.toHTML(dojox.xml.parser.parse(b).firstChild),c=d.query("[dojoType]",b);m("\x3e",b).place(a,"before");a.parentNode.removeChild(a);return c};this.toHTML=function(a){var b,c=a.nodeName,e=k.doc,f=a.nodeType;if(3<=f)return e.createTextNode(3==f||4==f?a.nodeValue:"");var g=a.localName||c.split(":").pop(),c=a.namespaceURI||(a.getNamespaceUri?a.getNamespaceUri():"");"html"==c?b=e.createElement(g):(c=c+"."+g,b=b||e.createElement("dijit.form.ComboBox"==c?"select":"div"),b.setAttribute("dojoType",c));
d.forEach(a.attributes,function(a){var c=a.name||a.nodeName;a=a.value||a.nodeValue;0!=c.indexOf("xmlns")&&(l("ie")&&"style"==c?b.style.setAttribute("cssText",a):b.setAttribute(c,a))});d.forEach(a.childNodes,function(a){a=this.toHTML(a);"script"==g?b.text+=a.nodeValue:b.appendChild(a)},this);return b}};return h.widgetParser});