/*! For license information please see 3901.fc62aab5.chunk.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3901],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},13094:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(33028),o=t(59740),i=t(9249),a=t(87371),l=t(45754),c=t(37687),u=t(56976),s=t(21237),d=t(60036),f=t(92080),h=t(14218),p=["dependencies","codePen"];function m(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,p),a=(0,r.Z)({},i);return t&&(a.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:a.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"7.1.1",kkt:"7.1.5",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,h.jsx)(f.Z,(0,r.Z)((0,r.Z)({},a),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:u},u),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",g=function(e){var n=(e||{}).editorUrl;return(0,h.jsxs)("div",{className:v,children:[n&&(0,h.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},x="index_markdown__hcQCp",j=t(68079),b=t(96234),y=t(7896),w="esm_navbox__Zvl4q",Z="esm_active__jkS6S",k=t(60460),S=function(e){var n,t;for(n=0;n<e.length&&!e[n];n++);for(t=e.length-1;t>=0&&!e[t];t--);return e.slice(n,t+1)},C=function(e){var n=e.markdown,t=e.headingTopOffset,r=void 0===t?100:t,o=e.routerType,i=void 0===o?"bower":o,a=(0,u.useState)(0),l=(0,b.Z)(a,2),c=l[0],s=l[1],d=(0,u.useRef)(null),f=(0,u.useMemo)((function(){var e=n.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,r=e.match(t);if(!r)return[];var o=r.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var a=[],l=0;l<o.length;l++){for(var c=o[l],u=c.level;a.length&&a[a.length-1].level>u;)a.pop();if(0!==a.length){var s=a[a.length-1].arr.slice();s[u-1]+=1,a.push({level:u,arr:s}),c.listNo=S(s).join(".")}else{var d=new Array(i).fill(0);d[u-1]+=1,a.push({level:u,arr:d}),c.listNo=S(d).join(".")}}return o}),[n]);(0,u.useEffect)((function(){f&&(d.current&&clearTimeout(d.current),d.current=setTimeout((function(){x(),document.addEventListener("scroll",g,!1)}),500))}),[f]);var p=(0,u.useCallback)((function(){var e=[];return f&&f.forEach((function(n){var t=(0,j.Z)(document.querySelectorAll("h"+n.level)).find((function(e){return e.innerText.trim()===n.text.trim()}));t&&e.push({dataId:n.text,offsetTop:t.offsetTop,listNo:n.listNo})})),e}),[f]),m=function(e){var n=document.querySelector("#"+e);n&&"number"===typeof n.offsetTop&&function(e,n,t){if(void 0===t&&(t=0),e)if("function"===typeof e.scrollTo){var r={top:n,left:t};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=n,document.documentElement.scrollLeft=t):(e.scrollTop=n,e.scrollLeft=t)}(window,n.offsetTop-r,0)},v=function(e){var n=window.location.href,t="";if("bower"===i)t=""+window.location.pathname+window.location.search+"#"+e;else if(n.includes("?title=")){var r=n.indexOf("?title=");t=n.slice(0,r)+"?title="+e}else t=n+"?title="+e;window.history.replaceState({},"",t)},g=(0,k.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=p().map((function(n){return(0,y.Z)({},n,{distanceToTop:Math.abs(e+r-n.offsetTop)})})),t=n.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,j.Z)(t)),i=n.find((function(e){return e.distanceToTop===o}));i&&(v(i.dataId.toLowerCase().replace(" ","-")),s(i.listNo))}),200),x=function(){if(window.location.hash)if("bower"===i)m(window.location.hash.replace("#",""));else{var e=window.location.href.indexOf("?title=");if(e>-1){var n=window.location.href.slice(e+7);m(n)}}};return(0,h.jsx)("div",{className:w,children:f&&f.map((function(e,n){return(0,h.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:c===e.listNo?Z:"",onClick:function(){var n=e.text.toLowerCase().replace(" ","-");m(n),v(n),s(e.listNo)},children:[e.listNo," ",e.text]},n)}))})},F=["inline","node"],N=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},O=function(e){(0,l.Z)(t,e);var n=(0,c.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(d.X2,{children:[(0,h.jsx)(d.JX,{children:(0,h.jsx)(s.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:x,components:{code:function(n){var t=n.inline,i=n.node,a=(0,o.Z)(n,F),l=a,c=l.noPreview,u=l.noScroll,s=l.bgWhite,d=l.noCode,f=l.codePen,p=l.codeSandboxOption;if(t)return(0,h.jsx)("code",(0,r.Z)({},a));var v={noPreview:c,noScroll:u,bgWhite:s,noCode:d,codePen:f,codeSandboxOption:p};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,h.jsx)("code",(0,r.Z)({},a)):(0,h.jsx)(m,{code:N(i.children),dependencies:e.dependencies,noPreview:c,noScroll:u,bgWhite:s,noCode:d,codePen:f,codeSandboxOption:p})}}})}),(0,h.jsx)(d.JX,{fixed:!0,style:{width:150},children:(0,h.jsx)(C,{markdown:this.state.mdStr,routerType:"hash"})})]}),(0,h.jsx)(g,{editorUrl:this.editorUrl})]})}}]),t}(u.Component)},43763:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var l in t)r.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},32463:function(e,n,t){"use strict";t.d(n,{JX:function(){return m.J},X2:function(){return m.X},Y8:function(){return k.Y8},Ee:function(){return k.Ee},qE:function(){return r.Z},aG:function(){return o.Z},zx:function(){return i.Z},Zb:function(){return a.Z},XZ:function(){return l.Z},UO:function(){return c.Z},Wr:function(){return u.Z},w5:function(){return s.Z},dy:function(){return d.Z},HY:function(){return f.Z},zW:function(){return M.Z},S2:function(){return h.Z},l0:function(){return p.Z},JO:function(){return v.Z},II:function(){return g.Z},aN:function(){return x.Z},v2:function(){return j.ZP},u_:function(){return b.Z},lH:function(){return y.Z},tl:function(){return w.Z},J2:function(){return Z.Z},j8:function(){return S.Z},ul:function(){return C.Z},Ph:function(){return F.Z},rs:function(){return N.Z},iA:function(){return O.Z},mQ:function(){return E.Z},gx:function(){return P.Z},jI:function(){return T.Z},Ws:function(){return _.Z}});t(56906),t(1214),t(63009);var r=t(42422),o=(t(65607),t(22404),t(25798)),i=t(41546),a=(t(47346),t(80908),t(47740)),l=t(27643),c=t(58855),u=(t(52240),t(97938)),s=(t(31462),t(41033)),d=(t(67543),t(94805)),f=(t(18120),t(68558)),h=t(26762),p=t(79011),m=t(55597),v=t(70208),g=t(54542),x=(t(68446),t(44103),t(62903)),j=t(5596),b=(t(81241),t(87011)),y=t(21347),w=(t(88769),t(78540),t(96728),t(65301)),Z=(t(28468),t(73015)),k=(t(95263),t(5156),t(77835)),S=t(89273),C=t(10707),F=t(1899),N=(t(91573),t(52140),t(32378),t(28698)),O=t(77647),E=t(45365),P=(t(25213),t(34305)),T=t(15347),_=(t(79834),t(3749),t(44474),t(70444)),M=t(84656)},69437:function(e,n,t){"use strict";t.d(n,{Z:function(){return A},J:function(){return M}});var r=t(96234),o=t(56976),i=t(44103),a=t(41546),l=t(43763),c=t.n(l),u=t(36215),s=t(51462),d=o.createContext({headerLayout:"top",headerBackground:"#fff",headerFontColor:"#000"}),f=function(){return o.useContext(d)},h=t(14218),p=function(e){void 0===e&&(e={});var n=f(),t=n.headerFontColor,r=n.headerLayout,i=(0,o.useMemo)((function(){return e.logo&&(0,h.jsx)("img",{src:e.logo,alt:e.projectName||"logo"})}),[e.logo]),a=(0,o.useMemo)((function(){return e.projectName&&(0,h.jsx)("h1",{style:"top"===r?{color:t}:{},children:e.projectName})}),[e.projectName,t]);return(0,o.useMemo)((function(){return(0,h.jsx)("div",{className:"default"===r?"uiw-admin-global-title":"uiw-admin-global-title-top",children:(0,h.jsxs)(s.rU,{to:"/",style:e.collapsed?{justifyContent:"center"}:{},children:[i,!e.collapsed&&a]})})}),[e.collapsed])};function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}var v=t(5596),g=t(90800);function x(e,n,t,r,i){return void 0===e&&(e=[]),e.map((function(e,a){var l={key:a,icon:e.icon},u=!0;return Reflect.has(e,"isAuth")&&(u=Reflect.get(e,"isAuth")),e.index||e.hideInMenu||!u||"*"===e.path?(0,h.jsx)(o.Fragment,{},a):(i&&(l.className=c()({"uiw-admin-global-sider-menu-collapsed":n})),(0,g.LX)({path:e.path},t)&&(l.active=!0),e.routes?(n&&(l.overlayProps={isOutside:!0,usePortal:!0}),(0,h.jsx)(v.ZP.SubMenu,m({},l,{text:e.name||"-",collapse:n,children:x(e.routes,n,t,r)}))):(0,h.jsx)(v.ZP.Item,m({},l,{onClick:function(){if(Reflect.has(e,"navigate")&&e.navigate){if("function"===typeof e.navigate)return void e.navigate(r);var n=new Function("return "+e.navigate)();"function"===typeof n&&n(r)}else r(e.path,{replace:!0})},text:e.name||"-"})))}))}var j=function(e){void 0===e&&(e={});var n=e,t=n.routes,r=void 0===t?[]:t,o=n.collapsed,i=(0,g.TH)(),a=(0,g.s0)(),l=i.pathname;return(0,h.jsx)(v.ZP,{theme:"dark",inlineCollapsed:!!o,style:{padding:"0 12px"},children:x(r,!!o,l,a,!0)})},b=t(32463),y=function(e){var n=e.routeMap,t=(0,g.TH)(),r=n.breadcrumb.get(t.pathname)||[];return(0,h.jsx)(b.aG,{children:null==r?void 0:r.map((function(e,n){return(0,h.jsx)(b.aG.Item,{children:e.name},n)}))})},w=t(9249),Z=t(87371);function k(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var S=["element","component","children","path"];function C(e){void 0===e&&(e=[]);var n=[];return e.forEach((function(e){var t=m({},e);if(e.routes){var r=C(t.routes);t.routes=r}if(e.path&&"*"!==e.path){var o=t.path,i=k(t,S);n.push(m({},i,{path:o,key:o}))}})),n}var F=function(){function e(n){(0,w.Z)(this,e),this.breadcrumb=new Map([]),this.flat=[],this.init(n)}return(0,Z.Z)(e,[{key:"init",value:function(e,n){var t=this;e.forEach((function(e){var r=(n||[]).concat([e]);e.routes&&t.init(e.routes,r),e.path&&"*"!==e.path&&t.breadcrumb.set(e.path,r),t.flat.push(e)}))}}]),e}(),N=function(e){return(0,h.jsx)("div",{style:{height:"100%",overflow:"auto"},children:e.children})},O=t(68079),E=["title","icon","onClick","divider","render"];function P(e){var n=e.menus,t=void 0===n?[]:n,r=e.profile,i=void 0===r?{}:r,a=e.onReloadAuth,l=e.layouts||{},c=l.headerRightvisible,u=l.updateStore,s=(0,g.s0)(),d=[{title:(0,h.jsxs)("span",{style:{fontSize:15},children:["\u8d26\u53f7 ",(null==i?void 0:i.userName)||"admin"]}),icon:"user"},{divider:!0}].concat((0,O.Z)(t),[{title:"\u5237\u65b0\u6743\u9650",icon:"reload",onClick:function(){return a()}},{divider:!0},{title:"\u9000\u51fa\u767b\u5f55",icon:"logout",onClick:function(){s("/login",{replace:!0}),sessionStorage.removeItem("token"),sessionStorage.removeItem("auth"),localStorage.removeItem("token"),localStorage.removeItem("auth")}}]),f=(0,h.jsx)("div",{style:{width:150},children:(0,h.jsx)(b.v2,{children:d.map((function(e,n){var t=e.title,r=e.icon,i=e.onClick,a=e.divider,l=e.render,c=k(e,E);return a?(0,h.jsx)(b.v2.Divider,{},n):l?(0,h.jsx)(o.Fragment,{children:l},n):(0,h.jsx)(b.v2.Item,m({text:t,icon:r},c,{onClick:i&&i}),n)}))})});return(0,h.jsx)("div",{className:"uiw-global-header-menu",children:(0,h.jsx)("span",{className:"uiw-global-header-menu",children:(0,h.jsx)(b.J2,{isOpen:!!c,onVisibleChange:function(e){return null==u?void 0:u({headerRightvisible:e})},trigger:"click",placement:"bottomRight",content:f,children:null!=i&&i.avatar?(0,h.jsx)("img",{src:i.avatar}):(0,h.jsx)(b.qE,{icon:"user",size:"default"})})})})}function T(){var e=document;return e.mozFullScreen||e.webkitIsFullScreen||e.webkitFullScreen||e.msFullScreen}var _=function(){if(!function(){var e=document;return e.fullscreenEnabled||e.mozFullScreenEnabled||e.webkitFullscreenEnabled||e.msFullscreenEnabled}())return null;var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],i=n[1];if(t){var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullScreen?a.webkitRequestFullScreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen&&a.msRequestFullscreen()}else if(T()){var l=document;l.exitFullscreen?l.exitFullscreen():l.webkitCancelFullScreen?l.webkitCancelFullScreen():l.mozCancelFullScreen?l.mozCancelFullScreen():l.msExitFullscreen&&l.msExitFullscreen()}var c=f().headerFontColor,u=function(){!T()&&t&&i(!1)};return(0,o.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u,!1)}})),(0,o.useMemo)((function(){return(0,h.jsx)("span",{onClick:function(){return i(!t)},style:{fontSize:18,marginRight:15,cursor:"pointer"},children:(0,h.jsx)(b.JO,{type:t?"shrink":"arrows-alt",color:c})})}),[t])},M=function(){var e=(0,o.useState)({headerRightvisible:!1}),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=function(e){i(m({},t,e))};return m({closeMenu:function(){return a({headerRightvisible:!1})},updateStore:a},t)},R=i.ZP.Header,I=i.ZP.Footer,L=i.ZP.Sider,z=i.ZP.Content;var A=function(e){var n=e||{},t=n.routes,l=void 0===t?[]:t,s=n.footer,f=n.projectName,m=void 0===f?"UIW Admin":f,v=n.profile,g=void 0===v?{}:v,x=n.menus,w=void 0===x?[]:x,Z=n.onReloadAuth,k=n.layouts,S=n.headerLayout,O=void 0===S?"default":S,E=n.headerBackground,T=void 0===E?"#fff":E,M=n.headerFontColor,A=void 0===M?"#000":M,J=n.menuHide,q=n.isDefaultContentStyle,X=void 0===q||q,H=(0,o.useState)(!1),U=(0,r.Z)(H,2),W=U[0],D=U[1],B=C(l),G=((0,o.useMemo)((function(){return(0,h.jsx)(I,{children:s})}),[s]),o.useMemo((function(){return(0,h.jsx)(j,{collapsed:W,routes:B})}),[JSON.stringify(B),W])),Q=o.useMemo((function(){return new F(B)}),[JSON.stringify(B)]),Y=(0,o.useMemo)((function(){return(0,h.jsxs)("div",{style:{display:"flex",justifyItems:"center",alignItems:"center"},children:[null==g?void 0:g.menuLeft,(0,h.jsx)(_,{}),(0,h.jsx)(P,{onReloadAuth:Z,profile:g,menus:w,layouts:k})]})}),[g,w,JSON.stringify(k)]),$=(0,h.jsxs)(R,{className:"uiw-admin-global-header",style:{background:T,color:A},children:[(0,h.jsxs)("div",{style:{display:"flex"},children:["top"===O&&(0,h.jsx)("div",{style:{minWidth:200},children:(0,h.jsx)(p,{collapsed:!1,projectName:m,logo:e.logo})}),!J&&(0,h.jsxs)("div",{children:[(0,h.jsx)(a.Z,{basic:!0,icon:(0,h.jsx)(b.JO,{type:W?"menu-unfold":"menu-fold",color:A}),style:{fontSize:12,marginRight:20},onClick:function(){return D(!W)}}),(0,h.jsx)(y,{routeMap:Q})]})]}),Y]});return(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(d.Provider,{value:{headerLayout:O,headerBackground:T,headerFontColor:A},children:[(0,h.jsx)(u.Z,{title:m||""}),(0,h.jsxs)(i.ZP,{style:{height:"100%"},children:["top"===O&&$,(0,h.jsxs)(i.ZP,{children:[!J&&(0,h.jsxs)(L,{collapsed:W,className:c()("uiw-admin-global-sider-menu",{}),children:["default"===O?(0,h.jsx)(p,{collapsed:W,projectName:m,logo:e.logo}):(0,h.jsx)("div",{style:{marginTop:10}}),G]}),(0,h.jsxs)(i.ZP,{children:["default"===O&&$,X?(0,h.jsx)(z,{className:"uiw-admin-global-content",children:(0,h.jsx)(N,{children:e.children})}):e.children]})]})]})]})})}},36215:function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return a}});var o=t(56976),i=t(14218);var a=function(e){return void 0===e&&(e={}),(0,o.useEffect)((function(){document.title=e.title||""}),[e.title]),(0,i.jsx)(o.Fragment,{children:o.Children.toArray(e.children).map((function(e){return o.isValidElement(e)?o.cloneElement(e,r({},e.props||{})):null}))})}},19447:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(68079),o=t(96234);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var a=t(56976),l=t(32463),c=t(90800),u=function e(n,t){return void 0===n&&(n=[]),void 0===t&&(t=[]),n.forEach((function(n){n.routes?e(n.routes,t):t.push(n)})),t},s=function(e,n){return e.find((function(e){return"/"===n.pathname&&e.index&&e.redirect?e.index:!!(n&&n.pathname&&e.path&&"/"!==n.pathname)&&(0,c.LX)({path:e.path},n.pathname)}))},d=t(14218),f=function(e){var n=e.routes,t=(0,c.TH)(),f=(0,c.s0)(),h=a.useState([]),p=(0,o.Z)(h,2),m=p[0],v=p[1],g=u(n),x=s(g,t);a.useEffect((function(){x?x&&x.redirect?f(x.redirect):s(m,t)||v((function(e){return e.concat([i({},x,{location:t})]).filter((function(e){return!!e}))})):f("/404")}),[t.pathname]),a.useMemo((function(){var e=(0,r.Z)(m).map((function(e){e.path&&((0,c.LX)({path:e.path},t.pathname)&&(e.location=t));return e}));v((function(){return(0,r.Z)(e)}))}),[t.search]);return(0,d.jsxs)("div",{className:"uiw-layout-tabs-warp",children:[(0,d.jsx)(l.mQ,{type:"card",activeKey:t.pathname,onTabClick:function(e){var n=m.find((function(n){return n.location.pathname===e}));n&&t.pathname!==e&&f(""+e+n.location.search,{state:n.location.state,replace:!0})},children:m.map((function(e,n){return(0,d.jsx)(l.mQ.Pane,{label:(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.name,m.length>1?(0,d.jsx)(l.JO,{type:"close",tagName:"span",style:{marginLeft:10},onClick:function(r){return function(e,n,r){e.stopPropagation(),e.preventDefault();var o=m.length-1,i=(0,c.LX)({path:r.path},t.pathname);if(i){var a,l=!1;o>n&&i?(a=m.find((function(e,t){return t===n+1})),l=!0):o===n&&n>0&&i?(a=m.find((function(e,t){return t===n-1})),l=!0):i&&(l=!0),l&&v((function(e){return e.filter((function(e,t){return t!==n}))})),a&&f(""+a.path+a.location.search,{state:a.location.state,replace:!0})}else v((function(e){return e.filter((function(e,t){return t!==n}))}))}(r,n,e)}}):(0,d.jsx)(a.Fragment,{})]})},e.location.pathname)}))}),(0,d.jsx)("div",{className:"uiw-layout-tabs-body",children:m.map((function(e){var n=(0,c.LX)({path:e.path},t.pathname);return(0,d.jsx)("div",{style:{display:n?"block":"none",overflow:"auto"},children:e.element},e.location.pathname)}))})]})}}}]);
//# sourceMappingURL=3901.fc62aab5.chunk.js.map