import{r as j}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";var O={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=j,q=Symbol.for("react.element"),z=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,P=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function R(a,e,n){var r,o={},t=null,p=null;n!==void 0&&(t=""+n),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)N.call(e,r)&&!h.hasOwnProperty(r)&&(o[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:q,type:a,key:t,ref:p,props:o,_owner:P.current}}i.Fragment=z;i.jsx=R;i.jsxs=R;O.exports=i;var L=O.exports;const m=({primary:a=!1,size:e="medium",backgroundColor:n,label:r,...o})=>{const t=a?"storybook-button--primary":"storybook-button--secondary";return L.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,t].join(" "),style:{backgroundColor:n},...o,children:r})};try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const I={title:"Example/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},s={args:{primary:!0,label:"Button"}},l={args:{label:"Button"}},u={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var d,y,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,_,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var v,k,x;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,S,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const T=["Primary","Secondary","Large","Small"];export{u as Large,s as Primary,l as Secondary,c as Small,T as __namedExportsOrder,I as default};
