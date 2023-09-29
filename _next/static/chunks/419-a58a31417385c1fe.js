"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{45:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5893),r=n(8527),o=n(4651);n(7294);function a(e){return(0,i.jsxs)(r.xu,{width:"100vw",height:"13vh",maxH:"13vh",display:"inline-block",position:"relative",marginBottom:"5px",children:[(0,i.jsx)(r.xu,{width:"60vw",height:"100%",display:"inline-block",position:"absolute",top:0,left:0,children:(0,i.jsx)(r.xu,{height:"100%",width:"30vw",paddingLeft:"20px",children:(0,i.jsx)(o.Ee,{src:"/logo.png",boxSize:"100%",objectFit:"contain",objectPosition:"left center"})})}),(0,i.jsx)(r.xu,{width:"40vw",height:"100%",textAlign:"center",display:"inline-block",position:"absolute",top:0,right:0,children:(0,i.jsx)(r.xu,{height:"90%",children:(0,i.jsx)(r.xv,{fontSize:["20px","20px","20px","34px","34px","34px"],color:"grey",position:"absolute",bottom:0,right:"20px",children:"5G Real-time Aqua Monitor"})})})]})}},6877:function(e,t,n){n.d(t,{Z:function(){return Q}});var i=n(5893),r=n(8527),o=n(7294),a=(n(8683),n(7568)),s=n(7582),d=n(5113),l=n(9116),c=n(5504),h=n(2345),u=n(7484),p=n.n(u),x=p()().toDate().toString(),f=p()().subtract(7,"day").toDate().toString(),g=["","","",""],v={sid:0,startDate:x,endDate:f,phOffset:1,orpOffset:0,pwData:"",schooldIcon:"",setPhOffset:function(){},setORPOffset:function(){},setPwData:function(){}},m=(0,o.createContext)(v),j=function(){var e=(0,o.useContext)(m);return{sid:e.sid,startDate:e.startDate,endDate:e.endDate,phOffset:e.phOffset,orpOffset:e.orpOffset,pwData:e.pwData,schooldIcon:e.schooldIcon,setPhOffset:e.setPhOffset,setORPOffset:e.setORPOffset,setPwData:e.setPwData}},b=function(e){var t=e.children,n=e.sid,r=(0,o.useState)(x),a=r[0],s=r[1],d=(0,o.useState)(f),l=d[0],c=d[1],h=(0,o.useState)(1),u=h[0],v=h[1],j=(0,o.useState)(0),b=j[0],y=j[1],w=(0,o.useState)(Math.random()),O=w[0],k=w[1],C=(0,o.useState)(""),S=C[0],D=C[1],I=g[n+1];return(0,o.useEffect)((function(){var e=p()().toDate().toString(),t=p()().subtract(7,"day").toDate().toString();s(t),c(e),setTimeout((function(){return k(Math.random())}),36e5)}),[O]),(0,i.jsx)(m.Provider,{value:{sid:n,startDate:a,endDate:l,phOffset:u,orpOffset:b,pwData:S,schooldIcon:I,setPhOffset:v,setORPOffset:y,setPwData:D},children:t})};function y(){var e=j(),t=e.sid,n=e.phOffset,u=e.orpOffset,p=(0,o.useState)(""),x=p[0],f=p[1],g={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:t,phOffset:n||1,orpOffset:u||0,pw:x})},v=function(){var e=(0,a.Z)((function(){return(0,s.__generator)(this,(function(e){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/resetRecord"),g).then(function(){var e=(0,a.Z)((function(e){return(0,s.__generator)(this,(function(t){return[2,e.json()]}))}));return function(t){return e.apply(this,arguments)}}()),[2]}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(h.Z,{contentStyle:{width:"23vw"},trigger:(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},onClick:v,children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(c.L,{color:"orange",size:"8vh"})," Reset"]})}),modal:!0,nested:!0,children:function(e){return(0,i.jsxs)(r.xu,{className:"modal",display:"block",width:"15vw",margin:"0 auto",children:[(0,i.jsx)(d.zx,{position:"absolute",top:0,right:0,className:"close",onClick:e,children:"\xd7"}),(0,i.jsx)(r.xu,{marginTop:"8vh",verticalAlign:"middle",paddingBottom:"8vh",children:(0,i.jsxs)("form",{onSubmit:v,children:[(0,i.jsx)(l.II,{display:"inline",type:"password",placeholder:"Enter password",value:x,onChange:function(e){f(e.target.value)},isRequired:!0}),(0,i.jsx)(l.II,{backgroundColor:"orange",display:"inline-block",type:"submit",value:"Reset",marginTop:"3vh"})]})})]})}})}var w=n(4541),O=n(3162),k=n.n(O);function C(){var e=j(),t=e.sid,n=e.phOffset,o=e.orpOffset,d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:t,phOffset:n||1,orpOffset:o||0})},l=function(){var e=(0,a.Z)((function(){return(0,s.__generator)(this,(function(e){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/downloadCSV"),d).then(function(){var e=(0,a.Z)((function(e){return(0,s.__generator)(this,(function(t){return[2,e.blob()]}))}));return function(t){return e.apply(this,arguments)}}()).then((function(e){return k().saveAs(e,"aquaCondition.csv")})),[2]}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},onClick:l,children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(w.Q,{color:"orange",size:"8vh"})," Save"]})})}var S=n(4843);function D(){var e=j(),t=(e.sid,e.phOffset),n=e.orpOffset,o=e.setPhOffset,a=e.setORPOffset;return(0,i.jsx)(h.Z,{trigger:(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(S.Z,{color:"orange",size:"8vh"})," Offset Data"]})}),nested:!0,children:function(e){return(0,i.jsxs)(r.xu,{className:"modal",display:"block",width:"15vw",margin:"0 auto",children:[(0,i.jsx)(d.zx,{position:"absolute",top:0,right:0,className:"close",onClick:e,children:"\xd7"}),(0,i.jsxs)(r.xu,{marginTop:"7vh",paddingBottom:"4vh",children:[(0,i.jsxs)(r.xu,{display:"inline",children:[(0,i.jsx)(r.xv,{fontSize:"sm",display:"inline-block",fontWeight:"bold",width:"7vw",children:"pH offset:"}),(0,i.jsx)(l.II,{display:"inline-block",type:"number",size:"xs ",width:"4vw",marginRight:"10px",value:t,onChange:function(e){o(e.target.value)}})]}),(0,i.jsxs)(r.xu,{display:"inline",children:[(0,i.jsx)(r.xv,{fontSize:"sm",fontWeight:"bold",width:"7vw",display:"inline-block",children:"ORP offset:"}),(0,i.jsx)(l.II,{display:"inline-block",type:"number",size:"xs ",width:"4vw",marginRight:"10px",value:n,onChange:function(e){a(e.target.value)}})]})]})]})}})}function I(){return(0,i.jsx)(r.xu,{position:"relative",marginBottom:"10vh",children:(0,i.jsx)(r.xu,{height:"13vh",borderTop:"solid",width:"99%",borderColor:"white",position:"absolute",right:0,children:(0,i.jsxs)(r.xu,{height:"12vh",paddingY:"2vh",children:[(0,i.jsx)(C,{}),(0,i.jsx)(y,{}),(0,i.jsx)(D,{})]})})})}var P=n(7297),R=n(797),T=n(5254),_=n(5850),z=n(1163),A=n(9253),q=n(5310),E=n(3023),Z=n(5358),B=n(4888),K=n(6880);function L(e){var t=e.data,n=e.type,o=e.lastElement,a=e.unit,s=e.dataKey,d=j(),l=d.startDate,c=d.endDate;return(0,i.jsxs)(r.xu,{display:"inline-block",paddingRight:"3vw",paddingY:2,children:[(0,i.jsxs)(r.xv,{fontSize:"23px",children:[n," : ",o," ",a]}),(0,i.jsx)(r.xu,{backgroundColor:"orange",width:"30vw",height:"28vh",paddingRight:"0",paddingLeft:"0",paddingTop:"0",paddingBottom:"0",children:(0,i.jsx)(A.h,{width:"95%",height:"100%",children:(0,i.jsxs)(q.w,{data:t,margin:{top:15,right:0,left:0,bottom:0},children:[(0,i.jsx)(E.K,{dataKey:"dateTime",type:"number",scale:"utc",domain:[p()(l).toDate().getTime(),p()(c).endOf("day").toDate().getTime()],tick:!1,height:20}),(0,i.jsx)(Z.B,{width:40}),(0,i.jsx)(B.u,{content:function(e){var t=e.active,n=e.payload,o=e.label;if(t&&n&&n.length){var s=new Date(o).toLocaleString("en-GB");return(0,i.jsxs)(r.xu,{backgroundColor:"white",display:"BLOCK",children:[(0,i.jsx)("p",{children:"".concat(s)}),(0,i.jsxs)("p",{children:["".concat(n[0].value," ").concat(a)," "]})]})}return null}}),(0,i.jsx)(K.x,{type:"monotone",dataKey:s,stroke:"#8884d8"})]})})})]})}function M(){var e=(0,P.Z)(["\n  query GetAquaCondition(\n    $schoolId: Int!\n    $startday: DateTime\n    $endday: DateTime\n  ) {\n    records(\n      where: {\n        sid: { equals: $schoolId }\n        date_time: { lte: $endday, gte: $startday }\n      }\n      orderBy: { date_time: asc }\n    ) {\n      date_time\n      temperature\n      ph\n      orp\n      salty\n    }\n  }\n"]);return M=function(){return e},e}function N(){var e=(0,P.Z)(["\n  subscription SubscribeAquaCondition($schoolId: Int!) {\n    addedRecord(sid: $schoolId) {\n      sid\n      date_time\n      temperature\n      ph\n      orp\n      salty\n    }\n  }\n"]);return N=function(){return e},e}p()().format;var $=(0,T.Ps)(M()),Y=(0,T.Ps)(N());function H(e){var t,n,a,s,d,l,c=(0,z.useRouter)(),h=j(),u=h.orpOffset,x=h.phOffset,f=h.startDate,g=h.endDate,v=(0,_.a)($,{variables:{schoolId:1,startday:f,endday:g}}),m=v.loading,b=v.error,y=v.data,w=v.subscribeToMore;(0,o.useEffect)((function(){w({document:Y,variables:{schoolId:1},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var i=n.data.addedRecord;return 99==n.data.addedRecord.temperature?(c.reload(),e):Object.assign({},e,{records:(0,R.Z)(e.records).concat([i])})}})}),[]);var O=null===y||void 0===y?void 0:y.records.map((function(e,t){return{dateTime:p()(e.date_time).toDate().getTime(),temperature:e.temperature,ph:e.ph,orp:e.orp,salty:e.salty}})),k=y?null===(t=y.records[y.records.length-1])||void 0===t?void 0:t.temperature:0,C=y?x?(null===(n=null===y||void 0===y?void 0:y.records[y.records.length-1])||void 0===n?void 0:n.ph)*x:null===(a=null===y||void 0===y?void 0:y.records[y.records.length-1])||void 0===a?void 0:a.ph:0,S=y?u?(null===(s=null===y||void 0===y?void 0:y.records[y.records.length-1])||void 0===s?void 0:s.orp)+u:null===(d=null===y||void 0===y?void 0:y.records[y.records.length-1])||void 0===d?void 0:d.orp:0,D=y?null===(l=y.records[y.records.length-1])||void 0===l?void 0:l.salty:0;return m?(0,i.jsx)(r.kC,{children:"Loading..."}):b?(0,i.jsxs)(r.kC,{children:["Error! ",b.message]}):(0,i.jsxs)(r.xu,{display:"inline-block",children:[(0,i.jsx)(L,{data:O,type:"Temp",lastElement:k,unit:"\xb0C",dataKey:"temperature"}),(0,i.jsx)(L,{data:O,type:"pH",lastElement:C,unit:"",dataKey:"ph"}),(0,i.jsx)(L,{data:O,type:"ORP",lastElement:S,unit:"mV",dataKey:"orp"}),(0,i.jsx)(L,{data:O,type:"SALT",lastElement:D,unit:"ppt",dataKey:"salty"})]})}var G=n(1924);function V(e){var t=e.camId,n=e.selectedCam,o=e.setSelectedCam,a="CAM"+t,s=n===t?"brown":"orange";return(0,i.jsx)(d.zx,{backgroundColor:s,borderRadius:"20px",height:"60px",width:"19vw",fontWeight:"bold",color:"white",display:"block",marginBottom:"10px",marginX:"auto",onClick:function(){o(t)},children:(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(r.xu,{position:"absolute",display:"inline-block",left:"9px",top:"9px",marginY:"auto",verticalAlign:"middle",children:(0,i.jsx)(G.V,{size:"7vh",color:"white"})}),(0,i.jsx)(r.xu,{display:"inline-block",children:(0,i.jsx)(r.xv,{display:"inline-block",fontSize:"20px",textAlign:"center",verticalAlign:"middle",children:a})})]})})}function W(e){return(0,i.jsx)(r.xv,{fontSize:["20px","20px","20px","35px","35px","35px"],textAlign:"center",color:"#6b6b6b",marginBottom:"15px",children:p()().format("DD MMM YYYY \xa0 HH:mm")})}var X=["https://aqua-test.silver-lining.hk:2053/stream/1","https://aqua-test.silver-lining.hk:2053/stream/2","https://aqua-test.silver-lining.hk:2053/stream/3"];function J(){var e=(0,o.useState)(1),t=e[0],n=e[1];return(0,i.jsxs)(r.xu,{borderLeft:"solid",borderColor:"white",height:"100%",children:[(0,i.jsx)(W,{}),(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(V,{camId:1,selectedCam:t,setSelectedCam:n}),(0,i.jsx)(V,{camId:2,selectedCam:t,setSelectedCam:n}),(0,i.jsx)(V,{camId:3,selectedCam:t,setSelectedCam:n})]}),(0,i.jsx)(r.xu,{marginX:"auto",backgroundColor:"black",textAlign:"center",width:"25vw",marginTop:"5vh",children:(0,i.jsx)("video",{src:X[t-1]})})]})}function Q(e){return(0,i.jsxs)(r.rj,{as:"main",paddingX:"20px",width:"100vw",height:"84.5vh",gridTemplateAreas:{base:'"graph graph graph livestream"'},children:[(0,i.jsx)(r.P4,{gridArea:"graph",children:(0,i.jsxs)(b,{sid:1,children:[(0,i.jsx)(I,{}),(0,i.jsx)(H,{})]})}),(0,i.jsx)(r.P4,{gridArea:"livestream",borderTop:"solid",borderColor:"white",children:(0,i.jsx)(J,{})})]})}}}]);