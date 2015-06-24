/*
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/


function LetterCountI(str) {
	var arr = str.toLowerCase().split(" "), longest = arr[0], max = 0, count = 0;
	
	for (var i = 0; i < arr.length; i++) {
		var letters = arr[i].split("").sort();  //"here" becomes [e,e,h,r]
		for (var y = 1; y < letters.length; y++) {
			letters[y] == letters[y - 1] ? count++ : count = 0;   //if adjacent letters are equal, count++ else, reset.
			if (count > max) {
				max = count;					//if there's a new record, note that word down.
				longest = arr[i];
			}
		}
	}


return max? longest: -1; 
}

LetterCountI(readline());