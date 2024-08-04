export default class CodeVisualizer extends HTMLElement {
  constructor(props) {
    super();
    slice.attachTemplate(this);

    this.$container = this.querySelector(".codevisualizer_container");

    slice.controller.setComponentProps(this, props);
    this.debuggerProps = ["language"];
    this.editor = null;
  }

  set value(value) {
    this._value = value;
    this.$container.textContent = this._value;
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

  init() {}
}

customElements.define("slice-codevisualizer", CodeVisualizer);
