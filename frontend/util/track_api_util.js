export const fetchAllTracks = (success, error) => {
  return $.ajax({
    method: "GET",
    url: '/api/tracks',
    success,
    error
  });
};

export const fetchSingleTrack = (id, success, error) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${id}`,
    success,
    error
  });
};

export const createTrack = (formData, success, error) => {
  return $.ajax({
    method: "POST",
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: formData,
    success,
    error
  });
};

export const updateTrack = (id, formData, success, error) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${id}`,
    contentType: false,
    processData: false,
    data: formData,
    success,
    error
  });
};

export const destroyTrack = (id, success, error) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${id}`,
    success,
    error
  });
};
