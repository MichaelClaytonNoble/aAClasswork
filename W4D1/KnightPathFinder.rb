require_relative "PolyTreeNode.rb"
class KnightPathFinder


  def self.valid_moves(pos)

    valid_moves_a = []
    valid_moves_a << [pos[0]+1, pos[1]+2]
    valid_moves_a << [pos[0]+1, pos[1]-2]
    valid_moves_a << [pos[0]-1, pos[1]+2]
    valid_moves_a << [pos[0]-1, pos[1]-2]

    valid_moves_a << [pos[0]+2, pos[1]+1]
    valid_moves_a << [pos[0]+2, pos[1]-1]
    valid_moves_a << [pos[0]-2, pos[1]+1]
    valid_moves_a << [pos[0]-2, pos[1]-1]

    #don1t let it move off of the board. consider -1, 7
    valid_moves_a.select{|move| move.all?{|pos| pos >= 0 && pos < 8}}
  end


  def initialize(start_position)
    @start_position = start_position #an array [ #, #]
    @root_node = PolyTreeNode.new(start_position)
    build_move_tree
    @considered_positions = [start_position] #prevents infinitely moving between the same two positions
  end


  #root of tree: knights starting position
  #children: next available and direct moves possible
  def build_move_tree
    
    #check if valid move
    valid_moves_a = KnightPathFinder.valid_moves(@root_node.value)

    #if valid move check if move is in considered_positions
    new_moves = valid_moves_a.select{|move| !@considered_positions.include?(move)}

    #add to @considered_positions
    @conisidered_positions + new_moves

    new_moves
  end

  #builds a tree representing all possible paths from @root_node
  #bfs
  def new_move_positions(pos)

  end

  def kpf(end_position)

  end

  def inspect
    @start_position.to_s
    @considered_positions.to_s
  end


end 

k = KnightPathFinder.new(0,0)

p k