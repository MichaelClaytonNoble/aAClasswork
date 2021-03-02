
function arr(nums){

  //initializing a 2d array in javascript using apply.
  let arr = Array.apply(null, nums).map( x=> Array.apply(null, new Array(x)).map(x=>true));

  let it = 0; 
  //if we encounter a null on our journey. we overwrite with false 
  //otherwise true.

  return  arr;
}

console.log(arr([3, 1, 0, 5, 10]));

