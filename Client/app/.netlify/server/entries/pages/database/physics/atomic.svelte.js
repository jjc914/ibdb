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
  default: () => Atomic
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../../chunks/index-084db825.js");
var import_physics_81f92c85 = require("../../../../chunks/physics-81f92c85.js");
var atomic_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-10zlamj{background-color:#272727}.pair.svelte-10zlamj{flex-direction:column;flex-wrap:wrap;width:20%;margin:1rem;transition:all 0.2s ease-in-out}.pair.svelte-10zlamj:hover{transition:all 0.2s ease-in-out;width:40%}.ans.svelte-10zlamj{width:80rem;border-radius:0.4rem;margin:1rem}.back.svelte-10zlamj{background-color:#272727;display:flex;flex:row;flex-wrap:wrap}.svelte-10zlamj{font-family:'Roboto', sans-serif;color:white}",
  map: null
};
const Atomic = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>atomic</title>`, ""}`, ""}
 
 
 <div class="${"flex justify-center h-screen items-center back svelte-10zlamj"}"><div class="${"pair svelte-10zlamj"}"><img${(0, import_index_084db825.a)("src", import_physics_81f92c85.p + import_physics_81f92c85.a[0], 0)} class="${"ans svelte-10zlamj"}"></div>
   <div class="${"pair svelte-10zlamj"}"><img${(0, import_index_084db825.a)("src", import_physics_81f92c85.p + import_physics_81f92c85.a[1], 0)} class="${"ans svelte-10zlamj"}"></div>
     <br class="${"svelte-10zlamj"}"></div>`;
});
