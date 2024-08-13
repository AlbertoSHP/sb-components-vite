import{j as S}from"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";const f=({label:s,size:g="normal",allCaps:x=!1,color:v,fontColor:h})=>S.jsx("span",{className:`${g} ${v} label`,style:{color:h},children:x?s.toUpperCase():s});f.__docgenInfo={description:"allCaps: boolean",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label Color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const q={title:"UI/labels/MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label",size:"normal"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",fontColor:"blue"}},l={args:{label:"Custom color label"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Basic label",
    size: "normal"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All caps label",
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    fontColor: "blue"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,y,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Custom color label"
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const L=["Basic","AllCaps","Secondary","CustomColors"];export{a as AllCaps,e as Basic,l as CustomColors,r as Secondary,L as __namedExportsOrder,q as default};
