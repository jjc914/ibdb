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
  default: () => PhysicsGame
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../../chunks/index-084db825.js");
var import_authStore_e3ad6758 = require("../../../chunks/authStore-e3ad6758.js");
var physicsGame_svelte_svelte_type_style_lang = "";
const css = {
  code: '.ans.svelte-160xcuq{width:3rem;height:3rem;border-radius:0.4rem;background-color:#c4c4c4;margin:auto}.ans.svelte-160xcuq:hover{background-color:#889afd}.back.svelte-160xcuq{background-color:#272727}.backpeepee.svelte-160xcuq{background-color:#373737}.svelte-160xcuq{font-family:"Roboto", sans-serif;color:white}.ansl.svelte-160xcuq{width:32%}.question.svelte-160xcuq{width:60vw;max-height:60vh}.score.svelte-160xcuq{position:absolute;text-align:center;font-size:2rem;top:2rem}',
  map: null
};
const PhysicsGame = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  let $correct, $$unsubscribe_correct;
  let $wrong, $$unsubscribe_wrong;
  $$unsubscribe_correct = (0, import_index_084db825.b)(import_authStore_e3ad6758.c, (value) => $correct = value);
  $$unsubscribe_wrong = (0, import_index_084db825.b)(import_authStore_e3ad6758.w, (value) => $wrong = value);
  let question = "";
  $$result.css.add(css);
  $$unsubscribe_correct();
  $$unsubscribe_wrong();
  return `${$$result.head += `${$$result.title = `<title>index</title>`, ""}`, ""}

<div class="${"flex justify-center items-center h-screen back svelte-160xcuq"}"><div class="${"score svelte-160xcuq"}"><h1 class="${"svelte-160xcuq"}"><strong style="${"color: rgb(0,225,0);"}" class="${"svelte-160xcuq"}">Correct: </strong>${(0, import_index_084db825.e)($correct)}
      <strong style="${"color: red;"}" class="${"svelte-160xcuq"}">Wrong: </strong>${(0, import_index_084db825.e)($wrong)}</h1></div>
  <div class="${"flex flex-col border-2 backpeepee p-5 m-10 rounded-3xl drop-shadow-2xl svelte-160xcuq"}"><h1 class="${"text-2xl float-left svelte-160xcuq"}">Question:</h1>
    <br class="${"svelte-160xcuq"}">
    <img${(0, import_index_084db825.a)("src", question, 0)} alt="${"question"}" class="${"rounded-xl question svelte-160xcuq"}">
    <br class="${"svelte-160xcuq"}">
    <div class="${"flex w-3/4 space-x-4 m-auto object-center text-center content-center flex-row svelte-160xcuq"}"><div class="${"flex flex-col ansl svelte-160xcuq"}"><h1 class="${"text-xl text-center svelte-160xcuq"}">A</h1>
        <button class="${"svelte-160xcuq"}"><div class="${"ans svelte-160xcuq"}"></div></button></div>
      <div class="${"flex flex-col ansl svelte-160xcuq"}"><h1 class="${"text-xl text-center svelte-160xcuq"}">B</h1>
        <button class="${"svelte-160xcuq"}"><div class="${"ans svelte-160xcuq"}"></div></button></div>
      <div class="${"flex flex-col ansl svelte-160xcuq"}"><h1 class="${"text-xl text-center svelte-160xcuq"}">C</h1>
        <button class="${"svelte-160xcuq"}"><div class="${"ans svelte-160xcuq"}"></div></button></div>
      <div class="${"flex flex-col ansl svelte-160xcuq"}"><h1 class="${"text-xl text-center svelte-160xcuq"}">D</h1>
        <button class="${"svelte-160xcuq"}"><div class="${"ans svelte-160xcuq"}"></div></button></div></div>
    <br class="${"svelte-160xcuq"}"></div>
</div>`;
});
