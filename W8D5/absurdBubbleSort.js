const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2} ?`, function (answer) {
    if (answer === "yes") {
      callback(true);
    } else if (answer === "no") {
      callback(false);
    }
  });
}
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    let swap = false;
    askIfGreaterThan(arr[i], arr[i + 1], function (x) {
      swap = x;
      if (swap) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    console.log(arr);
    outerBubbleSortLoop(madeAnySwaps);
  }
}
function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else {
    //`sortCompletionCallback`.
      sortCompletionCallback(arr);
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// sorted = false;
// while (!sorted){

//   sort(){
//     sorted = true
//     do we need to bubble
//     sorted = false if we bubbled 
//   }
// }