import React from 'react';
import Todos from './Todos.jsx';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: this.props.user.name || '', mail: this.props.user.mail || '', todos: this.props.user.todos || [], todo: false }
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleTodo() {
        this.setState({ todo: !this.state.todo })
    }

    render() {
        return (
            <div className="user">
                {this.state.name} <i className="fa fa-list-ul main-color btn" aria-hidden="true" onClick={this.toggleTodo}></i><br/>
                <p className="mail"><i className="fa fa-envelope-o" aria-hidden="true"></i> {this.state.mail}</p>
                {this.state.todo ? 
                    <Todos todos={this.state.todos} />
                : null }
            </div>
        )
    }
}
export default User