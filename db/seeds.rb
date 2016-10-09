# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.new(email: "taylorbherron@gmail.com", password: "password")
user1.update(first_name: "Taylor", last_name: "Herron",
 city: "New York", country: "United States",
  display_name: "Taylor Herron", bio: "I play the saxophone and code stuff.")
user1.profile_picture = File.open('app/assets/images/profile.jpg')
user1.header_background = File.open('app/assets/images/background.jpg')
user1.save

user2 = User.new(email: "paak@paak.com", password: "password", first_name: "Anderson", last_name: ".Paak",
display_name: "Anderson .Paak",
bio: "Brandon Paak Anderson (born February 8, 1986), known professionally as Anderson .Paak, is an American recording artist and music producer from Oxnard, California. He released his debut album, O.B.E. Vol. 1 in 2012, under the pseudonym Breezy Lovejoy. He went on to release Venice in 2014, under his current moniker. Paak followed with Malibu, in 2016.

Apart from his solo career, Paak is also one-half of NxWorries, alongside record producer Knxwledge.")
user2.profile_picture = File.open('app/assets/images/paak-profile.jpg')
user2.header_background = File.open('app/assets/images/paak-header.jpg')
user2.save

user3 = User.new(email: "frank@frank.com", password: "password", first_name: "Frank", last_name: "Ocean",
display_name: "Frank Ocean",
bio: "Christopher Francis \"Frank\" Ocean (born Christopher Edwin Breaux; October 28, 1987), is an American singer, songwriter, and rapper. Known for his idiosyncratic musical style, Ocean first embarked on a career as a ghostwriter, and in 2010 he became a member of hip hop collective Odd Future. He released his breakout mixtape, Nostalgia, Ultra, to critical acclaim in 2011. It generated his first charting single \"Novacane\". In 2012, Ocean finished in second place in BBC's Sound of 2012 poll.

His debut studio album, Channel Orange, was released in July 2012 to critical acclaim and reached No. 2 on the Billboard 200. It was promoted with three singles: \"Thinkin Bout You\", \"Pyramids\" and \"Sweet Life\". In 2016, Ocean released the visual album Endless alongside his second studio album Blonde, following several years of delays. Blonde debuted at number one in the United States and United Kingdom.")

user3.profile_picture = File.open('app/assets/images/frank-profile.jpeg')
user3.header_background = File.open('app/assets/images/frank-header.jpg')
user3.save

track1 = Track.new(user_id: 1, title: "Love Came ft. Riley Mulherkar",
description: "Composed by Billy Strayhorn
Arranged by Taylor Herron
Performed by Riley Mulherkar and Juilliard Strings")
track1.track_file = File.open('app/assets/tracks/01 Love Came, Take 1.mp3')
track1.image = File.open('app/assets/images/strayhorn.jpg')
track1.save

track2 = Track.new(user_id: 2, title: "The Bird", description: "Written By Anderson .Paak
Trumpet: Emile Martinez
Strings: Julian Le
Bass: Kelsey Gonzalez
Piano: Ron Jerome Avant
Guitar: Jose Rios
Release Date: January 15, 2016")
track2.track_file = File.open('app/assets/tracks/01 The Bird 1.mp3')
track2.image = File.open('app/assets/images/malibu.jpeg')
track2.save

track3 = Track.new(user_id: 2, title: "The Waters ft. BJ The Chicago Kid", description: "Written By: BJ The Chicago Kid, Madlib & Anderson .Paak
Guitar: Isaiah Sharkey
Keyboards: Robert Glasper
Drums: Chris Dave
Bass: Pino Palladino
Release Date: January 15, 2016
Interpolates: Jesus Said It by Eddie James")
track3.track_file = File.open('app/assets/tracks/03 The Waters (feat. BJ The Chicago Kid).mp3')
track3.image = File.open('app/assets/images/malibu.jpeg')
track3.save

track4 = Track.new(user_id: 2, title: "Heart Don't Stand a Chance", description: "Written By: Anderson .Paak
Background Vocals: Anderson .Paak
Drums: Anderson .Paak
Guitar: Daniel Seeff
Bass: Daniel Seeff
Keyboards: Sam Barsh
Release Date: January 15, 2016")
track4.track_file = File.open('app/assets/tracks/02 Heart Don\'t Stand a Chance 1.mp3')
track4.image = File.open('app/assets/images/malibu.jpeg')
track4.save

track5 = Track.new(user_id: 2, title: "NxWorries (Anderson .Paak and Knxwledge) - Suede",
description: "Written By: Anderson .Paak & Knxwledge
Release Date: February 10, 2015
Samples: The Bottle by Gil Scott-Heron & Brian Jackson")
track5.track_file = File.open('app/assets/tracks/04 - Suede.mp3')
track5.image = File.open('app/assets/images/nxworries.jpeg')
track5.save

track6 = Track.new(user_id: 1, title: "Soliloquy",
description: "Composed by Taylor Herron

Alto Saxophone: Taylor Herron
Trombone: Peter Nelson
Piano: Steven Feifke
Bass: Devin Starks
Drums: Darrian Douglas
Recorded March 11, 2016 at Riro Muzik, Brookyln, NY
Mixed by Matteo Liberatore
Mastered at Bass Hit Recording, NYC")
track6.track_file = File.open('app/assets/tracks/Soliloquy.mp3')
track6.image = File.open('app/assets/images/profile.jpg')
track6.save

track7 = Track.new(user_id: 1, title: "Duke Ellington's Sound of Love",
description: "Composed by Charles Mingus

Alto Saxophone: Taylor Herron
Vibraphone: Joseph Doubleday")
track7.track_file = File.open('app/assets/tracks/Duke Ellington\'s Sound of Love.mp3')
track7.image = File.open('app/assets/images/profile.jpg')
track7.save

track8 = Track.new(user_id: 1, title: "I Concentrate on You",
description: "Composed by Cole Porter,
Arranged by Taylor Herron

Alto Saxophone and Clarinet: Taylor Herron
Alto Saxophone: Braxton Cook
Tenor Saxophone: Julian Lee
Trombones: Will Hawley and Kyle Johnson,
Trumpets: Noah Halpern, Nate Sparks, and Gabe Medd
Piano: David Linard
Drums: Douglas Marriner
Bass: Russell Hall")
track8.track_file = File.open('app/assets/tracks/I Concentrate on You 1.mp3')
track8.image = File.open('app/assets/images/profile.jpg')
track8.save

track9 = Track.new(user_id: 3, title: "Pink + White",
description: "Written By: Pharrell Williams, Om'Mas Keith & Frank Ocean
Guitar: Brent Paschke
Background Vocals: Beyoncé
Release Date: August 20, 2016")
track9.track_file = File.open('app/assets/tracks/03 Pink + White.m4a')
track9.image = File.open('app/assets/images/blonde.jpg')
track9.save

track10 = Track.new(user_id: 3, title: "Solo",
description: "Written by Frank Ocean
Release Date: August 20, 2016")
track10.track_file = File.open('app/assets/tracks/05 Solo.m4a')
track10.image = File.open('app/assets/images/blonde.jpg')
track10.save

track11 = Track.new(user_id: 3, title: "Super Rich Kids ft. Earl Sweatshirt",
description: "Written By: Frank Ocean and Earl Sweatshirt
Mastered by: Vlado Meller
Release Date: March 11, 2013
Samples: Bennie and the Jets by Elton John
Sampled In: Slumromantiker by L.O.C.
Interpolates: Real Love by Mary J. Blige")
track11.track_file = File.open('app/assets/tracks/07 Super Rich Kids (feat. Earl Sweatshirt).mp3')
track11.image = File.open('app/assets/images/channel-orange.jpg')
track11.save

track12 = Track.new(user_id: 1, title: "Zoetic",
description: "Composed by Peter Nelson

Alto Saxophone: Taylor Herron
Trombone: Peter Nelson
Piano: Steven Feifke
Bass: Devin Starks
Drums: Darrian Douglas
Recorded March 11, 2016 at Riro Muzik, Brookyln, NY
Mixed by Matteo Liberatore
Mastered at Bass Hit Recording, NYC")
track12.track_file = File.open('app/assets/tracks/Zoetic.mp3')
track12.image = File.open('app/assets/images/profile.jpg')
track12.save
