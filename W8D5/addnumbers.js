

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft === 0){
    completionCallback(sum)
    ///////
    return;
  }else{
    let number;
    reader.question("Enter a number: ", function (input){
      number = parseInt(input);
      console.log(number);
      sum += number;
      console.log(sum);
      
      // reader.close();
      addNumbers(sum, numsLeft-1, completionCallback);
    })
  }
}

addNumbers(0, 3, sum => { console.log(`Total Sum: ${sum}`); reader.close(); }); 


