require 'securerandom'

class ShortenedUrl < ApplicationRecord
  validates :short_url, presence: true
  validates :long_url, presence: true
  
  def self.random_code
    random_url = SecureRandom.urlsafe_base64
    unless ShortenedUrl.exists?(random_url)
      random_url = SecureRandom.urlsafe_base64
    end
    random_url
  end

  def self.create!(user, long_url)
    
    new_short = ShortenedUrl.new(
      {'user_id'=>user.id, 
      'long_url'=>long_url, 
      'short_url' => ShortenedUrl.random_code
    })
  end

  has_many :submitters,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  # def initialize(options)
  #   @user_id = options['user_id']
  #   @short_url = options['short_url']
  #   @long_url = options['long_url']
  # end

end