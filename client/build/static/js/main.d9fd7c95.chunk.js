(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s,a=c(1),n=c.n(a),r=c(37),i=c.n(r),b=(c(44),c(45),c(2)),o=(c(46),c(18),c(84)),u=c(85),j=(c(47),c(0)),d=function(e){var t=Object(a.useState)("brown"),c=Object(b.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!1),i=Object(b.a)(r,2),o=i[0],u=i[1],d=Object(a.useState)(!1),l=Object(b.a)(d,2),h=l[0],O=l[1],f=Object(a.useState)("0deg"),m=Object(b.a)(f,2),x=m[0],v=m[1];return Object(a.useEffect)((function(){u(e.isClicked),O(e.isPM),"b"===e.side&&v("180deg")}),[e.isClicked,e.isPM,e.side]),Object(a.useEffect)((function(){o?n("orange"):h?n("pink"):(e.square%10+parseInt(e.square/10))%2==0?n("#21bc70FF"):n("#006940EE")}),[o,h]),Object(j.jsx)("div",{style:{transform:"rotate("+x+")",backgroundColor:s},className:"square",children:Object(j.jsx)("img",{className:"piece",src:"../../Assets/Pieces/"+e.currentPiece+".svg",alt:""})})},l=function(e,t){var c=[],s=e[Math.trunc(t/10)][t%10],a="b",n="w";if("b"===s.charAt(0)&&(a="w",n="b"),"p"===s.charAt(1)){var r=2*(.5-("b"===s.charAt(0)));try{""===e[Math.trunc(t/10)-r][t%10]&&(c.push(t-10*r),6!==Math.trunc(t/10)&&1!==Math.trunc(t/10)||""!==e[Math.trunc(t/10)-2*r][t%10]||c.push(t-20*r))}catch(h){e[Math.trunc(t/10)][t%10]=n+"q"}try{e[Math.trunc((t-9*r)/10)][(t-9*r)%10].charAt(0)===a&&c.push(t-9*r),e[Math.trunc((t-11*r)/10)][(t-11*r)%10].charAt(0)===a&&c.push(t-11*r)}catch(O){}}else if("n"===s.charAt(1))for(var i=0,b=[t-20+1,t-20-1,t+10+2,t-10+2,t-10-2,t+10-2,t+20-1,t+20+1,t];i<b.length;i++){var o=b[i];try{e[Math.trunc(o/10)][o%10].charAt(0)!=n&&c.push(o)}catch(f){}}else if("r"===s.charAt(1)||"b"===s.charAt(1)||"q"===s.charAt(1)){var u;"r"===s.charAt(1)&&(u=[-10,10,1,-1]),"b"===s.charAt(1)&&(u=[9,-9,11,-11]),"q"===s.charAt(1)&&(u=[-10,10,1,-1,9,-9,11,-11]);for(var j=0;j<u.length;j++){var d=u[j];try{for(;e[Math.trunc((t+d)/10)][(t+d)%10].charAt(0)!==n&&(c.push(t+d),""===e[Math.trunc((t+d)/10)][(t+d)%10]);)d+=u[j]}catch(m){}}}else if("k"===s.charAt(1)){for(j=t%10-1;j<=t%10+1;j++)for(var l=Math.trunc(t/10)-1;l<=Math.trunc(t/10)+1;l++)try{e[l][j].charAt(0)!==n&&c.push(10*l+j)}catch(x){}"w"==n?(74==t&&"wr"==e[7][7]&&""===e[7][5]&&""==e[7][6]&&c.push(76),74==t&&"wr"==e[7][0]&&""===e[7][1]&&""==e[7][2]&&""==e[7][3]&&c.push(72)):(4==t&&"br"==e[0][7]&&""===e[0][5]&&""==e[0][6]&&c.push(6),4==t&&"br"==e[0][0]&&""===e[0][1]&&""==e[0][2]&&""==e[0][3]&&c.push(2))}return c},h=function(e,t){var c=99,s="b";"b"==t&&(s="w");for(var a=0;a<8;a++)for(var n=0;n<8;n++)e[a][n]===t+"k"&&(c=10*a+n);for(a=0;a<8;a++)for(n=0;n<8;n++)if(e[a][n].charAt(0)===s&&l(e,10*a+n).includes(c))return!0;return!1},O=function(e){var t=Object(a.useState)("0deg"),c=Object(b.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)([]),i=Object(b.a)(r,2),O=i[0],f=i[1],m=Object(a.useState)(99),x=Object(b.a)(m,2),v=x[0],p=x[1],g=Object(a.useState)(!0),w=Object(b.a)(g,2),N=w[0];w[1];Object(a.useEffect)((function(){"b"==e.side&&n("180deg")}),[e.side]);return Object(j.jsx)("div",{style:{transform:"rotate("+s+")"},className:"board",children:e.board.map((function(t,c){return Object(j.jsx)(o.a,{children:e.board[c].map((function(t,s){return Object(j.jsx)(u.a,{className:"nopadding",onClick:function(){return function(t,c){if(O.includes(10*t+c)){for(var s=[],a=0;a<8;a++){for(var n=[],r=0;r<8;r++)n.push(e.board[a][r]);s.push(n)}var i=s[Math.trunc(v/10)][v%10];s[Math.trunc(v/10)][v%10]="",s[t][c]=i,"k"===i.charAt(1)&&N&&(N=!1,"w"==e.side?(74==v&&10*t+c===76&&(console.log("KINGSIDE"),s[7][7]="",s[7][5]="wr"),74==v&&10*t+c===72&&(s[7][0]="",s[7][3]="wr")):(4==v&&10*t+c===6&&(s[0][7]="",s[0][5]="br"),4==v&&10*t+c===2&&(s[0][0]="",s[0][3]="br"))),p(99),f([]);var b="w";"w"==e.whoseMove&&(b="b"),e.setWM(b),e.setBoard(s)}else if(e.canMove&&e.board[t][c].charAt(0)===e.side&&e.whoseMove===e.side){for(var o=l(e.board,10*t+c),u=[],j=0;j<o.length;j++){for(s=[],a=0;a<8;a++){for(n=[],r=0;r<8;r++)n.push(e.board[a][r]);s.push(n)}i=s[t][c],s[t][c]="",s[Math.trunc(o[j]/10)][o[j]%10]=i,h(s,e.board[t][c].charAt(0))||(console.log("HERE"),u.push(o[j]))}f(u),p(10*t+c)}else p(10*t+c),f([])}(c,s)},children:Object(j.jsx)(d,{currentPiece:e.board[c][s],side:e.side,isPM:O.includes(10*c+s),isClicked:10*c+s===v,square:10*c+s})})}))})}))})},f=(c(49),c(50),c(86)),m=function(e){var t=Object(a.useState)(""),c=Object(b.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!1),i=Object(b.a)(r,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){console.log("PRESSSSSED"),e.setRID(s)}),[o]),Object(a.useEffect)((function(){3===e.gameState&&e.setRID(Object(f.a)().substring(0,8).toUpperCase())}),[e.gameState]),1==e.gameState?Object(j.jsx)("div",{className:"side",children:Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)("h2",{className:"text",children:"Welcome to Chessboss"}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{className:"bigbux blue",onClick:function(){e.setGS(3)},children:"Start a Game"})}),Object(j.jsx)("p",{}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{className:"bigbux join",onClick:function(){e.setGS(4)},children:"Join a Game"})}),Object(j.jsx)("p",{}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{disabled:!0,className:"bigbux",children:"Play Chessboss"})})]})}):2==e.gameState?Object(j.jsx)("div",{className:"side",children:Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)("h2",{className:"text",children:"Playing..."}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{className:"bigbux cancel",children:"Resign"})}),Object(j.jsx)("p",{}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{className:"bigbux join",children:"Offer a Draw"})})]})}):3==e.gameState?Object(j.jsx)("div",{className:"side",children:Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)("h3",{className:"text",children:"Your code is"}),Object(j.jsx)("h2",{className:"code",children:e.roomID}),Object(j.jsx)("h4",{className:"instruction",children:"Ask your friend to join the match with the code"}),Object(j.jsx)("p",{}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{className:"bigbux cancel",onClick:function(){e.setGS(1)},children:"Cancel Game"})})]})}):Object(j.jsx)("div",{className:"side",children:Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)("div",{className:"backbutton",children:Object(j.jsx)("button",{className:"bigbux cancel",onClick:function(){e.setGS(1)},children:"Back"})}),Object(j.jsx)("h3",{className:"text",children:"Enter code"}),Object(j.jsxs)("div",{className:" textbox form-group",children:[Object(j.jsx)("input",{className:"",value:s,onChange:function(e){n(e.target.value)},id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter code"}),Object(j.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"Enter your friend's join code."})]}),Object(j.jsx)("div",{className:"buttondiv",children:Object(j.jsx)("button",{onClick:function(){return u(!o)},className:"bigbux join",children:"Join"})}),Object(j.jsx)("p",{})]})})},x=c(38),v=c.n(x),p={"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]},g=function(){var e="localhost:5555",t=Object(a.useState)([["br","bn","bb","bq","bk","bb","bn","br"],["bp","bp","bp","bp","bp","bp","bp","bp"],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["wp","wp","wp","wp","wp","wp","wp","wp"],["wr","wn","wb","wq","wk","wb","wn","wr"]]),c=Object(b.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)("w"),u=Object(b.a)(i,2),d=u[0],l=u[1],h=Object(a.useState)("w"),f=Object(b.a)(h,2),x=f[0],g=f[1],w=Object(a.useState)(!1),N=Object(b.a)(w,2),S=N[0],M=N[1],k=Object(a.useState)(""),A=Object(b.a)(k,2),E=A[0],C=A[1],y=Object(a.useState)(1),I=Object(b.a)(y,2),P=I[0],D=I[1];return Object(a.useEffect)((function(){(s=v()(e,p)).on("boardBack",(function(e){r(e.board),l(e.whoseMove)})),s.on("gameReady",(function(e){M(!0),D(2),g(e[s.id])}))}),[e]),Object(a.useEffect)((function(){s.emit("clientJoin",{roomID:E})}),[E]),Object(a.useEffect)((function(){console.log(E),s.emit("board",{board:n,whoseMove:d,room:E})}),[d]),Object(j.jsx)("div",{className:"bigdiv",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)("div",{className:"padding",children:Object(j.jsx)(O,{canMove:S,board:n,setBoard:r,setWM:l,side:x,whoseMove:d})}),Object(j.jsx)("div",{className:"padding",children:Object(j.jsx)(m,{gameState:P,setGS:D,roomID:E,setRID:C})})]})})};var w=function(){return Object(j.jsx)(g,{})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[82,1,2]]]);
//# sourceMappingURL=main.d9fd7c95.chunk.js.map