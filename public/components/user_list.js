import { Component } from "@odoo/owl";
import { User } from "./user";

export class UserList extends Component {
  static template = "UserList";
  static components = { User };

  toggleUserStatus(userId) {
    const user = this.props.users.find((user) => user.id === userId);
    if (user) {
      user.active = !user.active;
    }
  }

  deleteUser(userId) {
    this.props.users.splice(
      this.props.users.findIndex((u) => u.id === userId),
      1
    );
  }

  editUser(user) {
    this.props.onEditUser(user);
  }
}
