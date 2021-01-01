class CatsController < ApplicationController
  def index
    cats = Cat.all

    render json: cats
  end

  def show
    @kitty = Cat.find_by(id: params[:id])
    render :show
  end

  def new
    cat = Cat.new
    render :new
  end
end
