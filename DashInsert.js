// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number

function DashInsert(str) { 
	for(var i = str.length; i>0;i--){
      if(str[i]%2 && str[i-1]%2){
        str = str.slice(0,i) + "-" + str.slice(i,str.length);
      }
    }
  return str; 
         
}

DashInsert(readline()); 