export const RECEIVE_WAVESURFER = "RECEIVE_WAVESURFER";
export const DESTROY_WAVESURFER = "DESTROY_WAVESURFER";

export const receiveWavesurfer = (wavesurfer, trackId) => ({
  type: RECEIVE_WAVESURFER,
  wavesurfer,
  trackId
});

export const destroyWavesurfer = (trackId) => ({
  type: DESTROY_WAVESURFER,
  trackId
});
