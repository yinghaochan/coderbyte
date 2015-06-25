// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr) {
	var mode, max = 0, count = 0, sum = arr[0];
	arr.sort();
	for (var i = 1; i < arr.length; i++) {
		sum += arr[i];
		arr[i] == arr[i - 1] ? count++ : count = 0;
		if (count > max) {
			max = count;
			mode = arr[i];
		}
	}
	return mode == sum/arr.length ? 1 : 0;

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());                            















                            
                            
                            
