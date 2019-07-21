import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Settings from './Components/Settings';


class App extends Component {
 
  componentWillMount() {
    //   console.log(this.state.data);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar  bg-primary navbar-dark justify-content-center">
            <div className="container-fluid">
              <div className="navbar-header ">
                <a className="navbar-brand " href="/">Expense Management</a>
              </div>
            </div>
          </nav>
          <div className="container-fluid text-center">
            <div className="row content">
              <div className="col-sm-2 sidenav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Settings">Settings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Profile</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-10 text-left">
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/Settings" component={Settings} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
