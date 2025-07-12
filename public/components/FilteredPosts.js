import { Component, useEffect, useRef, useState } from "@odoo/owl";

export class FilteredPosts extends Component {
  static template = "FilteredPosts";

  setup() {
    this.state = useState({
      userId: 1,
      posts: [],
      loading: false,
      error: null,
    });

    this.boxRef = useRef("box");

    useEffect(
      () => {
        const fetchPosts = async () => {
          try {
            this.state.loading = true;
            this.state.error = null;
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts?userId=${this.state.userId}`
            );
            if (!response.ok) {
              this.state.error = new Error(
                `HTTP error! status: ${response.status}`
              );
              throw this.state.error;
            }
            const data = await response.json();
            this.state.posts = data;
          } catch (error) {
            this.state.error = error;
          } finally {
            this.state.loading = false;
          }
        };
        fetchPosts();
        console.log(`Fetching posts for userId: ${this.state.userId}`);
      },
      () => [this.state.userId]
    );
  }
  changeUser(increment) {
    this.state.userId = Math.max(1, this.state.userId + increment);
  }
  changeColor() {
    this.state.color = this.state.color === "white" ? "lightblue" : "white";
    this.boxRef.el.style.backgroundColor = this.state.color;
  }
}
