function countingValleys(steps, path) {
    let levelValue = 0;
    let valleyCount = 0;
    
    for(let i = 0; i < steps; i++) {
      if(path[i] === "D") {
        levelValue -= 1;
      }
      else if(path[i] === "U") {
        levelValue += 1;
        if(levelValue == 0){
          valleyCount++;
        }
      }
    }
    return valleyCount;
}

console.log(countingValleys(8, ["U","D","D","D","U","D","U","U"]));
