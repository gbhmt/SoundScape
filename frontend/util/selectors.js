export const eachUserTrack = (tracks) => {
  return Object.keys(tracks).map((key) => {
    return tracks[key];
  });
};
