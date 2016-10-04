class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: ["Not logged in"], status: 404
    end
  end
end
