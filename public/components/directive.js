import { Component, useState } from "@odoo/owl";
import { User } from "./user";

const USERS = {
  username: "Udemy",
  users: [
    {
      id: 1,
      name: "Jhon Doe",
      email: "jhon.doe@example.com",
      active: true,
    },
    {
      id: 2,
      name: "Ana Barbera",
      email: "ana@example.com",
      active: false,
    },
  ],
};

export class Directive extends Component {
  static template = "Directive";
  static components = { User };
  static props = {};

  setup() {
    this.state = useState(USERS);
  }

  get activeCount() {
    return this.state.users.filter((user) => user.active).length;
  }

  toggleUserStatus(userId) {
    const user = this.state.users.find((user) => user.id === userId);
    if (user) {
      user.active = !user.active;
    }
  }
  deleteUser(userId) {
    this.state.users.splice(
      this.state.users.findIndex((u) => u.id === userId),
      1
    );
  }
  addUser() {
    const newId = Math.max(...this.state.users.map((user) => user.id), 0) + 1;
    this.state.users.push({
      id: newId,
      name: `Usuario ${newId}`,
      email: `user${newId}@example.com`,
      active: false,
    });
  }
  resetUsers() {
    this.state.users = [
      {
        id: 1,
        name: "Jhon Doe",
        email: "jhon.doe@example.com",
        active: true,
      },
      {
        id: 2,
        name: "Ana Barbera",
        email: "ana@example.com",
        active: false,
      },
    ];
  }
}
