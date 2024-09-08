import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as p}from"./tailwindProps-CLTzxpUI.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({children:a})=>e.jsx("div",{children:a});s.displayName="Column.Content";s.__docgenInfo={description:"",methods:[],displayName:"Column.Content",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=({children:a,cols:m=2,gap:u=20})=>{const c={gridGap:u||""};return e.jsx("div",{className:`ui-column grid ${p[m]}`,style:c,children:a})},t=Object.assign(o,{Content:s});o.__docgenInfo={description:"",methods:[],displayName:"ColumnContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof uiGridColumns",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"'1/3'"},{name:"literal",value:"'2/3'"}]},description:"",defaultValue:{value:"2",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const g={title:"Layouts/Column",component:t,tags:["autodocs"]},n={args:{cols:2,gap:25},render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Content,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut quam."})}),e.jsx(t.Content,{children:e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})})]})};var i,l,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    cols: 2,
    gap: 25
  } as ColumnProps),
  render: args => <Column {...args}>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus
          iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam
          erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem
          dui ut quam.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
          fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus
          sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
        </p>
      </Column.Content>
    </Column>
}`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const q=["Primary"];export{n as Primary,q as __namedExportsOrder,g as default};
