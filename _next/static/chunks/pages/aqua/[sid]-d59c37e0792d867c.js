(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{6579:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aqua/[sid]",function(){return n(1851)}])},1851:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(5893),a=n(8527),o=n(7294),i=n(1163),s=n(7484),d=n.n(s),l=d()().toDate().toString(),c=d()().subtract(7,"day").toDate().toString(),u=["","","",""],f={sid:0,startDate:l,endDate:c,phOffset:1,orpOffset:0,pwData:"",schooldIcon:"",setPhOffset:function(){},setORPOffset:function(){},setPwData:function(){}},p=(0,o.createContext)(f),h=function(){var t=(0,o.useContext)(p);return{sid:t.sid,startDate:t.startDate,endDate:t.endDate,phOffset:t.phOffset,orpOffset:t.orpOffset,pwData:t.pwData,schooldIcon:t.schooldIcon,setPhOffset:t.setPhOffset,setORPOffset:t.setORPOffset,setPwData:t.setPwData}},x=function(t){var e=t.children,n=t.sid,a=(0,o.useState)(l),i=a[0],s=a[1],f=(0,o.useState)(c),h=f[0],x=f[1],m=(0,o.useState)(1),g=m[0],v=m[1],y=(0,o.useState)(0),j=y[0],b=y[1],C=(0,o.useState)(Math.random()),O=C[0],D=C[1],k=(0,o.useState)(""),S=k[0],w=k[1],_=u[n+1];return(0,o.useEffect)((function(){var t=d()().toDate().toString(),e=d()().subtract(7,"day").toDate().toString();s(e),x(t),setTimeout((function(){return D(Math.random())}),36e5)}),[O]),(0,r.jsx)(p.Provider,{value:{sid:n,startDate:i,endDate:h,phOffset:g,orpOffset:j,pwData:S,schooldIcon:_,setPhOffset:v,setORPOffset:b,setPwData:w},children:e})},m=n(7297),g=n(797),v=n(5254),y=n(5850),j=n(4651),b=n(9116),C=n(5113),O=n(7484);function D(){var t=(0,o.useState)(),e=t[0],n=t[1],i=(0,o.useState)(),s=i[0],d=i[1],l=(0,o.useState)(Math.random()),c=l[0],u=l[1];return(0,o.useEffect)((function(){var t=O().format("DD/MM/YYYY"),e=O().format("HH:mm");n(t),d(e),setTimeout((function(){return u(Math.random())}),6e4)}),[c]),(0,r.jsxs)(a.kC,{display:"inline-block",textColor:"#e534eb",children:[(0,r.jsx)(a.xv,{as:"abbr",marginRight:"40px",marginLeft:"35px",fontSize:"40px",children:e}),(0,r.jsx)(a.xv,{as:"abbr",fontSize:"40px",children:s})]})}O().format();var k=n(7568),S=n(7582),w=n(3162),_=n.n(w);function R(){var t=h(),e=t.schooldIcon,n=t.setPhOffset,o=t.setORPOffset,i=t.setPwData,s=function(){var t=h(),e=t.sid,n=t.phOffset,r=t.orpOffset,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:e,phOffset:n||1,orpOffset:r||0})},o=function(){var t=(0,k.Z)((function(){return(0,S.__generator)(this,(function(t){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/downloadCSV"),a).then(function(){var t=(0,k.Z)((function(t){return(0,S.__generator)(this,(function(e){return[2,t.blob()]}))}));return function(e){return t.apply(this,arguments)}}()).then((function(t){return _().saveAs(t,"aquaCondition.csv")})),[2]}))}));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,k.Z)((function(){return(0,S.__generator)(this,(function(t){return fetch("".concat("https://aqua-test.silver-lining.hk:2053","/aqua/resetRecord"),a).then(function(){var t=(0,k.Z)((function(t){return(0,S.__generator)(this,(function(e){return[2,t.json()]}))}));return function(e){return t.apply(this,arguments)}}()),[2]}))}));return function(){return t.apply(this,arguments)}}();return{downloadCsv:o,resetRecord:i}}(),d=s.downloadCsv,l=s.resetRecord;return(0,r.jsxs)(a.kC,{minWidth:"400",minHeight:"250",display:"inline-block",marginLeft:"10px",marginBottom:"10px",verticalAlign:"top",children:[(0,r.jsxs)(a.kC,{marginLeft:"35px",marginTop:"35px",children:[(0,r.jsx)(j.Ee,{src:e,width:"141px",height:"155px"}),(0,r.jsxs)(a.kC,{display:"BLOCK",marginLeft:"35px",children:[(0,r.jsxs)(a.kC,{marginBottom:"10px",children:[(0,r.jsx)(a.xv,{fontSize:"sm",textColor:"#e534eb",marginRight:"28px",children:"pH offset:"}),(0,r.jsx)(b.II,{textColor:"#e534eb",type:"number",size:"xs ",width:"35px",marginRight:"10px",onChange:function(t){n(t.target.value)}})]}),(0,r.jsxs)(a.kC,{children:[(0,r.jsx)(a.xv,{fontSize:"sm",textColor:"#e534eb",marginRight:"20px",children:"ORP offset:"}),(0,r.jsx)(b.II,{textColor:"#e534eb",type:"number",size:"xs ",width:"35px",marginRight:"10px",onChange:function(t){o(t.target.value)}})]})," ",(0,r.jsx)(C.zx,{display:"BLOCK",colorScheme:"teal",size:"xs",onClick:d,marginTop:"10px",children:"Download CSV File"}),(0,r.jsxs)("form",{onSubmit:l,children:[(0,r.jsx)(b.II,{textColor:"#e534eb",type:"password",size:"xs ",width:"120px",marginRight:"10px",marginTop:"10px",display:"inline",placeholder:"Enter password",onChange:function(t){i(t.target.value)},isRequired:!0}),(0,r.jsx)(C.zx,{display:"inline",colorScheme:"teal",size:"xs",type:"submit",children:"Reset"})]})]})]}),(0,r.jsx)(D,{})]})}var P=n(6122),I=n(3023),E=n(5358),T=n(4888),q=n(6108);function L(t){var e=t.data,n=t.type,o=t.lastElement,i=t.unit,s=t.dataKey;return(0,r.jsxs)(a.kC,{minWidth:"400",minHeight:"250",maxWidth:"400",maxHeight:"250",boxShadow:"md",p:"6",rounded:"md",display:"inline-block",border:"1px",marginLeft:"10px",marginBottom:"10px",paddingRight:"0",paddingLeft:"0",paddingTop:"0",paddingBottom:"0",borderStartColor:"#5c5c5c",borderEndColor:"#170047",bgGradient:"linear(to-br, #170047, #170047)",children:[(0,r.jsxs)(a.kC,{display:"BLOCK",textColor:"#e534eb",children:[(0,r.jsx)(a.kC,{paddingLeft:"30px",fontSize:"20px",fontWeight:"bold",fontFamily:"serif",children:n}),(0,r.jsxs)(a.kC,{paddingLeft:"30px",fontSize:"30px",fontFamily:"Verdana, Arial, Helvetica, sans-serif",children:[o," ",i]})]}),(0,r.jsxs)(P.T,{data:e,width:380,height:180,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"colorWeight",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"50%",stopColor:"#00fbff",stopOpacity:.8}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#ff00f7",stopOpacity:.6})]})}),(0,r.jsx)(I.K,{dataKey:"dateTime",type:"number",scale:"utc",color:"#e534eb",domain:["dataMin","dataMax"],tick:!1}),(0,r.jsx)(E.B,{tick:{fill:"#e534eb"}}),(0,r.jsx)(T.u,{content:function(t){var e=t.active,n=t.payload,o=t.label;if(e&&n&&n.length){var s=new Date(o).toLocaleString("en-GB");return(0,r.jsxs)(a.kC,{backgroundColor:"white",display:"BLOCK",children:[(0,r.jsx)("p",{children:"".concat(s)}),(0,r.jsxs)("p",{children:["".concat(n[0].value," ").concat(i)," "]})]})}return null}}),(0,r.jsx)(q.u,{type:"monotone",dataKey:s,stroke:"#0075ff",fillOpacity:1,fill:"url(#colorWeight)",color:"#e534eb"})]})]})}function z(){var t=(0,m.Z)(["\n  query GetAquaCondition(\n    $schoolId: Int!\n    $startday: DateTime\n    $endday: DateTime\n  ) {\n    records(\n      where: {\n        sid: { equals: $schoolId }\n        date_time: { lte: $endday, gte: $startday }\n      }\n      orderBy: { date_time: asc }\n    ) {\n      date_time\n      temperature\n      level\n      ph\n      orp\n      salty\n    }\n  }\n"]);return z=function(){return t},t}function K(){var t=(0,m.Z)(["\n  subscription SubscribeAquaCondition($schoolId: Int!) {\n    addedRecord(sid: $schoolId) {\n      sid\n      date_time\n      temperature\n      level\n      ph\n      orp\n      salty\n    }\n  }\n"]);return K=function(){return t},t}d()().format;var B=(0,v.Ps)(z()),M=(0,v.Ps)(K());function H(t){var e=t.sid,n=h(),s=n.orpOffset,l=n.phOffset,c=n.startDate,u=n.endDate,f=(0,y.a)(B,{variables:{schoolId:e,startday:c,endday:u}}),p=f.loading,x=f.error,m=f.data,v=f.subscribeToMore,j=(0,i.useRouter)();(0,o.useEffect)((function(){v({document:M,variables:{schoolId:e},updateQuery:function(t,e){var n=e.subscriptionData;if(!n.data)return t;var r=n.data.addedRecord;return 99==n.data.addedRecord.temperature?(j.reload(),t):Object.assign({},t,{records:(0,g.Z)(t.records).concat([r])})}})}),[]);var b,C,O,D,k,S,w,_=null===m||void 0===m?void 0:m.records.map((function(t,e){return{dateTime:d()(t.date_time).toDate().getTime(),temperature:t.temperature,level:t.level,ph:t.ph,orp:t.orp,salty:t.salty}}));return p?(0,r.jsx)(a.kC,{children:"Loading..."}):x?(0,r.jsxs)(a.kC,{children:["Error! ",x.message]}):(console.log("aquaConditionData"),console.log(m),m?(console.log("aquaConditionData.records[-1]"),console.log(m.records[-1]),console.log(m.records.length),(0,r.jsxs)(a.xu,{backgroundColor:"#0d0029",display:"inline-block",children:[(0,r.jsx)(R,{}),(0,r.jsx)(L,{data:_,type:"Water temperature",lastElement:null===(b=m.records[m.records.length-1])||void 0===b?void 0:b.temperature,unit:"\xb0C",dataKey:"temperature"}),(0,r.jsx)(L,{data:_,type:"Conductivity",lastElement:null===(C=m.records[m.records.length-1])||void 0===C?void 0:C.level,unit:"mS",dataKey:"level"}),(0,r.jsx)(L,{data:_,type:"pH Value",lastElement:l?(null===(O=m.records[m.records.length-1])||void 0===O?void 0:O.ph)*l:null===(D=m.records[m.records.length-1])||void 0===D?void 0:D.ph,unit:"",dataKey:"ph"}),(0,r.jsx)(L,{data:_,type:"ORP Value",lastElement:s?(null===(k=m.records[m.records.length-1])||void 0===k?void 0:k.orp)+s:null===(S=m.records[m.records.length-1])||void 0===S?void 0:S.orp,unit:"mV",dataKey:"orp"}),(0,r.jsx)(L,{data:_,type:"Salinity",lastElement:null===(w=m.records[m.records.length-1])||void 0===w?void 0:w.salty,unit:"ppt",dataKey:"salty"}),(0,r.jsx)(a.xu,{marginLeft:"10px",marginBottom:"10px",children:(0,r.jsx)("video",{width:"400",src:"https://aqua-test.silver-lining.hk:2053/stream"})})]})):(0,r.jsx)(r.Fragment,{}))}function $(t){var e=(0,i.useRouter)();if(void 0!==e.query.sid){var n=parseInt(e.query.sid,10);return(0,r.jsx)(a.xu,{backgroundColor:"#0d0029",display:"inline-block",children:(0,r.jsx)(x,{sid:n,children:(0,r.jsx)(H,{sid:n})})})}return(0,r.jsx)(r.Fragment,{})}}},function(t){t.O(0,[499,407,774,888,179],(function(){return e=6579,t(t.s=e);var e}));var e=t.O();_N_E=e}]);