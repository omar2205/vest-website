"use strict";(self.webpackChunkvest_website=self.webpackChunkvest_website||[]).push([[1010],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={sidebar_position:2},l=void 0,c={unversionedId:"utilities/promisify",id:"utilities/promisify",isDocsHomePage:!1,title:"promisify",description:"promisify()",source:"@site/docs/utilities/promisify.md",sourceDirName:"utilities",slug:"/utilities/promisify",permalink:"/docs/utilities/promisify",editUrl:"https://github.com/ealush/vest-website/edit/main/website/docs/utilities/promisify.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"classnames",permalink:"/docs/utilities/classnames"},next:{title:"Using Vest in node",permalink:"/docs/recipies/using_with_node"}},u=[{value:"<code>promisify()</code>",id:"promisify",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"promisify"},(0,o.kt)("inlineCode",{parentName:"h2"},"promisify()")),(0,o.kt)("p",null,"Promisify is a function that enables you to run your async validations as a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Javascript Promise"),".\nThis can be useful when running async validations on the server, or when you do not need the partial validation results."),(0,o.kt)("p",null,"!> ",(0,o.kt)("strong",{parentName:"p"},"NOTE")," The Promise is resolved when all tests finish running."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"promisify()")," accepts a validation suite declaration, and returns a function that when called, returns a Promise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { create, test, skipWhen } from "vest";\nimport promisify from "vest/promisify";\n\nconst suite = promisify(\n  create((data) => {\n    test("email", "The email already exists", () => doesEmailExist(data.email));\n    test("username", "The username already exists", () =>\n      doesUsernameExist(data.username)\n    );\n  })\n);\n\nsuite(data).then((res) => {\n  skipWhen(res.hasErrors("email"), () => {\n    /* ... */\n  });\n\n  skipWhen(res.hasErrors("username"), () => {\n    /* ... */\n  });\n});\n')))}m.isMDXComponent=!0}}]);