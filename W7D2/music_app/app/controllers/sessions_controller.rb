class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(
    params[:user][:email],
    params[:user][:password])

    if @user
      login(@user)
      redirect_to user_url(@user) #update this with correct page
    else            #= @user.error.full_message
      flash[:error] = ["INVALID CREDENTIALS"]
      redirect_to new_session_url
    end
  end

  
end
