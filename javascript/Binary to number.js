const binaryArrayToNumber = arr => {
    let num = 0;
    let index = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            num += Math.pow(2, index);
        }
        index--;
    }
    return num;
  };