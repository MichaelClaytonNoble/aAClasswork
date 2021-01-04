class Artwork < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: {scope: :artist_id}
  validates :image_url, presence: true
  validates :artist_id, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User,
    dependent: :destroy

  has_many :shares,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shares,
    source: :viewer

end
