function repeatedString(s, n) {
  let repeatedStringsSum = 0;
  let sumOfAInOneString = 0;

  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i) === "a"){
      sumOfAInOneString++;
    }
  }

  let divides = Math.floor(n / s.length);
  repeatedStringsSum = divides * sumOfAInOneString;

  let excess = n % s.length;
  for(let i = 0; i < excess; i++) {
    if(s.charAt(i) === "a"){
      repeatedStringsSum++;
    }
  }
  return repeatedStringsSum;
}

console.log(repeatedString("abcac", 10));
