(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(n,e,t){var content=t(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("56b15182",content,!0,{sourceMap:!1})},167:function(n,e,t){"use strict";t(217);var r=t(37),component=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("15パズル")]),n._v(" "),t("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},168:function(n,e,t){t(169),n.exports=t(170)},217:function(n,e,t){"use strict";t(160)},218:function(n,e,t){var r=t(66)(!1);r.push([n.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:28px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}body,html{margin:0;height:100%;overflow:hidden}h1{text-align:center;margin-top:10px;margin-bottom:30px}',""]),n.exports=r},219:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return r})),t.d(e,"mutations",(function(){return o}));var r=function(){return{counter:0}},o={increment:function(n){n.counter++}}},220:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return o})),t.d(e,"mutations",(function(){return c}));t(221);var r={pieces:[{pos:0,number:2},{pos:1,number:9},{pos:2,number:3},{pos:3,number:4},{pos:4,number:7},{pos:5,number:10},{pos:6,number:6},{pos:7,number:8},{pos:8,number:13},{pos:9,number:1},{pos:10,number:16},{pos:11,number:15},{pos:12,number:14},{pos:13,number:5},{pos:14,number:12},{pos:15,number:11}],isClear:!1},o=function(){return JSON.parse(JSON.stringify(r))};var c={resetGame:function(n){!function(n){Object.assign(n,JSON.parse(JSON.stringify(r)))}(n)},movePiece:function(n,e){var t=e.x,r=e.y;if(!n.isClear){for(var o=4*r+t,c=n.pieces.find((function(n){return n.pos===o})),f=[1,0,-1,0],m=[0,1,0,-1],l=function(i){var e=t+f[i],o=r+m[i];if(e<0||4<=e)return"continue";if(o<0||4<=o)return"continue";var l=4*o+e,d=n.pieces.find((function(n){return n.pos===l&&16===n.number}));if(void 0===d)return"continue";var v=c.number;return c.number=d.number,d.number=v,"break"},i=0;i<4;++i){var d=l(i);if("continue"!==d&&"break"===d)break}n.isClear=n.pieces.every((function(n){return n.pos===n.number-1}))}}}},222:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return r})),t.d(e,"mutations",(function(){return o}));t(157);var r=function(){return{list:[]}},o={add:function(n,text){n.list.push({text:text,done:!1})},remove:function(n,e){var t=e.todo;n.list.splice(n.list.indexOf(t),1)},toggle:function(n,e){e.done=!e.done}}}},[[168,8,1,9]]]);