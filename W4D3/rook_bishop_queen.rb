require_relative 'modules.rb'

class Rook < Piece
  include Slideable

  attr_reader :symbol
  def initialize(color, board, pos)
    super(color, board, pos, :R)
  end
  #rooks can move horizontal and vertically  
  def move_dirs
    HORIZONTAL_DIRS
  end
end

class Bishop < Piece
  attr_reader :symbol

  def initialize(color, board, pos)
    super(color, board, pos, :B)
  end

  def move_dirs
    DIAGONAL_DIRS
  end

end
class Queen < Piece
  attr_reader :symbol
  
  def initialize(color, board, pos)
    super(color, board, pos, :Q)
  end

  def move_dirs
    DIAGONAL_DIRS + HORIZONTAL_DIRS
  end

  def inspect
    ":Q"
  end
end