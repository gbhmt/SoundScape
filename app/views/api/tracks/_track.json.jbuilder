json.extract! track, :id, :user, :description, :title
json.image_url asset_path(track.image.url)
json.track_file_url asset_path(track.track_file.url)
json.created_at time_ago_in_words(track.created_at)
