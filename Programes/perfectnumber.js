var perfect = function(n){
	var s;
	for (var i = 1; i < n; i++)
		if(n % i == 0){
			s += i;
		}
	if (s === n){
		console.log(s +" is perfect number");
	} else {
		console.log(s +" is not perfect number");		
	}
}