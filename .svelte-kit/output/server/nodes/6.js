

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/eqEditor/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DgG7bP9P.js","_app/immutable/chunks/scheduler.Dc8tTJBu.js","_app/immutable/chunks/index.CUkUO2Ml.js","_app/immutable/chunks/slideObject.CxZRYBWd.js","_app/immutable/chunks/entry.T0cHvrkw.js","_app/immutable/chunks/OpenFileButton.DpYLMTcY.js","_app/immutable/chunks/SaveFileButton.C-aOrtSI.js"];
export const stylesheets = ["_app/immutable/assets/slideObject.BIRMvm46.css"];
export const fonts = [];
