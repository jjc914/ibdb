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
  default: () => NumAlg
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../../chunks/index-084db825.js");
var import_all_svelte_svelte_type_style_lang_8d2c7671 = require("../../../../chunks/all.svelte_svelte_type_style_lang-8d2c7671.js");
var numAlg_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pair.svelte-1lgy7by{flex-direction:column;flex-wrap:wrap;width:20%;margin:1rem;transition:all 0.2s ease-in-out}.pair.svelte-1lgy7by:hover{transition:all 0.2s ease-in-out;width:40%}.ans.svelte-1lgy7by{width:50rem;border-radius:0.4rem;margin:1rem}.back.svelte-1lgy7by{background-color:#272727;display:flex;flex:row;flex-wrap:wrap}.svelte-1lgy7by{font-family:'Roboto', sans-serif;color:white}div.svelte-1lgy7by{background-color:#272727}",
  map: null
};
const NumAlg = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>numAlg</title>`, ""}`, ""}


<div class="${"flex justify-center h-screen items-center back svelte-1lgy7by"}"><div class="${"pair svelte-1lgy7by"}"><img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.n[0], 0)} class="${"ans svelte-1lgy7by"}">
      <img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.e[0], 0)} class="${"ans svelte-1lgy7by"}"></div>

    <br class="${"svelte-1lgy7by"}"></div>`;
});
