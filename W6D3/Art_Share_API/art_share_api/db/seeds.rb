# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

mike = User.create!(username: 'Mike')
janette = User.create!(username:"Janette")
zack = User.create!(username:"Zach")
carlos = User.create!(username:'Carlos')
lina  = User.create!(username:'Lina')



lifeIn2d = Artwork.create!(title: "life in 2D", image_url: "http:lifein2d.com", artist_id: mike.id)
losAngelesSunset = Artwork.create!(title: "los angeles sunset", image_url: "http:lasunset.com", artist_id: janette.id)
morrocan_sunrise = Artwork.create!(title: "Morrocan Sun Rise", image_url: "http:morrocansunrise.com", artist_id: lina.id)

view_1 = ArtworkShare.create!(artwork_id: lifeIn2d.id, viewer_id: janette.id)
view_2 = ArtworkShare.create!(artwork_id: lifeIn2d.id, viewer_id: zack.id)
view_3 = ArtworkShare.create!(artwork_id: lifeIn2d.id, viewer_id: carlos.id)
view_4 = ArtworkShare.create!(artwork_id: losAngelesSunset.id, viewer_id: mike.id)
view_5 = ArtworkShare.create!(artwork_id: losAngelesSunset.id, viewer_id: zack.id)
view_6 = ArtworkShare.create!(artwork_id: losAngelesSunset.id, viewer_id: carlos.id)
view_7 = ArtworkShare.create!(artwork_id: losAngelesSunset.id, viewer_id: lina.id)
view_8 = ArtworkShare.create!(artwork_id: morrocan_sunrise.id, viewer_id: mike.id)
view_9 = ArtworkShare.create!(artwork_id: morrocan_sunrise.id, viewer_id: zack.id)
