class MaxIntSet
  attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    if is_valid?(num)
      raise 'Out of bounds' 
    else
      @store[num] = true
    end
  end
  
  #verify that num is in range? 
  def include?(num)
    @store[num] if validate!(num)
  end

  #maybe we should check num to make sure
  #it is not out of bounds
  def remove(num)
    @store[num] = false
  end


  private

  def is_valid?(num)
    num < 0 || num > @max
  end

  #ask TA what this is for. 
  def validate!(num)
    num.is_a?(Integer)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % num_buckets] << num
  end

  def remove(num)
  end

  def include?(num)
    self[num].each {|a| return true if a == num}
    false
  end

  private
  def [](num)   #syntactic sugar not working...
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def []=(num, num1)   #syntactic sugar not working...
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets] << num1
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
  end

  def remove(num)
  end

  def include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
