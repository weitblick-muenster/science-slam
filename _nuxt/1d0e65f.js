(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e,n){var content=n(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5a7b750b",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("644d3e90",content,!0,{sourceMap:!1})},244:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("38eed0ce",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3c179871",content,!0,{sourceMap:!1})},246:function(t,e,n){t.exports=n.p+"img/logo-white.3f51b4e.png"},247:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confetti=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},o,c(e)),d=n.elementCount,f=n.colors,m=n.width,v=n.height,h=n.perspective,w=n.angle,x=n.spread,_=n.startVelocity,y=n.decay,C=n.dragFriction,k=n.duration,S=n.stagger,E=n.random;t.style.perspective=h;var I=r(t,d,f,m,v),A=I.map((function(element){return{element:element,physics:l(w,x,_,E)}}));return animate(t,A,C,y,k,S)};function r(t,e,n,r,l){return Array.from({length:e}).map((function(e,o){var element=document.createElement("div"),c=n[o%n.length];return element.style["background-color"]=c,element.style.width=r,element.style.height=l,element.style.position="absolute",element.style.willChange="transform, opacity",element.style.visibility="hidden",t.appendChild(element),element}))}function l(t,e,n,r){var l=t*(Math.PI/180),o=e*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*r(),wobbleSpeed:.1+.1*r(),velocity:.5*n+r()*n,angle2D:-l+(.5*o-r()*o),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI,tiltAngleSpeed:.1+.3*r()}}function animate(t,e,n,r,l,o){var c=void 0;return new Promise((function(d){requestAnimationFrame((function f(time){c||(c=time);var m=time-c,progress=c===time?0:(time-c)/l;e.slice(0,Math.ceil(m/o)).forEach((function(t){!function(t,progress,e,n){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=t.physics.wobbleSpeed,n?t.physics.velocity*=n:t.physics.velocity-=t.physics.velocity*e,t.physics.y+=3,t.physics.tiltAngle+=t.physics.tiltAngleSpeed;var r=t.physics,l=r.x,o=r.y,c=r.z,d=r.tiltAngle,f=r.wobble,m="translate3d("+(l+10*Math.cos(f))+"px, "+(o+10*Math.sin(f))+"px, "+c+"px) rotate3d(1, 1, 1, "+d+"rad)";t.element.style.visibility="visible",t.element.style.transform=m,t.element.style.opacity=1-progress}(t,progress,n,r)})),time-c<l?requestAnimationFrame(f):(e.forEach((function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})),d())}))}))}var o={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function c(t){return!t.stagger&&t.delay&&(t.stagger=t.delay),t}},248:function(t,e,n){"use strict";n(242)},249:function(t,e,n){(e=n(21)(!1)).push([t.i,'.confetti-holder[data-v-162c3c62]:before{content:" ";white-space:pre}',""]),t.exports=e},250:function(t,e,n){"use strict";n(243)},251:function(t,e,n){(e=n(21)(!1)).push([t.i,".stream-container[data-v-448be92c]{height:150px}@media (min-width:360px){.stream-container[data-v-448be92c]{height:175px}}@media (min-width:640px){.stream-container[data-v-448be92c]{height:300px}}@media (min-width:768px){.stream-container[data-v-448be92c]{height:400px}}@media (min-width:1024px){.stream-container[data-v-448be92c]{height:600px}}",""]),t.exports=e},252:function(t,e,n){"use strict";n(244)},253:function(t,e,n){(e=n(21)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Fira+Code&display=swap);"]),e.push([t.i,'@media (min-width:640px){.countdown[data-v-111f1a80]{font-size:5rem!important}.countdown li[data-v-111f1a80]{margin-left:0!important;margin-right:0!important}.countdown li[data-v-111f1a80]:after{top:-5px!important;right:-48px!important}}@media (min-width:768px){.countdown li[data-v-111f1a80]{margin-left:0!important;margin-right:0!important}.countdown li[data-v-111f1a80]:after{top:-5px!important;right:-48px!important}}.countdown[data-v-111f1a80]{font-family:"Fira Code",monospace;font-size:2.25rem}.countdown li[data-v-111f1a80]{display:inline-block;margin:0;position:relative}.countdown li[data-v-111f1a80]:first-of-type{margin-left:0}.countdown li[data-v-111f1a80]:last-of-type:after{content:""}.countdown li[data-v-111f1a80]:after{position:absolute;content:":";top:-3px;right:-22px}.countdown li .digit[data-v-111f1a80]{font-weight:700;line-height:1.5;margin-bottom:0}',""]),t.exports=e},254:function(t,e,n){"use strict";n(245)},255:function(t,e,n){(e=n(21)(!1)).push([t.i,".swiper-button-next,.swiper-button-prev{--text-opacity:1!important;color:#fdeb34!important;color:rgba(253,235,52,var(--text-opacity))!important}.swiper-pagination-bullet-active{--bg-opacity:1!important;background-color:#fdeb34!important;background-color:rgba(253,235,52,var(--bg-opacity))!important}",""]),t.exports=e},256:function(t,e,n){var map={"./christoph-koehn.png":257,"./dirk-arne-heyen.png":258,"./janina-otto.png":259,"./ronja-lau.png":260};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=256},257:function(t,e,n){t.exports=n.p+"img/christoph-koehn.fe96070.png"},258:function(t,e,n){t.exports=n.p+"img/dirk-arne-heyen.b19fee5.png"},259:function(t,e,n){t.exports=n.p+"img/janina-otto.bad9333.png"},260:function(t,e,n){t.exports=n.p+"img/ronja-lau.cc844ee.png"},261:function(t,e,n){"use strict";var r=n(8),l=n(4),o=n(83),c=n(16),d=n(10),f=n(27),m=n(179),v=n(61),h=n(5),w=n(84),x=n(62).f,_=n(26).f,y=n(11).f,C=n(262).trim,k=l.Number,S=k.prototype,E="Number"==f(w(S)),I=function(t){var e,n,r,l,o,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=f.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(o("Number",!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var A,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(E?h((function(){S.valueOf.call(n)})):"Number"!=f(n))?m(new k(I(e)),n,N):I(e)},M=r?x(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;M.length>j;j++)d(k,A=M[j])&&!d(N,A)&&y(N,A,_(k,A));N.prototype=S,S.constructor=N,c(l,"Number",N)}},262:function(t,e,n){var r=n(14),l="["+n(263)+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},263:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},264:function(t,e,n){var map={"./aster.png":265,"./basf.png":266,"./eppendorf.png":267,"./geo.png":268,"./hafenkaeserei.png":269,"./sparkasse.png":270};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=264},265:function(t,e,n){t.exports=n.p+"img/aster.70b6d2e.png"},266:function(t,e,n){t.exports=n.p+"img/basf.cf419f3.png"},267:function(t,e,n){t.exports=n.p+"img/eppendorf.d4085b4.png"},268:function(t,e,n){t.exports=n.p+"img/geo.47d1212.png"},269:function(t,e,n){t.exports=n.p+"img/hafenkaeserei.a93f1b4.png"},270:function(t,e,n){t.exports=n.p+"img/sparkasse.5c6b794.png"},282:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-0 text-lg md:text-xl"},[e("span",[this._v("präsentiert von")]),this._v(" "),e("img",{staticClass:"w-32 md:w-40 inline-flex ml-1 md:ml-2 pb-2",attrs:{src:n(246),alt:"Weitblick Münster"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"items-center w-1/3 relative hidden lg:flex"},[e("img",{staticClass:"absolute m-auto inset-0 w-64",attrs:{src:n(176),alt:"Logo"}})])}],l={name:"Hero"},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-secondary"},[r("div",{staticClass:"container mx-auto px-8 py-12 md:py-16 xl:py-32"},[r("div",{staticClass:"flex mb-4 relative"},[r("div",{staticClass:"lg:w-2/3"},[r("div",{staticClass:"text-white"},[r("h1",{staticClass:"font-bold text-4.75xl md:text-6xl"},[t._v("SCIENCE SLAM")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"w-fit-content"},[r("div",{staticClass:"text-2xl md:text-4xl mt-8 font-semibold text-primary"},[t._v("\n              Am 26 November 2020 um 20 Uhr\n            ")]),t._v(" "),r("div",{staticClass:"text-xl font-semibold float-right"},[t._v("\n              im Live Stream!\n              "),r("FontAwesomeIcon",{staticClass:"fa-lg",attrs:{icon:"arrow-alt-circle-down"}})],1)])])]),t._v(" "),t._m(1),t._v(" "),r("img",{staticClass:"hidden sm:block md:hidden absolute w-48 top-0 right-0 m-auto",attrs:{src:n(176),alt:"Logo"}})])])])}),r,!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);n(52);var main=n(247),r={name:"StreamTeaser",props:{startsAt:{type:String,required:!0}},data:function(){return{showStream:!1}},created:function(){this.showStream=new Date>=new Date(this.startsAt)},methods:{onCountdownEnd:function(){Object(main.confetti)(this.$refs.confettiHolder);var t=this;setTimeout((function(){t.showStream=!0,t.$refs.countdown.$destroy()}),3e3)}}},l=(n(248),n(15)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto px-8 py-12 md:py-16"},[t._m(0),t._v(" "),n("div",{staticClass:"w-full text-center"},[n("Stream",{directives:[{name:"show",rawName:"v-show",value:t.showStream,expression:"showStream"}]}),t._v(" "),t.showStream?t._e():[n("ClientOnly",[n("StreamCountdown",{ref:"countdown",attrs:{deadline:t.startsAt},on:{end:t.onCountdownEnd}}),t._v(" "),n("Spinner",{attrs:{slot:"placeholder"},slot:"placeholder"})],1),t._v(" "),n("div",{ref:"confettiHolder",staticClass:"w-fit-content m-auto confetti-holder",style:{height:".5px"}}),t._v(" "),n("div",[t._v("\n        Schau dir in der Zwischenzeit unsere Themen an!\n        "),n("FontAwesomeIcon",{staticClass:"rounded-full p-0 text-secondary bg-white",attrs:{icon:"arrow-alt-circle-down"}})],1)]],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-4 text-center"},[e("h2",{staticClass:"text-4xl font-bold mb-2"},[this._v("Hier geht's zum Stream:")]),this._v(" "),e("p",{staticClass:"text-lg leading-loose"},[this._v("\n      Weitblick Münster veranstaltet jedes Semester einen Science Slam.\n      Junge Wissenschaft­ler*innen treten gegeneinander an und stellen ihre Forschung\n      innerhalb von 10 Minuten möglichst verständlich und unterhaltsam vor.\n      Ihr dürft entscheiden, wer diese Aufgabe am besten meistert.\n      Auch in Zeiten von Corona sind wir weiterhin aktiv – wir freuen uns auf dich!\n    ")])])}],!1,null,"162c3c62",null);e.default=component.exports;installComponents(component,{Stream:n(286).default,StreamCountdown:n(287).default,Spinner:n(292).default})},284:function(t,e,n){"use strict";n.r(e);var r={name:"SlammerInfo",props:{slammers:{type:Array,required:!0}},data:function(){return{swiperOptions:{loop:!0,speed:500,centeredSlides:!0,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}},l=(n(254),n(15)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-secondary text-white"},[e("div",{staticClass:"container mx-auto px-8 py-16"},[this._m(0),this._v(" "),e("div",{staticClass:"w-full flex flex-wrap"},this._l(this.slammers,(function(t){return e("Slammer",{key:t.slug,attrs:{slammer:t}})})),1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full flex"},[e("h2",{staticClass:"text-xl font-bold uppercase mb-2 mr-2"},[this._v("Unsere Slammer*innen:")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Slammer:n(288).default})},285:function(t,e,n){"use strict";n.r(e);var r={name:"Sponsors",props:{sponsors:{type:Array,required:!0}}},l=n(15),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto px-8 py-12 md:py-16"},[e("h2",{staticClass:"text-4xl font-bold mb-2"},[this._v("Unsere Sponsoren")]),this._v(" "),e("div",{staticClass:"flex flex-wrap w-full md:justify-around justify-center"},this._l(this.sponsors,(function(t){return e("div",{key:t.slug,staticClass:"m-8 mb-12 inline-flex"},[e("a",{attrs:{href:t.link,title:t.name,target:"_blank"}},[e("img",{staticClass:"h-16 md:h-24 max-w-full",attrs:{src:n(264)("./"+t.slug+".png"),alt:t.name}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var r={name:"Stream"},l=(n(250),n(15)),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full relative stream-container"},[e("iframe",{staticClass:"inline-block absolute top-0 left-0 w-full min-h-full mx-auto",attrs:{title:"Stream",src:"https://www.youtube-nocookie.com/embed/NpEaa2P7qZI",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,"448be92c",null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r={name:"StreamCountdown",props:{deadline:{type:String,required:!0}},data:function(){return{timeLeft:0}},created:function(){this.timeLeft=new Date(this.deadline)-new Date},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.countdown.start()}))},destroyed:function(){this.$el.remove()},filters:{leadingZero:function(t){return t<10?"0".concat(t):t}}},l=(n(252),n(15)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("VueCountdown",{ref:"countdown",staticClass:"mb-4",attrs:{time:t.timeLeft,"auto-start":!1,"emit-events":!0,interval:1e3,tag:"div"},on:{end:function(e){return t.$emit("end")}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.days,l=e.hours,o=e.minutes,c=e.seconds;return[n("ul",{staticClass:"countdown m-0 p-0 list-none w-fit-content mx-auto"},[r>0?n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(r))+"\n          ")])]):t._e(),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(l))+"\n          ")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(o))+"\n          ")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(c))+"\n          ")])])])]}}])})],1)}),[],!1,null,"111f1a80",null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var r={name:"Slammer",props:{slammer:{type:Object,required:!0}},data:function(){return{socialMediaProviders:["twitter","instagram","facebook"]}},methods:{socialMediaCssClasses:function(t){return["text-center","rounded-full","mr-1","p-2","transition-all","ease-in-out","duration-300","text-".concat(t),"hover:text-white","hover:bg-".concat(t)]}}},l=n(15),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex flex-wrap items-center m-4"},[r("div",{staticClass:"w-full md:w-1/2 xl:w-1/3"},[r("div",{staticClass:"md:flex bg-white text-black rounded-lg p-6 shadow-md"},[r("img",{staticClass:"h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 border-2 border-primary mb-2",attrs:{src:n(256)("./"+t.slammer.slug+".png"),alt:t.slammer.name}}),t._v(" "),r("div",{staticClass:"text-center md:text-left"},[r("h3",{staticClass:"text-xl"},[t._v(t._s(t.slammer.name+", "+t.slammer.age))]),t._v(" "),r("div",{staticClass:"text-secondary"},[r("span",[t._v("Fachbereich:")]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v(t._s(t.slammer.subjectArea))])]),t._v(" "),t.slammer.social?r("div",{staticClass:"mt-1 flex justify-center md:justify-start"},[t._l(t.socialMediaProviders,(function(e){return[t.slammer.social[e]?r("a",{key:t.slammer.slug+"_"+e+"_"+t.slammer.social[e],class:t.socialMediaCssClasses(e),attrs:{href:"https://"+e+".com/"+t.slammer.social[e],target:"_blank"}},[r("FontAwesomeIcon",{staticClass:"fa-w-16",staticStyle:{display:"block"},attrs:{icon:["fab",e]}}),t._v(" "),r("span",{staticClass:"hidden"},[t._v(t._s(e))])],1):t._e()]}))],2):t._e()])])]),t._v(" "),r("div",{staticClass:"w-full md:w-1/2 xl:w-2/3"},[r("div",{staticClass:"leading-loose py-2 px-6"},[t._v("\n      "+t._s(t.slammer.biography)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);n(261);var r={name:"SvgIcon",props:{iconName:{type:String,default:"svg"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}},l=n(15),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 18 18","aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{id:t.iconName,lang:"en"}},[t._v("\n    "+t._s(t.iconName)+" icon\n  ")]),t._v(" "),n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto px-8 py-12 md:py-16"},[n("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Über Weitblick")]),t._v(" "),n("div",{staticClass:"flex flex-wrap-reverse md:flex-row-reverse"},[t._m(0),t._v(" "),n("div",{staticClass:"w-full lg:w-1/2"},[n("div",{staticClass:"leading-loose text-lg"},[t._v("\n        Weitblick Münster ist eine Studierendeninitiative, die offen für alle interessierten\n        und motivierten Menschen ist.\n        Gemeinsam setzen wir uns für einen weltweit gerechteren Zugang zu Bildung ein.\n        Dazu fördern wir Bildungsprojekte für Kinder und Jugendliche in Deutschland und\n        in unseren Partnerprojekten in Benin, Honduras, Madagaskar und Kambodscha.\n      ")]),t._v(" "),n("div",{staticClass:"mt-2 text-lg items-center"},[t._m(1),t._v(" "),n("div",{staticClass:"mt-4"},[n("a",{staticClass:"button-weitblick flex items-center justify-center max-w-xs mx-auto",attrs:{href:"https://infoabend.weitblicker.live",target:"_blank",type:"button"}},[n("span",{staticClass:"flex items-center"},[n("SvgIcon",{staticClass:"inline-flex",attrs:{id:"weitblick","icon-name":"weitblick",width:"32",height:"32"}},[n("WeitblickIcon")],1)],1),t._v(" "),n("span",{staticClass:"ml-2 text-center"},[t._v("\n              Schau gern vorbei!\n            ")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-12 lg:w-1/2 lg:mt-0 text-center relative"},[e("img",{staticClass:"absolute m-auto inset-0",attrs:{src:"",alt:"Weitblick Gruppenfoto"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-fit-content"},[e("div",[this._v("Du möchstest mitwirken?")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{WeitblickIcon:n(293).default,SvgIcon:n(289).default})},291:function(t,e,n){"use strict";n.r(e);var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-bluegray"},[n("div",{staticClass:"container mx-auto px-8 py-12 md:py-16"},[n("div",{staticClass:"w-full"},[n("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Folge uns!")]),t._v(" "),n("div",{staticClass:"leading-loose mt-4"},[t._v("\n        Du willst auf dem Laufenden bleiben?\n        Folge uns doch auf unseren Social Media Kanälen und verpasse keine Neuigkeiten!\n      ")]),t._v(" "),n("div",{staticClass:"flex mt-3"},[n("a",{staticClass:"text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300\n            text-instagram hover:text-white hover:bg-instagram",attrs:{href:"https://www.instagram.com/weitblick_muenster/",target:"_blank",type:"button"}},[n("FontAwesomeIcon",{staticClass:"fa-2x fa-w-16",staticStyle:{display:"block"},attrs:{icon:["fab","instagram"]}}),t._v(" "),n("span",{staticClass:"hidden"},[t._v("instagram")])],1),t._v(" "),n("a",{staticClass:"text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300\n            text-facebook hover:text-white hover:bg-facebook",attrs:{href:"https://www.facebook.com/WeitblickMuenster",target:"_blank",type:"button"}},[n("FontAwesomeIcon",{staticClass:"fa-2x",staticStyle:{display:"block"},attrs:{icon:["fab","facebook"]}}),t._v(" "),n("span",{staticClass:"hidden"},[t._v("facebook")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var r=n(15),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sk-circle"},[n("div",{staticClass:"sk-circle1 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle2 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle3 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle4 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle5 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle6 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle7 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle8 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle9 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle10 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle11 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle12 sk-child"})])}],!1,null,null,null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);var r=n(15),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{d:"M9.0678 1c-4.465 0-8.0678 3.6336 -8.0678 8.0678c0 4.465 3.6336 8.0678 8.0678 8.0678c4.465 0 8.0678-3.6336 8.0678 -8.0678C17.1356 4.6336 13.5328 1 9.0678 1zM12.2087 12.3011L12.2087 12.3011c-0.2156 0.1232-0.4927 0.0616 -0.6159 -0.154c-0.0616-0.1232 -0.0616 -0.2463 -0.0308 -0.3387l0.0924-0.2771c0.0616-0.2463 0.0308 -0.5235 -0.0924 -0.7698c-0.2771-0.4927 -0.893 -0.6467 -1.3857 -0.3695c-0.4927 0.2771-0.6467 0.893 -0.3695 1.3857c0.154 0.2463 0.3695 0.4003 0.6159 0.4619l0.2771 0.0616c0.1232 0.0308 0.2156 0.0924 0.2771 0.2156c0.1232 0.2156 0.0616 0.4927-0.154 0.6159l0 0c-0.8314 0.4003-1.6936 0.739 -2.5558 0.9854c-0.2463-0.8622 -0.5851 -1.7244 -0.9854 -2.5558l0 0c-0.1232-0.2156 -0.4003 -0.2771 -0.6159 -0.154c-0.1232 0.0616-0.1848 0.154 -0.2156 0.2771l-0.0616 0.2771c-0.0616 0.2463-0.2463 0.4619 -0.4619 0.6159c-0.4927 0.2771-1.1086 0.1232 -1.3857 -0.3695c-0.2771-0.4927 -0.1232 -1.1086 0.3695 -1.3857c0.2463-0.154 0.5235 -0.1848 0.7698 -0.0924l0.2771 0.0924c0.1232 0.0308 0.2463 0.0308 0.3387-0.0308c0.2156-0.1232 0.2771 -0.4003 0.154 -0.6159l0 0c-0.5235-0.7698 -1.1086 -1.5089 -1.7244 -2.1555c0.5851-0.154 1.4781 -0.4311 2.5558 -0.9854l0 0c0.2156-0.1232 0.2771 -0.4003 0.154 -0.6159c-0.0616-0.1232 -0.154 -0.1848 -0.2771 -0.2156l-0.2771-0.0616c-0.2463-0.0616 -0.4619 -0.2463 -0.6159 -0.4619c-0.2771-0.4927 -0.1232 -1.1086 0.3695 -1.3857c0.4927-0.2771 1.1086 -0.1232 1.3857 0.3695c0.154 0.2463 0.154 0.5235 0.0924 0.7698l-0.0924 0.2771c-0.0308 0.1232-0.0308 0.2463 0.0308 0.3387c0.1232 0.2156 0.4003 0.2771 0.6159 0.154l0 0c0.7698-0.5235 1.5089 -1.1086 2.1555 -1.7244c0.6467 0.6467 1.2317 1.3549 1.7244 2.1555l0 0c0.1232 0.2156 0.0616 0.4927-0.154 0.6159c-0.1232 0.0616-0.2463 0.0616 -0.3387 0.0308l-0.2771-0.0924c-0.2463-0.0616 -0.5235 -0.0308 -0.7698 0.0924c-0.4927 0.2771-0.6467 0.893 -0.3695 1.3857c0.2771 0.4927 0.893 0.6467 1.3857 0.3695c0.2463-0.154 0.4003 -0.3695 0.4619 -0.6159l0.0616-0.2771c0.0308-0.1232 0.0924 -0.2156 0.2156 -0.2771c0.2156-0.1232 0.4927 -0.0616 0.6159 0.154l0 0c0.4003 0.8314 0.739 1.6936 0.9854 2.5558C13.7176 11.1925 13.0093 11.7776 12.2087 12.3011z"}})}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);n(35);var r=n(6),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("/slammers").fetch();case 3:return r=e.sent,e.next=6,n("/sponsors").fetch();case 6:return l=e.sent,e.abrupt("return",{slammers:r,sponsors:l});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{streamStartsAt:"2020-11-23T19:00:00+00:00"}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),t._v(" "),n("StreamTeaser",{attrs:{id:"stream",startsAt:t.streamStartsAt}}),t._v(" "),n("SlammerInfo",{attrs:{id:"themen",slammers:t.slammers}}),t._v(" "),n("AboutWeitblick",{attrs:{id:"ueber-weitblick"}}),t._v(" "),n("FollowUs"),t._v(" "),n("Sponsors",{attrs:{id:"sponsoren",sponsors:t.sponsors}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(282).default,StreamTeaser:n(283).default,SlammerInfo:n(284).default,AboutWeitblick:n(290).default,FollowUs:n(291).default,Sponsors:n(285).default})}}]);