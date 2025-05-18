import { Component, xml, useState } from "@odoo/owl";
import { UserInfo } from "./UserInfo";
import { PostItem } from "../posts/PostItem";

export class UserProfile extends Component {
  static template = xml`
        <div class="card">
            <UserInfo user="state.user"/>

            <h2>Posts Recientes</h2>
            <div t-foreach="state.posts" t-as="post" t-key="post.id">
                <PostItem post="post"/>
            </div>

            <button t-on-click="addRandomPost">Añadir Post</button>
        </div>
    `;

  static components = { UserInfo, PostItem };
  setup() {
    this.state = useState({
      user: {
        name: "Juan Pérez",
        email: "juan@example.com",
        age: 30,
      },
      posts: [
        {
          id: 1,
          title: "Mi primer post",
          content: "Este es el contenido de mi primer post.",
          likes: 5,
        },
        {
          id: 2,
          title: "Actualización importante",
          content: "Aquí hay una actualización sobre mi trabajo.",
          likes: 12,
        },
      ],
    });
  }

  addRandomPost() {
    const newId = this.state.posts.length + 1;
    const titles = [
      "Nuevo post",
      "Otra publicación",
      "Actualización",
      "Pensamientos aleatorios",
    ];
    const contents = [
      "Este es un nuevo contenido generado automáticamente.",
      "Más información interesante para compartir.",
      "Estoy aprendiendo a usar OWL!",
      "Los componentes son geniales para organizar el código.",
    ];

    const newPost = {
      id: newId,
      title: titles[Math.floor(Math.random() * titles.length)],
      content: contents[Math.floor(Math.random() * contents.length)],
      likes: 0,
    };

    this.state.posts.push(newPost);
  }
}
