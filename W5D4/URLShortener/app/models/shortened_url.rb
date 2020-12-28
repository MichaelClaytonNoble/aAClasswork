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

  
  def num_clicks
    ShortenedUrl
      .select(:id)
      .joins(:visits)
      .group('shortened_urls.id')
      .count
  end

  def num_uniques
  
    Visit
      .select(:user_id).distinct
      .group('visits.shortened_url_id')
      .count

  end
  def num_recent_uniques
  end


  has_many :submitters,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :Visit

  has_many :visitors,
    through: :visits,
    source: :visitor

  # def initialize(options)
  #   @user_id = options['user_id']
  #   @short_url = options['short_url']
  #   @long_url = options['long_url']
  # end

end