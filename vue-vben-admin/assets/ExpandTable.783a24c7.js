import{B as d}from"./TableImg.3fedf71d.js";import{j as F}from"./BasicForm.7d6f221c.js";import{u as B}from"./useTable.16dcbffe.js";import{P as C}from"./index.e729b1fb.js";import{getBasicColumns as f}from"./tableData.0902c609.js";import{d as b}from"./table.a492f1de.js";import{av as E,a as g,ax as i,o as a,j as m,z as r,n as _,i as T,t as A,l as D}from"./index.63aad524.js";import"./index.7a680b29.js";import"./Checkbox.b1d492be.js";import"./index.1af287f7.js";import"./index.e4f7c4e3.js";import"./useForm.9f855efc.js";import"./index.03d12346.js";import"./index.b6df4568.js";import"./index.84e889b5.js";import"./uuid.2b29000c.js";import"./index.106a2a3b.js";import"./_baseIteratee.2feb8f6d.js";import"./get.10e8bd7c.js";import"./DeleteOutlined.53f484d5.js";import"./index.26fa4fa0.js";import"./useRefs.1b72de5d.js";import"./Form.7d1fef9a.js";import"./Col.b6341743.js";import"./useFlexGapSupport.ff41af6d.js";import"./useSize.5fcaf8d6.js";import"./useWindowSizeFn.95aa1a19.js";import"./index.81d18dcf.js";import"./FullscreenOutlined.f1be9550.js";import"./index.2a8488f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.2fff9350.js";import"./eagerComputed.8debf510.js";import"./index.aede9413.js";import"./scrollTo.0fe1bcc1.js";import"./index.7da871cd.js";/* empty css              *//* empty css               */import"./index.72d61e70.js";import"./transButton.dee82f80.js";import"./index.4971cc48.js";import"./index.87d8e19b.js";import"./download.81d50457.js";import"./base64Conver.08b9f4ec.js";import"./index.2a9181a3.js";import"./index.f18c5e6c.js";import"./uniqBy.ac497ea0.js";import"./index.31392f71.js";import"./index.c8070c1f.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";const w=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function x(o,p,n,t,h,k){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:e})=>[T("span",null,"No: "+A(e.no),1)]),bodyCell:r(({column:e,record:u})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var ko=E(w,[["render",x]]);export{ko as default};
