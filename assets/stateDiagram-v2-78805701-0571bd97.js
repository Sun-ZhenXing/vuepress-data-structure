import{R as K,B as _,$ as Y,x as P,r as Q,a as U,T as X,w as Z}from"./styles-83042dc0-2481bb35.js";import{A as tt}from"./layout-10a68736-584ee8ed.js";import{e as d,t as S,n as D,j as et,$ as st,d as R}from"./mermaid.esm.min-9d5969d9.js";import{h as rt}from"./index-f4462e28-7c6fe03f.js";import"./isPlainObject-bb374f45-45a52325.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";import"./app-48029ca2.js";import"./framework-8980b429.js";import"./edges-a2733861-9c864654.js";import"./svgDraw-c2c52520-79274080.js";const w="rect",k="rectWithTitle",at="start",it="end",ot="divider",nt="roundedWithTitle",dt="note",lt="noteGroup",h="statediagram",ct="state",pt=`${h}-${ct}`,W="transition",bt="note",gt="note-edge",ht=`${W} ${gt}`,ut=`${h}-${bt}`,yt="cluster",$t=`${h}-${yt}`,ft="cluster-alt",mt=`${h}-${ft}`,j="parent",G="note",xt="state",v="----",wt=`${v}${G}`,L=`${v}${j}`,I="fill:none",O="fill: #333",q="c",F="text",H="normal";let T={},p=0;const Tt=function(t){const a=Object.keys(t);for(const e of a)t[e]},St=function(t,a){d.trace("Extracting classes"),a.db.clear();try{return a.parser.parse(t),a.db.extract(a.db.getRootDocV2()),a.db.getClasses()}catch(e){return e}};function At(t){return t==null?"":t.classes?t.classes.join(" "):""}function B(t="",a=0,e="",i=v){const o=e!==null&&e.length>0?`${i}${e}`:"";return`${xt}-${t}${o}-${a}`}const x=(t,a,e,i,o,n)=>{const s=e.id,u=At(i[s]);if(s!=="root"){let g=w;e.start===!0&&(g=at),e.start===!1&&(g=it),e.type!==P&&(g=e.type),T[s]||(T[s]={id:s,shape:g,description:R.sanitizeText(s,S()),classes:`${u} ${pt}`});const r=T[s];e.description&&(Array.isArray(r.description)?(r.shape=k,r.description.push(e.description)):r.description.length>0?(r.shape=k,r.description===s?r.description=[e.description]:r.description=[r.description,e.description]):(r.shape=w,r.description=e.description),r.description=R.sanitizeTextOrArray(r.description,S())),r.description.length===1&&r.shape===k&&(r.shape=w),!r.type&&e.doc&&(d.info("Setting cluster for ",s,E(e)),r.type="group",r.dir=E(e),r.shape=e.type===Q?ot:nt,r.classes=r.classes+" "+$t+" "+(n?mt:""));const y={labelStyle:"",shape:r.shape,labelText:r.description,classes:r.classes,style:"",id:s,dir:r.dir,domId:B(s,p),type:r.type,padding:15};if(e.note){const l={labelStyle:"",shape:dt,labelText:e.note.text,classes:ut,style:"",id:s+wt+"-"+p,domId:B(s,p,G),type:r.type,padding:15},c={labelStyle:"",shape:lt,labelText:e.note.text,classes:r.classes,style:"",id:s+L,domId:B(s,p,j),type:"group",padding:0};p++;const $=s+L;t.setNode($,c),t.setNode(l.id,l),t.setNode(s,y),t.setParent(s,$),t.setParent(l.id,$);let b=s,f=l.id;e.note.position==="left of"&&(b=l.id,f=s),t.setEdge(b,f,{arrowhead:"none",arrowType:"",style:I,labelStyle:"",classes:ht,arrowheadStyle:O,labelpos:q,labelType:F,thickness:H})}else t.setNode(s,y)}a&&a.id!=="root"&&(d.trace("Setting node ",s," to be child of its parent ",a.id),t.setParent(s,a.id)),e.doc&&(d.trace("Adding nodes children "),Dt(t,e,e.doc,i,o,!n))},Dt=(t,a,e,i,o,n)=>{d.trace("items",e),e.forEach(s=>{switch(s.stmt){case X:x(t,a,s,i,o,n);break;case P:x(t,a,s,i,o,n);break;case U:{x(t,a,s.state1,i,o,n),x(t,a,s.state2,i,o,n);const u={id:"edge"+p,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:I,labelStyle:"",label:R.sanitizeText(s.description,S()),arrowheadStyle:O,labelpos:q,labelType:F,thickness:H,classes:W};t.setEdge(s.state1.id,s.state2.id,u,p),p++}break}})},E=(t,a=Z)=>{let e=a;if(t.doc)for(let i=0;i<t.doc.length;i++){const o=t.doc[i];o.stmt==="dir"&&(e=o.value)}return e},kt=function(t,a,e,i){d.info("Drawing state diagram (v2)",a),T={},i.db.getDirection();const{securityLevel:o,state:n}=S(),s=n.nodeSpacing||50,u=n.rankSpacing||50;d.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),d.info(i.db.getRootDocV2());const g=i.db.getStates(),r=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:E(i.db.getRootDocV2()),nodesep:s,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});x(r,void 0,i.db.getRootDocV2(),g,i.db,!0);let y;o==="sandbox"&&(y=D("#i"+a));const l=o==="sandbox"?D(y.nodes()[0].contentDocument.body):D("body"),c=l.select(`[id="${a}"]`),$=l.select("#"+a+" g");rt($,r,["barb"],h,a);const b=8;et.insertTitle(c,"statediagramTitleText",n.titleTopMargin,i.db.getDiagramTitle());const f=c.node().getBBox(),V=f.width+b*2,C=f.height+b*2;c.attr("class",h);const N=c.node().getBBox();st(c,C,V,n.useMaxWidth);const z=`${N.x-b} ${N.y-b} ${V} ${C}`;d.debug(`viewBox ${z}`),c.attr("viewBox",z);const J=document.querySelectorAll('[id="'+a+'"] .edgeLabel .label');for(const A of J){const M=A.getBBox(),m=document.createElementNS("http://www.w3.org/2000/svg",w);m.setAttribute("rx",0),m.setAttribute("ry",0),m.setAttribute("width",M.width),m.setAttribute("height",M.height),A.insertBefore(m,A.firstChild)}},Bt={setConf:Tt,getClasses:St,draw:kt},Wt={parser:K,db:_,renderer:Bt,styles:Y,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,_.clear()}};export{Wt as diagram};
