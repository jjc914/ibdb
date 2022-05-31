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
  default: () => Game
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var import_discord_7711dd31 = require("../../../chunks/discord-7711dd31.js");
var import_game_1959a02f = require("../../../chunks/game-1959a02f.js");
var leaderboard = "/_app/assets/LeaderBoard-a951d02b.svg";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1gr371g{background-color:#272727}.img.svelte-1gr371g{width:10vw;height:10vw;justify-content:center;margin:auto;transition-duration:1000ms}.items.svelte-1gr371g{margin:10vw;transition-duration:1000ms}",
  map: null
};
const Game = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Portal</title>`, ""}`, ""}
<div class="${"flex justify-center items-center h-screen back svelte-1gr371g"}"><div class="${"flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90 svelte-1gr371g"}"><a class="${"link"}" sveltekit:prefetch href="${"/game/leaderboard"}"><img${(0, import_index_084db825.a)("src", leaderboard, 0)} class="${"img drop-shadow-2xl flex svelte-1gr371g"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">LeaderBoard</h1></div>
  <div class="${"flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90 svelte-1gr371g"}"><a class="${"link"}" sveltekit:prefetch href="${"/game/topic"}"><img${(0, import_index_084db825.a)("src", import_game_1959a02f.g, 0)} class="${"img drop-shadow-2xl flex svelte-1gr371g"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">Game</h1></div>
  <div class="${"flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90 svelte-1gr371g"}"><a class="${"link"}" sveltekit:prefetch href="${"/game/discord"}"><img${(0, import_index_084db825.a)("src", import_discord_7711dd31.d, 0)} class="${"img drop-shadow-2xl flex svelte-1gr371g"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">Discord</h1></div></div>`;
});
