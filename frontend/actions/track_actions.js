export const FETCH_ALL_TRACKS = "FETCH_ALL_TRACKS";
export const FETCH_SINGLE_TRACK = "FETCH_SINGLE_TRACK";
export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DESTROY_TRACK = "DESTROY_TRACK";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";

export const fetchAllTracks = () => ({
  type: FETCH_ALL_TRACKS
});

export const fetchSingleTrack = (id) => ({
  type: FETCH_SINGLE_TRACK,
  id
});

export const createTrack = (formData) => ({
  type: CREATE_TRACK,
  formData
});

export const updateTrack = (id, formData) => ({
  type: UPDATE_TRACK,
  id,
  formData
});

export const destroyTrack = (id) => ({
  type: DESTROY_TRACK,
  id
});

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveSingleTrack = (track) => ({
  type: RECEIVE_SINGLE_TRACK,
  track
});
