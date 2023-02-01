import{u as ae,a as Z,Y as le,b as oe,R as A,l as se,c as re,S as P,D as ne}from"./app-0546e7af.js";import{r as R,h as C,c as ie,u as ue,L as ce,ab as de,o as ve,n as he,j as l,a5 as F,z as pe,K as fe,i as me}from"./framework-cdc56dbd.js";function ye(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}else return Array.from(t)}var B=!1;if(typeof window<"u"){var O={get passive(){B=!0}};window.addEventListener("testPassive",null,O),window.removeEventListener("testPassive",null,O)}var j=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],T=!1,z=-1,E=void 0,H=void 0,G=function(e){return w.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},M=function(e){var a=e||window.event;return G(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},ge=function(e){if(H===void 0){var a=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;a&&o>0&&(H=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}E===void 0&&(E=document.body.style.overflow,document.body.style.overflow="hidden")},we=function(){H!==void 0&&(document.body.style.paddingRight=H,H=void 0),E!==void 0&&(document.body.style.overflow=E,E=void 0)},Re=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Ee=function(e,a){var o=e.targetTouches[0].clientY-z;return G(e.target)?!1:a&&a.scrollTop===0&&o>0||Re(a)&&o<0?M(e):(e.stopPropagation(),!0)},He=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(s){return s.targetElement===e})){var o={targetElement:e,options:a||{}};w=[].concat(ye(w),[o]),j?(e.ontouchstart=function(s){s.targetTouches.length===1&&(z=s.targetTouches[0].clientY)},e.ontouchmove=function(s){s.targetTouches.length===1&&Ee(s,e)},T||(document.addEventListener("touchmove",M,B?{passive:!1}:void 0),T=!0)):ge(a)}},Ae=function(){j?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),T&&(document.removeEventListener("touchmove",M,B?{passive:!1}:void 0),T=!1),z=-1):we(),w=[]};const Ne="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";const V=()=>l(A,{name:"close"},()=>l("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));V.displayName="CloseIcon";const J=()=>l(A,{name:"heading"},()=>l("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));J.displayName="HeadingIcon";const K=()=>l(A,{name:"heart"},()=>l("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));K.displayName="HeartIcon";const x=()=>l(A,{name:"history"},()=>l("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));x.displayName="HistoryIcon";const W=()=>l(A,{name:"title"},()=>l("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));W.displayName="TitleIcon";const Le={},Ce=300,Q=5,Te={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Me="search-pro-history-results",y=ae(Me,[]),ke=()=>({history:y,addHistory:t=>{y.value.length<Q?y.value=[t,...y.value]:y.value=[t,...y.value.slice(0,Q-1)]},removeHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}),Ie=R(Ne),be=C(()=>JSON.parse(se(Ie.value))),L=(t,e)=>{const a=t.toLowerCase(),o=e.toLowerCase(),s=[];let n=0,v=0;const h=(r,p=!1)=>{let i="";v===0?i=r.length>20?`… ${r.slice(-20)}`:r:p?i=r.length+v>100?`${r.slice(0,100-v)}… `:r:i=r.length>20?`${r.slice(0,20)} … ${r.slice(-20)}`:r,i&&s.push(i),v+=i.length,p||(s.push(["strong",e]),v+=e.length,v>=100&&s.push(" …"))};let f=a.indexOf(o,n);if(f===-1)return null;for(;f>=0;){const r=f+o.length;if(h(t.slice(n,f)),n=r,v>100)break;f=a.indexOf(o,n)}return v<100&&h(t.slice(n),!0),s},U=t=>t.reduce((e,{type:a})=>e+(a==="title"?50:a==="heading"?20:a==="custom"?10:1),0),Be=(t,e)=>{var a;const o={};for(const[s,n]of P(e)){const v=((a=e[s.replace(/\/[^\\]*$/,"")])==null?void 0:a.title)||"",h=`${v?`${v} > `:""}${n.title}`,f=L(n.title,t);f&&(o[h]=[...o[h]||[],{type:"title",path:s,display:f}]),n.customFields&&P(n.customFields).forEach(([r,p])=>{p.forEach(i=>{const u=L(i,t);u&&(o[h]=[...o[h]||[],{type:"custom",path:s,index:r,display:u}])})});for(const r of n.contents){const p=L(r.header,t);p&&(o[h]=[...o[h]||[],{type:"heading",path:s+(r.slug?`#${r.slug}`:""),display:p}]);for(const i of r.contents){const u=L(i,t);u&&(o[h]=[...o[h]||[],{type:"content",header:r.header,path:s+(r.slug?`#${r.slug}`:""),display:u}])}}}return ne(o).sort((s,n)=>U(o[s])-U(o[n])).map(s=>({title:s,contents:o[s]}))},ze=t=>{const e=Z(),a=R([]),o=C(()=>be.value[e.value]),s=re(n=>{a.value=n?Be(n,o.value):[]},Ce);return pe([t,e],()=>{s(t.value)}),a};var qe=ie({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const a=ue(),o=ce(),s=Z(),n=le(Te),{history:v,addHistory:h,removeHistory:f}=ke(),r=de(t,"query"),p=ze(r),i=R(0),u=R(0),S=R(),k=C(()=>p.value.length>0),I=C(()=>p.value[i.value]||null),Y=()=>{i.value=i.value>0?i.value-1:p.value.length-1,u.value=I.value.contents.length-1},$=()=>{i.value=i.value<p.value.length-1?i.value+1:0,u.value=0},_=()=>{u.value<I.value.contents.length-1?u.value=u.value+1:$()},ee=()=>{u.value>0?u.value=u.value-1:Y()},X=c=>c.map(d=>me(d)?d:l(d[0],d[1])),q=c=>{if(c.type==="custom"){const d=Le[c.index]||"$content",[g,N=""]=fe(d)?d[s.value].split("$content"):d.split("$content");return X([g,...c.display,N])}return X(c.display)},b=()=>{i.value=0,u.value=0,e("updateQuery",""),e("close")};return ve(()=>{oe("keydown",c=>{if(k.value){if(c.key==="ArrowUp")ee();else if(c.key==="ArrowDown")_();else if(c.key==="Enter"){const d=I.value.contents[u.value];o.path!==d.path&&(h(d),a.push(d.path),b())}}}),He(S.value,{reserveScrollBarGap:!0})}),he(()=>{Ae()}),()=>l("div",{class:["search-pro-result",{empty:r.value===""?v.value.length===0:!k.value}],ref:S},r.value===""?v.value.length?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},n.value.history),v.value.map((c,d)=>l(F,{to:c.path,class:["search-pro-result-item",{active:u.value===d}],onClick:()=>{console.log("click"),b()}},()=>[l(x,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[c.type==="content"&&c.header?l("div",{class:"content-header"},c.header):null,l("div",q(c))]),l("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},l(V))]))])):n.value.emptyHistory:k.value?l("ul",{class:"search-pro-result-list"},p.value.map(({title:c,contents:d},g)=>{const N=i.value===g;return l("li",{class:["search-pro-result-list-item",{active:N}]},[l("div",{class:"search-pro-result-title"},c||"Documentation"),d.map((m,te)=>{const D=N&&u.value===te;return l(F,{to:m.path,class:["search-pro-result-item",{active:D,"aria-selected":D}],onClick:()=>{h(m),b()}},()=>[m.type==="content"?null:l(m.type==="title"?W:m.type==="heading"?J:K,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[m.type==="content"&&m.header?l("div",{class:"content-header"},m.header):null,l("div",q(m))])])})])})):n.value.emptyResult)}});export{qe as default};
