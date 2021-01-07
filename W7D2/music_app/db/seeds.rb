# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Band.destroy_all
band_1 = Band.create!(name: 'TV on the Radio')
band_2 = Band.create!(name: 'Black Sabbath')
band_3 = Band.create!(name: 'Public Enemy')
band_4 = Band.create!(name: 'Creed')
band_5 = Band.create!(name: 'Switch Foot')
band_6 = Band.create!(name: 'U2')

Album.destroy_all

album_1 = Album.create!(band_id: band_1.id, title: "Desperate Youth, Blood Thirsty Babes", year: 2004, live: true)
album_2 = Album.create!(band_id: band_1.id, title: "Return to Cookie Mountain", year: 2006, live: true)
album_3 = Album.create!(band_id: band_1.id, title: "Seeds", year: 2014, live: false)


album_4 = Album.create!(band_id: band_2.id, title: "Black Sabbath", year: 1970, live: false)
album_5 = Album.create!(band_id: band_2.id, title: "Master of Reality", year: 1971, live: true)

album_6 = Album.create!(band_id: band_3.id, title: "Yo! Bum Rush the Show", year: 1987, live: true)

album_7 = Album.create!(band_id: band_4.id, title: "My Own Prison", year: 1997, live: false)
album_8 = Album.create!(band_id: band_5.id, title: "Learning to Breathe", year: 2000, live: false)
album_9 = Album.create!(band_id: band_6.id, title: "How to Dismantle an Atomic Bomb", year: 2004, live: true)