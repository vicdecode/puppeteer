"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55310],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=p,v=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function s(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18807:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],i={},l=void 0,u={unversionedId:"puppeteer.eventemitter.once",id:"version-10.0.0/puppeteer.eventemitter.once",isDocsHomePage:!1,title:"puppeteer.eventemitter.once",description:"Home &gt; puppeteer &gt; EventEmitter &gt; once",source:"@site/versioned_docs/version-10.0.0/puppeteer.eventemitter.once.md",sourceDirName:".",slug:"/puppeteer.eventemitter.once",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.once",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.eventemitter.once.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.eventemitter.on",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.on"},next:{title:"puppeteer.eventemitter.removelistener",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.removelistener"}},c=[{value:"EventEmitter.once() method",id:"eventemitteronce-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],m={toc:c};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.once"},"once")),(0,a.kt)("h2",{id:"eventemitteronce-method"},"EventEmitter.once() method"),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," but the listener will only be fired once and then it will be removed."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"once(event: EventType, handler: Handler): EventEmitter;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null},"the event you'd like to listen to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.handler"},"Handler")),(0,a.kt)("td",{parentName:"tr",align:null},"the handler function to run when the event occurs")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}d.isMDXComponent=!0}}]);