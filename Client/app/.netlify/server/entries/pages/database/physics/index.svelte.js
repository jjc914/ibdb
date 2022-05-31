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
  default: () => Physics
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../../chunks/index-084db825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-27nv2i{background-color:#272727}.backpeepee.svelte-27nv2i{background-color:#3d3c3c}p.svelte-27nv2i{display:flex;text-align:center;margin:auto}a.svelte-27nv2i{background-color:#0f92c6;color:#f0f0f0;width:20vw;height:10vw;display:flex;margin:1vw;border-radius:1rem}a.svelte-27nv2i:hover{transition:all 0.2s ease-in-out;background-color:#0b6386}",
  map: null
};
const Physics = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center items-center h-screen back svelte-27nv2i"}"><div class="${"backpeepee w-3/4 p-6 rounded-3xl  svelte-27nv2i"}"><div class="${"m-auto"}"><h1 class="${"text-xl text-white text-center py-2 px-4 rounded-3xl bg-neutral-600"}">Select your topic
      </h1>
      <br>
      <div class="${"w-full m-auto items-center flex text-center justify-center flex-wrap"}"><a href="${"/database/physics/atomic"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Atomic Physics</p></a>
        
        <a href="${"/database/physics/energyProdution"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Energy Prodution</p></a>
        <a href="${"/database/physics/measurementsAnduncertainty"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Measurements and Uncertainty</p></a>
        <a href="${"/database/physics/mechanics"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Mechanics</p></a>
        <a href="${"/database/physics/quantumAndnuclearPhysics"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Quantum And NuclearPhysics</p></a>
        <a href="${"/database/physics/thermal"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Thermal</p></a>
        <a href="${"/database/physics/wavePhenomena"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Wave Phenomena</p></a>
        <a href="${"/database/physics/electricityAndmagnetism"}" class="${"svelte-27nv2i"}"><p class="${"svelte-27nv2i"}">Electricity and Magnetism</p></a></div></div></div></div>`;
});
