

function Posts(props){
return(
  <div className="post__block">
  <strong className="post__id">{props.post.id}. {props.post.titel}</strong>
  <div className="post__description">{props.post.description}
 </div>
<button>Delete</button>
  </div>
)

}

export default Posts