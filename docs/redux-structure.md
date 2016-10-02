# Redux Structure

## Auth Cycles
### Session API Request Actions
* `login`
  1. invoked from `AuthForm` `onSubmit`
  2. `POST /api/session` is called
  3. `receiveCurrentUser` is set as the success callback
* `logout`
  1. invoked from `Navbar` onClick
  2. `DELETE /api/session` is called
  3. `sessionReducer` sets state's `currentUser` to `null`
* `signup`
  1. invoked from `AuthForm` `onSubmit`
  2. `POST /api/users` is called
  3. `receiveCurrentUser` is set as the success callback

### Session API Response Actions
* `receiveCurrentUser`
  1. invoked from API callback
  2. `sessionReducer` updates `currentUser` in application's state


## Error Cycles
### Error API Response Actions
* `setErrors`
  1. invoked from API callbacks for actions resulting in unsuccessful POST requests
  2. `errorsReducer` updates `errors` in application's state
* `clearErrors`
  1. invoked from API callbacks for actions resulting in successful POST requests
  2. `errorsReducer` clears `errors` in application's state


## User Cycles
### User API Request Actions
* `fetchAllUsers`
  1. invoked from `UsersIndex` `didMount`
  2. `GET /api/users` is called
  3. `receiveAllUsers` is set as success callback
* `fetchSingleUser`
  1. invoked from `UserShow` `didMount`
  2. `GET /api/users/:id` is called
  3. `receiveSingleUser` is set as success callback

### User API Response Actions
* `receiveAllUsers`
  1. invoked from API callback
  2. `usersReducer` updates `users` in application's state
* `receiveSingleUser`
  1. invoked from API callback
  2. `usersReducer` updates `users[id]` in application's state


## Track Cycles
### Track API Request Actions
* `fetchAllTracks`
  1. invoked from `TracksIndex` `didMount`
  2. `GET /api/tracks` is called
  3. `receiveAllTracks` is set as success callback
* `fetchSingleTrack`
  1. invoked from `TrackShow` `didMount`
  2. `GET /api/tracks/:id` is called
  3. `receiveSingleTrack` is set as success callback
* `createTrack`
  1. invoked from `TrackForm` `onSubmit`
  2. `POST /api/tracks` is called
  3. `receiveSingleTrack` is set as success callback
* `updateTrack`
  1. invoked from `TrackForm` `onSubmit`
  2. `PATCH /api/tracks/:id` is called
  3. `receiveSingleTrack` is set as success callback
* `destroyTrack`
  1. invoked from delete track button `onClick`
  2. `DELETE /api/tracks/:id` is called
  3. `removeTrack` is set as success callback


### Track API Response Actions
* `receiveAllTracks`
  1. invoked from API callback
  2. `tracksReducer` updates `tracks` in application's state
* `receiveSingleTrack`
  1. invoked from API callback
  2. `tracksReducer` updates `tracks[id]` in application's state
* `removeTrack`
  1. invoked from API callback
  2. `tracksReducer` removes `tracks[id]` from application's state


## Playlist Cycles
### Playlist API Request Actions
* `fetchAllPlaylists`
  1. invoked from `PlaylistsIndex` `didMount`
  2. `GET /api/playlists` is called
  3. `receiveAllPlaylists` is set as success callback
* `fetchSinglePlaylist`
  1. invoked from `TrackShow` `didMount`
  2. `GET /api/playlists/:id` is called
  3. `receiveSinglePlaylist` is set as success callback
* `createPlaylist`
  1. invoked from `PlaylistForm` `onSubmit`
  2. `POST /api/playlists` is called
  3. `receiveSinglePlaylist` is set as success callback
* `updatePlaylist`
  1. invoked from `PlaylistForm` `onSubmit`
  2. `PATCH /api/playlists/:id` is called
  3. `receiveSinglePlaylist` is set as success callback
* `destroyPlaylist`
  1. invoked from delete playlist button `onClick`
  2. `DELETE /api/playlists/:id` is called
  3. `removePlaylist` is set as success callback


### Playlist API Response Actions
* `receiveAllPlaylists`
  1. invoked from API callback
  2. `playlistsReducer` updates `playlists` in application's state
* `receiveSinglePlaylist`
  1. invoked from API callback
  2. `playlistsReducer` updates `playlists[id]` in application's state
* `removePlaylist`
  1. invoked from API callback
  2. `playlistsReducer` removes `playlists[id]` from application's state
  
## Playlist Add Cycles
### Playlist API Request Actions
* `createPlaylistAdd`
  1. invoked from add track to playlist button `onClick`
  2. `POST /api/playlist_adds` is called
  3. `receivePlaylistAdd` is set as success callback
* `removePlaylistAdd`
  1. invoked from remove track from playlist button `onClick`
  2. `DELETE /api/playlist_adds/id` is called
  3. `removePlaylistAdd` is set as success callback
  
### Playlist API Response Actions
* `receivePlaylistAdd`
  1. invoked from API callback
  2. `playlistAddsReducer` updates `playlists[id][playlist_tracks][id]` in application's state
  3. `playlistAddsReducer` updates `tracks[id][playlist_adds][id]` in application's state
* `removePlaylistAdd`
  1. invoked from API callback
  2. `playlistAddsReducer` removes `playlists[id][playlist_tracks][id]` from application's state
  3. `playlistAddsReducer` removes `tracks[id][playlist_adds][id]` from application's state


## Comment Cycles
### Comment API Request Actions
* `receiveAllComments`
  1. invoked from `TrackShow` `didMount` or `PlaylistShow` `didMount`
  2. `GET /api/playlists/:playlist_id/comments` or `GET /api/tracks/:track_id/comments` is called
  3. `receiveAllComments` is set as success callback
* `destroyComment`
  1. invoked from delete comment button `onClick`
  2. `DELETE /api/playlists/:playlist_id/comments/:id` or `DELETE /api/tracks/:track_id/comments/:id` is called
  3. `removeComment` is set as success callback

### Comment API Response Actions
* `receiveAllComments`
  1. invoked from API callback
  2. `commentsReducer` updates `comments` in application's state
* `removeComment`
  1. invoked from API callback
  2. `commentsReducer` removes `comments[id]` from application's state


## Search Cycles
### Search API Request Actions
* `fetchSearchResults`
  1. invoked from `Search` `onChange` when field has text
  2. `GET /api/tracks`, `GET /api/playlists`, and `GET /api/users` are called with title, title, and username params, respectively
  3. `receiveSearchResults` is set as success callback

### Search API Response Actions
* `receiveSearchResults`
  1. invoked from API callback
  2. `searchReducer` updates `searchResults[tracks]`, `searchResults[playlists]`, and `searchResults[users]` in application's state
* `clearSearchResults`
  1. invoked from `Search` `onChange` when field is empty
  2. `searchReducer` clears `searchResults`
