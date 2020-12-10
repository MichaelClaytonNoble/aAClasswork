require 'singleton' 
require_relative 'board.rb'

class Piece
 
  attr_reader :color, :symbol, :board, :pos

  def initialize(*args)
    color, board, pos, symbol = args

    @color = color
    @board = board
    @pos = pos
    @symbol = symbol
    @symbol ||= :P
  end

  #returns an array of positions a Piece can move to
  def moves
  end

  def valid_moves
  end

  #check if any given space on the board is valid
  def valid_pos?(pos)
    
    return false if Board.out_of_bounds?(pos)
    space = @board[pos]
    case space.color
    when :W 
      return !(:W == @color)
    when :B
      return !(:B == @color)
    end
  end

  def pos=(val)
    @pos = val
  end

  def empty?
  end

  def symbol
    @symbol
  end

  def to_s
    "#{@color} piece"
  end

  def inspect
    symbol
  end

  private
  def move_into_check?(end_pos)
  end
end

class NullPiece < Piece
  include Singleton

  attr_reader :color

  def symbol
    :N
  end

  def inspect
    symbol
  end

end