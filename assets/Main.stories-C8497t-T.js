import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as x}from"./index-CtOmiOHp.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const l=({children:a,noProse:d,maxWidth:p="7xl"})=>{const u=d?"":"prose prose-lg md:prose-xl";return e.jsx("main",{className:`ui-main ui-max-width-${p} px-6 py-5 md:p-8 ${u}`,children:a})};l.__docgenInfo={description:"",methods:[],displayName:"Main",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof uiMaxWidth",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'7xl'",computed:!1}},noProse:{required:!1,tsType:{name:"boolean"},description:""}}};const M={title:"Layouts/Main",component:l,tags:["autodocs"]},r={args:{maxWidth:"5xl",noProse:!1},render:a=>e.jsx(l,{...a,children:e.jsx("p",{children:"Main element"})})},n={args:{...r.args,children:e.jsx(x,{children:e.jsx("p",{children:"Main element"})})},render:a=>e.jsx(l,{...a})};var s,t,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: ({
    maxWidth: '5xl',
    noProse: false
  } as MainProps),
  render: args => <Main {...args}>
      <p>Main element</p>
    </Main>
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var o,m,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: ({
    ...Primary.args,
    children: <Section>
        <p>Main element</p>
      </Section>
  } as MainProps),
  render: args => <Main {...args} />
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const y=["Primary","WithSection"];export{r as Primary,n as WithSection,y as __namedExportsOrder,M as default};
