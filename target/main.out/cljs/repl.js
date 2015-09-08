// Compiled by ClojureScript 1.7.132 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7415_7429 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7416_7430 = null;
var count__7417_7431 = (0);
var i__7418_7432 = (0);
while(true){
if((i__7418_7432 < count__7417_7431)){
var f_7433 = cljs.core._nth.call(null,chunk__7416_7430,i__7418_7432);
cljs.core.println.call(null,"  ",f_7433);

var G__7434 = seq__7415_7429;
var G__7435 = chunk__7416_7430;
var G__7436 = count__7417_7431;
var G__7437 = (i__7418_7432 + (1));
seq__7415_7429 = G__7434;
chunk__7416_7430 = G__7435;
count__7417_7431 = G__7436;
i__7418_7432 = G__7437;
continue;
} else {
var temp__4425__auto___7438 = cljs.core.seq.call(null,seq__7415_7429);
if(temp__4425__auto___7438){
var seq__7415_7439__$1 = temp__4425__auto___7438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7415_7439__$1)){
var c__5862__auto___7440 = cljs.core.chunk_first.call(null,seq__7415_7439__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7415_7439__$1);
var G__7442 = c__5862__auto___7440;
var G__7443 = cljs.core.count.call(null,c__5862__auto___7440);
var G__7444 = (0);
seq__7415_7429 = G__7441;
chunk__7416_7430 = G__7442;
count__7417_7431 = G__7443;
i__7418_7432 = G__7444;
continue;
} else {
var f_7445 = cljs.core.first.call(null,seq__7415_7439__$1);
cljs.core.println.call(null,"  ",f_7445);

var G__7446 = cljs.core.next.call(null,seq__7415_7439__$1);
var G__7447 = null;
var G__7448 = (0);
var G__7449 = (0);
seq__7415_7429 = G__7446;
chunk__7416_7430 = G__7447;
count__7417_7431 = G__7448;
i__7418_7432 = G__7449;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7450 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5059__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5059__auto__)){
return or__5059__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7450);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7450)))?cljs.core.second.call(null,arglists_7450):arglists_7450));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7419 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7420 = null;
var count__7421 = (0);
var i__7422 = (0);
while(true){
if((i__7422 < count__7421)){
var vec__7423 = cljs.core._nth.call(null,chunk__7420,i__7422);
var name = cljs.core.nth.call(null,vec__7423,(0),null);
var map__7424 = cljs.core.nth.call(null,vec__7423,(1),null);
var map__7424__$1 = ((((!((map__7424 == null)))?((((map__7424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7424):map__7424);
var doc = cljs.core.get.call(null,map__7424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7451 = seq__7419;
var G__7452 = chunk__7420;
var G__7453 = count__7421;
var G__7454 = (i__7422 + (1));
seq__7419 = G__7451;
chunk__7420 = G__7452;
count__7421 = G__7453;
i__7422 = G__7454;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7419);
if(temp__4425__auto__){
var seq__7419__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7419__$1)){
var c__5862__auto__ = cljs.core.chunk_first.call(null,seq__7419__$1);
var G__7455 = cljs.core.chunk_rest.call(null,seq__7419__$1);
var G__7456 = c__5862__auto__;
var G__7457 = cljs.core.count.call(null,c__5862__auto__);
var G__7458 = (0);
seq__7419 = G__7455;
chunk__7420 = G__7456;
count__7421 = G__7457;
i__7422 = G__7458;
continue;
} else {
var vec__7426 = cljs.core.first.call(null,seq__7419__$1);
var name = cljs.core.nth.call(null,vec__7426,(0),null);
var map__7427 = cljs.core.nth.call(null,vec__7426,(1),null);
var map__7427__$1 = ((((!((map__7427 == null)))?((((map__7427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7427):map__7427);
var doc = cljs.core.get.call(null,map__7427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7459 = cljs.core.next.call(null,seq__7419__$1);
var G__7460 = null;
var G__7461 = (0);
var G__7462 = (0);
seq__7419 = G__7459;
chunk__7420 = G__7460;
count__7421 = G__7461;
i__7422 = G__7462;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map