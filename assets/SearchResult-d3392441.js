import{g as D,u as B,h as G,i as J,j as x,k as M,l as T,t as U,m as C,n as b,p as K,q as A,s as t,R as P,v as N,x as X,y as Y,z as Z,A as _,B as ee,C as te,D as se,E as ae,F as le,G as re,H as ue,I as oe,J as ne}from"./app-98d13175.js";const ce=()=>{const l=new Worker(`/vuepress-data-structure/${D.worker}`,{}),o=[];return l.addEventListener("message",({data:a})=>{const{resolve:p}=o.shift();p(a)}),{search:(a,p,d)=>new Promise((u,h)=>{l.postMessage({query:a,locale:p,options:d}),o.push({resolve:u,reject:h})}),terminate:()=>{l.terminate(),o.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))}}},ie="search-pro-result-history",v=B(ie,[]),ve=()=>{const{resultHistoryCount:l}=D,o=l>0;return{enabled:o,resultHistory:v,addResultHistory:a=>{o&&(v.value.length<l?v.value=[a,...v.value]:v.value=[a,...v.value.slice(0,l-1)])},removeResultHistory:a=>{v.value=[...v.value.slice(0,a),...v.value.slice(a+1)]}}},pe=l=>{const o=te(),a=x(),{search:p,terminate:d}=ce(),u=C(!1),h=se([]),R=oe(y=>{u.value=!0,y?p(y,a.value,o).then(g=>{h.value=g,u.value=!1}):(h.value=[],u.value=!1)},D.delay);return A([l,a],()=>R(l.value),{immediate:!0}),{searching:u,results:h,terminate:d}};var de=G({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(l,{emit:o}){const a=ae(),p=J(),d=x(),u=M(T),{addQueryHistory:h}=le(),{enabled:R,resultHistory:y,addResultHistory:g,removeResultHistory:F}=ve(),$=U(l,"query"),{results:m,searching:I}=pe($),c=C(0),r=C(0),E=b(()=>y.value.length>0),k=b(()=>m.value.length>0),H=b(()=>m.value[c.value]||null),w=e=>{const[s,n]=e.split("#");return p.resolve({name:s,hash:`#${n}`}).href},Q=()=>{c.value=c.value>0?c.value-1:m.value.length-1,r.value=H.value.contents.length-1},O=()=>{c.value=c.value<m.value.length-1?c.value+1:0,r.value=0},V=()=>{r.value<H.value.contents.length-1?r.value=r.value+1:O()},W=()=>{r.value>0?r.value=r.value-1:Q()},L=e=>e.map(s=>ne(s)?s:t(s[0],s[1])),S=e=>{if(e.type==="custom"){const s=re[e.index]||"$content",[n,f=""]=ue(s)?s[d.value].split("$content"):s.split("$content");return L([n,...e.display,f])}return L(e.display)},q=()=>{c.value=0,r.value=0,o("updateQuery",""),o("close")};return K("keydown",e=>{if(k.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=H.value.contents[r.value],n=w(s.id);a.value.path!==n&&(h(l.query),g(s),p.push(n),q())}}}),A([c,r],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:$.value?!k.value:!E.value}],id:"search-pro-results"},$.value===""?E.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.history),y.value.map((e,s)=>t(P,{to:w(e.id),class:["search-pro-result-item",{active:r.value===s}],onClick:()=>{q()}},()=>[t(N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:n=>{n.preventDefault(),n.stopPropagation(),F(s)}},t(X))]))])):R?u.value.emptyHistory:u.value.emptyResult:I.value?t(Y,{hint:u.value.searching}):k.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const f=c.value===n;return t("li",{class:["search-pro-result-list-item",{active:f}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((i,z)=>{const j=f&&r.value===z;return t(P,{to:w(i.id),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{h(l.query),g(i),q()}},()=>[i.type==="content"?null:t(i.type==="title"?Z:i.type==="heading"?_:ee,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="content"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",S(i))])])})])})):u.value.emptyResult)}});export{de as default};
