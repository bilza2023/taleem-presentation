

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Cl2Heob8.js","_app/immutable/chunks/scheduler.Zj5W8Wif.js","_app/immutable/chunks/index.Di1jUxA_.js"];
export const stylesheets = [];
export const fonts = [];
