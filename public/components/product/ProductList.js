import { Component, xml, useState } from "@odoo/owl";
import { Product } from "./Product";

export class ProductList extends Component {
  static template = xml`
        <div>
            <h1>Lista de Productos</h1>
            <input
                type="text"
                placeholder="Agregar producto"
                t-on-keyup="addProduct"/>
            <div t-foreach="state.products" t-as="product" t-key="product.id">
                <Product
                    product="product"
                    onDelete.bind="deleteProduct"
                />
            </div>
        </div>
    `;

  static components = { Product };

  setup() {
    this.state = useState({
      products: [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Teléfono", price: 599 },
        { id: 3, name: "Tablet", price: 299 },
      ],
      nextId: 4,
    });
  }

  addProduct(ev) {
    if (ev.key === "Enter" && ev.target.value.trim() !== "") {
      this.state.products.push({
        id: this.state.nextId++,
        name: ev.target.value,
        price: Math.floor(Math.random() * 1000),
      });
      ev.target.value = "";
    }
  }

  deleteProduct(productId) {
    const productIndex = this.state.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex >= 0) {
      // Remove the product from the list
      this.state.products.splice(productIndex, 1);
    }
  }
}
