

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BRgbVf4w.js","_app/immutable/chunks/scheduler.9Q9YTp9e.js","_app/immutable/chunks/index.C1dxgIUi.js"];
export const stylesheets = [];
export const fonts = [];
