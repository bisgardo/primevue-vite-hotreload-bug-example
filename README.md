# PrimeVue/Vite Bug Example

Minimal example of some bug that causes an error during rendering right after a hot-reload triggered by editing a file.

# Reproduce

1. Run the app using vite: `npm run dev`
2. Make any edit to [`service.js`](./src/service.js).

Then observe warning and error being dumped in the Browser's console:

```
[Vue warn]: Unhandled error during execution of scheduler flush 
  at <Outer> 
  at <App> runtime-core.esm-bundler.js:51:12
Uncaught (in promise) TypeError: node is null
    nextSibling runtime-dom.esm-bundler.js:52
    removeFragment runtime-core.esm-bundler.js:5954
    remove2 runtime-core.esm-bundler.js:5925
    unmount runtime-core.esm-bundler.js:5903
    remove runtime-core.esm-bundler.js:992
    unmount runtime-core.esm-bundler.js:5878
    unmountComponent runtime-core.esm-bundler.js:5988
    unmount runtime-core.esm-bundler.js:5868
    unmountChildren runtime-core.esm-bundler.js:6008
    unmount runtime-core.esm-bundler.js:5892
    unmountComponent runtime-core.esm-bundler.js:5988
    unmount runtime-core.esm-bundler.js:5868
    unmountComponent runtime-core.esm-bundler.js:5988
    unmount runtime-core.esm-bundler.js:5868
    patch runtime-core.esm-bundler.js:4678
    componentUpdateFn runtime-core.esm-bundler.js:5433
    run reactivity.esm-bundler.js:227
    reload runtime-core.esm-bundler.js:529
    callWithErrorHandling runtime-core.esm-bundler.js:199
    flushJobs runtime-core.esm-bundler.js:408
    promise callback*queueFlush runtime-core.esm-bundler.js:322
    queueJob runtime-core.esm-bundler.js:317
    reload runtime-core.esm-bundler.js:527
    tryWrap runtime-core.esm-bundler.js:561
    <anonymous> Outer.vue:34
    accept client:34
    fetchUpdate client:213
    queueUpdate client:186
    queueUpdate client:186
    handleMessage client:930
    handleMessage client:928
    createHMRHandler client:490
    dequeue client:516
    enqueue client:504
    enqueue client:498
    createHMRHandler client:490
    onMessage client:309
    connect client:439
    connect client:438
    connect client:811
    connect client:290
    connect client:383
    <anonymous> client:908
```
