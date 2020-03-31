import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../components/Home"
import Login from "../components/Login"
import Movies from "../components/Movies"




const App = () => {
    return (
      <Router basepath="/app">
        <PrivateRoute path="/" component={Home}></PrivateRoute>
        <PrivateRoute path="/movies" component={Movies}></PrivateRoute>
        <Login path="/login" />    
      </Router>

    )
  }
  export default App