// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
   const [posts, setPosts] = useState([
      {
         title: "Js",
         id: 1,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
      {
         title: "Js 2",
         id: 2,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
      {
         title: "Js 3",
         id: 3,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
   ]);

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   };
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
   };
   return (
      <div className="App">
         <PostForm create={createPost} />
         <hr style={{ margin: "15px 0" }} />
         <div>
            <MySelect
               defaultValue="Сортировка"
               options={[
                  { value: "title", name: "По названию" },
                  { value: "description", name: "По описанию" },
               ]}
            />
         </div>
         {posts.length !== 0 ? (
            <PostList
               remove={removePost}
               posts={posts}
               title={"Список постов:"}
            />
         ) : (
            <h1 style={{ textAlign: "center" }}>Список постов пуст!</h1>
         )}
      </div>
   );
}

export default App;
