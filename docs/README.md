# SoundScape

[Link to project on Heroku](http://herokuapp.com)

## Minimum Viable Product

SoundScape is a web application inspired by SoundCloud built using Ruby on Rails with React and Redux. By the end of Week 9, this app will satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and quality CSS styling:

* Hosting on Heroku
* Account creation and login, including a demo login and user profile pages
* Tracks, with continuous play while browsing
* Playlists
* Comments
* Search
* Production README

## Design Docs

* [View Wireframes](https://github.com/gbhmt/SoundScape/tree/master/docs/wireframes)
* [React Components](https://github.com/gbhmt/SoundScape/blob/master/docs/component-hierarchy.md)
* [API Endpoints](https://github.com/gbhmt/SoundScape/blob/master/docs/api-endpoints.md)
* [DB Schema](https://github.com/gbhmt/SoundScape/blob/master/docs/schema.md)
* [Redux Structure](https://github.com/gbhmt/SoundScape/blob/master/docs/redux-structure.md)
* [Sample State](https://github.com/gbhmt/SoundScape/blob/master/docs/sample-state.md)

## Implementation Timeline

### Phase 1: Set up back end and front end user authentication, user display (2 days)
**Objective:** Functioning rails app with authentication
* New rails project
* `User` model, migration, controller
* jBuilder view for users
* Back end authentication
* `StaticPages` controller and root view 
* Install React/Redux dependencies
* Webpack javascript files
* API util file for user/session database interactions
* Redux cycle for front end authentication
* Create login/login success components
* Style login components
* Seed users
* User components and Redux cycle
 * `UsersIndex`
 * `UserIndexItem`
 * `UserShow`
 * `UserNav`
* Style users components


### Phase 2: Tracks Model, API, and components (2 days)
**Objective:** Tracks can be uploaded, viewed, updated, and deleted through API, will continuously play while browsing
* `Track` model
* Sample seed data for testing
* CRUD API through `TracksController`
* jBuilder views for tracks
* Track components and Redux cycle
  * `TracksIndex`
  * `TrackIndexItem`
  * `TrackForm`
* Style tracks components
* `AudioPlayer` component and Redux cycle (using `<audio>` HTML5 element)
* Style audio player component
* Seed tracks

### Phase 3: Playlists model, API, and components (2 days)
**Objective:** Tracks belong to many playlists that can be uploaded, viewed, updated, and deleted through API
* `Playlist` model, `PlaylistAdd` join table
* Sample seed data for testing
* CRUD API through `PlaylistsController`
* jBuilder views for playlists
* Playlist components and Redux cycle
  * `PlaylistsIndex`
  * `PlaylistIndexItem`
  * `PlaylistForm`
* Style playlists components
* CRUD API through `PlaylistAddsController`
* Seed playlists

### Phase 4: Comments model, API, and components (2 days)
**Objective:** Tracks and playlists have comments than can be created and deleted through API
* `Comment` model (polymorphic)
* Sample comment data for testing
* CRUD API through `CommentsController`
* jBuilder views for comments
* Comment components and Redux cycle
  * `CommentIndex`
  * `CommentIndexItem`
  * `CommentForm`
* Style comment components according to context
* Seed comments (for all applicable parents)


### Phase 5: Search function (2 days)
**Objective:** Search bar in parent element that can search by song, playlist, or user
* Search component and Redux cycle
* Displays results for each results field in dropdown on search field entry
* Style search bar and results dropdown

### Bonus features (TBD)
* Tags
* Pagination of songs and playlists
* Waveforms
* Comment overlay on waveform with popout display of comments while listening or hovering
* Likes






