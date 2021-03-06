import React, { useReducer } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import HeroList from './components/HeroList'
import HeroProfile from './components/HeroProfile'
import NotFound from './components/NotFound'
import SystemError from './components/SystemError'
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
                <Helmet>
                  <title>Hero List Page</title>
                </Helmet>
                <HeroList />
              </Route>
              <Route path="/heroes/:heroId">
                <Helmet>
                  <title>Hero Profile Page</title>
                </Helmet>
                <HeroList />
                <HeroProfile />
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
              <Route path="/500">
                <SystemError />
              </Route>
              <Redirect to="/404" />
            </Switch>
          </div>
        </ContextStore.Provider>
      </ThemeProvider>
    </Router>
  )
}

export default App
