export const RECEIVE_WAVESURFER = "RECEIVE_WAVESURFER";

export const receiveWavesurfer = (wavesurfer, trackId) => ({
  type: RECEIVE_WAVESURFER,
  wavesurfer,
  trackId
});
