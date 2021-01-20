

function range(start, end){
  if(start > end){
    return [];
  } 

  let next = range(start+1, end); 
  let result = [start]
  return result.concat(next);
}

// let x = range(1,4);
// console.log(x);

function sumRec(arr){
  if (arr.length === 0 ) { 
    return 0;
  } 
  return arr[0] + sumRec(arr.slice(1));
}

// let x = sumRec([1,2,3,4]);
// console.log(x);

function exponent_1(base, exp){
  if (exp === 0 ){
    return 1;
  }
  if (exp === 1){
    return base;
  }
  return base * exponent_1(base, exp-1);
}

// let x = exponent_1( 3, 3);
// console.log(x); 


function exponent_2(base, exp){

  if (exp === 0 ){
    return 1;
  }
  if (exp === 1){
    return base;
  }
  if (exp % 2 == 0){
    let even = (exponent_2(base, Math.trunc(exp / 2)) ** 2);
    console.log(`even : ${even}`);
    return even;
  }
  else {
    let odd = base * (  Math.trunc((exponent_2(base, exp-1) / 2)) ** 2 )
    console.log(`odd : ${odd}`); 
    return odd;
  }
}

// let x = exponent_2(3, 3);
// console.log(x); 

//[0,1,1,2,3,5,8]
function fibonacci(n){
  if(n === 1){
    return [0];
  }
  if( n=== 2){
    return [0,1]
  }

  let next = fibonacci(n-1);
  console.log(`next : ${next[next.length-1]} and ${next[next.length-2]}`);

  return next.concat([next[next.length-1] + next[next.length-2]]);
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(7));


function deepDup(arr){

  return arr.map( (el)=> {
    if ( el instanceof Array){
      deepDup(el);
    }
    else {
      el;
    }
  });
}

// let x = [1,2,4,[3,4,4,[6]],[4]];
// console.log(x);



function bsearch(arr, target){
  if(arr.length === 0){
    return -1;
  }

  let mid = Math.trunc(arr.length/2);
  let mid_el = arr[mid];

  if (mid_el === target){

    return mid;
  }
  if (mid_el > target){
    let left = arr.slice(0,mid);
    return bsearch(left, target);
  }
  else { //mid_el > target
    let right = arr.slice(mid+1);
    let rightSearch = bsearch(right, target);
    if( rightSearch === -1){
      return -1;
    }
    else{
      return mid+1+rightSearch;
    }
  }
}

// let array = [1,3,4,5,8,9,22,42,122];
// let x = bsearch(array, 42);
// let x1= bsearch(array, 3);
// let x2= bsearch(array, 8)
// let x3= bsearch(array,1);
// let x4= bsearch(array, 122);

// console.log (`42 is at index ${x} in [${array}]`);
// console.log (`3 is at index ${x1} in [${array}]`);
// console.log (`8 is at index ${x2} in [${array}]`);
// console.log (`1 is at index ${x3} in [${array}]`);
// console.log (`122 is at index ${x4} in [${array}]`);



function mergeSort(arr){

  if (arr.length < 2){
    return arr;
  }
  let mid = Math.trunc(arr.length/2);

  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  let left_sorted = mergeSort(left);
  let right_sorted = mergeSort(right);
  
  console.log(`left: ${left_sorted}, right: ${right_sorted}`);
  return merge(left_sorted, right_sorted);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]){
      merged.push(left.shift());
    }
    else{ 
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
}
// [4, 90, 78, 67, 56, 4]                  [73, 23, 1, 2, 4, 0]
// [4, 90, 78] |[67, 56, 4]                  [73, 23, 1, 2]  [4, 0]
// [4, 90] [78] |[67, 56] [4]                [73, 23, 1] [2]    
// [4] [90] 


// let unsorted = [4,90,78,67,56,4,73,23,1,2,4,0];
// let sorted = mergeSort(unsorted);

// console.log(sorted);

function subsets(arr){

  
}










