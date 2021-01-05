class UsersController < ApplicationController


  def new
    @user = User.new
    render :new
  end

  #sign a user up
  #then log in 
  def create
   
    @user = User.new(user_params)

    if @user.save
      ##### log the user in #####
      login(@user)
      redirect_to new_users_url #update this with correct page
    else
      render :new
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
