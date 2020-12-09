
require_relative "piece.rb"
require_relative "modules.rb"

class Bishop < Piece

  def initialize 
    @symbol = :B
  end

  private 
  def move_dirs
    diagonal = [ [1, 1], [1, -1], [-1, -1], [-1, 1] ] 


  end


end


class Rook < Piece

  def initialize 
    @symbol = :R

  end

  private 
  def move_dirs
    



  end

end


class Queen < Piece
    
  def initialize 
    @symbol = :Q

  end
   
  def move_dirs
    dirs_a = [ [1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1] ] 



  end

end