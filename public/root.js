import { Component } from "@odoo/owl";
import { Directive } from "./components/directive";

export class Root extends Component {
  static template = "Root";
  static components = { Directive };
}
