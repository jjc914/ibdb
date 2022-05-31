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
  default: () => Discord
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var import_discord_7711dd31 = require("../../../chunks/discord-7711dd31.js");
var discord_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1ggt8kq{background-color:#272727}.img.svelte-1ggt8kq{width:30vw}",
  map: null
};
const Discord = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>index</title>`, ""}`, ""}
<div class="${"flex justify-center items-center h-screen back svelte-1ggt8kq"}"><div class="${"flex items flex-col text-center"}"><a class="${"link"}" sveltekit:prefetch href="${"/game/discord"}"><img${(0, import_index_084db825.a)("src", import_discord_7711dd31.d, 0)} class="${"img m-auto drop-shadow-2xl flex svelte-1ggt8kq"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">Discord</h1>
    <br>
    <h1 class="${"text-white"}">Still under development.
      <br>
      Will be a discord bot which sends you an IB question daily
    </h1></div></div>`;
});
