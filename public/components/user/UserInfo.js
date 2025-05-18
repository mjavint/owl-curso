import { Component, xml } from "@odoo/owl";

export class UserInfo extends Component {
  static template = xml`
    <div class="user-info">
        <h3>Usuario: <t t-esc="props.user.name"/></h3>
        <p>Email: <t t-esc="props.user.email"/></p>
        <p>Edad: <t t-esc="props.user.age"/></p>
    </div>
`;

  setup() {}
}
