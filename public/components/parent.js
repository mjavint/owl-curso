import { Component, useEnv, useSubEnv, xml } from "@odoo/owl";
import { Child } from "./child";

export class Parent extends Component {
  static template = xml`
  <section>
    <h2 t-att-style="'color: ' + env.settings.color">Parent (Color: <t t-esc="env.settings.color"/>)</h2>
    <p>Color: <t t-esc="env.settings.color"/></p>
    <p>User: <t t-esc="env.user.name"/></p>
    <Child/>
  </section>
  `;
  static components = { Child };

  setup() {
    this.env = useEnv();

    useSubEnv({
      settings: { color: "blue" },
      user: { name: "John Doe" },
    });
  }
}
