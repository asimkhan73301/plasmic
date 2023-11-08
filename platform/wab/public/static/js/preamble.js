if (typeof window !== "undefined") {
  if (window.parent !== window) {
    try {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    } catch (err) {}
  }
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    const renderers = new Map();
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      supportsFiber: true,
      renderers,
      inject: (renderer) => {
        renderers.set(renderers.size + 1, renderer);
      },
      onCommitFiberRoot: function () {},
      onCommitFiberUnmount: function () {},
    };
  }
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion = "1";
  }
}