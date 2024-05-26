import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{S as x}from"./index-DCVwi35s.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({children:a,noProse:d=!1,maxWidth:p="5xl"})=>{const u=d?"":"prose prose-lg md:prose-xl";return e.jsx("main",{className:`ui-main ui-max-width-${p} px-6 py-5 md:p-8 ${u}`,children:a})};s.__docgenInfo={description:"",methods:[],displayName:"Main",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'5xl' | '6xl' | '7xl' | 'max' | 'full'",elements:[{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"'max'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},noProse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y={title:"Layouts/Main",component:s,tags:["autodocs"]},r={args:{maxWidth:"5xl",noProse:!1},render:a=>e.jsx(s,{...a,children:e.jsx("p",{children:"Main element"})})},n={args:{...r.args,children:e.jsx(x,{children:e.jsx("p",{children:"Main element"})})},render:a=>e.jsx(s,{...a})};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: ({
    maxWidth: '5xl',
    noProse: false
  } as MainProps),
  render: args => <Main {...args}>
      <p>Main element</p>
    </Main>
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: ({
    ...Primary.args,
    children: <Section>
        <p>Main element</p>
      </Section>
  } as MainProps),
  render: args => <Main {...args} />
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const j=["Primary","WithSection"];export{r as Primary,n as WithSection,j as __namedExportsOrder,y as default};
