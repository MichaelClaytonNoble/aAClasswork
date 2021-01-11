class PostsController < ApplicationController

  def show
    @post = Post.find_by(id: params[:id])
    render :new 
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end 
   
end
