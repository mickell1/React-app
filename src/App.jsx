import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import ToDoList from './components/ToDoList';
import MeetTheTeam from './components/MeetTheTeam';
import ClubSkills from './components/ClubSkills';
import Contact from './components/Contact';
import Navbar from './components/customNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/todolist" component={ToDoList} />
          <Route path="/meettheteam" component={MeetTheTeam} />
          <Route path="/clubskills" component={ClubSkills} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
