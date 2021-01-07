module ApplicationHelper
  def auth_token
    "<input type=\"hidden\"
      name=\"authenticity_token\"
      value=#{form_authenticity_token}/>"
      .html_safe
  end

  def sign_up_link
    # "<a href=<%=new_user_url%>>SIGN UP</a>".html_safe
    "<a href=#{new_user_url}>SIGN UP</a>".html_safe
  end

  def sign_in_link
  #  "<a href=\"<%=new_session_url%>\">SIGN IN</a>".html_safe
   "<a href=#{new_session_url}>SIGN IN</a>".html_safe
  end

  def sign_out_button
    "<form action=#{session_url} method=\"POST\">
      <input type =\"hidden\" name = \"_method\" value = \"DELETE\">
      #{auth_token}
      <input type=\"submit\" value=\"SIGN OUT\">
    </form>".html_safe
  end

  def bands_homepage_link
    "<a href =#{bands_url}>Bands Homepage!</a>".html_safe
  end

  def on_page
    "#{params[:controller]}##{params[:action]}"
  end

  def nav_menu
    navigation_menu = []
    
    unless logged_in?
      unless on_page=="sessions#new"
        navigation_menu += [sign_in_link] 
      else
        navigation_menu += [sign_up_link] unless on_page == "users#index"
      end
    else
      navigation_menu += [sign_out_button] if logged_in?
    end
    navigation_menu += [bands_homepage_link] unless on_page == "bands#index"
    navigation_menu
  end

end

