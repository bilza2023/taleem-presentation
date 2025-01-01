import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/PlayerToolbar.svelte_svelte_type_style_lang.js";
import "katex";
import "howler";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
