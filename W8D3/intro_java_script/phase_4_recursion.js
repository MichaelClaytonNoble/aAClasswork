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