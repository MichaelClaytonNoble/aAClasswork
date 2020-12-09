
class Piece

    def initialize(color, board, pos)
        @board = board
        @pos = pos
        @color = color
    end

    def inspect
        "piece"
    end

    def moves

    end

    def to_s

    end

    def valid_moves

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

    def initialize
    end

end

