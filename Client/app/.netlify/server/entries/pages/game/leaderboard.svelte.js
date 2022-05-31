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
  default: () => Leaderboard
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var leaderboard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-dypfn8{background-color:#272727}.backpeepee.svelte-dypfn8{background-color:#4d4d4d}",
  map: null
};
const Leaderboard = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>index</title>`, ""}`, ""}
<div class="${"flex justify-center items-center h-screen back svelte-dypfn8"}"><div class="${"flex flex-col border-2 backpeepee p-5 m-8 rounded-3xl drop-shadow-2xl svelte-dypfn8"}"><h1 class="${"text-2xl float-left m-5 text-bold text-white"}">Work In progress...</h1>
    <br></div>
      

          </div>`;
});
