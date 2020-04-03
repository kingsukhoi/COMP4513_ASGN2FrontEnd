import { getToken } from './auth'

export function getSearchParam(key) {
    let urlString = window.location.href;
    let url = new URL(urlString);
    return url.searchParams.get(key) ? url.searchParams.get(key) : ""; // truthy falsy
}


export const addFavorite = async (favId) => {
    const token = getToken().token;
    console.log(favId);
    var urlencoded = new URLSearchParams();
    urlencoded.append("favId", favId);
    const authUrl = `http://localhost:8080/api/favorites?auth_token=${token}`

    const response = await fetch(authUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlencoded,
    });

    console.log(response);
}

export const queryOptions = {
  allMovies: "http://localhost:8080/api/movies", //"http://localhost:8080/api/movies",
  brief: "http://localhost:8080/api/brief",
  title: "http://localhost:8080/api/find/title/", //Just add :substring
  findYear: "http://localhost:8080/api/find/year/", //just add :low, and :high
  findRating: "http://localhost:8080/api/find/rating/", //just add :low, and :high
  singleMovie: "http://localhost:8080/api/movies/", //just add :id
  favorites: "http://localhost:8080/api/favorites"
};
