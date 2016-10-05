json.extract! user, :id, :email, :first_name, :last_name, :city, :country, :display_name
json.profile_picture_url asset_path(user.profile_picture.url)
json.header_background_url asset_path(user.header_background.url)
