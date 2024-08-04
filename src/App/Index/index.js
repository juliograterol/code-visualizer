import Slice from "../../../Slice/Slice.js";

const loading = await slice.build("Loading", {});
loading.start();

const CodeVisualizer = await slice.build("CodeVisualizer", {
  value: `let hola = "hola mundo"`,
  language: "javascript",
});
const cssCodeVisualizer = await slice.build("CodeVisualizer", {
  value: `.codevisualizer_container {font-family: "Consolas", "Courier New", monospace;padding: 10px;border-radius: 10px;}`,
  language: "css",
});
const htmlCodeVisualizer = await slice.build("CodeVisualizer", {
  value: `<div class="codevisualizer_container">
  <pre class="codevisualizer"><code></code></pre>
</div>
`,
  language: "html",
});

document.body.appendChild(CodeVisualizer);
document.body.appendChild(cssCodeVisualizer);
document.body.appendChild(htmlCodeVisualizer);

loading.stop();
