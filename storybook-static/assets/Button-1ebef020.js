import{d as u,k as o,o as i,a as c,f as m,n as p,l as b}from"./vue.esm-bundler-3536f4d1.js";const d=u({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(t,{emit:n}){const e=t,a=o(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),r=o(()=>({backgroundColor:e.backgroundColor})),s=()=>{n("click",1)};return(l,y)=>(i(),c("button",{type:"button",class:p(a.value),onClick:s,style:b(r.value)},m(l.label),7))}});d.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/Users/pierre-alainbouly/Documents/dev/tests/vue3-storybook-and-vue-router/src/stories/Button.vue"]};export{d as _};
//# sourceMappingURL=Button-1ebef020.js.map
