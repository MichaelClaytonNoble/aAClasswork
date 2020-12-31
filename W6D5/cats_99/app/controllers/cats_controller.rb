class CatsController < ApplicationController
  def index
    cats = Cat.all

    render json: cats
  end

  def show
    kitty = Cat.find_by(id: params[:id])
    
  end
end
