import React from "react"
import { Router} from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"

import AuthenticationController from "../components/Landing/AuthenticationController"
import Home from "../components/Home/Home"
import Movies from "../components/Movies"
import Details from '../components/Details'
import '../style/Global.css'



const App = () => {
    return (
      <Router basepath="/app">
        <PrivateRoute path="/" component={Home}/>
        <PrivateRoute path="/movies" component={Movies}/>
        <PrivateRoute path="/details" component={Details}/>
        <AuthenticationController path="/login"/>
      </Router>
    )
  }
  export default App
