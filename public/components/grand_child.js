import { Component, useEnv, xml } from "@odoo/owl";

export class GrandChild extends Component {
  static template = xml`
    <section>
        <h2 t-att-style="'color: ' + env.settings.color">GrandChild (Color: <t t-esc="env.settings.color"/>)</h2>
        <p>Color: <t t-esc="env.settings.color"/></p>
        <p>User: <t t-esc="env.user.name"/></p>
    </section>`;

  setup() {
    this.env = useEnv();
  }
}
