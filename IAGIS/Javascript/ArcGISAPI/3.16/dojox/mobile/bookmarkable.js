//>>built
define("dojox/mobile/bookmarkable","dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/hash dijit/registry ./TransitionEvent ./View ./viewRegistry".split(" "),function(e,m,n,p,q,k,r,s,f){var c={settingHash:!1,transitionInfo:[],getTransitionInfo:function(a,b){return this.transitionInfo[a.replace(/^#/,"")+":"+b.replace(/^#/,"")]},addTransitionInfo:function(a,b,c){this.transitionInfo[a.replace(/^#/,"")+":"+b.replace(/^#/,"")]=c},findTransitionViews:function(a){if(!a)return[];
a=k.byId(a.replace(/^#/,""));if(!a)return[];for(var b=a.getParent();b;b=b.getParent())b.isVisible&&!b.isVisible()&&(a=b);return[a.getShowingView(),a]},onHashChange:function(a){this.settingHash?this.settingHash=!1:(a=this.handleFragIds(a),a.hashchange=!0,(new r(p.body(),a)).dispatch())},handleFragIds:function(a){var b,c;if(a){a=a.replace(/^#/,"").split(/,/);for(var d=0;d<a.length;d++){var g=k.byId(a[d]);if(!g.isVisible()){for(var l=!0,h=f.getParentView(g);h;h=f.getParentView(h))if(-1===e.indexOf(a,
h.id)){l=!1;break}l?(b=this.findTransitionViews(a[d]),2===b.length&&(c=a[d])):e.forEach(g.getSiblingViews(),function(a){a.domNode.style.display=a===g?"":"none"})}}}else c=f.initialView.id,b=this.findTransitionViews(c);a=this.getTransitionInfo(b[0].id,b[1].id);d=1;a||(a=this.getTransitionInfo(b[1].id,b[0].id),d=-1);return{moveTo:"#"+c,transitionDir:a?a.transitionDir*d:1,transition:a?a.transition:"none"}},setFragIds:function(a){a=e.filter(f.getViews(),function(a){return a.isVisible()});this.settingHash=
!0;q(e.map(a,function(a){return a.id}).join(","))}};m.subscribe("/dojo/hashchange",null,function(){c.onHashChange.apply(c,arguments)});n.extend(s,{getTransitionInfo:function(){c.getTransitionInfo.apply(c,arguments)},addTransitionInfo:function(){c.addTransitionInfo.apply(c,arguments)},handleFragIds:function(){c.handleFragIds.apply(c,arguments)},setFragIds:function(){c.setFragIds.apply(c,arguments)}});return c});