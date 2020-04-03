import React, { useState, useEffect } from "react";
import { getToken } from '../../services/auth';

import NavBar from "../NavBar";
import FavoritesBar from "../FavoritesBar";

const Layout = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect( () => {
    async function getFavorites() {
        const token = getToken().token;
        const authUrl = `http://localhost:8080/api/favorites?auth_token=${token}`
        
        let userFavorites = [];
        let responce = await fetch(authUrl);
        let retrievedFavorites = await responce.json();
        userFavorites.push(retrievedFavorites);
        
        setFavorites(userFavorites);
    }
    getFavorites();
  }, []);

  return (
    <div>
      <NavBar />
      <FavoritesBar favorites={favorites}/>
      <main >{children}</main>
    </div>
  );
}

export default Layout