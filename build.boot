(set-env!
  :source-paths   #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[
    [org.clojure/clojure       "1.7.0"]
    [org.clojure/clojurescript "1.7.132"]
    [adzerk/boot-cljs          "0.0-3308-0"      :scope "test"]
  ;    [adzerk/boot-cljs          "1.7.48-3"      :scope "test"]
    [adzerk/boot-cljs-repl     "0.1.10-SNAPSHOT" :scope "test"]
    [adzerk/boot-reload        "0.3.2"           :scope "test"]
    [pandeiro/boot-http        "0.6.3"  :scope "test"]
  ]
)

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
)

(deftask dev []
  (set-env! :source-paths #{"src"})
  (comp (serve :dir "target/")
        (watch)
        (speak)
        (reload :on-jsload 'd3-test.core/reload)
        (cljs-repl)
        (cljs
          :source-map true
          :optimizations :none
          :main "d3-test.core/init"
          :verbose true
          :compiler-options {
              :warnings {:single-segment-namespace false}
          }
          :foreign-libs [{:file "resources/js/d3.js"
                               :provides ["d3"]
                               :module-type :commonjs}]
        )
  )
)

(deftask build []
  (set-env! :source-paths #{"src"})
  (comp (cljs :optimizations :advanced)))
