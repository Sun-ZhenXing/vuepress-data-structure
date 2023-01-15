import{u as te,a as X,k as oe,b as ae,P as M,B as ne,c as le}from"./app-5a1e0204.js";import{r as L,h as A,c as se,u as re,L as ie,aa as ce,o as ue,n as de,j as a,ab as Y,z as ve,K as he,i as fe}from"./framework-d3922052.js";function pe(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var K=!1;if(typeof window<"u"){var j={get passive(){K=!0}};window.addEventListener("testPassive",null,j),window.removeEventListener("testPassive",null,j)}var N=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],E=!1,W=-1,S=void 0,C=void 0,k=function(e){return w.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},H=function(e){var o=e||window.event;return k(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},ye=function(e){if(C===void 0){var o=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;o&&n>0&&(C=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}S===void 0&&(S=document.body.style.overflow,document.body.style.overflow="hidden")},me=function(){C!==void 0&&(document.body.style.paddingRight=C,C=void 0),S!==void 0&&(document.body.style.overflow=S,S=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,o){var n=e.targetTouches[0].clientY-W;return k(e.target)?!1:o&&o.scrollTop===0&&n>0||ge(o)&&n<0?H(e):(e.stopPropagation(),!0)},Le=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(l){return l.targetElement===e})){var n={targetElement:e,options:o||{}};w=[].concat(pe(w),[n]),N?(e.ontouchstart=function(l){l.targetTouches.length===1&&(W=l.targetTouches[0].clientY)},e.ontouchmove=function(l){l.targetTouches.length===1&&we(l,e)},E||(document.addEventListener("touchmove",H,K?{passive:!1}:void 0),E=!0)):ye(o)}},Se=function(){N?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),E&&(document.removeEventListener("touchmove",H,K?{passive:!1}:void 0),E=!1),W=-1):me(),w=[]};const Ce="eJylWltTG0cW/isqHjdpe8XFSfltK3nMQ6qyb1tbW4M0wKx1W2nYmEq5SmAuki0BxtwMGIHNzQkIXBAjIS5/Rj0zetq/sKdnNNL0ZY5UyUNSpr9zvunuc/r0Oaf1y8Djgaft/5mGmdAHng7Y1Q3rco2ulKy1C6tctRtvrd1Z+3TVqV4MfD0QS6dMPWXmBp7+458vvh54rCXG01nDnEgSLaUlpnJGTjH0aMJMJhTfKMxbu8s86S8DE7oW17MgFH0UCcrZW7P2dtXaWwCFXGJyHCT+FSVhEtw8e840ZIK9pwafpJUba+fUOpqhD78rpiZL8FsYYB18FGne/tpsfLT3pu3bdTr/LsA3SGQslGkoMD8wIz07gjnY+/kA31B3foJEX1vXnzXDtHOmkU0YqXGSI1omk00/N5KaaaRTkh2s9XO7WLd2N+jcKb1dwgzircLZP7EPbjg7CIC8vFEtZ8QIzGAC/pnQUjE9Tkw9m9KyU9KEaP3S2d9v1orOwzYtfFEsN8DGKbrb683Frhw65/MK3Vg6OWqkNBP2K5br/KXcmMUVWtiwG7N0uYDtilPdZ99crNjL7IPdXRGAUFeKPopG6Ks9ZmCZJEoECKEZjDTrm2oa8G0ewo5IcOWSVw8SJYzwRduEsBkcD/hNYFx2GrWp4C8tQYw4yBqm7D3etKzpFfus2MOd7dWKVVimC3f8xCCs8AC2VbRWc46nWVj0vps/dq5OuFWGSYSytt7N0ru1/91ueQoseuwUnS8fRW5PjoRJhfJb68vW5YfWzEd6+Ib550qpPbPgLuBCvWw1ZoymU1osZiiiDc9b2Oh5RhXWdY94T8VOCExNJkf1rHxHdkKfys4uWzKdIp3gmnvMyLNT3RGJsXlTgiDd+2rz5KzKoVW851xPANCLzL2paHXXXuTPlQBgVxjc5HRhnt68lWiGiIwhTNHId199Ffnp7z9EFExREiM5M0H6IRqMfBdxzs+cE/4mHQSKzjCiPhT5ccqcSKc45SGS8QdDVYd9o9hnq9Y+C/i+/nDbKB0glGME4gEYb+3COZ6lhZUAxwgRAOUJkrzN/NnI6SSd0bPqK6p5V3YelsHdUF/zhVie9KrivLzjPU4Fo37nKzRvN+lcwb455r1PBWM+2FFwzo+c44+c5WQM9UGrVASNZm1RcL/gOOp7nqBVWBecLziOeh+9nRG1h0hnEFEdbn+bLq3TpTJHMNz+fAdCaEYi9PrIPm5wBOB9/iCi+iRCly5F1SekM4iofhOxNvbs0yO6dK3g+IbIKEL2bcTLRK18AyojjulbIkDocfZ9RyKCEy1hCFMUIsOBVf7QrB00a7/yycIweJeMImSDEfrwWytfsXby9GKJLSdfFikhaQiRQYjB9woH1voZPVyg0yxr7vKBB/IQQjMc8Sxlb9focomjGSYChNCMAM1phNmAoxgBilNisE1zEYThSQSW37xbhLTGWiuIRE+IjPYTU+PG2Jie1aEAIVo2q03JSQG9rnqxGnINLKwG5VjorG4160UusoZJ9DPPMS1nkkz6Zz0rT9D1DVqfQWfnC3VykcC8JAwtTVr5FXq3YhcLUGELpYkAoaVJ6/1uKNMgkVG0QDnZt2aXYDebtdcsKrp7EShQVDCaBqmy0kAm1DNpDbEiZzavDlBvuUo5k9XHjOckNymnmbRYtm/zkJSjLuALqVxTwtAix5dmVcbiCa0/8BWOCkbrQbq82Jl/sB4MjiMEEEPdT1pvy827HY7Dn00HwsxO5740G+v07gNcKeyABna1a3xECM1FIGm0G1dqTjfPF1A0L2n9thlKBodHQtEcxdp7w5ajJGNpv4jKnh6fSmlJaMFAX2k8qyWTUGTxvv7qxMpPq5NdUAedzAQxJ/R0dorX2753qkIHSXDq7fuQYMsDaCgK7SeC9/TfSGx/8WyTzpx4LVz+VKhg9FS0ZhrW4qFd+dTa/N3TE46HUgA9J54GNOZAFjSEoyKj6GlxF9SaLtPFYG8JTggP4Bn69Wd6c+SVBgoqSNVVAujZgHiDUYIlVALoCWnW8tCOt1cbrY1q60Nw29gJkVH5hHgtB9/HAR/PTrpZRzIdn0yk5Yi+XGreCQ1nwfNdiRDnlzDUcX1pVbdKwvBAXqvZq3DWJR6YEw+hbupc1enFauvTKUt3q1t885J5qlIAddbiJ7aOzw33jivRuZP2yCVfm+ByqCt3VUWDMD+WUdyJfXFpL10PllC8CEUWDEvuf5msiqqVYQXWet0+ec2XUDzQ6whA1g0Ne0hpE1Pj0BtMtJtyHqzLKQ5YnJn7YMu5r7P7SGF04Xz4omI3VwCwkxH20a4r9jEtReDchjcN2Ckv3+IpWfhUwJhJ2gb0daQYNeybWJJAi1x5HtBxgaaXUO0iYnjZy+cEXLWLpAsKVxqPxeGdK04SMdltWMl8cAwls31zBPaGlg9aRAvvW7yyItCGSaDFyukxXdhrLZTo/YZUjUGxooLxPMEtlEQevxrrSeB3IBSdY7/x0Ffv+CdTN1LtR1DOoXMMaL999nBlq/iJfl5Ddwi6X+FCWCs2vMMy4toR6awonI5zMmjkimmqQiWTNZI6yRn6f+Ha16EBHZdfq672WH/gbLvHe4G1dUVfbXfkAg7JA+i1X3lpvS5axU3v2YNe3Ep8LP8NFZJ3KAMvsCQDz7kpsQBwrs/p/azqRPPr+t7497OcmdVkN4qSeBvrw5NgdX/7i8wxSPpRBlf+XqE8ROL9+fAPP6q+PUwSmX6+Do4KX08Ypi5zjMAUGBJCI76FGyn9P5MaKEDCqU3GJqZId0QOlJVz5/ABLvHe76SCKNQLzgN/xYZJYAZrLZSdo2mojLyj1LWZAPS7ZO5dRL0sRDupaylsu+j7BZq/7Wu7vBIyKBrIRSQMPbH1S/iu+GweHEXTDmnKgZwDW468ze24loPtYUWMGAzVr7iIvvA3bLyZlWsij9mu5psNIcOUf5YCcsrKSMbQq7oj7TbrFHVNmAReJZXXnIuXICuWSIFx9MKGLnfr3bJIALMJjCME0PLZKdprJZEAmj2BcYQAHqdWv1hr2yIB3M2BcYQAnqXenFg7FZEAXqYC46g3+z+jUPRnZQwt3JjPX1cVPPDLDx5CSzaQtc5XFTSDjCYIoWcrp5t+wmCkYonJHDz0Ev25/y9IIlIxI5PQ5ZBUrVvrh6of9PDHo7U97/1ABO5ieI/gjoeMofHI+6L/O7FASOKBftcbXI03E3VapdaGf0p74rH03g3FJvR8BulslRxlghvZVweyI674MR3cgBKKkEG577u/Ym2Bw9F7mczEpZvWxhVvXH8IO57dKfu/R+ieBxnD0qm2I/g/SZBi8HCbT5bAq1v3h2pSuuFWtDzUX7v7WUrL5LTYMzY4mtCTj/8KTKMwkIH/JL8EMOK8LNHSHOabXSlWVXPzjBLGL4B4tu82svPvIRUXMnwOQJ/FGlusNPefQgMPYjyAVnjwFvf+QfEELwBYguwswg8H1tuLhyM2PwcBh8uTwyT+oC3hMQ4iLiTef9KgXh/Gk1O1bVVwr3dPxWZ6L55hm9n/srkKzp2VunP04sX/AZFfsXI=";const x=()=>a(M,{name:"close"},()=>a("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));x.displayName="CloseIcon";const J=()=>a(M,{name:"heading"},()=>a("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));J.displayName="HeadingIcon";const F=()=>a(M,{name:"heart"},()=>a("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));F.displayName="HeartIcon";const O=()=>a(M,{name:"history"},()=>a("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));O.displayName="HistoryIcon";const Z=()=>a(M,{name:"title"},()=>a("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Z.displayName="TitleIcon";const Me={},Be=300,q=5,be={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Ae="search-pro-history-results",m=te(Ae,[]),Ee=()=>({history:m,addHistory:t=>{m.value.length<q?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,q-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),He=L(Ce),Ie=A(()=>JSON.parse(ne(He.value))),b=(t,e)=>{const o=t.toLowerCase(),n=e.toLowerCase(),l=[];let r=0,v=0;const h=(s,f=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:f?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&l.push(i),v+=i.length,f||(l.push(["strong",e]),v+=e.length,v>=100&&l.push(" …"))};let p=o.indexOf(n,r);if(p===-1)return null;for(;p>=0;){const s=p+n.length;if(h(t.slice(r,p)),r=s,v>100)break;p=o.indexOf(n,r)}return v<100&&h(t.slice(r),!0),l},R=t=>t.reduce((e,{type:o})=>e+(o==="title"?50:o==="heading"?20:o==="custom"?10:1),0),Pe=(t,e)=>{var o;const n={};for(const[l,r]of Object.entries(e)){const v=((o=e[l.replace(/\/[^\\]*$/,"")])==null?void 0:o.title)||"",h=`${v?`${v} > `:""}${r.title}`,p=b(r.title,t);p&&(n[h]=[...n[h]||[],{type:"title",path:l,display:p}]),r.customFields&&Object.entries(r.customFields).forEach(([s,f])=>{f.forEach(i=>{const c=b(i,t);c&&(n[h]=[...n[h]||[],{type:"custom",path:l,index:s,display:c}])})});for(const s of r.contents){const f=b(s.header,t);f&&(n[h]=[...n[h]||[],{type:"heading",path:l+(s.slug?`#${s.slug}`:""),display:f}]);for(const i of s.contents){const c=b(i,t);c&&(n[h]=[...n[h]||[],{type:"content",header:s.header,path:l+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(n).sort((l,r)=>R(n[l])-R(n[r])).map(l=>({title:l,contents:n[l]}))},ze=t=>{const e=X(),o=L([]),n=A(()=>Ie.value[e.value]),l=le(r=>{o.value=r?Pe(r,n.value):[]},Be);return ve([t,e],()=>{l(t.value)}),o};var De=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const o=re(),n=ie(),l=X(),r=oe(be),{history:v,addHistory:h,removeHistory:p}=Ee(),s=ce(t,"query"),f=ze(s),i=L(0),c=L(0),D=L(),I=A(()=>f.value.length>0),P=A(()=>f.value[i.value]||null),U=()=>{i.value=i.value>0?i.value-1:f.value.length-1,c.value=P.value.contents.length-1},Q=()=>{i.value=i.value<f.value.length-1?i.value+1:0,c.value=0},$=()=>{c.value<P.value.contents.length-1?c.value=c.value+1:Q()},_=()=>{c.value>0?c.value=c.value-1:U()},T=u=>u.map(d=>fe(d)?d:a(d[0],d[1])),G=u=>{if(u.type==="custom"){const d=Me[u.index]||"$content",[g,B=""]=he(d)?d[l.value].split("$content"):d.split("$content");return T([g,...u.display,B])}return T(u.display)},z=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{ae("keydown",u=>{if(I.value){if(u.key==="ArrowUp")_();else if(u.key==="ArrowDown")$();else if(u.key==="Enter"){const d=P.value.contents[c.value];n.path!==d.path&&(h(d),o.push(d.path),z())}}}),Le(D.value,{reserveScrollBarGap:!0})}),de(()=>{Se()}),()=>a("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!I.value}],ref:D},s.value===""?v.value.length?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>a(Y,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),z()}},()=>[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",G(u))]),a("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),p(d)}},a(x))]))])):r.value.emptyHistory:I.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:u,contents:d},g)=>{const B=i.value===g;return a("li",{class:["search-pro-result-list-item",{active:B}]},[a("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((y,ee)=>{const V=B&&c.value===ee;return a(Y,{to:y.path,class:["search-pro-result-item",{active:V,"aria-selected":V}],onClick:()=>{h(y),z()}},()=>[y.type==="content"?null:a(y.type==="title"?Z:y.type==="heading"?J:F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?a("div",{class:"content-header"},y.header):null,a("div",G(y))])])})])})):r.value.emptyResult)}});export{De as default};