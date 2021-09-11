 import '../Modelos/css/Chamada.css'
export default function Posts(props){

  return(
    <div>
      {props.post.map(post=> (
                <div className= "post">
                    <img src={post.cover} alt= {post.title}/>
                    <div key={post.id} className= "post-content">
                      <h1>{post.title}</h1>
                      <p>{post.body}</p>
                   </div>
                </div>
                ))}
    </div>
  )
}