

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.oSWxOfrZ.js","_app/immutable/chunks/scheduler.Zj5W8Wif.js","_app/immutable/chunks/index.Di1jUxA_.js","_app/immutable/chunks/entry.BykdLXUG.js"];
export const stylesheets = [];
export const fonts = [];
