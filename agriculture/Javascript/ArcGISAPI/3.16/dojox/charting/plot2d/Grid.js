//>>built
define("dojox/charting/plot2d/Grid","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/sniff ./CartesianBase ./common dojox/lang/utils dojox/gfx/fx".split(" "),function(l,r,n,h,s,t,p,u){var q=function(a,d){return a.value-d.value};return r("dojox.charting.plot2d.Grid",s,{defaultParams:{hMajorLines:!0,hMinorLines:!1,vMajorLines:!0,vMinorLines:!1,hStripes:!1,vStripes:!1,animate:null,enableCache:!1,renderOnAxis:!0},optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},
vFill:{},hAlternateFill:{},vAlternateFill:{}},constructor:function(a,d){this.opt=l.clone(this.defaultParams);p.updateWithObject(this.opt,d);p.updateWithPattern(this.opt,d,this.optionalParams);this.animate=this.opt.animate;this.opt.enableCache&&(this._lineFreePool=[],this._lineUsePool=[],this._rectFreePool=[],this._rectUsePool=[])},addSeries:function(a){return this},getSeriesStats:function(){return l.delegate(t.defaultStats)},cleanGroup:function(){this.inherited(arguments);this.opt.enableCache&&(this._lineFreePool=
this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._rectFreePool=this._rectFreePool.concat(this._rectUsePool),this._rectUsePool=[])},createLine:function(a,d){var c;this.opt.enableCache&&0<this._lineFreePool.length?(c=this._lineFreePool.pop(),c.setShape(d),a.add(c)):c=a.createLine(d);this.opt.enableCache&&this._lineUsePool.push(c);return c},createRect:function(a,d){var c;this.opt.enableCache&&0<this._rectFreePool.length?(c=this._rectFreePool.pop(),c.setShape(d),a.add(c)):c=a.createRect(d);
this.opt.enableCache&&this._rectUsePool.push(c);return c},render:function(a,d){if(this.zoom)return this.performZoom(a,d);this.dirty=this.isDirty();if(!this.dirty)return this;this.cleanGroup();var c=this.getGroup(),b=this.chart.theme,e;if(h("ios")&&6>h("ios")||h("android")||h("safari")&&!h("ios")){e=Math.max(0,a.width-d.l-d.r);var f=Math.max(0,a.height-d.t-d.b);c.createRect({x:d.l,y:d.t,width:e,height:f})}if(this._vAxis&&(e=this._vAxis.getTicks(),f=this._vAxis.getScaler(),null!=e&&null!=f)){var g=
f.scaler.getTransformerFromModel(f);this.opt.hStripes&&this._renderHRect(e,b.grid,a,d,f,g);this.opt.hMinorLines&&(c=this.opt.minorHLine||b.grid&&b.grid.minorLine||b.axis.minorTick,this._renderHLines(e.minor,c,a,d,f,g));this.opt.hMajorLines&&(c=this.opt.majorHLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderHLines(e.major,c,a,d,f,g))}this._hAxis&&(e=this._hAxis.getTicks(),f=this._hAxis.getScaler(),null!=e&&null!=f&&(g=f.scaler.getTransformerFromModel(f),this.opt.vStripes&&this._renderVRect(e,
b.grid,a,d,f,g),e&&this.opt.vMinorLines&&(c=this.opt.minorVLine||b.grid&&b.grid.minorLine||b.axis.minorTick,this._renderVLines(e.minor,c,a,d,f,g)),e&&this.opt.vMajorLines&&(c=this.opt.majorVLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderVLines(e.major,c,a,d,f,g))));this.dirty=!1;return this},_renderHLines:function(a,d,c,b,e,f){var g=this.getGroup();n.forEach(a,function(a){if(this.opt.renderOnAxis||a.value!=(this._vAxis.opt.leftBottom?e.bounds.from:e.bounds.to))a=c.height-b.b-f(a.value),
a=this.createLine(g,{x1:b.l,y1:a,x2:c.width-b.r,y2:a}).setStroke(d),this.animate&&this._animateGrid(a,"h",b.l,b.r+b.l-c.width)},this)},_renderVLines:function(a,d,c,b,e,f){var g=this.getGroup();n.forEach(a,function(a){if(this.opt.renderOnAxis||a.value!=(this._hAxis.opt.leftBottom?e.bounds.from:e.bounds.to))a=b.l+f(a.value),a=this.createLine(g,{x1:a,y1:b.t,x2:a,y2:c.height-b.b}).setStroke(d),this.animate&&this._animateGrid(a,"v",c.height-b.b,c.height-b.b-b.t)},this)},_renderHRect:function(a,d,c,b,e,
f){var g,m,h;a=a.major.concat(a.minor);a.sort(q);a[0].value>e.bounds.from&&a.splice(0,0,{value:e.bounds.from});a[a.length-1].value<e.bounds.to&&a.push({value:e.bounds.to});e=this.getGroup();for(var k=0;k<a.length-1;k++)if(g=a[k],m=c.height-b.b-f(g.value),h=c.height-b.b-f(a[k+1].value),g=0==k%2?this.opt.hAlternateFill||d&&d.alternateFill:this.opt.hFill||d&&d.fill)g=this.createRect(e,{x:b.l,y:m,width:c.width-b.r,height:m-h}).setFill(g),this.animate&&this._animateGrid(g,"h",b.l,b.r+b.l-c.width)},_renderVRect:function(a,
d,c,b,e,f){var g,h,l;a=a.major.concat(a.minor);a.sort(q);a[0].value>e.bounds.from&&a.splice(0,0,{value:e.bounds.from});a[a.length-1].value<e.bounds.to&&a.push({value:e.bounds.to});e=this.getGroup();for(var k=0;k<a.length-1;k++)if(g=a[k],h=b.l+f(g.value),l=b.l+f(a[k+1].value),g=0==k%2?this.opt.vAlternateFill||d&&d.alternateFill:this.opt.vFill||d&&d.fill)g=this.createRect(e,{x:h,y:b.t,width:l-h,height:c.width-b.r}).setFill(g),this.animate&&this._animateGrid(g,"v",c.height-b.b,c.height-b.b-b.t)},_animateGrid:function(a,
d,c,b){u.animateTransform(l.delegate({shape:a,duration:1200,transform:[{name:"translate",start:"h"==d?[c,0]:[0,c],end:[0,0]},{name:"scale",start:"h"==d?[1/b,1]:[1,1/b],end:[1,1]},{name:"original"}]},this.animate)).play()}})});