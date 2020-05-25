## Using flamebearer

install

```sh
npm i -g flamebearer
```

```sh
# profile your app
node --prof index.js

# generate flamegraph.html from a V8 log and open it in the browser
node --prof-process --preprocess -j isolate*.log | flamebearer
```

```sh
# profile your app typescript
node --prof ./node_modules/.bin/ts-node index.ts

# generate flamegraph.html from a V8 log and open it in the browser
node --prof-process --preprocess -j isolate*.log | flamebearer
```

