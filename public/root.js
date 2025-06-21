import { Component } from "@odoo/owl";
import { Counter } from "./components/Counter";

export class Root extends Component {
  static template = "Root";
  static components = { Counter };
}
