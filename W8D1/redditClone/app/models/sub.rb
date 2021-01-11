class Sub < ApplicationRecord
  helper_method :require_moderator

  validates :title, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :moderator, 
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :User

    def require_moderator
      redirect_to subs_url unless current_user = User.find_by(id: self.moderator_id)
    end
end
