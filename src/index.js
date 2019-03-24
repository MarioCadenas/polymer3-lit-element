import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      foo: String
    };
  }

  shouldUpdate() {
    console.log("rendered");
    return true;
  }

  sayHi() {
    console.log("Hi!");
  }

  render() {
    return html`
      <!-- template content -->
      <p>A paragraph ${this.foo}</p>
      <button @click="${this.sayHi}">Say hi!</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-element", MyElement);
