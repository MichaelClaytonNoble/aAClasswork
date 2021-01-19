

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

let x = [1,2,4,[3,4,4,[6]],[4]];
console.log(x);






