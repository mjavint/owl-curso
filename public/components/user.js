import { Component, xml } from "@odoo/owl";

export class User extends Component {
  static template = xml`
    <article>
        <h3 t-esc="props.user.name"/>
        <p>
            <t t-esc="props.user.email"/>
        </p>
        <p>
            <t t-esc="props.user.active ? 'Active': 'Inactive'"/>
        </p>
        <div class="btns-container">
            <button t-on-click="toggleActive">Toggle Status</button>
            <button t-on-click="deleteUser">Delete</button>
        </div>
    </article>
    `;

  toggleActive() {
    this.props.onToggle(this.props.user.id);
  }

  deleteUser() {
    this.props.onDelete(this.props.user.id);
  }
}
