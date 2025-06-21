import { Component, useRef } from "@odoo/owl";

export class ToggleText extends Component {
  static template = "ToggleText";

  setup() {
    this.toogleTextRef = useRef("toogleText");
  }

  toggleText() {
    this.toogleTextRef.el.textContent =
      this.toogleTextRef.el.textContent === "Presióname"
        ? "Se presionó"
        : "Presióname";
  }
}
