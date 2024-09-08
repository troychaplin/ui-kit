import{j as a}from"./jsx-runtime-BlAj40OV.js";import{g as i}from"./tailwindProps-CXhursTc.js";import{C as m}from"./index-kxJK5vfo.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const d=({children:o,cols:s=3,gap:r=25})=>{const p={gridGap:r||""};return a.jsx("div",{className:`ui-cardgroup grid ${i[s]}`,style:p,children:o})};d.__docgenInfo={description:"",methods:[],displayName:"CardGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"25",computed:!1}}}};const x={title:"Components/CardGroup",component:d,tags:["autodocs"]},e={args:{cols:3,gap:25},render:o=>a.jsx(d,{...o,children:Array.from({length:8}).map((s,r)=>a.jsx(m,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:a.jsxs("p",{children:["Card #",r]})}))})};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: ({
    cols: 3,
    gap: 25
  } as CardGroupProps),
  render: args => <CardGroup {...args}>
      {Array.from({
      length: 8
    }).map((_, index) => <Card rounded="base" borderWidth={1} borderColor="#dfdfdf">
          <p>Card #{index}</p>
        </Card>)}
    </CardGroup>
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,x as default};
