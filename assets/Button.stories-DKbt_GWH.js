import{r as R}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";var E={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=R,C=Symbol.for("react.element"),P=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,z=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function O(o,e,n){var r,t={},a=null,p=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)q.call(e,r)&&!I.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:C,type:o,key:a,ref:p,props:t,_owner:z.current}}i.Fragment=P;i.jsx=O;i.jsxs=O;E.exports=i;var N=E.exports;const m=({primary:o=!1,size:e="medium",backgroundColor:n,label:r,...t})=>{const a=o?"storybook-button--primary":"storybook-button--secondary";return N.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,a].join(" "),style:{backgroundColor:n},...t,children:r})};try{m.displayName="Button",m.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const V={title:"Example/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},s={args:{primary:!0,label:"Button"}},l={args:{label:"Button"}},u={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var d,y,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(_=(g=l.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var k,v,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,S,h;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const T=["Primary","Secondary","Large","Small"];export{u as Large,s as Primary,l as Secondary,c as Small,T as __namedExportsOrder,V as default};
