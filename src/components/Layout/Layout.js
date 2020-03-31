import React from "react"


import NavBar from "../NavBar"
import FavoritesBar from "../FavoritesBar"

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <FavoritesBar/>
    <main >{children}</main>
  </div>
)

export default Layout