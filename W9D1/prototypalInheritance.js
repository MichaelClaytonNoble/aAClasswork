

Function.prototype.inherits = function(parent){
  let child = this;
  var Surrogate = function(){  };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

// function MovingObject() { }

// function Ship() { }
// Ship.inherits(MovingObject);

// function Asteroid() { }
// Asteroid.inherits(MovingObject);

function MovingObject() { 
}

function Ship() { }

function Asteroid() { }



Asteroid.prototype = Object.create(MovingObject.prototype);
Ship.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;
Ship.prototype.constructor = Ship;

let mo = new MovingObject;
let s = new Ship;
let a = new Asteroid;

//define attributes on moving objects that ship and astraid can use 
MovingObject.prototype.height = 10;

console.log(s.height);
console.log(a.height);

//define a method on asteroids is not on ship

Asteroid.prototype.disintegrate = function (){
  return "POOF";
}
console.log(a.disintegrate());
// console.log(s.disintegrate());

//adding to ship / or asteroids prototypes shoudn't change moving objects
// mo.disintegrate();

//the ship and asteroid prototypes should not be instances of moving object 
console.log(s instanceof MovingObject);
console.log(a instanceof MovingObject);





