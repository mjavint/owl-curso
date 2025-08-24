import { Component, useState, useSubEnv } from "@odoo/owl";
import { UserList } from "./components/user_list";
import { StatsBadge } from "./components/stats_badge";
import users from "./data/users.json";
import { Modal } from "./components/modal";

export class Root extends Component {
  static template = "Root";
  static components = { StatsBadge, UserList, Modal };

  setup() {
    this.state = useState({
      users,
      search: "",
      modalOpen: false,
      newUser: {},
      isEditing: false,
      editingUserId: null,
    });

    useSubEnv({ currentUser: this.state.newUser });
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

  get modalTitle() {
    return this.state.isEditing ? "Editar Usuario" : "Agregar Usuario";
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
  resetEditing() {
    this.state.isEditing = false;
    this.state.editingUserId = null;
    this.state.newUser = {};
  }

  openModal() {
    this.resetEditing();
    this.state.modalOpen = true;
  }

  closeModal() {
    this.resetEditing();
    this.state.modalOpen = false;
  }

  handleConfirm() {
    if (this.state.isEditing) {
      this.updateUser();
    } else {
      this.addUser();
    }
    this.closeModal();
  }

  editUser(user) {
    this.state.isEditing = true;
    this.state.editingUserId = user.id;
    // Create a copy of the user object to avoid direct mutation
    this.state.newUser = { ...user };

    this.state.modalOpen = true;
  }

  updateUser() {
    const index = this.state.users.findIndex(
      (u) => u.id === this.state.editingUserId
    );
    if (index !== -1) {
      const updatedUser = {
        ...this.state.users[index],
        name: this.state.newUser.name,
        username: this.state.newUser.username,
        email: this.state.newUser.email,
        phone: this.state.newUser.phone,
        website: this.state.newUser.website,
      };
      this.state.users[index] = updatedUser;
    }
  }
}
