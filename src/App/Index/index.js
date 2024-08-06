import Slice from "../../../Slice/Slice.js";

const loading = await slice.build("Loading", {});
loading.start();

//Here is the Javascript CodeVisualizer
//■■■■■■■■■■■■  ■■■■■■■■■
//■■■■■■■■■■■■ ■■■■■■■■■■
//      ■■■    ■■■
//      ■■■     ■■■■■■■■
//■■■   ■■■           ■■■
//■■■■■■■■■    ■■■■■■■■■■
// ■■■■■■■     ■■■■■■■■■

const jsContainer = document.querySelector(".js_container");
const jsInput = await slice.build("Input", {
  value: `let hola = "hola mundo"`,
});
jsInput.addEventListener("input", () => {
  jsCodeVisualizer.value = jsInput.value;
  jsCodeVisualizer.visualizeCode();
});
const jsCodeVisualizer = await slice.build("CodeVisualizer", {
  value: jsInput.value,
  language: "javascript",
});
jsContainer.appendChild(jsInput);
jsContainer.appendChild(jsCodeVisualizer);

//Here is the CSS CodeVisualizer
// ■■■■■■■■■■   ■■■■■■■■■   ■■■■■■■■■
//■■■■■■■■■■■  ■■■■■■■■■■  ■■■■■■■■■■
//■■■          ■■■         ■■■
//■■■           ■■■■■■■■    ■■■■■■■■
//■■■                 ■■■         ■■■
//■■■■■■■■■■■  ■■■■■■■■■■  ■■■■■■■■■■
// ■■■■■■■■■■  ■■■■■■■■■   ■■■■■■■■■
const cssContainer = document.querySelector(".css_container");
const cssInput = await slice.build("Input", {
  value: `.class{ color: blue;}`,
});
const cssCodeVisualizer = await slice.build("CodeVisualizer", {
  value: cssInput.value,
  language: "css",
});
cssInput.addEventListener("input", () => {
  cssCodeVisualizer.value = cssInput.value;
  cssCodeVisualizer.visualizeCode();
});
cssContainer.appendChild(cssInput);
cssContainer.appendChild(cssCodeVisualizer);

//Here is the HTML CodeVisualizer
//■■■   ■■■ ■■■■■■■■■■■ ■■■      ■■■ ■■■
//■■■   ■■■ ■■■■■■■■■■■ ■■■■    ■■■■ ■■■
//■■■■■■■■■     ■■■     ■■■■■  ■■■■■ ■■■
//■■■■■■■■■     ■■■     ■■■ ■■■■ ■■■ ■■■
//■■■   ■■■     ■■■     ■■■  ■■  ■■■ ■■■■■■■■■■■
//■■■   ■■■     ■■■     ■■■      ■■■ ■■■■■■■■■■■
const htmlContainer = document.querySelector(".html_container");
const htmlInput = await slice.build("Input", {
  value: "<div></div>",
});
const htmlCodeVisualizer = await slice.build("CodeVisualizer", {
  value: htmlInput.value,
  language: "html",
});
htmlInput.addEventListener("input", () => {
  htmlCodeVisualizer.value = htmlInput.value;
  htmlCodeVisualizer.visualizeCode();
});
htmlContainer.appendChild(htmlInput);
htmlContainer.appendChild(htmlCodeVisualizer);

loading.stop();
