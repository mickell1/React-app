import React, { Component } from 'react';

//Components
import ToDoInput from './ToDoList/ToDoInput.jsx';
import ToDoItem from './ToDoList/ToDoItem.jsx';

//CSS
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/ToDoList.css';


 export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      nextId: 0
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(taskText) {
    let tasks = this.state.tasks.slice();
    tasks.push({id: this.state.nextId, text: taskText});
    this.setState({
      tasks: tasks,
      id: ++this.state.nextId
    });
  }

  removeTask(id) {
    console.log('Removing: ', id)
    this.setState({
      tasks: this.state.tasks.filter((task, index) => {
        return task.id !== id;
      })
    })
    console.log('Removed: ', id);
  }


  render() {
    return (
      <div>
        <Image src="assets/task-list-cropped.jpg" className="header-image" />
        <div className="container-fluid">
          <div className="ToDoList">
            <div className="ToDoList-wrapper">
              <h1>Task List</h1>
              <ToDoInput taskText="" addTask={this.addTask}/>
              <ul>
                {
                  this.state.tasks.map((task) => {
                    return <ToDoItem task={task} key={task.id} id={task.id} removeTask={this.removeTask}/>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ToDoList;
