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
  code: ".back.svelte-1dmwn01{background-color:#272727}.backpeepee.svelte-1dmwn01{background-color:#3d3c3c}p.svelte-1dmwn01{display:flex;text-align:center;margin:auto}a.svelte-1dmwn01{background-color:#707070;color:#f0f0f0;width:20vw;height:10vw;display:flex;margin:1vw;border-radius:1rem}a.svelte-1dmwn01:hover{background-color:#b3b6b1}",
  map: null
};
const Topic = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center items-center h-screen back svelte-1dmwn01"}"><div class="${"backpeepee w-3/4 p-6 rounded-3xl  svelte-1dmwn01"}"><div class="${"m-auto"}"><h1 class="${"text-xl text-white text-center py-2 px-4 rounded-3xl bg-neutral-600"}">Select your subject
      </h1>
      <br>
      <div class="${"w-full m-auto items-center flex text-center justify-center flex-wrap"}"><a style="${"background-color: #0f92c6"}" sveltekit:prefetch href="${"/game/physicsGame"}" class="${"svelte-1dmwn01"}"><p class="${"svelte-1dmwn01"}">Physics</p></a>
        <a href="${""}" class="${"svelte-1dmwn01"}"><p class="${"svelte-1dmwn01"}">Chemistry (Coming Soon)</p></a>
        <a href="${""}" class="${"svelte-1dmwn01"}"><p class="${"svelte-1dmwn01"}">Biology (Coming Soon)</p></a></div></div></div></div>`;
});
