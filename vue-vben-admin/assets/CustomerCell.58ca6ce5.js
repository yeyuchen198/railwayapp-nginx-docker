import{B as g,T as _}from"./TableImg.3fedf71d.js";import"./BasicForm.7d6f221c.js";import{u as E}from"./useTable.16dcbffe.js";import{av as T,a as k,ax as r,o as t,h as l,n as y,z as a,F as A,B as m,t as p,j as i,l as B}from"./index.63aad524.js";import{T as C}from"./index.84e889b5.js";import{A as f}from"./index.c8070c1f.js";import{d as I}from"./table.a492f1de.js";import"./index.7a680b29.js";import"./Checkbox.b1d492be.js";import"./index.1af287f7.js";import"./index.e4f7c4e3.js";import"./useForm.9f855efc.js";import"./index.e729b1fb.js";import"./index.31392f71.js";import"./useWindowSizeFn.95aa1a19.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";import"./useSize.5fcaf8d6.js";import"./transButton.dee82f80.js";import"./index.03d12346.js";import"./index.b6df4568.js";import"./uuid.2b29000c.js";import"./index.106a2a3b.js";import"./_baseIteratee.2feb8f6d.js";import"./get.10e8bd7c.js";import"./DeleteOutlined.53f484d5.js";import"./index.26fa4fa0.js";import"./useRefs.1b72de5d.js";import"./Form.7d1fef9a.js";import"./Col.b6341743.js";import"./useFlexGapSupport.ff41af6d.js";import"./index.81d18dcf.js";import"./FullscreenOutlined.f1be9550.js";import"./index.2a8488f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.2fff9350.js";import"./eagerComputed.8debf510.js";import"./index.aede9413.js";import"./scrollTo.0fe1bcc1.js";import"./index.7da871cd.js";/* empty css              *//* empty css               */import"./index.72d61e70.js";import"./index.4971cc48.js";import"./index.87d8e19b.js";import"./download.81d50457.js";import"./base64Conver.08b9f4ec.js";import"./index.2a9181a3.js";import"./index.f18c5e6c.js";import"./uniqBy.ac497ea0.js";const x=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],b=k({components:{BasicTable:g,TableImg:_,Tag:C,Avatar:f},setup(){const[u]=E({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:x,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),h={class:"p-4"};function v(u,D,w,L,z,$){const s=r("Tag"),c=r("Avatar"),n=r("TableImg"),F=r("BasicTable");return t(),l("div",h,[y(F,{onRegister:u.registerTable},{bodyCell:a(({column:e,record:o,text:d})=>[e.key==="id"?(t(),l(A,{key:0},[m(" ID: "+p(o.id),1)],64)):e.key==="no"?(t(),i(s,{key:1,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):e.key==="avatar"?(t(),i(c,{key:2,size:60,src:o.avatar},null,8,["src"])):e.key==="imgArr"?(t(),i(n,{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):e.key==="imgs"?(t(),i(n,{key:4,size:60,imgList:d},null,8,["imgList"])):e.key==="category"?(t(),i(s,{key:5,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):B("",!0)]),_:1},8,["onRegister"])])}var Lt=T(b,[["render",v]]);export{Lt as default};