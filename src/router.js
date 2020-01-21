import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as firebase from 'firebase'

import Root from './Pages/Root'
import Admin from './Pages/Admin/Admin'
import Portal from './Pages/Portal/Portal'
import Driver from './Pages/Driver/DriverLogin'

const config = {
  apiKey: "AIzaSyDnnPUgTCAJ1TtUktpWZv4w-kzY-YWH7lE",
  authDomain: "bigm-1575344194069.firebaseapp.com",
  databaseURL: "https://bigm-1575344194069.firebaseio.com",
  projectId: "bigm-1575344194069",
  storageBucket: "bigm-1575344194069.appspot.com",
  messagingSenderId: "44039378379",
  appId: "1:44039378379:web:0c904ca5699149367f924e",
  measurementId: "G-HF59GFVKS2"
}

firebase.initializeApp(config)

class Routes extends Component {
  render() {
    return (
      // <div>
      //   <Root />
      // </div>
      <Router>
        <Switch>
          <Route path='/' exact component={Root} />
          <Route path='/portal' component={Portal} />
          <Route path='/admin' component={Admin} />
          <Route path='/driver' component={Driver} />
        </Switch>
      </Router>
    )
  }
}

export default Routes