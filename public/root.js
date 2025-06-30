import { Component } from "@odoo/owl";
import { Dropdown } from "./components/Dropdown";

export class Root extends Component {
  static template = "Root";
  static components = { Dropdown };
}
