import React from 'react';


class Wavesurfer extends React.Component  {
    componentDidMount () {
      this.createWavesurfer();
    }

    createWavesurfer () {
      let height;
      let width;
      if (this.props.type === "indexItem") {
        height = 60;
        width = 618;
      }
      const container = `#waveform-${this.props.track.id}`;
      const wavesurfer = WaveSurfer.create({
        container: container,
        cursorWidth: 0,
        maxCanvasWidth: width,
        height: height,
        barWidth: 2,
        waveColor: "#ccc",
        progressColor: "orange",
        pixelRatio: 1
      });
      if (!this.props.wavesurfers[this.props.track.id]) {
        wavesurfer.load(this.props.track.track_file_url);
        this.props.receiveWavesurfer(wavesurfer, this.props.track.id);      
      }
    }

    render () {
      return <div id={ "waveform-" + this.props.track.id } className="waveform"></div>;
    }
  }

export default Wavesurfer;
