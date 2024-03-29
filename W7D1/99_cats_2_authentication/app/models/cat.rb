# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  # .freeze renders a constant immutable.
  CAT_COLORS = %w(black white orange brown).freeze

  validates :color, inclusion: CAT_COLORS
  validates :sex, inclusion: %w(M F)
  validates :birth_date, :user_id, :color, :name, :sex, presence: true


  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User



  has_many :rental_requests,
    class_name: :CatRentalRequest,
    dependent: :destroy

  

  def age
    time_ago_in_words(birth_date)
  end
end
