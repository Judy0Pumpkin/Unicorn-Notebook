import{_ as k,g as _,a as f,o as n,c as a,b as t,t as g,d as r,w as l,V as w,e as I,f as S,h as N,r as v,i as U,j as c,F as P,k as b,m as D,l as B,n as $,p as L,q as H,s as F,u as T,v as M,x as O,y as q}from"./index-5bc2a93b.js";const j="/Unicorn-Notebook/assets/noImage-050496a9.png",y="/Unicorn-Notebook/assets/noNotes-7d40455a.png";const z={created(){console.log(this.group),this.$emit("group",this.group),console.log(this.group),_(this.date,this.group,this.project).then(e=>{console.log(e+"here here");let o="";return console.log(e),e.length==0?o=y:e[0]=="noImg"?o=j:o=e[0],console.log(o),this.img=o,o}).catch(e=>{console.log("{wrong}")}),f(this.group,this.project).then(e=>{console.log(e),this.sliderProgress=e}).catch(e=>{console.log(e)})},props:{group:String,progress:Number,imageSrc:String,project:String},data:e=>({date:new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().substr(0,10),img:"",sliderProgress:""}),computed:{},watch:{group(e){this.refresh()},project(e){this.refresh()}},methods:{formatDate(e){if(!e)return null;const[o,i,d]=e.split("-");return`${i}/${d}/${o}`},parseDate(e){if(!e)return null;const[o,i,d]=e.split("/");return`${d}-${o.padStart(2,"0")}-${i.padStart(2,"0")}`},refresh(){_(this.date,this.group,this.project).then(e=>{console.log(this.group);let o="";return console.log(e),e.length==0?o=y:e[0]=="noImg"?o=j:o=e[0],console.log(o),this.img=o,o}).catch(e=>{console.log(e)}),f(this.group,this.project).then(e=>{console.log(e),this.sliderProgress=e}).catch(e=>{console.log(e)})}},message:{},components:{}},E={class:"progress-card"},G={class:"circle"},J=["src"];function K(e,o,i,d,V,m){return n(),a("div",null,[t("div",E,[t("div",G,[t("img",{src:e.img},null,8,J)]),t("h2",null,g(i.group),1),r(w,{"model-value":e.sliderProgress,color:"blue-grey",height:"25",width:"50%","onUpdate:modelValue":o[0]||(o[0]=p=>e.$emit("update",p))},{default:l(({value:p})=>[t("strong",null,g(Math.ceil(p))+"%",1)]),_:1},8,["model-value"])])])}const Q=k(z,[["render",K],["__scopeId","data-v-56561f92"]]);const R={props:{},data:()=>({progress:10,note1:"",note2:"",note3:"",slider:I.currentUser.uid,items:[],CurrentNote:"Choose Project",project:""}),methods:{onClick(e){this.project=e,S(e).then(o=>{this.note1=o[0],this.note2=o[1],this.note3=o[2]}).catch(o=>{console.log(o)})}},created(){location.replace("#d1"),N().then(e=>{this.onClick(e[e.length-1]);for(let o=0;o<e.length;o++)this.items.push(e[o]),console.log(this.items[o]+"pushed"+o)}).catch(e=>{console.log(e)})},message:{},components:{ProgressCard:Q}},h=e=>(F("data-v-f6f4d477"),e=e(),T(),e),W=h(()=>t("div",{class:"shortPage"},null,-1)),X={class:"shortPage"},Y={key:0},Z=h(()=>t("div",{id:"d1"},null,-1)),A=h(()=>t("div",{class:"shorterPage1"},null,-1)),x={class:"page"},ee={key:0},oe={key:1},se={key:2};function te(e,o,i,d,V,m){const p=v("Header"),u=v("ProgressCard");return n(),a(P,null,[r(p),W,t("div",X,[t("h1",null,g(e.project),1),e.items[0]!=""?(n(),a("div",Y,[r(U,{transition:"scale-transition"},{activator:l(({props:s})=>[r(b,D({icon:"",color:"white"},s,{density:"comfortable"}),{default:l(()=>[r(B,null,{default:l(()=>[$("mdi-menu")]),_:1})]),_:2},1040)]),default:l(()=>[r(L,null,{default:l(()=>[(n(!0),a(P,null,H(e.items,(s,C)=>(n(),M(O,{onClick:re=>m.onClick(s),key:C},{default:l(()=>[r(q,null,{default:l(()=>[$(g(s),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})])):c("",!0)]),Z,A,t("div",x,[e.note1!=""?(n(),a("div",ee,[r(u,{group:e.note1,onGroup:o[0]||(o[0]=s=>e.note1=s),progress:e.progress,onUpdate:o[1]||(o[1]=s=>e.progress=s),project:e.project},null,8,["group","progress","project"])])):c("",!0),e.note2!=""?(n(),a("div",oe,[r(u,{group:e.note2,progress:e.progress,onUpdate:o[2]||(o[2]=s=>e.progress=s),project:e.project},null,8,["group","progress","project"])])):c("",!0),e.note3!=""?(n(),a("div",se,[r(u,{group:e.note3,progress:e.progress,onUpdate:o[3]||(o[3]=s=>e.progress=s),project:e.project},null,8,["group","progress","project"])])):c("",!0)])],64)}const le=k(R,[["render",te],["__scopeId","data-v-f6f4d477"]]);export{le as default};
