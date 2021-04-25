function hourglassSum(arr) {
  let sum = 0
  let length = 0;

  for(let width = 0; width < arr.length; width++) {
    sum += (arr[length][width] + arr[length][width] + arr[length][width] +
            arr[length][width] + arr[length][width] + arr[length][width]);
  }
}

console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]));
