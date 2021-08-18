import MyButton from './UI/button/MyButton'

function Posts(props){
return(
  <div className="post__block">
  <strong className="post__id">{props.index}. {props.post.title}</strong>
  <div className="post__description">{props.post.description}
 </div>
<MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
  </div>
)

}

export default Posts