export const isBrowser = () => typeof window !== "undefined"

export const getToken = () =>
  isBrowser() && window.localStorage.getItem("token")
    ? JSON.parse(window.localStorage.getItem("token"))
    : false

const setToken = token =>
  window.localStorage.setItem("token", JSON.stringify(token))

export const handleLogin = async (values) => {
    try {
        const response = await fetch(`http://localhost:8080/api/login`, {
          method: 'POST',
          // mode: 'cors',
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
  return !!token
}

export const logout = callback => {
  setToken({})
  callback()
}