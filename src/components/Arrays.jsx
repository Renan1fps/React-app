import react, { Component } from 'react'
import '../App.css'


class Arrays extends Component{

    constructor(props){
        super(props)
        this.state={
            posts:[
            {
                id: 1,
                title: 'title1',
                body: 'body'
            },
            {
                id: 2,
                title: 'title1',
                body: 'body'
            },
            {
                id: 3,
                title: 'title1',
                body: 'body'
            },
        ]
    }
    }

    componentDidMount(){
        //simulando uma requisição de uma API
        const {posts} = this.state
        posts[0].title = 'Novo title'
        setTimeout(()=>{
            this.setState({posts})
        },2000)
    }

    render(){
        const {posts} = this.state
        return <div className='App'>
          {posts.map(post=>(

            <div key={post.id}>
          <h1 >{post.title}</h1>
          <p>{post.body}</p>
            </div>
          )
          )}
        </div>
    }
}

export default Arrays