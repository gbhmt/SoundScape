export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_SINGLE_USER = "FETCH_SINGLE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS,
});

export const fetchSingleUser = (id) => ({
  type: FETCH_SINGLE_USER,
  id
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveSingleUser = (user) => ({
  type: RECEIVE_SINGLE_USER,
  user
});
