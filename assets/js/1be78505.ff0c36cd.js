(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,608],{3467:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return le}});var a=n(7294),i=n(3905),l=n(2263),r=n(6291),o=n(2611),c=n(2122),s=n(9756),u=n(6010),d=n(6700),m=n(944),b=n(1839),p=n(3783),h=n(7898),f=n(6742),v=n(3919),E=n(5537),_=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(4478),k=n(4973),C="sidebar_3jCp",Z="sidebarWithHideableNavbar_Uxjr",N="sidebarHidden_22GT",I="sidebarLogo_8bKs",y="menu_1DcY",S="menuLinkText_5DKa",O="menuWithAnnouncementBar_3IKd",T="collapseSidebarButton_3okl",w="collapseSidebarButtonIcon_1LB5",L="sidebarMenuIcon_wchL",x="sidebarMenuCloseIcon_1m04",M="menuLinkExternal_3iHz",A=["items"],R=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"];var P=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},F=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,A);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return a.createElement(H,e);case"link":default:return a.createElement(W,e)}}function H(e){var t,n,i,l=e.item,r=e.onItemClick,o=e.collapsible,d=e.activePath,m=(0,s.Z)(e,R),b=l.items,p=l.label,h=P(l,d),f=(n=h,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!o&&(!h&&l.collapsed)})),E=v[0],_=v[1],g=(0,a.useRef)(null),k=(0,a.useState)(void 0),C=k[0],Z=k[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!f&&E&&_(!1)}),[h,f,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[S]=!o,t)),onClick:o?I:void 0,href:o?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||N(!1)}},a.createElement(F,{items:b,tabIndex:E?"-1":"0",onItemClick:r,collapsible:o,activePath:d})))}function W(e){var t,n=e.item,i=e.onItemClick,l=e.activePath,r=(e.collapsible,(0,s.Z)(e,B)),o=n.href,d=n.label,m=P(n,l);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(f.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[M]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:i},r),d))}function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",T),onClick:t},a.createElement(_,{className:w}))}function K(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(L,x)},"\xd7"):a.createElement(g.Z,{className:L,height:24,width:24}))}var U=function(e){var t,n,i=e.path,l=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),_=v.navbar.hideOnScroll,g=v.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,S=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),T=S.showResponsiveSidebar,w=S.closeResponsiveSidebar,L=S.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=_,t[N]=s,t))},_&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",y,(n={"menu--show":T},n[O]=!k&&f,n))},a.createElement(K,{responsiveSidebarOpened:T,onClick:L}),a.createElement("ul",{className:"menu__list"},a.createElement(F,{items:l,onItemClick:w,collapsible:o,activePath:i}))),g&&a.createElement(j,{onClick:c}))},z=n(5854),V=n.n(z),Y=n(4608),J=n(5977),G="docPage_31aa",Q="docMainContainer_3ufF",X="docMainContainerEnhanced_3NYZ",q="docSidebarContainer_3Kbt",$="docSidebarContainerHidden_3pA8",ee="collapsedDocSidebar_2JMH",te="expandSidebarButtonIcon_1naQ",ne="docItemWrapperEnhanced_2vyJ",ae="docItemWrapper_3FMP";function ie(e){var t,n,r,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,l.default)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=g[m.path],I=C[N],y=(0,a.useState)(!1),S=y[0],O=y[1],T=(0,a.useState)(!1),w=T[0],L=T[1],x=(0,a.useCallback)((function(){w&&L(!1),O(!S)}),[w]);return a.createElement(o.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:G},I&&a.createElement("div",{className:(0,u.Z)(q,(t={},t[$]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q)&&S&&L(!0)},role:"complementary"},a.createElement(U,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(r=f.themeConfig)?void 0:r.sidebarCollapsible)||n,onCollapse:x,isHidden:w}),w&&a.createElement("div",{className:ee,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},a.createElement(_,{className:te}))),a.createElement("main",{className:(0,u.Z)(Q,(c={},c[X]=S||!I,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ae,(s={},s[ne]=S,s))},a.createElement(i.Zo,{components:V()},p)))))}var le=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return l?a.createElement(ie,{currentDocRoute:l,versionMetadata:n},(0,r.Z)(t)):a.createElement(Y.default,e)}},3009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),i=n(6742),l=n(625),r=n.n(l),o=n(9756),c=n(6010),s=n(4973),u=n(6700),d="enhancedAnchor_2LWZ",m=["id"],b=function(e){return function(t){var n,i=t.id,l=(0,o.Z)(t,m),r=(0,u.LU)().navbar.hideOnScroll;return i?a.createElement(e,l,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(n={},n[d]=!r,n)),id:i}),l.children,a.createElement("a",{className:"hash-link",href:"#"+i,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,l)}},p={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(r(),e):a.createElement("code",e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(r(),(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),i=n(2611),l=n(4973);t.default=function(){return a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},5854:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(3009)),l=n(4256),r=Object.assign(Object.assign({},i.default),{FbInternalOnly:l.FbInternalOnly,FBInternalOnly:l.FbInternalOnly,OssOnly:l.OssOnly,OSSOnly:l.OssOnly});t.default=r}}]);