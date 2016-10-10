json.extract! track, :id, :description, :title
json.user_id track.user.id
json.user_display_name track.user.display_name
json.user_profile_picture_url asset_path(track.user.profile_picture.url)
json.image_url asset_path(track.image.url)
json.track_file_url asset_path(track.track_file.url)
json.comments do
  track.comments.each do |comment|
      json.set! comment.id do
       json.partial! '/api/comments/comment.json.jbuilder', comment: comment
     end
  end
end
json.created_at time_ago_in_words(track.created_at)
