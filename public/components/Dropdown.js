import { Component, useExternalListener, useRef, useState } from "@odoo/owl";

export class Dropdown extends Component {
  static template = "Dropdown";

  setup() {
    this.state = useState({ isOpen: false });
    this.dropdownRef = useRef("dropdownRef");
    useExternalListener(window, "click", this.closeDropdown, { capture: true });
    // useExternalListener(
    //   window,
    //   "keydown",
    //   (ev) => {
    //     if (ev.key === "Enter") this.toggleDropdown();
    //   },
    //   { capture: true }
    // );
  }

  toggleDropdown() {
    this.state.isOpen = !this.state.isOpen;
  }

  closeDropdown(ev) {
    if (this.state.isOpen && !this.dropdownRef.el.contains(ev.target)) {
      this.state.isOpen = false;
    }
  }
}
