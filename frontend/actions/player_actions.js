export const RECEIVE_WAVESURFER = "RECEIVE_WAVESURFER";
export const REMOVE_WAVESURFER = "REMOVE_WAVESURFER";

export const receiveWavesurfer = (wavesurfer) => ({
  type: RECEIVE_WAVESURFER,
  wavesurfer
});

export const removeWavesurfer = () => ({
  type: REMOVE_WAVESURFER
});
