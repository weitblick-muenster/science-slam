(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{258:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container mx-auto px-2 md:px-8 py-8 md:py-12"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){var content=n(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("61b235e9",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("29c297cc",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("38eed0ce",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("3c179871",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sk-circle"},[n("div",{staticClass:"sk-circle1 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle2 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle3 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle4 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle5 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle6 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle7 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle8 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle9 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle10 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle11 sk-child"}),t._v(" "),n("div",{staticClass:"sk-circle12 sk-child"})])}],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";var r=n(2),l=n(38).every,o=n(51),c=n(22),d=o("every"),m=c("every");r({target:"Array",proto:!0,forced:!d||!m},{every:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}})},268:function(t,e,n){t.exports=n.p+"img/27e96fb.png"},269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confetti=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},o,c(e)),d=n.elementCount,m=n.colors,f=n.width,h=n.height,v=n.perspective,w=n.angle,x=n.spread,_=n.startVelocity,y=n.decay,C=n.dragFriction,k=n.duration,S=n.stagger,M=n.random;t.style.perspective=v;var O=r(t,d,m,f,h),E=O.map((function(element){return{element:element,physics:l(w,x,_,M)}}));return animate(t,E,C,y,k,S)};function r(t,e,n,r,l){return Array.from({length:e}).map((function(e,o){var element=document.createElement("div"),c=n[o%n.length];return element.style["background-color"]=c,element.style.width=r,element.style.height=l,element.style.position="absolute",element.style.willChange="transform, opacity",element.style.visibility="hidden",t.appendChild(element),element}))}function l(t,e,n,r){var l=t*(Math.PI/180),o=e*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*r(),wobbleSpeed:.1+.1*r(),velocity:.5*n+r()*n,angle2D:-l+(.5*o-r()*o),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI,tiltAngleSpeed:.1+.3*r()}}function animate(t,e,n,r,l,o){var c=void 0;return new Promise((function(d){requestAnimationFrame((function m(time){c||(c=time);var f=time-c,progress=c===time?0:(time-c)/l;e.slice(0,Math.ceil(f/o)).forEach((function(t){!function(t,progress,e,n){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=t.physics.wobbleSpeed,n?t.physics.velocity*=n:t.physics.velocity-=t.physics.velocity*e,t.physics.y+=3,t.physics.tiltAngle+=t.physics.tiltAngleSpeed;var r=t.physics,l=r.x,o=r.y,c=r.z,d=r.tiltAngle,m=r.wobble,f="translate3d("+(l+10*Math.cos(m))+"px, "+(o+10*Math.sin(m))+"px, "+c+"px) rotate3d(1, 1, 1, "+d+"rad)";t.element.style.visibility="visible",t.element.style.transform=f,t.element.style.opacity=1-progress}(t,progress,n,r)})),time-c<l?requestAnimationFrame(m):(e.forEach((function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})),d())}))}))}var o={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function c(t){return!t.stagger&&t.delay&&(t.stagger=t.delay),t}},270:function(t,e,n){"use strict";n(260)},271:function(t,e,n){(e=n(13)(!1)).push([t.i,'.confetti-holder[data-v-66c7be09]:before{content:" ";white-space:pre}',""]),t.exports=e},272:function(t,e,n){"use strict";n(261)},273:function(t,e,n){(e=n(13)(!1)).push([t.i,".stream-container[data-v-66dd729a]{height:150px}@media (min-width:360px){.stream-container[data-v-66dd729a]{height:175px}}@media (min-width:640px){.stream-container[data-v-66dd729a]{height:300px}}@media (min-width:768px){.stream-container[data-v-66dd729a]{height:400px}}@media (min-width:1024px){.stream-container[data-v-66dd729a]{height:600px}}",""]),t.exports=e},274:function(t,e,n){"use strict";n(262)},275:function(t,e,n){(e=n(13)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Fira+Code&display=swap);"]),e.push([t.i,'@media (min-width:640px){.countdown[data-v-111f1a80]{font-size:5rem!important}.countdown li[data-v-111f1a80]{margin-left:0!important;margin-right:0!important}.countdown li[data-v-111f1a80]:after{top:-5px!important;right:-48px!important}}@media (min-width:768px){.countdown li[data-v-111f1a80]{margin-left:0!important;margin-right:0!important}.countdown li[data-v-111f1a80]:after{top:-5px!important;right:-48px!important}}.countdown[data-v-111f1a80]{font-family:"Fira Code",monospace;font-size:2.25rem}.countdown li[data-v-111f1a80]{display:inline-block;margin:0;position:relative}.countdown li[data-v-111f1a80]:first-of-type{margin-left:0}.countdown li[data-v-111f1a80]:last-of-type:after{content:""}.countdown li[data-v-111f1a80]:after{position:absolute;content:":";top:-3px;right:-22px}.countdown li .digit[data-v-111f1a80]{font-weight:700;line-height:1.5;margin-bottom:0}',""]),t.exports=e},276:function(t,e,n){"use strict";n(263)},277:function(t,e,n){(e=n(13)(!1)).push([t.i,".swiper-button-next,.swiper-button-prev{--text-opacity:1!important;color:#fdeb34!important;color:rgba(253,235,52,var(--text-opacity))!important}.swiper-button-next:focus,.swiper-button-prev:focus{outline:2px solid transparent!important;outline-offset:2px!important}.swiper-pagination-bullet{--bg-opacity:1!important;background-color:#e2e8f0!important;background-color:rgba(226,232,240,var(--bg-opacity))!important}.swiper-pagination-bullet-active{--bg-opacity:1!important;background-color:#fdeb34!important;background-color:rgba(253,235,52,var(--bg-opacity))!important}.swiper-pagination-bullet:focus{outline:2px solid transparent!important;outline-offset:2px!important}",""]),t.exports=e},278:function(t,e,n){var map={"./felix-strieth-kalthoff.png":279,"./hendrik-steinbeck.png":280,"./kathrin-viergutz.png":281,"./philipp-loehler.png":282};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=278},279:function(t,e,n){t.exports=n.p+"img/ebdcaa8.png"},280:function(t,e,n){t.exports=n.p+"img/60ba8cb.png"},281:function(t,e,n){t.exports=n.p+"img/3b4b754.png"},282:function(t,e,n){t.exports=n.p+"img/a6b2eb8.png"},283:function(t,e,n){t.exports=n.p+"img/aaea80c.jpg"},284:function(t,e,n){var map={"./aster.png":285,"./basf.png":286,"./eppendorf.png":287,"./geo.png":288,"./hafenkaeserei.png":289,"./sparkasse.png":290};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=284},285:function(t,e,n){t.exports=n.p+"img/af0b354.png"},286:function(t,e,n){t.exports=n.p+"img/d398b63.png"},287:function(t,e,n){t.exports=n.p+"img/d25423e.png"},288:function(t,e,n){t.exports=n.p+"img/031fbc9.png"},289:function(t,e,n){t.exports=n.p+"img/92a09d1.png"},290:function(t,e,n){t.exports=n.p+"img/903f5b0.png"},302:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-0 text-lg md:text-xl"},[e("span",[this._v("präsentiert von")]),this._v(" "),e("img",{staticClass:"w-32 md:w-40 inline-flex ml-1 md:ml-2 pb-2",attrs:{src:n(268),alt:"Weitblick Münster"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"items-center w-1/3 relative hidden lg:flex"},[e("img",{staticClass:"absolute m-auto inset-0 w-64",attrs:{src:n(185),alt:"Logo"}})])}],l={name:"Hero"},o=n(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-secondary"},[r("div",{staticClass:"container mx-auto px-8 py-12 md:py-16 xl:py-32"},[r("div",{staticClass:"flex mb-4 relative"},[r("div",{staticClass:"lg:w-2/3"},[r("div",{staticClass:"text-white"},[r("h1",{staticClass:"font-bold text-4xl sm:text-4.75xl md:text-6xl"},[t._v("SCIENCE SLAM")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"w-fit-content"},[r("div",{staticClass:"text-2xl md:text-4xl mt-8 font-semibold text-primary"},[t._v("\n              Am 15. Juni 2021 um 20 Uhr\n            ")]),t._v(" "),r("div",{staticClass:"text-xl font-semibold float-right"},[t._v("\n              im Live Stream!\n              "),r("FontAwesomeIcon",{staticClass:"fa-lg",attrs:{icon:"arrow-alt-circle-down"}})],1)])]),t._v(" "),r("DonateButton")],1),t._v(" "),t._m(1),t._v(" "),r("img",{staticClass:"hidden sm:block md:hidden absolute w-48 top-0 right-0 m-auto",attrs:{src:n(185),alt:"Logo"}})])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{DonateButton:n(306).default})},303:function(t,e,n){"use strict";n.r(e);n(35);var main=n(269),r={name:"StreamTeaser",props:{startsAt:{type:String,required:!0}},data:function(){return{showStream:!0}},created:function(){},methods:{onCountdownEnd:function(){Object(main.confetti)(this.$refs.confettiHolder);var t=this;setTimeout((function(){t.showStream=!0,t.$refs.countdown.$destroy()}),3e3)}}},l=(n(270),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSection",[n("div",{staticClass:"w-full mb-4 text-center"},[n("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Hier geht's zum Stream:")]),t._v(" "),n("div",{staticClass:"text-lg leading-loose text-left"},[n("p",{staticClass:"mb-4"},[t._v("\n        Besondere Zeiten erfordern besondere Maßnahmen.\n        Auch in diesem Jahr starten wir die ScienceSlam-Saison wieder mit einem digitalen Slam.\n        Obwohl wir den Slam unter den normalen Bedingungen vermissen, wollen wir euch einen\n        neuen Slam mit neuen Themen und neuen Gesichtern nicht vorenthalten. Auch dieses Mal\n        hat sich das Team an die Gestaltung eines digitalen Slams gesetzt. Aktuell\n        laufen die Vorbereitungen auf Hochtouren und das Team ist hochmotiviert einen tollen\n        Slam auf die Beine zu stellen. Erneut treten junge Wissenschaftler*innen aus verschiedenen\n        Fachbereichen gegeneinander an und wollen euch ihr Forschungsthema näher bringen. Ihr dürft\n        entscheiden, wer diese Aufgabe am besten meistert. Um euch einzustimmen,\n        könnt ihr den letzten Slam unten noch einmal anschauen.\n      ")]),t._v(" "),n("p",[t._v("\n        Die Veranstaltung könnt ihr kostenlos im Livestream verfolgen. Kostenlos?\n        Ja, ihr habt richtig gehört! Ihr könnt den Livestream kostenlos aufrufen.\n        Statt wie gewohnt Tickets zu verkaufen, setzen wir bei diesem Science Slam auf zu einhundert\n        Prozent freiwillige Spende. Mit einer Spende unterstützt ihr den Schulbau in Benin.\n        Mehr zu Weitblick erfahrt ihr weiter unten. Wir würden uns sehr über eure Unterstützung freuen.\n      ")])])]),t._v(" "),n("div",{staticClass:"w-full text-center"},[n("Stream",{directives:[{name:"show",rawName:"v-show",value:t.showStream,expression:"showStream"}]}),t._v(" "),t.showStream?t._e():[n("ClientOnly",[n("StreamCountdown",{ref:"countdown",attrs:{deadline:t.startsAt},on:{end:t.onCountdownEnd}}),t._v(" "),n("Spinner",{attrs:{slot:"placeholder"},slot:"placeholder"})],1),t._v(" "),n("div",{ref:"confettiHolder",staticClass:"w-fit-content m-auto confetti-holder",style:{height:".5px"}}),t._v(" "),n("div",[t._v("\n        Schau dir in der Zwischenzeit unsere Themen an!\n        "),n("FontAwesomeIcon",{staticClass:"rounded-full p-0 text-secondary bg-white",attrs:{icon:"arrow-alt-circle-down"}})],1)]],2)])}),[],!1,null,"66c7be09",null);e.default=component.exports;installComponents(component,{Stream:n(307).default,StreamCountdown:n(308).default,Spinner:n(264).default,BaseSection:n(258).default})},304:function(t,e,n){"use strict";n.r(e);var r={name:"SlammerInfo",props:{slammers:{type:Array,required:!0}},data:function(){return{toBeAnnounced:!1,swiperOptions:{loop:!0,speed:500,centeredSlides:!0,slidesPerView:1,spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}},l=(n(276),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary text-white"},[n("BaseSection",[n("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Unsere Themen")]),t._v(" "),t.toBeAnnounced?n("div",{staticClass:"text-xl text-primary text-center w-full font-semibold tracking-wider mt-6 mb-12"},[t._v("\n      TO BE ANNOUNCED\n    ")]):n("div",{staticClass:"w-full flex flex-wrap"},[n("ClientOnly",[n("Swiper",{attrs:{options:t.swiperOptions}},[t._l(t.slammers,(function(t){return n("SwiperSlide",{key:t.slug,staticClass:"px-0 py-10 sm:py-12 sm:px-16"},[n("Slammer",{attrs:{slammer:t}})],1)})),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),n("div",{staticClass:"swiper-pagination swiper-pagination-bullets",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),n("Spinner",{attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Slammer:n(309).default,Spinner:n(264).default,BaseSection:n(258).default})},305:function(t,e,n){"use strict";n.r(e);var r={name:"Sponsors",props:{sponsors:{type:Array,required:!0}}},l=n(9),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("BaseSection",[e("h2",{staticClass:"text-4xl font-bold mb-2"},[this._v("Unsere Sponsoren")]),this._v(" "),e("div",{staticClass:"flex flex-wrap w-full md:justify-around justify-center"},this._l(this.sponsors,(function(t){return e("div",{key:t.slug,staticClass:"m-8 mb-12 inline-flex"},[e("a",{attrs:{href:t.link,title:t.name,target:"_blank"}},[e("img",{staticClass:"h-16 md:h-24 max-w-full",attrs:{src:n(284)("./"+t.slug+".png"),alt:t.name}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSection:n(258).default})},306:function(t,e,n){"use strict";n.r(e);var r={name:"DonateButton",data:function(){return{showDonateModal:!1}}},l=n(9),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-12"},[e("a",{staticClass:"button-primary flex items-center text-center justify-center max-w-xs\n      h-12 mx-auto sm:float-left",attrs:{href:"https://www.betterplace.org/de/projects/40094-weitblick-muenster-schulbau-benin",target:"_blank",type:"button"}},[e("span",{staticClass:"flex items-center"},[e("FontAwesomeIcon",{staticClass:"inline-flex fa-lg",attrs:{icon:"hand-holding-usd"}})],1),this._v(" "),e("span",{staticClass:"ml-2"},[this._v("\n      Hier Spenden\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var r={name:"Stream"},l=(n(272),n(9)),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full relative stream-container"},[e("iframe",{staticClass:"inline-block absolute top-0 left-0 w-full min-h-full mx-auto",attrs:{title:"Stream",src:"https://www.youtube.com/embed/UysZyBlC97s",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,"66dd729a",null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var r={name:"StreamCountdown",props:{deadline:{type:String,required:!0}},data:function(){return{timeLeft:0}},created:function(){this.timeLeft=new Date(this.deadline)-new Date},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.countdown.start()}))},destroyed:function(){this.$el.remove()},filters:{leadingZero:function(t){return t<10?"0".concat(t):t}}},l=(n(274),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("VueCountdown",{ref:"countdown",staticClass:"mb-4",attrs:{time:t.timeLeft,"auto-start":!1,"emit-events":!0,interval:1e3,tag:"div"},on:{end:function(e){return t.$emit("end")}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.days,l=e.hours,o=e.minutes,c=e.seconds;return[n("ul",{staticClass:"countdown m-0 p-0 list-none w-fit-content mx-auto"},[r>0?n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(r))+"\n          ")])]):t._e(),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(l))+"\n          ")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(o))+"\n          ")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v("\n            "+t._s(t._f("leadingZero")(c))+"\n          ")])])])]}}])})],1)}),[],!1,null,"111f1a80",null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(91);var r={name:"Slammer",props:{slammer:{type:Object,required:!0}},data:function(){return{socialMediaProviders:["homepage","twitter","instagram","facebook"]}},methods:{socialMediaLink:function(t){return"homepage"===t?this.slammer.social.homepage:"https://".concat(t,".com/").concat(this.slammer.social[t])},socialMediaIcon:function(t){return"homepage"===t?["fas","globe"]:["fab",t]},socialMediaCssClasses:function(t){return["text-center","rounded-full","mr-1","p-2","transition-all","ease-in-out","duration-300","hover:text-white",{"text-twitter":"twitter"===t,"hover:bg-twitter":"twitter"===t,"text-instagram":"instagram"===t,"hover:bg-instagram":"instagram"===t,"text-facebook":"facebook"===t,"hover:bg-facebook":"facebook"===t,"text-blue-700":"homepage"===t,"hover:bg-blue-700":"homepage"===t}]}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full h-full lg:flex lg:items-start bg-white rounded text-black\n    p-8 lg:pt-12 lg:py-12 lg:pl-8 lg:pr-24 xl:pl-16 xl:pr-48"},[r("div",{staticClass:"w-full lg:w-1/6 text-center lg:justify-center"},[r("img",{staticClass:"h-24 w-24 xl:h-32 xl:w-32 rounded-full mx-auto border-2 border-primary mb-2",attrs:{src:n(278)("./"+t.slammer.slug+".png"),alt:t.slammer.name}}),t._v(" "),t.slammer.social?r("div",{staticClass:"mt-1 flex justify-around w-fit-content mx-auto"},[t._l(t.socialMediaProviders,(function(e){return[t.slammer.social[e]?r("a",{key:t.slammer.slug+"_"+e+"_"+t.slammer.social[e],class:t.socialMediaCssClasses(e),attrs:{href:t.socialMediaLink(e),target:"_blank"}},[r("FontAwesomeIcon",{staticClass:"fa-lg fa-w-16",staticStyle:{display:"block"},attrs:{icon:t.socialMediaIcon(e)}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v(t._s(e))])],1):t._e()]}))],2):t._e()]),t._v(" "),r("div",{staticClass:"text-center lg:text-left w-full lg:w-5/6 lg:ml-8"},[r("h2",{staticClass:"font-bold text-lg sm:text-2xl"},[r("span",{staticClass:"uppercase"},[t._v(t._s(t.slammer.slamTitle))])]),t._v(" "),r("h3",{staticClass:"text-xl"},[t._v(t._s(t.slammer.name+(t.slammer.age?", "+t.slammer.age:"")))]),t._v(" "),r("div",{staticClass:"text-gray-600 text-lg"},[r("span",[t._v("Fachbereich:")]),t._v(" "),r("span",[t._v(t._s(t.slammer.subjectArea))])]),t._v(" "),r("div",{staticClass:"w-full hidden lg:block"},[r("div",{staticClass:"leading-loose py-2",domProps:{innerHTML:t._s(t.slammer.biography)}})])])])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);n(188);var r={name:"SvgIcon",props:{iconName:{type:String,default:"svg"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 18 18","aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{id:t.iconName,lang:"en"}},[t._v("\n    "+t._s(t.iconName)+" icon\n  ")]),t._v(" "),n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseSection",[r("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Über Weitblick")]),t._v(" "),r("div",{staticClass:"flex flex-wrap-reverse md:flex-row-reverse"},[r("div",{staticClass:"w-full mt-12 lg:w-1/2 lg:mt-0 text-center lg:pl-4"},[r("img",{attrs:{src:n(283),alt:"Weitblick Gruppenfoto"}})]),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2"},[r("div",{staticClass:"leading-loose text-lg"},[t._v("\n        Weitblick Münster ist eine Studierendeninitiative, die offen für alle interessierten\n        und motivierten Menschen ist.\n        Gemeinsam setzen wir uns für einen weltweit gerechteren Zugang zu Bildung ein.\n        Dazu fördern wir Bildungsprojekte für Kinder und Jugendliche in Deutschland und\n        in unseren Partnerprojekten in Benin, Honduras, Madagaskar und Kambodscha.\n      ")]),t._v(" "),r("div",{staticClass:"mt-2 text-lg items-center"},[r("div",{staticClass:"w-fit-content"},[r("div",[t._v("Du möchstest mitwirken?")])]),t._v(" "),r("div",{staticClass:"mt-4"},[r("a",{staticClass:"button-weitblick flex items-center justify-center max-w-xs mx-auto",attrs:{href:"https://infoabend.weitblicker.live",target:"_blank"}},[r("span",{staticClass:"flex items-center"},[r("SvgIcon",{staticClass:"inline-flex",attrs:{id:"weitblick","icon-name":"weitblick",width:"32",height:"32"}},[r("WeitblickIcon")],1)],1),t._v(" "),r("span",{staticClass:"ml-2 text-center"},[t._v("\n              Schau gern vorbei!\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WeitblickIcon:n(313).default,SvgIcon:n(310).default,BaseSection:n(258).default})},312:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-bluegray"},[n("BaseSection",[n("div",{staticClass:"w-full"},[n("h2",{staticClass:"text-4xl font-bold mb-2"},[t._v("Folge uns!")]),t._v(" "),n("div",{staticClass:"leading-loose mt-4 text-lg"},[t._v("\n        Du willst auf dem Laufenden bleiben?\n        Folge uns doch auf unseren Social Media Kanälen und verpasse keine Neuigkeiten!\n      ")]),t._v(" "),n("div",{staticClass:"flex mt-3"},[n("a",{staticClass:"text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300\n            text-instagram hover:text-white hover:bg-instagram",attrs:{href:"https://www.instagram.com/weitblick_muenster/",target:"_blank"}},[n("FontAwesomeIcon",{staticClass:"fa-2x fa-w-16",staticStyle:{display:"block"},attrs:{icon:["fab","instagram"]}}),t._v(" "),n("span",{staticClass:"hidden"},[t._v("instagram")])],1),t._v(" "),n("a",{staticClass:"text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300\n            text-facebook hover:text-white hover:bg-facebook",attrs:{href:"https://www.facebook.com/WeitblickMuenster",target:"_blank"}},[n("FontAwesomeIcon",{staticClass:"fa-2x",staticStyle:{display:"block"},attrs:{icon:["fab","facebook"]}}),t._v(" "),n("span",{staticClass:"hidden"},[t._v("facebook")])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSection:n(258).default})},313:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{d:"M9.0678 1c-4.465 0-8.0678 3.6336 -8.0678 8.0678c0 4.465 3.6336 8.0678 8.0678 8.0678c4.465 0 8.0678-3.6336 8.0678 -8.0678C17.1356 4.6336 13.5328 1 9.0678 1zM12.2087 12.3011L12.2087 12.3011c-0.2156 0.1232-0.4927 0.0616 -0.6159 -0.154c-0.0616-0.1232 -0.0616 -0.2463 -0.0308 -0.3387l0.0924-0.2771c0.0616-0.2463 0.0308 -0.5235 -0.0924 -0.7698c-0.2771-0.4927 -0.893 -0.6467 -1.3857 -0.3695c-0.4927 0.2771-0.6467 0.893 -0.3695 1.3857c0.154 0.2463 0.3695 0.4003 0.6159 0.4619l0.2771 0.0616c0.1232 0.0308 0.2156 0.0924 0.2771 0.2156c0.1232 0.2156 0.0616 0.4927-0.154 0.6159l0 0c-0.8314 0.4003-1.6936 0.739 -2.5558 0.9854c-0.2463-0.8622 -0.5851 -1.7244 -0.9854 -2.5558l0 0c-0.1232-0.2156 -0.4003 -0.2771 -0.6159 -0.154c-0.1232 0.0616-0.1848 0.154 -0.2156 0.2771l-0.0616 0.2771c-0.0616 0.2463-0.2463 0.4619 -0.4619 0.6159c-0.4927 0.2771-1.1086 0.1232 -1.3857 -0.3695c-0.2771-0.4927 -0.1232 -1.1086 0.3695 -1.3857c0.2463-0.154 0.5235 -0.1848 0.7698 -0.0924l0.2771 0.0924c0.1232 0.0308 0.2463 0.0308 0.3387-0.0308c0.2156-0.1232 0.2771 -0.4003 0.154 -0.6159l0 0c-0.5235-0.7698 -1.1086 -1.5089 -1.7244 -2.1555c0.5851-0.154 1.4781 -0.4311 2.5558 -0.9854l0 0c0.2156-0.1232 0.2771 -0.4003 0.154 -0.6159c-0.0616-0.1232 -0.154 -0.1848 -0.2771 -0.2156l-0.2771-0.0616c-0.2463-0.0616 -0.4619 -0.2463 -0.6159 -0.4619c-0.2771-0.4927 -0.1232 -1.1086 0.3695 -1.3857c0.4927-0.2771 1.1086 -0.1232 1.3857 0.3695c0.154 0.2463 0.154 0.5235 0.0924 0.7698l-0.0924 0.2771c-0.0308 0.1232-0.0308 0.2463 0.0308 0.3387c0.1232 0.2156 0.4003 0.2771 0.6159 0.154l0 0c0.7698-0.5235 1.5089 -1.1086 2.1555 -1.7244c0.6467 0.6467 1.2317 1.3549 1.7244 2.1555l0 0c0.1232 0.2156 0.0616 0.4927-0.154 0.6159c-0.1232 0.0616-0.2463 0.0616 -0.3387 0.0308l-0.2771-0.0924c-0.2463-0.0616 -0.5235 -0.0308 -0.7698 0.0924c-0.4927 0.2771-0.6467 0.893 -0.3695 1.3857c0.2771 0.4927 0.893 0.6467 1.3857 0.3695c0.2463-0.154 0.4003 -0.3695 0.4619 -0.6159l0.0616-0.2771c0.0308-0.1232 0.0924 -0.2156 0.2156 -0.2771c0.2156-0.1232 0.4927 -0.0616 0.6159 0.154l0 0c0.4003 0.8314 0.739 1.6936 0.9854 2.5558C13.7176 11.1925 13.0093 11.7776 12.2087 12.3011z"}})}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);n(267),n(64),n(39),n(90),n(32);var r=n(4),l=["amt","cc","cm","item_name","item_number","st","tx"],o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("/slammers").sortBy("position","asc").fetch();case 3:return r=e.sent,e.next=6,n("/sponsors").sortBy("position","asc").fetch();case 6:return l=e.sent,e.abrupt("return",{slammers:r,sponsors:l});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{streamStartsAt:"2020-11-23T18:50:00+00:00"}},mounted:function(){var t=this.$route.query;if(l.every((function(param){return Object.keys(t).includes(param)}))){var e=t.amt,n=t.cc,r=t.st,o=t.tx;"EUR"===n&&"Completed"===r&&"string"==typeof o&&parseFloat(e)>0&&(this.$router.push({query:{},addToHistory:!1}),this.$notification.success("Vielen Dank für deine Unterstützung!"))}}},c=n(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),t._v(" "),n("StreamTeaser",{attrs:{id:"stream",startsAt:t.streamStartsAt}}),t._v(" "),n("SlammerInfo",{attrs:{id:"themen",slammers:t.slammers}}),t._v(" "),n("AboutWeitblick",{attrs:{id:"ueber-weitblick"}}),t._v(" "),n("FollowUs"),t._v(" "),n("Sponsors",{attrs:{id:"sponsoren",sponsors:t.sponsors}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(302).default,StreamTeaser:n(303).default,SlammerInfo:n(304).default,AboutWeitblick:n(311).default,FollowUs:n(312).default,Sponsors:n(305).default})}}]);