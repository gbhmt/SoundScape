export const ADD_WAVESURFER = "ADD_WAVESURFER";
export const REMOVE_WAVESURFER = "REMOVE_WAVESURFER";
export const PLAY_PAUSE = "PLAY_PAUSE";

export const addWavesurfer = (wavesurfer, track) => {
  return {
    type: ADD_WAVESURFER,
    wavesurfer,
    track
  }
};

export const removeWavesurfer = (idx) => ({
  type: REMOVE_WAVESURFER,
  idx
});

export const playPause = () => ({
  type: PLAY_PAUSE
});
