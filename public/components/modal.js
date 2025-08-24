import { Component, xml } from "@odoo/owl";

export class Modal extends Component {
  static template = xml`
   <!-- Portal para renderizar el modal fuera del árbol principal -->
    <t t-portal="'#modal-portal'">
        <div class="modal-backdrop" t-att-class="{active: props.isOpen}">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" t-esc="props.title"/>
                    <button class="close-btn" t-on-click="props.onClose">×</button>
                </div>
                <div class="modal-body">
                    <t t-slot="body"/>
                </div>
                <div class="modal-footer">
                    <t t-slot="footer">
                        <button class="btn btn-cancel">Cancelar</button>
                        <button class="btn btn-confirm">Aceptar</button>
                    </t>
                </div>
            </div>
        </div>
    </t>
  `;
}
