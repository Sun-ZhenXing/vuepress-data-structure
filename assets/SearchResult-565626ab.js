import{u as te,a as N,k as oe,b as ae,P as B,B as le,c as ne}from"./app-0cc6a030.js";import{r as O,h as C,c as se,u as re,L as ce,aa as ue,o as ie,n as de,j as a,ab as U,z as ve,K as he,i as fe}from"./framework-d3922052.js";function pe(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var F=!1;if(typeof window<"u"){var G={get passive(){F=!0}};window.addEventListener("testPassive",null,G),window.removeEventListener("testPassive",null,G)}var W=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],L=!1,J=-1,A=void 0,b=void 0,X=function(e){return w.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},R=function(e){var o=e||window.event;return X(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},ye=function(e){if(b===void 0){var o=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;o&&l>0&&(b=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}A===void 0&&(A=document.body.style.overflow,document.body.style.overflow="hidden")},me=function(){b!==void 0&&(document.body.style.paddingRight=b,b=void 0),A!==void 0&&(document.body.style.overflow=A,A=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,o){var l=e.targetTouches[0].clientY-J;return X(e.target)?!1:o&&o.scrollTop===0&&l>0||ge(o)&&l<0?R(e):(e.stopPropagation(),!0)},Oe=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(n){return n.targetElement===e})){var l={targetElement:e,options:o||{}};w=[].concat(pe(w),[l]),W?(e.ontouchstart=function(n){n.targetTouches.length===1&&(J=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&we(n,e)},L||(document.addEventListener("touchmove",R,F?{passive:!1}:void 0),L=!0)):ye(o)}},Ae=function(){W?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),L&&(document.removeEventListener("touchmove",R,F?{passive:!1}:void 0),L=!1),J=-1):me(),w=[]};const be="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";const j=()=>a(B,{name:"close"},()=>a("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));j.displayName="CloseIcon";const q=()=>a(B,{name:"heading"},()=>a("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));q.displayName="HeadingIcon";const V=()=>a(B,{name:"heart"},()=>a("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));V.displayName="HeartIcon";const K=()=>a(B,{name:"history"},()=>a("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));K.displayName="HistoryIcon";const Y=()=>a(B,{name:"title"},()=>a("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Y.displayName="TitleIcon";const Be={},He=300,P=5,Se={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Ce="search-pro-history-results",m=te(Ce,[]),Le=()=>({history:m,addHistory:t=>{m.value.length<P?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,P-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),Re=O(be),Ee=C(()=>JSON.parse(le(Re.value))),S=(t,e)=>{const o=t.toLowerCase(),l=e.toLowerCase(),n=[];let r=0,v=0;const h=(s,f=!1)=>{let c="";v===0?c=s.length>20?`… ${s.slice(-20)}`:s:f?c=s.length+v>100?`${s.slice(0,100-v)}… `:s:c=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,c&&n.push(c),v+=c.length,f||(n.push(["strong",e]),v+=e.length,v>=100&&n.push(" …"))};let p=o.indexOf(l,r);if(p===-1)return null;for(;p>=0;){const s=p+l.length;if(h(t.slice(r,p)),r=s,v>100)break;p=o.indexOf(l,r)}return v<100&&h(t.slice(r),!0),n},z=t=>t.reduce((e,{type:o})=>e+(o==="title"?50:o==="heading"?20:o==="custom"?10:1),0),De=(t,e)=>{var o;const l={};for(const[n,r]of Object.entries(e)){const v=((o=e[n.replace(/\/[^\\]*$/,"")])==null?void 0:o.title)||"",h=`${v?`${v} > `:""}${r.title}`,p=S(r.title,t);p&&(l[h]=[...l[h]||[],{type:"title",path:n,display:p}]),r.customFields&&Object.entries(r.customFields).forEach(([s,f])=>{f.forEach(c=>{const u=S(c,t);u&&(l[h]=[...l[h]||[],{type:"custom",path:n,index:s,display:u}])})});for(const s of r.contents){const f=S(s.header,t);f&&(l[h]=[...l[h]||[],{type:"heading",path:n+(s.slug?`#${s.slug}`:""),display:f}]);for(const c of s.contents){const u=S(c,t);u&&(l[h]=[...l[h]||[],{type:"content",header:s.header,path:n+(s.slug?`#${s.slug}`:""),display:u}])}}}return Object.keys(l).sort((n,r)=>z(l[n])-z(l[r])).map(n=>({title:n,contents:l[n]}))},xe=t=>{const e=N(),o=O([]),l=C(()=>Ee.value[e.value]),n=ne(r=>{o.value=r?De(r,l.value):[]},He);return ve([t,e],()=>{n(t.value)}),o};var Qe=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const o=re(),l=ce(),n=N(),r=oe(Se),{history:v,addHistory:h,removeHistory:p}=Le(),s=ue(t,"query"),f=xe(s),c=O(0),u=O(0),Q=O(),E=C(()=>f.value.length>0),D=C(()=>f.value[c.value]||null),M=()=>{c.value=c.value>0?c.value-1:f.value.length-1,u.value=D.value.contents.length-1},Z=()=>{c.value=c.value<f.value.length-1?c.value+1:0,u.value=0},$=()=>{u.value<D.value.contents.length-1?u.value=u.value+1:Z()},_=()=>{u.value>0?u.value=u.value-1:M()},k=i=>i.map(d=>fe(d)?d:a(d[0],d[1])),T=i=>{if(i.type==="custom"){const d=Be[i.index]||"$content",[g,H=""]=he(d)?d[n.value].split("$content"):d.split("$content");return k([g,...i.display,H])}return k(i.display)},x=()=>{c.value=0,u.value=0,e("updateQuery",""),e("close")};return ie(()=>{ae("keydown",i=>{if(E.value){if(i.key==="ArrowUp")_();else if(i.key==="ArrowDown")$();else if(i.key==="Enter"){const d=D.value.contents[u.value];l.path!==d.path&&(h(d),o.push(d.path),x())}}}),Oe(Q.value,{reserveScrollBarGap:!0})}),de(()=>{Ae()}),()=>a("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!E.value}],ref:Q},s.value===""?v.value.length?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),v.value.map((i,d)=>a(U,{to:i.path,class:["search-pro-result-item",{active:u.value===d}],onClick:()=>{console.log("click"),x()}},()=>[a(K,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[i.type==="content"&&i.header?a("div",{class:"content-header"},i.header):null,a("div",T(i))]),a("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),p(d)}},a(j))]))])):r.value.emptyHistory:E.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:i,contents:d},g)=>{const H=c.value===g;return a("li",{class:["search-pro-result-list-item",{active:H}]},[a("div",{class:"search-pro-result-title"},i||"Documentation"),d.map((y,ee)=>{const I=H&&u.value===ee;return a(U,{to:y.path,class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{h(y),x()}},()=>[y.type==="content"?null:a(y.type==="title"?Y:y.type==="heading"?q:V,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?a("div",{class:"content-header"},y.header):null,a("div",T(y))])])})])})):r.value.emptyResult)}});export{Qe as default};
