//>>built
define("dojox/editor/plugins/TextColor","dojo dijit dojox dijit/_base/popup dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_editor/_Plugin dijit/TooltipDialog dijit/form/Button dijit/form/DropDownButton dojox/widget/ColorPicker dojo/_base/connect dojo/_base/declare dojo/i18n dojo/i18n!dojox/editor/plugins/nls/TextColor".split(" "),function(c,d,m,n,g,h,k,l){c.experimental("dojox.editor.plugins.TextColor");var f=c.declare("dojox.editor.plugins._TextColorDropDown",[g,h,k],{templateString:"\x3cdiv style\x3d'display: none; position: absolute; top: -10000; z-index: -10000'\x3e\x3cdiv dojoType\x3d'dijit.TooltipDialog' dojoAttachPoint\x3d'dialog' class\x3d'dojoxEditorColorPicker'\x3e\x3cdiv dojoType\x3d'dojox.widget.ColorPicker' dojoAttachPoint\x3d'_colorPicker'\x3e\x3c/div\x3e\x3cbr\x3e\x3ccenter\x3e\x3cbutton dojoType\x3d'dijit.form.Button' type\x3d'button' dojoAttachPoint\x3d'_setButton'\x3e${setButtonText}\x3c/button\x3e\x26nbsp;\x3cbutton dojoType\x3d'dijit.form.Button' type\x3d'button' dojoAttachPoint\x3d'_cancelButton'\x3e${cancelButtonText}\x3c/button\x3e\x3c/center\x3e\x3c/div\x3e\x3c/div\x3e",
widgetsInTemplate:!0,constructor:function(){var b=c.i18n.getLocalization("dojox.editor.plugins","TextColor");c.mixin(this,b)},startup:function(){this._started||(this.inherited(arguments),this.connect(this._setButton,"onClick",c.hitch(this,function(){this.onChange(this.get("value"))})),this.connect(this._cancelButton,"onClick",c.hitch(this,function(){d.popup.close(this.dialog);this.onCancel()})),c.style(this.domNode,"display","block"))},_setValueAttr:function(b,c){this._colorPicker.set("value",b,c)},
_getValueAttr:function(){return this._colorPicker.get("value")},onChange:function(b){},onCancel:function(){}}),e=c.declare("dojox.editor.plugins.TextColor",l,{buttonClass:d.form.DropDownButton,useDefaultCommand:!1,constructor:function(){this._picker=new f;c.body().appendChild(this._picker.domNode);this._picker.startup();this.dropDown=this._picker.dialog;this.connect(this._picker,"onChange",function(b){this.editor.execCommand(this.command,b)});this.connect(this._picker,"onCancel",function(){this.editor.focus()})},
updateState:function(){var b=this.editor,d=this.command;if(b&&b.isLoaded&&d.length){var e=this.get("disabled"),a;if(this.button){this.button.set("disabled",e);if(e)return;try{a=b.queryCommandValue(d)||""}catch(f){a=""}}""==a&&(a="#000000");"transparent"==a&&(a="#ffffff");"string"==typeof a?-1<a.indexOf("rgb")&&(a=c.colorFromRgb(a).toHex()):(a=((a&255)<<16|a&65280|(a&16711680)>>>16).toString(16),a="#000000".slice(0,7-a.length)+a);a!==this._picker.get("value")&&this._picker.set("value",a,!1)}},destroy:function(){this.inherited(arguments);
this._picker.destroyRecursive();delete this._picker}});e._TextColorDropDown=f;c.subscribe(d._scopeName+".Editor.getPlugin",null,function(b){if(!b.plugin)switch(b.args.name){case "foreColor":case "hiliteColor":b.plugin=new e({command:b.args.name})}});return e});