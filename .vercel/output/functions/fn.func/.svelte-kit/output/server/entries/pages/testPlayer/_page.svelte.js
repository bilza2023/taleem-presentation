import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/PlayerToolbar.svelte_svelte_type_style_lang.js";
import "katex";
import "howler";
import "../../../chunks/client.js";
import AjaxBase from "simplerestclient2";
import { w as writable } from "../../../chunks/index.js";
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
function createToast() {
  const { subscribe, update } = writable(new Array());
  const options = {};
  let count = 0;
  function _obj(obj) {
    return obj instanceof Object;
  }
  function _init(target = "default", opts = {}) {
    options[target] = opts;
    return options;
  }
  function push(msg, opts) {
    const param = {
      target: "default",
      ..._obj(msg) ? (
        /** @type {SvelteToastOptions} */
        msg
      ) : { ...opts, msg }
    };
    const conf = options[param.target] || {};
    const entry = {
      ...defaults,
      ...conf,
      ...param,
      theme: { ...conf.theme, ...param.theme },
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    };
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  }
  function pop(id) {
    update((n) => {
      if (!n.length || id === 0) return [];
      if (typeof id === "function") return n.filter((i) => id(i));
      if (_obj(id))
        return n.filter(
          /** @type {SvelteToastOptions[]} i */
          (i) => i.target !== id.target
        );
      const found = id || Math.max(...n.map((i) => i.id));
      return n.filter((i) => i.id !== found);
    });
  }
  function set(id, opts) {
    const param = _obj(id) ? id : { ...opts, id };
    update((n) => {
      const idx = n.findIndex((i) => i.id === param.id);
      if (idx > -1) {
        n[idx] = { ...n[idx], ...param };
      }
      return n;
    });
  }
  return { subscribe, push, pop, set, _init };
}
createToast();
const API_URL = "https://taleem.help/api";
new AjaxBase("tcode", API_URL);
new AjaxBase("user", API_URL);
new AjaxBase("slideTemplate", API_URL);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-full bg-gray-800">${``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
