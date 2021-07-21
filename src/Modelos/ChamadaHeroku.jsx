import react, { Component } from 'react'
import './css/ChamadaHeroku.css'


class ChamadaHeroku extends Component{

    constructor(props){
        super(props)
        this.state= {
            users: []
        }
    }

    componentDidMount(){
        this.loadUsers()
    }

    loadUsers = async () =>{
        const callUsers = await fetch("https://jsonplaceholder.typicode.com/users")

        const usersJson = await callUsers.json()

        this.setState({users: usersJson})
    }

    render(){
        const { users } = this.state
        return (
            <div className= "content">
                {users.map(user => (
                    <div key={user.id} className= "users">
                        <h1>Nome: {user.name}</h1>
                        <h2>Nome de usuário: {user.username}</h2>
                        <h2>Email: {user.email}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default ChamadaHeroku