
def my_uniq(arr)
  arr.uniq
end 

def two_sum(arr)
  pairs = []
  i = 0
  arr.each_with_index do |ei, i|
    arr.each_with_index do |ej, j|
      if j > i
         pairs << [i,j] if ei+ej == 0
      end
    end
  end
  pairs
end

def my_transpose(arr)
  arr.transpose
end

def stock_picker(arr)
  i=0
  j=1
  pair = [0,0]
  arr.each_with_index do |ei, i|
    arr.each_with_index do |ej, j|
      pair = [i,j] if (  (ei-ej).abs > arr[pair[0]][pair[1]] && j > i)
    end
  end
  pair
end