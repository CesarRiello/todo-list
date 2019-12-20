import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
  state = {
    tags: [],
    tasks: [],
    task: {
      id: '',
      name: '',
      completed: false
    }
  }

  setParentState = state => this.setState(state)

  render() {
    const value = {
      ...this.state,
      setParentState: this.setParentState
    }

    return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="selected">
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit" activeClassName="selected">
                Task editor
              </NavLink>
            </li>
            <li>
              <NavLink to="/tags" activeClassName="selected">
                Tags
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" render={props => <p>tasks</p>} />

          <Route path="/edit" render={props => <p>task edit</p>} />

          <Route path="/tags">Tags</Route>
        </Switch>
      </Router>
    )
  }
}

export default App
