import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as r}from"./index-DUrrX2io.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({children:o,isCenter:l=!1})=>{const i=l?"justify-center":"justify-start";return e.jsx("div",{className:`flex gap-2.5 ${i}`,children:o})};n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/Button Group",component:n,tags:["autodocs"]},t={render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{label:"Button One"}),e.jsx(r,{label:"Button Two",bgColor:"#d3eae2",textColor:"#131313"}),e.jsx(r,{label:"Button Three",textColor:"#0b4a35",isOutline:!0})]})};var a,s,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" bgColor="#d3eae2" textColor="#131313" />
      <Button label="Button Three" textColor="#0b4a35" isOutline />
    </ButtonGroup>
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const x=["Primary"];export{t as Primary,x as __namedExportsOrder,B as default};
