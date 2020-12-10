require 'singleton' 

class Piece

  def initialize
  end

  def moves
  end

  def inspect
    "PIECE"
  end
end

class NullPiece < Piece
  include Singleton

  def inspect
    "[|||]"
  end

end