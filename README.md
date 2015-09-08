# d3-test

This is a quick test of ClojureScript's new support for auto-loading UMD javascript modules like D3.  

At this time of writing, the latest Clojurescript that supports UMD loading is not on clojars, so you'll need to build it from source.

```bash
$ git clone git@github.com:clojure/clojurescript.git
$ cd clojurescript
$ ./script/build
```

This project uses Boot [https://github.com/boot-clj/boot](https://github.com/boot-clj/boot) to build.

Just do a

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
