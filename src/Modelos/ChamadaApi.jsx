import react from 'react'
import { Component } from "react";
import './css/Chamada.css'
import Posts from '../components/Post';


class ChamadaApi extends Component {

    constructor(props){
        super(props)
        this.state={
            posts: []
        }
    }

    componentDidMount(){
        this.loadPosts()
        
    }

    loadPosts = async () => {
     const responsePosts = fetch("https://jsonplaceholder.typicode.com/posts");

     const fotosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

     const [posts, fotos] = await Promise.all([responsePosts, fotosResponse]);
     const postsJson = await posts.json()
     const fotosJson = await fotos.json()

     const postsAndPhotos = postsJson.map((post, index)=>{
         return {...post, cover: fotosJson[index].url}
     })
     this.setState({posts: postsAndPhotos})
    }

render(){
    const { posts }= this.state

    return(
         <section className= "container">
           <div className= "posts">
           <Posts post={posts} />
          </div>
         </section>
        
    )
}

}

export default ChamadaApi