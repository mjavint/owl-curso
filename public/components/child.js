import { Component, xml } from "@odoo/owl";

export class ChildA extends Component {
  static template = xml`
    <div class="box">
      <span>Child A</span>
    </div>
  `;
}

export class ChildB extends Component {
  static template = xml`
  <div class="box">
      <span>Child B</span>
    </div>
  `;
}
