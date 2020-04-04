import { navigate } from 'gatsby';
export const isBrowser = () => typeof window !== "undefined"

export const getToken = () =>
  isBrowser() && window.localStorage.getItem("token")
    ? JSON.parse(window.localStorage.getItem("token"))
    : {}

const setToken = token =>
  window.localStorage.setItem("token", JSON.stringify(token))

export const handleLogin = async (values) => {
    try {
        const response = await fetch(`https://api-asgn2.farsos.ca/api/login`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        });
        const status = await response.status;

        const userData = await response.json();

        if( userData && status !== 401) {
          return setToken(userData);
        }
        
        
      } catch(e) {
        console.log(e);
      }

  return false
}

export const isLoggedIn = () => {
  const token = getToken();
  return Object.entries(token).length !==0
}

export const logout = () => {
  setToken({});
  navigate('/app/login/');
}

export const makeAuthUrl = (url) => {
    const authToken = getToken().token;
    return `${url}?auth_token=${authToken}`
};