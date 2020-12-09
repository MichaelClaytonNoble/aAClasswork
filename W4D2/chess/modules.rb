# module Slideable
  DIAGONAL_DIRS = [ [1, 1], [1, -1], [-1, -1], [-1, 1] ] 
  HORIZONTAL_DIRS = [ [1, 0], [0, 1], [-1, 0], [0, -1] ]

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    move_dirs.map {|dir| grow_unblocked_moves_in_dir(dir[0], dir[1]) }

    # symbol = :Q

    # case symbol #self.symbol
    # when :B
    #   diagonal_dirs.map {|dir| grow_unblocked_moves_in_dir(dir[0], dir[1]) }
    # when :R
    #   horizontal_dirs.map {|dir| grow_unblocked_moves_in_dir(dir[0], dir[1]) }
    # when :Q
    #   diagonal_dirs.map {|dir| grow_unblocked_moves_in_dir(dir[0], dir[1]) } + horizontal_dirs.map {|dir| grow_unblocked_moves_in_dir(dir[0], dir[1]) }
    # end

  end

  private
  def move_dirs
    diagonal_dirs + horizontal_dirs
  end

  private
  def grow_unblocked_moves_in_dir(dx,dy)
    potential_moves = []
    
    new_pos = [4, 4]#self.pos
    r, c = new_pos
    r += dx
    c += dy
    while r >= 0 && r <= 7 && c >= 0 && c <= 7
      potential_moves << [r, c]
      r += dx
      c += dy
    end
    potential_moves
  end

# end

moves.each { |e| p e}
# p grow_unblocked_moves_in_dir(1,0)

module Stepable

  

end




