export default class CodeVisualizer extends HTMLElement {
  constructor(props) {
    super();
    slice.attachTemplate(this);

    this.$container = this.querySelector(".codevisualizer_container");
    this.$code = this.querySelector(".codevisualizer");

    slice.controller.setComponentProps(this, props);
    this.debuggerProps = ["language", "value"];
    this.editor = null;
  }

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set language(value) {
    this._language = value;
  }

  get language() {
    return this._language;
  }

  init() {
    this.visualizeCode();
  }

  visualizeCode() {
    if (this._value && this._language) {
      let formattedCode = this.formatCode(this._value);
      this.$code.innerHTML = `<pre><code class="language-${
        this._language
      }">${Prism.highlight(
        formattedCode,
        Prism.languages[this._language],
        this._language
      )}</code></pre>`;
    }
  }

  formatCode(value) {
    let code = "";
    let indentLevel = 0;
    const indentSize = 2; // Espacios por nivel de indentación

    if (this._language === "html") {
      // Formateo específico para HTML
      const tagPattern = /<\/?[a-zA-Z][\s\S]*>/g; // Para HTML
      let lastIndex = 0;
      let match;
      while ((match = tagPattern.exec(value)) !== null) {
        code += value.slice(lastIndex, match.index);
        code += `\n${" ".repeat(indentLevel * indentSize)}${match[0]}`;
        lastIndex = match.index + match[0].length;
        if (match[0].startsWith("</")) {
          indentLevel--;
        } else if (!match[0].endsWith("/>")) {
          indentLevel++;
        }
      }
      code += value.slice(lastIndex);
    } else if (this._language === "css") {
      // Formateo específico para CSS
      let lastIndex = 0;
      let insideRule = false;
      let insideProperty = false;
      for (let i = 0; i < value.length; i++) {
        let c = value[i];

        if (c === "\n" || c === "\r") {
          continue; // Ignorar saltos de línea en el valor original
        }

        if (c === "{") {
          code += ` {\n`;
          indentLevel++;
          code += " ".repeat(indentLevel * indentSize);
          insideRule = true;
        } else if (c === "}") {
          if (value[i - 1] === ";") {
            code += "}";
          } else {
            if (insideRule) {
              indentLevel--;
              code += `\n${" ".repeat(indentLevel * indentSize)}}`;
              insideRule = false;
            }
          }
        } else if (c === ";") {
          code += `${c}\n${" ".repeat(indentLevel * indentSize)}`;
          insideProperty = false;
        } else if (c === ":") {
          code += `${c} `;
          insideProperty = true;
        } else {
          code += c;
        }
      }
    } else {
      // Formateo específico para JavaScript
      for (let i = 0; i < value.length; i++) {
        let c = value[i];

        if (c === "\n") {
          continue; // Ignorar saltos de línea en el valor original
        }

        if (c === "{") {
          code += ` {\n`;
          indentLevel++;
          code += " ".repeat(indentLevel * indentSize); // Añade la indentación adecuada
        } else if (c === "}") {
          code += `\n`;
          indentLevel--;
          code += " ".repeat(indentLevel * indentSize); // Añade la indentación adecuada
          code += `}`;
        } else if (c === "\n") {
          code += `\n`;
          code += " ".repeat(indentLevel * indentSize); // Añade la indentación adecuada
        } else {
          code += c;
        }
      }
    }

    return code;
  }
}

customElements.define("slice-codevisualizer", CodeVisualizer);
