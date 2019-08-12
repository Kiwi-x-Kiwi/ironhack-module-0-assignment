function accum(s) {

  const copyOfS = s.toLowerCase();
	let string = "";
  
  for(let i = 0; i< copyOfS.length; i++){
    string += copyOfS[i].toUpperCase();
    
    for(let j = 0; j< i; j++){
      string += copyOfS[i];
    }
    
    if(i < copyOfS.length -1){
      string += "-";
    }
  }
  
  return string;
}