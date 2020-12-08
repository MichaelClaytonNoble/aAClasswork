require "byebug"
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
    @move_tree = []
    build_move_tree
    
  end

 
  #root of tree: knights starting position
  #children: next available and direct moves possible
  def build_move_tree

    _q = [@root_node]

    until _q.empty? do
      pos_node = _q.shift

      pos_node.children = new_move_positions(pos_node.value).map{|pos| PolyTreeNode.new(pos,pos_node)}
      pos_node.children.each{|child| _q << child} 

      @move_tree << pos_node
    end
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

  def trace_path_back(end_node)
    path = []
    current_node = end_node
    until current_node.parent.nil?
      path << current_node
      current_node = current_node.parent
    end
  end
 def find_path(end_pos)
    @@visited = []

    end_node = bfs(@move_tree.first, end_pos)
    # dfs(@move_tree.first, end_pos)
    trace_path_back(end_node)
  end

  def dfs(current_node, end_pos)
    
    return current_node if current_node.value == end_pos
    return current_node if @@visited.include?(current_node)

    @@visited << current_node

    return current_node if current_node.children.empty?
    current_node.children.each do |next_node|

      result = dfs(next_node, end_pos)
      return result if result.value == end_pos unless result == nil
    end
    nil
  end


  def bfs(current_node, end_pos)
    
    _q = [current_node]
  
    until _q.empty?

      next_node = _q.shift
      return next_node if next_node.value == end_pos 
      return next_node if @@visited.include?(next_node)
      _q += next_node.children
      @@visited << next_node
    end
    
    nil
  end

  def print_move_tree

    @move_tree.each do |t|
      p "node: " + t.value.to_s
      p "children: " + t.children.to_s
      p
      p @move_tree.length

    end
  end

 def inspect
    @start_position
    @considered_positions
  end

end 

k = KnightPathFinder.new([0,0])
# k.print_move_tree
p k.find_path([1,3])