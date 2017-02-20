var power = function  (b, e) {
	// body... 
	var r = b;
	for(var i = 1; i < e; i++){
		r=r*b
	}
	return r;
}