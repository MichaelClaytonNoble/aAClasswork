require 'singleton'
require_relative 'piece.rb'
class Board
    def initialize
        @rows = Array.new(8) {Array.new(8)}
        null_piece = NullPiece.instance
        setup
    end

    def move_piece(start_pos, end_pos)

        raise "No Piece at #{start_pos}" if @rows[start_pos[0]][start_pos[1]] == null_piece
        raise "Piece cannot move to #{end_pos}" if valid_pos?(end_pos)
        @rows[end_pos[0]][end_pos[1]] = @rows[start_pos[0]][start_pos[1]].dup

        @rows[start_pos[0]][start_pos[1]] = null_piece

    end

    def valid_pos?(end_pos)

    end
    #put piece placeholders in their starting positions
    def setup
        (0..1).each do |i| 
            @rows[i].map! { |j| Piece.new}
            @rows[-1-i].map! { |j| Piece.new}
        end
    end

    def print
        @rows.each { |r| puts r.to_s}
    end


    private 
    attr_reader :null_piece
end

b = Board.new
b.print
puts
b.move_piece([0,0],[4,0])
b.print