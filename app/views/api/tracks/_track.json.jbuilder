json.extract! track, :id, :description, :title
json.user_id track.user.id
json.user_display_name track.user.display_name
json.user_profile_picture_url asset_path(track.user.profile_picture.url)
json.image_url asset_path(track.image.url)
json.track_file_url asset_path(track.track_file.url)
json.created_at time_ago_in_words(track.created_at)
