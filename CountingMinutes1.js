/*
Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
*/

function CountingMinutesI(str) {
	var arr = str.split("-"), count = 0;
	arr[0] = arr[0].split(":");
	arr[1] = arr[1].split(":");
	if (str.includes('am') && str.includes('pm')) { count += 12; }
	   count += parseInt(arr[1][0]) - parseInt(arr[0][0]);
	   count *= 60;
	   count += parseInt(arr[1][1]) - parseInt(arr[0][1]);

	   return count > 0 ? count : count + (60 * 24);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           
