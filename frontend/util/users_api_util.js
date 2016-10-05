export const fetchAllUsers = (success, error) => {
  $.ajax({
    method: "GET",
    url: '/api/users',
    success,
    error
  });
};

export const fetchSingleUser = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
    success,
    error
  });
};

export const updateUser = (user, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user },
    success,
    error
  });
};
