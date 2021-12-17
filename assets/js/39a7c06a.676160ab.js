"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[724],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return l}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){return function(n){var r=d(n.components);return t.createElement(e,i({},n,{components:r}))}},d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},m=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,v=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return r?t.createElement(v,c(c({ref:n},s),{},{components:r})):t.createElement(v,c({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},51227:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var t=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],c={id:"canvasview.canvasprops",title:"Interface: CanvasProps",sidebar_label:"CanvasProps",custom_edit_url:null},p=void 0,s={unversionedId:"api/core/interfaces/canvasview.canvasprops",id:"api/core/interfaces/canvasview.canvasprops",title:"Interface: CanvasProps",description:"CanvasView.CanvasProps",source:"@site/docs/api/core/interfaces/canvasview.canvasprops.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/canvasview.canvasprops",permalink:"/live/docs/api/core/interfaces/canvasview.canvasprops",editUrl:null,tags:[],version:"current",frontMatter:{id:"canvasview.canvasprops",title:"Interface: CanvasProps",sidebar_label:"CanvasProps",custom_edit_url:null},sidebar:"api",previous:{title:"CameraProps",permalink:"/live/docs/api/core/interfaces/cameraview.cameraprops"},next:{title:"CanvasRenderingContext2D",permalink:"/live/docs/api/core/interfaces/canvasview.canvasrenderingcontext2d"}},l=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"onContext2D",id:"oncontext2d",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/canvasview"},"CanvasView"),".CanvasProps"),(0,i.mdx)("p",null,"Properties for the canvas."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"<Canvas style={styles.canvas} onContext2D={handleContext2D} />\n")),(0,i.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"ViewProps")),(0,i.mdx)("p",{parentName:"li"},"\u21b3 ",(0,i.mdx)("strong",{parentName:"p"},"CanvasProps")))),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"oncontext2d"},"onContext2D"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"onContext2D"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"ctx"),"): ",(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"ctx")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"/live/docs/api/core/interfaces/canvasview.canvasrenderingcontext2d"},"CanvasRenderingContext2D"))))),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/f268dfc/react-native-pytorch-core/src/CanvasView.tsx#L692"},"CanvasView.tsx:692")))}m.isMDXComponent=!0}}]);