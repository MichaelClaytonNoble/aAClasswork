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
  
  subject(:person){FactoryBot.create(:user)}
  it { should validate_uniqueness_of(:username)}
end
