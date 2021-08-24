"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1844],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89042:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},l=void 0,u={unversionedId:"puppeteer.browseremittedevents",id:"puppeteer.browseremittedevents",isDocsHomePage:!1,title:"puppeteer.browseremittedevents",description:"Home &gt; puppeteer &gt; BrowserEmittedEvents",source:"@site/docs/puppeteer.browseremittedevents.md",sourceDirName:".",slug:"/puppeteer.browseremittedevents",permalink:"/puppeteer/docs/next/puppeteer.browseremittedevents",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.browseremittedevents.md",version:"current",frontMatter:{}},s=[{value:"BrowserEmittedEvents enum",id:"browseremittedevents-enum",children:[]},{value:"Enumeration Members",id:"enumeration-members",children:[]}],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browseremittedevents"},"BrowserEmittedEvents")),(0,p.kt)("h2",{id:"browseremittedevents-enum"},"BrowserEmittedEvents enum"),(0,p.kt)("p",null,"All the events a ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser"},"browser instance")," may emit."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserEmittedEvents \n")),(0,p.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Member"),(0,p.kt)("th",{parentName:"tr",align:null},"Value"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,'"',"disconnected",'"')),(0,p.kt)("td",{parentName:"tr",align:null},"Emitted when Puppeteer gets disconnected from the Chromium instance. This might happen because of one of the following:- Chromium is closed or crashed- The ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browser.disconnect"},"browser.disconnect")," method was called.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"TargetChanged"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,'"',"targetchanged",'"')),(0,p.kt)("td",{parentName:"tr",align:null},"Emitted when the url of a target changes. Contains a ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"TargetCreated"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,'"',"targetcreated",'"')),(0,p.kt)("td",{parentName:"tr",align:null},"Emitted when a target is created, for example when a new page is opened by ",(0,p.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browser.newpage"},"browser.newPage"),"Contains a ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"TargetDestroyed"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,'"',"targetdestroyed",'"')),(0,p.kt)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed, for example when a page is closed. Contains a ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")))))}d.isMDXComponent=!0}}]);