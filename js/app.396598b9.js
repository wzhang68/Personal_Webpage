(function(e){function c(c){for(var s,o,n=c[0],i=c[1],r=c[2],b=0,d=[];b<n.length;b++)o=n[b],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(c);while(d.length)d.shift()();return a.push.apply(a,r||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],s=!0,n=1;n<t.length;n++){var i=t[n];0!==l[i]&&(s=!1)}s&&(a.splice(c--,1),e=o(o.s=t[0]))}return e}var s={},l={app:0},a=[];function o(c){if(s[c])return s[c].exports;var t=s[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,c,t){o.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,c){if(1&c&&(e=o(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var s in e)o.d(t,s,function(c){return e[c]}.bind(null,s));return t},o.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(c,"a",c),c},o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},o.p="/Personal_Webpage/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=c,n=n.slice();for(var r=0;r<n.length;r++)c(n[r]);var f=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"2cfb":function(e,c,t){"use strict";t("7323")},"40ed":function(e,c,t){e.exports=t.p+"img/wzhang.1b86c34e.jpeg"},"48e9":function(e,c,t){e.exports=t.p+"img/main5.a0622f47.jpg"},"4e18":function(e,c,t){e.exports=t.p+"img/main2.fe695803.jpg"},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("7a23"),l={class:"d-flex flex-column min-vh-100"};function a(e,c,t,a,o,n){var i=Object(s["s"])("AppHeader"),r=Object(s["s"])("router-view"),f=Object(s["s"])("AppFooter");return Object(s["o"])(),Object(s["d"])("div",l,[Object(s["f"])(i),Object(s["f"])(r),Object(s["f"])(f)])}var o={class:"navbar navbar-fixed-top navbar-expand-lg navbar-custom"},n={class:"container"},i=Object(s["f"])("a",{class:"navbar-brand",href:"/",id:"welcome"},[Object(s["f"])("strong",null,"Wei Zhang")],-1),r=Object(s["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["f"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse flew-grow-1 text-right header-menu",id:"navbarNav"},b={class:"navbar-nav ms-auto flex-nowrap"},d={class:"nav-item"},j=Object(s["e"])("Home"),m={class:"nav-item"},O=Object(s["e"])("Projects"),u=Object(s["f"])("li",{class:"nav-item"},[Object(s["f"])("a",{class:"nav-link m-2 menu-item",href:"/about"},"Resume")],-1),p=Object(s["f"])("hr",null,null,-1);function g(e,c){var t=Object(s["s"])("router-link");return Object(s["o"])(),Object(s["d"])(s["a"],null,[Object(s["f"])("nav",o,[Object(s["f"])("div",n,[i,r,Object(s["f"])("div",f,[Object(s["f"])("ul",b,[Object(s["f"])("li",d,[Object(s["f"])(t,{to:"/",class:"nav-link m-2 menu-item"},{default:Object(s["w"])((function(){return[j]})),_:1})]),Object(s["f"])("li",m,[Object(s["f"])(t,{to:"/projects",class:"nav-link m-2 menu-item"},{default:Object(s["w"])((function(){return[O]})),_:1})]),u])])])]),p],64)}t("c9ef");const h={};h.render=g;var v=h,x={class:"footer mt-auto py-3"},w=Object(s["f"])("div",{class:"container"},[Object(s["f"])("span",null,"Designed by Wei Zhang © 2021")],-1);function y(e,c){return Object(s["o"])(),Object(s["d"])("footer",x,[w])}const k={};k.render=y;var S=k,T={name:"Home",components:{AppHeader:v,AppFooter:S}};t("c4e0");T.render=a;var P=T,I=(t("7b17"),t("ab8b"),t("6c02")),M=t("40ed"),_=t.n(M),A={class:"container mt-3"},W=Object(s["f"])("div",{class:"row"},[Object(s["f"])("div",{class:"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-self-center"},[Object(s["f"])("img",{id:"myphoto",alt:"myImage",src:_.a})]),Object(s["f"])("div",{class:"col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 align-self-center self-intro"},[Object(s["f"])("h2",null,[Object(s["f"])("strong",null,"Wei Zhang")]),Object(s["f"])("br"),Object(s["f"])("h4",null,"MS Student, Computer Science"),Object(s["e"])(),Object(s["f"])("br"),Object(s["f"])("h5",null,"University of Southern California"),Object(s["f"])("h5",null,"Viterbi School of Engineering, Department of Computer Science"),Object(s["f"])("br"),Object(s["f"])("h5",null,"Email: wzhang68@usc.edu "),Object(s["f"])("br"),Object(s["e"])(),Object(s["f"])("br"),Object(s["e"])(),Object(s["f"])("br"),Object(s["f"])("div",{class:"row btn-toolbar"},[Object(s["f"])("div",{class:"btn-group"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 "},[Object(s["f"])("a",{href:"https://www.linkedin.com/in/wei-zhang-177439162",class:"brand"},[Object(s["f"])("i",{class:"fab fa-linkedin fa-2x"})])]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  "},[Object(s["f"])("a",{href:"https://github.com/wzhang68",class:"brand"},[Object(s["f"])("i",{class:"fab fa-github fa-2x"})])]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  "},[Object(s["f"])("a",{href:"https://thegamepioneer.com/",class:"brand"},[Object(s["f"])("i",{class:"fab fa-safari fa-2x"})])]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  "},[Object(s["f"])("a",{href:"https://twitter.com/zzwww995",class:"brand"},[Object(s["f"])("i",{class:"fab fa-twitter fa-2x"})])])])])])],-1),z=Object(s["f"])("div",{class:"container mt-5 align-self-start "},[Object(s["f"])("p",{class:"description"}," Welcome to my website. Here is a brief self-introduction. Hi, this is Wei Zhang. I'm currently a MS student in Computer Science at the University of Southern California. I'm a software engineer who has experience in front-end, back-end and game developement. My previous experience includes various topics in computer science field. I love computer science and software that creates value. Feel free to email me or join connection to my LinkedIn if you'd like to get in touch with me about a project, collaboration, or just to say hello. ")],-1);function V(e,c){return Object(s["o"])(),Object(s["d"])("div",A,[W,z])}t("a06e");const C={};C.render=V;var D=C,H=t("ac6d"),G=t.n(H),U=t("4e18"),F=t.n(U),N=t("ab70"),E=t.n(N),B=t("ae49"),Z=t.n(B),J=t("48e9"),K=t.n(J),L={class:"about mt-3"},R=Object(s["f"])("div",{class:"container"},[Object(s["f"])("div",{class:"card mb-4"},[Object(s["f"])("div",{class:"row g-0"},[Object(s["f"])("div",{class:"col-md-8"},[Object(s["f"])("div",{class:"card-body"},[Object(s["f"])("h3",{class:"card-title"},[Object(s["f"])("strong",null,"Personal Webpage")]),Object(s["f"])("br"),Object(s["f"])("p",{class:"card-text"},"Building a personal web page by using Vue."),Object(s["f"])("div",{class:"row justify-content-md-center mt-4"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-vuejs fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Vue")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-github fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"GitHub Page")])])])]),Object(s["f"])("div",{class:"col-md-4 align-self-center"},[Object(s["f"])("img",{src:G.a,alt:"Image",style:{width:"95%"}})])])])],-1),X=Object(s["f"])("div",{class:"container"},[Object(s["f"])("div",{class:"card mb-4"},[Object(s["f"])("div",{class:"row g-0"},[Object(s["f"])("div",{class:"col-md-8"},[Object(s["f"])("div",{class:"card-body"},[Object(s["f"])("h3",{class:"card-title"},[Object(s["f"])("strong",null,"Absorption Knight")]),Object(s["f"])("br"),Object(s["f"])("p",{class:"card-text"}," Absorption Knight is a single-player, 2D pixel action-adventure side-scrolling mobile game with a little rouge-like element. You play as the young explorer Teodoro who encounters tsunami during his adventure. To find the way home, our protagonist will fight against monsters and build close relationships with villagers on the mysterious island. Along the journey, Teodoro gradually finds the secrets behind the incredible magical power. The main story is narrated by dialogues after boss battles and between Teodoro and villagers. Players need to collect energy balls which are dropped from dead monsters as the fuel in order to launch the magical crystal. When players launch the magical crystal, Teodoro will be sent back to the original world. "),Object(s["f"])("div",{class:"row justify-content-md-center mt-4"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-unity fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Unity")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-apple fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"IOS")])]),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://github.com/wzhang68/Absorption-Knight"},"Source Code")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://docs.google.com/document/d/1DQLGOL8yS4D3yFe24zotkJTiEzg1AlEOmyXNIn4dpcU/edit?usp=sharing"},"GDD")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://www.youtube.com/watch?v=8UGlXDW61eo"},"Demo")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://csci526gameweb.wixsite.com/absorptionknight"},"Website")])])])]),Object(s["f"])("div",{class:"col-md-4 align-self-center"},[Object(s["f"])("img",{src:F.a,alt:"Image",style:{width:"95%"}})])])])],-1),q=Object(s["f"])("div",{class:"container"},[Object(s["f"])("div",{class:"card mb-4"},[Object(s["f"])("div",{class:"row g-0"},[Object(s["f"])("div",{class:"col-md-8"},[Object(s["f"])("div",{class:"card-body"},[Object(s["f"])("h3",{class:"card-title"},[Object(s["f"])("strong",null,"Movie Search -- IOS")]),Object(s["f"])("br"),Object(s["f"])("p",{class:"card-text"}," This mobile app is an extended version of Movie-Search-Web in my repository. This app is a native SwiftUI application, which allows users to view some of the trending Movies and TV shows, search for movies and TV shows of their choice and view their details. There’s also a watchlist where users can save, remove and track the TV shows and movies they’d like to watch later. The App contains 3 screens: Home, Details and Search and Watchlist. My backend is written in Node.js, and it is host on Google Cloud Platform (GCP). "),Object(s["f"])("div",{class:"row justify-content-md-center mt-4"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-apple fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"IOS")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-swift fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Swift")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-node-js fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Node.js")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"devicon-express-original colored"}),Object(s["f"])("p",{class:"text-xs"},"Express")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"devicon-googlecloud-plain"}),Object(s["f"])("p",{class:"text-xs"},"GCP")])]),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://github.com/wzhang68/Movie-Search-App-IOS"},"Source Code")])])])]),Object(s["f"])("div",{class:"col-md-4 align-self-center"},[Object(s["f"])("img",{src:E.a,alt:"Image",style:{width:"35%"}})])])])],-1),Q=Object(s["f"])("div",{class:"container"},[Object(s["f"])("div",{class:"card mb-4"},[Object(s["f"])("div",{class:"row g-0"},[Object(s["f"])("div",{class:"col-md-8"},[Object(s["f"])("div",{class:"card-body"},[Object(s["f"])("h3",{class:"card-title"},[Object(s["f"])("strong",null,"Movie Search -- Angular")]),Object(s["f"])("br"),Object(s["f"])("p",{class:"card-text"}," This is a responsive webpage that allows you to search for information regarding movies and TV shows using the TMDB API and upon selection can display results on the details page of that specific movie or TV show. Users can view popular, top-rated and trending movies and TV shows on the home page along with currently playing movies. The user will first open Home page, where the navbar contains Search Bar and user can enter the movie or TV show name and select from a list of matching movie/TV show names along with images using “autocomplete”. Selecting the movie or TV show name will lead to the details page of that movie or TV show. "),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-angular fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Angular")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-node-js fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Node.js")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"devicon-express-original colored"}),Object(s["f"])("p",{class:"text-xs"},"Express")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-bootstrap fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Bootstrap")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"devicon-googlecloud-plain"}),Object(s["f"])("p",{class:"text-xs"},"GCP")])]),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://github.com/wzhang68/Movie-Search-Web"},"Source Code")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://movie-web-angular.wl.r.appspot.com/"},"Website")])])])]),Object(s["f"])("div",{class:"col-md-4 align-self-center"},[Object(s["f"])("img",{src:Z.a,alt:"Image",style:{width:"95%"}})])])])],-1),Y=Object(s["f"])("div",{class:"container"},[Object(s["f"])("div",{class:"card mb-4"},[Object(s["f"])("div",{class:"row g-0"},[Object(s["f"])("div",{class:"col-md-8"},[Object(s["f"])("div",{class:"card-body"},[Object(s["f"])("h3",{class:"card-title"},[Object(s["f"])("strong",null,"Movie Search -- Flask")]),Object(s["f"])("br"),Object(s["f"])("p",{class:"card-text"}," This is a movie search webpage that allows you to search for information regarding movies and TV shows using the TMDB API, and the results will be displayed on cards below the search query. Upon clicking a button in the card, a modal will pop up and display more information about that selected movie/TV show. "),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-python fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Python")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"devicon-flask-original colored"}),Object(s["f"])("p",{class:"text-xs"},"Flask")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1"},[Object(s["f"])("i",{class:"fab fa-microsoft fa-2x"}),Object(s["f"])("p",{class:"text-xs"},"Azure")])]),Object(s["f"])("div",{class:"row justify-content-md-center"},[Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://github.com/wzhang68/Movie-Search-Web-Flask"},"Source Code")]),Object(s["f"])("div",{class:"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"},[Object(s["f"])("a",{class:"btn btn-outline-dark",target:"_blank",href:"https://zww-flask-app.azurewebsites.net/"},"Website")])])])]),Object(s["f"])("div",{class:"col-md-4 align-self-center"},[Object(s["f"])("img",{src:K.a,alt:"Image",style:{width:"95%"}})])])])],-1);function $(e,c){return Object(s["o"])(),Object(s["d"])("div",L,[R,X,q,Q,Y])}t("2cfb");const ee={};ee.render=$;var ce=ee,te=[{path:"/",name:"Home",component:D},{path:"/projects",name:"Projects",component:ce},{path:"/resume",name:"Resume",component:D}],se=Object(I["a"])({history:Object(I["b"])(),routes:te}),le=se;t("15f5"),t("7051");Object(s["c"])(P).use(le).mount("#app")},7323:function(e,c,t){},"73c4":function(e,c,t){},a06e:function(e,c,t){"use strict";t("73c4")},ab70:function(e,c,t){e.exports=t.p+"img/main4.40d6fe49.png"},ac6d:function(e,c,t){e.exports=t.p+"img/main3.098ba738.jpg"},ae49:function(e,c,t){e.exports=t.p+"img/main.0ec0d215.jpg"},b5cf:function(e,c,t){},c4e0:function(e,c,t){"use strict";t("b5cf")},c9ef:function(e,c,t){"use strict";t("f3c5")},f3c5:function(e,c,t){}});
//# sourceMappingURL=app.396598b9.js.map