import React from 'react';
import User from './User.jsx';
import './Style.css'; 
import axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
        this.getUsers = this.getUsers.bind(this)
    }

    
    getUsers() {
        // Må ha en metode som henter alle Users fra databasen

        this.setState({users: this.props.users})
    }

    componentDidMount() {
        axios.get('../users.json')
            .then((response) => {
                if (!this.state.users.length) this.setState({users: response.data.users})
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('localhost:3000/api/products')
            .then((response) => {
                console.log("products: ", response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="users">
                {this.state.users.map((u, index) => <User key={index} user={u}/>)}
            </div>
        )
    }
}
export default Users