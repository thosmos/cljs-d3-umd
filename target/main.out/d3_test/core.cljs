(ns d3-test.core
  (:require [d3 :as d3]))

(enable-console-print!)


(comment
; D3 example is from Maria Geller's blog at http://mneise.github.io/posts/2015-07-08-week-6.html
)

(def center #js {:margin-left "auto"
                 :margin-right "auto"
                 :display "block"})

(defn load[]

  (def body (d3/select "body"))

  (def d3box (-> body (.append "div") (.attr "id" "d3box")))

  (def p (-> d3box
             (.append "p")
             (.text "Change the color of the circle: ")
             (.attr "align" "center")))

  (def color-input (-> p
                       (.append "input")
                       (.attr #js {:type "text"
                                   :id "color"})))

  (def svg (-> d3box
               (.append "svg")
               (.attr #js {:width "300px"
                           :height "300px"})
               (.style center)))

  (def circle (-> svg
                  (.append "circle")
                  (.attr #js {:cx "50%"
                              :cy "50%"
                              :r 120})
                  (.style #js {:fill "black"})))

  (defn update-color [color]
    (-> circle
        .transition
        (.delay 250)
        (.duration 500)
        (.style #js {:fill color})))

  (.on color-input "input" #(-> (.-value (.getElementById js/document "color"))
                                update-color))
)


(defn init []
  (.log js/console "init!!!")
  (load)
)

(defn reload []
  (.log js/console "reload!!!!")
  (-> (d3/select "#d3box") (.remove))
  (load)
)
