import { Component } from "@odoo/owl";
import { Parent } from "./components/parent";

export class Root extends Component {
  static template = "Root";
  static components = { Parent };
}
