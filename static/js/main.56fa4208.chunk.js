(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(4),s=c.n(r),o=(c(11),c(2)),l=c(5),u=c.n(l),d={city:"",country:"",countryCode:"",lat:"",lng:""},j=function(e,t){switch(t.type){case"update":return{city:t.location.city,country:t.location.country,countryCode:t.location.countryCode,lat:t.location.lat,lng:t.location.lng};default:return e}};var h=function(e){var t=e.getLocation,c=Object(a.useReducer)(j,d),i=Object(o.a)(c,2),r=i[0],s=i[1],l=r.city,h=r.country,b=r.countryCode,p=r.lat,y=r.lng;return Object(a.useEffect)((function(){return t(l,h,b,p,y)}),[l,h,b,p,y,r]),Object(n.jsx)(u.a,{placeholder:"Write a city name here",options:{appId:"plCIL43TO1Z4",apiKey:"be563ce995a9d539bed17e7dd31bb4f3",type:"city"},onChange:function(e){e.query,e.rawAnswer;var t=e.suggestion;e.suggestionIndex;s({type:"update",location:{city:t.name,country:t.country,countryCode:t.countryCode,lat:t.latlng.lat,lng:t.latlng.lng}})}})},b={openWeatherMap:"eb7ce88a5d6bebe42b30615977a74e6a",unsplash:"SGxe59ZdA_VwNGj-DWCNVPWg6zesXF5qySgXY9xsn6w"};var p=function(e){var t=e.description,c=Object(a.useState)({}),i=Object(o.a)(c,2),r=i[0],s=i[1],l=Object(a.useState)(Math.floor(19*Math.random())),u=Object(o.a)(l,2),d=u[0],j=u[1],h=encodeURIComponent("".concat(t.weather[0].description));return Object(a.useEffect)((function(){fetch("https://api.unsplash.com/search/photos?query=".concat(h,"&per_page=20&client_id=").concat(b.unsplash)).then((function(e){return e.json()})).then((function(e){s(e),j(Math.floor(19*Math.random()))}))}),[t]),Object(n.jsx)("div",{className:"image",children:0!==Object.keys(r).length&&Object(n.jsx)("img",{src:r.results[d].urls.regular,alt:r.description})})};var y=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thuesday","Friday","Saturday","Sunday"][e]},m=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]},O=function(e){var t=e.city,c=e.country,a=e.display,i=e.units,r=a.weather[0].main,s=a.weather[0].description,o=a.weather[0].icon,l=a.temp,u=a.humidity,d=a.wind_speed,j=new Date(1e3*a.dt),h=a.pop;return Object(n.jsxs)("div",{className:"forecast",children:[Object(n.jsxs)("div",{className:"forecast__heading",children:[Object(n.jsxs)("h2",{children:[t,", ",c]}),Object(n.jsxs)("h3",{children:[y(j.getDay()),", ",m(j.getMonth())," ",j.getDate(),", ",j.getFullYear()]})]}),Object(n.jsxs)("div",{className:"forecast__content",children:[Object(n.jsxs)("div",{className:"forecast__main",children:[Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(o,"@2x.png"),alt:"Icon representing the weather"}),Object(n.jsx)("div",{className:"forecast__temp",children:"number"===typeof l?Object(n.jsxs)("div",{className:"forecast__temp--main",children:[l,"imperial"===i?"\xb0F":"\xb0C"]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"forecast__temp--main",children:[l.day,"imperial"===i?"\xb0F":"\xb0C"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"forecast__temp--min",children:l.min}),Object(n.jsx)("span",{className:"forecast__temp--max",children:l.max})]})]})})]}),Object(n.jsxs)("div",{className:"forecast__description",children:[r," - ",s]}),Object(n.jsxs)("div",{className:"forecast__details",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details",children:"Precipitation:"})," ",(100*h).toFixed(0),"%"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details",children:"Humidity:"})," ",u,"%"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details",children:"Wind:"})," ",d,"imperial"===i?"m/h":"m/s"]})]})]})]})};var f=function(e){return["S","M","T","W","T","F","S"][e]},g=function(e){var t=e.timeProp,c=e.type,i=Object(a.useState)(t),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){l("date"===c?f(s):"".concat(t,":00"))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",children:s})})};var x=function(e){var t=e.setDisplay,c=e.data,a=e.getWeather,i=new Date,r=function(){for(var e=[],t=i.getHours();t%3!==0;)t-=1;for(e.push(t);e.length<8;)24===t&&(t=0),e.push(t+=3);return e}();return Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("ul",{className:"buttons__hours",children:r.map((function(e,i){return Object(n.jsx)("li",{id:"hourly-".concat(3*i),onClick:function(){t(c.hourly[3*i]),a(c.hourly[3*i])},children:Object(n.jsx)(g,{timeProp:e,type:"hour"})},"hourly-".concat(3*i))}))}),Object(n.jsx)("ul",{className:"buttons__days",children:[0,1,2,3,4,5,6,7].map((function(e){return Object(n.jsx)("li",{id:"daily-".concat(e),onClick:function(){t(c.daily[e]),a(c.daily[e])},children:Object(n.jsx)(g,{timeProp:(i.getDay()+e)%7,type:"date"})},"daily-".concat(e))}))})]})};var v=function(e){var t=e.changeUnits,c=Object(a.useState)("imperial"),i=Object(o.a)(c,2),r=i[0],s=i[1];return Object(n.jsxs)("div",{className:"units",children:[Object(n.jsx)("input",{type:"radio",id:"imperial",name:"units",value:"imperial",checked:"imperial"===r}),Object(n.jsx)("label",{onClick:function(){t("imperial"),s("imperial")},children:"\xb0F"})," |",Object(n.jsx)("input",{type:"radio",id:"metric",name:"units",value:"metric",checked:"metric"===r}),Object(n.jsx)("label",{onClick:function(){t("metric"),s("metric")},children:"\xb0C"})]})};var _=function(e){var t=e.city,c=e.country,i=e.countryCode,r=e.lat,s=e.lng,l=e.getWeather,u=Object(a.useState)({}),d=Object(o.a)(u,2),j=d[0],h=d[1],p=Object(a.useState)({}),y=Object(o.a)(p,2),m=y[0],f=y[1],g=Object(a.useState)("imperial"),_=Object(o.a)(g,2),C=_[0],N=_[1];return Object(a.useEffect)((function(){t&&fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(s,"&units=").concat(C,"&appid=").concat(b.openWeatherMap)).then((function(e){return e.json()})).then((function(e){console.log(e),h(e),f(e.hourly[0]),l(e.hourly[0])})).catch((function(e){return console.log(e)}))}),[t,c,i,r,s,C]),0!==Object.keys(j).length&&Object(n.jsxs)("div",{children:[0!==Object.keys(m).length&&Object(n.jsx)(O,{city:t,country:c,display:m,units:C}),Object(n.jsx)(x,{setDisplay:f,getWeather:l,data:j}),Object(n.jsx)(v,{changeUnits:function(e){N(e)}})]})},C=(c(12),{city:"",country:"",countryCode:"",lat:"",lng:""}),N=function(e,t){switch(t.type){case"update":return{city:t.location.city,country:t.location.country,countryCode:t.location.countryCode,lat:t.location.lat,lng:t.location.lng};default:return e}};var w=function(){var e=Object(a.useReducer)(N,C),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)({weather:[{description:"sky"}]}),s=Object(o.a)(r,2),l=s[0],u=s[1],d=c.city,j=c.country,b=c.countryCode,y=c.lat,m=c.lng;return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("main",{className:"main",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("div",{className:"heading",children:"Through the window"}),Object(n.jsx)("h1",{children:"Weather"})]}),Object(n.jsx)(h,{getLocation:function(e,t,c,n,a){i({type:"update",location:{city:e,country:t,countryCode:c,lat:n,lng:a}})}}),Object(n.jsx)(_,{city:d,country:j,countryCode:b,lat:y,lng:m,getWeather:function(e){u(e)}})]}),Object(n.jsx)(p,{description:l})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),S()}},[[13,1,2]]]);
//# sourceMappingURL=main.56fa4208.chunk.js.map