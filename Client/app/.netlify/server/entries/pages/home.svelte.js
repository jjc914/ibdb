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
  default: () => Home
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../chunks/index-084db825.js");
var import_database_e2a7071d = require("../../chunks/database-e2a7071d.js");
var import_game_1959a02f = require("../../chunks/game-1959a02f.js");
var import_authStore_e3ad6758 = require("../../chunks/authStore-e3ad6758.js");
var home_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1f0cxtb{background-color:#272727;height:100vh;width:100vw}.logo.svelte-1f0cxtb{width:20vw;text-align:center;margin:auto}.one.svelte-1f0cxtb{width:50vw;background-color:#272727;transition-duration:1000ms}.two.svelte-1f0cxtb{width:50vw;transition-duration:1000ms}",
  map: null
};
const Home = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $userValue, $$unsubscribe_userValue = import_index_084db825.n, $$subscribe_userValue = () => ($$unsubscribe_userValue(), $$unsubscribe_userValue = (0, import_index_084db825.b)(userValue, ($$value) => $userValue = $$value), userValue);
  $$unsubscribe_isLoggedIn = (0, import_index_084db825.b)(import_authStore_e3ad6758.i, (value) => $isLoggedIn = value);
  let userValue;
  import_authStore_e3ad6758.u.subscribe((value) => {
    $$subscribe_userValue(userValue = value);
  });
  console.log($userValue, $isLoggedIn);
  $$result.css.add(css);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_userValue();
  return `${$$result.head += `${$$result.title = `<title>home</title>`, ""}`, ""}
<div class="${"back flex justify-center items-center m-auto svelte-1f0cxtb"}"><div class="${"flex one flex-col text-center  svelte-1f0cxtb"}"><div class="${"hadow-lg duration-750 ease-in-out transition hover:scale-90"}"><a class="${"link"}" sveltekit:prefetch href="${"/database"}"><img${(0, import_index_084db825.a)("src", import_database_e2a7071d.l, 0)} class="${"logo drop-shadow-2xl flex svelte-1f0cxtb"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">Database</h1></div></div>
  <div class="${"flex two flex-col text-center svelte-1f0cxtb"}"><div class="${"hadow-lg duration-750 ease-in-out transition hover:scale-90"}"><a class="${"link"}" sveltekit:prefetch href="${"/game"}"><img${(0, import_index_084db825.a)("src", import_game_1959a02f.g, 0)} class="${"logo drop-shadow-2xl flex svelte-1f0cxtb"}" alt="${"logo"}"></a>
    <br>
    <h1 class="${"text-white text-2xl"}">Game</h1></div></div></div>`;
});
