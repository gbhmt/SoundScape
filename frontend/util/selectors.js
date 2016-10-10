export const allComments = (comments) => {
  return Object.keys(comments).map((key) => {
    return comments[key];
  }).reverse();
};

export const allTracks = (tracks) => {
  return Object.keys(tracks).map((key) => {
    return tracks[key];
  }).reverse();
};
