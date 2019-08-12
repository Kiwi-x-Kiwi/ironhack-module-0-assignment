function sumTwoSmallestNumbers(numbers) {  
  let smallestMin = numbers[0], secondSmallestMin = numbers[1];
  
  if(smallestMin > secondSmallestMin){
    smallestMin = numbers[1];
    secondSmallestMin = numbers[0];
  }
  
  for(let i = 2; i< numbers.length; i++){
    if(numbers[i] < secondSmallestMin){
      if(numbers[i] < smallestMin){
        secondSmallestMin = smallestMin;
        smallestMin = numbers[i];
      }
      else{
        secondSmallestMin = numbers[i];
      }
    }
  }
  
  return secondSmallestMin + smallestMin; 
}