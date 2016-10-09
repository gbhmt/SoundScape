json.extract! user, :id, :email, :first_name, :last_name, :city, :country, :display_name, :bio
json.profile_picture_url asset_path(user.profile_picture.url)
json.header_background_url asset_path(user.header_background.url)
json.tracks do
  user.tracks.each do
     |track| json.set! track.id do
       json.partial! '/api/tracks/track.json.jbuilder', track: track
     end
  end
end
# json.tracks Hash[user.tracks.map { |track| json.set! track.id {json.partial! '/api/tracks/track.json.jbuilder', track: track} }],
