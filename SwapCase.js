// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str) { 
	return [].reduce.call(str,function(total, v){
		return total + (v == v.toLowerCase()? v.toUpperCase() : v.toLowerCase());
	},"");
}
   
SwapCase(readline());      

	












                            
                            
                            
  