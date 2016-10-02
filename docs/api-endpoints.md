# API Endpoints

## HTML API

### Root
  * `GET /` - loads root React component
  
## JSON API

### Users
  * `GET /api/users/:id`
  * `GET /api/users`
  * `POST /api/users`

### Session
  * `POST /api/session`
  * `DELETE /api/session`
  
### Tracks
  * `GET /api/tracks`
  * `GET /api/tracks/:id`
  * `POST /api/tracks`
  * `PATCH /api/tracks/:id`
  * `DELETE /api/tracks/:id`
  
### Playlists
  * `GET /api/playlists`
  * `GET /api/playlists/:id`
  * `POST /api/playlists`
  * `PATCH /api/playlists/:id`
  * `DELETE /api/playlists/:id`
  
### Playlist Adds
  * `POST /api/playlist_adds`
  * `DELETE /api/playlist_adds/:id`
  
### Comments
  * `GET /api/playlists/:playlist_id/comments`
  * `GET /api/tracks/:track_id/comments`
  * `POST /api/playlists/:playlist_id/comments`
  * `POST /api/tracks/:track_id/comments`
  * `DELETE /api/playlists/:playlist_id/comments/:id`
  * `DELETE /api/tracks/:track_id/comments/:id`
  
