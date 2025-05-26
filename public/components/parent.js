import { Component, useState, xml } from "@odoo/owl";
import { ChildA, ChildB } from "./child";

export class Parent extends Component {
  static template = xml`
    <div>
      <t t-component="myComponent"/>
      <button t-on-click="toggleComponent">Toggle Component</button>
    </div>
  `;

  setup() {
    this.state = useState({ child: "a" });
  }

  get myComponent() {
    return this.state.child === "a" ? ChildA : ChildB;
  }

  toggleComponent() {
    this.state.child = this.state.child === "a" ? "b" : "a";
  }
}
