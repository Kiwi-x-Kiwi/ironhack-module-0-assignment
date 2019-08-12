function XO(string) {

  let balance = 0;

  for(let i = 0; i< string.length; i++){
    switch(string[i]){
      case "x":
      case "X":
        balance++;
        break;
      case "o":
      case "O":
        balance--;
        break;
      default:
        break;
    }
  }
  
  return balance == 0 ? true : false;
}