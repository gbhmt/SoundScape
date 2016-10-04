export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = (user) => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
