Array.prototype.bubbleSort = function(){
  let sorted_array = this;

  let bubble = function(sorted){
    let i = 0;
    while ( i < sorted_array.length-1){
      if( sorted_array[i] > sorted_array[i+1]){
        [sorted_array[i], sorted_array[i+1]] = [sorted_array[i+1], sorted_array[i]];
        sorted = false
      }
      i+=1;
    }
    return sorted;
  }

  let done = bubble(true);
  while( done===false) { 
    done = bubble(true);
  }
  return sorted_array;
}

// let x = [1,9,8,4,6].bubbleSort();
// console.log(x);

String.prototype.subStrings = function(){
  let subString_array = new Array;

  let str = this;
  let getSubStrings = function(){
    for(let i = 0 ; i<str.length; i++){
      for (let j=i; j<str.length; j++){
        subString_array.push( str.slice(i,j+1));
      }
    }
  }
  getSubStrings();
  return subString_array;
}
// let x = "hello".subStrings();
// console.log(x);

