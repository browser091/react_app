import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";

function App() {
   const [posts, setPosts] = useState([
      {
         titel: "Js",
         id: 1,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
      {
         titel: "Js 2",
         id: 2,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
      {
         titel: "Js 3",
         id: 3,
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi totam laudantium doloribus laborum dignissimos, mollitia quo iste",
      },
   ]);
   return (
      <div className="App">
         <PostList posts={posts} title={"Список 1"} />
      </div>
   );
}

export default App;
