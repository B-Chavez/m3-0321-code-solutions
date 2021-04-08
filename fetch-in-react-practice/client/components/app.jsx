import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a PO ST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
   fetch('/api/todos', {
     method: "POST",
    body: JSON.stringify(newTodo),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
   .then(response => response.json())
   .then(todo => {
     const todoCopy = Array.from(this.state.todos);
     todoCopy.push(todo);
     this.setState({todos: todoCopy})
   })
   .then(json => console.log(json))
  }
  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const todoCopy = Array.from(this.state.todos);
    const index = todoCopy.findIndex(e => e.todoId === todoId )
    let completed = todoCopy[index].isCompleted;
    if(todoCopy[index].isCompleted === false){
      todoCopy[index].isCompleted = true;
    } else {
      todoCopy[index].isCompleted = false;
    }
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCompleted: completed}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(this.setState({ todos: todoCopy}))
    .then(json => console.log(json))

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
