import{B as c}from"./TableImg.3fedf71d.js";import"./BasicForm.7d6f221c.js";import{u as l}from"./useTable.16dcbffe.js";import{getBasicColumns as d}from"./tableData.0902c609.js";import{P as _}from"./index.e729b1fb.js";import{d as f}from"./table.a492f1de.js";import{av as g,a as B,ax as e,o as C,j as h,z as t,n as i,B as n}from"./index.63aad524.js";import"./index.7a680b29.js";import"./Checkbox.b1d492be.js";import"./index.1af287f7.js";import"./index.e4f7c4e3.js";import"./useForm.9f855efc.js";import"./index.03d12346.js";import"./index.b6df4568.js";import"./index.84e889b5.js";import"./uuid.2b29000c.js";import"./index.106a2a3b.js";import"./_baseIteratee.2feb8f6d.js";import"./get.10e8bd7c.js";import"./DeleteOutlined.53f484d5.js";import"./index.26fa4fa0.js";import"./useRefs.1b72de5d.js";import"./Form.7d1fef9a.js";import"./Col.b6341743.js";import"./useFlexGapSupport.ff41af6d.js";import"./useSize.5fcaf8d6.js";import"./useWindowSizeFn.95aa1a19.js";import"./index.81d18dcf.js";import"./FullscreenOutlined.f1be9550.js";import"./index.2a8488f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.2fff9350.js";import"./eagerComputed.8debf510.js";import"./index.aede9413.js";import"./scrollTo.0fe1bcc1.js";import"./index.7da871cd.js";/* empty css              *//* empty css               */import"./index.72d61e70.js";import"./transButton.dee82f80.js";import"./index.4971cc48.js";import"./index.87d8e19b.js";import"./download.81d50457.js";import"./base64Conver.08b9f4ec.js";import"./index.2a9181a3.js";import"./index.f18c5e6c.js";import"./uniqBy.ac497ea0.js";import"./index.31392f71.js";import"./index.c8070c1f.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:r}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,r,p,m,R,x){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var xo=g(b,[["render",F]]);export{xo as default};