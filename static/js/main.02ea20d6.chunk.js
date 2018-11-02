(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a(394)},224:function(e,t,a){},229:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a.n(o),i=(a(224),a(398)),c=a(16),s=a(41),u=a(152),d=a(4),p="[login] logout",m={token:null,loading:!1,loaded:!1,error:null},g={user:{id:"",login:"",password:""},isLogined:!1,isAuthor:!1,loading:!1,loaded:!1,error:null},h={isNameInputValid:!1,isPasswordInputValid:!1,isCommentInputValid:!1,isCategoryInputValid:!1,isTitleInputValid:!1,isBodyInputValid:!1,error:null},f={categories:[],category:null,loading:!1,loaded:!1,error:null},y={posts:[],loading:!1,loaded:!1,error:null},b={post:{id:"",title:"",body:"",author_id:"",author_name:"",category_id:"",category_name:""},loading:!1,loaded:!1,error:null},v={comments:[],loading:!1,error:null},E=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[login] login start":return Object(d.a)({},e,{loading:!0,error:null});case"[login] login success":return Object(d.a)({},e,{token:t.token,loading:!1,loaded:!0,error:null});case"[login] login fail":return Object(d.a)({},e,{loading:!1,error:t.error});case"[auth] auth start":return Object(d.a)({},e,{loading:!0,error:null});case"[auth] auth success":return Object(d.a)({},e,{token:t.token,loading:!1,loaded:!0,error:null});case"[auth] auth fail":return Object(d.a)({},e,{loading:!1,error:t.error});case p:return Object(d.a)({},e,{token:null,loaded:!1});default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[user] get user by token start":return Object(d.a)({},e,{loading:!0,error:null});case"[user] get user by token success":return Object(d.a)({},e,{user:t.user,loading:!1,loaded:!0,error:null});case"[user] get user by token fail":return Object(d.a)({},e,{loading:!1,error:t.error});case"[user] is logined":return Object(d.a)({},e,{isLogined:t.isLogined,error:null});case"[user] set is author":return Object(d.a)({},e,{isAuthor:t.flag});case p:return Object(d.a)({},e,{user:{id:"",login:"",password:""},isLogined:!1,loaded:!1});default:return e}},validation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[validation] is name input valid":return Object(d.a)({},e,{isNameInputValid:t.flag,error:null});case"[validation] is password input valid":return Object(d.a)({},e,{isPasswordInputValid:t.flag,error:null});case"[validation] is comment input valid":return Object(d.a)({},e,{isCommentInputValid:t.flag,error:null});case"[validation] is category input valid":return Object(d.a)({},e,{isCategoryInputValid:t.flag,error:null});case"[validation] is title post input valid":return Object(d.a)({},e,{isTitleInputValid:t.flag,error:null});case"[validation] is body post input valid":return Object(d.a)({},e,{isBodyInputValid:t.flag,error:null});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[category] get all categories start":return Object(d.a)({},e,{loading:!0,error:null});case"[category] get all categories success":return Object(d.a)({},e,{loading:!1,loaded:!0,categories:t.categories});case"[category] get all categories fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[category] get single category by id start":return Object(d.a)({},e,{loading:!0,error:null});case"[category]  single category by id success":return Object(d.a)({},e,{loading:!1,loaded:!0,category:t.category});case"[category] get single category by id fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});default:return e}},allPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[post] get all posts start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] get all posts success":return Object(d.a)({},e,{loading:!1,loaded:!0,posts:t.posts});case"[post] get all posts fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[post] get all posts by author id start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] get all posts by author id success":return Object(d.a)({},e,{loading:!1,loaded:!0,posts:t.posts});case"[post] get all posts by author id fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[post] get all posts by category start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] get all posts by category success":return Object(d.a)({},e,{loading:!1,loaded:!0,posts:t.posts});case"[post] get all posts by category fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});default:return e}},currentPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[post] get post by id start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] get post by id success":return Object(d.a)({},e,{loading:!1,loaded:!0,post:t.post});case"[post] get post by id fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[post] create post start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] create post success":return Object(d.a)({},e,{loading:!1,loaded:!0});case"[post] create post fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[post] update post start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] update post success":return Object(d.a)({},e,{loading:!1,loaded:!0});case"[post] update post fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});case"[post] delete post start":return Object(d.a)({},e,{loading:!0,error:null});case"[post] delete post success":return Object(d.a)({},e,{loading:!1,loaded:!0});case"[post] delete post fail":return Object(d.a)({},e,{loading:!1,loaded:!1,error:t.error});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[comment] get comments by post id start":return Object(d.a)({},e,{loading:!0,error:null});case"[comment] get comments by post id success":return Object(d.a)({},e,{loading:!1,comments:t.comments});case"[comment] get comments by post id fail":return Object(d.a)({},e,{loading:!1,error:t.error});case"[comment] create comment start":return Object(d.a)({},e,{loading:!0,error:null});case"[comment] create comment success":return Object(d.a)({},e,{loading:!1});case"[comment] create comment fail":return Object(d.a)({},e,{loading:!1,error:t.error});default:return e}}}),O=[u.a],C=Object(s.d)(s.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=Object(s.e)(E,{},C),w=a(17),k=a(18),P=a(20),I=a(19),x=a(21),S=a(400),A=a(397),N=a(399),V=a(401),_=(a(229),a(396)),D=a(10),L=a(70),B=a.n(L),F=a(71),T=a.n(F),U=a(154),G=a(25),R=a.n(G),W=a(153),H=a.n(W).a.create({baseURL:"https://incode-blog-internship.herokuapp.com",headers:localStorage.getItem("token")?{Authorization:"Bearer ".concat(localStorage.getItem("token"))}:{}}),M=function(e){return{type:"[user] is logined",isLogined:e}},z=function(){return function(e){localStorage.removeItem("token"),H.defaults.headers.common={},e({type:p}),e(M(!1))}},X=function(){return function(e){e({type:"[user] get user by token start"}),H.get("/user").then(function(t){e({type:"[user] get user by token success",user:t.data}),e(M(!0))}).catch(function(t){e({type:"[user] get user by token fail",error:t})})}},J=function(e){return{type:"[validation] is name input valid",flag:e}},Y=function(e){return{type:"[validation] is password input valid",flag:e}},$=function(){return function(e){e({type:"[category] get all categories start"}),H.get("/category").then(function(t){e({type:"[category] get all categories success",categories:t.data.categories})}).catch(function(t){e({type:"[category] get all categories fail",error:t})})}},q=function(e){return function(t){t({type:"[post] get all posts by author id start"}),H.get("/post/author/".concat(e)).then(function(e){t({type:"[post] get all posts by author id success",posts:e.data.data})}).catch(function(e){t({type:"[post] get all posts by author id fail",error:e})})}},K=function(e,t){return function(a){a({type:"[post] delete post start"}),H.delete("/post/".concat(e)).then(function(e){a((e.data.data,{type:"[post] delete post success"})),a(q(t))}).catch(function(e){a({type:"[post] delete post fail",error:e})})}},Q=function(e){return function(t){t({type:"[post] get post by id start"}),H.get("/post/".concat(e)).then(function(e){t({type:"[post] get post by id success",post:e.data.data})}).catch(function(e){t({type:"[post] get post by id fail",error:e})})}},Z=function(e){return function(t){t({type:"[comment] get comments by post id start"}),H.get("/comment/".concat(e)).then(function(e){t({type:"[comment] get comments by post id success",comments:e.data.comments})}).catch(function(e){t({type:"[comment] get comments by post id fail",error:e})})}},ee=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onHandleLogout=function(){(0,a.props.onLogout)()},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"showNavBar",value:function(){var e=this,t=this.props,a=t.classes,n=t.isAutenticated,o=t.userId;switch(n){case!1:return r.a.createElement("div",null,r.a.createElement(_.a,{className:a.link,to:"/login"},r.a.createElement(R.a,{color:"inherit"},"Login")),r.a.createElement(_.a,{className:a.link,to:"/register"},r.a.createElement(R.a,{color:"inherit"},"Register")));default:return r.a.createElement("div",null,r.a.createElement(_.a,{className:a.link,to:"/main"},r.a.createElement(R.a,{color:"inherit"},"Main")),r.a.createElement(_.a,{className:a.link,to:"/author/".concat(o)},r.a.createElement(R.a,{color:"inherit"},"My Page")),r.a.createElement(R.a,{color:"inherit",onClick:e.onHandleLogout},"Logout"))}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{position:"static"},r.a.createElement(T.a,null,r.a.createElement(U.a,{variant:"h6",color:"inherit",className:e.grow},"Incode Blog"),this.showNavBar())))}}]),t}(r.a.Component),te={onLogout:z},ae=Object(c.b)(function(e){return{isAutenticated:e.currentUser.isLogined,userId:e.currentUser.user.id}},te)(Object(D.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},link:{color:"white",textDecoration:"none"}})(ee)),ne=a(32),re=a.n(ne),oe=a(53),le=a.n(oe),ie=a(39),ce=a.n(ie),se=a(27),ue=a.n(se),de=a(28),pe=a.n(de),me=function(e){var t=e.id,a=e.title,n=e.selected,o=e.onClick;return r.a.createElement(ue.a,{button:!0,id:t,selected:n,onClick:o},r.a.createElement(pe.a,{primary:a}))},ge=a(72),he=a.n(ge);var fe=Object(D.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(he.a,{className:t.progress,color:"primary",size:50}))}),ye=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={selectedIndex:-1},a.handleSelectedCategory=function(e,t){a.setState({selectedIndex:e}),(0,a.props.onGetAllPostsByCategory)(t)},a.handlePreloader=function(e){return e?r.a.createElement(fe,null):r.a.createElement("div",null,"Sometime went wrong :(")},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.onGetAllCategories)()}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.loaded,o=t.categories,l=t.classes,i=this.state.selectedIndex;return n?r.a.createElement("div",{className:l.root},r.a.createElement(ce.a,{component:"nav"},o.map(function(t){return r.a.createElement(me,{key:t.id,id:t.id,title:t.title,description:t.description,selected:i===t.id,onClick:function(){return e.handleSelectedCategory(t.id,t.title)}})}))):this.handlePreloader(a)}}]),t}(r.a.Component),be={onGetAllCategories:$,onGetAllPostsByCategory:function(e){return function(t){t({type:"[post] get all posts by category start"}),H.get("/post/category/".concat(e)).then(function(e){t({type:"[post] get all posts by category success",posts:e.data.posts})}).catch(function(e){t({type:"[post] get all posts by category fail",error:e})})}}},ve=Object(D.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})(Object(c.b)(function(e){return{loading:e.categories.loading,loaded:e.categories.loaded,categories:e.categories.categories}},be)(ye)),Ee=a(36),Oe=a.n(Ee),Ce=a(51),je=a.n(Ce),we=a(44),ke=a.n(we),Pe=a(33),Ie=a.n(Pe),xe=a(26),Se=a.n(xe),Ae=a(40),Ne=a.n(Ae),Ve=a(73),_e=a.n(Ve),De=a(74),Le=a.n(De),Be=a(75),Fe=a.n(Be),Te=a(80),Ue=a.n(Te),Ge=a(79),Re=a.n(Ge),We=a(81),He=a.n(We),Me=Object(D.withStyles)(function(){return{card:{maxWidth:400},actions:{display:"flex"},avatar:{}}})(function(e){var t=e.classes,a=e.handleCurrentPost,n=e.handleAuthorPosts,o=e.handleColor,l=e.authorAvatar,i=e.authorColor,c=e.authorName,s=e.categoryName,u=e.body;return r.a.createElement(Oe.a,{className:t.card},r.a.createElement(je.a,{avatar:r.a.createElement(Se.a,null,r.a.createElement(Ie.a,{"aria-label":"Avatar",className:t.avatar,onClick:n,style:{backgroundColor:i}},l)),action:r.a.createElement(Se.a,null,r.a.createElement(Re.a,{onClick:a})),title:c,subheader:s}),r.a.createElement(ke.a,null,r.a.createElement(_e.a,null,r.a.createElement(Le.a,{expandIcon:r.a.createElement(Ue.a,null)}),r.a.createElement(Fe.a,null,r.a.createElement(ue.a,null,r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,{style:{backgroundColor:o()}},r.a.createElement(He.a,null))),r.a.createElement(pe.a,{primary:u}))))))}),ze=function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);var n="#";for(a=0;a<3;a++)n+="00".concat((t>>8*a&255).toString(16)).substr(-2);return n},Xe=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={expanded:!1},a.handlePreloader=function(e){return e?r.a.createElement(fe,null):r.a.createElement(ce.a,{component:"nav"},r.a.createElement(ue.a,null,r.a.createElement(pe.a,{primary:"No post here  :("})))},a.handleColor=function(e){return ze(e)},a.handleAuthorAvatar=function(e){return"".concat(e.charAt(0)).concat(e.charAt(e.length-1)).toUpperCase()},a.handleCurrentPost=function(e){a.props.history.push("/post/".concat(e))},a.handleAuthorPosts=function(e){a.props.history.push("/author/".concat(e))},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleColor=function(e){return ze(e)},a.handleDeletePost=function(e,t){(0,a.props.onDeletePosts)(e,t)},a.handleUpdatePost=function(e){a.props.history.push("/post/update/".concat(e))},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.onGetAllPosts)()}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.loaded,o=t.posts,l=t.classes,i=this.state.expanded;return n&&0!==o.length?r.a.createElement("div",{className:l.root},r.a.createElement(ce.a,{component:"nav"},o.map(function(t){return r.a.createElement(Me,{key:t.id,id:t.id,title:t.title,body:t.body,authorColor:e.handleColor(t.author_name||"Anonymous"),authorAvatar:e.handleAuthorAvatar(t.author_name||"Anonymous"),authorId:t.author_id,authorName:t.author_name,categoryId:t.category_id,categoryName:t.category_name,handleCurrentPost:function(){return e.handleCurrentPost(t.id)},handleAuthorPosts:function(){return e.handleAuthorPosts(t.author_id)},handleExpandClick:function(){return e.handleExpandClick()},handleColor:function(){return e.handleColor(t.body)},handleDeletePost:function(){return e.handleDeletePost(t.id,t.author_id)},handleUpdatePost:function(){return e.handleUpdatePost(t.id)},expanded:i})}))):this.handlePreloader(a)}}]),t}(r.a.Component),Je={onGetAllPosts:function(){return function(e){e({type:"[post] get all posts start"}),H.get("/post").then(function(t){e({type:"[post] get all posts success",posts:t.data.data})}).catch(function(t){e({type:"[post] get all posts fail",error:t})})}},onGetPostById:Q,onDeletePosts:K,onUpdatePosts:function(e,t,a,n,r,o,l){return function(i){var c={title:t,body:a,author_id:n,author_name:r,category_id:o,category_name:l};i({type:"[post] update post start"}),H.put("/post/".concat(e),c).then(function(e){i((e.data.data,{type:"[post] update post success"})),i(q(n))}).catch(function(e){i({type:"[post] update post fail",error:e})})}}},Ye=Object(D.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:4*e.spacing.unit}}})(Object(V.a)(Object(c.b)(function(e){return{loading:e.allPosts.loading,loaded:e.allPosts.loaded,posts:e.allPosts.posts}},Je)(Xe)));var $e=Object(D.withStyles)(function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:"".concat(3*e.spacing.unit,"px")},paper:{padding:e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(le.a,{container:!0,spacing:24},r.a.createElement(le.a,{item:!0,xs:4},r.a.createElement(re.a,{className:t.paper},r.a.createElement(ve,null))),r.a.createElement(le.a,{item:!0,xs:8},r.a.createElement(Ye,null))))}),qe=a(29),Ke=a.n(qe),Qe=function(e){var t=!0;return t=""!==e.trim()&&t,t=e.length>=3&&t,t=e.length<=16&&t},Ze=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",password:"",touchedName:!1,touchedPassword:!1},a.handleChangeName=function(e){(0,a.props.onSetNameInputValid)(Qe(e.target.value)),a.setState({touchedName:!0,name:e.target.value})},a.handleChangePassword=function(e){(0,a.props.onSetPasswordInputValid)(Qe(e.target.value)),a.setState({touchedPassword:!0,password:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.props.handleLogin,n=a.state;t(n.name,n.password)},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.nameFieldValid,a=e.passwordFieldValid,n=this.state,o=n.name,l=n.touchedName,i=n.touchedPassword,c=this.props.classes;return r.a.createElement("form",{className:c.container,noValidate:!0,autoComplete:"off",onSubmit:this.submitHandler},r.a.createElement(Ke.a,{id:"outlined-name-input",label:"Name",className:c.textField,name:"name",value:o,onChange:this.handleChangeName,autoComplete:"on",margin:"normal",variant:"outlined",error:!t&&l}),r.a.createElement(Ke.a,{id:"outlined-password-input",label:"Password",className:c.textField,type:"password",onChange:this.handleChangePassword,autoComplete:"on",margin:"normal",variant:"outlined",error:!a&&i}),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"secondary",className:c.button,disabled:!(t&&a)},"Login"))}}]),t}(n.Component),et={handleLogin:function(e,t){return function(a){a({type:"[login] login start"});var n={login:e,password:t};H.post("/login",n).then(function(e){localStorage.setItem("token",e.data.token),H.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("token")),a({type:"[login] login success",token:e.data.token}),a(X())}).catch(function(e){a({type:"[login] login fail",error:e})})}},onSetNameInputValid:J,onSetPasswordInputValid:Y},tt=Object(c.b)(function(e){return{isLogined:e.auth.isLogined,nameFieldValid:e.validation.isNameInputValid,passwordFieldValid:e.validation.isPasswordInputValid}},et)(Object(D.withStyles)(function(e){return{typography:{useNextVariants:!0},container:{display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"auto",width:300},textField:{marginLeft:e.spacing.auto,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(Ze)),at=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",password:"",touchedName:!1,touchedPassword:!1},a.handleChangeName=function(e){(0,a.props.onSetNameInputValid)(Qe(e.target.value)),a.setState({touchedName:!0,name:e.target.value})},a.handleChangePassword=function(e){(0,a.props.onSetPasswordInputValid)(Qe(e.target.value)),a.setState({touchedPassword:!0,password:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.props.tryRegistration,n=a.state;t(n.name,n.password)},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.nameFieldValid,n=e.passwordFieldValid,o=this.state,l=o.name,i=o.touchedName,c=o.touchedPassword;return r.a.createElement("div",null,r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off",onSubmit:this.submitHandler},r.a.createElement(Ke.a,{id:"outlined-name",label:"Name",className:t.textField,value:l,onChange:this.handleChangeName,margin:"normal",variant:"outlined",error:!a&&i}),r.a.createElement(Ke.a,{id:"outlined-password-input",label:"Password",className:t.textField,type:"password",onChange:this.handleChangePassword,autoComplete:"current-password",margin:"normal",variant:"outlined",error:!n&&c}),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"secondary",className:t.button,disabled:!(a&&n)},"auth")))}}]),t}(n.Component),nt={tryRegistration:function(e,t){return function(a){a({type:"[auth] auth start"});var n={login:e,password:t};H.post("/auth",n).then(function(e){localStorage.setItem("token",e.data.token),H.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("token")),a({type:"[auth] auth success",token:e.data.token}),a(X())}).catch(function(e){a({type:"[auth] auth fail",error:e})})}},onSetNameInputValid:J,onSetPasswordInputValid:Y},rt=Object(c.b)(function(e){return{nameFieldValid:e.validation.isNameInputValid,passwordFieldValid:e.validation.isPasswordInputValid}},nt)(Object(D.withStyles)(function(e){return{typography:{useNextVariants:!0},container:{display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"auto",width:300},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200},button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},iconSmall:{fontSize:20}}})(at)),ot=a(45),lt=a(35),it=a.n(lt),ct=a(52),st=a.n(ct),ut=a(85),dt=a.n(ut),pt=a(155),mt=a.n(pt),gt=a(76),ht=a.n(gt),ft=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={category:"",categoryId:void 0,title:"",body:"",touchedCategory:!1,touchedTitle:!1,touchedBody:!1},a.handleChangeCategory=function(e){(0,a.props.onSetCategoryInputValid)(Qe(e.target.value)),a.setState({touchedCategory:!0,category:e.target.value})},a.handleChangeTitle=function(e){(0,a.props.onSetTitleInputValid)(Qe(e.target.value)),a.setState({touchedTitle:!0,title:e.target.value})},a.handleChangeBody=function(e){(0,a.props.onSetBodyInputValid)(Qe(e.target.value)),a.setState({touchedBody:!0,body:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.props,n=t.onCreatePosts,r=t.user,o=a.state,l=o.title,i=o.body,c=o.categoryId,s=o.category;n(l,i,r.id,r.login,c,s),a.setState({category:"",categoryId:void 0,title:"",body:"",touchedCategory:!1,touchedTitle:!1,touchedBody:!1})},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.onGetAllCategories)()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.categories,n=e.categoryInputValid,o=e.titleInputValid,l=e.bodyInputValid,i=this.state,c=i.category,s=i.title,u=i.body,d=i.touchedCategory,p=i.touchedTitle,m=i.touchedBody;return r.a.createElement("div",null,r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement(Ke.a,{id:"title",label:"Title",value:s,placeholder:"Title",className:t.textField,margin:"normal",variant:"filled",onChange:this.handleChangeTitle,error:!o&&p}),r.a.createElement(Ke.a,{id:"filled-select-category",select:!0,label:"Select category",className:t.textField,value:c,onChange:this.handleChangeCategory,error:!n&&d,SelectProps:{MenuProps:{className:t.menu}},helperText:"Please select category",margin:"normal",variant:"filled"},a.map(function(e){return r.a.createElement(ht.a,{key:e.id,value:e.title},e.title)})),r.a.createElement(Ke.a,{id:"body",label:"Write Post",multiline:!0,rows:"4",value:u,placeholder:"Write Post",className:t.textField,margin:"normal",variant:"filled",onChange:this.handleChangeBody,error:!l&&m})),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"secondary",className:t.button,onClick:this.submitHandler,disabled:!(n&&o&&l)},"Create Post"))}}]),t}(r.a.Component),yt={onGetAllCategories:$,onGetSingleCategoryById:function(e){return function(t){t({type:"[category] get single category by id start"}),H.get("category/".concat(e)).then(function(e){console.log(e.data),t({type:"[category]  single category by id success",category:e.data.category})}).catch(function(e){t({type:"[category] get single category by id fail",error:e})})}},onSetCategoryInputValid:function(e){return{type:"[validation] is category input valid",flag:e}},onSetTitleInputValid:function(e){return{type:"[validation] is title post input valid",flag:e}},onSetBodyInputValid:function(e){return{type:"[validation] is body post input valid",flag:e}},onCreatePosts:function(e,t,a,n,r,o){return function(l){var i={title:e,body:t,author_id:a,author_name:n,category_id:r,category_name:o};l({type:"[post] create post start"}),H.post("/post",i).then(function(e){l((e.data,{type:"[post] create post success"})),l(q(a))}).catch(function(e){l({type:"[post] create post fail",error:e})})}}},bt=Object(D.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(Object(c.b)(function(e){return{categories:e.categories.categories,categoryInputValid:e.validation.isCategoryInputValid,titleInputValid:e.validation.isTitleInputValid,bodyInputValid:e.validation.isBodyInputValid,categoryId:e.categories.categories,user:e.currentUser.user}},yt)(ft)),vt=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleColor=function(e){return ze(e)},a.handleAuthorAvatar=function(e){return"".concat(e.charAt(0)).concat(e.charAt(e.length-1)).toUpperCase()},a.handleDeletePost=function(e,t){(0,a.props.onDeletePosts)(e,t)},a.handleUpdatePost=function(){console.log("Coming soon")},a.handleCurrentPost=function(e){a.props.history.push("/post/".concat(e))},a.handlePostLength=function(e){return e.length>70?"".concat(e.substring(0,67),"..."):e},a.handlePreloader=function(e){return e?r.a.createElement(fe,null):r.a.createElement("div",null,"Sometime went wrong :(")},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.onGetAllPostsByAuthorId,n=e.onSetIsAuthor,r=e.currentUserId;a(t.params.id),n(r===t.params.id)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,o=t.userPosts,l=t.currentUserId,i=t.isAuthor;return r.a.createElement(Oe.a,{className:a.card},i?r.a.createElement(bt,null):null,0!==o.length?o.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(re.a,{className:a.paper},r.a.createElement(ue.a,null,r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,{style:{backgroundColor:e.handleColor(t.title)}},r.a.createElement(He.a,null))),r.a.createElement(pe.a,{primary:t.title}),r.a.createElement(st.a,null,r.a.createElement(Se.a,{"aria-label":"Forward",onClick:function(){return e.handleCurrentPost(t.id)}},r.a.createElement(Re.a,null)))),r.a.createElement(ue.a,null,r.a.createElement(pe.a,{primary:e.handlePostLength(t.body)})),r.a.createElement(ue.a,null,r.a.createElement(pe.a,{primary:t.category_name}),i?r.a.createElement(n.Fragment,null,r.a.createElement(Se.a,{"aria-label":"Edit",onClick:function(){return e.handleUpdatePost(t.id)}},r.a.createElement(mt.a,null)),r.a.createElement(Se.a,{"aria-label":"Delete",onClick:function(){return e.handleDeletePost(t.id,l)}},r.a.createElement(dt.a,null))):null)))}):r.a.createElement(Oe.a,null,r.a.createElement(it.a,null,"No any post here :(")))}}]),t}(r.a.Component),Et={onGetAllPostsByAuthorId:q,onDeletePosts:K,onSetIsAuthor:function(e){return{type:"[user] set is author",flag:e}}},Ot=Object(D.withStyles)(function(e){return{card:{display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"auto",maxWidth:400},actions:{display:"flex"},expand:Object(ot.a)({transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},e.breakpoints.up("sm"),{marginRight:-8}),expandOpen:{transform:"rotate(180deg)"},avatar:{}}})(Object(c.b)(function(e){return{currentUserId:e.currentUser.user.id,userPosts:e.allPosts.posts,isAuthor:e.currentUser.isAuthor}},Et)(vt)),Ct=a(6),jt=a.n(Ct),wt=a(77),kt=a.n(wt),Pt=a(59),It=a.n(Pt),xt=a(115),St=a.n(xt),At=a(156),Nt=a.n(At),Vt=a(157),_t=a.n(Vt),Dt=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={comment:"",touchedComment:!1},a.handleChangeComment=function(e){(0,a.props.onSetCommentInputValid)(Qe(e.target.value)),a.setState({touchedComment:!0,comment:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.props,n=t.onCreateComment,r=t.postId,o=t.authorId,l=t.authorName;n(a.state.comment,o,l,r),a.setState({comment:"",touchedComment:!1})},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.commentFieldValid,n=this.state,o=n.comment,l=n.touchedComment;return r.a.createElement("div",null,r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement(Ke.a,{id:"outlined-multiline-static",label:"Leave comment",multiline:!0,rows:"4",placeholder:"Your comment",value:o,className:t.textField,margin:"normal",variant:"outlined",onChange:this.handleChangeComment,error:!a&&l})),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"secondary",className:t.button,disabled:!a,onClick:this.submitHandler},"Send"))}}]),t}(r.a.Component),Lt={onSetCommentInputValid:function(e){return{type:"[validation] is comment input valid",flag:e}},onCreateComment:function(e,t,a,n){return function(r){r({type:"[comment] create comment start"});var o={body:e,author_id:t,author_name:a,post_id:n};H.post("/comment/".concat(n),o).then(function(){r({type:"[comment] create comment success"}),r(Z(n))}).catch(function(e){r({type:"[comment] create comment fail",error:e})})}}},Bt=Object(D.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(Object(c.b)(function(e){return{commentFieldValid:e.validation.isCommentInputValid,postId:e.currentPost.post.id,authorId:e.currentUser.user.id,authorName:e.currentUser.user.login}},Lt)(Dt)),Ft=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(P.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleDeleteComment=function(e){var t=a.props,n=t.match;(0,t.onDeleteComment)(n.params.id,e)},a.handleColor=function(e){return ze(e)},a.handleAuthorAvatar=function(e){return"".concat(e.charAt(0)).concat(e.charAt(e.length-1)).toUpperCase()},a.handlePreloader=function(e){return e?r.a.createElement(fe,null):r.a.createElement("div",null,"Sometime went wrong :(")},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.onGetPostById,n=e.onGetCommentsByPostId,r=t.params.id;a(r),n(r)}},{key:"render",value:function(){var e=this,t=this.props,a=t.loaded,n=t.loading,o=t.classes,l=t.post,i=t.comments,c=this.state.expanded;return a?r.a.createElement(Oe.a,{className:o.card},r.a.createElement(je.a,{avatar:r.a.createElement(Ie.a,{"aria-label":"Recipe",style:{backgroundColor:this.handleColor(l.author_name)}},this.handleAuthorAvatar(l.author_name)),title:l.author_name,subheader:l.title}),r.a.createElement(ke.a,null,r.a.createElement(it.a,{component:"p"},l.body),r.a.createElement(it.a,{component:"p"},l.category_name)),r.a.createElement(kt.a,{className:o.actions,disableActionSpacing:!0},r.a.createElement(Se.a,{"aria-label":"Add to favorites"},r.a.createElement(Nt.a,null)),r.a.createElement(Se.a,{"aria-label":"Share"},r.a.createElement(_t.a,null)),r.a.createElement(Se.a,{className:jt()(o.expand,Object(ot.a)({},o.expandOpen,c)),onClick:this.handleExpandClick,"aria-expanded":c,"aria-label":"Show more"},r.a.createElement(Ue.a,null))),r.a.createElement(It.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(Bt,null),r.a.createElement(ke.a,null,i.map(function(t){return r.a.createElement(ue.a,{key:t.id},r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,{style:{backgroundColor:e.handleColor(t.author_name||"Anonymous")}},e.handleAuthorAvatar(t.author_name||"Anonymous"))),r.a.createElement(pe.a,{primary:t.author_name}),r.a.createElement(pe.a,{primary:t.body}),r.a.createElement(st.a,null,r.a.createElement(Se.a,{"aria-label":"Delete"},r.a.createElement(dt.a,{onClick:function(){return e.handleDeleteComment(t.id)}}))))})))):this.handlePreloader(n)}}]),t}(r.a.Component),Tt={onGetPostById:Q,onDeleteComment:function(e,t){return function(a){a({type:"[comment] delete comment start"}),H.delete("/comment/".concat(t)).then(function(){a({type:"[comment] delete comment success"}),a(Z(e))}).catch(function(e){a({type:"[comment] delete comment fail",error:e})})}},onGetCommentsByPostId:Z},Ut=Object(D.withStyles)(function(e){return{card:{display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"auto",maxWidth:400},actions:{display:"flex"},expand:Object(ot.a)({transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},e.breakpoints.up("sm"),{marginRight:-8}),expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:St.a[500]}}})(Object(c.b)(function(e){return{loading:e.currentPost.loading,loaded:e.currentPost.loaded,post:e.currentPost.post,comments:e.comments.comments}},Tt)(Ft)),Gt=function(e){function t(){return Object(w.a)(this,t),Object(P.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.onTryAutoSignup)()}},{key:"render",value:function(){var e=this.props.isAutenticated,t=r.a.createElement(S.a,null,r.a.createElement(A.a,{path:"/login",component:tt}),r.a.createElement(A.a,{path:"/register",component:rt}),r.a.createElement(N.a,{to:"/login"}));return e&&(t=r.a.createElement(S.a,null,r.a.createElement(A.a,{exact:!0,path:"/main",component:$e}),r.a.createElement(A.a,{exact:!0,path:"/author/:id",component:Ot}),r.a.createElement(A.a,{exact:!0,path:"/post/:id",component:Ut}),r.a.createElement(N.a,{to:"/main"}))),r.a.createElement(n.Fragment,null,r.a.createElement(ae,null),t)}}]),t}(n.Component),Rt={onTryAutoSignup:function(){return function(e){e(localStorage.getItem("token")?X():z())}}},Wt=Object(V.a)(Object(c.b)(function(e){return{isAutenticated:e.currentUser.isLogined}},Rt)(Gt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ht=r.a.createElement(c.a,{store:j},r.a.createElement(i.a,{basename:"/codeme-app"},r.a.createElement(Wt,null)));l.a.render(Ht,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[219,2,1]]]);
//# sourceMappingURL=main.02ea20d6.chunk.js.map