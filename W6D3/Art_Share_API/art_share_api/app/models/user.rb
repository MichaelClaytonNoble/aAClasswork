class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true


  #art this user has viewed 
  has_many :viewed_artwork,
    primary_key: :id,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare

  #art that has been shared with the user 
  has_many :shared_artworks,
    through: :viewed_artwork,
    source: :artwork

  #artworks the user owns
  has_many :artworks,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artwork,
    dependent: :destroy
  
  #users that have viewed this artists artwork 
  has_many :artworks_seen,
    through: :artworks,
    source: :shared_viewers

end
