module Slideable
  DIAGONAL_DIRS = [ [1, 1], [1, -1], [-1, -1], [-1, 1] ] 
  HORIZONTAL_DIRS = [ [1, 0], [0, 1], [-1, 0], [0, -1] ]

  def horizonal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
  end

  private
  def move_dirs
  end

  private
  def grow_unblocked_moves_in_dir(dx,dy)
    potential_moves = []
    
    new_pos = self.pos
    r, c = new_pos
    while r > 0 && r < 7 && c > 0 && c < 7
      r += dx
      c += dy
      potential_moves << [r, c]
    end
    potential_moves


  end

end


module Stepable

  

end




