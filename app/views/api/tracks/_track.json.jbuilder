json.extract! track, :id, :user_id, :description, :title
json.image_url asset_path(track.image.url)
json.track_file_url asset_path(track.track_file.url)
