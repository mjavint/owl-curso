import { Component } from "@odoo/owl";
import { FilteredPosts } from "./components/FilteredPosts";

export class Root extends Component {
  static template = "Root";
  static components = { FilteredPosts };
}
