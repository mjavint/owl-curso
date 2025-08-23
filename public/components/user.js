import { Component, xml } from "@odoo/owl";

export class User extends Component {
  static template = xml`
    <article class="badge" t-att-class="props.user.active ? 'badge-secondary': 'badge-gray'">
        <h3 t-esc="props.user.name"/>
        <p>
            <t t-esc="props.user.username"/>
        </p>
        <p>
            <t t-esc="props.user.email"/>
        </p>
            <t t-esc="props.user.phone"/>
        <p>
        </p>
        <p>
            <t t-esc="props.user.website"/>
        </p>
        <button class="btn-rounded btn-delete" t-on-click="deleteUser">
            <i class="fa fa-trash"></i>
        </button>
        <button class="btn-rounded btn-toggle" t-on-click="toggleActive">
            <i class="fa" t-att-class="props.user.active ? 'fa-check': 'fa-times'"/>
        </button>
    </article>
    `;

  toggleActive() {
    this.props.onToggle(this.props.user.id);
  }

  deleteUser() {
    this.props.onDelete(this.props.user.id);
  }
}
