(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var i=n(1),s=n(2),l=n(4),h=n(3),u=function(e){return r.a.createElement("div",{className:" dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id),alt:"robofriend"}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.email)))},m=function(e){return r.a.createElement("div",null,e.robots.map((function(t,n){return r.a.createElement(u,{name:e.robots[n].name,email:e.robots[n].email,id:e.robots[n].id,key:e.robots[n].id})})))},d=function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:e.onSearchChange,className:"pa3 b2 b--green bg-lightest-blue",type:"search",placeholder:"Search a robot"}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)},f=(n(14),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong!"):this.props.children}}]),n}(r.a.Component)),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"SearchFieldChange",value:function(e){this.setState({searchfield:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())})),n=0===this.state.robots.length?"Loading":"Robofriends";return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},n),r.a.createElement(d,{onSearchChange:this.SearchFieldChange.bind(this)}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(m,{robots:t}))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5bd20823.chunk.js.map