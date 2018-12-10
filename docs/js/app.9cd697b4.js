(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5b76d0ae"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"dd268d84"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,delete r[t],d.parentNode.removeChild(d),a(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){r[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=s);var l,u=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(t),l=function(e){p.onerror=p.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:p})},12e4);p.onerror=p.onload=l,u.appendChild(p)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/battle-cards/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"40c7":function(t,e,a){"use strict";var n=a("97f3"),r=a.n(n);r.a},"52e0":function(t,e,a){},"568f":function(t,e,a){"use strict";var n=a("ff7b"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},o=[],s=(a("034f"),a("2877")),i={},c=Object(s["a"])(i,r,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"home row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"m-5"},[t._v("The Arena")]),a("button",{on:{click:t.startGame}},[t._v("Start The Battle")])]),t._m(0)])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"col-12"})])}],m={name:"home",components:{},methods:{startGame(){this.$store.dispatch("startGame",this.newGame)}}},f=m,h=(a("cccb"),Object(s["a"])(f,p,d,!1,null,null,null));h.options.__file="Home.vue";var v=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid gamePage"},[a("opponent"),a("br"),a("br"),0==t.opponent.hand?a("div",[a("h3",{staticClass:"text text-success"},[t._v("You have won your freedom")])]):t._e(),a("br"),a("h3",{staticClass:"text"},[t._v("Are you not entertained?")]),a("button",{staticClass:"btn-danger",on:{click:function(e){t.fight()}}},[t._v("Dual")]),a("br"),0==t.player.hand&&0==t.opponent.hand?a("div",[a("h3",{staticClass:"text text-danger"},[t._v("No one earns their freedom")])]):t._e(),a("br"),0==t.player.hand?a("div",[a("h3",{staticClass:"text text-danger"},[t._v("Your have lost the battle")])]):t._e(),a("br"),a("player")],1)},_=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"opponent row"},[a("div",{staticClass:"col-12"},[a("h3",{staticClass:"text"},[t._v(t._s(t.opponent.name))]),a("p",{staticClass:"text"},[t._v("Reserve: "+t._s(t.opponent.remainingCards))]),a("opponentHand")],1)])},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opponentHand"},t._l(t.opponentHand,function(e){return n("div",{staticClass:"opponentCard col-2"},[n("div",{staticClass:"card",on:{click:function(a){t.setOpponentCard(e.id)}}},[e.visible?n("div",[n("h5",[t._v(t._s(e.name))]),n("img",{staticStyle:{height:"100px"},attrs:{src:e.img}}),n("p",[t._v("Attack: "+t._s(e.attack))]),n("p",[t._v("Shield: "+t._s(e.defense))]),n("p",[t._v("Health: "+t._s(e.health))])]):n("img",{attrs:{src:a("dd84")}})])])}))},x=[],$={name:"",data(){return{}},computed:{opponentHand(){return this.$store.state.game.opponent.hand}},methods:{setOpponentCard(t){this.$store.dispatch("setOpponentCard",t)}}},w=$,O=(a("c5eb"),Object(s["a"])(w,C,x,!1,null,null,null));O.options.__file="opponentHand.vue";var j=O.exports,k={name:"",data(){return{}},computed:{opponent(){return this.$store.state.game.opponent}},methods:{},components:{opponentHand:j}},E=k,H=(a("40c7"),Object(s["a"])(E,b,y,!1,null,null,null));H.options.__file="opponent.vue";var P=H.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player row"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"text"},[t._v("Reserve: "+t._s(t.player.remainingCards))]),a("h3",{staticClass:"text"},[t._v("Gladiator")]),a("playerHand")],1)])},S=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playerHand"},t._l(t.playerHand,function(e){return a("div",{staticClass:"playerCard col-2"},[a("div",{staticClass:"card",on:{click:function(a){t.setPlayerCard(e.id)}}},[a("h5",[t._v(t._s(e.name))]),a("img",{staticStyle:{height:"100px"},attrs:{src:e.img}}),a("p",[t._v("Attack: "+t._s(e.attack))]),a("p",[t._v("Shield "+t._s(e.defense))]),a("p",[t._v("Health "+t._s(e.health))])])])}))},T=[],A={name:"",data(){return{}},computed:{playerHand(){return this.$store.state.game.player.hand}},methods:{setPlayerCard(t){this.$store.dispatch("setPlayerCard",t)}}},N=A,B=(a("d19c"),Object(s["a"])(N,I,T,!1,null,null,null));B.options.__file="playerHand.vue";var M=B.exports,L={name:"",data(){return{}},computed:{player(){return this.$store.state.game.player}},methods:{},components:{playerHand:M}},R=L,q=(a("e699"),Object(s["a"])(R,G,S,!1,null,null,null));q.options.__file="player.vue";var J=q.exports,Y={name:"",data(){return{}},mounted(){this.$store.dispatch("getGame",this.$route.params.id)},computed:{game(){return this.$store.state.game},opponent(){return this.$store.state.game.opponent},player(){return this.$store.state.game.player}},components:{opponent:P,player:J},methods:{fight(){let t={gameId:this.$route.params.id,cards:{playerCardId:this.$store.state.game.player.cardId,opponentCardId:this.$store.state.game.opponent.cardId}};this.$store.dispatch("fight",t),console.log(this.$store.state.game.player.cardId),console.log(this.$store.state.game.opponent.cardId)}}},z=Y,D=(a("568f"),Object(s["a"])(z,g,_,!1,null,null,null));D.options.__file="Game.vue";var U=D.exports;n["a"].use(u["a"]);var F=new u["a"]({routes:[{path:"/",name:"home",component:v},{path:"/game/:id",name:"game",component:U},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),K=a("2f62"),Q=a("bc3a"),V=a.n(Q);let W=V.a.create({baseURL:"https://battlecardz.herokuapp.com/api/games",timeout:3e3});n["a"].use(K["a"]);var X=new K["a"].Store({state:{game:{opponent:{hand:[],cardId:""},player:{hand:[]}}},mutations:{getOC(t){return t.game.opponent.cardId},setGame(t,e){t.game=e},setOC(t,e){t.game.opponent.cardId=e},setPC(t,e){t.game.player.cardId=e}},actions:{startGame({commit:t}){W.post("/").then(e=>{console.log(e),t("setGame",e.data.game),F.push({name:"game",params:{id:e.data.game.id}})})},getGame({commit:t},e){W.get("/"+e).then(e=>{console.log(e),t("setGame",e.data.data)})},setOpponentCard({commit:t},e){console.log(e),t("setOC",e)},setPlayerCard({commit:t},e){console.log(e),t("setPC",e)},fight({commit:t},e){W.put("/"+e.gameId,e.cards).then(e=>{console.log(e),t("setGame",e.data.game)})}}});n["a"].config.productionTip=!1,new n["a"]({router:F,store:X,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"8eec":function(t,e,a){},"97f3":function(t,e,a){},c5eb:function(t,e,a){"use strict";var n=a("52e0"),r=a.n(n);r.a},cccb:function(t,e,a){"use strict";var n=a("d563"),r=a.n(n);r.a},d066:function(t,e,a){},d19c:function(t,e,a){"use strict";var n=a("d066"),r=a.n(n);r.a},d563:function(t,e,a){},dd84:function(t,e,a){t.exports=a.p+"img/gladiator.05275398.jpg"},e699:function(t,e,a){"use strict";var n=a("8eec"),r=a.n(n);r.a},ff7b:function(t,e,a){}});
//# sourceMappingURL=app.9cd697b4.js.map