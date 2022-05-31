var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Math2
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../../chunks/index-084db825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1779c4t{background-color:#272727}.backpeepee.svelte-1779c4t{background-color:#3d3c3c}p.svelte-1779c4t{display:flex;text-align:center;margin:auto}a.svelte-1779c4t{background-color:#0f92c6;color:#f0f0f0;width:20vw;height:10vw;display:flex;margin:1vw;border-radius:1rem}a.svelte-1779c4t:hover{background-color:#0b6386}",
  map: null
};
const Math2 = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center items-center h-screen back svelte-1779c4t"}"><div class="${"backpeepee w-3/4 p-6 rounded-3xl  svelte-1779c4t"}"><div class="${"m-auto"}"><h1 class="${"text-xl text-white text-center py-2 px-4 rounded-3xl bg-neutral-600"}">Select your topic
      </h1>
      <br>
      <div class="${"w-full m-auto items-center flex text-center justify-center flex-wrap"}"><a href="${"/database/math/numAlg"}" class="${"svelte-1779c4t"}"><p class="${"svelte-1779c4t"}">Numbers and Algorithms</p></a>
        <a href="${"/database/math/functions"}" class="${"svelte-1779c4t"}"><p class="${"svelte-1779c4t"}">Functions</p></a>
        <a href="${"/database/math/geoTrig"}" class="${"svelte-1779c4t"}"><p class="${"svelte-1779c4t"}">Geometry and Trignometry</p></a>
        <a href="${"/database/math/statProp"}" class="${"svelte-1779c4t"}"><p class="${"svelte-1779c4t"}">Statistics and Probability</p></a>
        <a href="${"/database/math/all"}" class="${"svelte-1779c4t"}"><p class="${"svelte-1779c4t"}">All math questions</p></a></div></div></div></div>`;
});
