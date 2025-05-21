import { Component } from "@odoo/owl";
import { ProductList } from "./components/product/ProductList";

export class Root extends Component {
  static template = "Root";
  static components = { ProductList };
}
