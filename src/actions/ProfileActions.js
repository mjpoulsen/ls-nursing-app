export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SET_PASSWORD_INPUT = 'SET_PASSWORD_INPUT';
export const SET_CONFIRM_PASSWORD_INPUT = 'SET_CONFIRM_PASSWORD_INPUT';
export const SIGNED_OUT_PROFILE = 'SIGNED_OUT_PROFILE';

export function changePassword() {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PASSWORD
    });
  };
}

export function setPasswordInput(password) {
  return (dispatch) => {
    dispatch({
      type: SET_PASSWORD_INPUT,
      password: password
    });
  };
}

export function setConfirmPasswordInput(confirmPassword) {
  return (dispatch) => {
    dispatch({
      type: SET_CONFIRM_PASSWORD_INPUT,
      confirmPassword: confirmPassword
    });
  };
}

export function signedOutProfile() {
  return (dispatch) => {
    dispatch({
      type: SIGNED_OUT_PROFILE
    });
  };
}