import React, { Component } from 'react';

//CSS
import '../../css/ToDoList.css';

export default class ToDoItem extends Component {
  constructor(props) {
    super(props)

    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(id) {
    this.props.removeTask(id);
  }

  render() {
    return(
      <div className="ToDoItem-wrapper">
        <button className="removeTask" onClick={() => {
          this.removeTask(this.props.id)
        }}>Remove</button>{this.props.task.text}
      </div>
    );
  }
}
