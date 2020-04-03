import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../components/Home"
import Login from "../components/Login"
import Movies from "../components/Movies"
import Details from '../components/Details'




const App = () => {
    return (
      <Router basepath="/app">
        <PrivateRoute path="/" component={Home}></PrivateRoute>
        <PrivateRoute path="/movies" component={Movies}></PrivateRoute>
        <PrivateRoute path="/details" component={Details}></PrivateRoute>
        <Login path="/login" />    
      </Router>

    )
  }
  export default App