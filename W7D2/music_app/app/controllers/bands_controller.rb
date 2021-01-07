class BandsController < ApplicationController
  before_action :require_logged_in, only:[:new, :edit, :update, :create, :destroy]
  
  def index

    @bands = Band.all
    render :index
  end

  def create
    @band = Band.new(band_params)

    if @band.save
      redirect_to band_url(@band)
    else
      render :new
    end
  end

  def new
    @bands = Band.new
    render :new
  end

  def edit
    @band = find_band
    unless @band
      redirect_to bands_url
    else
      render :edit
    end
  end

  def show
    @band = find_band
    if @band 
      @band = [@band]
      render :show
    else
      redirect_to bands_url
    end
  end
  
  def update
    @band = find_band
    albums = @band.albums
    @band.update(band_params)
    if @band.save
      # albums.update_all(band_id: @band.id)
      redirect_to band_url(@band)
    else
      render :edit
    end
  end

  def destroy
    @band = find_band
    if @band
      @band.destroy
      render :destroy
    else
      flash[:error] = ["Band Does Not Exist, Cannot Delete"]
    end
  end
  
  private 

  def band_params
    params.require(:band).permit(:name)
  end

  def find_band
    Band.find_by(id: params[:id])
  end
end
