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
  default: () => GeoTrig
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../../chunks/index-084db825.js");
var import_all_svelte_svelte_type_style_lang_8d2c7671 = require("../../../../chunks/all.svelte_svelte_type_style_lang-8d2c7671.js");
var geoTrig_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-l06jve{background-color:#272727}.pair.svelte-l06jve{flex-direction:column;flex-wrap:wrap;width:20%;margin:1rem;transition:all 0.2s ease-in-out}.pair.svelte-l06jve:hover{transition:all 0.2s ease-in-out;width:40%}.ans.svelte-l06jve{width:50rem;border-radius:0.4rem;margin:1rem}.back.svelte-l06jve{background-color:#272727;display:flex;flex:row;flex-wrap:wrap}.svelte-l06jve{font-family:'Roboto', sans-serif;color:white}",
  map: null
};
const GeoTrig = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>geoTrig</title>`, ""}`, ""}


<div class="${"flex justify-center h-screen items-center back svelte-l06jve"}"><div class="${"pair svelte-l06jve"}"><img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.g[0], 0)} class="${"ans svelte-l06jve"}">
      <img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.d[0], 0)} class="${"ans svelte-l06jve"}"></div>
  <div class="${"pair svelte-l06jve"}"><img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.g[1], 0)} class="${"ans svelte-l06jve"}">
    <img${(0, import_index_084db825.a)("src", import_all_svelte_svelte_type_style_lang_8d2c7671.d[1], 0)} class="${"ans svelte-l06jve"}"></div>
    <br class="${"svelte-l06jve"}"></div>`;
});
