class ApplicationController < ActionController::Base
  #helper_methods allow us to use these methods in our views
  #these methods must be placed in ApplicationController 
  helper_method :current_user, :logged_in?, :logout, :reset_session_token!


  def catch
    redirect_to new_session_url
  end
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

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless logged_in?
      redirect_to new_session_url
    end
  end

  def require_logged_out 
    if logged_in?
      redirect_to user_url(current_user)
    end
  end

  def method_missing(method_name)
    "hello"
  end

end
