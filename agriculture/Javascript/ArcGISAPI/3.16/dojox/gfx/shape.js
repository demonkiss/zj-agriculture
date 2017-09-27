//>>built
define("dojox/gfx/shape","./_base dojo/_base/lang dojo/_base/declare dojo/_base/kernel dojo/_base/sniff dojo/on dojo/_base/array dojo/dom-construct dojo/_base/Color ./matrix".split(" "),function(b,h,g,p,k,m,l,n,q,f){var e=b.shape={};e.Shape=g("dojox.gfx.shape.Shape",null,{constructor:function(){this.parentMatrix=this.parent=this.bbox=this.strokeStyle=this.fillStyle=this.matrix=this.shape=this.rawNode=null;if(k("gfxRegistry")){var a=e.register(this);this.getUID=function(){return a}}},destroy:function(){k("gfxRegistry")&&
e.dispose(this);this.rawNode&&"__gfxObject__"in this.rawNode&&(this.rawNode.__gfxObject__=null);this.rawNode=null},getNode:function(){return this.rawNode},getShape:function(){return this.shape},getTransform:function(){return this.matrix},getFill:function(){return this.fillStyle},getStroke:function(){return this.strokeStyle},getParent:function(){return this.parent},getBoundingBox:function(){return this.bbox},getTransformedBoundingBox:function(){var a=this.getBoundingBox();if(!a)return null;var c=this._getRealMatrix();
return[f.multiplyPoint(c,a.x,a.y),f.multiplyPoint(c,a.x+a.width,a.y),f.multiplyPoint(c,a.x+a.width,a.y+a.height),f.multiplyPoint(c,a.x,a.y+a.height)]},getEventSource:function(){return this.rawNode},setClip:function(a){this.clip=a},getClip:function(){return this.clip},setShape:function(a){this.shape=b.makeParameters(this.shape,a);this.bbox=null;return this},setFill:function(a){if(!a)return this.fillStyle=null,this;var c=null;if("object"==typeof a&&"type"in a)switch(a.type){case "linear":c=b.makeParameters(b.defaultLinearGradient,
a);break;case "radial":c=b.makeParameters(b.defaultRadialGradient,a);break;case "pattern":c=b.makeParameters(b.defaultPattern,a)}else c=b.normalizeColor(a);this.fillStyle=c;return this},setStroke:function(a){if(!a)return this.strokeStyle=null,this;if("string"==typeof a||h.isArray(a)||a instanceof q)a={color:a};a=this.strokeStyle=b.makeParameters(b.defaultStroke,a);a.color=b.normalizeColor(a.color);return this},setTransform:function(a){this.matrix=f.clone(a?f.normalize(a):f.identity);return this._applyTransform()},
_applyTransform:function(){return this},moveToFront:function(){var a=this.getParent();a&&(a._moveChildToFront(this),this._moveToFront());return this},moveToBack:function(){var a=this.getParent();a&&(a._moveChildToBack(this),this._moveToBack());return this},_moveToFront:function(){},_moveToBack:function(){},applyRightTransform:function(a){return a?this.setTransform([this.matrix,a]):this},applyLeftTransform:function(a){return a?this.setTransform([a,this.matrix]):this},applyTransform:function(a){return a?
this.setTransform([this.matrix,a]):this},removeShape:function(a){this.parent&&this.parent.remove(this,a);return this},_setParent:function(a,c){this.parent=a;return this._updateParentMatrix(c)},_updateParentMatrix:function(a){this.parentMatrix=a?f.clone(a):null;return this._applyTransform()},_getRealMatrix:function(){for(var a=this.matrix,c=this.parent;c;)c.matrix&&(a=f.multiply(c.matrix,a)),c=c.parent;return a}});e._eventsProcessing={on:function(a,c){return m(this.getEventSource(),a,e.fixCallback(this,
b.fixTarget,c))},connect:function(a,c,d){"on"==a.substring(0,2)&&(a=a.substring(2));return this.on(a,d?h.hitch(c,d):c)},disconnect:function(a){return a.remove()}};e.fixCallback=function(a,c,d,b){b||(b=d,d=null);if(h.isString(b)){d=d||p.global;if(!d[b])throw['dojox.gfx.shape.fixCallback: scope["',b,'"] is null (scope\x3d"',d,'")'].join("");return function(e){return c(e,a)?d[b].apply(d,arguments||[]):void 0}}return!d?function(e){return c(e,a)?b.apply(d,arguments):void 0}:function(e){return c(e,a)?b.apply(d,
arguments||[]):void 0}};h.extend(e.Shape,e._eventsProcessing);e.Container={_init:function(){this.children=[];this._batch=0},openBatch:function(){return this},closeBatch:function(){return this},add:function(a){var c=a.getParent();c&&c.remove(a,!0);this.children.push(a);return a._setParent(this,this._getRealMatrix())},remove:function(a,c){for(var d=0;d<this.children.length;++d)if(this.children[d]==a){c||(a.parent=null,a.parentMatrix=null);this.children.splice(d,1);break}return this},clear:function(a){for(var c,
d=0;d<this.children.length;++d)c=this.children[d],c.parent=null,c.parentMatrix=null,a&&c.destroy();this.children=[];return this},getBoundingBox:function(){if(this.children){var a=null;l.forEach(this.children,function(c){var d=c.getBoundingBox();d&&((c=c.getTransform())&&(d=f.multiplyRectangle(c,d)),a?(a.x=Math.min(a.x,d.x),a.y=Math.min(a.y,d.y),a.endX=Math.max(a.endX,d.x+d.width),a.endY=Math.max(a.endY,d.y+d.height)):a={x:d.x,y:d.y,endX:d.x+d.width,endY:d.y+d.height})});a&&(a.width=a.endX-a.x,a.height=
a.endY-a.y);return a}return null},_moveChildToFront:function(a){for(var c=0;c<this.children.length;++c)if(this.children[c]==a){this.children.splice(c,1);this.children.push(a);break}return this},_moveChildToBack:function(a){for(var c=0;c<this.children.length;++c)if(this.children[c]==a){this.children.splice(c,1);this.children.unshift(a);break}return this}};e.Surface=g("dojox.gfx.shape.Surface",null,{constructor:function(){this._parent=this.rawNode=null;this._nodes=[];this._events=[]},destroy:function(){l.forEach(this._nodes,
n.destroy);this._nodes=[];l.forEach(this._events,function(a){a&&a.remove()});this._events=[];this.rawNode=null;if(k("ie"))for(;this._parent.lastChild;)n.destroy(this._parent.lastChild);else this._parent.innerHTML="";this._parent=null},getEventSource:function(){return this.rawNode},_getRealMatrix:function(){return null},isLoaded:!0,onLoad:function(a){},whenLoaded:function(a,c){var d=h.hitch(a,c);if(this.isLoaded)d(this);else m.once(this,"load",function(a){d(a)})}});h.extend(e.Surface,e._eventsProcessing);
e.Rect=g("dojox.gfx.shape.Rect",e.Shape,{constructor:function(a){this.shape=b.getDefault("Rect");this.rawNode=a},getBoundingBox:function(){return this.shape}});e.Ellipse=g("dojox.gfx.shape.Ellipse",e.Shape,{constructor:function(a){this.shape=b.getDefault("Ellipse");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.rx,y:a.cy-a.ry,width:2*a.rx,height:2*a.ry}}return this.bbox}});e.Circle=g("dojox.gfx.shape.Circle",e.Shape,{constructor:function(a){this.shape=
b.getDefault("Circle");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r}}return this.bbox}});e.Line=g("dojox.gfx.shape.Line",e.Shape,{constructor:function(a){this.shape=b.getDefault("Line");this.rawNode=a},getBoundingBox:function(){if(!this.bbox){var a=this.shape;this.bbox={x:Math.min(a.x1,a.x2),y:Math.min(a.y1,a.y2),width:Math.abs(a.x2-a.x1),height:Math.abs(a.y2-a.y1)}}return this.bbox}});e.Polyline=g("dojox.gfx.shape.Polyline",
e.Shape,{constructor:function(a){this.shape=b.getDefault("Polyline");this.rawNode=a},setShape:function(a,c){a&&a instanceof Array?(this.inherited(arguments,[{points:a}]),c&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.inherited(arguments,[a]);return this},_normalizePoints:function(){var a=this.shape.points,c=a&&a.length;if(c&&"number"==typeof a[0]){for(var d=[],b=0;b<c;b+=2)d.push({x:a[b],y:a[b+1]});this.shape.points=d}},getBoundingBox:function(){if(!this.bbox&&this.shape.points.length){for(var a=
this.shape.points,c=a.length,d=a[0],b=d.x,e=d.y,f=d.x,g=d.y,h=1;h<c;++h)d=a[h],b>d.x&&(b=d.x),f<d.x&&(f=d.x),e>d.y&&(e=d.y),g<d.y&&(g=d.y);this.bbox={x:b,y:e,width:f-b,height:g-e}}return this.bbox}});e.Image=g("dojox.gfx.shape.Image",e.Shape,{constructor:function(a){this.shape=b.getDefault("Image");this.rawNode=a},getBoundingBox:function(){return this.shape},setStroke:function(){return this},setFill:function(){return this}});e.Text=g(e.Shape,{constructor:function(a){this.fontStyle=null;this.shape=
b.getDefault("Text");this.rawNode=a},getFont:function(){return this.fontStyle},setFont:function(a){this.fontStyle="string"==typeof a?b.splitFontString(a):b.makeParameters(b.defaultFont,a);this._setFont();return this},getBoundingBox:function(){var a=null;this.getShape().text&&(a=b._base._computeTextBoundingBox(this));return a}});e.Creator={createShape:function(a){switch(a.type){case b.defaultPath.type:return this.createPath(a);case b.defaultRect.type:return this.createRect(a);case b.defaultCircle.type:return this.createCircle(a);
case b.defaultEllipse.type:return this.createEllipse(a);case b.defaultLine.type:return this.createLine(a);case b.defaultPolyline.type:return this.createPolyline(a);case b.defaultImage.type:return this.createImage(a);case b.defaultText.type:return this.createText(a);case b.defaultTextPath.type:return this.createTextPath(a)}return null},createGroup:function(){return this.createObject(b.Group)},createRect:function(a){return this.createObject(b.Rect,a)},createEllipse:function(a){return this.createObject(b.Ellipse,
a)},createCircle:function(a){return this.createObject(b.Circle,a)},createLine:function(a){return this.createObject(b.Line,a)},createPolyline:function(a){return this.createObject(b.Polyline,a)},createImage:function(a){return this.createObject(b.Image,a)},createText:function(a){return this.createObject(b.Text,a)},createPath:function(a){return this.createObject(b.Path,a)},createTextPath:function(a){return this.createObject(b.TextPath,{}).setText(a)},createObject:function(a,b){return null}};return e});