json.tracks @tracks do |track|
  json.partial! 'api/tracks/track', track: track
end
json.extract! @tracks, :current_page, :num_pages
