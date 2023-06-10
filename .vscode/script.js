function truncateString(str, num) {
    let ending="...";
    let truncated = str.substring(0, num);
    if( str.length>num){
      truncated+=ending; 
  
    }
    return truncated;
  }
  
  let result=truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(result);