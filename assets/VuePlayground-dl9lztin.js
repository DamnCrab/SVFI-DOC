import{g as _,h as m,i as f,s,j as g,v as R,k as y,l as a,$ as h,_ as u}from"./app-qzvm1urP.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const n=m(),i=f(!0),t=s(),l=s(),r=s(),o=g(()=>R({},n,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([u(()=>import("./vue-repl-cI_vR8tX.js"),__vite__mapDeps([0,1,2])),u(()=>import("./codemirror-editor-lIfJynns.js"),__vite__mapDeps([3,2,1]))]);t.value=p,r.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return y(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:r.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vue-repl-cI_vR8tX.js","assets/app-qzvm1urP.js","assets/utils-5585d0be-XOQqDqQW.js","assets/codemirror-editor-lIfJynns.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}