import { makeAuthUrl } from './auth'

export function getSearchParam(key) {
    let urlString = window.location.href;
    let url = new URL(urlString);
    return url.searchParams.get(key) ? url.searchParams.get(key) : ""; // truthy falsy
}

export const addFavorite = async (favId) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("favId", favId);

    const authUrl = makeAuthUrl(queryOptions.favorites)

    const response = await fetch(authUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlencoded,
    });
}

export const removeFavorite = async (favId) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("favId", favId);
  const authUrl = makeAuthUrl(queryOptions.favorites)

  const response = await fetch(authUrl, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlencoded,
  });
}


export const queryOptions = {
  allMovies: "https://api-asgn2.farsos.ca/api/movies", //"https://api-asgn2.farsos.ca/api/movies",
  brief: "https://api-asgn2.farsos.ca/api/brief",
  title: "https://api-asgn2.farsos.ca/api/find/title/", //Just add :substring
  findYear: "https://api-asgn2.farsos.ca/api/find/year/", //just add :low, and :high
  findRating: "https://api-asgn2.farsos.ca/api/find/rating/", //just add :low, and :high
  singleMovie: "https://api-asgn2.farsos.ca/api/movies/", //just add :id
  favorites: "https://api-asgn2.farsos.ca/api/favorites"
};