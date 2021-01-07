class AlbumsController < ApplicationController
  before_action :require_logged_in, only:[:edit, :create, :update, :destroy]

  def show
    @album = find_album
    render :show
  end

  def show_bands_albums
    @albums = Album.where(band_id: params[:band_id])
    render :show_bands_albums
  end
  def new
    @album = Album.new
    render :new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def find_album
    Album.find_by(id: params[:id])
  end

  def album_params
  
  end
end
