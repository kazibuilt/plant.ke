(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3845],{35809:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/legal/[slug]",function(){return e(23007)}])},60167:function(n,t,e){"use strict";e.d(t,{$:function(){return r}});var r={self:"self",container:"container"}},35348:function(n,t,e){"use strict";e.d(t,{Z:function(){return j}});var r=e(72253),o=e(14932),i=e(24043),a=e(82729),c=e(85893),l=e(45697),u=e.n(l),s=e(14141),f=e(46571),p=e(32603),d=e(45449),m=e(40475),g=e(80328),b=e(60167);function _templateObject(){var n=(0,a._)(["\n  position: relative;\n\n  ","\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,a._)(["\n  position: relative;\n\n  ","\n"]);return _templateObject1=function(){return n},n}var _=(0,s.ZP)(p.default).withConfig({componentId:"sc-39b5e040-0"})(_templateObject(),function(n){return n.entireContainerIsInteractable&&"\n    &:after {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      top: 0;\n      left: 0;\n    }\n  "}),h=s.ZP.button.withConfig({componentId:"sc-39b5e040-1"})(_templateObject1(),function(n){return n.entireContainerIsInteractable&&"\n    &:after {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      top: 0;\n      left: 0;\n    }\n  "}),FlipLettersButtonOrLink=function(n){var t=n.className,e=n.label,a=n.font,l=n.slug,u=n.underline,s=n.onClick,p=n.brackets,g=n.flipCharsAmount,j=n.interactionArea,v=n.as,O=n.href,x=n.external,k=(0,i._)(x?[f.default,{href:O}]:l?[_,{slug:l}]:[h,{}],2),L=k[0],C=k[1],Z=j===b.$.container;return(0,c.jsxs)(L,(0,o._)((0,r._)({as:v,className:t,entireContainerIsInteractable:Z},C),{onClick:function(){return s&&s()},children:[p&&(0,c.jsx)(d.Z,{symbol:"[",font:a}),(0,c.jsx)(m.Z,{label:e,font:a,underline:u,flipCharsAmount:g}),p&&(0,c.jsx)(d.Z,{symbol:"]",font:a})]}))};FlipLettersButtonOrLink.defaultProps={font:"b3",underline:!1,onClick:function(){},brackets:!1,flipCharsAmount:6,label:"",interactionArea:u().oneOf(Object.keys(b.$).map(function(n){return n})),external:!1},FlipLettersButtonOrLink.propTypes={className:u().string,onClick:u().func,slug:u().string,label:u().string.isRequired,underline:u().bool,brackets:u().bool,font:u().oneOf(Object.keys(g.g).map(function(n){return n})),external:u().bool,href:u().string};var j=FlipLettersButtonOrLink},40475:function(n,t,e){"use strict";e.d(t,{Z:function(){return _}});var r=e(24043),o=e(82729),i=e(248),a=e(85893),c=e(67294),l=e(88459),u=e(45697),s=e.n(u),f=e(14141),p=e(16430),d=e(82924),m=e(80328);function _templateObject(){var n=(0,o._)(["\n  ","\n\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    content: '';\n  }\n"]);return _templateObject=function(){return n},n}var g=(0,f.ZP)(d.Z).withConfig({componentId:"sc-d8186b59-0"})(_templateObject(),function(n){return n.underline&&"text-decoration: underline; \n    text-decoration-thickness: 1px;\n    text-underline-offset: 1px;"}),b="abcdefghijklmnopqrstuvwxyz!@\xa3$%^€|/()?&*+<>".split(""),FlipLetters=function(n){var t=n.label,e=n.font,o=n.underline,u=n.flipCharsAmount,s=(0,c.useRef)(0),f=(0,r._)((0,c.useState)(t.split("")),2),d=f[0],m=f[1],_=(0,r._)((0,c.useState)(!1),2),h=_[0],j=_[1],v=(0,r._)((0,c.useState)(0),2),O=v[0],x=v[1];return(0,c.useEffect)(function(){h||m(t.split(""))},[h,t]),(0,l.p)(function(n){var e=~~(0,p.UI)([0,85],[0,1],n);if(""!==d&&h){if(O>u){m(t.split(""));return}if(e%1==0&&s.current!==e){var _loop=function(n){var t=b[Math.floor(Math.random()*b.length)];m(function(e){return(0,i._)(e.slice(0,n)).concat([t],(0,i._)(e.slice(n+1)))})};s.current=e;for(var r=0;r<d.length;r++)_loop(r);x(function(n){return n+1})}}}),(0,a.jsx)(g,{font:e,underline:o,onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1),x(0)},tag:"span",children:h?d.map(function(n,t){return(0,a.jsx)("span",{children:n},t)}):t})};FlipLetters.defaultProps={font:"b3",underline:!1,flipCharsAmount:6,label:""},FlipLetters.propTypes={font:s().oneOf(Object.keys(m.g).map(function(n){return n})),underline:s().bool,slug:s().string,flipCharsAmount:s().number};var _=FlipLetters},23007:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return X},default:function(){return $}});var r=e(43541),o=e(72253),i=e(14932),a=e(82729),c=e(85893),l=e(67294),u=e(45697),s=e.n(u),f=e(14141),p=e(46955),d=e(21644),m=e(46716),g=e(55982),b=e(24043),_=e(14636),h=e(29094),j=e(68913),v=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],O=e(41897),x=e(35348),k=e(11333),L=e(82924);function _templateObject(){var n=(0,a._)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n\n  width: 100%;\n\n  "," {\n    right: 0;\n\n    width: ",";\n    margin: 0 auto;\n  }\n\n  "," {\n    position: sticky;\n    top: 30vh;\n    bottom: auto;\n    left: auto;\n    right: auto;\n\n    height: 100vh;\n    width: ",";\n    margin: 0;\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,a._)(["\n  transform: ",";\n  transition: 0.5s transform ",";\n\n  "," {\n    transform: translateY(0%);\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){var n=(0,a._)(["\n  max-width: 67%;\n\n  color: ",";\n\n  &:not(:last-of-type) {\n    margin-bottom: ",";\n  }\n\n  "," {\n    max-width: 77%;\n  }\n\n  "," {\n    max-width: unset;\n\n    &:not(:last-of-type) {\n      margin-bottom: ",";\n    }\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){var n=(0,a._)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 0 ",";\n\n  text-align: left;\n\n  "," {\n    grid-gap: 0 ",";\n  }\n\n  "," {\n    grid-gap: 0 ",";\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){var n=(0,a._)(["\n  padding-top: ",";\n"]);return _templateObject4=function(){return n},n}function _templateObject5(){var n=(0,a._)(["\n  text-decoration: underline;\n"]);return _templateObject5=function(){return n},n}function _templateObject6(){var n=(0,a._)(["\n  margin: "," auto 0;\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return _templateObject6=function(){return n},n}function _templateObject7(){var n=(0,a._)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: ",";\n\n  width: max-content;\n  padding: "," "," ",";\n  margin: 0 auto;\n\n  background-color: var(--color-white);\n  border-radius: ",";\n\n  "," {\n    padding: "," ",";\n  }\n\n  "," {\n    display: none;\n  }\n"]);return _templateObject7=function(){return n},n}var C=f.ZP.aside.withConfig({componentId:"sc-34a970f0-0"})(_templateObject(),g.qk.s,(0,m.BT)(46),g.qk.m,(0,m.hl)(38)),Z=(0,f.ZP)(k.default).withConfig({componentId:"sc-34a970f0-1"})(_templateObject1(),function(n){return n.openTableOfContents?"translateY(0%)":"translateY(200%)"},m.Lj.easeOutExpo,g.qk.m),w=f.ZP.li.withConfig({componentId:"sc-34a970f0-2"})(_templateObject2(),function(n){return n.active?"var(--color-black)":"var(--color-mediumGrey)"},(0,m.o0)(16),g.qk.s,g.qk.m,(0,m.o0)(8)),y=f.ZP.button.withConfig({componentId:"sc-34a970f0-3"})(_templateObject3(),(0,m.EV)(2),g.qk.s,(0,m.BT)(2),g.qk.m,(0,m.hl)(2)),P=f.ZP.ul.withConfig({componentId:"sc-34a970f0-4"})(_templateObject4(),(0,m.o0)(14)),q=(0,f.ZP)(L.Z).withConfig({componentId:"sc-34a970f0-5"})(_templateObject5()),I=(0,f.ZP)(x.Z).withConfig({componentId:"sc-34a970f0-6"})(_templateObject6(),(0,m.o0)(30),g.qk.m),S=f.ZP.button.withConfig({componentId:"sc-34a970f0-7"})(_templateObject7(),(0,m.o0)(24),(0,m.o0)(8),(0,m.EV)(4.5),(0,m.o0)(9),m.dG,g.qk.s,(0,m.o0)(9),(0,m.BT)(4.5),g.qk.m),LegalAside=function(n){var t=n.body,e=n.sectionsList,r=(0,j.v)().scrollY,o=(0,h.Z)().height/2,i=(0,_.Z)(g.t2.m),a=(0,O.Z)("global"),u=(0,b._)((0,l.useState)(!1),2),s=u[0],f=u[1],p=(0,b._)((0,l.useState)(0),2),d=p[0],m=p[1],x=(null==t?void 0:t.map(function(n){return n.title}))||[],k=(0,l.useCallback)(function(n){window.scrollTo({top:e.current[n]-o+1,behavior:"smooth"})},[e,o]);return(0,l.useEffect)(function(){r.onChange(function(n){for(var t=0;t<e.current.length;t++)n+o>e.current[t]&&m(t)})},[r,e,o]),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{onClick:function(){return f(!0)},children:(0,c.jsx)(L.Z,{font:"b3",tag:"span",children:a("openTableOfContents")})}),(0,c.jsxs)(Z,{top:"1",bottom:i?"1":"-1",borderRadius:"0px",openTableOfContents:s,children:[(0,c.jsx)(P,{children:x.map(function(n,t){return(0,c.jsx)(w,{active:d===t,children:(0,c.jsxs)(y,{onClick:function(){return k(t)},children:[(0,c.jsxs)(L.Z,{font:"b3",tag:"span",children:[v[t],"."]}),(0,c.jsx)(q,{font:"b3",tag:"h4",children:n})]})},n)})}),(0,c.jsx)(I,{label:a("close"),onClick:function(){return f(!1)},brackets:!0})]})]})};LegalAside.propTypes={body:s().array.isRequired};var T=e(73460),B=e(77159),R=e(24013),E=e(16744),A=e(62132);function LegalBlock_templateObject(){var n=(0,a._)(["\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return LegalBlock_templateObject=function(){return n},n}function LegalBlock_templateObject1(){var n=(0,a._)(["\n  margin-bottom: ",";\n\n  text-transform: uppercase;\n\n  "," {\n    max-width: 66%;\n  }\n"]);return LegalBlock_templateObject1=function(){return n},n}var H=f.ZP.article.withConfig({componentId:"sc-c171ebe0-0"})(LegalBlock_templateObject(),(0,m.o0)(55)),F=(0,f.ZP)(L.Z).withConfig({componentId:"sc-c171ebe0-1"})(LegalBlock_templateObject1(),(0,m.o0)(16),g.qk.m),LegalBlock=function(n){var t=n.content,e=n.title,r=n._editable,a=n.index,u=n.setSlideRefs,s=(0,B.Z)(),f=(0,b._)((0,T.Z)(),2),p=f[0],d=f[1],m=(0,E.S)(r);return(0,l.useEffect)(function(){if(s){var n=(0,R.X)();u((null==d?void 0:d.top)+n,a)}},[s,d,a,u]),(0,c.jsxs)(H,(0,i._)((0,o._)({},m),{ref:p,children:[(0,c.jsxs)(F,{font:"h8",tag:"h2",children:[v[a],". ",e]}),(0,c.jsx)("div",{children:(0,c.jsx)(A.Z,{text:t,font:"p3"})})]}))};LegalBlock.defaultProps={_editable:"",setSlideRefs:function(){}},LegalBlock.propTypes={content:s().object.isRequired,title:s().string.isRequired,_editable:s().string.isRequired,index:s().number.isRequired,setSlideRefs:s().func.isRequired};var N=e(22138),M=e(54831);function LegalHeader_templateObject(){var n=(0,a._)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: ",";\n  margin-bottom: ",";\n\n  text-align: center;\n\n  "," {\n    padding-top: ",";\n    margin-bottom: ",";\n  }\n"]);return LegalHeader_templateObject=function(){return n},n}function LegalHeader_templateObject1(){var n=(0,a._)(["\n  margin-bottom: ",";\n"]);return LegalHeader_templateObject1=function(){return n},n}function LegalHeader_templateObject2(){var n=(0,a._)(["\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 0 ",";\n  width: max-content;\n  margin: 0 auto;\n"]);return LegalHeader_templateObject2=function(){return n},n}var Y=f.ZP.section.withConfig({componentId:"sc-4373eff3-0"})(LegalHeader_templateObject(),(0,m.o0)(136),(0,m.o0)(56),g.qk.m,(0,m.o0)(173),(0,m.o0)(60)),D=(0,f.ZP)(L.Z).withConfig({componentId:"sc-4373eff3-1"})(LegalHeader_templateObject1(),(0,m.o0)(20)),G=f.ZP.div.withConfig({componentId:"sc-4373eff3-2"})(LegalHeader_templateObject2(),(0,m.o0)(45)),LegalHeader=function(n){var t=n.name,e=n.createdDate,r=(0,O.Z)("global"),o=(0,b._)((0,l.useState)(""),2),i=o[0],a=o[1];(0,l.useEffect)(function(){a((0,N.L)(e))},[e]);var u=(0,l.useMemo)(function(){return[r("legals"),i]},[r,i]);return(0,c.jsxs)(Y,{children:[(0,c.jsx)(D,{font:"h2",tag:"h1",children:t}),(0,c.jsx)(G,{children:u.map(function(n){return(0,c.jsx)(L.Z,{font:"b3",tag:"span",children:(0,c.jsx)(M.Z,{label:n})},n)})})]})};function LegalPage_templateObject(){var n=(0,a._)(["\n  padding: 0 ",";\n\n  "," {\n    padding: 0 ",";\n  }\n\n  "," {\n    display: grid;\n    grid-template-columns: "," ",";\n    grid-gap: 0 ",";\n    padding: 0 ",";\n  }\n"]);return LegalPage_templateObject=function(){return n},n}LegalHeader.propTypes={name:s().string.isRequired,createdDate:s().string.isRequired};var V=f.ZP.div.withConfig({componentId:"sc-ce1838d1-0"})(LegalPage_templateObject(),(0,m.EV)(2),g.qk.s,(0,m.BT)(19),g.qk.m,(0,m.hl)(38),(0,m.hl)(72),(0,m.hl)(12),(0,m.hl)(4)),LegalPage=function(n){var t=n.name,e=n.content,r=n.published_at,a=e.seo,u=e.body,s=void 0===u?[]:u,f=(0,l.useRef)([]),m=(0,l.useCallback)(function(n,t){return f.current[t]=n},[]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z,(0,o._)({},(0,p.Z2)(a))),(0,c.jsx)(LegalHeader,{name:t,createdDate:r}),(0,c.jsxs)(V,{children:[(0,c.jsx)(LegalAside,{body:s,sectionsList:f}),(0,c.jsx)("section",{children:null==s?void 0:s.map(function(n,t){return(0,l.createElement)(LegalBlock,(0,i._)((0,o._)({},n),{index:t,setSlideRefs:m,key:n._uid}))})})]})]})};LegalPage.propTypes={content:s().object.isRequired};var X=!0,$=(0,r.sU)(LegalPage)},88459:function(n,t,e){"use strict";e.d(t,{p:function(){return useAnimationFrame}});var r=e(30404),o=e(67294),i=e(16014);function useAnimationFrame(n){let t=(0,o.useRef)(0),{isStatic:e}=(0,o.useContext)(i._);(0,o.useEffect)(()=>{if(e)return;let provideTimeSinceStart=({timestamp:e,delta:r})=>{t.current||(t.current=e),n(e-t.current,r)};return r.Z_.update(provideTimeSinceStart,!0),()=>r.qY.update(provideTimeSinceStart)},[n])}}},function(n){n.O(0,[8794,5180,7819,9050,9774,2888,179],function(){return n(n.s=35809)}),_N_E=n.O()}]);