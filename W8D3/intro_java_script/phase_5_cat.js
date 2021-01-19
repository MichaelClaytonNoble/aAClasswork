
//constructor function 
function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () { 
  return `${this.owner} loves ${this.name}!`;
}

Cat.prototype.meow = function () { 
  return `MEEOWWWWWW!!!`;
}
let c = new Cat("Barbie", "Mako");

c.meow = function(){
  return `${this.name} mews!!!`
}

let kitty = new Cat("Kitty", "Mako"); 

console.log(c.cuteStatement());
console.log(c.meow());

console.log(kitty.meow()); 
