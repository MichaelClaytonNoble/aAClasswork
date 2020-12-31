class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: users
  end

  def create
  
    user = User.new(user_params)
    # replace the `user_attributes_here` with the actual attribute keys
    if user.save
        render json: user
    else
        render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: params[:id])
    if user.nil?
      render json: "User not found"
    else
      render json: user
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: user
  end

  def user_params
    #require that we have a top level key of :user
    params.require(:user).permit(:username)
  end


end
