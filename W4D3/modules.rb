module Slideable

  HORIZONTAL_DIRS = [ [0,-1], [1,0], [0,1], [-1,0] ]
  DIAGONAL_DIRS = [ [-1,-1], [1,-1], [-1,1], [1,1] ]

  def moves
    r, c = @pos
    move_dirs.map{|dir| grow_unblocked_moves_in_dir(dir[0],dir[1])}
  end

  private
  #to be overwritten by subclasses
  def move_dirs
  end

  def grow_unblocked_moves_in_dir(dx, dy)
    path = []
    r,c= @pos

    until Board.out_of_bounds?([r,c])
      path << [r,c]
      r+=dx
      c+=dy
    end
    path
  end

end

module Stepable

  

end