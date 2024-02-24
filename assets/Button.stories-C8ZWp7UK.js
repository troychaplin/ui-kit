import{r as R}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";var E={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=R,C=Symbol.for("react.element"),P=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,q=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function O(a,e,o){var r,t={},c=null,m=null;o!==void 0&&(c=""+o),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(m=e.ref);for(r in e)j.call(e,r)&&!I.hasOwnProperty(r)&&(t[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:C,type:a,key:c,ref:m,props:t,_owner:q.current}}i.Fragment=P;i.jsx=O;i.jsxs=O;E.exports=i;var N=E.exports;const p=({primary:a=!1,size:e="medium",backgroundColor:o,label:r,...t})=>N.jsx("button",{type:"button",className:"bg-green-800",style:{backgroundColor:o},...t,children:r});try{p.displayName="Button",p.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const V={title:"Example/Button",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},n={args:{primary:!0,label:"Button"}},s={args:{label:"Button"}},l={args:{size:"large",label:"Button"}},u={args:{size:"small",label:"Button"}};var d,y,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,_,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,x,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,h,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const T=["Primary","Secondary","Large","Small"];export{l as Large,n as Primary,s as Secondary,u as Small,T as __namedExportsOrder,V as default};
