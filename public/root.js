import { Component } from "@odoo/owl";
import { UserProfile } from "./components/user/UserProfile";

export class Root extends Component {
  static template = "Root";
  static components = { UserProfile };
}
