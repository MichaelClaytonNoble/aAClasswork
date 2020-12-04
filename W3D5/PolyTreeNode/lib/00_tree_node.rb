class PolyTreeNode

  attr_accessor :parent, :children, :value

  def initialize(value)
    @value = value
    @parent = nil 
    @children = []
  end

  def parent=(new_parent)
    if new_parent
      @parent.children.delete(self) unless !@parent
      @parent = new_parent
      @parent.children << self
    else
      @parent = nil
    end
  end

end