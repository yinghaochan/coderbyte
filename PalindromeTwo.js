function PalindromeTwo(str) { 
  
  var arr = [];
  
  str.split("").forEach(function(x){
	  if(x != x.toLowerCase() || x != x.toUpperCase() ){arr.push(x.toLowerCase());}
  });
	  
  return arr.toString() == arr.reverse().toString(); 
         
}
   
PalindromeTwo(readline());           
