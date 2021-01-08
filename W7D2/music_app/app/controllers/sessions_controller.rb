class SessionsController < ApplicationController
  before_action :require_logged_out, only:[:new]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
    params[:user][:email],
    params[:user][:password])

    if @user
      login(@user)
      redirect_to user_url(@user) #update this with correct page
    else                      
      flash[:errors] = ["INVALID CREDENTIALS"]
      redirect_to new_session_url
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  
end
