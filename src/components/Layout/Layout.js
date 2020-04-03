import React, { useState, useEffect } from "react";
import { Affix } from 'antd';
import NavBar from "./NavBar";
import FavoritesBar from "./FavoritesBar";
import { makeAuthUrl } from '../../services/auth'
import { queryOptions } from '../../services/helper'

const Layout = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect( () => {
    async function getFavorites() {
        const authUrl = makeAuthUrl(queryOptions.favorites);
        
        let userFavorites = [];
        let favoriteIds = []
        let responce = await fetch(authUrl);
        let retrievedFavorites = await responce.json();
        favoriteIds.push(retrievedFavorites);
        
        favoriteIds.forEach(id => {
          console.log(userFavorites.includes(id));
        });
        setFavorites(userFavorites);
    }
    getFavorites();
  }, []);

  return (
    <div>
      <Affix offsetTop={0} >
        <NavBar />
        <FavoritesBar favorites={favorites}/>
      </Affix>
      <main >{children}</main>
    </div>
  );
}

export default Layout