//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/cy",["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("cy",{months:"Ionawr Chwefror Mawrth Ebrill Mai Mehefin Gorffennaf Awst Medi Hydref Tachwedd Rhagfyr".split(" "),monthsShort:"Ion Chwe Maw Ebr Mai Meh Gor Aws Med Hyd Tach Rhag".split(" "),weekdays:"Dydd Sul;Dydd Llun;Dydd Mawrth;Dydd Mercher;Dydd Iau;Dydd Gwener;Dydd Sadwrn".split(";"),
weekdaysShort:"Sul Llun Maw Mer Iau Gwe Sad".split(" "),weekdaysMin:"Su Ll Ma Me Ia Gw Sa".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn \u00f4l",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",
d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(a){var b="",c=" af il ydd ydd ed ed ed fed fed fed eg fed eg eg fed eg eg fed eg fed".split(" ");20<a?b=40===a||50===a||60===a||80===a||100===a?"fed":"ain":0<a&&(b=c[a]);return a+b},week:{dow:1,doy:4}})});