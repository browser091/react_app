import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput';

const PostForm=({create})=>{
  const [post, setPost] = useState({ title: "", description: "" });
const addNewPost = (e) => {
      e.preventDefault();
const newPost={
  ...post, id:Date.now()
}
create(newPost)
      
      setPost({ title: "", description: "" });
      
   };



  return(
     <form>
            <MyInput
               placeholder="title"
               value={post.title}
               onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
               placeholder="description"
               value={post.description}
               onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
               }
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
         </form>
  )
}
export default PostForm