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
  default: () => Database
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1gb977o{background-color:#272727}.backpeepee.svelte-1gb977o{background-color:#3d3c3c}p.svelte-1gb977o{display:flex;text-align:center;margin:auto}a.svelte-1gb977o{background-color:#707070;color:#f0f0f0;width:30rem;height:5rem;display:flex;margin:1vw;border-radius:1rem}a.svelte-1gb977o:hover{background-color:#b3b6b1}",
  map: null
};
const Database = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center items-center h-screen back svelte-1gb977o"}"><div class="${"backpeepee w-3/4 justify-center h-3/4 p-6 rounded-3xl  svelte-1gb977o"}"><div class="${"justify-center m-auto"}"><h1 class="${"text-xl text-white text-center py-2 px-4 rounded-3xl bg-neutral-600"}">Select your subjects
      </h1>
      <br>
      <div class="${"w-full m-auto items-center flex text-center justify-center flex-wrap"}"><a style="${"background-color: #0f92c6"}" href="${"/database/math"}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Math AA</p></a>
        <a href="${""}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Math AI (Coming Soon)</p></a>
        <a style="${"background-color: #0f92c6"}" href="${"/database/physics"}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Physics</p></a>
        <a href="${""}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Chemistry (Coming Soon)</p></a>
        <a href="${""}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Biology (Coming Soon)</p></a>
        <a href="${""}" class="${"svelte-1gb977o"}"><p class="${"svelte-1gb977o"}">Computer Science (Coming Soon)</p>
        </a></div></div></div></div>`;
});
