(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1843],{56354:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/mission",function(){return e(71356)}])},71356:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return nk},default:function(){return nw}});var i=e(43541),o=e(72253),r=e(85893),a=e(45697),c=e.n(a),s=e(16744),l=e(21644),u=e(14932),p=e(24043),d=e(82729),f=e(73460),m=e(12560),h=e(14141),g=e(40877),b=e(54831),j=e(82924),v=e(46716),_=e(55982),x=e(68913),C=e(80578),y=e(78445);function _templateObject(){var n=(0,d._)(["\n  position: absolute;\n  top: ",";\n\n  width: 100%;\n\n  overflow: hidden;\n  background-color: var(--color-richBlack);\n\n  "," {\n    top: ",";\n  }\n\n  "," {\n    top: ",";\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,d._)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  height: 100svh;\n\n  transform-origin: center;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: ",";\n    background: linear-gradient(\n      360deg,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 0) 100%\n    );\n  }\n\n  "," {\n    height: calc(var(--vh, 1vh) * 150);\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){var n=(0,d._)(["\n  position: sticky;\n  top: 0;\n  bottom: 0;\n\n  width: 100%;\n"]);return _templateObject2=function(){return n},n}var O=h.ZP.div.withConfig({componentId:"sc-4f8c47d6-0"})(_templateObject(),(0,v.EV)(55),_.qk.s,(0,v.BT)(55),_.qk.m,(0,v.hl)(55)),k=(0,h.ZP)(m.m.div).withConfig({componentId:"sc-4f8c47d6-1"})(_templateObject1(),(0,v.o0)(200),_.qk.s),w=h.ZP.div.withConfig({componentId:"sc-4f8c47d6-2"})(_templateObject2()),useBackgroundImage=function(n){var t=n.scrollDistance,e=(0,x.v)().scrollY;return{opacity:(0,C.H)(e,[0,t],[1,.15]),y:(0,C.H)(e,[t,t+750],[0,-250])}},StickyHeroBackground=function(n){var t=n.scrollDistance,e=n.image,i=useBackgroundImage({scrollDistance:t}),o=i.opacity,a=i.y;return(0,r.jsxs)(O,{children:[(0,r.jsx)(k,{style:{opacity:o,y:a},children:(0,r.jsx)(y.Z,{asset:e,fit:"cover",priority:!0})}),(0,r.jsx)(w,{})]})};function StickyHero_templateObject(){var n=(0,d._)(["\n  position: relative;\n  z-index: 1;\n\n  height: 120vh;\n  height: 120svh;\n\n  mix-blend-mode: difference;\n\n  "," {\n    height: 160vh;\n    height: 160svh;\n  }\n"]);return StickyHero_templateObject=function(){return n},n}function StickyHero_templateObject1(){var n=(0,d._)(["\n  position: sticky;\n  top: ",";\n\n  display: grid;\n  gap: ",";\n  padding: "," 0 ",";\n\n  "," {\n    padding: "," 0 ",";\n  }\n\n  "," {\n    padding: "," 0 ",";\n  }\n"]);return StickyHero_templateObject1=function(){return n},n}function StickyHero_templateObject2(){var n=(0,d._)(["\n  width: max-content;\n  padding: 0 ",";\n  margin: 0 auto;\n\n  color: var(--color-white);\n  text-align: center;\n\n  br {\n    display: block;\n  }\n"]);return StickyHero_templateObject2=function(){return n},n}function _templateObject3(){var n=(0,d._)(["\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 0 ",";\n\n  width: max-content;\n  margin: 0 auto;\n\n  color: var(--color-white);\n\n  "," {\n    grid-gap: 0 ",";\n  }\n\n  "," {\n    grid-gap: 0 ",";\n  }\n"]);return _templateObject3=function(){return n},n}StickyHeroBackground.defaultProps={},StickyHeroBackground.propTypes={scrollDistance:c().number,image:c().object};var P=h.ZP.section.withConfig({componentId:"sc-6582e70d-0"})(StickyHero_templateObject(),_.qk.s),Z=(0,h.ZP)(m.m.div).withConfig({componentId:"sc-6582e70d-1"})(StickyHero_templateObject1(),(0,v.o0)(-48),(0,v.o0)(15),(0,v.o0)(192),(0,v.o0)(72),_.qk.s,(0,v.BT)(21),(0,v.BT)(17),_.qk.m,(0,v.hl)(22),(0,v.hl)(17)),I=(0,h.ZP)(m.m.div).withConfig({componentId:"sc-6582e70d-2"})(StickyHero_templateObject2(),(0,v.EV)(2)),M=h.ZP.div.withConfig({componentId:"sc-6582e70d-3"})(_templateObject3(),(0,v.o0)(60),_.qk.s,(0,v.o0)(63),_.qk.m,(0,v.o0)(65)),StickyHero=function(n){var t=n.title,e=n.tags,i=n.image,a=n.containerSpread,c=(0,p._)((0,f.Z)(),2),s=c[0],l=c[1].height,d=(0,g.Z)({sentence:t,fontItalic:"h1b",font:"h1",fontBold:"h5b"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,(0,u._)((0,o._)({ref:s},a),{children:(0,r.jsxs)(Z,{children:[(0,r.jsx)(I,{children:d}),(0,r.jsx)(M,{children:e.map(function(n){var t=n.label;return(0,r.jsx)(j.Z,{font:"b3",tag:"span",children:(0,r.jsx)(b.Z,{label:t})},t)})})]})})),(0,r.jsx)(StickyHeroBackground,{scrollDistance:l/3,image:i})]})};StickyHero.propTypes={title:c().oneOfType([c().string,c().object]),tags:c().arrayOf(c().object),image:c().object,containerSpread:c().object};var B=e(77159),S=e(29094),q=e(70024),T=e(87712),H=e(41897),A=e(32603),V=e(53311),E=e(62132),L=e(80328);function MissionIntro_templateObject(){var n=(0,d._)(["\n  position: relative;\n\n  margin: 0 "," ",";\n  text-align: center;\n\n  color: var(--color-white);\n\n  opacity: ",";\n  transition: opacity 0.4s ",";\n\n  "," {\n    "," {\n      margin: 0 "," ",";\n    }\n  }\n\n  "," {\n    margin: 0 "," ",";\n  }\n\n  h2 {\n    max-width: 23ch;\n    display: inline;\n  }\n\n  p {\n    padding: 0 ",";\n\n    &:first-of-type {\n      margin-top: ",";\n    }\n\n    &:not(:last-of-type) {\n      margin-bottom: ",";\n    }\n\n    ",";\n\n    .hoverText {\n      color: var(--color-phosphor);\n    }\n\n    "," {\n      margin-right: 0;\n    }\n  }\n"]);return MissionIntro_templateObject=function(){return n},n}function MissionIntro_templateObject1(){var n=(0,d._)(["\n  position: relative;\n\n  padding: "," ",";\n  margin-top: ",";\n  display: inline-block;\n\n  background-color: var(--color-phosphor);\n  color: var(--color-black);\n  border-radius: ",";\n\n  "," {\n    padding: "," "," ",";\n    margin-top: ",";\n  }\n"]);return MissionIntro_templateObject1=function(){return n},n}var D=h.ZP.article.withConfig({componentId:"sc-cb94aec7-0"})(MissionIntro_templateObject(),(0,v.EV)(2),(0,v.o0)(64),function(n){return n.isHovered?0:1},v.Lj.easeExpOut,_.qk.s,_.qk.s,(0,v.BT)(21.5),(0,v.o0)(64),_.qk.m,(0,v.hl)(48),(0,v.o0)(72),(0,v.hl)(5),(0,v.o0)(32),(0,v.o0)(12),L.g.p1,_.qk.s),N=(0,h.ZP)(A.default).withConfig({componentId:"sc-cb94aec7-1"})(MissionIntro_templateObject1(),(0,v.o0)(9),(0,v.o0)(55),(0,v.o0)(24),v.dG,_.qk.m,(0,v.o0)(8),(0,v.o0)(63),(0,v.o0)(9),(0,v.o0)(32)),MissionIntro=function(n){var t=n.richText,e=n.containerSpread,i=(0,H.Z)("global"),a=(0,p._)((0,f.Z)(),2),c=a[0],s=a[1].top,l=(0,S.Z)().height,d=(0,q.b9)(T.Oj),m=(0,B.Z)();return(0,x.v)().scrollY.onChange(function(n){m&&(n+l<s?d(T.np.default):d(T.np.black))}),(0,r.jsxs)(D,(0,u._)((0,o._)({ref:c},e),{children:[(0,r.jsx)(E.Z,{text:t,tagHeading:"h2",font:"h3",fontItalic:"h3b",fontBold:"h8",boldClassName:"hoverText"}),(0,r.jsxs)(N,{slug:"clothing",children:[(0,r.jsx)(j.Z,{font:"b3",tag:"span",children:i("start")}),(0,r.jsx)(V.Z,{color:"white",hoverColor:"white"})]})]}))};MissionIntro.propTypes={pillarData:c().object,pillarHover:c().object};var R=e(11010),F=e(248),z=e(70655),G=e(67294),K=e(14257),Y=e(31632),$=e(65820),J=e(51915),X=e(87560),Q=e(2881),U=e(75179),W=e(32609),nn=e(11333),nt=e(61117);function PillarButton_templateObject(){var n=(0,d._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n\n  border-radius: 50%;\n"]);return PillarButton_templateObject=function(){return n},n}function PillarButton_templateObject1(){var n=(0,d._)(["\n  ",";\n"]);return PillarButton_templateObject1=function(){return n},n}function PillarButton_templateObject2(){var n=(0,d._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25%;\n  height: 25%;\n\n  transform: rotate(90deg);\n\n  pointer-events: none;\n\n  filter: ",";\n\n  "," {\n    transform: rotate(0deg);\n  }\n"]);return PillarButton_templateObject2=function(){return n},n}function PillarButton_templateObject3(){var n=(0,d._)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  transform: rotate(90deg);\n  transform-origin: center;\n\n  "," {\n    transform: rotate(0);\n  }\n"]);return PillarButton_templateObject3=function(){return n},n}function _templateObject4(){var n=(0,d._)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  ","\n\n  color: var(--color-white);\n  text-align: center;\n\n  pointer-events: none;\n\n  "," {\n    ","\n  }\n\n  "," {\n    ","\n  }\n"]);return _templateObject4=function(){return n},n}var ne=(0,h.iv)(PillarButton_templateObject()),ni=h.ZP.button.withConfig({componentId:"sc-c2ad9e46-0"})(PillarButton_templateObject1(),ne),no=(0,h.ZP)(y.Z).withConfig({componentId:"sc-c2ad9e46-1"})(PillarButton_templateObject2(),function(n){var t=n.$activeIndex,e=n.index,i=n.isClicked;return t!==e&&i?"invert(100%)":"invert(0%)"},_.qk.s),nr=(0,h.ZP)(m.m.span).withConfig({componentId:"sc-c2ad9e46-2"})(PillarButton_templateObject3(),_.qk.s),na=(0,h.ZP)(j.Z).withConfig({componentId:"sc-c2ad9e46-3"})(_templateObject4(),function(n){return"top"===n.position?"top: -45%;":"bottom: -45%;"},_.qk.s,function(n){return"top"===n.position?"top: -50%;":"bottom: -50%;"},_.qk.m,function(n){return"top"===n.position?"top: -30%;":"bottom: -30%;"}),PillarButton=function(n){var t=n.index,e=n.activeIndex,i=n.icons,o=n.isHovered,a=n.getActiveIndexInView,c=n.titles,s=n.position,l=n.handleOnClick,u=n.handleOnHover,p=n.handleMouseLeave,d=(0,G.useRef)(),f=(0,nt.Y)(d);return(0,G.useEffect)(function(){e===t&&a(f)},[a,e,t,f]),(0,r.jsxs)(ni,{onClick:function(){return l(t)},onMouseOver:function(){return u(t)},onMouseLeave:function(){return p()},ref:d,children:[(0,r.jsx)(no,{asset:i[t],index:t,$activeIndex:e,isClicked:o,fit:"contain"}),(0,r.jsx)($.M,{children:(e===t||-1===e)&&(0,r.jsx)(nr,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.3}},transition:{opacity:{duration:1,delay:.3,ease:Y.M4},default:{duration:0}},children:(0,r.jsx)(na,{tag:"span",font:"b2",position:s,children:c[t]})})})]})};PillarButton.defaultProps={handleOnClick:function(){},handleOnHover:function(){},handleMouseLeaver:function(){},getActiveIndexInView:function(){}},PillarButton.propTypes={index:c().number,activeIndex:c().number,icons:c().arrayOf(c().object),isHovered:c().bool,getActiveIndexInView:c().func,titles:c().arrayOf(c().string),position:c().oneOf(["top","bottom"]),handleOnClick:c().func,handleOnHover:c().func,handleMouseLeave:c().func};var nc={mobile:{viewBox:"0 0 196.87 606",path:"M166.67 111.32c0-12 8-22.22 16.43-30.78A47.37 47.37 0 1 0 117 82c8.53 8 16.52 17.83 16.52 29.49s-7.93 21.46-16.39 29.4a47.38 47.38 0 0 0-.07 69c8.49 8 16.46 17.89 16.46 29.56s-8 21.56-16.46 29.56a47.39 47.39 0 0 0 .4 69.35c8.34 7.67 16.06 17.29 16.06 28.63s-7.72 20.95-16.06 28.62A47.39 47.39 0 0 0 117 465c8.49 8 16.46 17.89 16.46 29.56v9.77c0 5.81-3.82 10.85-8.77 13.9-5.78 3.55-13.22 4.41-18.75.48l-2.86-2c-5.95-4.23-8.35-11.73-8.35-19a47.25 47.25 0 0 0-15.6-35.13c-8.52-7.71-16.43-17.42-16.43-28.91s7.91-21.2 16.43-28.92a47.35 47.35 0 0 0-.08-70.33c-8.49-7.65-16.35-17.3-16.35-28.73s7.86-21.08 16.35-28.73a47.35 47.35 0 0 0 .08-70.33c-8.52-7.72-16.43-17.43-16.43-28.92s7.91-21.2 16.43-28.91a47.37 47.37 0 1 0-65.62-2C22 155.38 30 165.64 30 177.67S22 200 13.53 208.56a47.39 47.39 0 0 0 .08 66.44C22 283.48 30 293.68 30 305.65s-8 22.17-16.42 30.7a47.39 47.39 0 0 0-.08 66.39C22 411.33 30 421.6 30 433.63s-8 22.29-16.47 30.89a47.38 47.38 0 0 0 33.84 80.53c1.48 0 2.93-.07 4.37-.2 13.31-1.22 27.9-1.68 38.51 6.45 7.54 5.79 11.51 14.89 14.82 23.8a47.38 47.38 0 1 0 78.09-49.81c-8.43-8.51-16.49-18.72-16.49-30.71s8.06-22.19 16.49-30.71a47.38 47.38 0 0 0-.39-67.06c-8.29-8.18-16.1-18.11-16.1-29.76s7.8-21.59 16.1-29.77a47.38 47.38 0 0 0 .39-67.06c-8.43-8.52-16.49-18.73-16.49-30.71s8.06-22.2 16.49-30.71a47.38 47.38 0 0 0 .07-66.6c-8.46-8.58-16.56-18.84-16.56-30.88Z",circleRadius:47.13,mask:"M166.67 111.32c0-12 8-22.22 16.43-30.78A47.37 47.37 0 1 0 117 82c8.53 8 16.52 17.83 16.52 29.49s-7.93 21.46-16.39 29.4a47.38 47.38 0 0 0-.07 69c8.49 8 16.46 17.89 16.46 29.56s-8 21.56-16.46 29.56a47.39 47.39 0 0 0 .4 69.35c8.34 7.67 16.06 17.29 16.06 28.63s-7.72 20.95-16.06 28.62A47.39 47.39 0 0 0 117 465c8.49 8 16.46 17.89 16.46 29.56v9.77c0 5.81-3.82 10.85-8.77 13.9-5.78 3.55-13.22 4.41-18.75.48l-2.86-2c-5.95-4.23-8.35-11.73-8.35-19a47.25 47.25 0 0 0-15.6-35.13c-8.52-7.71-16.43-17.42-16.43-28.91s7.91-21.2 16.43-28.92a47.35 47.35 0 0 0-.08-70.33c-8.49-7.65-16.35-17.3-16.35-28.73s7.86-21.08 16.35-28.73a47.35 47.35 0 0 0 .08-70.33c-8.52-7.72-16.43-17.43-16.43-28.92s7.91-21.2 16.43-28.91a47.37 47.37 0 1 0-65.62-2C22 155.38 30 165.64 30 177.67S22 200 13.53 208.56a47.39 47.39 0 0 0 .08 66.44C22 283.48 30 293.68 30 305.65s-8 22.17-16.42 30.7a47.39 47.39 0 0 0-.08 66.39C22 411.33 30 421.6 30 433.63s-8 22.29-16.47 30.89a47.38 47.38 0 0 0 33.84 80.53c1.48 0 2.93-.07 4.37-.2 13.31-1.22 27.9-1.68 38.51 6.45 7.54 5.79 11.51 14.89 14.82 23.8a47.38 47.38 0 1 0 78.09-49.81c-8.43-8.51-16.49-18.72-16.49-30.71s8.06-22.19 16.49-30.71a47.38 47.38 0 0 0-.39-67.06c-8.29-8.18-16.1-18.11-16.1-29.76s7.8-21.59 16.1-29.77a47.38 47.38 0 0 0 .39-67.06c-8.43-8.52-16.49-18.73-16.49-30.71s8.06-22.2 16.49-30.71a47.38 47.38 0 0 0 .07-66.6c-8.46-8.58-16.56-18.84-16.56-30.88Z",targets:[{x:149.61,y:47.13},{x:149.61,y:175.43},{x:149.61,y:303},{x:149.61,y:430.66},{x:149.61,y:558.87},{x:47.13,y:113.67},{x:47.13,y:241.32},{x:47.13,y:368.98},{x:47.13,y:496.96}]},desktop:{viewBox:"0 0 688 224",path:"M126,34.2c-13.57,0-25.15-9.1-34.84-18.6a53.62,53.62,0,1,0,1.67,74.86c9-9.65,20.19-18.69,33.39-18.69s24.29,9,33.29,18.55a53.62,53.62,0,0,0,78.15.08c9.05-9.62,20.25-18.63,33.46-18.63s24.4,9,33.46,18.63a53.62,53.62,0,0,0,78.5-.46c8.69-9.44,19.58-18.17,32.41-18.17s23.72,8.73,32.41,18.17a53.64,53.64,0,0,0,78.5.46c9.06-9.62,20.25-18.63,33.46-18.63h11.06c6.58,0,12.29,4.31,15.73,9.91,4,6.55,5,15,.55,21.24l-2.3,3.23c-4.79,6.74-13.27,9.46-21.54,9.46a53.49,53.49,0,0,0-39.77,17.65c-8.73,9.65-19.72,18.6-32.73,18.6s-24-9-32.73-18.6a53.63,53.63,0,0,0-79.62.09c-8.66,9.61-19.59,18.51-32.52,18.51s-23.86-8.9-32.52-18.51a53.63,53.63,0,0,0-79.62-.09c-8.73,9.65-19.72,18.6-32.73,18.6s-24-9-32.73-18.6a53.63,53.63,0,1,0-2.24,74.28c9.73-9.53,21.34-18.68,35-18.68s25.24,9.15,35,18.68a53.63,53.63,0,0,0,75.15-.09c9.65-9.5,21.2-18.59,34.75-18.59s25.1,9.09,34.75,18.59a53.63,53.63,0,0,0,75.15.09c9.73-9.53,21.35-18.68,35-18.68s25.24,9.15,35,18.68A53.63,53.63,0,0,0,617,169.24c0-1.67-.08-3.32-.22-5-1.38-15.06-1.9-31.59,7.3-43.59,6.55-8.54,16.85-13,26.95-16.78a53.63,53.63,0,1,0-56.39-88.4C585,25.07,573.44,34.2,559.87,34.2s-25.12-9.13-34.76-18.68A53.62,53.62,0,0,0,449.2,16c-9.27,9.39-20.51,18.23-33.7,18.23S391.07,25.36,381.8,16a53.62,53.62,0,0,0-75.91-.45c-9.64,9.55-21.2,18.68-34.76,18.68S246,25.07,236.36,15.52A53.64,53.64,0,0,0,161,15.44C151.27,25,139.65,34.2,126,34.2Z",circleRadius:53.627,mask:"M53.6269 0.759769C68.1097 0.759769 81.2381 6.55423 90.8219 15.9524C100.515 25.4576 112.222 34.6954 126.013 34.6954C139.868 34.6954 151.615 25.3755 161.325 15.7995C170.918 6.33954 184.09 0.501966 198.627 0.501966C213.204 0.501965 226.409 6.37204 236.008 15.8785C245.651 25.4276 257.34 34.6953 271.127 34.6953C284.913 34.6953 296.603 25.4276 306.245 15.8785C315.845 6.37204 329.05 0.50196 343.627 0.501959C358.427 0.501959 371.814 6.55355 381.448 16.3186C390.717 25.7142 402.09 34.6953 415.499 34.6953C428.908 34.6953 440.282 25.7136 449.551 16.3175C459.186 6.55195 472.572 0.500001 487.373 0.5C501.951 0.499999 515.157 6.37089 524.757 15.8785C534.398 25.4277 546.087 34.6953 559.873 34.6953C573.659 34.6953 585.348 25.4277 594.99 15.8785C604.589 6.37089 617.795 0.50001 632.373 0.500009C661.714 0.500008 685.5 24.2857 685.5 53.627C685.5 76.4696 671.083 95.9464 650.851 103.453C640.762 107.195 630.332 111.729 623.686 120.398C614.349 132.576 614.901 149.293 616.277 164.335C616.424 165.949 616.5 167.584 616.5 169.236C616.5 198.578 592.714 222.363 563.373 222.363C548.897 222.363 535.775 216.574 526.192 207.184C516.46 197.648 504.714 188.364 490.873 188.364C477.032 188.364 465.286 197.648 455.554 207.184C445.971 216.575 432.849 222.363 418.373 222.363C403.852 222.363 390.693 216.538 381.103 207.096C371.447 197.59 359.765 188.364 346 188.364C332.235 188.364 320.553 197.59 310.897 207.096C301.307 216.538 288.148 222.363 273.627 222.363C259.151 222.363 246.029 216.575 236.446 207.185C226.715 197.648 214.968 188.364 201.127 188.364C187.285 188.364 175.539 197.648 165.808 207.185C156.225 216.575 143.102 222.363 128.627 222.363C99.2857 222.363 75.4999 198.578 75.4999 169.236C75.4999 139.895 99.2857 116.109 128.627 116.109C144.254 116.109 158.305 122.856 168.026 133.596C176.769 143.255 187.888 152.364 201.127 152.364C214.365 152.364 225.485 143.255 234.228 133.596C243.949 122.856 258 116.109 273.627 116.109C289.299 116.109 303.386 122.895 313.111 133.69C321.781 143.314 332.837 152.364 346 152.364C359.163 152.364 370.22 143.314 378.889 133.69C388.614 122.895 402.701 116.109 418.373 116.109C434 116.109 448.051 122.856 457.773 133.597C466.515 143.255 477.635 152.364 490.873 152.364C504.111 152.364 515.231 143.255 523.974 133.597C533.695 122.856 547.746 116.109 563.373 116.109C571.724 116.109 580.397 113.363 585.315 106.445L587.618 103.205C592.224 96.727 591.182 88.0775 587.089 81.4223C583.584 75.7244 577.732 71.2659 570.926 71.2659H559.873C546.438 71.2659 535.114 80.4302 526.046 90.0537C516.357 100.336 502.615 106.754 487.373 106.754C471.908 106.754 457.986 100.146 448.277 89.5986C439.572 80.143 428.56 71.2659 415.501 71.2659C402.441 71.2659 391.429 80.1435 382.724 89.5997C373.015 100.148 359.093 106.756 343.627 106.756C328.384 106.756 314.641 100.337 304.952 90.0537C295.885 80.4301 284.561 71.2659 271.127 71.2659C257.692 71.2659 246.369 80.4301 237.302 90.0537C227.613 100.337 213.87 106.756 198.627 106.756C183.346 106.756 169.573 100.305 159.88 89.9772C150.875 80.3815 139.604 71.2659 126.233 71.2659C112.802 71.2659 101.496 80.4596 92.4775 90.1238C82.7795 100.517 68.9623 107.014 53.627 107.014C24.2858 107.014 0.500001 83.2279 0.5 53.8867C0.499999 24.5455 24.2857 0.759771 53.6269 0.759769Z",targets:[{x:53.6269,y:53.8867},{x:198.627,y:53.6289},{x:343.627,y:53.6289},{x:487.627,y:53.6269},{x:632.627,y:53.6269},{x:128.627,y:169.236},{x:273.627,y:169.236},{x:418.627,y:168.627},{x:563.627,y:168.627}]}};function Pillars_templateObject(){var n=(0,d._)(["\n  position: relative;\n"]);return Pillars_templateObject=function(){return n},n}function Pillars_templateObject1(){var n=(0,d._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n\n  "," {\n    display: block;\n    align-items: unset;\n    justify-content: unset;\n  }\n"]);return Pillars_templateObject1=function(){return n},n}function Pillars_templateObject2(){var n=(0,d._)(["\n  width: 100%;\n  height: ",";\n\n  overflow: visible;\n  fill: none;\n\n  "," {\n    height: 100%;\n  }\n"]);return Pillars_templateObject2=function(){return n},n}function Pillars_templateObject3(){var n=(0,d._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n"]);return Pillars_templateObject3=function(){return n},n}function Pillars_templateObject4(){var n=(0,d._)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  transform: rotate(90deg);\n  transform-origin: center;\n\n  "," {\n    transform: rotate(0);\n  }\n"]);return Pillars_templateObject4=function(){return n},n}function _templateObject5(){var n=(0,d._)(["\n  position: absolute;\n  border-radius: 50%;\n\n  ","\n"]);return _templateObject5=function(){return n},n}function _templateObject6(){var n=(0,d._)(["\n  display: none;\n\n  .content {\n    padding-top: ",";\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  "," {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n\n    display: flex;\n    min-width: ",";\n    width: ",";\n\n    transform: translate(-50%, -50%);\n    z-index: ",";\n  }\n"]);return _templateObject6=function(){return n},n}function _templateObject7(){var n=(0,d._)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: "," 0 ",";\n  width: 100%;\n\n  background-color: var(--color-white);\n  color: var(--color-black);\n  z-index: ",";\n\n  "," {\n    width: ",";\n    margin: 0 auto;\n  }\n\n  "," {\n    display: none;\n  }\n"]);return _templateObject7=function(){return n},n}function _templateObject8(){var n=(0,d._)(["\n  position: absolute;\n  bottom: 100%;\n\n  width: 100%;\n  margin-bottom: -1px;\n\n  path {\n    fill: var(--color-white);\n  }\n"]);return _templateObject8=function(){return n},n}function _templateObject9(){var n=(0,d._)(["\n  margin: "," auto 0;\n  display: block;\n\n  "," {\n    margin: "," auto 0;\n  }\n"]);return _templateObject9=function(){return n},n}function _templateObject10(){var n=(0,d._)(["\n  padding: 0 ",";\n\n  "," {\n    padding: 0 ",";\n  }\n\n  "," {\n    padding: "," "," 0;\n  }\n"]);return _templateObject10=function(){return n},n}function _templateObject11(){var n=(0,d._)(["\n  color: var(--color-mediumGrey);\n  margin-bottom: ",";\n  margin-top: ",";\n\n  "," {\n    margin-bottom: ",";\n    margin-top: 0;\n  }\n"]);return _templateObject11=function(){return n},n}var ns=h.ZP.div.withConfig({componentId:"sc-70c296cc-0"})(Pillars_templateObject()),nl=h.ZP.div.withConfig({componentId:"sc-70c296cc-1"})(Pillars_templateObject1(),_.qk.s),nu=h.ZP.svg.withConfig({componentId:"sc-70c296cc-2"})(Pillars_templateObject2(),(0,v.o0)(606),_.qk.s),np=h.ZP.ul.withConfig({componentId:"sc-70c296cc-3"})(Pillars_templateObject3()),nd=(0,h.ZP)(m.m.span).withConfig({componentId:"sc-70c296cc-4"})(Pillars_templateObject4(),_.qk.s),nf=h.ZP.li.withConfig({componentId:"sc-70c296cc-5"})(_templateObject5(),function(n){var t=n.top,e=n.left,i=n.width,o=n.height;return"  \n    top: ".concat(t,"px;\n    left: ").concat(e,"px;\n    width: ").concat(i,"px;\n    height: ").concat(o,"px;\n\n    ").concat(nd," {\n      span {\n        width: ").concat(2*i,"px\n      }\n    }\n  ")}),nm=(0,h.ZP)(nn.default).withConfig({componentId:"sc-70c296cc-6"})(_templateObject6(),(0,v.o0)(20),_.qk.m,(0,v.o0)(410),(0,v.hl)(51),(0,v.KK)("materialSurface")),nh=(0,h.ZP)(m.m.div).withConfig({componentId:"sc-70c296cc-7"})(_templateObject7(),(0,v.o0)(10),(0,v.o0)(23),(0,v.KK)("materialSurface"),_.qk.s,(0,v.BT)(46),_.qk.m),ng=h.ZP.svg.withConfig({componentId:"sc-70c296cc-8"})(_templateObject8()),nb=(0,h.ZP)(W.Z).withConfig({componentId:"sc-70c296cc-9"})(_templateObject9(),(0,v.o0)(47),_.qk.m,(0,v.o0)(34)),nj=h.ZP.div.withConfig({componentId:"sc-70c296cc-10"})(_templateObject10(),(0,v.EV)(2),_.qk.s,(0,v.BT)(2),_.qk.m,(0,v.hl)(1),(0,v.hl)(3)),nv=(0,h.ZP)(j.Z).withConfig({componentId:"sc-70c296cc-11"})(_templateObject11(),(0,v.o0)(10),(0,v.o0)(10),_.qk.m,(0,v.o0)(6)),n_={visible:{stopOpacity:1},semiVisible:{stopOpacity:.5},hidden:{stopOpacity:0}},nx={visible:{stroke:"#ffffff"},hidden:{stroke:"#ffffff00"}},Pillars=function(n){var t,e=n.className,i=n.titles,a=n.icons,c=n.descriptions,s=(0,G.useRef)(),l=(0,p._)((0,f.Z)({}),2),d=l[0],h=l[1],g=(0,B.Z)(),b=(0,S.Z)().width>=_.j$.s,j=h.top,v=h.left,x=(0,G.useMemo)(function(){return g?nc[b?"desktop":"mobile"]:nc.desktop},[b,g]),C=(0,p._)((0,G.useState)(Array(x.targets.length).fill({})),2),y=C[0],O=C[1],k=(0,p._)((0,G.useState)(-1),2),w=k[0],P=k[1],Z=(0,p._)((0,G.useState)(!1),2),I=Z[0],M=Z[1],q=(0,p._)((0,G.useState)({x:-100,y:-100}),2),T=q[0],H=q[1],A=(0,p._)((0,G.useState)(!1),2),V=A[0],E=A[1],L=(0,Q.Z)().setMenuState,D=(0,p._)((0,G.useState)(-1),2),N=D[0],F=D[1],handleOnClick=function(n){nt||(F(n),L({hidden:!0}))},W=(t=(0,R._)(function(n){return(0,z.Jh)(this,function(t){switch(t.label){case 0:if(H(x.targets[n]),M(!0),!I)return P(n),[2];return[4,(0,X.g)(100)];case 1:return t.sent(),P(n),[2]}})}),function(n){return t.apply(this,arguments)}),handleMouseLeave=function(){M(!1),P(-1)},nn=(0,G.useCallback)(function(){L({hidden:!1}),F(-1)},[L]),getActiveIndexInView=function(n){E(n)};(0,G.useEffect)(function(){V||(P(-1),M(!1))},[P,V,M]);var nt=N>-1,ne={title:null==i?void 0:i[N],description:null==c?void 0:c[N],handleCloseOverlay:nn};return(0,r.jsxs)(ns,{className:e,ref:d,children:[(0,r.jsx)(U.Z,{isVisible:nt,onClick:function(){return nn()}}),(0,r.jsx)($.M,{children:nt&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(nh,{initial:{y:"200%"},animate:{y:0},exit:{y:"200%"},transition:{duration:.5,ease:Y.M4},children:[(0,r.jsx)(ng,(0,u._)((0,o._)({preserveAspectRatio:"none"},J._[0]),{children:(0,r.jsx)("path",{d:J._[0].path})})),(0,r.jsx)(SurfaceContent,(0,o._)({},ne))]})})}),nt&&(0,r.jsx)(K.Y,{onClickOutside:function(){return nn()},onEscapeKey:nn,children:(0,r.jsx)(nm,{left:"0",bottom:"-1",borderRadius:"0 0 4px 4px",contentClassName:"content",children:(0,r.jsx)(SurfaceContent,(0,o._)({},ne))})}),(0,r.jsx)(nl,{children:(0,r.jsxs)(nu,{viewBox:x.viewBox,children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"backgroundradial",children:[(0,r.jsx)("stop",{offset:"0.506797",stopColor:"#D9D9D9"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#D9D9D9",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"backgroundlineair",children:[(0,r.jsx)(m.m.stop,{stopColor:"white",animate:I?"hidden":"visible",variants:n_,transition:{duration:1,ease:Y.M4}}),(0,r.jsx)(m.m.stop,{offset:"1",stopColor:"white",animate:I?"hidden":"semiVisible",variants:n_,transition:{duration:1,ease:Y.M4,delay:.1}})]})]}),(0,r.jsx)("mask",{id:"mask",children:(0,r.jsx)("path",{d:x.mask,fill:"white"})}),(0,r.jsx)($.M,{mode:"wait",children:-1!==w&&(0,r.jsx)(m.m.circle,{r:"90",fill:"url(#backgroundradial)",mask:"url(#mask)",initial:{opacity:0},animate:{cx:T.x,cy:T.y,opacity:1},exit:{opacity:0,transition:{duration:0}},transition:{opacity:{duration:2,ease:Y.M4},default:{duration:0}}})}),(0,r.jsx)(m.m.path,{d:x.path,stroke:"white",animate:I?"visible":"hidden",fill:"url(#backgroundlineair)",transition:{duration:1,ease:Y.M4},variants:nx}),g&&x.targets.map(function(n,t){var e=n.x,i=n.y;return(0,G.createElement)(Target,{x:e,y:i,index:t,parentTop:j,parentLeft:v,setTargetBounds:O,pathsData:x,key:t})})]})}),(0,r.jsx)(np,{ref:s,children:y.map(function(n,t){return(0,r.jsx)(nf,(0,u._)((0,o._)({},n),{isHovered:I,children:(0,r.jsx)(PillarButton,{index:t,activeIndex:w,icons:a,isHovered:I,getActiveIndexInView:getActiveIndexInView,titles:i,position:t>=5?"bottom":"top",handleOnClick:handleOnClick,handleOnHover:W,handleMouseLeave:handleMouseLeave})}),t)})})]})},Target=function(n){var t=n.x,e=n.y,i=n.parentTop,o=n.parentLeft,a=n.index,c=n.setTargetBounds,s=n.pathsData,l=(0,p._)((0,f.Z)(),2),u=l[0],d=l[1],m=d.left,h=d.top,g=d.width,b=d.height;return(0,G.useEffect)(function(){c(function(n){var t=(0,F._)(n);return t[a]={left:m-o,top:h-i,width:g,height:b},t})},[h,m,g,b,a,c,i,o]),(0,r.jsx)("circle",{cx:t,cy:e,r:s.circleRadius,ref:u})},SurfaceContent=function(n){var t=n.title,e=n.description,i=n.handleCloseOverlay,o=(0,H.Z)("pdp");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(nj,{children:[(0,r.jsx)(nv,{tag:"h4",font:"b3",children:t}),(0,r.jsx)(E.Z,{text:e,font:"p1",fontItalic:"p1b"})]}),(0,r.jsx)(nb,{label:o("close"),onClick:function(){return i()},brackets:!0,hoverTheme:"light"})]})};function MissionPillars_templateObject(){var n=(0,d._)(["\n  position: relative;\n  z-index: 5;\n\n  display: grid;\n  gap: "," 0;\n  margin-bottom: ",";\n  padding: 0 ",";\n\n  "," {\n    padding: 0 ",";\n    gap: "," 0;\n    margin-bottom: ",";\n  }\n\n  "," {\n    padding: 0 ",";\n    margin-bottom: ",";\n  }\n"]);return MissionPillars_templateObject=function(){return n},n}function MissionPillars_templateObject1(){var n=(0,d._)(["\n  color: var(--color-white);\n  text-align: center;\n\n  "," {\n    padding: 0 ",";\n  }\n\n  "," {\n    padding: 0 ",";\n    margin-bottom: ",";\n\n    .paragraph {\n      padding-right: ",";\n      margin-top: ",";\n    }\n  }\n\n  .paragraph {\n    ",";\n    margin-top: ",";\n    text-align: center;\n  }\n"]);return MissionPillars_templateObject1=function(){return n},n}Pillars.propTypes={className:c().string,icons:c().array.isRequired,titles:c().array.isRequired,descriptions:c().array.isRequired};var nC=h.ZP.div.withConfig({componentId:"sc-9673a31a-0"})(MissionPillars_templateObject(),(0,v.o0)(49),(0,v.o0)(180),(0,v.EV)(2),_.qk.s,(0,v.BT)(13.5),(0,v.o0)(82),(0,v.o0)(110),_.qk.m,(0,v.hl)(41),(0,v.o0)(202)),ny=h.ZP.div.withConfig({componentId:"sc-9673a31a-1"})(MissionPillars_templateObject1(),_.qk.s,(0,v.BT)(8),_.qk.m,(0,v.hl)(7),(0,v.o0)(28),(0,v.hl)(10),(0,v.o0)(24),L.g.p1,(0,v.o0)(16)),MissionPillars=function(n){var t=n.title,e=n.pillars,i=n.hideBlock,a=n.containerSpread,c=(0,B.Z)(),s=e.map(function(n){return n.icon}),l=e.map(function(n){return n.title}),p=e.map(function(n){return n.description});return i||!c?null:(0,r.jsxs)(nC,(0,u._)((0,o._)({},a),{children:[(0,r.jsx)(ny,{children:(0,r.jsx)(E.Z,{text:t,isFontCustomizable:!0,paragraphClassName:"paragraph"})}),(0,r.jsx)(Pillars,{pillars:e,icons:s,titles:l,descriptions:p})]}))};MissionPillars.propTypes={pillarData:c().object,pillarHover:c().object};var nO=(0,s.e)({stickyHero:StickyHero,richText:MissionIntro,pillars:MissionPillars}),Mission=function(n){var t=n.content,e=t.SEO,i=t.body;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,(0,o._)({},e)),(0,r.jsx)(nO,{items:i})]})};Mission.propTypes={content:c().object};var nk=!0,nw=(0,i.Jj)(Mission)},40877:function(n,t,e){"use strict";e.d(t,{Z:function(){return animation_useCharAnimation}});var i=e(72253),o=e(14932),r=e(82729),a=e(248),c=e(85893),s=e(67294),l=e(12560),u=e(14141),p=e(30086),d=e(82924),f=e(80328),m=e(55982);function _templateObject(){var n=(0,r._)(["\n  ","\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,r._)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return _templateObject1=function(){return n},n}var h=u.ZP.span.withConfig({componentId:"sc-5ffc1c42-0"})(_templateObject(),function(n){var t=n.font;return f.g[t]}),g=u.ZP.br.withConfig({componentId:"sc-5ffc1c42-1"})(_templateObject1(),m.qk.s),animation_useCharAnimation=function(n){var t=n.sentence,e=n.tag,r=n.font,u=n.fontItalic,f=n.fontBold,m=(0,s.useRef)(-1),b=t.split("\n");return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(d.Z,{font:r,tag:void 0===e?"h1":e,children:[(0,c.jsx)(p.Z,{children:t.replace(/_/g," ")}),b.map(function(n,t){var e=n.split(" "),r=n.match(/_([^_]+)_/),p=r?r[1]:null;return(0,c.jsxs)(s.Fragment,{children:[t>0&&(0,c.jsx)(g,{"aria-hidden":"true"}),e.map(function(n,t){var r=n.includes("*");n=n.replace(/_/g,"").replace(/\*/g,"");var d=t===e.length-1,g=(0,a._)(n);return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(h,{font:p?u:r&&f,"aria-hidden":"true",children:g.map(function(n,t){return m.current++,(0,c.jsx)(l.m.span,(0,o._)((0,i._)({},{initial:{opacity:0},animate:{opacity:1},transition:{delay:.03*m.current,duration:0,ease:"linear"},"aria-hidden":"true"}),{children:n}),"".concat(t,"-").concat(n))})}),d?"":" "]},n)})]},"".concat(n,"-").concat(t,"-br"))})]})})}},75262:function(n,t,e){"use strict";e.d(t,{f:function(){return useMultiOnChange},p:function(){return useOnChange}});var i=e(40406),o=e(58868);function useOnChange(n,t){(0,o.L)(()=>{if((0,i.i)(n))return t(n.get()),n.onChange(t)},[n,t])}function useMultiOnChange(n,t,e){(0,o.L)(()=>{let i=n.map(n=>n.onChange(t));return()=>{i.forEach(n=>n()),e()}})}},80578:function(n,t,e){"use strict";e.d(t,{H:function(){return useTransform}});var i=e(64606);let isCustomValueType=n=>"object"==typeof n&&n.mix,getMixer=n=>isCustomValueType(n)?n.mix:void 0;var o=e(4960),r=e(75262),a=e(30404),c=e(96681);function useTransform(n,t,e,o){let r="function"==typeof t?t:function(...n){let t=!Array.isArray(n[0]),e=t?0:-1,o=n[0+e],r=n[1+e],a=n[2+e],c=n[3+e],s=(0,i.s)(r,a,{mixer:getMixer(a[0]),...c});return t?s(o):s}(t,e,o);return Array.isArray(n)?useListTransform(n,r):useListTransform([n],([n])=>r(n))}function useListTransform(n,t){let e=(0,c.h)(()=>[]);return function(n,t){let e=(0,o.c)(t()),updateValue=()=>e.set(t());return updateValue(),(0,r.f)(n,()=>a.Z_.update(updateValue,!1,!0),()=>a.qY.update(updateValue)),e}(n,()=>{e.length=0;let i=n.length;for(let t=0;t<i;t++)e[t]=n[t].get();return t(e)})}}},function(n){n.O(0,[8794,5180,7819,9050,9774,2888,179],function(){return n(n.s=56354)}),_N_E=n.O()}]);