"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10114],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||i[g]||o;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41372:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),p=["components"],l={},s=void 0,c={unversionedId:"puppeteer.coverage",id:"version-10.1.0/puppeteer.coverage",isDocsHomePage:!1,title:"puppeteer.coverage",description:"Home &gt; puppeteer &gt; Coverage",source:"@site/versioned_docs/version-10.1.0/puppeteer.coverage.md",sourceDirName:".",slug:"/puppeteer.coverage",permalink:"/puppeteer/docs/puppeteer.coverage",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.coverage.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.cdpsession.send",permalink:"/puppeteer/docs/puppeteer.cdpsession.send"},next:{title:"puppeteer.coverage.startcsscoverage",permalink:"/puppeteer/docs/puppeteer.coverage.startcsscoverage"}},u=[{value:"Coverage class",id:"coverage-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}],i={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.coverage"},"Coverage")),(0,o.kt)("h2",{id:"coverage-class"},"Coverage class"),(0,o.kt)("p",null,"The Coverage class provides methods to gathers information about parts of JavaScript and CSS that were used by the page."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Coverage \n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To output coverage in a form consumable by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs"},"Istanbul"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs/puppeteer-to-istanbul"},"puppeteer-to-istanbul"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of using JavaScript and CSS coverage to get percentage of initially executed code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Enable both JavaScript and CSS coverage\nawait Promise.all([\n  page.coverage.startJSCoverage(),\n  page.coverage.startCSSCoverage()\n]);\n// Navigate to page\nawait page.goto('https://example.com');\n// Disable both JavaScript and CSS coverage\nconst [jsCoverage, cssCoverage] = await Promise.all([\n  page.coverage.stopJSCoverage(),\n  page.coverage.stopCSSCoverage(),\n]);\nlet totalBytes = 0;\nlet usedBytes = 0;\nconst coverage = [...jsCoverage, ...cssCoverage];\nfor (const entry of coverage) {\n  totalBytes += entry.text.length;\n  for (const range of entry.ranges)\n    usedBytes += range.end - range.start - 1;\n}\nconsole.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);\n\n")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage._constructor_"},"(constructor)(client)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,o.kt)("code",null,"Coverage")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage.startcsscoverage"},"startCSSCoverage(options)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage.startjscoverage"},"startJSCoverage(options)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage.stopcsscoverage"},"stopCSSCoverage()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage.stopjscoverage"},"stopJSCoverage()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);