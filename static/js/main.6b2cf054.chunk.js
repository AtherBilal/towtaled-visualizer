(this["webpackJsonpreact-temp"]=this["webpackJsonpreact-temp"]||[]).push([[0],{1060:function(e,t,n){"use strict";n.r(t);var a=n(102),r=n(657),c=n(0),o=n.n(c),s=n(29),i=n.n(s),u=n(70),l=n.n(u),j=n(269),p=n(138),f=n(652),b=n(653),d=n(659),O=n(658),h=n(113),y=n(11),x=n(73),w=n(69),m=n(126),g=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).onMapInit=function(){var t=Object(p.a)(l.a.mark((function t(n){var a,r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://g499yhptoj.execute-api.us-east-1.amazonaws.com/dev/locations",t.next=3,fetch(a).then((function(e){return e.json()}));case 3:r=t.sent,console.log(r),c=r.map((function(e){return new x.default(Object(j.a)(Object(j.a)({},e),{},{geometry:new w.default(Object(y.fromLonLat)([e.long,e.lat]))}))})),o=new h.VectorLayer({title:"User Locations",source:new m.default({features:c})}),n.addLayer(o),setInterval(function(){var t=Object(p.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a).then((function(e){return e.json()}));case 2:n=t.sent,console.log(n),r=n.map((function(e){return new x.default(Object(j.a)(Object(j.a)({},e),{},{geometry:new w.default(Object(y.fromLonLat)([e.long,e.lat]))}))})),e.state.wipeOnRefresh&&o.getSource().clear(),o.getSource().addFeatures(r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),3e3),window.map=n;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={wipeOnRefresh:!0},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(h.Map,{onMapInit:this.onMapInit,fullScreen:!0,children:[Object(a.jsx)(h.Popup,{}),Object(a.jsxs)(h.LayerPanel,{children:[Object(a.jsx)(h.LayerPanelPage,{tabIcon:"Layer Styler",children:Object(a.jsx)(h.LayerPanelContent,{style:{padding:"0px",fontFamily:"Roboto, Arial, sans-serif"},children:Object(a.jsx)(h.LayerStyler,{})})}),Object(a.jsx)(h.LayerPanelPage,{label:"Draw",children:Object(a.jsx)(h.LayerPanelContent,{style:{padding:"0px",fontFamily:"Roboto, Arial, sans-serif"},children:Object(a.jsx)(h.DrawContainer,{style:{position:"relative",width:"auto"}})})})]}),Object(a.jsx)(h.ContextMenu,{}),Object(a.jsx)(h.Controls,{}),Object(a.jsx)(h.BasemapContainer,{})]})}}]),n}(o.a.Component),L=Object(r.hot)(g);i.a.render(Object(a.jsx)(L,{}),document.getElementById("root"))}},[[1060,1,2]]]);
//# sourceMappingURL=main.6b2cf054.chunk.js.map