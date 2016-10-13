# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# USERS

User.destroy_all

user1 = User.new(email: "taylorbherron@gmail.com", password: "password")
user1.update(first_name: "Taylor", last_name: "Herron",
 city: "New York", country: "United States",
  display_name: "Taylor Herron", bio: "I play the saxophone and code stuff.")
user1.profile_picture = File.open('app/assets/images/profile.jpg')
user1.header_background = File.open('app/assets/images/background.jpg')
user1.save!

user2 = User.new(email: "paak@paak.com", password: "password", first_name: "Anderson", last_name: ".Paak",
display_name: "Anderson .Paak", city: "Los Angeles", country: "United States",
bio: "Brandon Paak Anderson (born February 8, 1986), known professionally as Anderson .Paak, is an American recording artist and music producer from Oxnard, California. He released his debut album, O.B.E. Vol. 1 in 2012, under the pseudonym Breezy Lovejoy. He went on to release Venice in 2014, under his current moniker. Paak followed with Malibu, in 2016.

Apart from his solo career, Paak is also one-half of NxWorries, alongside record producer Knxwledge.")
user2.profile_picture = File.open('app/assets/images/paak-profile.jpg')
user2.header_background = File.open('app/assets/images/paak-header.jpg')
user2.save!

user3 = User.new(email: "frank@frank.com", password: "password", first_name: "Frank", last_name: "Ocean",
display_name: "Frank Ocean", city: "Los Angeles", country: "United States",
bio: "Christopher Francis \"Frank\" Ocean (born Christopher Edwin Breaux; October 28, 1987), is an American singer, songwriter, and rapper. Known for his idiosyncratic musical style, Ocean first embarked on a career as a ghostwriter, and in 2010 he became a member of hip hop collective Odd Future. He released his breakout mixtape, Nostalgia, Ultra, to critical acclaim in 2011. It generated his first charting single \"Novacane\". In 2012, Ocean finished in second place in BBC's Sound of 2012 poll.

His debut studio album, Channel Orange, was released in July 2012 to critical acclaim and reached No. 2 on the Billboard 200. It was promoted with three singles: \"Thinkin Bout You\", \"Pyramids\" and \"Sweet Life\". In 2016, Ocean released the visual album Endless alongside his second studio album Blonde, following several years of delays. Blonde debuted at number one in the United States and United Kingdom.")

user3.profile_picture = File.open('app/assets/images/frank-profile.jpeg')
user3.header_background = File.open('app/assets/images/frank-header.jpg')
user3.save!

user4 = User.new(email: "stevie@stevie.com", password: "password", first_name: "Stevie", last_name: "Wonder",
city: "Saginaw", country: "United States", display_name: "Stevie Wonder", bio: "Stevland Hardaway Morris (born Stevland Hardaway Judkins, May 13, 1950), known by his stage name Stevie Wonder, is an American musician, singer, songwriter, record producer, and multi-instrumentalist. A child prodigy, he is considered to be one of the most critically and commercially successful musical performers of the late 20th century. Wonder signed with Motown's Tamla label at the age of 11, and he continued performing and recording for Motown into the 2010s. He has been blind since shortly after birth.

Among Wonder's works are singles such as \"Superstition\", \"Sir Duke\", \"You Are the Sunshine of My Life\" and \"I Just Called to Say I Love You\"; and albums such as Talking Book, Innervisions and Songs in the Key of Life. He has recorded more than 30 U.S. top ten hits and received 25 Grammy Awards, the most ever awarded to a male solo artist, and has sold over 100 million records worldwide, making him one of the top 60 best-selling music artists. Wonder is also noted for his work as an activist for political causes, including his 1980 campaign to make Martin Luther King, Jr.'s birthday a holiday in the United States. In 2009, Wonder was named a United Nations Messenger of Peace. In 2013, Billboard magazine released a list of the Billboard Hot 100 All-Time Top Artists to celebrate the US singles chart's 55th anniversary, with Wonder at number six.")
user4.profile_picture = File.open('app/assets/images/stevie-profile-pic.jpg')
user4.header_background = File.open('app/assets/images/stevie-background.jpg')
user4.save!


user5 = User.new(email: "trane@trane.com", password: "password", first_name: "John", last_name: "Coltrane",
display_name: "John Coltrane", city: "New York", country: "United States",
bio: "John William Coltrane, also known as \"Trane\" (September 23, 1926 – July 17, 1967), was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes in jazz and was later at the forefront of free jazz. He led at least fifty recording sessions during his career, and appeared as a sideman on many albums by other musicians, including trumpeter Miles Davis and pianist Thelonious Monk.

As his career progressed, Coltrane and his music took on an increasingly spiritual dimension. Coltrane influenced innumerable musicians, and remains one of the most significant saxophonists in music history. He received many posthumous awards and recognitions, including canonization by the African Orthodox Church as Saint John William Coltrane and a special Pulitzer Prize in 2007. His second wife was pianist Alice Coltrane and their son Ravi Coltrane is also a saxophonist.")
user5.profile_picture = File.open('app/assets/images/trane-profile.jpg')
user5.header_background = File.open('app/assets/images/trane-background.jpg')
user5.save!

# TRACKS

Track.destroy_all


track2 = Track.new(user_id: 2, title: "The Bird", description: "Written By Anderson .Paak
Trumpet: Emile Martinez
Strings: Julian Le
Bass: Kelsey Gonzalez
Piano: Ron Jerome Avant
Guitar: Jose Rios
Release Date: January 15, 2016")
track2.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/01+The+Bird+1.mp3')
track2.image = File.open('app/assets/images/malibu.jpeg')
track2.save!

track1 = Track.new(user_id: 1, title: "Love Came ft. Riley Mulherkar",
description: "Composed by Billy Strayhorn
Arranged by Taylor Herron
Performed by Riley Mulherkar and Juilliard Strings")
track1.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/01+Love+Came%2C+Take+1.mp3')
track1.image = File.open('app/assets/images/strayhorn.jpg')
track1.save!

track13 = Track.new(user_id: 4, title: "Golden Lady",
description: "From \"Innervisions\", released in 1973
Composed by Stevie Wonder

Stevie Wonder: vocals, piano, drums, Moog bass, T.O.N.T.O. synthesizer
Clarence Bell: Hammond organ
Ralph Hammer: acoustic guitar
Larry Latimer: congas")
track13.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/04+Golden+Lady.m4a')
track13.image = File.open('app/assets/images/innervisions.jpg')
track13.save!

track3 = Track.new(user_id: 2, title: "The Waters ft. BJ The Chicago Kid", description: "Written By: BJ The Chicago Kid, Madlib & Anderson .Paak
Guitar: Isaiah Sharkey
Keyboards: Robert Glasper
Drums: Chris Dave
Bass: Pino Palladino
Release Date: January 15, 2016
Interpolates: Jesus Said It by Eddie James")
track3.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/03+The+Waters+(feat.+BJ+The+Chicago+Kid).mp3')
track3.image = File.open('app/assets/images/malibu.jpeg')
track3.save!

track17 = Track.new(user_id: 4, title: "You Are the Sunshine of My Life",
description: "From \"Talking Book\", released in 1972,
Composed by Stevie Wonder

Stevie Wonder: vocals, Fender Rhodes, drums
Jim Gilstrap: first lead vocal, background vocals
Lani Groves: second lead vocal, background vocals
Gloria Barkley: background vocals
Scott Edwards: electric bass
Daniel Ben Zebulon: congas")
track17.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/01+You+Are+The+Sunshine+Of+My+Life.mp3')
track17.image = File.open('app/assets/images/talking-book.png')
track17.save!

track4 = Track.new(user_id: 2, title: "Heart Don't Stand a Chance", description: "Written By: Anderson .Paak
Background Vocals: Anderson .Paak
Drums: Anderson .Paak
Guitar: Daniel Seeff
Bass: Daniel Seeff
Keyboards: Sam Barsh
Release Date: January 15, 2016")
track4.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/02+Heart+Don%27t+Stand+a+Chance+1.mp3')
track4.image = File.open('app/assets/images/malibu.jpeg')
track4.save!

track5 = Track.new(user_id: 2, title: "NxWorries (Anderson .Paak and Knxwledge) - Get Bigger",
description: "Written By: Anderson .Paak & Knxwledge
From \"YES LAWD\", due to release October 21st, 2016")
track5.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/1-01+Get+Bigger+_+Do+U+Luv.mp3')
track5.image = File.open('app/assets/images/yes-lawd.jpg')
track5.save!

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
track6.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/Soliloquy.mp3')
track6.image = File.open('app/assets/images/profile.jpg')
track6.save!


track9 = Track.new(user_id: 3, title: "Pink + White",
description: "Written By: Pharrell Williams, Om'Mas Keith & Frank Ocean
Guitar: Brent Paschke
Background Vocals: Beyoncé
Release Date: August 20, 2016")
track9.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/03+Pink+%2B+White.m4a')
track9.image = File.open('app/assets/images/blonde.jpg')
track9.save!

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
track8.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/I+Concentrate+on+You+1.mp3')
track8.image = File.open('app/assets/images/profile.jpg')
track8.save!

track10 = Track.new(user_id: 3, title: "Solo",
description: "Written by Frank Ocean
Release Date: August 20, 2016")
track10.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/05+Solo.m4a')
track10.image = File.open('app/assets/images/blonde.jpg')
track10.save!


track12 = Track.new(user_id: 1, title: "BAIA - Zoetic",
description: "Composed by Peter Nelson

BAIA:

Alto Saxophone: Taylor Herron
Trombone: Peter Nelson
Piano: Steven Feifke
Bass: Devin Starks
Drums: Darrian Douglas
Recorded March 11, 2016 at Riro Muzik, Brookyln, NY
Mixed by Matteo Liberatore
Mastered at Bass Hit Recording, NYC")
track12.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/Zoetic.mp3')
track12.image = File.open('app/assets/images/profile.jpg')
track12.save!



track11 = Track.new(user_id: 3, title: "Super Rich Kids ft. Earl Sweatshirt",
description: "Written By: Frank Ocean and Earl Sweatshirt
Mastered by: Vlado Meller
Release Date: July 10, 2012
Samples: Bennie and the Jets by Elton John
Sampled In: Slumromantiker by L.O.C.
Interpolates: Real Love by Mary J. Blige")
track11.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/07+Super+Rich+Kids+(feat.+Earl+Sweatshirt).mp3')
track11.image = File.open('app/assets/images/channel-orange.jpg')
track11.save!

track7 = Track.new(user_id: 1, title: "Duke Ellington's Sound of Love",
description: "Composed by Charles Mingus

Alto Saxophone: Taylor Herron
Vibraphone: Joseph Doubleday")
track7.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/Duke+Ellington%27s+Sound+of+Love.mp3')
track7.image = File.open('app/assets/images/profile.jpg')
track7.save!

track14 = Track.new(user_id: 4, title: "You Haven't Done Nothin'",
description: "From \"Fulfillingness' First Finale, released in 1974
Composed by Stevie Wonder

Stevie Wonder: lead vocals, Hohner clavinet, drums
Reggie McBride: electric bass
The Jackson 5: background vocals
Robert Mergouleff and Malcolm Cecil: synthesizers")
track14.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/06+You+Haven%27t+Done+Nothin%27.mp3')
track14.image = File.open('app/assets/images/fulfillingness.jpg')
track14.save!


track15 = Track.new(user_id: 4, title: "Superwoman",
description: "From \"Music of My Mind\", released in 1972
Composed by Stevie Wonder

Stevie Wonder: vocals, Fender Rhodes, drums, Moog bass, T.O.N.T.O. synthesizer
Buzz Feiten: electric guitar")
track15.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/02+Superwoman.mp3')
track15.image = File.open('app/assets/images/music-of-my-mind.png')
track15.save!





track18 = Track.new(user_id: 5, title: "The Night Has a Thousand Eyes",
description: "From \"Coltrane's Sound\", released in 1964
Composed by Jerry Brainin and Buddy Bernier

John Coltrane: tenor saxophone
Steve Davis: bass
McCoy Tyner: piano
Elvin Jones: drums")
track18.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/01+The+Night+Has+A+Thousand+Eyes.m4a')
track18.image = File.open('app/assets/images/coltranes-sound.jpg')
track18.save!


track19 = Track.new(user_id: 5, title: "Say It (Over and Over Again)",
description: "From \"Ballads\", released in 1963
Composed by Frank Loesser

John Coltrane: tenor saxophone
Jimmy Garrison: bass
McCoy Tyner: piano
Elvin Jones: drums")
track19.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/01+Say+It+(Over+And+Over+Again).mp3')
track19.image = File.open('app/assets/images/trane-ballads.jpeg')
track19.save!

track16 = Track.new(user_id: 4, title: "If It's Magic",
description: "From \"Songs in the Key of Life\", released in 1976
Composed by Stevie Wonder

Stevie Wonder: vocals, harmonica
Dorothy Ashby: harp")
track16.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/17+If+It%27s+Magic.mp3')
track16.image = File.open('app/assets/images/songs-life.jpg')
track16.save!


track20 = Track.new(user_id: 5, title: "Miles Davis - Two Bass Hit",
description: "From \"Milestones\", released in 1958,
Composed by Miles Davis

Miles Davis: trumpet
John Coltrane: tenor saxophone
Cannonball Adderley: alto saxophone
Red Garland: piano
Paul Chambers: bass
Philly Joe Jones: drums")
track20.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/03+Two+Bass+Hit.mp3')
track20.image = File.open('app/assets/images/milestones.jpeg')
track20.save!


track21 = Track.new(user_id: 5, title: "Duke Ellington and John Coltrane - Take the Coltrane",
description: "From \"Duke Ellington and John Coltrane\", released in 1963,
Composed by Duke Ellington

John Coltrane: tenor
Duke Ellington: piano
Jimmy Garrison: bass
Elvin Jones: drums")
track21.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/02+Take+The+Coltrane.mp3')
track21.image = File.open('app/assets/images/duke-and-trane.jpg')
track21.save!


track22 = Track.new(user_id: 5, title: "Naima",
description: "From \"Giant Steps\", released in 1960
Composed by John Coltrane

John Coltrane: tenor saxophone
Paul Chambers: bass
Wynton Kelly: piano
Jimmy Cobb: drums")
track22.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/06+Naima.mp3')
track22.image = File.open('app/assets/images/giant-steps.jpg')
track22.save!


track23 = Track.new(user_id: 3, title: "Rushes To",
description: "From \"Endless\", released August 19th, 2016
Written by Frank Ocean

Frank Ocean: vocals
Austin Hollows and Alex G: guitars
Mastered by Mike Dean
Recorded at Hotel Bel Air, Capitol Studios")
track23.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/16+Rushes+Too.m4a')
track23.image = File.open('app/assets/images/endless.jpg')
track23.save!


track24 = Track.new(user_id: 3, title: "Sweet Life",
description: "From \"channel ORANGE\", released March 11, 2012
Written by Frank Ocean and Pharrell Williams")
track24.track_file = open('https://s3.amazonaws.com/soundscape-dev/tracks/track_files/05+Sweet+Life.mp3')
track24.image = File.open('app/assets/images/channel-orange.jpg')
track24.save!




# COMMENTS

Comment.destroy_all

comment1 = user1.authored_comments.create(body: "Super dope.", commentable_id: 2, commentable_type: "Track")
comment2 = user1.authored_comments.create(body: "Good stuff. Very nice.", commentable_id: 3, commentable_type: "Track")
comment3 = user2.authored_comments.create(body: "I like this song.", commentable_id: 2, commentable_type: "Track")
comment4 = user3.authored_comments.create(body: "Love it.", commentable_id: 2, commentable_type: "Track")
comment5 = user3.authored_comments.create(body: "Love it.", commentable_id: 3, commentable_type: "Track")
