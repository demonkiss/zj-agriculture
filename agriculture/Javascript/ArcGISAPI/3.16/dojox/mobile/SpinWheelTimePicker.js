//>>built
define("dojox/mobile/SpinWheelTimePicker",["dojo/_base/declare","dojo/dom-class","./_TimePickerMixin","./SpinWheel","./SpinWheelSlot"],function(b,c,d,e,a){return b("dojox.mobile.SpinWheelTimePicker",[e,d],{slotClasses:[a,a],slotProps:[{labelFrom:0,labelTo:23,style:{width:"50px",textAlign:"right"}},{labelFrom:0,labelTo:59,zeroPad:2,style:{width:"40px",textAlign:"right"}}],buildRendering:function(){this.inherited(arguments);c.add(this.domNode,"mblSpinWheelTimePicker")}})});