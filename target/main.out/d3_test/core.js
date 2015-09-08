// Compiled by ClojureScript 1.7.132 {}
goog.provide('d3_test.core');
goog.require('cljs.core');
goog.require('module$resources$js$d3');
cljs.core.enable_console_print_BANG_.call(null);
d3_test.core.center = {"margin-left": "auto", "margin-right": "auto", "display": "block"};
d3_test.core.load = (function d3_test$core$load(){
d3_test.core.body = module$resources$js$d3.select.call(null,"body");

d3_test.core.d3box = d3_test.core.body.append("div").attr("id","d3box");

d3_test.core.p = d3_test.core.d3box.append("p").text("Change the color of the circle: ").attr("align","center");

d3_test.core.color_input = d3_test.core.p.append("input").attr({"type": "text", "id": "color"});

d3_test.core.svg = d3_test.core.d3box.append("svg").attr({"width": "300px", "height": "300px"}).style(d3_test.core.center);

d3_test.core.circle = d3_test.core.svg.append("circle").attr({"cx": "50%", "cy": "50%", "r": (120)}).style({"fill": "black"});

d3_test.core.update_color = (function d3_test$core$load_$_update_color(color){
return d3_test.core.circle.transition().delay((250)).duration((500)).style({"fill": color});
});

return d3_test.core.color_input.on("input",(function (){
return d3_test.core.update_color.call(null,document.getElementById("color").value);
}));
});
d3_test.core.init = (function d3_test$core$init(){
console.log("init!!!");

return d3_test.core.load.call(null);
});
d3_test.core.reload = (function d3_test$core$reload(){
console.log("reload!!!!");

module$resources$js$d3.select.call(null,"#d3box").remove();

return d3_test.core.load.call(null);
});

//# sourceMappingURL=core.js.map