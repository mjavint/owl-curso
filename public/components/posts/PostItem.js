import { Component, xml } from "@odoo/owl";

export class PostItem extends Component {
  static template = xml`
    <div class="post">
        <h4><t t-esc="props.post.title"/></h4>
        <p><t t-esc="props.post.content"/></p>
        <small>Likes: <t t-esc="props.post.likes"/></small>
        <button t-on-click="incrementLikes">Me gusta</button>
    </div>
    `;

  incrementLikes() {
    this.props.post.likes += 1;
  }
}
