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
  end

  # private
  def move_dirs
    horizontal_moves = []
    diagonal_moves = []

    diagonal_dirs.each {|dir| diagonal_moves << grow_unblocked_moves_in_dir(dir[0], dir[1]) }
    horizontal_dirs.each {|dir| horizontal_moves << grow_unblocked_moves_in_dir(dir[0], dir[1]) }

    [diagonal_dirs, horizontal_dirs]
  end

  # private
  def grow_unblocked_moves_in_dir(dx,dy)
    potential_moves = []
    
    new_pos = [0,0] #self.pos
    r, c = new_pos
    while r >= 0 && r <= 7 && c >= 0 && c <= 7
      potential_moves << [r, c]
      r += dx
      c += dy
    end
    potential_moves
  end

# end

move_dirs.each { |e| p e}
# p grow_unblocked_moves_in_dir(1,0)

module Stepable

  

end




