import{u as te,a as j,M as ne,b as oe,c as B,L as le,d as ae}from"./app-5ef55d1d.js";import{r as T,h as b,c as se,u as re,L as ie,a8 as ce,o as ue,n as de,j as o,a9 as D,z as ve}from"./framework-35149b8f.js";function he(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var R=!1;if(typeof window<"u"){var Q={get passive(){R=!0}};window.addEventListener("testPassive",null,Q),window.removeEventListener("testPassive",null,Q)}var V=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],C=!1,G=-1,L=void 0,S=void 0,W=function(e){return w.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},A=function(e){var n=e||window.event;return W(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},pe=function(e){if(S===void 0){var n=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;n&&l>0&&(S=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}L===void 0&&(L=document.body.style.overflow,document.body.style.overflow="hidden")},fe=function(){S!==void 0&&(document.body.style.paddingRight=S,S=void 0),L!==void 0&&(document.body.style.overflow=L,L=void 0)},ye=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},me=function(e,n){var l=e.targetTouches[0].clientY-G;return W(e.target)?!1:n&&n.scrollTop===0&&l>0||ye(n)&&l<0?A(e):(e.stopPropagation(),!0)},ge=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(a){return a.targetElement===e})){var l={targetElement:e,options:n||{}};w=[].concat(he(w),[l]),V?(e.ontouchstart=function(a){a.targetTouches.length===1&&(G=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&me(a,e)},C||(document.addEventListener("touchmove",A,R?{passive:!1}:void 0),C=!0)):pe(n)}},we=function(){V?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),C&&(document.removeEventListener("touchmove",A,R?{passive:!1}:void 0),C=!1),G=-1):fe(),w=[]};const Te="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";const Y=()=>o(B,{name:"close"},()=>o("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));Y.displayName="CloseIcon";const x=()=>o(B,{name:"heading"},()=>o("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));x.displayName="HeadingIcon";const Z=()=>o(B,{name:"heart"},()=>o("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Z.displayName="HeartIcon";const N=()=>o(B,{name:"history"},()=>o("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));N.displayName="HistoryIcon";const U=()=>o(B,{name:"title"},()=>o("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));U.displayName="TitleIcon";const Le={},Se=300,X=5,Be={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},ke="search-pro-history-results",m=te(ke,[]),Ie=()=>({history:m,addHistory:t=>{m.value.length<X?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,X-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),be=T(Te),Ce=b(()=>JSON.parse(le(be.value))),I=(t,e)=>{const n=t.toLowerCase(),l=e.toLowerCase(),a=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&a.push(i),v+=i.length,p||(a.push(["strong",e]),v+=e.length,v>=100&&a.push(" …"))};let f=n.indexOf(l,r);if(f===-1)return null;for(;f>=0;){const s=f+l.length;if(h(t.slice(r,f)),r=s,v>100)break;f=n.indexOf(l,r)}return v<100&&h(t.slice(r),!0),a},z=t=>t.reduce((e,{type:n})=>e+(n==="title"?50:n==="heading"?20:n==="custom"?10:1),0),Ae=(t,e)=>{var n;const l={};for(const[a,r]of Object.entries(e)){const v=((n=e[a.replace(/\/[^\\]*$/,"")])==null?void 0:n.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=I(r.title,t);f&&(l[h]=[...l[h]||[],{type:"title",path:a,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const c=I(i,t);c&&(l[h]=[...l[h]||[],{type:"custom",path:a,index:s,display:c}])})});for(const s of r.contents){const p=I(s.header,t);p&&(l[h]=[...l[h]||[],{type:"heading",path:a+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const c=I(i,t);c&&(l[h]=[...l[h]||[],{type:"content",header:s.header,path:a+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(l).sort((a,r)=>z(l[a])-z(l[r])).map(a=>({title:a,contents:l[a]}))},He=t=>{const e=j(),n=T([]),l=b(()=>Ce.value[e.value]),a=ae(r=>{n.value=r?Ae(r,l.value):[]},Se);return ve([t,e],()=>{a(t.value)}),n};var Re=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const n=re(),l=ie(),a=j(),r=ne(Be),{history:v,addHistory:h,removeHistory:f}=Ie(),s=ce(t,"query"),p=He(s),i=T(0),c=T(0),J=T(),H=b(()=>p.value.length>0),M=b(()=>p.value[i.value]||null),K=()=>{i.value=i.value>0?i.value-1:p.value.length-1,c.value=M.value.contents.length-1},q=()=>{i.value=i.value<p.value.length-1?i.value+1:0,c.value=0},$=()=>{c.value<M.value.contents.length-1?c.value=c.value+1:q()},_=()=>{c.value>0?c.value=c.value-1:K()},P=u=>u.map(d=>typeof d=="string"?d:o(d[0],d[1])),E=u=>{if(u.type==="custom"){const d=Le[u.index]||"$content",[g,k=""]=typeof d=="object"?d[a.value].split("$content"):d.split("$content");return P([g,...u.display,k])}return P(u.display)},F=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{oe("keydown",u=>{if(H.value){if(u.key==="ArrowUp")_();else if(u.key==="ArrowDown")$();else if(u.key==="Enter"){const d=M.value.contents[c.value];l.path!==d.path&&(h(d),n.push(d.path),F())}}}),ge(J.value,{reserveScrollBarGap:!0})}),de(()=>{we()}),()=>o("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!H.value}],ref:J},s.value===""?v.value.length?o("ul",{class:"search-pro-result-list"},o("li",{class:"search-pro-result-list-item"},[o("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>o(D,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),F()}},()=>[o(N,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?o("div",{class:"content-header"},u.header):null,o("div",E(u))]),o("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},o(Y))]))])):r.value.emptyHistory:H.value?o("ul",{class:"search-pro-result-list"},p.value.map(({title:u,contents:d},g)=>{const k=i.value===g;return o("li",{class:["search-pro-result-list-item",{active:k}]},[o("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((y,ee)=>{const O=k&&c.value===ee;return o(D,{to:y.path,class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(y),F()}},()=>[y.type==="content"?null:o(y.type==="title"?U:y.type==="heading"?x:Z,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?o("div",{class:"content-header"},y.header):null,o("div",E(y))])])})])})):r.value.emptyResult)}});export{Re as default};