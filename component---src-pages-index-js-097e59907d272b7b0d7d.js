(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var n=a(7),o=a.n(n),i=a(0),s=a.n(i),r=a(165),c=a.n(r);a(146);c.a.accessToken="pk.eyJ1Ijoic2FhZGlxbSIsImEiOiJjamJpMXcxa3AyMG9zMzNyNmdxNDlneGRvIn0.wjlI8r1S_-xxtq2d-W5qPA";var p=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={lng:-114.0708,lat:51.0486,zoom:11},a}o()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this,e=this.state,a=e.lng,n=e.lat,o=e.zoom;this.map=new c.a.Map({container:this.mapContainer,style:"mapbox://styles/saadiqm/cjbjougmt08z72rsa7me1duoi",center:[a,n],zoom:o}),this.map.on("load",function(){var e="https://dax2h6sk92.execute-api.us-east-1.amazonaws.com/dev/";t.map.addSource("Realtime Bus",{type:"geojson",data:e}),t.map.addLayer({id:"Realtime Bus",type:"circle",source:"Realtime Bus",paint:{"circle-color":"#FF0000","circle-radius":7}}),setInterval(function(){t.map.getSource("Realtime Bus").setData(e),console.log("update map")},6e4)})},a.componentDidUpdate=function(){},a.render=function(){var t=this;return s.a.createElement("div",{ref:function(e){return t.mapContainer=e},style:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%"}})},e}(i.Component);e.default=p}}]);
//# sourceMappingURL=component---src-pages-index-js-097e59907d272b7b0d7d.js.map