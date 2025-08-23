import { Component, xml } from "@odoo/owl";

export class Modal extends Component {
  static template = xml`
    <t t-portal="'#modal-portal'">
        <div t-if="props.isOpen" class="modal-backdrop" t-on-click="closeOnBackdrop">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" t-esc="props.title" />
                    <button class="close-btn" t-on-click="props.onClose">×</button>
                </div>
                <div class="modal-body">
                    <t t-slot="default"/>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-cancel" t-on-click="props.onClose">Cancelar</button>
                    <button class="btn btn-confirm" t-on-click="props.onConfirm">Confirmar</button>
                </div>
            </div>
        </div>
    </t>
    `;

  closeOnBackdrop(ev) {
    if (ev.target.classList.contains("modal-backdrop")) {
      this.props.onClose();
    }
  }
}
