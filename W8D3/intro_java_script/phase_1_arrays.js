//array uniq

Array.prototype.uniq = function (){
  let uniq_array = new Array;
  let uniq_hash = {};
  this.forEach( (el) => { 
    uniq_hash[el] ? '' : uniq_array.push(el);
    uniq_hash[el] = true;
  });
  return uniq_array;
}

// console.log([1,2,2,3,3,3].uniq());


Array.prototype.twoSum = function () { 
  pairs_array = new Array;

  let i = 0;
  let j = 1;
  for(let i=0; i<this.length-1; i++){
    
    for(let j=i+1; j<this.length; j++){

      if(this[i] + this[j] === 0){
        pairs_array.push( [i,j] );
      }
    }
  }
  return pairs_array;
}

// console.log([1,-1,23,3,-23,4,-3,44].twoSum());

Array.prototype.transpose = function (){

  let transposed_matrix = new Array;

  for(let i=0; i<this[0].length; i++){

    let new_row = new Array;
    for(let j=0; j<this.length; j++){
      new_row.push(this[j][i]);
    }
    transposed_matrix.push( new_row )
  }
  return transposed_matrix;
}

// console.log([ [1,2,3], [4,5,6] ].transpose());
