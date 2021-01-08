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

    @album = Album.new(album_params)
    @album.band_id = params[:band_id]
    if @album.save
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit
    @album = find_album
    render :edit
  end

  def update
    @album = find_album
    @album.update(album_params)
    if @album.save
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  def destroy
    @album = find_album
    if @album
      @album.destroy
      render :destroy
    else
      redirect_to bands_url
    end
  end

  private
  def find_album
    Album.find_by(id: params[:id])
  end

  def album_params
    params.require(:album).permit(:title, :year, :live, :band_id)
  end
end
