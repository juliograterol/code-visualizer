import Slice from "../../../Slice/Slice.js";

const loading = await slice.build("Loading", {});
loading.start();

const input = await slice.build("Input", {
  value: `let hola = "hola mundo"`,
});

document.body.appendChild(input);

const CodeVisualizer = await slice.build("CodeVisualizer", {
  value: input.value,
  language: "javascript",
});
const button = await slice.build("Button", {
  value: "Try it!",
  onClickCallback: () => {
    CodeVisualizer.value = input.value;
    CodeVisualizer.visualizeCode;
  },
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

CodeVisualizer.visualizeCode();

document.body.appendChild(CodeVisualizer);
document.body.appendChild(button);
document.body.appendChild(cssCodeVisualizer);
document.body.appendChild(htmlCodeVisualizer);

loading.stop();
