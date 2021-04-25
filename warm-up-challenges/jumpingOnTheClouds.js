function jumpingOnClouds(c) {
  let position = 0;
  let stepCount = 0;

  while(c[position+1] != undefined) {
    if(c[position+2] != 1) {
      position += 2;
      stepCount++;
    }
    else if(c[position+1] != 1) {
      position += 1;
      stepCount++;
    }
  }
  return stepCount;
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0]));
