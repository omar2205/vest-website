"use strict";(self.webpackChunkvest_website=self.webpackChunkvest_website||[]).push([[3615],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return t?i.createElement(f,a(a({ref:n},l),{},{components:t})):i.createElement(f,a({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8296:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:2},u="skipWhen: Conditional Exclusion",c={unversionedId:"writing_your_suite/including_and_excluding/skipWhen",id:"writing_your_suite/including_and_excluding/skipWhen",isDocsHomePage:!1,title:"skipWhen: Conditional Exclusion",description:"In some cases we might need to skip a test or a group based on a given condition, for example - based on the intermediate state of the currently running suite. To allow this, you can use skipWhen. skipWhen takes a boolean expression and a callback with tests.",source:"@site/docs/writing_your_suite/including_and_excluding/skipWhen.md",sourceDirName:"writing_your_suite/including_and_excluding",slug:"/writing_your_suite/including_and_excluding/skipWhen",permalink:"/docs/writing_your_suite/including_and_excluding/skipWhen",editUrl:"https://github.com/ealush/vest-website/edit/main/website/docs/writing_your_suite/including_and_excluding/skipWhen.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Excluding and including tests",permalink:"/docs/writing_your_suite/including_and_excluding/skip_and_only"},next:{title:"Including and excluding groups",permalink:"/docs/writing_your_suite/including_and_excluding/skip_and_only_group"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skipwhen-conditional-exclusion"},"skipWhen: Conditional Exclusion"),(0,o.kt)("p",null,"In some cases we might need to skip a test or a group based on a given condition, for example - based on the intermediate state of the currently running suite. To allow this, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"skipWhen"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"skipWhen")," takes a boolean expression and a callback with tests.\nIf the expression is true, the tests within the callback will be skipped. Otherwise, the tests will run as normal."),(0,o.kt)("p",null,"In the following example, we're skipping the server side verification of the username if the username is invalid to begin with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { create, test, enforce, skipWhen } from "vest";\n\nconst suite = create((data = {}) => {\n  test("username", "Username is required", () => {\n    enforce(data.username).isNotEmpty();\n  });\n\n  skipWhen(suite.get().hasErrors("username"), () => {\n    test("username", "Username already exists", () => {\n      // this is an example for a server call\n      return doesUserExist(data.username);\n    });\n  });\n});\nexport default suite;\n')))}d.isMDXComponent=!0}}]);