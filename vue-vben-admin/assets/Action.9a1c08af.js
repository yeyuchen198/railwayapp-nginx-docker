import{av as f,a as E,bD as A,v,ax as c,o as _,j as C,z as s,i as a,n as l,h as D,aA as F,t as k,F as B,B as u,k as $}from"./index.63aad524.js";import{P as g}from"./index.e729b1fb.js";import"./index.31392f71.js";import"./index.c8070c1f.js";import"./useSize.5fcaf8d6.js";import"./eagerComputed.8debf510.js";import"./useWindowSizeFn.95aa1a19.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";import"./transButton.dee82f80.js";const y=E({components:{ScrollContainer:A,PageWrapper:g},setup(){const t=v(null),o=()=>{const r=$(t);if(!r)throw new Error("scroll is Null");return r};function i(r){o().scrollTo(r)}function p(){o().scrollBottom()}return{scrollTo:i,scrollRef:t,scrollBottom:p}}}),T={class:"my-4"},b=u(" \u6EDA\u52A8\u5230100px\u4F4D\u7F6E "),x=u(" \u6EDA\u52A8\u5230800px\u4F4D\u7F6E "),S=u(" \u6EDA\u52A8\u5230\u9876\u90E8 "),w=u(" \u6EDA\u52A8\u5230\u5E95\u90E8 "),N={class:"scroll-wrap"},P={class:"p-3"};function h(t,o,i,p,r,V){const n=c("a-button"),m=c("ScrollContainer"),d=c("PageWrapper");return _(),C(d,{title:"\u6EDA\u52A8\u7EC4\u4EF6\u51FD\u6570\u793A\u4F8B",content:"\u57FA\u4E8Eel-scrollbar"},{default:s(()=>[a("div",T,[l(n,{onClick:o[0]||(o[0]=e=>t.scrollTo(100)),class:"mr-2"},{default:s(()=>[b]),_:1}),l(n,{onClick:o[1]||(o[1]=e=>t.scrollTo(800)),class:"mr-2"},{default:s(()=>[x]),_:1}),l(n,{onClick:o[2]||(o[2]=e=>t.scrollTo(0)),class:"mr-2"},{default:s(()=>[S]),_:1}),l(n,{onClick:o[3]||(o[3]=e=>t.scrollBottom()),class:"mr-2"},{default:s(()=>[w]),_:1})]),a("div",N,[l(m,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",P,[(_(),D(B,null,F(100,e=>a("li",{key:e,class:"p-2",style:{border:"1px solid #eee"}},k(e),1)),64))])]),_:1},512)])]),_:1})}var M=f(y,[["render",h],["__scopeId","data-v-0369ce10"]]);export{M as default};
