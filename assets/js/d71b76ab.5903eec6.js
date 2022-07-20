"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[89],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8657:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant"},a=void 0,p={unversionedId:"importing-a-blueprint",id:"importing-a-blueprint",title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant",source:"@site/docs/importing-a-blueprint.mdx",sourceDirName:".",slug:"/importing-a-blueprint",permalink:"/awesome-ha-blueprints/docs/importing-a-blueprint",draft:!1,editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/importing-a-blueprint.mdx",tags:[],version:"current",frontMatter:{title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant"},sidebar:"docs",previous:{title:"Introduction",permalink:"/awesome-ha-blueprints/docs/introduction"},next:{title:"Controllers-Hooks Ecosystem",permalink:"/awesome-ha-blueprints/docs/controllers-hooks-ecosystem"}},l={},s=[{value:"Option 1: My Home Assistant",id:"option-1-my-home-assistant",level:2},{value:"Option 2: Direct Link",id:"option-2-direct-link",level:2}],u={toc:s};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/docs/automation/using_blueprints/"},"Official documentation on Using Automation Blueprints")," for the detailed process of importing blueprints into Home Assistant and using them for automations.")),(0,o.kt)("h2",{id:"option-1-my-home-assistant"},"Option 1: My Home Assistant"),(0,o.kt)("p",null,"If you're running Home Assistant Core 2021.3 or later, you can import blueprints via ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/my/"},"My Home Assistant"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Look for the blueprint you'd like to import ",(0,o.kt)("a",{parentName:"li",href:"blueprints"},"here"),";"),(0,o.kt)("li",{parentName:"ol"},"In the page of the blueprint you'd like to import, click on the button: ",(0,o.kt)("img",{parentName:"li",src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"My Import blueprint"})),(0,o.kt)("li",{parentName:"ol"},"In the new page, click on ",(0,o.kt)("strong",{parentName:"li"},"Open Link"),". You'll be redirected to the Blueprint Import view on your Home Assistant instance."),(0,o.kt)("li",{parentName:"ol"},"If desired, change the name of the blueprint and finish the import;"),(0,o.kt)("li",{parentName:"ol"},"You're good to go! Now your blueprint can be used for generating automations.")),(0,o.kt)("h2",{id:"option-2-direct-link"},"Option 2: Direct Link"),(0,o.kt)("p",null,"This option is the standard way of importing blueprints directly from the Home Assistant UI."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Look for the blueprint you'd like to import ",(0,o.kt)("a",{parentName:"li",href:"blueprints"},"here"),";"),(0,o.kt)("li",{parentName:"ol"},"In the page of the blueprint you'd like to import, click on the ",(0,o.kt)("strong",{parentName:"li"},"Copy Link")," button on the top of the page. The URL for the blueprint is now in your clipboard;"),(0,o.kt)("li",{parentName:"ol"},"On your Home Assistant instance go to ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," and then ",(0,o.kt)("strong",{parentName:"li"},"Blueprints")),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Import Blueprint")," button in the bottom right corner. A new dialog will pop-up;"),(0,o.kt)("li",{parentName:"ol"},"Paste the URL for the blueprint and click on ",(0,o.kt)("strong",{parentName:"li"},"Preview Blueprint"),";"),(0,o.kt)("li",{parentName:"ol"},"If desired, change the name of the blueprint and finish the import;"),(0,o.kt)("li",{parentName:"ol"},"You're good to go! Now your blueprint can be used for generating automations.")))}m.isMDXComponent=!0}}]);