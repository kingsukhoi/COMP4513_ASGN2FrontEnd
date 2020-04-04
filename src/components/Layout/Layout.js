import React, { useState, useEffect } from "react";
import { Affix } from 'antd';
import NavBar from "./NavBar";
import FavoritesBar from "./FavoritesBar";
import { makeAuthUrl } from '../../services/auth'
import { queryOptions, removeFavorite } from '../../services/helper'

const Layout = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect( () => {
    async function getFavorites() {
        const authUrl = makeAuthUrl(queryOptions.favorites);
        const movieUrl = makeAuthUrl(queryOptions.brief);
        let userFavorites = [];
        let response = await fetch(authUrl);
        let retrievedFavorites = await response.json();
      
        let movieResponse = await fetch(movieUrl);
        let retrievedMovies = await movieResponse.json();

        retrievedFavorites.favorites.forEach(favId => {
          userFavorites.push(retrievedMovies.find(({id}) => id === favId));
        });
        setFavorites(userFavorites);
    }
    getFavorites();
  }, []);

  const removeFav = (favId) => {
    removeFavorite(favId);
    let filterFav = favorites.filter(({id}) => id !== favId);
    setFavorites(filterFav);
  };

  return (
    <div>
      <Affix offsetTop={0} >
        <NavBar />
        <FavoritesBar favorites={favorites} removeFav={removeFav} />
      </Affix>
      <main >{children}</main>
    </div>
  );
}

export default Layout