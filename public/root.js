import { Component, useState } from "@odoo/owl";
import { UserList } from "./components/user_list";
import { StatsBadge } from "./components/stats_badge";
import users from "./data/users.json";
import { Modal } from "./components/modal";

export class Root extends Component {
  static template = "Root";
  static components = { StatsBadge, UserList, Modal };

  setup() {
    this.state = useState({ users, search: "", modalOpen: false, newUser: {} });
  }

  get activeCount() {
    // Count active users among the currently filtered users
    return this.filteredUsers.filter((user) => user.active).length;
  }

  get filteredUsers() {
    const q = (this.state.search || "").trim().toLowerCase();
    if (!q) return this.state.users;
    return this.state.users.filter((u) => {
      return (
        (u.name && u.name.toLowerCase().includes(q)) ||
        (u.email && u.email.toLowerCase().includes(q))
      );
    });
  }

  get newUser() {
    return this.state.newUser;
  }

  addUser() {
    const newId = Math.max(...this.state.users.map((user) => user.id), 0) + 1;
    this.state.users.push({
      id: newId,
      name: this.newUser.name || `Usuario ${newId}`,
      username: this.newUser.username || `usuario_${newId}`,
      email: this.newUser.email || `user${newId}@example.biz`,
      active: false,
      phone: this.newUser.phone || `1-770-736-8031`,
      website: this.newUser.website || `example.org`,
    });
  }

  clearSearch() {
    this.state.search = "";
  }

  // Modal methods
  openModal() {
    this.state.modalOpen = true;
  }

  closeModal() {
    this.state.modalOpen = false;
  }

  handleConfirm() {
    this.addUser();
    this.closeModal();
  }
}
