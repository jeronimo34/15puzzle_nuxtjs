(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,6],{223:function(e,t,o){var content=o(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("062124dd",content,!0,{sourceMap:!1})},224:function(e,t,o){"use strict";o.r(t);var r={props:["number","y","x"],methods:{movePiece:function(e,t){this.$store.commit("game/movePiece",{x:e,y:t})}}},n=(o(226),o(37)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return 16!==e.number?o("div",{staticClass:"cell",style:{top:64*e.y+"px",left:64*e.x+"px"},on:{click:function(t){return e.movePiece(e.x,e.y)}}},[o("span",[e._v(e._s(e.number))])]):o("div",{staticClass:"blank",style:{top:64*e.y+"px",left:64*e.x+"px"},on:{click:function(t){return e.movePiece(e.x,e.y)}}},[o("span",[e._v(e._s(e.number))])])}),[],!1,null,"c17249f8",null);t.default=component.exports},225:function(e,t,o){var content=o(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("6d523604",content,!0,{sourceMap:!1})},226:function(e,t,o){"use strict";o(223)},227:function(e,t,o){var r=o(66)(!1);r.push([e.i,".cell[data-v-c17249f8]{height:64px;width:64px;border:1px ridge #fff;position:absolute;background:#add8e6;cursor:pointer;color:#666}.cell[data-v-c17249f8]:hover{opacity:.3;color:#fff}.blank[data-v-c17249f8]{height:64px;width:64px;border:1px ridge #fff;background:#ffffe0;cursor:default;color:#666}.blank[data-v-c17249f8],span[data-v-c17249f8]{position:absolute}span[data-v-c17249f8]{top:50%;left:50%;transform:translate(-50%,-50%)}",""]),e.exports=r},228:function(e,t,o){"use strict";o.r(t);var r={computed:{pieces:function(){return this.$store.state.game.pieces}},components:{Piece:o(224).default}},n=(o(229),o(37)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"gameboard"},e._l(e.pieces,(function(e){return o("piece",{key:e.pos,attrs:{number:e.number,y:Math.floor(e.pos/4),x:Math.floor(e.pos%4)}})})),1)}),[],!1,null,"91ac64e8",null);t.default=component.exports;installComponents(component,{Piece:o(224).default})},229:function(e,t,o){"use strict";o(225)},230:function(e,t,o){var r=o(66)(!1);r.push([e.i,".gameboard[data-v-91ac64e8]{position:relative;width:256px;height:256px;margin:auto}",""]),e.exports=r},231:function(e,t,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("7f03308e",content,!0,{sourceMap:!1})},232:function(e,t,o){"use strict";o(231)},233:function(e,t,o){var r=o(66)(!1);r.push([e.i,".clearArea[data-v-12943e94]{text-align:center}.clearArea button[data-v-12943e94],.clearArea p[data-v-12943e94]{margin:10px}",""]),e.exports=r},234:function(e,t,o){"use strict";o.r(t);var r={components:{GameBoard:o(228).default},methods:{resetGame:function(){this.$store.commit("game/resetGame")}}},n=(o(232),o(37)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("game-board"),o("div",{staticClass:"clearArea"},[e.$store.state.game.isClear?o("p",[e._v("クリア！")]):e._e(),e.$store.state.game.isClear?o("button",{on:{click:function(t){return e.resetGame()}}},[e._v("リトライ")]):e._e()])],1)}),[],!1,null,"12943e94",null);t.default=component.exports;installComponents(component,{GameBoard:o(228).default})}}]);