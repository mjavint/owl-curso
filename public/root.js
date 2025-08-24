import { Component, useState } from "@odoo/owl";
import { Modal } from "./components/modal";

export class Root extends Component {
  static template = "Root";
  static components = { Modal };

  setup() {
    this.state = useState({
      modalOpen: false,
    });
  }

  openModal() {
    this.state.modalOpen = true;
  }

  closeModal() {
    this.state.modalOpen = false;
  }

  handleConfirm() {
    alert("¡Acción confirmada con éxito!");
    this.closeModal();
  }
}
