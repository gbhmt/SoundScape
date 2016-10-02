# API Endpoints

## HTML API

### Root
  * `GET /` - loads root React component
  
## JSON API

### Users
  * `GET /api/users/:user_id`
  * `GET /api/users`
  * `POST /api/users`

### Session
  * `POST /api/session`
  * `DELETE /api/session`
  
### Tracks
  * `GET /api/tracks`
  * `GET /api/tracks/:track_id`
  * `POST /api/tracks`
  * `PATCH /api/tracks/:track_id`
  * `DELETE /api/tracks/:track_id`
  
### Playlists
  * `GET /api/playlists`
  * `GET /api/playlists/:playlist_id`
  * `POST /api/playlists`
  * `PATCH /api/playlists/:playlist_id`
  * `DELETE /api/playlists/:playlist_id`
  
### Comments
  * `GET /api/playlists/:playlist_id/comments`
  * `GET /api/tracks/:track_id/comments`
  * `POST /api/playlists/:playlist_id/comments`
  * `POST /api/tracks/:track_id/comments`
  * `DELETE /api/playlists/:playlist_id/comments/:comment_id`
  * `DELETE /api/tracks/:track_id/comments/:comment_id`
  
