(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0e8f5ebc",content,!0,{sourceMap:!1})},238:function(t,e,n){var map={"./blog-using-vue-nuxt-markdown.md":[244,16],"./design-and-code-skeletons-screens.md":[245,17],"./personal-domain.md":[246,18],"./vuex-what-is-when-use-it.md":[247,19]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=238,t.exports=r},240:function(t,e,n){"use strict";var r={props:{post:{type:Object}}},o=(n(241),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"post border border-dark shadow-lg hover:shadow-2xl bg-primary-100 p-4"},[n("NuxtLink",{attrs:{to:"/posts/"+t.post.name}},[n("ImageResponsive",{attrs:{imageURL:"posts/"+t.post.id+"/_thumbnail.jpg",classes:"cardThumbnail",width:"952",height:"509",alt:t.post.cardAlt}}),t._v(" "),n("h3",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.post.description))])],1)],1)}),[],!1,null,null,null);e.a=component.exports},241:function(t,e,n){"use strict";var r=n(237);n.n(r).a},242:function(t,e,n){(e=n(18)(!1)).push([t.i,".cardThumbnail{transition:all .75s ease;opacity:.7}.cardThumbnail[lazy=loaded]{opacity:1}",""]),t.exports=e},243:function(t,e,n){"use strict";e.a=["personal-domain"]},248:function(t,e,n){"use strict";var r={components:{PostCard:n(240).a},props:{posts:{type:Array}}},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section mobile-full mb-10 lg:mb-24"},[this._m(0),this._v(" "),e("ul",{staticClass:"posts mobile-full grid grid-cols-1 lg:grid-cols-2 gap-4"},this._l(this.posts,(function(t){return e("post-card",{key:t.name,attrs:{post:t}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"posts__top flex justify-between flex-start mt-4"},[e("div",[e("h2",{staticClass:"text-mono"},[this._v("Posts so far...")])])])}],!1,null,null,null);e.a=component.exports},284:function(t,e,n){"use strict";n.r(e);n(13),n(8),n(41),n(29);var r=n(6),o=n(248),c=n(243),title="Gerard Bentley - Lost Crumbs",l="Full-Stack Development and Daily Computing Blog.",d={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(238)("./".concat(e,".md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},l=function(t){return d.apply(this,arguments)},t.app,o=c.a,e.abrupt("return",Promise.all(o.map((function(t){return l(t)}))).then((function(t){return{posts:t}})));case 5:case"end":return e.stop()}}),e)})))()},components:{PostsSection:o.a},transition:{name:"slide-fade"},head:function(){return{title:title,meta:[{name:"author",content:"Gerard Bentley"},{name:"description",property:"og:description",content:l,hid:"description"},{property:"og:title",content:title},{property:"og:image",content:this.ogImage},{name:"twitter:description",content:l},{name:"twitter:image",content:this.ogImage}]}},computed:{ogImage:function(){return n(125)}}},m=n(4),component=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-page content relative"},[e("div",{staticClass:"w-full h-16 font-bold text-xl bg-dark text-white"},[this._v("\n    COMING SOON\n  ")]),this._v(" "),e("posts-section",{attrs:{posts:this.posts}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);