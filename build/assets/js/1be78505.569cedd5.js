"use strict";(self.webpackChunkvest_website=self.webpackChunkvest_website||[]).push([[9514,6167],{895:function(e,t,n){n.d(t,{dK:function(){return a},_k:function(){return o},vc:function(){return r},rx:function(){return l},qo:function(){return c},Hk:function(){return i},Iz:function(){return s}});n(1336);var a=["en"],o=!1,r=null,l=null,c=8,i=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(7294),o=n(3905),r=n(6291),l=n(3938),c=n(6010),i=n(3773),s=n(3783),d=n(5537),u=n(7462),m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(4973),b=n(3366),f=n(6742),h=n(3919),v=n(8617),E="menuLinkText_1J2g",_=["items"],k=["item"],g=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],S=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,_);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(Z,(0,u.Z)({key:t,item:e},n))})))}));function Z(e){var t=e.item,n=(0,b.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,u.Z)({item:t},n)):a.createElement(T,(0,u.Z)({item:t},n))}function I(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,l=e.level,s=(0,b.Z)(e,g),d=n.items,m=n.label,p=n.collapsible,f=n.className,h=S(n,r),v=(0,i.uR)({initialState:function(){return!!p&&(!h&&n.collapsed)}}),_=v.collapsed,k=v.setCollapsed,C=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,o=e.setCollapsed,r=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:h,collapsed:_,setCollapsed:k}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},f)},a.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&h},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},s),m),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(N,{items:d,tabIndex:_?-1:0,onItemClick:o,activePath:r,level:l+1})))}function T(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=e.level,l=(0,b.Z)(e,C),s=t.href,d=t.label,m=t.className,p=S(t,o);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:d},a.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n},l),(0,h.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var M="sidebar_15mo",w="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",A="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(m,{className:F}))}function R(e){var t,n,o=e.path,r=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],o=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&o(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(M,(t={},t[w]=p,t[y]=s,t))},p&&a.createElement(d.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(n={},n[L]=u,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:r,activePath:o,level:1}))),b&&a.createElement(P,{onClick:l}))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:o,onItemClick:function(){return t()},level:1}))};function D(e){return a.createElement(i.Cv,{component:H,props:e})}var W=a.memo(R),z=a.memo(D);function Y(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),o&&a.createElement(z,e))}var J=n(6845),K=n(4608),q="backToTopButton_35hR",U="backToTopButtonShow_18ls";function G(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var O=function(){var e,t=(0,a.useState)(!1),n=t[0],o=t[1],r=(0,a.useRef)(!1),l=G(),s=l.smoothScrollTop,d=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(r.current)r.current=!1;else{var l=n<a;if(l||d(),n<300)o(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&o(!0)}else o(!1)}})),(0,i.SL)((function(e){e.location.hash&&(r.current=!0,o(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,q,(e={},e[U]=n,e)),type:"button",onClick:function(){return s()}})},Q=n(5977),X={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},j=n(9105);function V(e){var t,n,r,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,b=d.pluginId,f=d.version,h=s.sidebar,v=h?d.docsSidebars[h]:void 0,E=(0,a.useState)(!1),_=E[0],k=E[1],g=(0,a.useState)(!1),C=g[0],S=g[1],N=(0,a.useCallback)((function(){C&&S(!1),k((function(e){return!e}))}),[C]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,i.os)(b,f)}},a.createElement("div",{className:X.docPage},a.createElement(O,null),v&&a.createElement("aside",{className:(0,c.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&_&&S(!0)}},a.createElement(Y,{key:h,sidebar:v,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:X.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:X.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(X.docMainContainer,(n={},n[X.docMainContainerEnhanced]=_||!v,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(r={},r[X.docItemWrapperEnhanced]=_,r))},a.createElement(o.Zo,{components:J.Z},u)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,l=t.find((function(e){return(0,Q.LX)(o.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(j.Z,null,a.createElement("html",{className:n.className})),a.createElement(V,{currentDocRoute:l,versionMetadata:n},(0,r.Z)(t,{versionMetadata:n}))):a.createElement(K.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),o=n(3938),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);