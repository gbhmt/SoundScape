class Api::TracksController < ApplicationController

  def create
    @track = current_user.tracks.new(track_params)
    @track.image = current_user.profile_picture if @track.image.url == "/images/original/missing.png"
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def index
    @tracks = Track.all.page params[:page]
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  private
  def track_params
    params.require(:track).permit(:title, :description, :track_file, :image)
  end

end
