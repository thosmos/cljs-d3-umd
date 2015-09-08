// Compiled by ClojureScript 1.7.132 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7170_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7170_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7175 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7176 = null;
var count__7177 = (0);
var i__7178 = (0);
while(true){
if((i__7178 < count__7177)){
var s = cljs.core._nth.call(null,chunk__7176,i__7178);
var temp__4425__auto___7179 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7179)){
var sheet_7180 = temp__4425__auto___7179;
var temp__4425__auto___7181__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7180.href,changed);
if(cljs.core.truth_(temp__4425__auto___7181__$1)){
var href_uri_7182 = temp__4425__auto___7181__$1;
sheet_7180.ownerNode.href = href_uri_7182.makeUnique().toString();
} else {
}
} else {
}

var G__7183 = seq__7175;
var G__7184 = chunk__7176;
var G__7185 = count__7177;
var G__7186 = (i__7178 + (1));
seq__7175 = G__7183;
chunk__7176 = G__7184;
count__7177 = G__7185;
i__7178 = G__7186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7175);
if(temp__4425__auto__){
var seq__7175__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7175__$1)){
var c__5862__auto__ = cljs.core.chunk_first.call(null,seq__7175__$1);
var G__7187 = cljs.core.chunk_rest.call(null,seq__7175__$1);
var G__7188 = c__5862__auto__;
var G__7189 = cljs.core.count.call(null,c__5862__auto__);
var G__7190 = (0);
seq__7175 = G__7187;
chunk__7176 = G__7188;
count__7177 = G__7189;
i__7178 = G__7190;
continue;
} else {
var s = cljs.core.first.call(null,seq__7175__$1);
var temp__4425__auto___7191__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7191__$1)){
var sheet_7192 = temp__4425__auto___7191__$1;
var temp__4425__auto___7193__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7192.href,changed);
if(cljs.core.truth_(temp__4425__auto___7193__$2)){
var href_uri_7194 = temp__4425__auto___7193__$2;
sheet_7192.ownerNode.href = href_uri_7194.makeUnique().toString();
} else {
}
} else {
}

var G__7195 = cljs.core.next.call(null,seq__7175__$1);
var G__7196 = null;
var G__7197 = (0);
var G__7198 = (0);
seq__7175 = G__7195;
chunk__7176 = G__7196;
count__7177 = G__7197;
i__7178 = G__7198;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7203 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7204 = null;
var count__7205 = (0);
var i__7206 = (0);
while(true){
if((i__7206 < count__7205)){
var s = cljs.core._nth.call(null,chunk__7204,i__7206);
var temp__4425__auto___7207 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7207)){
var image_7208 = temp__4425__auto___7207;
var temp__4425__auto___7209__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7208.src,changed);
if(cljs.core.truth_(temp__4425__auto___7209__$1)){
var href_uri_7210 = temp__4425__auto___7209__$1;
image_7208.src = href_uri_7210.makeUnique().toString();
} else {
}
} else {
}

var G__7211 = seq__7203;
var G__7212 = chunk__7204;
var G__7213 = count__7205;
var G__7214 = (i__7206 + (1));
seq__7203 = G__7211;
chunk__7204 = G__7212;
count__7205 = G__7213;
i__7206 = G__7214;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7203);
if(temp__4425__auto__){
var seq__7203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203__$1)){
var c__5862__auto__ = cljs.core.chunk_first.call(null,seq__7203__$1);
var G__7215 = cljs.core.chunk_rest.call(null,seq__7203__$1);
var G__7216 = c__5862__auto__;
var G__7217 = cljs.core.count.call(null,c__5862__auto__);
var G__7218 = (0);
seq__7203 = G__7215;
chunk__7204 = G__7216;
count__7205 = G__7217;
i__7206 = G__7218;
continue;
} else {
var s = cljs.core.first.call(null,seq__7203__$1);
var temp__4425__auto___7219__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7219__$1)){
var image_7220 = temp__4425__auto___7219__$1;
var temp__4425__auto___7221__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7220.src,changed);
if(cljs.core.truth_(temp__4425__auto___7221__$2)){
var href_uri_7222 = temp__4425__auto___7221__$2;
image_7220.src = href_uri_7222.makeUnique().toString();
} else {
}
} else {
}

var G__7223 = cljs.core.next.call(null,seq__7203__$1);
var G__7224 = null;
var G__7225 = (0);
var G__7226 = (0);
seq__7203 = G__7223;
chunk__7204 = G__7224;
count__7205 = G__7225;
i__7206 = G__7226;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7229){
var map__7232 = p__7229;
var map__7232__$1 = ((((!((map__7232 == null)))?((((map__7232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7232):map__7232);
var on_jsload = cljs.core.get.call(null,map__7232__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7232,map__7232__$1,on_jsload){
return (function (p1__7227_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7227_SHARP_,".js");
});})(map__7232,map__7232__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7232,map__7232__$1,on_jsload){
return (function (p1__7228_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7228_SHARP_).makeUnique());
});})(js_files,map__7232,map__7232__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7232,map__7232__$1,on_jsload){
return (function() { 
var G__7234__delegate = function (_){
return on_jsload.call(null);
};
var G__7234 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7235__i = 0, G__7235__a = new Array(arguments.length -  0);
while (G__7235__i < G__7235__a.length) {G__7235__a[G__7235__i] = arguments[G__7235__i + 0]; ++G__7235__i;}
  _ = new cljs.core.IndexedSeq(G__7235__a,0);
} 
return G__7234__delegate.call(this,_);};
G__7234.cljs$lang$maxFixedArity = 0;
G__7234.cljs$lang$applyTo = (function (arglist__7236){
var _ = cljs.core.seq(arglist__7236);
return G__7234__delegate(_);
});
G__7234.cljs$core$IFn$_invoke$arity$variadic = G__7234__delegate;
return G__7234;
})()
;})(js_files,map__7232,map__7232__$1,on_jsload))
,((function (js_files,map__7232,map__7232__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7232,map__7232__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7241_7245 = cljs.core.seq.call(null,things_to_log);
var chunk__7242_7246 = null;
var count__7243_7247 = (0);
var i__7244_7248 = (0);
while(true){
if((i__7244_7248 < count__7243_7247)){
var t_7249 = cljs.core._nth.call(null,chunk__7242_7246,i__7244_7248);
console.log(t_7249);

var G__7250 = seq__7241_7245;
var G__7251 = chunk__7242_7246;
var G__7252 = count__7243_7247;
var G__7253 = (i__7244_7248 + (1));
seq__7241_7245 = G__7250;
chunk__7242_7246 = G__7251;
count__7243_7247 = G__7252;
i__7244_7248 = G__7253;
continue;
} else {
var temp__4425__auto___7254 = cljs.core.seq.call(null,seq__7241_7245);
if(temp__4425__auto___7254){
var seq__7241_7255__$1 = temp__4425__auto___7254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7241_7255__$1)){
var c__5862__auto___7256 = cljs.core.chunk_first.call(null,seq__7241_7255__$1);
var G__7257 = cljs.core.chunk_rest.call(null,seq__7241_7255__$1);
var G__7258 = c__5862__auto___7256;
var G__7259 = cljs.core.count.call(null,c__5862__auto___7256);
var G__7260 = (0);
seq__7241_7245 = G__7257;
chunk__7242_7246 = G__7258;
count__7243_7247 = G__7259;
i__7244_7248 = G__7260;
continue;
} else {
var t_7261 = cljs.core.first.call(null,seq__7241_7255__$1);
console.log(t_7261);

var G__7262 = cljs.core.next.call(null,seq__7241_7255__$1);
var G__7263 = null;
var G__7264 = (0);
var G__7265 = (0);
seq__7241_7245 = G__7262;
chunk__7242_7246 = G__7263;
count__7243_7247 = G__7264;
i__7244_7248 = G__7265;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7267 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7267,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7267);

adzerk.boot_reload.reload.reload_css.call(null,G__7267);

adzerk.boot_reload.reload.reload_img.call(null,G__7267);

return G__7267;
});

//# sourceMappingURL=reload.js.map