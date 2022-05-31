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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_084db825 = require("../../chunks/index-084db825.js");
var import_app = require("firebase/app");
var import_analytics = require("firebase/analytics");
var import_firestore = require("firebase/firestore");
var import_database = require("firebase/database");
var import_auth = require("firebase/auth");
var import_authStore_e3ad6758 = require("../../chunks/authStore-e3ad6758.js");
const firebaseConfig = {
  apiKey: "AIzaSyCtQPlkMztE_pOqou84GAjzmgedgGbdZ5A",
  authDomain: "ibdb-6c905.firebaseapp.com",
  databaseURL: "https://ibdb-6c905-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ibdb-6c905",
  storageBucket: "ibdb-6c905.appspot.com",
  messagingSenderId: "301932410966",
  appId: "1:301932410966:web:9ef0cd4684bb9ff58ba3f7",
  measurementId: "G-45KDP4Q6FD"
};
const app = (0, import_app.initializeApp)(firebaseConfig);
(0, import_database.getDatabase)(app);
var Circle_svelte_svelte_type_style_lang = "";
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-1j9ptc4{background-color:#272727}.backpeepee.svelte-1j9ptc4{background-color:#ffffff}",
  map: null
};
const Routes = (0, import_index_084db825.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_user = (0, import_index_084db825.b)(import_authStore_e3ad6758.u, (value) => value);
  $$unsubscribe_isLoggedIn = (0, import_index_084db825.b)(import_authStore_e3ad6758.i, (value) => value);
  new import_auth.GoogleAuthProvider();
  (0, import_auth.getAuth)();
  $$result.css.add(css);
  $$unsubscribe_user();
  $$unsubscribe_isLoggedIn();
  return `${$$result.head += `${$$result.title = `<title>index</title>`, ""}`, ""}
<div class="${"flex justify-center items-center h-screen back svelte-1j9ptc4"}"><button><div class="${"flex backpeepee p-3 rounded-3xl shadow-lg border-2 hover:border-4 shadow-lg duration-750 ease-in-out transition hover:scale-105 drop-shadow-2xl svelte-1j9ptc4"}"><img src="${"https://img.icons8.com/fluency-systems-filled/96/000000/google-logo.png"}" alt="${"google icon"}">
        
        <p class="${"justify-center content-center p-8 text-xl "}">Sign into google here
        </p></div></button>
  
</div>`;
});
