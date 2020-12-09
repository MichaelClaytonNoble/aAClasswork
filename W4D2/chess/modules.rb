module Slideable
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
  end

  private
  def move_dirs
    diagonal_dirs + horizontal_dirs
  end

  private
  def grow_unblocked_moves_in_dir(dx,dy)
    potential_moves = []
    
    new_pos = self.pos
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
end

# moves.each { |e| p e}
# p grow_unblocked_moves_in_dir(1,0)

# module Stepable

  def moves
    pos = [4,4]
    move_diffs.map{ |e| [e[0] + pos[0], e[1] + pos[1]] }
    # move_diffs.map{ |e| [e[0] + self.pos[0], e[1] + self.pos[1]] }
  end

  private
  def move_diffs
    [[1,0], [2,1]]
  end

# end

p moves 




