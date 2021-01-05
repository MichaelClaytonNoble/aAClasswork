class ApplicationController < ActionController::Base
  #helper_methods allow us to use these methods in our views
  #these methods must be placed in ApplicationController 
  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in_user!(user)
    session[:session_token] = user.reset_session_token!
  end

end
