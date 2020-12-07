require_relative "PolyTreeNode.rb"
class KnightPathFinder

  attr_reader :considered_positions

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
    @considered_positions = [@start_position] #prevents infinitely moving between the same two positions
    @root_node = PolyTreeNode.new(start_position)
    build_move_tree
  end


  #root of tree: knights starting position
  #children: next available and direct moves possible
  def build_move_tree
    
  end

  #builds a tree representing all possible paths from @root_node
  #bfs

  def new_move_positions(pos)

    #check if valid move
    valid_moves_a = KnightPathFinder.valid_moves(pos)

    #if valid move check if move is in considered_positions
    new_moves = valid_moves_a.select{|move| !@considered_positions.include?(move)}

    #add to @considered_positions
    @considered_positions += new_moves

    new_moves
  end

  def kpf(end_position)

  end

  def inspect
    @start_position.to_s
    @considered_positions.to_s
  end


end 

k = KnightPathFinder.new([3,4])

p k.new_move_positions([3,4])