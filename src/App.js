import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";
import { computed, observable } from "mobx";

@observer
class Todo extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={() => (this.props.todo.done = !this.props.todo.done)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

@observer
class Todos extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.appState.todos.map((todo, idx) => <Todo todo={todo} key={idx} />)}</ul>
        Remaining: {this.props.appState.left}
        <button onClick={() => alert("hi")}>Modify stuff</button>
      </div>
    );
  }
}

class State {
  @observable
  todos = [
    {
      title: "Create MobX intro video",
      done: false,
    },
    {
      title: "Take a nap",
      done: true,
    },
  ];

  @computed
  get left() {
    return this.todos.filter(todo => !todo.done).length;
  }
}

class App extends Component {
  constructor() {
    super();
    this.appState = new State();
  }

  render() {
    return <Todos appState={this.appState} />;
  }
}

export default App;
