Array.prototype.uniq = function(){

  let uniq_array = [];
  let uniq_hash = {};
  for( let i = 0; i < this.length; i++){
    if (!uniq_hash[this[i]]) {
      uniq_hash[this[i]]=true;
      uniq_array.push(this[i]);
    }
  }
  return uniq_array;
}

Array.prototype.twoSum = function(){

  let pair_array = [];
  let seen_hash = {}; 

  for(ele of this){
    if (seen_hash)
  }


}