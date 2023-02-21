import{u as J,y as x,a as Y,A as $,m as _,b as ee,l as te,s as oe,n as le,o as ae,e as ne,c as se,h as re,r as I,d as ie,H as ue,x as L,f as ce}from"./app-4d1cba48.js";import{r as T,h as j,c as de,u as ve,ab as he,o as fe,I as pe,j as i,a5 as V,z as ge,K as me,i as ye}from"./framework-8980b429.js";function we(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var q=!1;if(typeof window<"u"){var U={get passive(){q=!0}};window.addEventListener("testPassive",null,U),window.removeEventListener("testPassive",null,U)}var C=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],k=!1,N=-1,b=void 0,M=void 0,z=function(e){return w.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},D=function(e){var o=e||window.event;return z(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},Te=function(e){if(M===void 0){var o=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;o&&l>0&&(M=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}b===void 0&&(b=document.body.style.overflow,document.body.style.overflow="hidden")},be=function(){M!==void 0&&(document.body.style.paddingRight=M,M=void 0),b!==void 0&&(document.body.style.overflow=b,b=void 0)},Me=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Se=function(e,o){var l=e.targetTouches[0].clientY-N;return z(e.target)?!1:o&&o.scrollTop===0&&l>0||Me(o)&&l<0?D(e):(e.stopPropagation(),!0)},He=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(a){return a.targetElement===e})){var l={targetElement:e,options:o||{}};w=[].concat(we(w),[l]),C?(e.ontouchstart=function(a){a.targetTouches.length===1&&(N=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&Se(a,e)},k||(document.addEventListener("touchmove",D,q?{passive:!1}:void 0),k=!0)):Te(o)}},je=function(){C?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),k&&(document.removeEventListener("touchmove",D,q?{passive:!1}:void 0),k=!1),N=-1):be(),w=[]};const ke="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",De="search-pro-history-results",m=J(De,[]),Ae=()=>({history:m,addHistory:t=>{m.value.length<I?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,I-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),Ee=T(ke),Oe=j(()=>JSON.parse(x(Ee.value))),H=(t,e)=>{const o=t.toLowerCase(),l=e.toLowerCase(),a=[];let s=0,v=0;const h=(n,f=!1)=>{let r="";v===0?r=n.length>20?`… ${n.slice(-20)}`:n:f?r=n.length+v>100?`${n.slice(0,100-v)}… `:n:r=n.length>20?`${n.slice(0,20)} … ${n.slice(-20)}`:n,r&&a.push(r),v+=r.length,f||(a.push(["strong",e]),v+=e.length,v>=100&&a.push(" …"))};let p=o.indexOf(l,s);if(p===-1)return null;for(;p>=0;){const n=p+l.length;if(h(t.slice(s,p)),s=n,v>100)break;p=o.indexOf(l,s)}return v<100&&h(t.slice(s),!0),a},X=t=>t.reduce((e,{type:o})=>e+(o==="title"?50:o==="heading"?20:o==="custom"?10:1),0),qe=(t,e)=>{var o;const l={};for(const[a,s]of L(e)){const v=((o=e[a.replace(/\/[^\\]*$/,"")])==null?void 0:o.title)||"",h=`${v?`${v} > `:""}${s.title}`,p=H(s.title,t);p&&(l[h]=[...l[h]||[],{type:"title",path:a,display:p}]),s.customFields&&L(s.customFields).forEach(([n,f])=>{f.forEach(r=>{const u=H(r,t);u&&(l[h]=[...l[h]||[],{type:"custom",path:a,index:n,display:u}])})});for(const n of s.contents){const f=H(n.header,t);f&&(l[h]=[...l[h]||[],{type:"heading",path:a+(n.slug?`#${n.slug}`:""),display:f}]);for(const r of n.contents){const u=H(r,t);u&&(l[h]=[...l[h]||[],{type:"content",header:n.header,path:a+(n.slug?`#${n.slug}`:""),display:u}])}}}return ce(l).sort((a,s)=>X(l[a])-X(l[s])).map(a=>({title:a,contents:l[a]}))},Ne=t=>{const e=Y(),o=T([]),l=j(()=>Oe.value[e.value]),a=ie(s=>{o.value=s?qe(s,l.value):[]},ue);return ge([t,e],()=>{a(t.value)}),o};var Be=de({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const o=se(),l=ve(),a=Y(),s=$(_),{history:v,addHistory:h,removeHistory:p}=Ae(),n=he(t,"query"),f=Ne(n),r=T(0),u=T(0),R=T(),A=j(()=>f.value.length>0),E=j(()=>f.value[r.value]||null),K=()=>{r.value=r.value>0?r.value-1:f.value.length-1,u.value=E.value.contents.length-1},P=()=>{r.value=r.value<f.value.length-1?r.value+1:0,u.value=0},F=()=>{u.value<E.value.contents.length-1?u.value=u.value+1:P()},Z=()=>{u.value>0?u.value=u.value-1:K()},Q=c=>c.map(d=>ye(d)?d:i(d[0],d[1])),B=c=>{if(c.type==="custom"){const d=re[c.index]||"$content",[y,S=""]=me(d)?d[a.value].split("$content"):d.split("$content");return Q([y,...c.display,S])}return Q(c.display)},O=()=>{r.value=0,u.value=0,e("updateQuery",""),e("close")};return fe(()=>{ee("keydown",c=>{if(A.value){if(c.key==="ArrowUp")Z();else if(c.key==="ArrowDown")F();else if(c.key==="Enter"){const d=E.value.contents[u.value];o.value.path!==d.path&&(h(d),l.push(d.path),O())}}}),He(R.value,{reserveScrollBarGap:!0})}),pe(()=>{je()}),()=>i("div",{class:["search-pro-result",{empty:n.value===""?v.value.length===0:!A.value}],ref:R},n.value===""?v.value.length?i("ul",{class:"search-pro-result-list"},i("li",{class:"search-pro-result-list-item"},[i("div",{class:"search-pro-result-title"},s.value.history),v.value.map((c,d)=>i(V,{to:c.path,class:["search-pro-result-item",{active:u.value===d}],onClick:()=>{O()}},()=>[i(te,{class:"search-pro-result-type"}),i("div",{class:"search-pro-result-content"},[c.type==="content"&&c.header?i("div",{class:"content-header"},c.header):null,i("div",B(c))]),i("button",{class:"search-pro-close-icon",onClick:y=>{y.preventDefault(),y.stopPropagation(),p(d)}},i(oe))]))])):s.value.emptyHistory:A.value?i("ul",{class:"search-pro-result-list"},f.value.map(({title:c,contents:d},y)=>{const S=r.value===y;return i("li",{class:["search-pro-result-list-item",{active:S}]},[i("div",{class:"search-pro-result-title"},c||"Documentation"),d.map((g,G)=>{const W=S&&u.value===G;return i(V,{to:g.path,class:["search-pro-result-item",{active:W,"aria-selected":W}],onClick:()=>{h(g),O()}},()=>[g.type==="content"?null:i(g.type==="title"?le:g.type==="heading"?ae:ne,{class:"search-pro-result-type"}),i("div",{class:"search-pro-result-content"},[g.type==="content"&&g.header?i("div",{class:"content-header"},g.header):null,i("div",B(g))])])})])})):s.value.emptyResult)}});export{Be as default};
