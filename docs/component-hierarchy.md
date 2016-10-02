## Component Hierarchy

### WelcomeContainer
  * WelcomeHeader
  * WelcomeSidebar
  * Footer

### AuthFormContainer
  * AuthForm  
  
### HomeContainer
  * Header
    * Search
      * SearchResultsDropdown
  * HomeNav
    * UsersIndex
    * TracksIndex
    * PlaylistsIndex
  * Sidebar
  * AudioPlayerContainer

### TracksContainer
  * TracksIndex
  * TrackDetail
  
### UsersContainer
  * UsersIndex
  * UserDetail
  
### PlaylistsContainer
  * PlaylistsIndex
  * PlaylistDetail
  
### SearchResultsContainer
  * SearchResultsNav
    * UserSearchResults
    * PlaylistSearchResults
    * TrackSearchResults
  
### CommentsContainer
  * CommentsIndex
  * CommentForm
  
### TrackShow
  * CommentsContainer

### PlaylistShow
  * CommentsContainer

### UserShow
  * UsersNav
    * TracksContainer
    * PlaylistsContainer

### NewTrackContainer
  * TrackForm
  
### NewPlaylistContainer
  * PlaylistForm
    
## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "WelcomeContainer" |
| "/sign-up | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/tracks" | TracksContainer |
| "/tracks/:track_id" | TrackShow |
| "/users" | UsersContainer |
| "/users/:user_id" | UserShow |
| "/playlists" | PlaylistsContainer |
| "/playlists/:playlist_id" | PlaylistShow |
| "/search-results" | SearchResultsContainer |
| "/new-track" | NewTrackContainer
| "/new-playlist" | NewPlaylistContainer |

  
  


  
 
    

  




    
