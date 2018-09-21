import React, { Component } from 'react';
import './App.css';
import { Navbar, Sidebar } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
  </div>
);
const Teams = () => (
  <div>
    <h2>Teams</h2>
  </div>
);
const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      showMenu: false
    };
  }
  toggleMenu(e) {
    e.preventDefault();
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar toggleMenu={this.toggleMenu} />
            <Sidebar toggleMenu={this.toggleMenu} showMenu={this.state.showMenu} />
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/teams" component={Teams} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
