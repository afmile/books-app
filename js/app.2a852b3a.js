(function(){"use strict";var e={374:function(e,t,o){var r=o(144),a=o(998),n=o(3059),s=function(){var e=this,t=e._self._c;return t(a.Z,[t("nav-bar"),t(n.Z,[t("router-view")],1)],1)},i=[],l=o(704),c=o(4562),u=o(4324),d=o(5495),f=o(3687),p=function(){var e=this,t=e._self._c;return t(l.Z,{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(d.Z,{staticClass:"imagen",attrs:{src:o(9031)}})],1),t(f.Z),t(c.Z,{attrs:{text:""},on:{click:function(t){return e.$router.push("/book")}}},[t(u.Z,[e._v("mdi-plus-circle")]),t("span",{staticClass:"mr-2"},[e._v("Nuevo Libro")])],1),t(c.Z,{attrs:{color:"info"},on:{click:e.logout}},[e._v("Logout")])],1)},m=[],v=o(65),h={name:"navbar-component",data:function(){return{}},methods:{logout(){const e=(0,v.v0)();(0,v.w7)(e).then((()=>{this.$router.push("/login")})).catch((e=>{console.log(e)}))}}},b=h,k=o(1001),Z=(0,k.Z)(b,p,m,!1,null,"7fc279ca",null),g=Z.exports,y={name:"App",data:()=>({}),computed:{isPrivateRoute(){return!!this.$route.meta.privado}},components:{"nav-bar":g}},_=y,w=(0,k.Z)(_,s,i,!1,null,null,null),x=w.exports,E=o(8345),B=o(9582),C=o(4886),O=o(266),$=o(2118),q=o(9223),R=o(1713),j=function(){var e=this,t=e._self._c;return t($.Z,[t("h1",{staticClass:"text-center"},[e._v("Lista de Libros")]),t(q.Z,{staticClass:"my-3"}),t(R.Z,{attrs:{justify:"center"}},e._l(e.books,(function(o){return t(O.Z,{key:o.id,attrs:{md:"3"}},[t(B.Z,[t(d.Z,{attrs:{height:"220",src:o.image}}),t(q.Z,{staticClass:"mt-2"}),t(C.EB,{staticClass:"text-h6"},[e._v(e._s(o.title))]),t(C.h7,[t(c.Z,{attrs:{block:"",color:"blue"},on:{click:function(t){return e.$router.push(`/book/${o.id}`)}}},[e._v("Ver mas")])],1)],1)],1)})),1)],1)},P=[],T=o(629),L={name:"HomeHome",components:{},computed:{...(0,T.rn)(["books"])},methods:{...(0,T.nv)(["fetchBooks"])},created(){this.fetchBooks()}},S=L,A=(0,k.Z)(S,j,P,!1,null,null,null),F=A.exports,I=o(5125),N=o(516),D=o(7808),J=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text-center"},[e._v("Registrar nuevo libro")]),t(I.Z,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t($.Z,[t(R.Z,[t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,counter:60,label:"Nombre del libro",required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,counter:20,label:"Nombre del autor",required:""},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,label:"Src",required:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(N.Z,{attrs:{items:e.types,label:"Tipo",rules:e.requiredRules},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),t(O.Z,[t(c.Z,{attrs:{color:"blue",rules:e.requiredRules},on:{click:e.createBook}},[e._v("Registrar")]),t(c.Z,{attrs:{color:"red"},on:{click:e.resetForm}},[e._v("Limpiar")])],1)],1)],1)],1)],1)},U=[],K=o(5503),M=o(5321);const z={apiKey:"AIzaSyCcqek1CFXR6nzg1hipD4lLcG1OTtrZfJI",authDomain:"clasebooks.firebaseapp.com",projectId:"clasebooks",storageBucket:"clasebooks.appspot.com",messagingSenderId:"572380825147",appId:"1:572380825147:web:4700c567b5ec3339293e1e"};(0,K.ZF)(z);const H=(0,M.ad)();var X={name:"register-book",data:function(){return{valid:!0,form:{title:"",author:"",type:"",image:""},requiredRules:[e=>!!e||"Este campo es requerido"]}},computed:{...(0,T.rn)(["types"])},methods:{async createBook(){if(this.$refs.form.validate(),this.valid)try{let e=await(0,M.ET)((0,M.hJ)(H,"books"),this.form);console.log(e),this.$router.push("/")}catch(e){console.log(e)}},resetForm(){this.$refs.form.reset()}}},G=X,Q=(0,k.Z)(G,J,U,!1,null,"407ba319",null),V=Q.exports,W=o(9930),Y=o(6319),ee=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text-center"},[e._v("Editar libro "+e._s(e.idBook))]),t(I.Z,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t($.Z,[t(R.Z,[t(O.Z,[t(Y.Z,{attrs:{label:"Editar Libro",color:"info",value:"info","hide-details":""},model:{value:e.allowEdit,callback:function(t){e.allowEdit=t},expression:"allowEdit"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,counter:60,label:"Nombre del libro",required:"",disabled:!e.allowEdit},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,counter:20,label:"Nombre del autor",required:"",disabled:!e.allowEdit},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(D.Z,{attrs:{rules:e.requiredRules,label:"Src",required:"",disabled:!e.allowEdit},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t(O.Z,{attrs:{cols:"12"}},[t(N.Z,{attrs:{items:e.types,label:"Tipo",rules:e.requiredRules,disabled:!e.allowEdit},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),t(O.Z,[t(c.Z,{attrs:{color:"blue",rules:e.requiredRules,disabled:!e.allowEdit},on:{click:e.editBook}},[e._v("Editar ")]),t(c.Z,{attrs:{color:"yellow"},on:{click:e.resetForm}},[e._v("Limpiar")]),t(c.Z,{attrs:{color:"red",dark:""},on:{click:function(t){e.dialog=!0}}},[e._v("Eliminar")])],1)],1)],1)],1),t(W.Z,{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(B.Z,[t(C.EB,{staticClass:"text-h5 grey lighten-2"},[e._v(" Borrar libro? ")]),t(q.Z),t(C.h7,[t(c.Z,{attrs:{color:"red",text:""},on:{click:e.deleteBook}},[e._v("Eliminar")]),t(f.Z),t(c.Z,{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cerrar")])],1)],1)],1)],1)},te=[],oe={name:"book-comp",props:["idBook"],data:function(){return{valid:!0,dialog:!1,form:{title:"",author:"",type:"",image:""},requiredRules:[e=>!!e||"Este campo es requerido"],allowEdit:!1}},computed:{...(0,T.rn)(["types"])},methods:{resetForm(){this.$refs.form.reset()},async fetchBookById(){const e=(0,M.JU)(H,"books",this.idBook);let t=await(0,M.QT)(e);console.log(t.data()),this.form=t.data()},async editBook(){try{let e=this.form;e.id=this.idBook,await(0,M.r7)((0,M.JU)(H,"books",e.id),e),this.$router.push("/")}catch(e){console.log(e)}},async deleteBook(){try{await(0,M.oe)((0,M.JU)(H,"books",this.idBook)),this.$router.push("/")}catch(e){console.log(e)}}},created(){this.fetchBookById()}},re=oe,ae=(0,k.Z)(re,ee,te,!1,null,"519567aa",null),ne=ae.exports,se=function(){var e=this,t=e._self._c;return t($.Z,[t(R.Z,{attrs:{justify:"center"}},[t(O.Z,{attrs:{md:"5"}},[t("h2",[e._v("Login")]),t(I.Z,[t(D.Z,{attrs:{type:"email",label:"Correo"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),t(D.Z,{attrs:{type:"password",label:"Contraseña"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),t(c.Z,{attrs:{block:"",color:"primary"},on:{click:e.login}},[e._v("Ingresar")]),t(c.Z,{attrs:{color:"primary",block:""},on:{click:function(t){return e.$router.push("/create-user")}}},[e._v("Crear nuevo usuario")])],1)],1)],1)],1)},ie=[],le={name:"login-view",data:function(){return{user:"",pass:""}},methods:{login(){const e=(0,v.v0)();(0,v.e5)(e,this.user,this.pass).then((e=>{const t=e.user;console.log(t),this.$router.push("/")})).catch((e=>{const t=e.message;alert(t)}))}}},ce=le,ue=(0,k.Z)(ce,se,ie,!1,null,"4bdf4d1a",null),de=ue.exports,fe=function(){var e=this,t=e._self._c;return t("div",[t($.Z,[t(R.Z,{attrs:{justify:"center"}},[t(O.Z,{attrs:{md:"5"}},[t("h2",[e._v("Crear nuevo usuario")]),t(I.Z,[t(D.Z,{attrs:{type:"email",label:"Correo"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),t(D.Z,{attrs:{type:"password",label:"Contraseña"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),t(c.Z,{attrs:{block:"",color:"primary"},on:{click:e.create}},[e._v("Crear")])],1)],1)],1)],1)],1)},pe=[],me={name:"createUser-view",data:function(){return{}},methods:{create(){const e=(0,v.v0)();(0,v.Xb)(e,this.user,this.pass).then((e=>{const t=e.user;console.log(t),this.$router.push("/")})).catch((e=>{const t=e.message;alert(t)}))}}},ve=me,he=(0,k.Z)(ve,fe,pe,!1,null,"61a1c1aa",null),be=he.exports;r.ZP.use(E.Z);const ke=[{path:"/",name:"home",component:F,meta:{privado:!0}},{path:"/book",name:"Register",component:V,meta:{privado:!0}},{path:"/book/:idBook",name:"Book",component:ne,props:!0,meta:{privado:!0}},{path:"/login",name:"Login",component:de},{path:"/create-user",name:"CreateUser",component:be},{path:"/about",name:"about",meta:{privado:!0},component:()=>o.e(443).then(o.bind(o,1272))}],Ze=new E.Z({mode:"history",base:"/books-app/",routes:ke});Ze.beforeEach(((e,t,o)=>{const r=(0,v.v0)();console.log(r);let a=r.currentUser;console.log(a);let n=e.meta.privado;n&&!a?o("/login"):void 0==n&&a?o("/"):o()}));var ge=Ze;r.ZP.use(T.ZP);var ye=new T.ZP.Store({state:{books:[],types:["ciencia ficcion","fantasia","aventura"]},getters:{},mutations:{ADD_BOOK(e,t){e.books.push({id:t.id,title:t.data().title,author:t.data().author,image:t.data().image,type:t.data().type})},RESET_BOOK(e){e.books=[]}},actions:{async fetchBooks({commit:e}){let t=await(0,M.PL)((0,M.hJ)(H,"books"));e("RESET_BOOK"),t.forEach((t=>{e("ADD_BOOK",t),console.log(t.id,"=>",t.data())}))}},modules:{}}),_e=o(1705);r.ZP.use(_e.Z);var we=new _e.Z({});r.ZP.config.productionTip=!1;const xe=(0,v.v0)();(0,v.Aj)(xe,(()=>{new r.ZP({router:ge,store:ye,vuetify:we,render:e=>e(x)}).$mount("#app")}))},9031:function(e,t,o){e.exports=o.p+"img/Libros.de13f2d7.png"}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,n){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],n=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.6a46fbfe.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="books_app_alvaro:";o.l=function(r,a,n,s){if(e[r])e[r].push(a);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[a];var f=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/books-app/"}(),function(){var e={143:0};o.f.j=function(t,r){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise((function(o,r){a=e[t]=[o,r]}));r.push(a[2]=n);var s=o.p+o.u(t),i=new Error,l=function(r){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,n,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(t&&t(r);c<s.length;c++)n=s[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self["webpackChunkbooks_app_alvaro"]=self["webpackChunkbooks_app_alvaro"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(374)}));r=o.O(r)})();
//# sourceMappingURL=app.2a852b3a.js.map