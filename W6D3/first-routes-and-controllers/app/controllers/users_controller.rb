class UsersController < ApplicationController

  def index 

    users = User.all 
    render json: users
  end

  def create
  
    debugger
    user = User.new(user_params)
    # replace the `user_attributes_here` with the actual attribute keys
    user.save!
    render json: user
  end

  def show

    render json: params
  end

  def user_params
    #require that we have a top level key of :user
    params.require(:user).permit(:name, :email)
  end


end
