```js

{
  currentUser: {
    id: 1,
    username: "taylorbherron"
  },
  errors: ["username can't be blank"],
  users: {
    1: {
      username: "taylorbherron"
    }
  },
  tracks: {
    1: {
      title: "Sample Track",
      description: "Track for sample state",
      track_url: "www.sampleurl.com/track",
      track_img_url: "www.sampleurl.com/track_img",
      user_id: 1,
      playlist_adds: {
        1: {
          id: 1,
          title: "Sample playlist"
        }
      }
    }
  },
  playlists: {
    1: {
      title: "Sample playlist",
      description: "Playlist for sample state",
      playlist_img_url: "www.sampleurl.com/playlist_img",
      user_id: 1,
      playlist_tracks: {
        1: {
          id: 1,
          title: "Sample Track"
        }
      }
    }
  },
  currentTracks: {
    1: {
      title: "Sample Track",
      track_url: "www.sampleurl.com/track",
      track_img_url: "www.sampleurl.com/track_img"
    }
  },
  comments: {
    track_comments: {
      1: {
        track_id: 1,
        user_id: 1,
        body: "This is a track comment"
      }
    }, 
    playlist_comments: {
      1: {
        playlist_id: 1,
        user_id: 1,
        body: "This is a playlist comment"
      }
    }
  }
}
  
