(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(14),a(2)),s=a(3),c=a(5),m=a(4),h=a(6),u=a(1),b=(a(16),{height:"auto",minHeight:"100px",width:"500px",backgroundColor:"#75a3e7",boxShadow:"0px 0px 5px #666",marginBottom:"5px",borderRadius:"5px"}),d={marginLeft:"20px"},p=function(e){return i.a.createElement("div",{style:b},i.a.createElement("li",{style:d},i.a.createElement("h4",null,"character: ",e.character),i.a.createElement("ul",null,i.a.createElement("li",null,"Game Series: ",e.gameSeries),i.a.createElement("li",null,"Amiibo Series: ",e.amiiboSeries),i.a.createElement("li",null,"Amiibo Name: ",e.name),i.a.createElement("li",null,"Image:",i.a.createElement("br",null),i.a.createElement("img",{src:e.image,alt:e.character})),i.a.createElement("li",null,"Release Date: ",e.release))))},g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={amiibos:[],showAmiiboForm:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(null!=this.props.title){var t="http://www.amiiboapi.com/api/amiibo/?name="+this.props.title;console.log(t),fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({amiibos:t.amiibo})})}else if(null!=this.props.series){var a="http://www.amiiboapi.com/api/amiibo/?gameseries="+this.props.series;console.log(t),fetch(a).then(function(e){return e.json()}).then(function(t){return e.setState({amiibos:t.amiibo})})}}},{key:"handleClick",value:function(){this.setState({showAmiiboForm:!this.state.showAmiiboForm})}},{key:"render",value:function(){return this.state.showAmiiboForm?i.a.createElement(f,{showForm:!1}):i.a.createElement("div",{id:"showamiibos"},i.a.createElement("button",{style:{borderRadius:"5px",align:"center",backgroundColor:"#00c8af",margin:"auto",width:"auto"},onClick:this.handleClick.bind(this)},"Go back to search"),i.a.createElement("p",null,'results for the search term: "',this.props.title," ",this.props.series,'"'),i.a.createElement("h3",null,"information:"),i.a.createElement("div",null,i.a.createElement("ul",null,this.state.amiibos.map(function(e){return i.a.createElement(p,{amiiboSeries:e.amiiboSeries,character:e.character,gameSeries:e.gameSeries,image:e.image,name:e.name,release:e.release.na})}))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={showForm:!0},a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeName=a.handleChangeName.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeSeries=a.handleChangeSeries.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({showForm:!1})}},{key:"handleChangeName",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeSeries",value:function(e){this.setState({series:e.target.value})}},{key:"render",value:function(){var e={backgroundColor:"#85bfc6",textColor:"black"};return this.state.showForm?i.a.createElement("div",null,i.a.createElement("form",{style:{backgroundColor:"#666666",width:"500px",borderRadius:"0px 15px 15px 0px",position:"relative",padding:"10px"},onSubmit:this.handleSubmit},i.a.createElement("label",{for:"searchname"},"Search for Amiibo by name:"),i.a.createElement("input",{style:e,id:"searchname",type:"text",placeholder:"eg; mario...",value:this.state.title,onChange:this.handleChangeName}),i.a.createElement("br",null),i.a.createElement("label",{for:"searchseries"},"Search for Amiibo by game series:"),i.a.createElement("input",{style:e,id:"searchseries",type:"text",placeholder:"eg; super mario bros...",value:this.state.series,onChange:this.handleChangeSeries}),i.a.createElement("br",null),i.a.createElement("button",{style:{borderRadius:"5px",align:"center",backgroundColor:"#00c8af",margin:"auto",width:"20%"},type:"submit"},"GO"))):i.a.createElement(g,{title:this.state.title,series:this.state.series})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.3c8be9cc.chunk.js.map