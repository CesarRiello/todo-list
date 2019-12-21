import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Header from 'components/Header'
import { TaskProvider } from 'components/Context'
import Navigation from 'components/Navigation'
import GlobalStyles from 'components/helpers/GlobalStyles'
import { getTasks, getTags } from 'services/api'

import Tags from 'screens/Tags'
import Tasks from 'screens/Tasks'
import TaskEdit from 'screens/TaskEdit'

class App extends Component {
  state = {
    tags: [],
    tasks: [],
    task: {
      id: '',
      name: '',
      isCompleted: false
    },
    error: ''
  }

  toast = error => {
    this.setState({ error })
    setTimeout(this.cleanToast, 5 * 1000)
  }

  cleanToast = () => this.setState({ error: '' })

  setParentState = state => this.setState(state)

  componentDidMount() {
    getTasks(this.setParentState, this.toast)
    getTags(x => {
      console.log(x)
      this.setState(x)
    }, this.toast)
  }

  render() {
    const value = {
      ...this.state,
      setParentState: this.setParentState
    }

    return (
      <Router>
        <Header />
        <GlobalStyles />
        <Navigation>
          <NavLink to="/" activeClassName="selected">
            Tasks
          </NavLink>
          <NavLink to="/edit" activeClassName="selected">
            Task editor
          </NavLink>
          <NavLink to="/tags" activeClassName="selected">
            Tags
          </NavLink>
        </Navigation>

        <TaskProvider value={value}>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>

            <Route path="/edit" render={props => <TaskEdit {...props} />} />

            <Route path="/" render={props => <Tasks history={props.history} />} />
          </Switch>
        </TaskProvider>
      </Router>
    )
  }
}

export default App
