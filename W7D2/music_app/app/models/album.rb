    # t.integer "band_id", null: false
    # t.string "title", null: false
    # t.integer "year", null: false
    # t.boolean "live", default: false

class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :title, uniqueness: true

  belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: :Band

end
