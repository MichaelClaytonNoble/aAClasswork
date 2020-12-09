
require 'singleton'
class Piece

    def initialize(color, board, pos)
        @board = board
        @pos = pos
        @color = color
    end

    def inspect
        "piece"
    end

    #returns an array of places a Piece can move to. 
    #each Piece will implement it's own moves method 
    #unique to how each piece moves. 
    def moves

    end

    def to_s

    end

    def valid_moves
        valid_moves_arr = []
        moves.each do |path|
            
            current_path = []
            path.each do |pos|
                r, c = pos
                if @board[r][c].color == @color
                    break
                end
                current_path << pos
            end
            valid_moves_arr << current_path
        end
        valid_moves_arr
    end

    def empty?

    end

    def pos=(value)

    end

    private
    def move_into_check?(end_pos)

    end

    attr_reader :color
end


class NullPiece < Piece
    include Singleton

    attr_reader :color, :symbol

    def initialize
        @color = nil
        @symbol = nil
    end

end

