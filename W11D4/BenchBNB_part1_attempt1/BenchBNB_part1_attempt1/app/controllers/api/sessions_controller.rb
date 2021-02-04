class Api::SessionsController < ApplicationController
  
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      redirect_to users_url
    else
      flash.now[:errors]=['Invalid username or password']
      render :new
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {} 
    else
      render json: status: 404
    end
  end 

end
