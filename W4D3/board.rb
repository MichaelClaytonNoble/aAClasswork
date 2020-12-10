require_relative 'piece.rb'

class Board

  def initialize
    @board = Array.new(8){Array.new(8, nil)}
  end

  def setup
    (0..1).each do |row|
      @board[row].map!{|col| Piece.new}
      @board[-1-i].map!{|col| Piece.new}
    end
  end

  def inspect

    board_string = ''

    @board.each {|r| board_string+=r.to_s}
    board_string
  end
end

b = Board.new

p b