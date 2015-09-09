// Compiled by ClojureScript 1.7.132 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_6951 = null;
if(cljs.core.truth_((function (){var and__5047__auto__ = repl_conn_6951;
if(cljs.core.truth_(and__5047__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__5047__auto__;
}
})())){
weasel.repl.connect.call(null,null);
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map