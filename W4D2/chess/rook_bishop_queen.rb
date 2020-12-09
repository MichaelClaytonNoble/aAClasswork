
require_relative "piece.rb"
require_relative "modules.rb"

class Bishop < Piece
  include Slideable

  attr_reader :symbol

  def initialize 
    @symbol = :B
  end

  private 
  def move_dirs


  end


end


class Rook < Piece
  include Slideable
  attr_reader :symbol
  
  def initialize 
    @symbol = :R

  end

  private 
  def move_dirs
    



  end

end


class Queen < Piece
  include Slideable
  attr_reader :symbol
  def initialize 
    @symbol = :Q

  end
   
  def move_dirs
    dirs_a = [ [1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1] ] 



  end

end