import { Component, useChildSubEnv, useEnv, useSubEnv, xml } from "@odoo/owl";
import { GrandChild } from "./grand_child";

export class Child extends Component {
  static template = xml`
  <section>
    <h2 t-att-style="'color: ' + env.settings.color">Child (Color: <t t-esc="env.settings.color"/>)</h2>
    <p>Color: <t t-esc="env.settings.color"/></p>
    <p>User: <t t-esc="env.user.name"/></p>
    <GrandChild/>
  </section>`;
  static components = { GrandChild };

  setup() {
    this.env = useEnv();
    useSubEnv({
      settings: { color: "green" },
    });
    useChildSubEnv({
      user: { name: "Jane Smith" },
    });
  }
}
