# == Schema Information
#
# Table name: subs
#
#  id           :bigint           not null, primary key
#  description  :text             not null
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  moderator_id :integer          not null
#
# Indexes
#
#  index_subs_on_moderator_id  (moderator_id)
#
class Sub < ApplicationRecord
  helper_method :require_moderator

  validates :title, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :moderator, 
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :User

  has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post
    

    def require_moderator
      redirect_to subs_url unless current_user = User.find_by(id: self.moderator_id)
    end
end
