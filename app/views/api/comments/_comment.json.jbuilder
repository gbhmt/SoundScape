json.extract! comment, :id, :body
json.author_profile_picture_url comment.author.profile_picture.url
json.author_display_name comment.author.display_name
json.created_at time_ago_in_words(comment.created_at)
