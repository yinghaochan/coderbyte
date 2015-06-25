/*
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
*/

function ArrayAddition(arr){
	arr.sort(function(a,b){return a-b;}); 
	
	var max = arr.pop(), product = [max], temp = 0, len = arr.length, test = false;
	
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