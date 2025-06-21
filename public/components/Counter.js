import { Component, useState } from "@odoo/owl";
import { useCounter } from "../hooks/useCounter";

export class Counter extends Component {
  static template = "Counter";

  setup() {
    this.counter = useCounter(10);
  }

  logCount(message) {
    console.log(`${message}`);
  }
}
