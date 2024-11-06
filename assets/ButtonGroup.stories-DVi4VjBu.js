import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{B as r}from"./index-Dk7Ms7nT.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=({children:o,isCenter:i=!1,gap:a=20})=>{const p=i?"justify-center":"justify-start",d={gridGap:a||""};return e.jsx("div",{className:`ui-buttongroup flex ${p}`,style:d,children:o})};s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const x={title:"Components/Button Group",component:s,tags:["autodocs"]},t={args:{gap:20,isCenter:!1},render:o=>e.jsxs(s,{...o,children:[e.jsx(r,{label:"Button One"}),e.jsx(r,{label:"Button Two",bgColor:"#d3eae2",textColor:"#131313"}),e.jsx(r,{label:"Button Three",textColor:"#0b4a35",isOutline:!0})]})};var n,u,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    gap: 20,
    isCenter: false
  } as ButtonGroupProps,
  render: args => <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" bgColor="#d3eae2" textColor="#131313" />
      <Button label="Button Three" textColor="#0b4a35" isOutline />
    </ButtonGroup>
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const b=["Primary"];export{t as Primary,b as __namedExportsOrder,x as default};
