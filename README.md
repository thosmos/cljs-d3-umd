# cljs-d3-umd

This is a quick test of ClojureScript's new support for auto-loading UMD javascript modules like D3.  

You can test the result by opening target/index.html in a browser.

At this time of writing, the latest Clojurescript v.1.7.132 that supports UMD loading is not on clojars, so you may need to build it from source, which will also install it in the local maven repo:

```bash
$ git clone git@github.com:clojure/clojurescript.git
$ cd clojurescript
$ ./script/build
```

This project uses Boot [https://github.com/boot-clj/boot](https://github.com/boot-clj/boot) to build and run.

```bash
boot dev
```

And if you'd like a browser repl, open another console and do:

```bash
boot repl -c
(start-repl)
```

Copyright © 2015 Thomas Spellman

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
