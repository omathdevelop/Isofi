import{s as Y,B as D,r as o,u as Be,f as ye,j as t,b as Qe,c as We,d as ge,e as qe,A as Ve,W as Ye,S as ze,C as Se,g as ee,h as Ue,i as He,k as Ge,l as Ke,P as Xe,_ as Je,m as Ze,n as et,o as tt,p as nt,q as st,t as rt,F as Q,v as at,T as W,w as K,x as xe,H as ot,y as it,z as ct,E as lt,G as ut,I as dt,J as se,K as mt,L as ve,M as pt,N as re,O as X,Q as ht,R as Ie,U as ft,V as be,X as q,Y as V,Z as yt,$ as gt,a0 as St,a1 as ae,a2 as xt,a3 as Te,a4 as vt,a5 as It,a6 as bt,a7 as Tt,a8 as jt,a9 as Lt,aa as _t,ab as Rt,ac as Et,ad as wt,ae as Pt}from"./sanity-aa9fa547.js";import{useDeskToolSetting as oe}from"./index-9c45d2a0-431b9ccc.js";import{P as Ct}from"./PaneItem-a516bd14-491f120b.js";const ie=100,J=2e3,je={by:[{field:"_updatedAt",direction:"desc"}]},At={};function Mt(s){return bt(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function Le(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=s.match(Ot);if(!r)return null;const n=(r[1]||r[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const a=n.slice(1),d=e[a];return typeof d=="string"?d:null}return n}function Ft(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Dt(s,e){const r=s.by.map(n=>{if(n.mapWith)return n;const a=Nt(e,n.field);return a?kt(a,"datetime")?{...n,mapWith:"dateTime"}:a.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return r.every((n,a)=>n===s.by[a])?s:{...s,by:r}}function Nt(s,e){const r=Ze(e);let n=s;for(const a of r){if(!n)return;if(typeof a=="string"){n=$t(n,a);continue}if(!(et(a)||tt(a))||n.jsonType!=="array")return;const[i,c]=n.of||[];if(c||!i)return;if(!nt(i)){n=i;continue}const[l,m]=i.to||[];if(m||!l)return;n=l}return n}function $t(s,e){if(!("fields"in s))return;const r=s.fields.find(n=>n.name===e);return r?r.type:void 0}function kt(s,e){let r=s.type;for(;r;){if(r.name===e||!r.type&&r.jsonType===e)return!0;r=r.type}return!1}var ce=Object.freeze,Bt=Object.defineProperty,_e=(s,e)=>ce(Bt(s,"raw",{value:ce(e||s.slice())})),le,ue;const Qt=Y(D)(le||(le=_e([`
  position: relative;
`]))),Wt=Y(D)(ue||(ue=_e([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),qt=[...Array(30).keys()];function Vt(s){const{layout:e}=s;return t.jsx(xe,{padding:2,space:1,children:qt.map(r=>t.jsx(Se,{padding:2,children:t.jsx(Tt,{isPlaceholder:!0,layout:e})},r))})}function Yt(s){const{childItemId:e,error:r,filterIsSimpleTypeConstraint:n,hasMaxItems:a,hasSearchQuery:d,isActive:i,isLazyLoading:c,isLoading:l,items:m,layout:v,loadingVariant:y,onListChange:I,onRetry:g,paneTitle:u,searchInputElement:b,showIcons:T}=s,E=ee(),{collapsed:L}=st(),{collapsed:p,index:_}=ye(),[j,S]=o.useState(!1),C=o.useCallback(()=>{l||c||!j||I()},[c,l,I,j]);o.useEffect(()=>{if(p)return;const x=setTimeout(()=>{S(!0)},0);return()=>{clearTimeout(x)}},[p,m]);const A=o.useCallback((x,h)=>{let{activeIndex:P}=h;const M=rt(x._id),O=e===M,f=!i&&O,R=i&&O,F=P===m.length-1,z=F&&c,U=F&&a;return t.jsxs(t.Fragment,{children:[t.jsx(Ct,{icon:T===!1?!1:void 0,id:M,layout:v,marginBottom:1,pressed:f,schemaType:E.get(x._type),selected:R,value:x}),z&&t.jsx(Q,{align:"center",justify:"center",padding:4,children:t.jsx(at,{muted:!0})}),U&&t.jsx(D,{marginY:1,paddingX:3,paddingY:4,children:t.jsxs(W,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",J," documents"]})})]})},[e,i,m.length,v,E,T,a,c]),N=o.useMemo(()=>d?t.jsx(Q,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsx(D,{paddingX:4,paddingY:5,children:t.jsx(W,{align:"center",muted:!0,children:"No results found"})})})}):t.jsx(Q,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsx(D,{paddingX:4,paddingY:5,children:t.jsx(W,{align:"center",muted:!0,children:n?"No documents of this type":"No matching documents"})})})}),[n,d]),w=o.useMemo(()=>{if(!j)return null;if(r)return t.jsx(Q,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsxs(xe,{paddingX:4,paddingY:5,space:4,children:[t.jsx(ot,{as:"h3",children:"Could not fetch list items"}),t.jsxs(W,{as:"p",children:["Error: ",t.jsx("code",{children:r.message})]}),g&&t.jsx(D,{children:t.jsx(ge,{icon:it,onClick:g,text:"Retry",tone:"primary"})})]})})});if(!l&&m.length===0)return N;if(y==="initial"&&l)return t.jsx(ct,{ms:300,children:t.jsx(Vt,{layout:v})});if(y==="spinner"&&l)return null;const x="".concat(_,"-").concat(p);return t.jsx(Qt,{overflow:"hidden",height:"fill",children:t.jsx(Wt,{children:t.jsx(lt,{activeItemDataAttr:"data-hovered",ariaLabel:u,canReceiveFocus:!0,focusRingOffset:-3,inputElement:b,itemHeight:51,items:m,onEndReached:C,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:A,wrapAround:!1},x)})})},[p,r,C,_,l,m,v,y,g,A,b,j]);return t.jsx(ut,{overflow:L||y==="initial"?"hidden":"auto",children:w})}const Re=o.memo(s=>{let{contentAfter:e,index:r,initialValueTemplates:n=[],menuItemGroups:a=[],menuItems:d=[],setLayout:i,setSortOrder:c,title:l}=s;const{features:m}=Be(),{collapsed:v,isLast:y}=ye(),I=y&&!v?-1:0,g=o.useMemo(()=>({setLayout:u=>{let{layout:b}=u;i(b)},setSortOrder:u=>{c(u)}}),[i,c]);return t.jsx(Qe,{actions:t.jsx(We,{initialValueTemplateItems:n,actionHandlers:g,menuItemGroups:a,menuItems:d}),backButton:m.backButton&&r>0&&t.jsx(ge,{as:qe,"data-as":"a",icon:Ve,mode:"bleed"}),contentAfter:e,tabIndex:I,title:l})});Re.displayName="DocumentListPaneHeader";function zt(s){const{client:e,schema:r,sort:n,limit:a,params:d,filter:i,searchQuery:c,staticTypeNames:l}=s,m=n.by,v=n==null?void 0:n.extendedProjection,y=jt(()=>e.listen("*[".concat(i,"]"),d,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(q((u,b)=>b===0&&u.type!=="welcome"?X(()=>new Error(u.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(u.type,'"'))):V(u)),Lt()),[I,g]=_t(y,u=>u.type==="welcome");return Ie(I.pipe(be(1)),g.pipe(Rt(1e3,wt,{leading:!0,trailing:!0}))).pipe(Et(u=>(l?V(l):e.observable.fetch("array::unique(*[".concat(i,"][]._type)"),d)).pipe(q(T=>{const E=T.flatMap(C=>r.get(C)||[]),L={filter:i,query:c||"",types:E},p={__unstable_extendedProjection:v,comments:["findability-source: ".concat(c?"list-query":"list")],limit:a,params:d,sort:m},{query:_,params:j}=Pt(L,p),S=()=>e.observable.fetch(_,j);return u.type==="mutation"&&u.visibility!=="query"?Te(1200).pipe(q(S)):S()}))))}const Ut=[],de={error:null,onRetry:void 0,result:null},Ht={result:null,error:null};function Gt(s){const{filter:e,params:r,sortOrder:n,searchQuery:a,apiVersion:d}=s,i=dt({...se,apiVersion:d||se.apiVersion}),c=ee(),[l,m]=o.useState(de),{onRetry:v,error:y,result:I}=l,g=I==null?void 0:I.documents,u=o.useMemo(()=>g?Mt(g):Ut,[g]),[b,T]=o.useState(!1),[E,L]=o.useState(!1),[p,_]=o.useState(!1),j=o.useMemo(()=>Le(e,r),[e,r]),S=I===null&&!y,C=(g==null?void 0:g.length)===J,A=o.useCallback(()=>{S||E||p||_(!0)},[S,E,p]),N=o.useCallback(h=>{var P,M;if(h.error){m(h);return}const O=((M=(P=h.result)==null?void 0:P.documents)==null?void 0:M.length)||0;if(!h.error&&(h==null?void 0:h.result)===null&&p){T(!0);return}if(O<ie&&O!==0&&!p&&L(!0),(h==null?void 0:h.result)===null){m(R=>({...R.error?h:R}));return}T(!1),m(h)},[p]),w=o.useMemo(()=>{const h=new mt,P=()=>h.next();return zt({client:i,filter:e,limit:p?J:ie,params:r,schema:c,searchQuery:a||"",sort:n||je,staticTypeNames:j?[j]:void 0}).pipe(ve(f=>({result:{documents:f},error:null})),pt(Ht),re(f=>f instanceof ProgressEvent?X(()=>new Error("Request error")):X(()=>f)),re((f,R)=>ht(V({result:null,error:f}),Ie(ft(window,"online"),h).pipe(be(1),q(()=>R)))),yt((f,R)=>({...f,...R,onRetry:P})))},[i,e,r,c,a,p,n,j]);o.useEffect(()=>{const h=w.subscribe(N);return()=>{h.unsubscribe()}},[N,w]);const x=o.useCallback(()=>{L(!1),T(!1),m(de),_(!1)},[]);return o.useEffect(()=>{x()},[x,e,r,n,a]),{error:y,hasMaxItems:C,isLazyLoading:b,isLoading:S,isSearchReady:!y,items:u,onListChange:A,onRetry:v}}var me=Object.freeze,Kt=Object.defineProperty,te=(s,e)=>me(Kt(s,"raw",{value:me(e||s.slice())})),pe,he,fe;const Z=[],Xt=Ye(pe||(pe=te([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Jt=Y(ze)(he||(he=te([`
  animation: `,` 500ms linear infinite;
`])),Xt),Zt=Y(Se)(fe||(fe=te([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function en(s){const e=o.useRef(s);return gt(e.current,s)||(e.current=s),e.current}const tn=s=>{const{menuItems:e,sortOrderRaw:r,layout:n}=s;return e==null?void 0:e.map(a=>{var d,i,c,l;return(d=a.params)!=null&&d.layout?{...a,selected:n===((i=a.params)==null?void 0:i.layout)}:(c=a==null?void 0:a.params)!=null&&c.by?{...a,selected:St(r==null?void 0:r.by,((l=a==null?void 0:a.params)==null?void 0:l.by)||Z)}:{...a,selected:!1}})},an=o.memo(function(e){const{childItemId:r,index:n,isActive:a,isSelected:d,pane:i,paneKey:c}=e,l=ee(),{name:m}=Ue(),{defaultLayout:v="default",displayOptions:y,initialValueTemplates:I=Z,menuItemGroups:g,menuItems:u,options:b,title:T}=i,{apiVersion:E,defaultOrdering:L=Z,filter:p}=b,_=en(b.params||At),j=i.source,S=o.useMemo(()=>Le(p,_),[p,_]),C=(y==null?void 0:y.showIcons)!==!1,[A,N]=oe(S,"layout",v),[w,x]=o.useState(""),[h,P]=o.useState(""),[M,O]=o.useState(null),f=o.useRef(!1),R=o.useMemo(()=>(L==null?void 0:L.length)>0?{by:L}:je,[L]),[F,z]=oe(S,"sortOrder",R),U=S&&F?Dt(F,l.get(S)):F,Ee=He(U),we=Ft(p),{error:Pe,hasMaxItems:Ce,isLazyLoading:Ae,isLoading:$,isSearchReady:Me,items:H,onListChange:Oe,onRetry:Fe}=Gt({apiVersion:E,filter:p,params:_,searchQuery:w==null?void 0:w.trim(),sortOrder:Ee}),De=o.useMemo(()=>tn({menuItems:u,sortOrderRaw:F,layout:A}),[A,u,F]),Ne=Ge(B=>B.pipe(ve(G=>G.target.value),ae(P),xt(G=>G===""?V(""):Te(300)),ae(x)),[]),k=o.useCallback(()=>{x(""),P("")},[]),$e=o.useCallback(B=>{B.key==="Escape"&&k()},[k]);o.useEffect(()=>(f.current===!1&&!$&&(f.current=!0),()=>{f.current=!1}),[$]),o.useEffect(()=>{k(),f.current=!1},[c,k]);const ne=o.useMemo(()=>$&&H.length===0&&f.current?"spinner":"initial",[$,H.length]),ke=t.jsx(D,{paddingX:2,paddingBottom:2,children:t.jsx(Zt,{radius:4,tone:"transparent",children:t.jsx(vt,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!w,disabled:!Me,fontSize:[2,2,1],icon:ne==="spinner"?Jt:It,onChange:Ne,onClear:k,onKeyDown:$e,placeholder:"Search list",radius:2,ref:O,spellCheck:!1,value:h})})});return t.jsx(Ke,{name:j||m,children:t.jsxs(Xe,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:c,maxWidth:640,minWidth:320,selected:d,children:[Je,t.jsx(Re,{contentAfter:ke,index:n,initialValueTemplates:I,menuItemGroups:g,menuItems:De,setLayout:N,setSortOrder:z,title:T}),t.jsx(Yt,{childItemId:r,error:Pe,filterIsSimpleTypeConstraint:we,hasMaxItems:Ce,hasSearchQuery:!!w,isActive:a,isLazyLoading:Ae,isLoading:$,items:H,layout:A,loadingVariant:ne,onListChange:Oe,onRetry:Fe,paneTitle:T,searchInputElement:M,showIcons:C},c)]})})});export{an as default};
