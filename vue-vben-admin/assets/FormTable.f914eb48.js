import{B as g}from"./TableImg.3fedf71d.js";import"./BasicForm.7d6f221c.js";import{u as h}from"./useTable.16dcbffe.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{av as k,a as y,v as B,ax as i,o as m,j as C,z as e,n as s,h as c,i as b,t as E,F as T,B as p}from"./index.63aad524.js";import{A}from"./index.87d8e19b.js";import{d as S}from"./table.a492f1de.js";import"./index.7a680b29.js";import"./Checkbox.b1d492be.js";import"./index.1af287f7.js";import"./index.e4f7c4e3.js";import"./useForm.9f855efc.js";import"./index.e729b1fb.js";import"./index.31392f71.js";import"./index.c8070c1f.js";import"./useSize.5fcaf8d6.js";import"./eagerComputed.8debf510.js";import"./useWindowSizeFn.95aa1a19.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";import"./transButton.dee82f80.js";import"./index.03d12346.js";import"./index.b6df4568.js";import"./index.84e889b5.js";import"./uuid.2b29000c.js";import"./index.106a2a3b.js";import"./_baseIteratee.2feb8f6d.js";import"./get.10e8bd7c.js";import"./DeleteOutlined.53f484d5.js";import"./index.26fa4fa0.js";import"./useRefs.1b72de5d.js";import"./Form.7d1fef9a.js";import"./Col.b6341743.js";import"./useFlexGapSupport.ff41af6d.js";import"./index.81d18dcf.js";import"./FullscreenOutlined.f1be9550.js";import"./index.2a8488f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.2fff9350.js";import"./index.aede9413.js";import"./scrollTo.0fe1bcc1.js";import"./index.7da871cd.js";/* empty css              *//* empty css               */import"./index.72d61e70.js";import"./index.4971cc48.js";import"./download.81d50457.js";import"./base64Conver.08b9f4ec.js";import"./index.2a9181a3.js";import"./index.f18c5e6c.js";import"./uniqBy.ac497ea0.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[t,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:t,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),v=p("\u6E05\u7A7A"),K={key:1},V=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,t,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":e(()=>[w]),headerTop:e(()=>[s(d,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:t[0]||(t[0]=N=>o.checkedKeys=[]),size:"small"},{default:e(()=>[v]),_:1})],64)):(m(),c("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:e(()=>[V]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var No=k(D,[["render",$]]);export{No as default};
