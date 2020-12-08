class Board

    def initialize
        @rows = Array.new(8) {Array.new(8)}
        private
        null_piece = NullPiece.instance
    end

    # private :null_piece

    def setup
        (0..1).each do |i| 
            rows[i].map! { |j| piece.new}
        end
    end


    def print
        rows.each { |r| puts r}
    end

end

class Piece

end

class NullPiece < Piece
    include Singleton


    def initialize

    end

end

