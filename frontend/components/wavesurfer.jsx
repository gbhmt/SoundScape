import React from 'react';

class Wavesurfer extends React.Component  {
    constructor(props) {
      super(props);
      this.progress = null;
    }

    componentDidMount () {
      this.createWavesurfer();
    }

    createWavesurfer () {
      let height;
      let width;
      if (this.props.type === "indexItemWave") {
        height = 60;
        width = 618;
      } else {
        height = 120;
        width = 800;
      }
      const container = document.querySelector(`#waveform-${this.props.track.id}`);
      if (!this.props.wavesurfers[this.props.track.id]) {
        const wavesurfer = WaveSurfer.create({
          container: container,
          cursorWidth: 0,
          maxCanvasWidth: width,
          height: height,
          barWidth: 2,
          waveColor: "#aaa",
          progressColor: "orange",
          pixelRatio: 1
        });
        wavesurfer.load(this.props.track.track_file_url);
        this.props.receiveWavesurfer(wavesurfer, this.props.track.id);
      } else {
        const wavesurfer = this.props.wavesurfers[this.props.track.id];
        wavesurfer.params.height = height;
        wavesurfer.container = container;
        wavesurfer.createDrawer();
        wavesurfer.drawBuffer();
        wavesurfer.seekTo(wavesurfer.getCurrentTime() / wavesurfer.getDuration());
      }
    }

    render () {
      return <div id={ "waveform-" + this.props.track.id } className={ this.props.type }></div>;
    }
  }

export default Wavesurfer;
