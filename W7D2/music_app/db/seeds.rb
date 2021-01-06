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