var r=(i,u,o)=>new Promise((a,l)=>{var s=t=>{try{n(o.next(t))}catch(e){l(e)}},p=t=>{try{n(o.throw(t))}catch(e){l(e)}},n=t=>t.done?a(t.value):Promise.resolve(t.value).then(s,p);n((o=o.apply(i,u)).next())});import{B as f}from"./TableImg.3fedf71d.js";import{j as E}from"./BasicForm.7d6f221c.js";import{u as D}from"./useTable.16dcbffe.js";import{o as w,t as h}from"./tree.8a6b156f.js";import{d as B}from"./table.a492f1de.js";import{av as b,a as g,v,ax as c,o as C,h as R,n as x,z as A,j as k,l as I,ah as y,E as T}from"./index.63aad524.js";import"./index.7a680b29.js";import"./Checkbox.b1d492be.js";import"./index.1af287f7.js";import"./index.e4f7c4e3.js";import"./useForm.9f855efc.js";import"./index.e729b1fb.js";import"./index.31392f71.js";import"./index.c8070c1f.js";import"./useSize.5fcaf8d6.js";import"./eagerComputed.8debf510.js";import"./useWindowSizeFn.95aa1a19.js";import"./useContentViewHeight.237e58cd.js";import"./ArrowLeftOutlined.9df57ef7.js";import"./index.4d4388b2.js";import"./transButton.dee82f80.js";import"./index.03d12346.js";import"./index.b6df4568.js";import"./index.84e889b5.js";import"./uuid.2b29000c.js";import"./index.106a2a3b.js";import"./_baseIteratee.2feb8f6d.js";import"./get.10e8bd7c.js";import"./DeleteOutlined.53f484d5.js";import"./index.26fa4fa0.js";import"./useRefs.1b72de5d.js";import"./Form.7d1fef9a.js";import"./Col.b6341743.js";import"./useFlexGapSupport.ff41af6d.js";import"./index.81d18dcf.js";import"./FullscreenOutlined.f1be9550.js";import"./index.2a8488f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.2fff9350.js";import"./index.aede9413.js";import"./scrollTo.0fe1bcc1.js";import"./index.7da871cd.js";/* empty css              *//* empty css               */import"./index.72d61e70.js";import"./index.4971cc48.js";import"./index.87d8e19b.js";import"./download.81d50457.js";import"./base64Conver.08b9f4ec.js";import"./index.2a9181a3.js";import"./index.f18c5e6c.js";import"./uniqBy.ac497ea0.js";const _=[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>r(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:w,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:h,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100}],M=g({components:{BasicTable:f,TableAction:E},setup(){const{createMessage:i}=T(),u=v(""),[o]=D({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:B,columns:_,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function s(t){return r(this,null,function*(){var m,d;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(m=t.onValid)==null?void 0:m.call(t))try{const F=y(t.editValueRefs);(yield(d=t.onEdit)==null?void 0:d.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(F){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:a.bind(null,t)}]}function n({column:t,value:e,record:m}){t.dataIndex==="id"&&(m.editValueRefs.name4.value=`${e}`)}return{registerTable:o,handleEdit:a,createActions:p,onEditChange:n}}}),P={class:"p-4"};function S(i,u,o,a,l,s){const p=c("TableAction"),n=c("BasicTable");return C(),R("div",P,[x(n,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:A(({column:t,record:e})=>[t.key==="action"?(C(),k(p,{key:0,actions:i.createActions(e,t)},null,8,["actions"])):I("",!0)]),_:1},8,["onRegister","onEditChange"])])}var Yt=b(M,[["render",S]]);export{Yt as default};