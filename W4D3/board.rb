require_relative 'piece.rb'
require 'singleton'
require_relative 'pieces.rb'

class Board

  def initialize
    @null_piece = NullPiece.instance
    @board = Array.new(8){Array.new(8, @null_piece)}
    setup
  end

  #raise exception if there is no piece at start
  #raise if piece cannot move to end pos
  #place a begin rescue whereever this method is called. 
  def move_piece(start_pos, end_pos)

    raise "There is no piece at #{start_pos}" if self[start_pos] == @null_piece
    raise "Piece cannot move to #{end_pos}" if out_of_bounds?(end_pos)
    
  
    piece = self[start_pos]
    self[start_pos] = @null_piece

    self[end_pos] = piece
  end

  def [](pos)
    r, c = pos
    @board[r][c]
  end

  def []=(pos, val)
    r, c = pos
    @board[r][c] = val
  end

  def print_board
    @board.each {|r| puts r.to_s}
  end

  def self.out_of_bounds?(pos)
    r, c = pos
    r >= 8 || r < 0 || c >= 8 || c < 0
  end

  private
  #add pieces to the board in their appropriate start positions
  #rows 0 and 1 are black
  #rows 7 and 8 are white
  def setup
    (0..1).each do |row|
      @board[row].map!{|col| Piece.new(:W)}
      @board[-1-row].map!{|col| Piece.new(:B)}
    end
  end
end

b = Board.new

b.print_board

piece = Piece.new(:W,b,[0,0],:R)
rook = Rook.new(:W,b,[4,4])


rook.moves.each {|path| p path}
