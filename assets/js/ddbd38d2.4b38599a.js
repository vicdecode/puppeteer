"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92787],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(h,p(p({ref:t},d),{},{components:n})):a.createElement(h,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,p[1]=u;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],u={},o=void 0,i={unversionedId:"puppeteer.jshandle.evaluatehandle",id:"puppeteer.jshandle.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.jshandle.evaluatehandle",description:"Home &gt; puppeteer &gt; JSHandle &gt; evaluateHandle",source:"@site/docs/puppeteer.jshandle.evaluatehandle.md",sourceDirName:".",slug:"/puppeteer.jshandle.evaluatehandle",permalink:"/puppeteer/docs/next/puppeteer.jshandle.evaluatehandle",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.jshandle.evaluatehandle.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.jshandle.evaluate",permalink:"/puppeteer/docs/next/puppeteer.jshandle.evaluate"},next:{title:"puppeteer.jshandle.executioncontext",permalink:"/puppeteer/docs/next/puppeteer.jshandle.executioncontext"}},d=[{value:"JSHandle.evaluateHandle() method",id:"jshandleevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle"},"JSHandle")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle.evaluatehandle"},"evaluateHandle")),(0,l.kt)("h2",{id:"jshandleevaluatehandle-method"},"JSHandle.evaluateHandle() method"),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandleType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandleType>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"args"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"Promise","<","HandleType",">"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns an in-page object (JSHandle)."),(0,l.kt)("p",null,"If the function passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a Promise, then ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluateHandle.evaluateHandle")," waits for the promise to resolve and returns its value."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," for more details."))}c.isMDXComponent=!0}}]);