import{j as a}from"./jsx-runtime-BlAj40OV.js";import{c as p}from"./tailwindProps-DU0fXkHw.js";import{C as m}from"./index-BUe1q0qu.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const d=({children:o,cols:s=3,gap:e=20})=>{const i={gridGap:e||""};return a.jsx("div",{className:`ui-cardgroup grid ${p[s]}`,style:i,children:o})};d.__docgenInfo={description:"",methods:[],displayName:"CardGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof uiGridColumns",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"'1/3'"},{name:"literal",value:"'2/3'"}]},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const y={title:"Components/CardGroup",component:d,tags:["autodocs"]},r={args:{cols:3,gap:20},render:o=>a.jsx(d,{...o,children:Array.from({length:8}).map((s,e)=>a.jsx(m,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:a.jsxs("p",{children:["Card #",e]})}))})};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: ({
    cols: 3,
    gap: 20
  } as CardGroupProps),
  render: args => <CardGroup {...args}>
      {Array.from({
      length: 8
    }).map((_, index) => <Card rounded="base" borderWidth={1} borderColor="#dfdfdf">
          <p>Card #{index}</p>
        </Card>)}
    </CardGroup>
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const v=["Primary"];export{r as Primary,v as __namedExportsOrder,y as default};
