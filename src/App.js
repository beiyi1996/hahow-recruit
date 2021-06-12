import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HeroList from './HeroList'
import HeroProfile from './HeroProfile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/heroes" />
          <Route path="/heroes" exact>
            <HeroList />
          </Route>
          <Route path="/heroes/:heroId">
            <HeroList />
            <HeroProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
