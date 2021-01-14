function range(start, end){
  if(start > end){
    return [];
  } else { 
    return [start].concat(range(start+1, end))
  }
}

function sumRec(arr) {
  if (arr.length === 0 ){
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1))
  }
}

function exponent_a(base, exp){
  if (exp === 0){
    return 1;
  }else {
    return base * exponent_a(base, exp-1);
  }
}

function exponent_b(base, exp){
  if (exp === 0 ){
    return 1;
  } else if (base%2 === 0) {

    let root = exponent_b(base, exp/2);
    return root * root; 
  } else { 

      let root = exponent_b(base, exp/2 )
      return base * root * root;
  }
}

function bsearch(arr, target){

  if (arr.length == 0){
    return -1;
  }
  else{
    let mid = Math.trunc(arr.length/2);
    
    if (arr[mid] === target){
      return mid;
    }
    if (arr[mid] > target){
        return bsearch(arr.slice(0,mid), target);
    } 
    else {
      let right = bsearch(arr.slice(mid+1,arr.length), target);
      if(right === -1){
        return -1;
      }
      return mid + 1 + right; 
    }
  }
}


function mergesort(arr){
  let mid = Math.trunc(arr.length/2)

  if(arr.length === 0 ){
    return [];
  }
  let left = arr.slice(0,mid);
  let right = arr.slice(mid, arr.length);

  let leftSorted = mergesort(left);
  let rightSorted = mergesort(right);

  return merge(leftSorted, rightSorted);
}