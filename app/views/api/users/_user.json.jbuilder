json.extract! user, :id, :email, :first_name, :last_name, :city, :country, :display_name, :bio
json.profile_picture_url asset_path(user.profile_picture.url)
json.header_background_url asset_path(user.header_background.url)
json.tracks do
  user.tracks.each do |track|
      json.set! track.id do
       json.partial! '/api/tracks/track.json.jbuilder', track: track
     end
  end
end
json.comments do
  user.comments.each do |comment|
      json.set! comment.id do
       json.partial! '/api/comments/comment.json.jbuilder', comment: comment
     end
  end
end
