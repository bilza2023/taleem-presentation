import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-gray-800 text-white w-full p-8 text-center min-h-screen" data-svelte-h="svelte-1x1myz7"><h1 class="text-3xl font-bold mb-8 border-b-2 border-white pb-2">Taleem Presentation</h1>
  SlideObject
  <div class="flex gap-1 text-center w-full"><div class="w-6/12 border-2 border-white rounded-lg p-4 m-1 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg text-center"><a href="/editor" class="text-center text-lg text-orange-500 font-semibold pb-2 hover:text-orange-400"><img class="rounded-md" src="./canvas.png" alt="canvas">
          Editor</a></div> <div class="w-6/12 border-2 border-white rounded-lg p-4 m-1 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg text-center "><a href="/player" class="text-center text-lg text-orange-500 font-semibold pb-2 hover:text-orange-400"><img class="rounded-md" src="./canvas2.png" alt="canvas">
          Player</a></div></div> <p class="text-gray-500 mt-8 ">Taleeem Presentation (taleempresentation) is a library for creating simple javascript presentations. The presentation is saved as a &#39;.js&#39; and is in simple json format.</p></div> <hr>  `;
});
export {
  Page as default
};
