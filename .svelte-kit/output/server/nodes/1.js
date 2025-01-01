

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CF-Ooz8v.js","_app/immutable/chunks/scheduler.9Q9YTp9e.js","_app/immutable/chunks/index.C1dxgIUi.js","_app/immutable/chunks/entry.BCBYxT0_.js"];
export const stylesheets = [];
export const fonts = [];
