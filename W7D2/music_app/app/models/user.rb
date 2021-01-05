# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'securerandom'
require 'bcrypt'

class User < ApplicationRecord

  validates :email, :password_digest, :session_token, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true


  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
  end

















end
