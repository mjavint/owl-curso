import { Component, xml } from "@odoo/owl";

export class User extends Component {
  static template = xml`
    <div class="user-item">
        <h3 t-esc="props.user.name"/>
        <p>Email: <t t-esc="props.user.email"/></p>
        <!-- Uso de t-att-class -->
        <p>
        Status:
        <span t-att-class="props.user.active ? 'active' : ''">
            <t t-esc="props.user.active ? 'Active': 'Inactive'"/>
        </span>
        </p>
    </div>
    `;
}
