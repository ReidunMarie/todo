import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: this.props.todo.title || '', description: this.props.todo.description || '', type: this.props.todo.type || '' }
    }

    render() {
        console.log("this.props: todo", this.props)
        return (
            <li className="todo">
                {this.state.title} <span className="small-font">({this.state.type})</span><br />
                {this.state.description}
            </li>
        )
    }
}
export default Todo