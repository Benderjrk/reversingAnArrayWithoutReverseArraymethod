function reverseArrayInPlace(arr) {
  // go through the array with a loop' /2 to stop it half way. to not replace the numbers back
  for(var i = 0; i < arr.length / 2; i++) {
    //create a temp variable
    var tempVar = arr[i];
  //take the location of the arr at i and replace it in the array at the length - 1 - (location in the array)
    arr[i] = arr[arr.length - 1 - i ];
  // replace at the new location with the temp variable
    arr[arr.length - 1 - i ] = tempVar;

  }
  return arr;

}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

console.log(reverseArrayInPlace(['Just', 'going', 'batman', 'group', 5, 6]));
