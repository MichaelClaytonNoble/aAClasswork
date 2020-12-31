require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :color, inclusion: { in: []}

  def age
    Time.now.year - @birth_date.year
  end

end
