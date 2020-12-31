require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :color, inclusion: { in: %w(white black Orange)}
  validates :sex, inclusion: { in: ["M", "F"] }

  def age
    Time.now.year - @birth_date.year
  end

end
