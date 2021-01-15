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

innerBubbleSortLoop([1, 0], 0, false, function (x) {
  console.log(x);
  reader.close();
});
/* If i < arr.length - 1, it should call askIfGreaterThan, asking the user to compare arr[i] and arr[i + 1].
For a callback to askIfGreaterThan, pass in an anonymous helper function. This should:
Take in a single argument: isGreaterThan; askIfGreaterThan will pass either true or false as this argument.
Perform a swap of elements in the array if necessary.
Call innerBubbleSortLoop again, this time for i + 1. It should pass madeAnySwaps. Update madeAnySwaps if you did swap.
Call outerBubbleSortLoop if i == (arr.length - 1). It should receive madeAnySwaps as an argument.
 */

// askIfGreaterThan(5, 1, (x)=>{console.log(x)});

// function absurdBubbleSort(arr, sortCompletionCallback) {}
