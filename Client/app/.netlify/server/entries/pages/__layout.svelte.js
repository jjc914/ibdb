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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../chunks/index-084db825.js");
var import_database_e2a7071d = require("../../chunks/database-e2a7071d.js");
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-1kllgrp{position:absolute;padding:1rem;padding-left:2rem;width:6rem}.signout.svelte-1kllgrp{background-color:#fffaaf;color:#272727;position:absolute;right:0;z-index:1;top:0;margin:1.2rem;padding:0.5rem;border-radius:0.5rem;cursor:pointer;text-align:center;font-weight:600;transition-duration:1000ms}",
  map: null
};
const _layout = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="${"/home"}"><img${(0, import_index_084db825.a)("src", import_database_e2a7071d.l, 0)} class="${"logo duration-750 ease-in-out transition hover:scale-110 svelte-1kllgrp"}" alt="${"logo"}"><img></a>
<button class="${"signout shadow-lg duration-750 ease-in-out transition hover:scale-110 svelte-1kllgrp"}">Sign Out
</button>
${slots.default ? slots.default({}) : ``}`;
});
