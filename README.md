# SoundScape

SoundScape is a web application for artists and music fans to discover and share new music. It is inspired by SoundCloud and is built with a Ruby on Rails back end and a React.js/Redux front end, utilizing the wavesurfer.js library for playback and track waveforms.

[SoundScape](www.sound-scape.net)

### Welcome Page

![welcome](https://github.com/gbhmt/SoundScape/blob/master/docs/wireframes/welcome-page-screenshot.jpg)


### Tracks Page 

![tracks-index](https://github.com/gbhmt/SoundScape/blob/master/docs/wireframes/tracks-index-screenshot.jpg)


### User Profile

![user-profile](https://github.com/gbhmt/SoundScape/blob/master/docs/wireframes/user-page-screenshot.jpg)


### Technical Details

The playback is accomplished through the wavesurfer.js library. Upon initialization, a wavesurfer object (consisting of a web audio node and a waveform drawn in Canvas) is created and rendered in a target container. The initial decoding the audio file is considerably slow, so upon initialization, I added the wavesurfer objects to the Redux store, to be remounted to the page when necessary. As this is not a viable long-term solution, I plan on instead implementing a cache, with further plans to decode the audio files server side. 


```

 createWavesurfer () {
      let height;
      let width;
      let visible = true;
      if (this.props.type === "indexItemWave") {
        height = 60;
        width = 618;
      } else if (this.props.type === "trackShowWave"){
        height = 120;
        width = 800;
      } else {
        visible = false;
      }
      const container = document.querySelector(`#waveform-${this.props.track.id}`);
      if (!this.props.wavesurfer) {
        const wavesurfer = WaveSurfer.create({
          container: container,
          cursorWidth: 0,
          maxCanvasWidth: width,
          height: height,
          barWidth: 2,
          waveColor: "#aaa",
          progressColor: "orange",
          pixelRatio: 1,
          visible: visible
        });
        wavesurfer.load(this.props.track.track_file_url);
        wavesurfer.on('ready', () => {
          this.props.receiveWavesurfer(wavesurfer, this.props.track.id);
        });
      } else {
        const wavesurfer = this.props.wavesurfer;
        wavesurfer.visible = visible;
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
  
  
  ```
  
### Features
  
* Customizable user profile pages
* Uploading tracks
* Continous track play, with progress displayed in waveforms and in global player in footer
* Comments on tracks
* Playing track while another track is currently playing queues up previous track for autoplay upon completion


### Future improvements

* Generating waveforms server side
* Playlists
* Likes
* Follow users
