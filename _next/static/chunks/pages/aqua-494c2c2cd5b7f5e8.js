(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{2383:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aqua",function(){return n(3555)}])},3555:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tt}});var i=n(5893),r=n(8527),o=n(7294),a=n(4651);function s(t){return(0,i.jsxs)(r.xu,{width:"100vw",height:"13vh",maxH:"13vh",display:"inline-block",position:"relative",marginBottom:"5px",children:[(0,i.jsx)(r.xu,{width:"40vw",height:"100%",display:"inline-block",position:"absolute",top:0,left:0,children:(0,i.jsx)(r.xu,{height:"100%",width:"30vw",paddingLeft:"20px",children:(0,i.jsx)(a.Ee,{src:"/logo.png",boxSize:"100%",objectFit:"contain",objectPosition:"left center"})})}),(0,i.jsx)(r.xu,{width:"60vw",height:"100%",textAlign:"center",display:"inline-block",position:"absolute",top:0,right:0,children:(0,i.jsx)(r.xu,{height:"90%",children:(0,i.jsx)(r.xv,{fontSize:["18px","20px","20px","34px","34px","34px"],color:"grey",position:"absolute",bottom:0,right:"20px",children:"5G Real-time Aqua Monitor"})})})]})}n(8683);var d=n(7568),l=n(7582),c=n(5113),u=n(9116),h=n(5504),p=n(2345),x=n(7484),f=n.n(x),g=f()().toDate().toString(),v=f()().subtract(7,"day").toDate().toString(),m=["","","",""],j={sid:0,startDate:g,endDate:v,phOffset:1,orpOffset:0,pwData:"",schooldIcon:"",setPhOffset:function(){},setORPOffset:function(){},setPwData:function(){}},b=(0,o.createContext)(j),y=function(){var t=(0,o.useContext)(b);return{sid:t.sid,startDate:t.startDate,endDate:t.endDate,phOffset:t.phOffset,orpOffset:t.orpOffset,pwData:t.pwData,schooldIcon:t.schooldIcon,setPhOffset:t.setPhOffset,setORPOffset:t.setORPOffset,setPwData:t.setPwData}},w=function(t){var e=t.children,n=t.sid,r=(0,o.useState)(g),a=r[0],s=r[1],d=(0,o.useState)(v),l=d[0],c=d[1],u=(0,o.useState)(1),h=u[0],p=u[1],x=(0,o.useState)(0),j=x[0],y=x[1],w=(0,o.useState)(Math.random()),O=w[0],k=w[1],C=(0,o.useState)(""),S=C[0],D=C[1],_=m[n+1];return(0,o.useEffect)((function(){var t=f()().toDate().toString(),e=f()().subtract(7,"day").toDate().toString();s(e),c(t),setTimeout((function(){return k(Math.random())}),36e5)}),[O]),(0,i.jsx)(b.Provider,{value:{sid:n,startDate:a,endDate:l,phOffset:h,orpOffset:j,pwData:S,schooldIcon:_,setPhOffset:p,setORPOffset:y,setPwData:D},children:e})};function O(){var t=y(),e=t.sid,n=t.phOffset,a=t.orpOffset,s=(0,o.useState)(""),x=s[0],f=s[1],g={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:e,phOffset:n||1,orpOffset:a||0,pw:x})},v=function(){var t=(0,d.Z)((function(){return(0,l.__generator)(this,(function(t){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/resetRecord"),g).then(function(){var t=(0,d.Z)((function(t){return(0,l.__generator)(this,(function(e){return[2,t.json()]}))}));return function(e){return t.apply(this,arguments)}}()),[2]}))}));return function(){return t.apply(this,arguments)}}();return(0,i.jsx)(p.Z,{contentStyle:{width:"23vw"},trigger:(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},onClick:v,children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(h.L,{color:"orange",size:"8vh"})," Reset"]})}),modal:!0,nested:!0,children:function(t){return(0,i.jsxs)(r.xu,{className:"modal",display:"block",width:"15vw",margin:"0 auto",children:[(0,i.jsx)(c.zx,{position:"absolute",top:0,right:0,className:"close",onClick:t,children:"\xd7"}),(0,i.jsx)(r.xu,{marginTop:"8vh",verticalAlign:"middle",paddingBottom:"8vh",children:(0,i.jsxs)("form",{onSubmit:v,children:[(0,i.jsx)(u.II,{display:"inline",type:"password",placeholder:"Enter password",value:x,onChange:function(t){f(t.target.value)},isRequired:!0}),(0,i.jsx)(u.II,{backgroundColor:"orange",display:"inline-block",type:"submit",value:"Reset",marginTop:"3vh"})]})})]})}})}var k=n(4541),C=n(3162),S=n.n(C);function D(){var t=y(),e=t.sid,n=t.phOffset,o=t.orpOffset,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:e,phOffset:n||1,orpOffset:o||0})},s=function(){var t=(0,d.Z)((function(){return(0,l.__generator)(this,(function(t){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/downloadCSV"),a).then(function(){var t=(0,d.Z)((function(t){return(0,l.__generator)(this,(function(e){return[2,t.blob()]}))}));return function(e){return t.apply(this,arguments)}}()).then((function(t){return S().saveAs(t,"aquaCondition.csv")})),[2]}))}));return function(){return t.apply(this,arguments)}}();return(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},onClick:s,children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(k.Q,{color:"orange",size:"8vh"})," Save"]})})}var _=n(4843);function I(){var t=y(),e=(t.sid,t.phOffset),n=t.orpOffset,o=t.setPhOffset,a=t.setORPOffset;return(0,i.jsx)(p.Z,{trigger:(0,i.jsx)(r.xu,{display:"inline-block",height:"100%",marginRight:"15px",_hover:{cursor:"pointer"},children:(0,i.jsxs)(r.xv,{color:"orange",fontSize:"25px",children:[(0,i.jsx)(_.Z,{color:"orange",size:"8vh"})," Offset Data"]})}),nested:!0,children:function(t){return(0,i.jsxs)(r.xu,{className:"modal",display:"block",width:"15vw",margin:"0 auto",children:[(0,i.jsx)(c.zx,{position:"absolute",top:0,right:0,className:"close",onClick:t,children:"\xd7"}),(0,i.jsxs)(r.xu,{marginTop:"7vh",paddingBottom:"4vh",children:[(0,i.jsxs)(r.xu,{display:"inline",children:[(0,i.jsx)(r.xv,{fontSize:"sm",display:"inline-block",fontWeight:"bold",width:"7vw",children:"pH offset:"}),(0,i.jsx)(u.II,{display:"inline-block",type:"number",size:"xs ",width:"4vw",marginRight:"10px",value:e,onChange:function(t){o(t.target.value)}})]}),(0,i.jsxs)(r.xu,{display:"inline",children:[(0,i.jsx)(r.xv,{fontSize:"sm",fontWeight:"bold",width:"7vw",display:"inline-block",children:"ORP offset:"}),(0,i.jsx)(u.II,{display:"inline-block",type:"number",size:"xs ",width:"4vw",marginRight:"10px",value:n,onChange:function(t){a(t.target.value)}})]})]})]})}})}function P(){return(0,i.jsx)(r.xu,{position:"relative",marginBottom:"10vh",children:(0,i.jsx)(r.xu,{height:"13vh",borderTop:"solid",width:"99%",borderColor:"white",position:"absolute",right:0,children:(0,i.jsxs)(r.xu,{height:"12vh",paddingY:"2vh",children:[(0,i.jsx)(D,{}),(0,i.jsx)(O,{}),(0,i.jsx)(I,{})]})})})}var R=n(7297),T=n(797),z=n(5254),A=n(5850),E=n(1163),q=n(9253),B=n(5310),N=n(3023),K=n(5358),Z=n(4888),M=n(6880);function L(t){var e=t.data,n=t.type,o=t.lastElement,a=t.unit,s=t.dataKey,d=y(),l=d.startDate,c=d.endDate;return(0,i.jsxs)(r.xu,{display:"inline-block",paddingRight:"2vw",paddingY:2,children:[(0,i.jsxs)(r.xv,{fontSize:"23px",children:[n," : ",o," ",a]}),(0,i.jsx)(r.xu,{backgroundColor:"orange",width:"30vw",height:"28vh",paddingRight:"0",paddingLeft:"0",paddingTop:"0",paddingBottom:"0",children:(0,i.jsx)(q.h,{width:"95%",height:"100%",children:(0,i.jsxs)(B.w,{data:e,margin:{top:15,right:0,left:0,bottom:0},children:[(0,i.jsx)(N.K,{dataKey:"dateTime",type:"number",scale:"utc",domain:[f()(l).toDate().getTime(),f()(c).endOf("day").toDate().getTime()],tick:!1,height:20}),(0,i.jsx)(K.B,{width:40}),(0,i.jsx)(Z.u,{content:function(t){var e=t.active,n=t.payload,o=t.label;if(e&&n&&n.length){var s=new Date(o).toLocaleString("en-GB");return(0,i.jsxs)(r.xu,{backgroundColor:"white",display:"BLOCK",children:[(0,i.jsx)("p",{children:"".concat(s)}),(0,i.jsxs)("p",{children:["".concat(n[0].value," ").concat(a)," "]})]})}return null}}),(0,i.jsx)(M.x,{type:"monotone",dataKey:s,stroke:"#8884d8",dot:!1})]})})})]})}function $(){var t=(0,R.Z)(["\n  query GetAquaCondition(\n    $schoolId: Int!\n    $startday: DateTime\n    $endday: DateTime\n  ) {\n    records(\n      where: {\n        sid: { equals: $schoolId }\n        date_time: { lte: $endday, gte: $startday }\n      }\n      orderBy: { date_time: asc }\n    ) {\n      date_time\n      temperature\n      ph\n      orp\n      salty\n    }\n  }\n"]);return $=function(){return t},t}function H(){var t=(0,R.Z)(["\n  subscription SubscribeAquaCondition($schoolId: Int!) {\n    addedRecord(sid: $schoolId) {\n      sid\n      date_time\n      temperature\n      ph\n      orp\n      salty\n    }\n  }\n"]);return H=function(){return t},t}f()().format;var Y=(0,z.Ps)($()),X=(0,z.Ps)(H());function G(t){var e,n,a,s,d,l,c=(0,E.useRouter)(),u=y(),h=u.orpOffset,p=u.phOffset,x=u.startDate,g=u.endDate,v=(0,A.a)(Y,{variables:{schoolId:1,startday:x,endday:g}}),m=v.loading,j=v.error,b=v.data,w=v.subscribeToMore;(0,o.useEffect)((function(){w({document:X,variables:{schoolId:1},updateQuery:function(t,e){var n=e.subscriptionData;if(!n.data)return t;var i=n.data.addedRecord;return 99==n.data.addedRecord.temperature?(c.reload(),t):Object.assign({},t,{records:(0,T.Z)(t.records).concat([i])})}})}),[]);var O=null===b||void 0===b?void 0:b.records.map((function(t,e){return{dateTime:f()(t.date_time).toDate().getTime(),temperature:t.temperature,ph:t.ph,orp:t.orp,salty:t.salty}})),k=b?null===(e=b.records[b.records.length-1])||void 0===e?void 0:e.temperature:0,C=b?p?(null===(n=null===b||void 0===b?void 0:b.records[b.records.length-1])||void 0===n?void 0:n.ph)*p:null===(a=null===b||void 0===b?void 0:b.records[b.records.length-1])||void 0===a?void 0:a.ph:0,S=b?h?(null===(s=null===b||void 0===b?void 0:b.records[b.records.length-1])||void 0===s?void 0:s.orp)+h:null===(d=null===b||void 0===b?void 0:b.records[b.records.length-1])||void 0===d?void 0:d.orp:0,D=b?null===(l=b.records[b.records.length-1])||void 0===l?void 0:l.salty:0;return m?(0,i.jsx)(r.kC,{children:"Loading..."}):j?(0,i.jsxs)(r.kC,{children:["Error! ",j.message]}):(0,i.jsxs)(r.xu,{display:"inline-block",children:[(0,i.jsx)(L,{data:O,type:"Temp",lastElement:k,unit:"\xb0C",dataKey:"temperature"}),(0,i.jsx)(L,{data:O,type:"pH",lastElement:C,unit:"",dataKey:"ph"}),(0,i.jsx)(L,{data:O,type:"ORP",lastElement:S,unit:"mV",dataKey:"orp"}),(0,i.jsx)(L,{data:O,type:"SALT",lastElement:D,unit:"ppt",dataKey:"salty"})]})}var W=n(1924);function V(t){var e=t.camId,n=t.selectedCam,o=t.setSelectedCam,a="CAM"+e,s=n===e?"brown":"orange";return(0,i.jsx)(c.zx,{backgroundColor:s,borderRadius:"20px",height:"60px",width:"19vw",fontWeight:"bold",color:"white",display:"block",marginBottom:"10px",marginX:"auto",onClick:function(){o(e)},children:(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(r.xu,{position:"absolute",display:"inline-block",left:"9px",top:"9px",marginY:"auto",verticalAlign:"middle",children:(0,i.jsx)(W.V,{size:"7vh",color:"white"})}),(0,i.jsx)(r.xu,{display:"inline-block",children:(0,i.jsx)(r.xv,{display:"inline-block",fontSize:"20px",textAlign:"center",verticalAlign:"middle",children:a})})]})})}function F(t){return(0,i.jsx)(r.xv,{fontSize:["20px","20px","20px","35px","35px","35px"],textAlign:"center",color:"#6b6b6b",marginBottom:"10px",children:f()().format("DD MMM YYYY \xa0 HH:mm")})}var J=["https://www.youtube.com/embed/tz5M_zFejHo?autoplay=1&mute=1&controls=0","https://www.youtube.com/embed/GIICrR9Bkis?autoplay=1&mute=1&controls=0","https://www.youtube.com/embed/7KoHWgdk0O4?autoplay=1&mute=1&controls=0"];function Q(){var t=(0,o.useState)(1),e=t[0],n=t[1];return(0,i.jsxs)(r.xu,{borderLeft:"solid",borderColor:"white",height:"100%",children:[(0,i.jsx)(F,{}),(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(V,{camId:1,selectedCam:e,setSelectedCam:n}),(0,i.jsx)(V,{camId:2,selectedCam:e,setSelectedCam:n}),(0,i.jsx)(V,{camId:3,selectedCam:e,setSelectedCam:n})]}),(0,i.jsx)(r.xu,{marginX:"auto",backgroundColor:"black",textAlign:"center",width:"25vw",marginTop:"3vh",children:(0,i.jsx)("iframe",{src:J[e-1]})})]})}function U(t){return(0,i.jsxs)(r.rj,{as:"main",paddingX:"20px",width:"100vw",height:"84.5vh",gridTemplateAreas:{base:'"graph graph graph livestream"'},children:[(0,i.jsx)(r.P4,{gridArea:"graph",children:(0,i.jsxs)(w,{sid:1,children:[(0,i.jsx)(P,{}),(0,i.jsx)(G,{})]})}),(0,i.jsx)(r.P4,{gridArea:"livestream",borderTop:"solid",borderColor:"white",children:(0,i.jsx)(Q,{})})]})}function tt(t){return(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(U,{})]})}}},function(t){t.O(0,[499,423,774,888,179],(function(){return e=2383,t(t.s=e);var e}));var e=t.O();_N_E=e}]);