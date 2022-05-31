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
  default: () => Topic
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var topic_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1uja27h{background-color:#272727}.backpeepee.svelte-1uja27h{background-color:#3d3c3c}p.svelte-1uja27h{display:flex;text-align:center;margin:auto}a.svelte-1uja27h{background-color:#1f92c6;color:#f0f0f0;width:30vw;height:20vw;display:flex;margin:1vw;border-radius:1rem}a.svelte-1uja27h:hover{background-color:#b3b6b1}",
  map: null
};
const Topic = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center items-center h-screen back svelte-1uja27h"}"><div class="${"backpeepee w-3/4 p-6 h-5/6 rounded-3xl  svelte-1uja27h"}"><div class="${"m-auto"}"><h1 class="${"text-xl text-white text-center py-2 px-4 rounded-3xl bg-neutral-600"}">Select Sub-Topics
      </h1>
      <br>
      <div class="${"w-full m-auto items-center flex text-center justify-center flex-wrap"}"><a href="${""}" class="${"svelte-1uja27h"}"><p class="${"svelte-1uja27h"}">Sub-Topic</p></a>
        <a href="${""}" class="${"svelte-1uja27h"}"><p class="${"svelte-1uja27h"}">Sub-Topic</p></a>
        <a href="${""}" class="${"svelte-1uja27h"}"><p class="${"svelte-1uja27h"}">Sub-Topic</p></a></div></div></div></div>`;
});
