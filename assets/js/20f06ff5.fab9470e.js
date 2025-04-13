"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[7624],{3824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453),l=n(1470),r=n(9365);const a={sidebar_position:1},o="List",c={id:"plugins/api-endpoints/plugins/list",title:"List",description:"Show the list of plugins supported by FlowSynx System.",source:"@site/docs/plugins/api-endpoints/plugins/list.mdx",sourceDirName:"plugins/api-endpoints/plugins",slug:"/plugins/api-endpoints/plugins/list",permalink:"/docs/plugins/api-endpoints/plugins/list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Plugins",permalink:"/docs/category/plugins-4"},next:{title:"Details",permalink:"/docs/plugins/api-endpoints/plugins/details"}},u={},d=[{value:"Plugins list Api options",id:"plugins-list-api-options",level:2},{value:"Calling Plugins list Api",id:"calling-plugins-list-api",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"list",children:"List"}),"\n",(0,s.jsx)(t.p,{children:"Show the list of plugins supported by FlowSynx System."}),"\n",(0,s.jsx)(t.h2,{id:"plugins-list-api-options",children:"Plugins list Api options"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This api doesn't have any options."})}),"\n",(0,s.jsx)(t.h2,{id:"calling-plugins-list-api",children:"Calling Plugins list Api"}),"\n",(0,s.jsx)(t.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,s.jsxs)("table",{class:"table",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"URL"}),(0,s.jsx)("th",{children:"Method"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.a,{href:"http://localhost:5860/plugins",children:"http://localhost:5860/plugins"})}),(0,s.jsx)("td",{class:"centering",children:"GET"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.a,{href:"http://localhost:5860/plugins/%7Btype%7D",children:"http://localhost:5860/plugins/{type}"})}),(0,s.jsx)("td",{class:"centering",children:"GET"})]})]}),"\n",(0,s.jsxs)(t.p,{children:["This api can be called in two ways. If it is without any path, it returns the list of all plugins. But if it contains type, then the list of plugins will be filtered based on the entered type.\nCurrently, the value that can be placed instead of type is only the word ",(0,s.jsx)(t.code,{children:"Storage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,s.jsxs)(l.A,{groupId:"httpApi",children:[(0,s.jsxs)(r.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -X GET http://localhost:5860/plugins\n"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -X GET http://localhost:5860/plugins/storage\n"})})]}),(0,s.jsxs)(r.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Invoke-RestMethod -Method Get -Uri 'http://localhost:5860/plugins'\n"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Invoke-RestMethod -Method Get -Uri 'http://localhost:5860/plugins/storage'\n"})})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Also you can use ",(0,s.jsx)(t.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n  "data": [\n    {\n      "id": "f6304870-0294-453e-9598-a82167ace653",\n      "type": "FlowSynx.Storage/LocalFileSystem",\n      "description": "Plugin for local file system management. Local paths are considered as normal file system paths, e.g. /path/to/wherever"\n    },\n    .\n    .\n    .\n  ],\n  "messages": [],\n  "succeeded": true\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The answer is divided into three ",(0,s.jsx)(t.code,{children:"data"}),", ",(0,s.jsx)(t.code,{children:"messages"}),", and ",(0,s.jsx)(t.code,{children:"succeeded"})," parts.\n",(0,s.jsx)(t.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,s.jsx)(t.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,s.jsx)(t.code,{children:"data"})," contains the data to be returned."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"data"})," part will have a value only when ",(0,s.jsx)(t.code,{children:"succeeded"})," is true. If ",(0,s.jsx)(t.code,{children:"succeeded"})," is false, this field will be null."]})}),"\n",(0,s.jsx)(t.p,{children:"The information including in the result for this api is described as follows:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The guid-based identity for plugin item.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"type"}),": The type of plugin item.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"description"}),": The description related to the plugin."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164);const i={tabItem:"tabItem_Ymn6"};var l=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),i=n(4164),l=n(3104),r=n(6347),a=n(205),o=n(7485),c=n(1682),u=n(9466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=p(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:n,groupId:i}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,u.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),x=(()=>{const e=c??g;return h({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{x&&o(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=a[n].value;i!==s&&(c(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,m.jsx)(j,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);