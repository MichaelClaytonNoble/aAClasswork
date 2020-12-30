class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true

    def initialize(options)
        @name = options['name']
        @email = options['email']
    end

    

end
