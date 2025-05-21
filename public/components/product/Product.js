import { Component, xml } from "@odoo/owl";

export class Product extends Component {
  static template = xml`
        <div class="product">
            <span><t t-esc="props.product.name"/> - $<t t-esc="props.product.price"/></span>
            <button t-on-click="onDeleteProduct">Eliminar</button>
        </div>
    `;

  static props = {
    product: {
      typeof: Object,
      shape: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number },
      },
    },
    onDelete: Function,
  };

  onDeleteProduct() {
    this.props.onDelete(this.props.product.id);
  }
}
