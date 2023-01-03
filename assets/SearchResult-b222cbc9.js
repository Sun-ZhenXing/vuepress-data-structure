import{u as te,a as B,M as oe,b as ne,c as O,L as le,d as ae}from"./app-b267555e.js";import{r as S,h as C,c as se,u as re,L as ce,a8 as ue,o as ie,n as de,j as n,a9 as Y,z as ve}from"./framework-35149b8f.js";function he(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var I=!1;if(typeof window<"u"){var T={get passive(){I=!0}};window.addEventListener("testPassive",null,T),window.removeEventListener("testPassive",null,T)}var N=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],R=!1,b=-1,A=void 0,L=void 0,U=function(e){return w.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},F=function(e){var o=e||window.event;return U(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},fe=function(e){if(L===void 0){var o=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;o&&l>0&&(L=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}A===void 0&&(A=document.body.style.overflow,document.body.style.overflow="hidden")},pe=function(){L!==void 0&&(document.body.style.paddingRight=L,L=void 0),A!==void 0&&(document.body.style.overflow=A,A=void 0)},me=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},ye=function(e,o){var l=e.targetTouches[0].clientY-b;return U(e.target)?!1:o&&o.scrollTop===0&&l>0||me(o)&&l<0?F(e):(e.stopPropagation(),!0)},ge=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(a){return a.targetElement===e})){var l={targetElement:e,options:o||{}};w=[].concat(he(w),[l]),N?(e.ontouchstart=function(a){a.targetTouches.length===1&&(b=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&ye(a,e)},R||(document.addEventListener("touchmove",F,I?{passive:!1}:void 0),R=!0)):fe(o)}},we=function(){N?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),R&&(document.removeEventListener("touchmove",F,I?{passive:!1}:void 0),R=!1),b=-1):pe(),w=[]};const Se="eJylWUtT20gQ/isuHzeZZA3kkttWcswhVdnb1taWsAVoI8teS+yuK5UqQ3g5MYYQXuFlCAFMBQwpSMCYx5/xSPJp/8K2LMvWaEZt1+4Bqqyv59PM9Nc9Pa1X0YfRx61/hmKocvRx1KqsmGdLdKFgLp2asxWr9sHcmrCOFu3KafR+NJ7SDFkz9OjjX359fT/6UFKHUxnFGEkSSZPUrK7oIrKZKXNrnh39KjoiSwk5A0axBxG/nbU2Ya1XzO1pGKCro8Ng8VuMhFkwE2pOaVDSlThJSsYIMxVaurJ2crAoerxvlfbskynBcuKp5KCiSQasKa63fykp7cGIkVT9dGZxgc6sWLUJOj+Drcyu7DjvLJaseeeFnQUFAHYmDEcsQt9uO4vnSWIkACE0fZF6dVVM00cCUChN34OIf+Xupvq4+ogQRvhiLULYDIYn1mJyn/NuFrsKfkkqURJgqxhZzmvutMyxBes4T6/nUEkulsyZeTp9w04MlMgC2FbRy0v7YMyRq/ve3IF9XmZWGWYRytr4OEFvlv65XnMHwEhzI29/3w1yu3YkzCqU31yeN88+NcZ36d57R58LhdbM/LuAG3Xz1ZAymNKkeFzhgyrAO7PSNUYF3m2GeNeBuqFkVEUbJtpoclDO6ILJnFj5qrklUqDLlkxppJ0A9YcOeSbbecIx1q8KkMDcTIZJz7UzS3tm/paRXgDApFev7VrbY7SyZRXZuAoAoRz9EOnb03R6il594Gj6CY8hTLHIk3v3Ii9+fhYRMMVInOiGSnoh6os8idgnx3bZn3P6IX/FSfsxMrw/8jxrjKQ0ZnA/SXsPQ4cOeE6xjhfNHSfhe+MHWk5pA6EcjyAfgPOWTu2DCTqz4ON4RAKAMIICaksoQ0NyRtbiMpEyGSnLC5heVFxeiAtMbn47yBS0slav5hndhVn0Ms8hSTdIOvWXnOEnePelkSvR6jg6O8+oHTe+eXEYeow2cgv0ZsHKz5gbR4FjNAChx2hjcyuUqY/wKHqYlnfMiTnYzfrlOzq37O6F7zAVwWjIijKoL2q7JtgQLzJuc88s8ZaLBqcz8pDyN9FH+ZRI87PWdQ4OEFQCnpFImhyGHsietXMiFsu0eseexiIYrV3ofLE9f3/t4n+OEPS1ZmR+mK3fbDAc3mzaEOZ2Ovm9XlumN5+gqHEC1LerHecjRmjuhgRn1c7FnM0zKYCi+bvxZTWUDIKHQ9Fsbm6/d5YjJHOOqCDKKz2R1aQkXBfSmdRwRkomoSBgtf62bObGxIkZhsOY9AgxRuRUJsuOW7+1K1eoqNdvQ5ItC6CpCApsyDHm/ji9+xbIQwEIjQr3jcerdLzs3vfYqBDBaFQ0xmtmcc8qHTZWv7njAuEhNEDjxB1h75TBFkYEQoVH0WhpLqgxNkuL/nsQRAgLoFFhXnylV/v161U6OSOgguuLyACNDcg3GCV4QmSARkj9Mgd3d2ux1lipND75t82JEB7lI8Qtjz2NAz6cGW1WHclUYlRN8Rl9vlC/+Ygqv2kRIn4OQ4XrWYtuVhyGJ/LLS2sRYp3jgTmxECpT+7xKTxcbh0f0dA6WwF60HaUKDVCx5g+ddXytNc+4Ap0st56c1VjtonaolDtDgw5xdMyjuIg9c24vmwrmUFS+2IJhyb0v0yngL2dhBeZy1Sq/Ywt4FugWAlB1Q3MJSlo1Owz3WLV1gXRhmS9xwOOOuz+v2bdV5zwSOD0QH55psPMQALDICHtpR4o9TEuQONdp9Qx2yq23WEonfQpgzCUtB3pjuBw14LmYs0BYQc/cPOyDXbigMczOQRtqhtCDwtmaoEMJ8kbKBYGUhuMJ6JsmiBrnZWNu5OjnAzp5ZF3tg7/rl0XnCSSNySOam+UUwEooMFiQaMMs0MvK0QGd3m5MF+jtCncbg8uKCMbrhOZFKcjj3ca6EoAr3Asg3+UAV7AQJusXhqxorR40I2jdAVqt5y5SNvOH9OsSukMDBDHC2ga84zudA1QUQtExIoOmQ7BMFQxJZ5SkTHRF/hOOfRmaJQm+s3q+7fQHjte79LbMtXP6dr1t5xMkC6DHfumN+S5v5lfdFh09veb4nPo31IjfoTR8LSBpVdK04AXAvjihtxOiiGbX9VT5/aVuZCReRjGSaGE9KAlW99MPPEcf6WUwSPmpYHA/SfSm4WfPRe8eIGq6l7eDUOHtqmLIPMcjmIKDhNAEv9somvzHqAQDoOCURuMjWdJ5wifK0om9dweHePeefsCUTk3SSpVVYYgF5rDG9Ky9PwY3IzeUOj4LAL0umWkZi5eFjE7KkoZtF92cprnrnrbLvUL6TX21CIehEVs9g/cGP/H4n6JlBzdlX82BLYffZl02RHmwsT4FXw663NhdI2YX2o/wvmPTSnzh8Th6vvK3zeG2a332C67ZfeRQhAzqa+/zk2BtsLccivq4cNVYOWcd7D3CvNuZ8t08pAfGuzyG5a+WF5umokvhQIuPt8DLyeZXTC6+myUkC/XWX3qpSWldir90Hg6qcvLhj8A0CA/S8MfFK4AR+02BFiYxbXasnDKWmWeMOPwBED9em52j3CacfYEjlQHQPnRtzamFvW8Pvg40C6AlFTS/N+/MXA32ly2jWAA7keziBfTNW4uHEAtm/EckzOI/+hK632lVhpPufzrUvfi4dqI+iQju9qFBsJnuJ4awzex92UzJ1JyV+Kr2+vW/+2VUhg==";const W=()=>n(O,{name:"close"},()=>n("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));W.displayName="CloseIcon";const V=()=>n(O,{name:"heading"},()=>n("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));V.displayName="HeadingIcon";const P=()=>n(O,{name:"heart"},()=>n("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));P.displayName="HeartIcon";const X=()=>n(O,{name:"history"},()=>n("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));X.displayName="HistoryIcon";const Z=()=>n(O,{name:"title"},()=>n("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Z.displayName="TitleIcon";const Ae={},Le=300,K=5,Oe={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Me="search-pro-history-results",y=te(Me,[]),He=()=>({history:y,addHistory:t=>{y.value.length<K?y.value=[t,...y.value]:y.value=[t,...y.value.slice(0,K-1)]},removeHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}),Ce=S(Se),Re=C(()=>JSON.parse(le(Ce.value))),H=(t,e)=>{const o=t.toLowerCase(),l=e.toLowerCase(),a=[];let r=0,v=0;const h=(s,f=!1)=>{let c="";v===0?c=s.length>20?`… ${s.slice(-20)}`:s:f?c=s.length+v>100?`${s.slice(0,100-v)}… `:s:c=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,c&&a.push(c),v+=c.length,f||(a.push(["strong",e]),v+=e.length,v>=100&&a.push(" …"))};let p=o.indexOf(l,r);if(p===-1)return null;for(;p>=0;){const s=p+l.length;if(h(t.slice(r,p)),r=s,v>100)break;p=o.indexOf(l,r)}return v<100&&h(t.slice(r),!0),a},q=t=>t.reduce((e,{type:o})=>e+(o==="title"?50:o==="heading"?20:o==="custom"?10:1),0),Fe=(t,e)=>{var o;const l={};for(const[a,r]of Object.entries(e)){const v=((o=e[a.replace(/\/[^\\]*$/,"")])==null?void 0:o.title)||"",h=`${v?`${v} > `:""}${r.title}`,p=H(r.title,t);p&&(l[h]=[...l[h]||[],{type:"title",path:a,display:p}]),r.customFields&&Object.entries(r.customFields).forEach(([s,f])=>{f.forEach(c=>{const u=H(c,t);u&&(l[h]=[...l[h]||[],{type:"custom",path:a,index:s,display:u}])})});for(const s of r.contents){const f=H(s.header,t);f&&(l[h]=[...l[h]||[],{type:"heading",path:a+(s.slug?`#${s.slug}`:""),display:f}]);for(const c of s.contents){const u=H(c,t);u&&(l[h]=[...l[h]||[],{type:"content",header:s.header,path:a+(s.slug?`#${s.slug}`:""),display:u}])}}}return Object.keys(l).sort((a,r)=>q(l[a])-q(l[r])).map(a=>({title:a,contents:l[a]}))},ze=t=>{const e=B(),o=S([]),l=C(()=>Re.value[e.value]),a=ae(r=>{o.value=r?Fe(r,l.value):[]},Le);return ve([t,e],()=>{a(t.value)}),o};var Ie=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const o=re(),l=ce(),a=B(),r=oe(Oe),{history:v,addHistory:h,removeHistory:p}=He(),s=ue(t,"query"),f=ze(s),c=S(0),u=S(0),x=S(),z=C(()=>f.value.length>0),k=C(()=>f.value[c.value]||null),J=()=>{c.value=c.value>0?c.value-1:f.value.length-1,u.value=k.value.contents.length-1},G=()=>{c.value=c.value<f.value.length-1?c.value+1:0,u.value=0},$=()=>{u.value<k.value.contents.length-1?u.value=u.value+1:G()},_=()=>{u.value>0?u.value=u.value-1:J()},E=i=>i.map(d=>typeof d=="string"?d:n(d[0],d[1])),Q=i=>{if(i.type==="custom"){const d=Ae[i.index]||"$content",[g,M=""]=typeof d=="object"?d[a.value].split("$content"):d.split("$content");return E([g,...i.display,M])}return E(i.display)},j=()=>{c.value=0,u.value=0,e("updateQuery",""),e("close")};return ie(()=>{ne("keydown",i=>{if(z.value){if(i.key==="ArrowUp")_();else if(i.key==="ArrowDown")$();else if(i.key==="Enter"){const d=k.value.contents[u.value];l.path!==d.path&&(h(d),o.push(d.path),j())}}}),ge(x.value,{reserveScrollBarGap:!0})}),de(()=>{we()}),()=>n("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!z.value}],ref:x},s.value===""?v.value.length?n("ul",{class:"search-pro-result-list"},n("li",{class:"search-pro-result-list-item"},[n("div",{class:"search-pro-result-title"},r.value.history),v.value.map((i,d)=>n(Y,{to:i.path,class:["search-pro-result-item",{active:u.value===d}],onClick:()=>{console.log("click"),j()}},()=>[n(X,{class:"search-pro-result-type"}),n("div",{class:"search-pro-result-content"},[i.type==="content"&&i.header?n("div",{class:"content-header"},i.header):null,n("div",Q(i))]),n("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),p(d)}},n(W))]))])):r.value.emptyHistory:z.value?n("ul",{class:"search-pro-result-list"},f.value.map(({title:i,contents:d},g)=>{const M=c.value===g;return n("li",{class:["search-pro-result-list-item",{active:M}]},[n("div",{class:"search-pro-result-title"},i||"Documentation"),d.map((m,ee)=>{const D=M&&u.value===ee;return n(Y,{to:m.path,class:["search-pro-result-item",{active:D,"aria-selected":D}],onClick:()=>{h(m),j()}},()=>[m.type==="content"?null:n(m.type==="title"?Z:m.type==="heading"?V:P,{class:"search-pro-result-type"}),n("div",{class:"search-pro-result-content"},[m.type==="content"&&m.header?n("div",{class:"content-header"},m.header):null,n("div",Q(m))])])})])})):r.value.emptyResult)}});export{Ie as default};
