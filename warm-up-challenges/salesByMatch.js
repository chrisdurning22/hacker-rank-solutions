function sockMerchant(n, ar) {
    let pairs = 0;
    let map = new Map();

    for(let i = 0; i < n; i++) {
        if(map.get(ar[i]) === undefined){
            map.set(ar[i], 1);
        } else {
            map.set(ar[i], map.get(ar[i]) + 1);
        }
    }

    for (const [key, value] of map.entries()) {
      pairs += Math.floor(value / 2);
    }

    return pairs;
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]));
