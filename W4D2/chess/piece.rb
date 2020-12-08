
class Piece
    def inspect
        "piece"
    end
end

class NullPiece < Piece
    include Singleton

    def initialize
    end

end

