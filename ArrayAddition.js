function ArrayAddition(arr){
	arr.sort(function(a,b){return a-b;}); 
	
	var max = arr.pop(),  	//define target value
		product = [max],	//array of possible subtractions from target value
		temp = 0,
		len = arr.length,
		test = false;
	
	for(var i=0; i<len && test == false; i++){
		temp = arr.pop();	//take largest value and subtract from all values in product[]
		product = product.concat(product.map(function(value,index){
			if(value-temp === 0){test=true};	
			return value - temp;
		}));
		
	}
	return test;
}

ArrayAddition(readline());