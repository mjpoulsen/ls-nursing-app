export const SET_USERNAME = 'USERNAME_SIGN_IN';
export const SET_PASSWORD = 'PASSWORD_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';

export function setUsernameInput(username) {
  return (dispatch) => {
    dispatch({
      type: SET_USERNAME,
      username: username
    });
  };
}

export function setPasswordInput(password) {
  return (dispatch) => {
    dispatch({
      type: SET_PASSWORD,
      password: password
    });
  };
}

export function signIn() {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN
    });
  };
}