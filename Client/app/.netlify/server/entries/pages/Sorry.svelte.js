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
  default: () => Sorry
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../chunks/index-084db825.js");
var Sorry_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1pc57om{background-color:#272727}.blober.svelte-1pc57om{background:#ff7979;width:50vw;color:#f0f0f0;padding:3rem}.buttons.svelte-1pc57om{color:#ff7979}",
  map: null
};
const Sorry = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Sorry</title>`, ""}`, ""}
<div class="${"flex justify-center items-center h-screen back svelte-1pc57om"}"><div class="${"rounded-3xl drop-shadow-2xl blober svelte-1pc57om"}"><h1 class="${"text-5xl font-bold"}">Sorry......</h1>
    <br>
    <h1 class="${"text-xl font-bold"}">You are not allowed to access this page</h1>
    <p>A .edu gmail account to use this service in. The IB does not let past
      paper and practice questions to be used at non-licensed institutions. If
      you do have and .edu account, we apiologies for not supporting your
      school. Please ask your school admin to email us or click the button to
      speak to use directly.
    </p>
    <br>
    <h1 class="${"text-center text-xl font-medium"}">We apiologies for any inconvenience
    </h1>
    <br>
    <div class="${"text-center"}"><a href="${"mailto:sdo244@student.cis.edu.hk"}"><div class="${"bg-white hover:bg-slate-100 text-xl text-white py-2 px-4 rounded-xl buttons svelte-1pc57om"}">Email Us
    </div></a></div></div></div>`;
});
