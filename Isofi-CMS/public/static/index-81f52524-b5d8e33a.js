import{s as j,r as l,j as t,P as h,a as v,u as _,b,c as B,B as E,d as H,A as I,e as y,f as k}from"./sanity-46063217.js";function C(e){const{actionHandlers:n,index:o,menuItems:s,menuItemGroups:r,title:i}=e,{features:a}=_();return!(s!=null&&s.length)&&!i?null:t.jsx(b,{actions:t.jsx(B,{menuItems:s,menuItemGroups:r,actionHandlers:n}),backButton:a.backButton&&o>0&&t.jsx(E,{as:H,"data-as":"a",icon:I,mode:"bleed"}),title:i})}var d=Object.freeze,w=Object.defineProperty,A=(e,n)=>d(w(e,"raw",{value:d(n||e.slice())})),u;const R=j(y)(u||(u=A([`
  position: relative;
`])));function U(e){const{children:n}=e,{collapsed:o}=k();return t.jsx(R,{hidden:o,height:"fill",overflow:"auto",children:n})}function G(e){const{index:n,pane:o,paneKey:s,...r}=e,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:g,...x}=o,[c,P]=l.useState(null);return t.jsxs(h,{id:s,minWidth:320,selected:r.isSelected,children:[t.jsx(C,{actionHandlers:c==null?void 0:c.actionHandlers,index:n,menuItems:m,menuItemGroups:p,title:f}),t.jsxs(U,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...x,ref:P,child:i,paneKey:s}),l.isValidElement(a)&&a]})]})}export{G as default};
