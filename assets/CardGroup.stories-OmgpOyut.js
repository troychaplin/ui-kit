import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{g as m}from"./tailwindProps-CXhursTc.js";import{C as p}from"./index-CXSGNh6N.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";const o=({children:d,cols:s=3,gap:e=30})=>{const l={gridGap:e||""};return a.jsx("div",{className:`ui-cardgroup grid ${m[s]}`,style:l,children:d})};o.__docgenInfo={description:"",methods:[],displayName:"CardGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}}}};const x={title:"Components/Card Group",component:o,tags:["autodocs"]},r={render:d=>a.jsx(o,{...d,children:Array.from({length:8}).map((s,e)=>a.jsx(p,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:a.jsxs("p",{children:["Card #",e]})}))})};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <CardGroup {...args}>
      {Array.from({
      length: 8
    }).map((_, index) => <Card rounded="base" borderWidth={1} borderColor="#dfdfdf">
          <p>Card #{index}</p>
        </Card>)}
    </CardGroup>
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Primary"];export{r as Primary,h as __namedExportsOrder,x as default};
