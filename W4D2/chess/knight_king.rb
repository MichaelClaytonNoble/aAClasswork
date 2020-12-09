require_relative 'modules.rb'

class King < Piece
  include Stepable

  def initialize(color, board, pos)
    @symbol = :K
    super
  end

end


class Knight < Piece
  include Stepable

  def initialize(color, board, pos)
    @symbol = :k
    super
  end


end 

