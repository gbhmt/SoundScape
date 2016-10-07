# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.new(email: "taylorbherron@gmail.com", password: "password")
user1.update(first_name: "Taylor",
 city: "New York", country: "United States",
  display_name: "Taylor Herron", bio: "I play the saxophone and code stuff.")
user1.profile_picture = File.open('app/assets/images/profile.jpg')
user1.header_background = File.open('app/assets/images/background.jpg')
user1.save

track1 = Track.new(user_id: 1, title: "Love Came ft. Riley Mulherkar",
description: "Composed by Billy Strayhorn
Arranged by Taylor Herron
Performed by Riley Mulherkar and Juilliard Strings")
track1.track_file = File.open('app/assets/tracks/01 Love Came, Take 1.mp3')
track1.save
