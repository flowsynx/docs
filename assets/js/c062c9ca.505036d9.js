"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[4434],{4543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=n(4848),r=n(8453),a=n(1470),s=n(9365);const i={sidebar_position:1},o="Use the FlowSynx API",c={id:"flowctl/use-the-flowsynx-api",title:"Use the FlowSynx API",description:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly.",source:"@site/docs/flowctl/use-the-flowsynx-api.mdx",sourceDirName:"flowctl",slug:"/flowctl/use-the-flowsynx-api",permalink:"/docs/flowctl/use-the-flowsynx-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"FlowCtl",permalink:"/docs/category/flowctl"},next:{title:"Api End Points",permalink:"/docs/category/api-end-points-1"}},u={},d=[{value:"Step 1: Open terminal",id:"step-1-open-terminal",level:2},{value:"Step 2: Run the FlowSynx",id:"step-2-run-the-flowsynx",level:2},{value:"Step 3: Calling API",id:"step-3-calling-api",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"use-the-flowsynx-api",children:"Use the FlowSynx API"}),"\n",(0,l.jsx)(t.p,{children:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly."}),"\n",(0,l.jsx)(t.h2,{id:"step-1-open-terminal",children:"Step 1: Open terminal"}),"\n","\n","\n",(0,l.jsxs)(a.A,{groupId:"operating-systems",children:[(0,l.jsxs)(s.A,{value:"linuxMacOs",label:"Linux/MacOS",children:[(0,l.jsxs)(t.p,{children:["You will need to use ",(0,l.jsx)(t.code,{children:"sudo"})," for this quickstart if:"]}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The install path is ",(0,l.jsx)(t.code,{children:"/usr/local/bin"})," (default install path)."]}),"\n"]})]}),(0,l.jsxs)(s.A,{value:"windows",label:"Windows",children:[(0,l.jsx)(t.p,{children:"Run Windows Terminal or command prompt as administrator."}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Right click on the Windows Terminal or command prompt icon."}),"\n",(0,l.jsxs)(t.li,{children:["Select ",(0,l.jsx)(t.strong,{children:"Run as administrator"}),"."]}),"\n"]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"step-2-run-the-flowsynx",children:"Step 2: Run the FlowSynx"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"flowctl run\n"})}),"\n",(0,l.jsx)(t.p,{children:"After executing this command, FlowSynx starts to be running and the logs like below will be displayed."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Now listening on: http://[::]:5860"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Application started. Press Ctrl+C to shut down."\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Hosting environment: Production"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Content root path: _____________"\n'})}),"\n",(0,l.jsx)(t.h2,{id:"step-3-calling-api",children:"Step 3: Calling API"}),"\n",(0,l.jsxs)(t.p,{children:["Open a new terminal and enter the below command (in this example ",(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"List"})})," command will be called to getting list from given path):"]}),"\n",(0,l.jsxs)(a.A,{groupId:"httpApi",children:[(0,l.jsx)(s.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "entity": "/", "options": { "fields": [], "filter": "", "caseSensitive": false, "recurse": false, "sort": "", "limit": "", "includeMetadata": false }}\' http://localhost:5860/list\n'})})}),(0,l.jsx)(s.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "entity": "C:/", "options": { "fields": [], "filter": "", "caseSensitive": false, "recurse": false, "sort": "", "limit": "", "includeMetadata": false }}\' -Uri \'http://localhost:5860/list\'\n'})})})]}),"\n",(0,l.jsxs)(t.p,{children:["After executing the command, the result will be returned to you in the form of ",(0,l.jsx)(t.code,{children:"json"})," data."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var l=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var l=n(6540),r=n(4164),a=n(3104),s=n(6347),i=n(205),o=n(7485),c=n(1682),u=n(9466);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==l&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var l=n(6540);const r={},a=l.createContext(r);function s(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);