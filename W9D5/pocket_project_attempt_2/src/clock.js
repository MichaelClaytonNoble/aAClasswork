
class Clock {
  
  constructor(clockElement){
    this.clockElement = clockElement;
  }

  htmlGenerator(string, htmlElement){

    let p = document.createElement("p");
    p.textContent = string; 
    htmlElement.append(p);
  };
}

let clockElement = document.querySelector("#clock"); 
let clock = new Clock(clockElement);

