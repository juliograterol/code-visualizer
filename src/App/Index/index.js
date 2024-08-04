import Slice from "../../../Slice/Slice.js";

const loading = await slice.build("Loading", {});
loading.start();

const CodeVisualizer = await slice.build("CodeVisualizer", {
  value: `const myButton = await slice.build("Button", props);`,
  language: "javascript",
});

document.body.appendChild(CodeVisualizer);

loading.stop();
