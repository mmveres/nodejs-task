// Write an `add()` function that will take any number of parameters in the next manner:
// ```js
//    console.log(add(2)(5)(7)(1)(6)(5)(10)()); // 36
//    ```

function add(num) {
  let sum = num;
  return addNext;

  function addNext(num) {
    if (num === undefined) {
      return sum;
    }
    sum += num;
    return addNext;
  }
}

console.log(add(2)(5)(7)(1)(6)(5)(10)());