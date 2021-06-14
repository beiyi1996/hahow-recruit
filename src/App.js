import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import HeroList from './HeroList'
import HeroProfile from './HeroProfile'
import NotFound from './NotFound'
import SystemError from './SystemError'
import { APIErrorInitState, APIErrorReducer, ContextStore } from './store/contextStore'
import './App.css'

function App() {
  const [APIError, APIErrorDispatch] = useReducer(APIErrorReducer, APIErrorInitState)

  return (
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <ContextStore.Provider value={{ APIError: APIError, APIErrorDispatch: APIErrorDispatch }}>
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
              <Route path="/404">
                <NotFound />
              </Route>
              <Route path="/500">
                <SystemError />
              </Route>
            </Switch>
          </div>
        </ContextStore.Provider>
      </ThemeProvider>
    </Router>
  )
}

export default App
