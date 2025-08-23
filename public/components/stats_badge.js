import { Component, xml } from "@odoo/owl";

export class StatsBadge extends Component {
  static template = xml`
        <div class="badge" t-att-class="props.className">
            <span class="badge-label">
                <t t-out="props.label"/>
            </span>
            <span class="badge-value" t-out="props.quantity"/>
        </div>
    `;
}
