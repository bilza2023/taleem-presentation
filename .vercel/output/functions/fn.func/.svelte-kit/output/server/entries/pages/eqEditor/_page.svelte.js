import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/slideObject.js";
import "howler";
import "../../../chunks/client.js";
import "katex";
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
