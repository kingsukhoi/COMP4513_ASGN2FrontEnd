import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../components/Home"
import Login from "../components/Login"




const App = () => {
    return (
      <Router basepath="/app">
        <PrivateRoute path="/home" component={Home}></PrivateRoute>
        <Login path="/login" />
        <Login path="/" />
      </Router>

    )
  }
  export default App