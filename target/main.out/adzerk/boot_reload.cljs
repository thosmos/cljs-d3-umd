(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] d3-test.core))
(when-not (client/alive?) (client/connect "ws://localhost:54200" {:on-jsload (fn* [] (d3-test.core/reload))}))