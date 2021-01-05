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
      login(@user)
      redirect_to user_url(@user) #update this with correct page
    else
      flash.now[:error] = ["INVALID_CREDENTIALS"]
      render :new
    end

  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      flash[:error] = ["User not found"]
      redirect_to new_user_url #update this with correct page
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
