//>>built
define("dojox/app/controllers/BorderLayout","dojo/_base/declare dojo/dom-attr dojo/dom-style ./LayoutBase dijit/layout/BorderContainer dijit/layout/StackContainer dijit/layout/ContentPane dijit/registry".split(" "),function(k,l,g,m,n,p,h,d){return k("dojox.app.controllers.BorderLayout",m,{initLayout:function(a){this.app.log("in app/controllers/BorderLayout.initLayout event.view.name\x3d[",a.view.name,"] event.view.parent.name\x3d[",a.view.parent.name,"]");var b;this.borderLayoutCreated?b=d.byId(this.app.id+
"-BC"):(this.borderLayoutCreated=!0,b=new n({id:this.app.id+"-BC",style:"height:100%;width:100%;border:1px solid black"}),a.view.parent.domNode.appendChild(b.domNode),b.startup());this.app.log("in app/controllers/BorderLayout.initLayout event.view.constraint\x3d",a.view.constraint);var c=a.view.constraint;if(a.view.parent.id==this.app.id){var f=d.byId(a.view.parent.id+"-"+c);if(f){var e=d.byId(a.view.id+"-cp-"+c);e?e.domNode.appendChild(a.view.domNode):(e=new h({id:a.view.id+"-cp-"+c}),e.addChild(a.view),
f.addChild(e),b.addChild(f))}else f=new p({doLayout:!0,splitter:!this.app.borderLayoutNoSplitter,region:c,id:a.view.parent.id+"-"+c}),e=new h({id:a.view.id+"-cp-"+c}),e.addChild(a.view),f.addChild(e),b.addChild(f)}else a.view.parent.domNode.appendChild(a.view.domNode),l.set(a.view.domNode,"data-app-constraint",a.view.constraint);this.inherited(arguments)},hideView:function(a){var b=d.byId(this.app.id+"-BC");a=d.byId(a.parent.id+"-"+a.constraint);b&&a&&(a.removedFromBc=!0,b.removeChild(a))},showView:function(a){var b=
d.byId(a.parent.id+"-"+a.constraint),c=d.byId(a.id+"-cp-"+a.constraint);b&&c&&(b.removedFromBc&&(b.removedFromBc=!1,d.byId(this.app.id+"-BC").addChild(b),g.set(a.domNode,"display","")),g.set(c.domNode,"display",""),b.selectChild(c),b.resize())}})});