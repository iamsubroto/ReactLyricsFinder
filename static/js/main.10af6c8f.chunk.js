(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/spinner.b95289c6.gif"},26:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),s=(a(32),a(6)),o=a(7),i=a(9),m=a(8),u=a(10);var d=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-5"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"LyricFinder"))},p=a(25),h=a(11),b=a.n(h),f=c.a.createContext(),k=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(p.a)({},e,{track_list:t.payloads,heading:"Search Results"});default:return e}},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={heading:"Top 10 Tracks",dispatch:function(e){return a.setState(function(t){return k(t,e)})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=a9b4676ddff9c534ddf33d071f2a7c46").then(function(t){e.setState({track_list:t.data.message.body.track_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),y=f.Consumer,E=a(23),v=a.n(E),N=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:v.a,style:{width:"200px",margin:"40px auto",display:"block"}}))},j=a(57),w=function(e){var t=e.track;return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-play"})," Track"),": ",t.track_name,c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),c.a.createElement(j.a,{to:"lyrics/track/".concat(t.track_id),className:"btn btn-dark btn-block"},c.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(y,null,function(e){var t=e.track_list,a=e.heading;return void 0===t||0===t.length?c.a.createElement(N,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"text-center mb-4"},a),c.a.createElement("div",{className:"row"},t.map(function(e){return c.a.createElement(w,{key:e.track.track_id,track:e.track})})))})}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.onChange=function(e){a.setState({trackTitle:e.target.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"findTrack",value:function(e,t){var a=this;t.preventDefault(),b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(this.state.trackTitle,"&page_size=3&page=10&s_track_rating=desc&apikey=a9b4676ddff9c534ddf33d071f2a7c46")).then(function(t){console.log("saerch result is",t.data),e({type:"SEARCH_TRACKS",payloads:t.data.message.body.track_list}),a.setState({trackTitle:""})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement(y,null,function(t){var a=t.dispatch;return c.a.createElement("div",{className:"card card-body mb-4 p-4"},c.a.createElement("h1",{className:"display-4 text-center"},c.a.createElement("i",{className:"fas fa-music"})," Search For A Song"),c.a.createElement("p",{className:"lead text-center"},"Get the lyrics for any song"),c.a.createElement("form",{onSubmit:e.findTrack.bind(e,a)},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Song Title....",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mb-5",type:"submit"},"Get Track Lyrics")))})}}]),t}(n.Component),x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null),c.a.createElement(O,null))},T=a(58),S=a(60),C=a(59),A=(a(54),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=a9b4676ddff9c534ddf33d071f2a7c46")).then(function(t){return console.log(t.data),e.setState({lyrics:t.data.message.body.lyrics}),b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=a9b4676ddff9c534ddf33d071f2a7c46"))}).then(function(t){return e.setState({track:t.data.message.body.track})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?c.a.createElement(N,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{to:"/",className:"btn btn-sm btn-dark mb-4"},"Go Back"),c.a.createElement("div",{className:"card"},c.a.createElement("h5",{className:"card-header"},t.track_name," by "," "," ",c.a.createElement("span",{className:"text-secondary"},t.artist_name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},a.lyrics_body))),c.a.createElement("ul",{className:"list-group mt-3"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Album Id:")," ",t.album_id),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Album Name")," ",t.album_name),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Track Rating:")," ",t.track_rating)))}}]),t}(n.Component)),F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement(T.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement(S.a,null,c.a.createElement(C.a,{exact:!0,path:"/",component:x}),c.a.createElement(C.a,{exact:!0,path:"/lyrics/track/:id",component:A}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.10af6c8f.chunk.js.map