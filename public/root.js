import { Component, useState } from "@odoo/owl";
import { UserList } from "./components/user_list";
import { StatsBadge } from "./components/stats_badge";
import users from "./data/users.json";

export class Root extends Component {
  static template = "Root";
  static components = { StatsBadge, UserList };

  setup() {
    this.users = useState([...users]);
    this.search = useState({ search: "" });
  }

  get activeCount() {
    // Count active users among the currently filtered users
    return this.filteredUsers.filter((user) => user.active).length;
  }

  get filteredUsers() {
    const q = (this.search.search || "").trim().toLowerCase();
    if (!q) return this.users;
    return this.users.filter((u) => {
      return (
        (u.name && u.name.toLowerCase().includes(q)) ||
        (u.email && u.email.toLowerCase().includes(q))
      );
    });
  }

  addUser() {
    const newId = Math.max(...this.users.map((user) => user.id), 0) + 1;
    this.users.push({
      id: newId,
      name: `Usuario ${newId}`,
      username: `usuario_${newId}`,
      email: `user${newId}@example.biz`,
      active: false,
      phone: `1-770-736-8031`,
      website: `example.org`,
    });
  }

  clearSearch() {
    this.search.search = "";
  }
}
