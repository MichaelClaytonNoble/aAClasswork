module Slideable

  HORIZONTAL_DIRS = [ [0,-1], [1,0], [0,1], [-1,0] ]
  DIAGONAL_DIRS = [ [-1,-1], [1,-1], [-1,1], [1,1] ]

  def moves
    r, c = @pos
    paths = move_dirs.map{|dir| grow_unblocked_moves_in_dir(dir[0],dir[1])}
    paths.map!{|path| path.select do |pos|
      self.valid_pos?(pos)
    end}

    valid_paths = []
    paths.each do |path|

      valid_path = []
      path.each do |pos|
        
        break unless self.valid_pos?(pos)
        valid_path << pos
      end
      valid_paths << valid_path
    end
          
    valid_paths
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