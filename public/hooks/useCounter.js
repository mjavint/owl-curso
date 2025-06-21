import { Component, useComponent, useState } from "@odoo/owl";

export function useCounter(initialValue = 0) {
  const component = useComponent();
  const state = useState({ count: initialValue });

  function increment() {
    state.count++;
    component.logCount(`Counter incremented to ${state.count}`);
  }

  function decrement() {
    state.count--;
    component.logCount(`Counter decremented to ${state.count}`);
  }

  return {
    get count() {
      return state.count;
    },
    increment,
    decrement,
  };
}
