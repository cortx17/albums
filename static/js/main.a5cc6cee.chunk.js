(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),c=a.n(s),i=(a(14),a(3)),o=a(4),l=a(6),u=a(5),m=a(7),h=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setSearchWord=function(e){a.setState({searchWord:e.target.value})},a.getInfo=function(){var e="https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=".concat(a.state.searchWord,"&entity=musicArtist&media=music");fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({results:e.results})}).catch(function(e){return console.error(e)})},a.getAlbumInfo=function(e){var t="https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=".concat(e.target.id,"&entity=album");fetch(t).then(function(e){return e.json()}).then(function(e){a.setState({clickedArtistId:e.results.artistId,artistResults:e.results,isSearching:!1,albumArt:e.results.artworkUrl60})})},a.backToSearch=function(){a.setState({isSearching:!0})},a.state={results:[],artistResults:[],searchWord:"",isSearching:!0,clickedArtistId:null,albumArt:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.results.map(function(t){return r.a.createElement("li",{id:t.artistId,onClick:e.getAlbumInfo},t.artistName)}),a=this.state.artistResults.map(function(e){return r.a.createElement("li",{id:e.collectionId},r.a.createElement("figure",{class:"image is-48x48"},r.a.createElement("img",{src:e.artworkUrl60,alt:""})),e.collectionName)});return this.state.isSearching?r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input is-medium is-primary is-rounded",type:"text",onChange:this.setSearchWord,placeholder:"Search artist..."}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("a",{onClick:this.getInfo,className:"button is-primary"},"Search"),r.a.createElement("ul",null,t))):!1===this.state.isSearching?r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("a",{onClick:this.backToSearch,className:"button is-primary"},"Back"),r.a.createElement("ul",null,a))):void 0}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.a5cc6cee.chunk.js.map