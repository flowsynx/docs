"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[680],{650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(4848),s=t(8453),r=t(1470),a=t(9365);const o={sidebar_position:2},l="Add",c={id:"plugins-specifications/api-endpoints/config/add",title:"Add",description:"Add configuration section to configuration.",source:"@site/docs/plugins-specifications/api-endpoints/config/add.mdx",sourceDirName:"plugins-specifications/api-endpoints/config",slug:"/plugins-specifications/api-endpoints/config/add",permalink:"/docs/plugins-specifications/api-endpoints/config/add",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Config List",permalink:"/docs/plugins-specifications/api-endpoints/config/list"},next:{title:"Details",permalink:"/docs/plugins-specifications/api-endpoints/config/details"}},d={},u=[{value:"Add Config Api options",id:"add-config-api-options",level:2},{value:"Calling Add Config Api",id:"calling-add-config-api",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{IIcon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"add",children:"Add"}),"\n",(0,i.jsx)(n.p,{children:"Add configuration section to configuration."}),"\n",(0,i.jsx)(n.h2,{id:"add-config-api-options",children:"Add Config Api options"}),"\n",(0,i.jsx)(n.p,{children:"The options available in this api are described below:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Option name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Default Value"}),(0,i.jsx)("th",{children:"Required"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"name"})}),(0,i.jsx)("td",{class:"centering",children:"string"}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{class:"centering greenIcon",children:(0,i.jsx)(t,{icon:"mdi:check",height:"32"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"The unique configuration section name. This value is string type and is required."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"type"})}),(0,i.jsx)("td",{class:"centering",children:"string"}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{class:"centering greenIcon",children:(0,i.jsx)(t,{icon:"mdi:check",height:"32"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"This option indicates the type of config item."}),(0,i.jsxs)(n.p,{children:["For example the value of this option should be in the following format:\n",(0,i.jsx)(n.code,{children:"FlowSynx.Storage/Azure.Files"})]}),(0,i.jsx)(n.p,{children:"This format indicates the type of plugin to be used."})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"specifications"})}),(0,i.jsx)("td",{class:"centering",children:"object (Key-Value)"}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"The specifications regarding configuration section. They should be passed in pairs of key value"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"calling-add-config-api",children:"Calling Add Config Api"}),"\n",(0,i.jsx)(n.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,i.jsxs)("table",{class:"table",children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"URL"}),(0,i.jsx)("th",{children:"Method"}),(0,i.jsx)("th",{children:"ContentType"}),(0,i.jsx)("th",{children:"Body"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"http://localhost:5860/config/add",children:"http://localhost:5860/config/add"})}),(0,i.jsx)("td",{class:"centering",children:"POST"}),(0,i.jsx)("td",{class:"centering",children:"application/json"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "azfile",\n  "type": "FlowSynx.Storage/Azure.Files",\n  "specifications": {}\n}\n'})})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,i.jsxs)(r.A,{groupId:"httpApi",children:[(0,i.jsx)(a.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "name": "azfile", "type": "FlowSynx.Storage/Azure.Files", "specifications": {} }\' http://localhost:5860/config/add\n'})})}),(0,i.jsx)(a.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "name": "azfile", "type": "FlowSynx.Storage/Azure.Files", "specifications": {} }\' -Uri \'http://localhost:5860/config/add\'\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Also you can use ",(0,i.jsx)(n.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "data": {\n    "id": "18c91659-858b-4fd6-bd20-0125cac86c27",\n    "name": "azfile"\n  },\n  "messages": [\n    "The configuration was added successfully."\n  ],\n  "succeeded": true\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The answer is divided into three ",(0,i.jsx)(n.code,{children:"data"}),", ",(0,i.jsx)(n.code,{children:"messages"}),", and ",(0,i.jsx)(n.code,{children:"succeeded"})," parts.\n",(0,i.jsx)(n.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,i.jsx)(n.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,i.jsx)(n.code,{children:"data"})," contains the data to be returned."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"data"})," part will have a value only when ",(0,i.jsx)(n.code,{children:"succeeded"})," is true. If ",(0,i.jsx)(n.code,{children:"succeeded"})," is false, this field will be null."]})}),"\n",(0,i.jsx)(n.p,{children:"The information including in the result for this api is described as follows:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"id"}),": The guid-based identity for configuration item.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"name"}),": The name of configuration item (this name is unique)."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),s=t(4164),r=t(3104),a=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=f({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function m(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(m,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);