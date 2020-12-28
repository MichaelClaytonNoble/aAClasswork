class Visit < ApplicationRecord
  validates :user_id, presence: true
  validates :shortened_url_id, presence: true

  belongs_to :url,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :ShortenedUrl

  belongs_to :visitor,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end