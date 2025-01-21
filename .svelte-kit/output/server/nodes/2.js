

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.sbp9Imfr.js","_app/immutable/chunks/scheduler.Zj5W8Wif.js","_app/immutable/chunks/index.Di1jUxA_.js"];
export const stylesheets = [];
export const fonts = [];
