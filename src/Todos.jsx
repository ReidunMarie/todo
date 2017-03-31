import React from 'react'
import Todo from './Todo.jsx'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todos: this.props.todos || [], newTodo: false, title: '', type: '', description: '' }
        this.toggleNewTodo = this.toggleNewTodo.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
    }

    toggleNewTodo() {
        this.setState({ newTodo: !this.state.newTodo })
    }

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleType(e) {
        this.setState({ type: e.target.value })
    }

    handleDescription(e) {
        this.setState({ type: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="new-todo">
                    <i className="fa fa-plus main-color new-todo-btn btn" aria-hidden="true" onClick={this.toggleNewTodo}></i><span> Todo</span>
                    { this.state.newTodo ?
                        <div className="new-todo-inputs">
                            <label className="hidden" htmlFor="title">Title</label>
                            <input className="input" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitle}></input>
                            <label className="hidden" htmlFor="type">Type</label>
                            <input className="input" name="type" placeholder="Type" value={this.state.type} onChange={this.handleType}></input>
                            <label className="hidden" htmlFor="description">Description</label>
                            <input className="input" name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescription}></input>
                            <button className="btn add-btn main-color-bc">Add</button>
                        </div>
                    : null }
                </div>
                <ul className="todos">
                    { this.state.todos.map( (t, index) => <Todo key={index} todo={t} />) }
                </ul>
            </div>
        )
    }
}
export default Todos