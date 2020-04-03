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