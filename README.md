# Vite/Vue Bug Example

Minimal example of some bug that causes an error during rendering right after a hot-reload triggered by editing a file.

# Reproduce

1. Run the app using vite: `npm run dev`
2. Make any edit to [`service.js`](./src/service.js).

Then observe warning and error being dumped in the Browser's console:

```
[Vue warn]: Unhandled error during execution of scheduler flush 
  at <Inner> 
  at <Outer> 
  at <App> runtime-core.esm-bundler.js:51:12
Uncaught (in promise) TypeError: parent is null
    insert runtime-dom.esm-bundler.js:28
    processText runtime-core.esm-bundler.js:4774
    patch runtime-core.esm-bundler.js:4688
    componentUpdateFn runtime-core.esm-bundler.js:5353
    run reactivity.esm-bundler.js:237
    setupRenderEffect runtime-core.esm-bundler.js:5481
    mountComponent runtime-core.esm-bundler.js:5256
    processComponent runtime-core.esm-bundler.js:5209
    patch runtime-core.esm-bundler.js:4727
    componentUpdateFn runtime-core.esm-bundler.js:5433
    run reactivity.esm-bundler.js:227
    reload runtime-core.esm-bundler.js:529
    callWithErrorHandling runtime-core.esm-bundler.js:199
    flushJobs runtime-core.esm-bundler.js:408
    promise callback*queueFlush runtime-core.esm-bundler.js:322
```
