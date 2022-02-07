function countPositivesSumNegatives(input) {
    let positive_count = 0;
    let negative_count = 0;
    
    if(input == null) return [];
    let condition = true;
    for(let i=0;i<input.length;i++){
        if(input[i]!=0){
            condition = false;
        }
    }
  
    if(condition){
        return [];
    }
    for (i = 0; i < input.length; i++) {
      if (input[i] === 0) {
          continue;
          }
      else if (input[i] > 0) {
          positive_count++;
      }
      else {
          negative_count += input[i];
      }
    }
   
    return [positive_count, negative_count];
  }
  