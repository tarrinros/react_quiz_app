import axios from "axios";
const USERS_SECRET = process.env.REACT_APP_AUTH_KEY;

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${USERS_SECRET}`

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${USERS_SECRET}`
    }

    const response = await axios.post(url, authData)
    console.log(response.data)
  }
}