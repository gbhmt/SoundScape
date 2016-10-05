export const fetchAllUsers = (success, error) => {
  return $.ajax({
    method: "GET",
    url: '/api/users',
    success,
    error
  });
};

export const fetchSingleUser = (id, success, error) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
    success,
    error
  });
};

export const updateUser = (id, formData, success, error) => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData,
    success,
    error
  });
};
