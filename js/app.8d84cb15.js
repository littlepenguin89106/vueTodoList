(function(t){function e(e){for(var n,i,c=e[0],d=e[1],s=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var d=o[c];0!==r[d]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app"}},[o("v-main",[o("v-container",{staticClass:"d-flex justify-center"},[o("v-card",{attrs:{"min-width":"700","max-width":"750"}},[o("v-btn-toggle",{staticClass:"d-flex justify-center"},t._l(t.selectRoute,(function(e){return o("v-btn",{key:e,attrs:{to:{name:e}}},[t._v(t._s(e))])})),1),o("todoInput"),o("div",t._l(t.todoIndex,(function(t){return o("todoListItem",{key:t,attrs:{index:t}})})),1)],1)],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-text-field",{attrs:{outlined:"",label:"New add",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)}},model:{value:t.todo,callback:function(e){t.todo="string"===typeof e?e.trim():e},expression:"todo"}})],1)},c=[],d={name:"todoInput",data:function(){return{todo:""}},methods:{submitHandler:function(){this.todo&&(this.$store.commit("addTodos",{content:this.todo,complete:!1}),this.todo="")}}},s=d,u=o("2877"),l=o("6544"),f=o.n(l),p=o("8654"),m=Object(u["a"])(s,i,c,!1,null,null,null),v=m.exports;f()(m,{VTextField:p["a"]});var h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[null!=t.edit?o("v-text-field",{attrs:{placeholder:"modify todo",solo:"",autofocus:""},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelHandler(e)}],blur:t.cancelHandler},model:{value:t.edit,callback:function(e){t.edit="string"===typeof e?e.trim():e},expression:"edit"}}):[o("v-card",[o("v-row",{staticClass:"d-flex justify-center",attrs:{align:"center"}},[o("v-checkbox",{model:{value:t.complete,callback:function(e){t.complete=e},expression:"complete"}}),o("div",{staticClass:"col-8 text-truncate",on:{dblclick:t.editHandler}},[t._v(t._s(t.todo.content))]),o("v-btn",{attrs:{icon:""},on:{click:t.destroyHandler}},[o("v-icon",[t._v("mdi-delete")])],1)],1)],1)]],2)},y=[],b=(o("a9e3"),{name:"todoListItem",data:function(){return{edit:null}},props:{index:{type:Number,required:!0}},computed:{todo:function(){return this.$store.state.todos[this.index]},complete:{get:function(){return this.todo.complete},set:function(t){this.$store.commit("updateTodos",{index:this.index,data:{complete:t,content:this.todo.content}})}}},methods:{destroyHandler:function(){confirm("delete ".concat(this.todo.content,"?"))&&this.$store.commit("removeTodos",this.index)},editHandler:function(){this.edit=this.todo.content},submitHandler:function(){this.edit?(this.$store.commit("updateTodos",{index:this.index,data:{complete:this.todo.complete,content:this.edit}}),this.cancelHandler()):this.destroyHandler()},cancelHandler:function(){this.edit=null}}}),x=b,g=o("8336"),k=o("b0af"),_=o("ac7c"),O=o("132d"),w=o("0fd9"),T=Object(u["a"])(x,h,y,!1,null,null,null),j=T.exports;f()(T,{VBtn:g["a"],VCard:k["a"],VCheckbox:_["a"],VIcon:O["a"],VRow:w["a"],VTextField:p["a"]});var H={data:function(){return{selectRoute:["all","complete","active"]}},components:{todoInput:v,todoListItem:j},computed:{todoIndex:function(){return this.$store.getters["todoIndex"]}},mounted:function(){this.$store.dispatch("initTodos")}},I=H,V=o("7496"),C=o("a609"),$=o("a523"),S=o("f6c4"),E=Object(u["a"])(I,r,a,!1,null,null,null),P=E.exports;f()(E,{VApp:V["a"],VBtn:g["a"],VBtnToggle:C["a"],VCard:k["a"],VContainer:$["a"],VMain:S["a"]});o("4de4"),o("d81d"),o("b0c0"),o("a434");var M=o("2f62");n["a"].use(M["a"]);var J={load:function(){return JSON.parse(localStorage.getItem("vue-todos"))||[]},save:function(t){localStorage.setItem("vue-todos",JSON.stringify(t))}},N={all:function(t){return t},complete:function(t){return t.filter((function(t){return t.complete}))},active:function(t){return t.filter((function(t){return!t.complete}))}},B=new M["a"].Store({state:{todos:[]},getters:{todoIndex:function(t){return N[t.route.name](t.todos).map((function(e){return t.todos.indexOf(e)}))}},mutations:{setTodos:function(t,e){t.todos=e,J.save(t.todos)},addTodos:function(t,e){t.todos.push(e),J.save(t.todos)},removeTodos:function(t,e){t.todos.splice(e,1),J.save(t.todos)},updateTodos:function(t,e){var o=e.index,r=e.data;n["a"].set(t.todos,o,r),J.save(t.todos)}},actions:{initTodos:function(t){var e=t.commit;e("setTodos",J.load())}},modules:{}}),L=o("8c4f");n["a"].use(L["a"]);var R=[{path:"/all",name:"all"},{path:"/active",name:"active"},{path:"/complete",name:"complete"},{path:"/*",redirect:"/all"}],F=new L["a"]({routes:R}),q=F,A=o("31bd"),z=o("f309");n["a"].use(z["a"]);var D=new z["a"]({});Object(A["sync"])(B,q),n["a"].config.productionTip=!1,new n["a"]({store:B,router:q,vuetify:D,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.8d84cb15.js.map