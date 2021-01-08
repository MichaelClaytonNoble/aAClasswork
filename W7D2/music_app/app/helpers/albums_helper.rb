module AlbumsHelper
 def edit_link
  "<a href= #{edit_album_url(@album)}>Edit this album info</a>".html_safe
 end

 def delete_button
  "<form action=#{album_url} method=\"POST\">
    <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
  <input type=\"submit\" value=\"Delete album\">
  </form>".html_safe
 end

end
