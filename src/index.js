import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      feeling: String
    };
  }

  render() {
    return html`
      <!-- template content -->
      <p>A paragraph ${this.feeling}</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-element", MyElement);
