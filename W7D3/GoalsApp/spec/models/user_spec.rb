# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'


#############------ VALIDATIONS -----################
RSpec.describe User, type: :model do
  let(:incomplete_user) {User.new()}
 
  it 'validates the presence of username' do 
    expect(incomplete_user).to_not be_valid
  end
  it { should validate_presence_of(:password_digest)}
  it { should validate_presence_of(:session_token)}
  it { should validate_length_of(:password).is_at_least(6)}
  
  subject(:person){FactoryBot.create(:user)}
  
  it { should validate_uniqueness_of(:username)}
  it { should validate_uniqueness_of(:session_token)}


  describe '#password_encryption' do
    it 'does not save passwords to the database' do
      FactoryBot.create(:user, username: "Harry Potter")
      user = User.find_by(username: "Harry Potter")

      expect(user.password).not_to eq('password')
    end
  end

end


