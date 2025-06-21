import { Component } from "@odoo/owl";
import { ToggleText } from "./components/ToggleText";

export class Root extends Component {
  static template = "Root";
  static components = { ToggleText };
}
