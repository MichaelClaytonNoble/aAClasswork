
Array.prototype.myEach = function(cb){

  this.forEach( (el)=>{
    cb(el);
  });
}

// let x = new Array;
// x = [1,2,3,4];
// console.log(x.__proto__);

// x.myEach( (el)=>{console.log(el);});

Array.prototype.myMap = function(cb){
  
  let mapped = new Array;
  this.forEach( (el)=>{
    
    mapped.push(cb(el));
    
  });
  return mapped;
}

// let y = new Array;
// let y = ["hello", "my", "name", "is", "mike"].myMap( (el)=>el.toUpperCase());
// console.log(y);
// console.log(y.__proto__);
// console.log(y.myMap( (el)=> el.toUpperCase()));


Array.prototype.myReduce = function(cb, initialValue){

  let i=0;
  let acc;
  if (!initialValue){
    acc = this[0];
    i = 1;
  }
  else {
    acc = initialValue;
  }

  this.slice(i).forEach( (el) =>{
    acc = cb(acc, el)
  });

  return acc;
}

// let x = [1,2,3].myReduce( (acc,el)=>{
//   return acc+el;
// });

// console.log(x);










