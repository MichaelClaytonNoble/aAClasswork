function sum(...args){
  return args.reduce( (acc, el) => acc+el);
}

// console.log(sum(3,4,4,4,3));

Function.prototype.myBind = function(context){

  let fn = this;
  let args = [...arguments].slice(1);
  return  function(){
    return fn.apply(context, args.concat([...arguments]));
  ;}
}

// const pavlovSays = markov.says.myBind(pavlov)
// pavlovSays(someArgs);
//markov.says.myBind(pavlov)

Function.prototype.myBind2 = function(...args){
  const fn = this;
  return (function(...myArgs){
    fn.apply(args[0], args.concat(myArgs));
  });
}


function curriedSum(num){
  let numbers = new Array;

  function _curriedSum(number){
    numbers.push(number);
    if(numbers.length === num){
      return numbers.reduce( (acc, n) => acc+n );
    }
    else{
      return _curriedSum; //what is this doing ? 
    }
  };
  return _curriedSum;
}

// const total = curriedSum(4);
// let x = total(5)(30)(20)(1); 
// console.log(x);

Function.prototype.curry = function(numArgs){
  let args = new Array;
  const fn = this;
  let _this_curry = function(arg){
    args.push(arg);
    if(args.length === numArgs){
      fn(...args);
    }
    else{
      return _this_curry; //what is this doing ? 
    }
  };
  return _this_curry;
}

