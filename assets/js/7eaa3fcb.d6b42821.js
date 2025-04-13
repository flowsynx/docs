"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[7873],{7894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=t(4848),r=t(8453),i=t(1470),l=t(9365);const a={sidebar_position:2},o="Copy",c={id:"plugins/api-endpoints/storage/copy",title:"Copy",description:"This api will copy entities from source storage to the destination.",source:"@site/docs/plugins/api-endpoints/storage/copy.mdx",sourceDirName:"plugins/api-endpoints/storage",slug:"/plugins/api-endpoints/storage/copy",permalink:"/docs/plugins/api-endpoints/storage/copy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"About",permalink:"/docs/plugins/api-endpoints/storage/about"},next:{title:"Delete",permalink:"/docs/plugins/api-endpoints/storage/delete"}},d={},h=[{value:"Copy Api options",id:"copy-api-options",level:2},{value:"Calling Copy Api",id:"calling-copy-api",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{IIcon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"copy",children:"Copy"}),"\n",(0,s.jsx)(n.p,{children:"This api will copy entities from source storage to the destination."}),"\n",(0,s.jsx)(n.h2,{id:"copy-api-options",children:"Copy Api options"}),"\n",(0,s.jsx)(n.p,{children:"The options available in this api are described below:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Option name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"SourcePath"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{class:"centering greenIcon",children:(0,s.jsx)(t,{icon:"mdi:check",height:"32"})}),(0,s.jsx)("td",{children:"The storage path from which the entities are to be copied"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"DestinationPath"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{class:"centering greenIcon",children:(0,s.jsx)(t,{icon:"mdi:check",height:"32"})}),(0,s.jsx)("td",{children:"The storage path to which the entities are to be copied"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"Include"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Include entities matching pattern"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"Exclude"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Exclude entities matching pattern"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"MinAge"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities older than this in ",(0,s.jsx)(n.strong,{children:"second"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"ms"})," | ",(0,s.jsx)(n.strong,{children:"s"})," | ",(0,s.jsx)(n.strong,{children:"m"})," | ",(0,s.jsx)(n.strong,{children:"h"})," | ",(0,s.jsx)(n.strong,{children:"d"})," | ",(0,s.jsx)(n.strong,{children:"w"})," | ",(0,s.jsx)(n.strong,{children:"M"})," | ",(0,s.jsx)(n.strong,{children:"y"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"MaxAge"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities younger than this in ",(0,s.jsx)(n.strong,{children:"second"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"ms"})," | ",(0,s.jsx)(n.strong,{children:"s"})," | ",(0,s.jsx)(n.strong,{children:"m"})," | ",(0,s.jsx)(n.strong,{children:"h"})," | ",(0,s.jsx)(n.strong,{children:"d"})," | ",(0,s.jsx)(n.strong,{children:"w"})," | ",(0,s.jsx)(n.strong,{children:"M"})," | ",(0,s.jsx)(n.strong,{children:"y"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"MinSize"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities bigger than this in ",(0,s.jsx)(n.strong,{children:"KiB"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"B"})," | ",(0,s.jsx)(n.strong,{children:"K"})," | ",(0,s.jsx)(n.strong,{children:"M"})," | ",(0,s.jsx)(n.strong,{children:"G"})," | ",(0,s.jsx)(n.strong,{children:"T"})," | ",(0,s.jsx)(n.strong,{children:"P"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"MaxSize"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities smaller than this in KiB or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"B"})," | ",(0,s.jsx)(n.strong,{children:"K"})," | ",(0,s.jsx)(n.strong,{children:"M"})," | ",(0,s.jsx)(n.strong,{children:"G"})," | ",(0,s.jsx)(n.strong,{children:"T"})," | ",(0,s.jsx)(n.strong,{children:"P"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"CaseSensitive"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Ignore or apply case sensitive in filters"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"Recurse"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Apply recursion on filtering entities in the specified path"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"ClearDestinationPath"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Clearing all entities and other things in the destination path before starting the copy operation"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.strong,{children:"OverWriteData"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Overwriting the data if the entity exists on the destination"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"calling-copy-api",children:"Calling Copy Api"}),"\n",(0,s.jsx)(n.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,s.jsxs)("table",{class:"table",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"URL"}),(0,s.jsx)("th",{children:"Method"}),(0,s.jsx)("th",{children:"ContentType"}),(0,s.jsx)("th",{children:"Body"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.a,{href:"http://localhost:5860/storage/copy",children:"http://localhost:5860/storage/copy"})}),(0,s.jsx)("td",{class:"centering",children:"POST"}),(0,s.jsx)("td",{class:"centering",children:"application/json"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sourcePath": <STRING VALUE>,\n  "destinationPath": <STRING VALUE>,\n  "include": <STRING VALUE>,\n  "exclude": <STRING VALUE>,\n  "minAge": <STRING VALUE>,\n  "maxAge": <STRING VALUE>,\n  "minSize": <STRING VALUE>,\n  "maxSize": <STRING VALUE>,\n  "caseSensitive": <BOOLEAN VALUE>,\n  "recurse": <BOOLEAN VALUE>,\n  "clearDestinationPath": <BOOLEAN VALUE>,\n  "overWriteData": <BOOLEAN VALUE>\n}\n'})})})]})]}),"\n",(0,s.jsx)(n.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,s.jsxs)(i.A,{groupId:"httpApi",children:[(0,s.jsx)(l.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "sourcePath": "/sourcePath/", "destinationPath": "/destinationPath", "include": "", "exclude": "", "minAge": "", "maxAge": "", "minSize": "", "maxSize": "", "caseSensitive": false, "recurse": true, "clearDestinationPath": false, "overWriteData": true }\' http://localhost:5860/storage/copy\n'})})}),(0,s.jsx)(l.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "sourcePath": "C:/sourcePath/", "destinationPath": "C:/destinationPath", "include": "", "exclude": "", "minAge": "", "maxAge": "", "minSize": "", "maxSize": "", "caseSensitive": false, "recurse": true, "clearDestinationPath": false, "overWriteData": true }\' -Uri \'http://localhost:5860/storage/copy\'\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Also you can use ",(0,s.jsx)(n.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "data": null,\n  "messages": [\n    "The copy was done successfully."\n  ],\n  "succeeded": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The answer is divided into three ",(0,s.jsx)(n.code,{children:"data"}),", ",(0,s.jsx)(n.code,{children:"messages"}),", and ",(0,s.jsx)(n.code,{children:"succeeded"})," parts.\n",(0,s.jsx)(n.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,s.jsx)(n.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,s.jsx)(n.code,{children:"data"})," contains the data to be returned."]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(6540),r=t(4164),i=t(3104),l=t(6347),a=t(205),o=t(7485),c=t(1682),d=t(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:t,groupId:r}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=c??j;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==s&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(y,{...e,...n})]})}function A(e){const n=(0,g.A)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);