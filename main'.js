"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[492],{4544:(t,n,r)=>{r.d(n,{D:()=>e});var e="test"},8312:(t,n,r)=>{r.r(n),r.d(n,{default:()=>v});var e=r(7294),o=r(7007),u=r(2326),i=r(9609),a=r(4544),c=o.v9,l=r(7481),f=r(5893);function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,u=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(e=r.next()).done)&&(u.push(e.value),!n||u.length!==n);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var S=i.Z.Column;const v=function(){var t=(0,o.I0)(),n=c((function(t){return t.football})),r=n.items,d=n.isLoading,v=s((0,e.useState)(!1),2);v[0],v[1];console.log(r),(0,e.useEffect)((function(){t((0,l.i)({}))}),[]);var y=r.filter((function(t){if(t.SC.ST){var n=t.SC.ST[0].Value.find((function(t){return 70===t.ID})),r=t.SC.TS,e=t.SC.TS<4200;if(n&&r&&e)if(n.S1>=5||n.S2>=5)return t}}));return console.log(y),(0,u.Z)("".concat(a.D," | Главная")),(0,f.jsx)("div",{style:{padding:"30px"},children:(0,f.jsxs)(i.Z,{dataSource:y,loading:d,rowKey:function(t){return t.I},size:"middle",children:[(0,f.jsx)(S,{dataIndex:"L",title:"Турнир"},"L"),(0,f.jsx)(S,{render:function(t){return"".concat(t.O1," -- ").concat(t.O2)},title:"Команды"},"O1"),(0,f.jsx)(S,{render:function(t){var n=t.SC.ST[0].Value.find((function(t){return 70===t.ID}));return"".concat(n.S1,"-").concat(n.S2)},title:"Угловые"},(function(t){return t.SC.ST[0].Value.find((function(t){return 70===t.ID}))})),(0,f.jsx)(S,{render:function(t){var n,r;return"".concat(null!==(n=t.SC.FS.S1)&&void 0!==n?n:0,":").concat(null!==(r=t.SC.FS.S2)&&void 0!==r?r:0)},title:"Счет"},"Счет"),(0,f.jsx)(S,{render:function(t){return"".concat(Math.round(t.SC.TS/60)," мин")},title:"Время"},"Время")]})})}}}]);